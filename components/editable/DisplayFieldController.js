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

    onComboChange: function(combo, value) {
        var displayfield = this.lookupReference('display');
        combo.hide();
        displayfield.show();
        this.getView().setValue(value);
        this.getView().setDisplayValue(combo.getDisplayValue());
    },

    onComboClear: function(combo) {
        var displayfield = this.lookupReference('display');
        combo.setValue('');
        combo.hide();
        displayfield.show();
        this.getView().setValue('');
        this.getView().setDisplayValue(null);
    }
});
