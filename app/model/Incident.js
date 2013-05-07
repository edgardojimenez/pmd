Ext.define('PMD.model.Incident', {
    extend: 'Ext.data.Model',
   
    config: {
        fields: [           
            { name: 'bodyPart' },
            { name: 'date' },
            { name: 'time' },
            { name: 'duration' },
            { name: 'strength' },
            { name: 'options' }
        ]
    }
});