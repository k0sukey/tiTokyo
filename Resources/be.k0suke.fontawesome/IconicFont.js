var exports = exports || this;

exports.IconicFont = function(global) {
    var K = function() {}, IconicFont = function(options) {
        var self;
        this instanceof IconicFont ? self = this : self = new K;
        options || (options = {});
        self.ligature = options.ligature || !1;
        var Font = require(options.font);
        self.font = new Font;
        return self;
    };
    K.prototype = IconicFont.prototype;
    IconicFont.prototype.icon = function(options) {
        var self = this;
        if (options instanceof Array) {
            options.forEach(function(value) {
                self.ligature ? icons.push(self.font.getCharcode(value)) : icons.push(String.fromCharCode(self.font.getCharcode(value)));
            });
            return icons;
        }
        return self.ligature ? self.font.getCharcode(options) : String.fromCharCode(self.font.getCharcode(options));
    };
    IconicFont.prototype.fontfamily = function() {
        var self = this;
        return self.font.fontfamily;
    };
    return IconicFont;
}(this);