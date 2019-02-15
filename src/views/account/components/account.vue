<template>
    <Content>
        <div class="data-view" style="margin-top: 55px;overflow: hidden;">
            <div title="数据台账">
                <div class="group-panel-box blue">
                    <div class="panel-title">数据台账</div>
                    <div class="panel-line"></div>
                </div>
            </div>
            <Row :gutter="30">
                <Col  span="12">
                    <card title="滁州市管理边界" style="margin-left: 10%">
                        <span class="chartImage">
                              <span @click="onDownChartImg('chartMap')"><Icon type="ios-download-outline" :size="22"></Icon></span>
                             </span>
                        <div id="chartMap" class="chart"></div>
                    </card>
                </Col>
                <Col span="12">
                    <card title="滁州市房价走势" style="margin-right: 10%">
                             <span class="chartImage"  >
                              <span @click="onDownChartImg('trend')"><Icon type="ios-download-outline" :size="22"></Icon></span>
                             </span>
                        <div id="trend" style="height: 200px;width: 600px;z-index: 9999"></div>
                    </card>
                </Col>
            </Row>
            <br>
            <Row :gutter="30">
                <Col span="12">
                    <card  title="滁州市城区房价对比" style="margin-left: 10%">
                             <span class="chartImage"  >
                              <span @click="onDownChartImg('comprise')"><Icon type="ios-download-outline" :size="22"></Icon></span>
                             </span>
                        <div id="comprise"  style="height: 210px;width: 600px"></div>
                    </card>
                </Col>
                <Col span="12">
                    <card title="滁州市城区公服设施数量" style="margin-right: 10%">
                              <span class="chartImage"  >
                              <span @click="onDownChartImg('chart')"><Icon type="ios-download-outline" :size="22"></Icon></span>
                             </span>
                        <div style="height: 30px;width: 100%;">
                            <Select size="small" @on-change="publicNumCharts" v-model="model1" class="slelectInput" placeholder="城东">
                                <Option  v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}
                                </Option>
                            </Select>
                        </div>
                        <div id="publicNum" style="height: 180px;width: 600px" ></div>
                    </card>
                </Col>
            </Row>
        </div>
    </Content>
</template>


