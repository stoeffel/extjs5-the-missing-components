Ext.application({
    name: 'ExampleApp',
    paths: {
        XExt: '../../components'
    },

    requires: [
        'XExt.search.SearchField',
        'XExt.search.SearchFieldController'
    ],

    launch: function() {
        var panel = Ext.create('Ext.Panel', {
            renderTo: Ext.getBody(),
            bodyPadding: 50,
            title: 'SearchField',
            items: [{
                xtype: 'x-searchfield',
                listeners: {
                    search: function(value) {
                        panel.getComponent('searchResult').setValue('searching for: ' + value);
                    },
                    clear: function() {
                        panel.getComponent('searchResult').setValue('cleared');
                    }
                }
            }, {
                itemId: 'searchResult',
                xtype: 'displayfield',
                value: ''
            }]
        });
    }
});
