Ext.define('PMD.model.BodyPart', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'description', type: 'string' }
        ]
    }
});