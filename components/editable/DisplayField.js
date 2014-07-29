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
        config.allowBlank = (Ext.isDefined(config.allowBlank))?config.allowBlank:true;
        this.hiddenfield = Ext.widget('hiddenfield', {
            name: config.name
        });
        Ext.apply(this, {
            items: [this.hiddenfield, Ext.apply({
                xtype: 'textfield',
                editable: false,
                allowBlank: config.allowBlank,
                reference: 'display',
                name: config.displayName,
                emptyText: config.emptyText || 'no value set',
                triggers: {
                    edit: {
                        cls: 'x-form-clear-trigger xext-trigger-edit',
                        handler: 'onShowCombo'
                    }
                }
            }, config.textFieldConfig), {
                xtype: 'combo',
                reference: 'combo',
                hidden: true,
                store: config.store,
                allowBlank: config.allowBlank,
                valueField: config.valueField || 'value',
                displayField: config.displayField || 'text',
                listeners: {
                    select: 'onComboChange'
                },
                triggers: {
                    clear: {
                        cls: 'x-form-clear-trigger',
                        hidden: !config.allowBlank,
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
        if (Ext.isArray(value)) {
            value = value[0].get(this.valueField);
        }
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
