/**
* The picker with hours and minutes slots
*/
Ext.define('PMD.view.common.picker.Time', {
    extend: 'Ext.picker.Picker',
    xtype: 'timepicker',

    config: {
        
        increment: 5,
        minHours: 0,
        maxHours: 23,
        hoursTitle: 'Hours',
        minutesTitle: 'Minutes',
        periodsTitle: 'Period',
        
        slots: []
    },

    setValue: function (value, animated) {
        var increment = this.getInitialConfig().increment,
            modulo;

        if (Ext.isDate(value)) {
            value = {
                hours: value.getHours(),
                minutes: value.getMinutes()
            };
        }

        //Round minutes
        modulo = value.minutes % increment;
        if (modulo > 0) {
            value.minutes = Math.round(value.minutes / increment) * increment;
        }
        this.callParent([value, animated]);
    },

    getValue: function () {
        var value = this.callParent(arguments),
            date = new Date();
        value = new Date(date.getFullYear(), date.getMonth(), date.getDate(), value.hours, value.minutes);
        return value;
    },

    applySlots: function (slots) {
        var me = this,
            hours = me.createHoursSlot(),
            minutes = me.createMinutesSlot(),
            periods = me.createPeriodSlot();


        return [hours, minutes, periods];
    },

    createHoursSlot: function () {
        var me = this,
            initialConfig = me.getInitialConfig(),
            title = initialConfig.hoursTitle,
            minHours = initialConfig.minHours,
            maxHours = initialConfig.maxHours,
            hours = [],
            slot;


        for (var i = minHours; i <= maxHours; i++) {
            var text = (i < 10) ? ('0' + i) : i; //Add leading zero
            hours.push({ text: text, value: i });
        }


        slot = {
            name: 'hours',
            align: 'center',
            title: title,
            data: hours,
            flex: 1
        };


        return slot;
    },

    createMinutesSlot: function () {
        var me = this,
            initialConfig = me.getInitialConfig(),
            title = initialConfig.minutesTitle,
            increment = initialConfig.increment,
            minutes = [],
            slot;


        for (var j = 0; j < 60; j += increment) {
            var text;
            text = (j < 10) ? ('0' + j) : j; //Add leading zero
            minutes.push({ text: text, value: j });
        }


        slot = {
            name: 'minutes',
            align: 'center',
            title: title,
            data: minutes,
            flex: 1
        };
        return slot;
    },
    
    createPeriodSlot: function () {
        var me = this,
            initialConfig = me.getInitialConfig(),
            title = initialConfig.periodsTitle,
            slot;

        slot = {
            name: 'periods',
            align: 'center',
            title: title,
            data: [{ text: 'AM', value: 1 }, { text: 'PM', value: 2 }],
            flex: 1
        };
        return slot;
    }
});