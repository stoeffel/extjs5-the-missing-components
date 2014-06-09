Ext.define('XExt.search.SearchField', {
    extend: 'Ext.form.field.Text',

    xtype: 'x-searchfield',
    controller: 'searchfield',

    listeners: {
        specialkey: 'onSpezialkey',
        keyup: 'triggerKeyupInSearch',
        scope: 'controller'
    },
    emptyText: 'search...',
    enableKeyEvents: true,
    triggers: {
        search: {
            cls: 'x-form-search-trigger xext-trigger-search',
            handler: 'triggerSearch',
            scope: 'controller'
        },
        clear: {
            cls: 'x-form-clear-trigger xext-trigger-clear',
            handler: 'triggerClearSearch',
            hidden: true,
            scope: 'controller'
        }
    }
});
