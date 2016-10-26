(function( w, $ ){
	"use strict";

	var name = "track-focus",
		componentName = name + "-component",
		cl = {
			focus: "has-hover"
		};

	w.componentNamespace = w.componentNamespace || {};

	var TrackFocus = w.componentNamespace.TrackFocus = function(element, options ){
		if( !element ){
			throw new Error( "Element required to initialize object" );
		}
		// assign element for method events
		this.$element = $( element );
		options = options || {};
		options.focusClass = this.$element.data('focus-class') || options.focusClass || cl.focus;
		this.options = options;
	};

	TrackFocus.prototype.init = function(){

		if ( this.$element.data( componentName ) ) {
			return;
		}

		this.$element.data( componentName, this );

		this._bindEvents();
		this.$element.trigger( "create." + name );
	};

	TrackFocus.prototype._bindEvents = function(){
		var self = this,
			o = self.options;
		function addFocusClass() {
			self.$element.addClass(o.focusClass).trigger( "focus-in." + name );
		}
		function removeFocusClass() {
			self.$element.removeClass(o.focusClass).trigger( "focus-out." + name );
		}
		this.$element
			.on('focusin', addFocusClass)
			.on('focusout', removeFocusClass);
	};

	TrackFocus.prototype.destroy = function(){
		this.$element.off(name).removeClass(o.focusClass).trigger( "destroy." + name );
	};

})(this, jQuery);

(function( w, $ ){
	"use strict";

	var pluginName = "track-focus",
		initSelector = ".js-" + pluginName;

	$.fn[ pluginName ] = function(){
		return this.each( function(){
			new w.componentNamespace.TrackFocus( this ).init();
		});
	};

	// auto-init on enhance (which is called on domready)
	$( w.document ).on( "enhance", function(e){
		$( $( e.target ).is( initSelector ) && e.target ).add( initSelector, e.target ).filter( initSelector )[ pluginName ]();
	});

})(this, jQuery);