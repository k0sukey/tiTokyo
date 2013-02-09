function S4() {
	return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
}

function guid() {
	return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
}

function InitAdapter(config) {
	Cloud.debug = !0;
}

function Sync(method, model, opts) {
	switch (method) {
		case 'create':
			Cloud.Objects.create({
				classname: model.config.adapter.collection_name,
				fields: model.toJSON()
			}, function(e){
				if (e.success) {
					opts.success(e[model.config.adapter.collection_name][0], e.meta);
					model.trigger('fetch');
				} else {
					Ti.API.error(e);
					opts.error(e.message);
				}
			});
			break;
		case 'read':
			Cloud.Objects[opts.read](_.extend({
				classname: model.config.adapter.collection_name
			}, opts.data), function(e){
				if (e.success) {
					opts.success(e[model.config.adapter.collection_name], e.meta);
					model.trigger('fetch');
				} else {
					Ti.API.error(e);
					opts.error(e.message);
				}
			});
			break;
		case 'update':
			Cloud.Objects.update({
				classname: model.config.adapter.collection_name,
				id: model.id,
				fields: model.toJSON()
			}, function(e){
				if (e.success) {
					opts.success(e[model.config.adapter.collection_name][0], e.meta);
					model.trigger('fetch');
				} else {
					Ti.API.error(e);
					opts.error(e.message);
				}
			});
			break;
		case 'delete':
			Cloud.Objects.remove({
				classname: model.config.adapter.collection_name,
				id: model.id
			}, function(e){
				if (e.success) {
					opts.success({}, e.meta);
					model.trigger('fetch');
				} else {
					Ti.API.error(e);
					opts.error(e.message);
				}
			});
			break;
	}
}

var Cloud = require('ti.cloud'), _ = require("alloy/underscore")._;

module.exports.sync = Sync;

module.exports.beforeModelCreate = function(config) {
	config = config || {};
	InitAdapter(config);
	return config;
};

module.exports.afterModelCreate = function(Model) {
	Model = Model || {};
	Model.prototype.config.Model = Model;
	return Model;
};