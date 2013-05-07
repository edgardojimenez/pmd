Ext.define('PMD.view.history.List', {
    extend: 'Ext.List',

    xtype: 'historyList',
    
    requires: [
        'PMD.store.Histories'
    ],
    
    
    config: {
        title: "Incidents History",
        fullscreen: true,
        store: 'Histories',

        itemTpl: '<b>{bodyPart}</b> - {date} {time}<br><b>Strength:</b> {strength} <b>Duration:</b> {duration}<br><i>{options}</i>',
        listeners: {
            select: function (view, record) {
                //Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
            }
        }
    }
});
