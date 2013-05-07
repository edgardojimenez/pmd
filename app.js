/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'PMD': 'app'
});

Ext.Loader.setConfig('disableCaching', false);
//</debug>

Ext.application({
    name: 'PMD',
    
    wsUrl: 'http://mobws.apphb.com',

    require: [
        'Ext.MessageBox',
        'PMD.view.chart.Carousel',
        'Ext.chart.CartesianChart',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.PanZoom'
    ],

    models:[
        'BodyPart',
        'History',
        'Incident',
        'Statistic'
    ],

    views: [
        'Main',
        'common.TimePicker',
        'common.picker.Time',
        'history.Card',
        'history.List',
        'incident.Add',
        'incident.Card',
        'stats.Card',
        'stats.List'
    ],

    stores: [
        'BodyParts',
        'Histories',
        'Statistics'
    ],

    controllers: [
        'History',
        'Incident',
        'Statistic'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },
    
    sliderHtmlTpl: "{0}&nbsp;&nbsp;&nbsp;&nbsp;<i>{1}</i>",

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('PMD.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
