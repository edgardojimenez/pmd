Ext.define('PMD.view.incident.Card', {
    extend: 'Ext.NavigationView',

    xtype: 'incidentCard',

    requires: [
        'PMD.view.incident.Add'
    ],

    config: {
        title: 'Incident',
        iconCls: 'add',
        
        items: {
            xtype: 'incidentAdd'
        }
    }
});
