Ext.define('PMD.store.Histories', {
    extend: 'Ext.data.Store',
    requires: ['PMD.model.History'],
    config: {
        //sorters: ['part'],
        model: 'PMD.model.History'
    }
});