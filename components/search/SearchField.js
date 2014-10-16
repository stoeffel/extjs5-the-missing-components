Ext.define('XExt.search.SearchField', {
    extend: 'Ext.form.field.Text',

    xtype: 'x-searchfield',
    controller: 'searchfield',

    listeners: {
        specialkey: 'onSpezialkey',
        keyup: 'triggerKeyupInSearch',
        triggerSearch: 'triggerSearch',
        triggerClearSearch: 'triggerClearSearch',
        scope: 'controller'
    },
    emptyText: 'search...',
    enableKeyEvents: true,
    triggers: {
        search: {
            cls: 'x-form-search-trigger xext-trigger-search',
            handler: function(trigger) {
                this.fireEvent('triggerSearch', this);
            }
        },
        clear: {
            cls: 'x-form-clear-trigger xext-trigger-clear',
            handler: function(trigger) {
                this.fireEvent('triggerClearSearch', this);
            },
            hidden: true
        }
    }
});
