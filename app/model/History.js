Ext.define('PMD.model.History', {
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