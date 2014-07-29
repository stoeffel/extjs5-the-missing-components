Ext.define('Fixtures.Model', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }],

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'records'
        },
        api: {
            create: './spec/fixtures/data.json',
            read: './spec/fixtures/data.json',
            update: './spec/fixtures/data.json',
            destroy: './spec/fixtures/data.json'
        }
    }
});
