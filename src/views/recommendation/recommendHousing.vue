<template>
    <div style="margin:70px auto;width:1000px;">
        <Table style="height: 280px" stripe :columns="columns1" :data="data1"></Table>
    <Row>
        <Col span="12">
            <div id="trend" style="height: 360px;margin-top: 5px;margin-right: 5px; border: 1px solid  #dcdee2">
            </div>
        </Col>
        <Col span="12">
            <div id="comprise" style="height:360px;margin-top: 5px; margin-left: 5px;border: 1px solid  #dcdee2">
            </div>
        </Col>
    </Row>
    </div>

</template>
<script>
    import Server from "@/core/server";
    import {services} from "@/core/config/services";
    import userMessage from "@/vuex/store";

    var echarts = require("echarts");

    export default {
        data() {
            return {
                columns1: [
                    {
                        align: "center",
                        title: "小区名称",
                        key: "name"
                    },
                    {
                        align: "center",
                        title: "教育资源可达性",
                        key: "education"
                    },
                    {
                        align: "center",
                        title: "医疗资源可达性",
                        key: "Medical"
                    },
                    {
                        align: "center",
                        title: "交通资源可达性",
                        key: "traffic"
                    },
                    {
                        align: "center",
                        title: "休闲娱乐可达性",
                        key: "entertainment"
                    },
                    {
                        title: "操作",
                        key: "action",
                        maxWidth: 150,
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                                h("Button", {
                                    props: {
                                        shape: "circle",
                                        icon: "ios-create"
                                    },
                                    style: {
                                        marginRight: "5px"
                                    },
                                    on: {
                                        click: () => {
                                            this.showMap(params.row, params.index);
                                        }
                                    }
                                })
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: "John Brown",
                        education: 18,
                        Medical: "New York No. 1 Lake Park",
                        traffic: "2016-10-03",
                        entertainment: "123"
                    },
                    {
                        name: "John Brown",
                        education: 18,
                        Medical: "New York No. 1 Lake Park",
                        traffic: "2016-10-03",
                        entertainment: "123"
                    },
                    {
                        name: "John Brown",
                        education: 18,
                        Medical: "New York No. 1 Lake Park",
                        traffic: "2016-10-03",
                        entertainment: "123"
                    },
                    {
                        name: "John Brown",
                        education: 18,
                        Medical: "New York No. 1 Lake Park",
                        traffic: "2016-10-03",
                        entertainment: "123"
                    },
                    {
                        name: "John Brown",
                        education: 18,
                        Medical: "New York No. 1 Lake Park",
                        traffic: "2016-10-03",
                        entertainment: "123"
                    }
                ]
            };
        },
        mounted() {
            this.trendMap();
            this.compriseMap();
        },
        methods: {
            showMap() {
                Server.get({
                    url: services.rightHouseInfo,
                    params: {
                        sorting: "",
                        column: ""
                    }
                }).then(rsp => {
                    if (rsp.status === 1) {
                        // this_.information = rsp.data;
                        userMessage.commit("user_message", rsp);
                        // this_.total = rsp.length;
                    }
                });

                this.$router.push("/mapMatching");
            },
            trendMap() {
                if (!this.trend) {
                    this.trend = echarts.init(document.getElementById("trend"));
                }
                this.trend.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis:  {
                        type: 'value'
                    },
                    xAxis: {
                        type: 'category',
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [320, 302, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '邮件营销',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [150, 212, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '搜索引擎',
                            type: 'bar',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'inside'
                                }
                            },
                            data: [820, 832, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                });
            },
            compriseMap() {
                if (!this.comprise) {
                    this.comprise = echarts.init(document.getElementById("comprise"));
                }
                this.comprise.setOption({
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },
        }
    }
</script>
