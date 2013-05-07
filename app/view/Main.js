Ext.define('PMD.view.Main', {
    extend: 'Ext.tab.Panel',
    
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'PMD.view.incident.Card',
        'PMD.view.history.Card',
        'PMD.view.stats.Card'
    ],
    
    config: {
        tabBarPosition: 'bottom',
        
        fullscreen: true,
        
        defaults: {
            styleHtmlContent: true,
            scrollable: true
        },
        
        items: [{
                xtype: 'incidentCard'
            },
            {
                 xtype: 'historyCard'
            },
            {
                xtype: 'statsCard'
            }
        ]
    }
});
