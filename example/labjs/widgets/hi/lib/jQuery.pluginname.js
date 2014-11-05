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
	
	  $(function() {
			$('body').append('<iframe id="ifr" src="widgets/hi/widget.html"></iframe>');
			setTimeout(function(){
			    $('#ifr').seamless({
			    	  loading: ''
			    }).show();
			}, 30);

	  });
		  
	
})(jQuery);