Ext.define('XExt.editable.DisplayField', {
    extend: 'Ext.form.FieldContainer',

    requires: ['XExt.editable.DisplayFieldController'],
    controller: 'displayfield',
    xtype: 'x-editablefield',

    listeners: {
        change: 'onChange',
        onCombo: 'onShowCombo',
        scope: 'controller'
    },

    config: {
        value: null,
        displayValue: null
    },

    layout: {
        type: 'hbox'
    },

    constructor: function(config) {
        this.hiddenfield = Ext.widget('hiddenfield', {
            name: config.name
        });
        Ext.apply(this, {
            items: [this.hiddenfield, {
                xtype: 'textfield',
                editable: false,
                reference: 'display',
                emptyText: config.emptyText || 'no value set',
                triggers: {
                    edit: {
                        cls: 'x-form-clear-trigger xext-trigger-edit',
                        handler: 'onShowCombo'
                    }
                }
            }, {
                xtype: 'combo',
                reference: 'combo',
                hidden: true,
                store: config.store,
                valueField: config.valueField || 'value',
                displayField: config.displayField || 'text',
                listeners: {
                    select: 'onComboChange'
                },
                triggers: {
                    clear: {
                        cls: 'x-form-clear-trigger',
                        handler: 'onComboClear'
                    }
                }
            }]
        });
        this.callParent(arguments);
    },

    getDisplayValue: function() {
        return this.displayValue;
    },

    setDisplayValue: function(value) {
        this.displayValue = value;
        this.fireEvent('change', this, value);
    },

    setValue: function(value) {
        this.value = value;
        this.hiddenfield.setValue(value);
    },

    getValue: function() {
        return this.value;
    },

    showCombo: function() {
        this.fireEvent('onCombo', this);
    }
});
