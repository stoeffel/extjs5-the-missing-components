describe('EditableDisplayField', function() {
    var field;
    beforeEach(function(done) {
        Ext.application({
            name: 'EditableDisplayField',

            paths: {
                'XExt': './components',
                'Fixtures': './spec/fixtures'
            },

            launch: function() {
                Ext.require('XExt.editable.DisplayField', function() {
                    done();
                });
            }
        });
    });

    afterEach(function() {
        if (field) {
            //field.destroy();
        }
    });

    it('should be defined', function() {
        expect(XExt.editable.DisplayField).toBeDefined();
    });

    it('should extend Ext.form.FieldContainer', function() {
        var superclass = XExt.editable.DisplayField.superclass.$className;
        expect(superclass).toEqual('Ext.form.FieldContainer');
    });

    it('should return the display value', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            renderTo: 'content'
        });
        field.setDisplayValue('Hello, World');
        field.setValue(2);
        expect(field.getDisplayValue()).toEqual('Hello, World');
        expect(field.getValue()).toEqual(2);
    });

    it('should contain a textfield', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            renderTo: 'content'
        });
        expect(field.down('textfield')).not.toBeNull();
    });

    it('should display the value in the textfield', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            renderTo: 'content'
        });
        field.setDisplayValue('Hello, World');
        field.setValue(2);
        expect(field.down('textfield').getValue()).toEqual('Hello, World');
        expect(field.getValue()).toEqual(2);
        expect(field.getDisplayValue()).toEqual('Hello, World');
    });

    it('should always display the textfield first', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            renderTo: 'content'
        });
        field.setValue('Hello, World');
        expect(field.down('textfield').isVisible()).toBeTruthy();
    });

    it('should contain a edittrigger', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            renderTo: 'content'
        });
        expect(field.down('textfield').getTrigger('edit')).toBeDefined();
    });

    it('should display the combo', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            renderTo: 'content'
        });
        field.showCombo();
        expect(field.down('combo').isVisible()).toBeTruthy();
    });

    it('should set the value of a selected item', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            store: Ext.create('Ext.data.Store', {
                fields: ['text', 'value'],
                data: [{
                    text: 'FooBar',
                    value: 1
                }]
            }),
            renderTo: 'content'
        });
        field.showCombo();
        field.down('combo').setValue(1);
        expect(field.getValue()).toEqual(1);
        field.showCombo();
        expect(field.down('combo').getValue()).toBeNull();
    });

    it('should display the value of the displayField config', function() {
        field = Ext.create('XExt.editable.DisplayField', {
            store: Ext.create('Ext.data.Store', {
                fields: ['text', 'value', 'price'],
                data: [{
                    text: 'FooBar',
                    price: '10.50',
                    value: 1
                }, {
                    text: 'MooBoo',
                    price: '3.50',
                    value: 2
                }]
            }),
            fieldLabel: 'Price',
            displayField: 'price',
            renderTo: 'content'
        });
        field.showCombo();
        field.down('combo').setValue(1);
        expect(field.getDisplayValue()).toEqual('10.50');
    });
});
