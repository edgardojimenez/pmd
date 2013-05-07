Ext.define('PMD.store.Statistics', {
    extend: 'Ext.data.Store',
    requires: ['PMD.model.Statistic'],
    
    config: {
        sorters: ['description'],
        model: 'PMD.model.Statistic'
    }
});