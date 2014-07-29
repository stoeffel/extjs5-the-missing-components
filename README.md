extjs5-the-missing-components
=============================

This package adds missing components to extjs5.
There will be more components soon.

* searchfield
* editablefield

Usage
-----

Install it using bower.
`$ bower install extjs-the-missing-components`

You need to add it to the classpath in your `app.json`.
```json
{
    "classpath": "${app.dir}/app,${app.dir}/bower_components/extjs-the-missing-components",
}
```

Add the path for `XExt` to your `app.js`.
```js
Ext.application({
    name: 'ExampleApp',
    paths: {
        XExt: 'bower_components/extjs-the-missing-components/components'
    }
    /* ... */
});
```

Searchfield
-----------

![searchfield](https://github.com/stoeffel/extjs5-the-missing-components/raw/master/images/searchfield.png)

It handles clearing, and triggering of a search.
Check out the sourcecode. It's a nice example for ExtJs5 viewController and encapsulation.

```js
Ext.create('XExt.search.SearchField', {
    emptyText: 'searching for UFOs',
    listeners: {
        search: function(value) {
            // Triggered on triggericon click and enter
            // Do something with the searchvalue (i.e. filter a store)
        },
        // or search: 'onSearch' <- function of your viewController
        clear: function() {
            // Triggered on triggericon click and deleting the value of the field
            // Do something with the searchvalue (i.e. clear the filter of a store)
        }
        // or clear: 'onClear' <- function of your viewController
    }
});
```

Customstyles using [FontAwesome](http://fortawesome.github.io/Font-Awesome/) icons:
```scss
@font-face {
    font-family: 'FontAwesome';
    src: url('font-awesome/fontawesome-webfont.eot');
    src: url('font-awesome/fontawesome-webfont.eot?#iefix') format('embedded-opentype'),
    url('font-awesome/fontawesome-webfont.woff') format('woff'),
    url('font-awesome/fontawesome-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@mixin trigger-field {
    background: none !important;
    &:before {
        color: $neutral-color;
        font-family: FontAwesome;
        font-size: 20px;
        font-weight: 300;
        height: 20px;
        line-height: 30px;
    }
    &:hover {
        &:before {
            color: darken($neutral-color, 10%);
        }
    }
}
.xext-trigger-search {
    &:before {
        content: '\f002';
    }
    @include trigger-field();
}
.xext-trigger-clear {
    &:before {
        content: '\f00d';
    }
    @include trigger-field();
}
```

