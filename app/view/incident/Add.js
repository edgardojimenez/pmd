Ext.define('PMD.view.incident.Add', {
    extend: 'Ext.form.Panel',
    
    xtype: 'incidentAdd',
    
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Email',
        'Ext.field.Password',
        'PMD.store.BodyParts',
        'Ext.field.Select',
        'Ext.field.DatePicker',
        'Ext.field.Slider',
        'Ext.SegmentedButton',
        'PMD.view.common.TimePicker'
    ],
    
    config: {
        title: "Add Incident",
        fullscreen: true,
        items: [{
            xtype: 'fieldset',
            items: [
                {
                    label: 'Body Part',
                    name: 'body',
                    xtype: 'selectfield',
                    id: 'bodyPartsSelect',
                    valueField: 'id',
                    displayField: 'description',
                    store: 'BodyParts'
                },
                {
                    label: 'Date',
                    name: 'date',
                    xtype: 'datepickerfield',
                    value: new Date(),
                    picker: {
                        yearFrom: 2010,
                        yearTo: 2020
                    }
                },
                {
                    label: 'Time',
                    name: 'time',
                    xtype: 'timepickerfield',
                    value: new Date(), // object also possible {hours:12, minutes:25},
                    picker: {
                        minHours: 1, //(optional)Selectable hours will be between 9-18
                        maxHours: 12 // (optional) These values default to 0-24
                    }
                },
                {
                    label: 'Strength',
                    name: 'Strenght',
                    xtype: 'sliderfield',
                    id: 'strengthSlider',
                    minValue: 1,
                    maxValue: 10,
                    increment: 1,
                    value: 0
                },
                {
                    label: 'Duration',
                    name: 'Duration',
                    xtype: 'sliderfield',
                    id: 'durationSlider',
                    minValue: 5,
                    maxValue: 180,
                    increment: 5,
                    value: 0
                },
                {
                    xtype: 'checkboxfield',
                    name: 'nausea',
                    label: 'Nausea',
                    value: true
                },
                {
                    xtype: 'checkboxfield',
                    name: 'sharp',
                    label: 'Sharp Pain',
                    value: true
                },
                {
                    xtype: 'checkboxfield',
                    name: 'temperature',
                    label: 'Temperature',
                    value: true
                },
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    items: [
                        {
                            text: 'Reset',
                            id: 'resetButton'
                        },
                         { xtype: 'spacer' },
                        {
                            text: 'Save',
                            ui: 'confirm',
                            id: 'saveButton'
                        }
                    ]
                }
            ]
        }]
    }
});