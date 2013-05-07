Ext.define('PMD.view.history.Card', {
    extend: 'Ext.NavigationView',

    xtype: 'historyCard',

    requires: [
        'PMD.view.history.List',
        'PMD.store.Histories'
    ],

    config: {
        title: 'History',
        
        iconCls: 'list',
        
        items: {
            xtype: 'historyList'
        }
    }
});
