Ext.define('PMD.store.BodyParts', {
    extend: 'Ext.data.Store',
    requires: ['PMD.model.BodyPart'],
    config: {
        sorters: ['description'],
        model: 'PMD.model.BodyPart'
    }
});