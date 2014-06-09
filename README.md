extjs5-the-missing-components
=============================

This package adds missing components to extjs5.
There will be more components as my experience evolves.

For the moment just one.

* searchfield

Usage
-----

`$ bower install extjs5-the-missing-components`

```js
Ext.application({
    name: 'ExampleApp',
    paths: {
        XExt: 'bower_components/extjs5-the-missing-components/components'
    }
    /* ... */
});
```

Searchfield
-----------

![searchfield](https://github.com/stoeffel/extjs5-the-missing-components/raw/master/images/searchfield.png)
A simple searchfield. It handles clearing, and triggering of a search.

```js
Ext.create('XExt.search.SearchField', {
    emptyText: 'searching for UFOs',
    listeners: {
        search: function(value) {
            // Triggered on triggericon click and enter
            // Do something with the searchvalue (i.e. filter a store)
        },
        clear: function() {
            // Triggered on triggericon click and deleting the value of the field
            // Do something with the searchvalue (i.e. clear the filter of a store)
        }
    }
});
```