<script>
    import { exportchart } from "../js/exportchart";
    import Server from "@/core/server";
    import { services } from "@/core/config/services";
    var echarts = require("echarts");
    export default {
        mixins: [exportchart],
        data() {
            return {
                loading: {
                    map: true
                },
                cityList: [
                    {
                        value: '城东',
                        label: '城东'
                    },
                    {
                        value: '城南',
                        label: '城南'
                    },
                    {
                        value: '城西',
                        label: '城西'
                    },
                    {
                        value: '城北',
                        label: '城北'
                    }
                ],
                model1: '城东'
            };
        },
        mounted() {
            window.onresize = () => {
                this.trend.resize();
                this.publicNum.resize();
                this.comprise.resize();
                this.chartMap.resize();
            };
            this.showMap();
            this.trendMap();
            this.compriseMap();
            this.publicNumCharts();
        },

        methods: {
            showMap() {
                if (!this.chartMap) {
                    this.chartMap = echarts.init(document.getElementById("chartMap"));
                }
                onemap.server
                    .get({
                        url: "js/json/cz.geojson"
                    })
                    .then(rsp => {
                        this.loading.map = false;
                        echarts.registerMap("cz", rsp);
                        let xData = [];
                        rsp.features.forEach(item => {
                            let properties = item.properties;
                            xData.push({
                                name:properties.name,
                                value: properties.price,
                                itemStyle: {
                                    color: properties.color
                                }
                            });
                        });
                        this.chartMap.setOption({
                            tooltip: {
                                trigger: "item",
                                // showDelay: 0,
                                // transitionDuration: 0.2,
                                formatter: "{b} <br/>{c} (元/m2)"
                            },
                            series: [
                                {
                                    type: "map",
                                    map: "cz",
                                    roam: false,
                                    itemStyle: {
                                        normal: {label: {show: false}, borderColor: "#FFFFFF"}
                                    },
                                    data: xData
                                }
                            ],
                            animationEasing: "elasticOut"
                        });
                    });
            },
            trendMap() {
                if (!this.trend) {
                    this.trend = echarts.init(document.getElementById("trend"));
                }
                this.trend.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['2015', '2016', '2017', '2018']
                    },
                    grid: {
                        left: '1%',
                        right: '3%',
                        bottom: '7%',
                        top: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        min:0,
                        max:8000,
                        interval: 2000,
                        type: 'value',
                        axisLabel: {
                            formatter: '{value} 元'
                        }
                    },
                    series: [{
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        data: [4481, 4057, 6589, 6455],
                        type: 'line'
                    }]
                });
            },
            compriseMap() {
                if (!this.comprise) {
                    this.comprise = echarts.init(document.getElementById("comprise"));
                }
                this.comprise.setOption({
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['城东', '城南', '城西', '城北'],
                    },
                    grid: {
                        left: '1%',
                        right: '1%',
                        bottom: '7%',
                        top: '22%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018']
                    },
                    yAxis: {
                        name: '元',
                        type: 'value'
                    },
                    series: [
                        {
                            name: '城东',
                            type: 'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '城南',
                            type: 'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '城西',
                            type: 'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '城北',
                            type: 'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },

                            data: [320, 332, 301, 334, 390, 330, 320]
                        }
                    ]
                });
            },
            publicNumCharts() {
                if (!this.publicNum) {
                    this.publicNum = echarts.init(document.getElementById("publicNum"));
                }
                var _this = this;
                Server.get({
                    url: services.queryurb,
                    params: {
                        position: _this.model1
                    }
                }).then(function(res){
                    let Data=[];
                    Data.push({
                        school:res.data[0].school,
                        hospital:res.data[0].hospital,
                        business:res.data[0].business,
                        goverment:res.data[0].goverment,
                        station:res.data[0].station,
                    });
                    _this.publicNum.setOption({
                        color: ["#3398DB"],
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "shadow"
                            }
                        },
                        xAxis: {
                            type: 'category',
                            data: ['学校', '医院', '政府机构', '商场', '车站']
                        },
                        grid: {
                            left: '5%',
                            right: '5%',
                            bottom: '10%',
                            top: '15%',
                        },
                        yAxis: {
                            name: '个',
                            type: 'value'
                        },
                        series: [{
                            barWidth: "40%",
                            label: {
                                normal: {
                                    show: true,
                                    position: "top"
                                }
                            },
                            data:[Data[0].school,Data[0].hospital,Data[0].business,Data[0].goverment,Data[0].station],
                            type: 'bar'
                        }]
                    });
                });
            },
        }
    };
</script>
<style lang="less" scoped>
    .group-panel-box {
        &.blue {
            .panel-title {
                background: #2d8cf0;
                margin-left: 5%;
                margin-right: 5%
        }
            .panel-line {
                background: #2d8cf0;
                margin-left: 5%;
                margin-right: 5%
            }
        }
        .panel-title {
            float: left;
            padding: 0 10px;
            height: 30px;
            line-height: 30px;
            color: white;
            font-size: 14px;
            margin-left: 10px;
            clear: both;
        }
        .panel-line {
            height: 2px;
            clear: both;
        }
    }
    .chartImage {
        position: relative;
        left: 0;
        float: right;
        top: -51px;
        cursor: pointer;
    }
    .slelectInput{
        width: 80px;
        float: right;
    }
    .chart {
        height: 200px;
        width: 600px;
    }
    .data-view {
        padding: 20px;
        .group-header {
            height: 20px;
        }
        .ivu-row {
            /*.left {*/
                /*padding-right: 10px;*/
            /*}*/
            .right {
                padding-left: 10px;
            }
            .card-box {
                .card-tools {
                    span {
                        float: left;
                    }
                    .ivu-select {
                        float: left;
                        margin: 4px 20px 4px 5px;
                        width: 150px;
                        .ivu-select-selection {
                            border-radius: 0;
                        }
                    }
                }
            }
        }
    }
</style>

