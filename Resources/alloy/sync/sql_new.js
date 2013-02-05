function SQLiteMigrateDB(config) {
    this.dbname = config.adapter.db_name;
    this.table = config.adapter.collection_name;
    this.idAttribute = config.adapter.idAttribute;
    this.column = function(name) {
        var parts = name.split(/\s+/), type = parts[0];
        switch (type.toLowerCase()) {
          case "string":
          case "varchar":
          case "date":
          case "datetime":
            Ti.API.warn("\"" + type + "\" is not a valid sqlite field, using TEXT instead");
          case "text":
            type = "TEXT";
            break;
          case "int":
          case "tinyint":
          case "smallint":
          case "bigint":
          case "boolean":
            Ti.API.warn("\"" + type + "\" is not a valid sqlite field, using INTEGER instead");
          case "integer":
            type = "INTEGER";
            break;
          case "double":
          case "float":
          case "decimal":
          case "number":
            Ti.API.warn("\"" + name + "\" is not a valid sqlite field, using REAL instead");
          case "real":
            type = "REAL";
            break;
          case "blob":
            type = "BLOB";
            break;
          case "null":
            type = "NULL";
            break;
          default:
            type = "TEXT";
        }
        parts[0] = type;
        return parts.join(" ");
    };
    this.createTable = function(config) {
        var columns = [], found = !1;
        for (var k in config.columns) {
            k === this.idAttribute && (found = !0);
            columns.push(k + " " + this.column(config.columns[k]));
        }
        !found && this.idAttribute === ALLOY_ID_DEFAULT && columns.push(ALLOY_ID_DEFAULT + " TEXT");
        var sql = "CREATE TABLE IF NOT EXISTS " + this.table + " ( " + columns.join(",") + ")", db = Ti.Database.open(this.dbname);
        db.execute(sql);
        db.close();
    };
    this.dropTable = function(config) {
        var db = Ti.Database.open(this.dbname);
        db.execute("DROP TABLE IF EXISTS " + this.table);
        db.close();
    };
    this.insertRow = function(columnValues) {
        var columns = [], values = [], qs = [], found = !1;
        for (var key in columnValues) {
            key === this.idAttribute && (found = !0);
            columns.push(key);
            values.push(columnValues[key]);
            qs.push("?");
        }
        if (!found && this.idAttribute === ALLOY_ID_DEFAULT) {
            columns.push(this.idAttribute);
            values.push(util.guid());
            qs.push("?");
        }
        var db = Ti.Database.open(this.dbname);
        db.execute("INSERT INTO " + this.table + " (" + columns.join(",") + ") VALUES (" + qs.join(",") + ");", values);
        db.close();
    };
    this.deleteRow = function(columns) {
        var sql = "DELETE FROM " + this.table, keys = _.keys(columns), len = keys.length, conditions = [], values = [];
        len && (sql += " WHERE ");
        for (var i = 0; i < len; i++) {
            conditions.push(keys[i] + " = ?");
            values.push(columns[keys[i]]);
        }
        sql += conditions.join(" AND ");
        var db = Ti.Database.open(this.dbname);
        db.execute(sql, values);
        db.close();
    };
}

function Sync(model, method, opts) {
    var table = model.config.adapter.collection_name, columns = model.config.columns, dbName = model.config.adapter.db_name || ALLOY_DB_DEFAULT, resp = null, db;
    switch (method) {
      case "create":
        resp = function() {
            if (!model.id) {
                model.idAttribute === ALLOY_ID_DEFAULT ? model.id = util.guid() : model.id = null;
                model.set(model.idAttribute, model.id);
            }
            var names = [], values = [], q = [];
            for (var k in columns) {
                names.push(k);
                values.push(model.get(k));
                q.push("?");
            }
            var sql = "INSERT INTO " + table + " (" + names.join(",") + ") VALUES (" + q.join(",") + ");";
            db = Ti.Database.open(dbName);
            db.execute(sql, values);
            db.close();
            return model.toJSON();
        }();
        break;
      case "read":
        var sql = opts.query || "SELECT * FROM " + table;
        db = Ti.Database.open(dbName);
        var rs = db.execute(sql), len = 0, values = [];
        while (rs.isValidRow()) {
            var o = {}, fc = 0;
            fc = _.isFunction(rs.fieldCount) ? rs.fieldCount() : rs.fieldCount;
            _.times(fc, function(c) {
                var fn = rs.fieldName(c);
                o[fn] = rs.fieldByName(fn);
            });
            values.push(o);
            len++;
            rs.next();
        }
        rs.close();
        db.close();
        model.length = len;
        len === 1 ? resp = values[0] : resp = values;
        break;
      case "update":
        var names = [], values = [], q = [];
        for (var k in columns) {
            names.push(k + "=?");
            values.push(model.get(k));
            q.push("?");
        }
        var sql = "UPDATE " + table + " SET " + names.join(",") + " WHERE " + model.idAttribute + "=?";
        values.push(model.id);
        db = Ti.Database.open(dbName);
        db.execute(sql, values);
        db.close();
        resp = model.toJSON();
        break;
      case "delete":
        var sql = "DELETE FROM " + table + " WHERE " + model.idAttribute + "=?";
        db = Ti.Database.open(dbName);
        db.execute(sql, model.id);
        db.close();
        model.id = null;
        resp = model.toJSON();
    }
    if (resp) {
        _.isFunction(opts.success) && opts.success(resp);
        method === "read" && model.trigger("fetch");
    } else _.isFunction(opts.error) && opts.error("Record not found");
}

