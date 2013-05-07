Ext.define('PMD.view.stats.Card', {
    extend: 'Ext.NavigationView',

    xtype: 'statsCard',

    requires: [
        'PMD.view.stats.List'
    ],

    config: {
        title: 'Charts',
        iconCls: 'chart',
        navigationBar :  {
            items: [{
                    id: 'chartButtons',
                    xtype: 'segmentedbutton',
                    align: 'right',
                    items: [
                        { id: 'lineChart', iconMask: true, iconCls: 'chart2', pressed: true },
                        { id: 'barChart', iconMask: true, iconCls: 'chart' }
                    ]
                }
            ]
        },
        
        items: [
            { xtype: 'statsList' }
        ]
    }
});

