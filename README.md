# js-track-focus
Check if the Child-Elements on any Parent have focus and aply CSS-Class on the Element

[DEMO](http://codepen.io/vmitsaras/pen/ozOdYm)

##Usage

#####HTML
```html
<nav class="js-track-focus" id="track">
    <a href="#">Menu</a>
    <a href="#">Menu</a>
    <a href="#">Menu</a>
    <div class="js-track-focus" data-focus="subnav-has-focus">
        <a href="#">Menu</a>
        <a href="#">Menu</a>
        <a href="#">Menu</a>
    </div>
</nav>

```

#####JS
```js
$( function(){
    $(document).trigger("enhance");
});
// or
var elem = document.getElementById('#track');
var trackfcs = new window.componentNamespace.TrackFocus( elem, {
    focusClass: 'ui-state-hightlight'
});

// init
trackfcs.init();
// destroy
trackfcs.destroy();
```

##Events
####`create `
Fired once the Plugin is initialized.
```js
$( document ).on( "create.track-focus", function( e ){ 
	// your code
} );
```
####`focus-in `
Fired when a child element has focus.
```js
$( document ).on( "focus-in.track-focus", function( e ){ 
	// child element has focus
} );
```
####`focus-out `
Fired when a child element loses focus.
```js
$( document ).on( "focus-out.track-focus", function( e ){ 
	// child element loses focus
} );
```
####`destroy `
Fired once the Plugin is destroyed.
```js
$( document ).on( "destroy.track-focus", function( e ){ 
	// ...
} );
```
---
####Package managers

* Install with Bower: `bower install js-track-focus --save`
* Install with npm: `npm install js-track-focus`


####CDN
```html
<script src="https://npmcdn.com/js-track-focus@1.0/track-focus.js"></script>
```

## Release History

* `v1.0.0`: Initial release.

## License
Licensed under the MIT license.
