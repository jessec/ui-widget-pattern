;
(function($) {
	$.fn.pluginname = function(options) {
		if (!$(this).length) {
			return this;
		}
		this.defaultOptions = {};
		var settings = $.extend({}, this.defaultOptions, options);
		return this;
	};
	$.pluginname = function(obj) {
	};
})(jQuery);