function GetMigrationFor(dbname, table) {
    var db = Ti.Database.open(dbname);
    db.execute("CREATE TABLE IF NOT EXISTS migrations (latest TEXT, model TEXT)");
    var rs = db.execute("SELECT latest FROM migrations where model = ?", table);
    if (rs.isValidRow()) {
        var mid = rs.field(0);
        rs.close();
        db.close();
        return mid + "";
    }
    db.close();
    return null;
}

function Migrate(Model) {
    var migrations = Model.migrations || [], lastMigration = {};
    migrations.length && migrations[migrations.length - 1](lastMigration);
    var config = Model.prototype.config;
    config.adapter.db_name || (config.adapter.db_name = ALLOY_DB_DEFAULT);
    var sqliteMigrationDb = new SQLiteMigrateDB(config), targetNumber = typeof config.adapter.migration == "undefined" || config.adapter.migration === null ? lastMigration.id : config.adapter.migration;
    if (typeof targetNumber == "undefined" || targetNumber === null) {
        sqliteMigrationDb.createTable(config);
        return;
    }
    targetNumber += "";
    var currentNumber = GetMigrationFor(config.adapter.db_name, config.adapter.collection_name), direction;
    if (currentNumber === targetNumber) return;
    if (currentNumber && currentNumber > targetNumber) {
        direction = 0;
        migrations.reverse();
    } else direction = 1;
    db = Ti.Database.open(config.adapter.db_name);
    db.execute("BEGIN;");
    if (migrations.length) for (var i = 0; i < migrations.length; i++) {
        var migration = migrations[i], context = {};
        migration(context);
        if (direction && context.id > targetNumber) break;
        if (!direction && context.id <= targetNumber) break;
        var funcName = direction ? "up" : "down";
        _.isFunction(context[funcName]) && context[funcName](sqliteMigrationDb, db);
    } else sqliteMigrationDb.createTable(config);
    db.execute("DELETE FROM migrations where model = ?", config.adapter.collection_name);
    db.execute("INSERT INTO migrations VALUES (?,?)", targetNumber, config.adapter.collection_name);
    db.execute("COMMIT;");
    db.close();
}

function installDatabase(config) {
    var dbFile = config.adapter.db_file, table = config.adapter.collection_name, rx = /^([\/]{0,1})([^\/]+)\.[^\/]+$/, match = dbFile.match(rx);
    if (match === null) throw "Invalid sql database filename \"" + dbFile + "\"";
    var dbName = config.adapter.db_name = match[2];
    Ti.API.debug("Installing sql database \"" + dbFile + "\" with name \"" + dbName + "\"");
    var db = Ti.Database.install(dbFile, dbName), rs = db.execute("pragma table_info(\"" + table + "\");"), columns = {};
    while (rs.isValidRow()) {
        var cName = rs.fieldByName("name"), cType = rs.fieldByName("type");
        columns[cName] = cType;
        cName === ALLOY_ID_DEFAULT && !config.adapter.idAttribute && (config.adapter.idAttribute = ALLOY_ID_DEFAULT);
        rs.next();
    }
    config.columns = columns;
    rs.close();
    if (config.adapter.idAttribute) {
        if (!_.contains(_.keys(config.columns), config.adapter.idAttribute)) throw "config.adapter.idAttribute \"" + config.adapter.idAttribute + "\" not found in list of columns for table \"" + table + "\"\n" + "columns: [" + _.keys(config.columns).join(",") + "]";
    } else {
        Ti.API.info("No config.adapter.idAttribute specified for table \"" + table + "\"");
        Ti.API.info("Adding \"" + ALLOY_ID_DEFAULT + "\" to uniquely identify rows");
        db.execute("ALTER TABLE " + table + " ADD " + ALLOY_ID_DEFAULT + " TEXT;");
        config.columns[ALLOY_ID_DEFAULT] = "TEXT";
        config.adapter.idAttribute = ALLOY_ID_DEFAULT;
    }
    db.close();
}

var _ = require("alloy/underscore")._, util = require("alloy/sync/util"), ALLOY_DB_DEFAULT = "_alloy_", ALLOY_ID_DEFAULT = "alloy_id", cache = {
    config: {},
    Model: {}
};

module.exports.beforeModelCreate = function(config, name) {
    if (cache.config[name]) return cache.config[name];
    if (Ti.Platform.osname === "mobileweb" || typeof Ti.Database == "undefined") throw "No support for Titanium.Database in MobileWeb environment.";
    config.adapter.db_file && installDatabase(config);
    if (!config.adapter.idAttribute) {
        Ti.API.info("No config.adapter.idAttribute specified for table \"" + config.adapter.collection_name + "\"");
        Ti.API.info("Adding \"" + ALLOY_ID_DEFAULT + "\" to uniquely identify rows");
        config.columns[ALLOY_ID_DEFAULT] = "TEXT";
        config.adapter.idAttribute = ALLOY_ID_DEFAULT;
    }
    cache.config[name] = config;
    return config;
};

module.exports.afterModelCreate = function(Model, name) {
    if (cache.Model[name]) return cache.Model[name];
    Model || (Model = {});
    Model.prototype.idAttribute = Model.prototype.config.adapter.idAttribute;
    Migrate(Model);
    cache.Model[name] = Model;
    return Model;
};

module.exports.sync = Sync;