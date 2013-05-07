Ext.define('PMD.view.stats.List', {
    extend: 'Ext.List',

    xtype: 'statsList',
    
    requires: [
        'PMD.store.Histories',
        'Ext.Carousel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'Ext.chart.series.Bar',
        'Ext.chart.interactions.PanZoom'
    ],
    
    config: {
        title: "Charts",
        fullscreen: true,
        store: 'Statistics',

        itemTpl: '<b>{description}</b>'
        //listeners: {
        //    select: function (view, record) {
        //        Ext.Msg.alert('Selected!', 'You selected ' + record.get('description'));
        //    }
        //}
    }
});
