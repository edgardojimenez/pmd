Ext.define('PMD.controller.History', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Histories'],

        //control: {
        //    '.sliderfield': {
        //        change: 'onSliderChange'
        //    }
        //},

        //refs: {
        //    durationSlider: {
        //        selector: '#durationSlider',
        //        //autoCreate: true
        //    },
        //    strengthSlider: {
        //        selector: '#strengthSlider',
        //        //autoCreate: true
        //    },
        //    bodyPartsSelect: {
        //        selector: '#bodyPartsSelect',
        //        //autoCreate: true
        //    }
        //},

        historyData: null
    },

    init: function () {
        var me = this;

        //me.application.on({
        //    individualidentified: me.onIndividualIdentified,
        //    scope: me
        //});
    },

    launch: function () {
        var me = this;

        me.getHistoryData();
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    getHistoryData: function () {
        var me = this;

        Ext.Ajax.request({
            url: me.getApplication().wsUrl + '/api/history',

            success: function (response) {
                console.log("History Loading");

                var store = Ext.getStore('Histories');
                store.setData(Ext.decode(response.responseText));
            },

            failure: function (response) {
                console.log("history failed to load");
            }
            
        });
    }

});