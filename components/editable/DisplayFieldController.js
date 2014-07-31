Ext.define('XExt.editable.DisplayFieldController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.displayfield',

    onChange: function(field, value) {
        var displayfield = this.lookupReference('display');
        if (!displayfield) {
            return true;
        }

        displayfield.setValue(value);
    },

    onShowCombo: function() {
        var combo = this.lookupReference('combo'),
            displayfield = this.lookupReference('display');
        combo.clearValue();
        combo.show();
        combo.focus();
        displayfield.hide();
    },

    onHideCombo: function() {
        var combo = this.lookupReference('combo'),
            displayfield = this.lookupReference('display');
        combo.hide();
        displayfield.show();
    },

    onComboChange: function(combo, value) {
        this.onHideCombo();
        this.getView().setValue(value);
        this.getView().setDisplayValue(combo.getDisplayValue());
    },

    onComboClear: function(combo) {
        combo.setValue('');
        this.onHideCombo();
        this.getView().setValue('');
        this.getView().setDisplayValue(null);
    },

    onSpecialkey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.getView().showCombo();
        } else if (e.getKey() === e.ESC) {
            this.onHideCombo();
        }
    }
});
