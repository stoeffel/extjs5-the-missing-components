Ext.define('Fixtures.ErrorStore', {
    extend: 'Fixtures.Store',
    autoLoad: false,

    proxy: {
        type: 'ajax',
        reader: {
            type: 'json',
            rootProperty: 'records'
        },
        api: {
            create: './spec/fixtures/error.json',
            read: './spec/fixtures/error.json',
            update: './spec/fixtures/error.json',
            destroy: './spec/fixtures/error.json'
        }
    }
});
