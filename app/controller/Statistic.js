Ext.define('PMD.controller.Statistic', {
    extend: 'Ext.app.Controller',
    require: [
    ],
    config: {
        stores: ['Statistics'],
        
        refs: {
            statsList: 'statsList',
            statsCard: 'statsCard',
            chartButtons: '#chartButtons'
        },

        control: {
            statsList: {
                itemtap: 'onStatisticSelect'
            },
            chartButtons: { 
                toggle: 'onToggleCharts'
            }
        },

        statisticData: null,
        carousel: null,
        chartType: 'line'
    },

    init: function () {
        var me = this;
    },

    launch: function () {
        var me = this;

        me.getStatisticData();
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    getStatisticData: function () {
        var me = this;

        Ext.Ajax.request({
            url: me.getApplication().wsUrl + '/api/statistic',

            success: function (response) {
                console.log("Statistics Loading");

                var store = Ext.getStore('Statistics');
                store.setData(Ext.decode(response.responseText));
            },

            failure: function (response) {
                console.log("Statistics failed to load");
            }

        });
    },
    
    onStatisticSelect: function (list, index, node, record) {
        var me = this;
        me.carousel = Ext.create('Ext.Carousel', {
            title: record.data.description
        });
        
        me.carousel.add(me.createChart(record.data.description, me.getChartType(), me.getWeekData()));
        me.carousel.add(me.createChart(record.data.description, me.getChartType(), me.getMonthData()));
        me.carousel.add(me.createChart(record.data.description, me.getChartType(), me.getYearData()));
        
        me.getStatsCard().push(me.carousel);
    },
    
    onToggleCharts: function (container, button, pressed) {
        var me = this, charts, i;
        
        if (pressed === true && button.getId() === 'lineChart') {
            me.setChartType('line');
        }
        if (pressed === true && button.getId() === 'barChart') {
            me.setChartType('bar');
        }
    },
    
    createChart: function (statistic, type, data) {
        return Ext.create("Ext.chart.Chart", {
                fullscreen: true,
            
                store: {
                    fields: ['name', 'value'],
                    data: data.values
                },
                
                animate: false,
                insetPadding: {top: 26, left: 0, right: 4, bottom: 30},
                series: [
                    {
                        type: type,
                        xField: 'name',
                        yField: 'value',
                        style: {
                            fill: 'rgba(0,40,170,0.3)',
                            stroke: 'black'
                        }
                    }
                ],
                axes: [
                    {
                        type: 'numeric',
                        position: 'left',
                        title: data.yTitle + statistic,
                        minimum: 0,
                        maximum: data.max,
                        grid: {
                            fill: '#efefef',
                            odd: {
                                fill: '#cdcdcd'
                            },
                            even: {
                                lineWidth: 3
                            }
                        }
                    },
                    {
                        type: 'category',
                        position: 'bottom',
                        title: data.period,
                        grid: true,
                        style: {
                            estStepSize: 1
                        }
                    }
                ]
            });
    },
    
    getWeekData: function() {
        return {
            period: 'Daily',
            yTitle: 'Number of ',
            max: 6,
            values:
            [
                { name: 'Sun', value: 2 },
                { name: 'Mon', value: 1 },
                { name: 'Tue', value: 3 },
                { name: 'Wed', value: 5 },
                { name: 'Thu', value: 3 },
                { name: 'Fri', value: 1 },
                { name: 'Sat', value: 2 }
            ]
        };
    },
    
    getMonthData: function() {
        return {
            period: 'Weekly',
            yTitle: 'Average Number of ',
            max: 20,
            values:
            [
                { name: 'Wk1', value: 9 },
                { name: 'Wk2', value: 17 },
                { name: 'Wk3', value: 5 },
                { name: 'Wk4', value: 13 },
                { name: 'Wk5', value: 10 }
            ]
        };
    },
    
    getYearData: function () {
        return {
            period: 'Monthly',
            yTitle: 'Average Number of ',
            max: 50,
            values:
            [
                { name: 'Jan', value: 34 },
                { name: 'Feb', value: 30 },
                { name: 'Mar', value: 23 },
                { name: 'Apr', value: 10 },
                { name: 'May', value: 23 },
                { name: 'Jun', value: 18 },
                { name: 'Jul', value: 34 },
                { name: 'Aug', value: 33 },
                { name: 'Sep', value: 37 },
                { name: 'Oct', value: 23 },
                { name: 'Nov', value: 45 },
                { name: 'Dec', value: 34 }
            ]
        };
    }
});

