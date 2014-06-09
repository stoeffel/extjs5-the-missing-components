Ext.define('XExt.search.SearchFieldController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.searchfield',

    onSpezialkey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.triggerSearch(field);
        }
    },

    triggerSearch: function(field) {
        var searchValue = field.getValue();

        if (searchValue) {
            this.fireViewEvent('search', searchValue);
        } else {
            this.triggerClearSearch(field);
        }
    },

    triggerClearSearch: function(field) {
        this.hideClearTrigger();
    },

    triggerKeyupInSearch: function(field) {
        var searchValue = field.getValue();

        if (searchValue) {
            this.showClearTrigger();
        } else {
            this.hideClearTrigger();
        }
    },

    showClearTrigger: function() {
        var clearTrigger = this.getTrigger('clear');
        clearTrigger.show();
    },

    hideClearTrigger: function() {
        var clearTrigger = this.getTrigger('clear');
        this.getView().setValue('');
        clearTrigger.hide();
        this.fireViewEvent('clear');
    },

    getTrigger: function(id) {
        var searchField = this.getView();
        return searchField.getTrigger(id);
    }
});
