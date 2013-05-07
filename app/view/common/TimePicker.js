/**
* TimePickerfield. Extends from datepickerfield
*/
Ext.define('PMD.view.common.TimePicker', {
    extend: 'Ext.field.DatePicker',
    xtype: 'timepickerfield',

    requires: ['PMD.view.common.picker.Time'],

    config: {
        dateFormat: 'h:i A', 
        picker: true
    },

    applyValue: function (value) {
        if (!Ext.isDate(value) && !Ext.isObject(value)) {
            value = null;
        }

        if (Ext.isObject(value)) {
            var date = new Date(),
                year = value.year || date.getFullYear(), 
                month = value.month || date.getMonth(),
                day = value.day || date.getDate();


            value = new Date(year, month, day, value.hours, value.minutes); 
        }
        return value;
    },

    applyPicker: function (picker) {
        picker = Ext.factory(picker, 'PMD.view.common.picker.Time');
        picker.setHidden(true); 
        Ext.Viewport.add(picker);
        return picker;
    },

    updatePicker: function (picker) {
        picker.on({
            scope: this,
            change: 'onPickerChange',
            hide: 'onPickerHide'
        });
        picker.setValue(this.getValue());
        return picker;
    }
});