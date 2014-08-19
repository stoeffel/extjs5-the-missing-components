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
        var me = this;
        config.allowBlank = (Ext.isDefined(config.allowBlank)) ? config.allowBlank : true;
        this.hiddenfield = Ext.widget('hiddenfield', {
            name: config.valueName,
            getValue: function() {
                return parseInt(this.value);
            }
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
                },
                listeners: {
                    specialkey: 'onSpecialkey'
                }
            }, config.textFieldConfig), Ext.apply({
                xtype: 'combo',
                reference: 'combo',
                hidden: true,
                store: config.store,
                allowBlank: true,
                valueField: config.valueField || 'value',
                displayField: config.displayField || 'text',
                listeners: {
                    blur: 'onHideCombo',
                    select: 'onComboChange',
                    specialkey: 'onSpecialkey'
                },
                triggers: {
                    clear: {
                        cls: 'x-form-clear-trigger xext-trigger-clear',
                        hidden: !config.allowBlank,
                        handler: 'onComboClear'
                    }
                }
            }, config.comboConfig)]
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
