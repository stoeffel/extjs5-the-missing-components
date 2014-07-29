Ext.define('Fixtures.Store', {
    extend: 'Ext.data.Store',
    autoLoad: false,

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }],
    data: [{
        id: 1,
        name: 'Stoeffel'
    }]
});
