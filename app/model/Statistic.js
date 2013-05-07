Ext.define('PMD.model.Statistic', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'description', type: 'string' }
        ]
    }
});