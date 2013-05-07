Ext.define('PMD.controller.Incident', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['BodyParts'],

        control: {
            '.sliderfield': {
                change: 'onSliderChange'
            }
        },

        refs: {
            durationSlider: {
                selector: '#durationSlider'
                //autoCreate: true
            },
            strengthSlider: {
                selector: '#strengthSlider'
                //autoCreate: true
            },
            bodyPartsSelect: {
                selector: '#bodyPartsSelect'
                //autoCreate: true
            }
        },
        
        bodyPartsData: null
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

        me.getBodyPartsData();
        
        me.getDurationSlider().setValue(15);
        me.setSliders(me.getDurationSlider(), 15);
        
        me.getStrengthSlider().setValue(5);
        me.setSliders(me.getStrengthSlider(), 5);
    },
    
    constructor: function(config) {
        this.initConfig(config);
    },

    onSliderChange: function (fld, sl, thumb, newValue, oldValue, eOpts) {
        var me = this;
        me.setSliders(fld, newValue);
    },
    
    setSliders: function (slider, value) {
        var me = this;
        slider.setLabel(me.getApplication().sliderHtmlTpl.replace('{0}', slider.getName()).replace('{1}', value));
    },
    
    getBodyPartsData: function () {
        var me = this;
        
        Ext.Ajax.request({
            url: me.getApplication().wsUrl + '/api/bodyparts',

            success: function (response) {
                console.log("Loading body parts");

                var store = Ext.getStore('BodyParts');
                store.setData(Ext.decode(response.responseText));
            },

            failure: function (response) {
                console.log("Body parts failed to laod");
            }
        });
    }
    
});