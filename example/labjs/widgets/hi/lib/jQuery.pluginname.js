
;(function($) {
	/*
	 * Public methods 
	 */

	$.fn.pluginname = function(options) {
		if (!$(this).length) {
			return this;
		}

		$(this)
			.data('pluginname', $.extend({}, options, ($.metadata ? $(this).metadata() : {})))
			.unbind('click.fb')
			.bind('click.fb', function(e) {
				e.preventDefault();
				return;
			});

		return this;
	};

	$.pluginname = function(obj) {

	};

	$.pluginname.init = function() {
	};

	$.fn.pluginname.defaults = {
	};

	$(document).ready(function() {
		$.pluginname.init();
	});

})(jQuery);