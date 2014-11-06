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
				var child =   $('#ifr').seamless({
			    	  loading: ''
			    }).show();
				child.receive(function(data, event) {

					  // Print out the data that was received.
					  console.log(data);
				});
			}, 30);

	  });


})(jQuery);