<template>
    <Card style="margin: 10px;">
        <div title="数据详情">
            <div class="group-panel-box blue">
                <div class="panel-title">属性查询</div>
                <div class="panel-line"></div>
            </div>
        </div>
        <div style="overflow: hidden;">
            <div style="float: right">
                <Input v-model="value" placeholder="请输入小区名" style="width: 200px;margin: 10px;" />
                <Button type="primary" @click="getinfo" class="submit">查询</Button>
            </div>
        </div>
            <Table height="520"   stripe border :columns="columns5" :data="data5"></Table>
    </Card>
</template>
<script>
    import Server from "@/core/server";
    import { services } from "@/core/config/services";
    import houseInfoId from "@/vuex/store";
    import dataRap from "@/vuex/store";
    import aroundInfo from "@/vuex/store";
    import housePoint from "@/vuex/store";
    export default {
        data () {
            return {
                distance: "1000",
                value: '',
                columns5: [
                    {
                        title: '小区图片',
                        key: 'img',
                        align: 'center',
                        width: 180,
                        render: (h, params) => {
                            console.log(params.row);
                            return h('img', {
                                attrs: {
                                    src:  params.row.image,
                                },
                                style: {
                                    marginRight: '5px',height:'80px',width:'130px',
                                }
                            });
                        }
                    },
                    {
                        title: '小区名称',
                        key: 'name',
                        align:'center'
                    },
                    {
                        title: '地址',
                        key: 'address',
                    },
                    {
                        title: '价格',
                        sortable: true,
                        key: 'price',
                        align:'center'
                    },
                    {
                        title: '详情',
                        key: 'details'
                    },
                    {
                        title: '是否在售',
                        key: 'isSelling',
                        align:'center'
                    },
                    {
                        title: '小区详情',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.getHouseInfo(params.row, params.index)
                                        }
                                    }
                                }, '小区详情'),
                            ]);
                        }
                    }
                ],
                data5:[],
                houseShape:[],
                houseId:[],
            }
        },
        mounted() {
            this.$Spin.show({
                render: (h) => {
                    return h('div', [
                        h('Icon', {
                            'class': 'demo-spin-icon-load',
                            props: {
                                type: 'ios-loading',
                                size: 22
                            }
                        }),
                        h('div', '正在加载数据')
                    ])
                }
            });
            var _this=this;
            Server.get({
                url: services.getallinfo,
            }).then(function(res){
                _this.data5 = res.data;
                _this.houseShape = res.data.Shape;
                _this.houseId = res.data.houseId;
                _this.$Spin.hide();
            })
        },
        methods: {
            getHouseInfo(currentRow, index) {
                currentRow.Index = index;
                this.selectedRow = currentRow;
                var row = this.selectedRow;
                this.houseName = row.name;
                this.houseId = row.houseId;
                housePoint.commit("housePoint", this.houseShape);
                Server.get({
                    url: services.compareHouseDetails,
                    params: {
                        houseId:  this.houseId
                    }
                }).then(rsp => {
                        if (rsp.status === 1) {
                            houseInfoId.commit("houseInfoId", rsp);
                        }
                    }).then(
                        Server.get({
                            url: services.road,
                            params: {
                                name: this.houseName,
                                tableName: "BUSSTATION",
                                distance:this.distance
                            }
                        }).then(rsp => {
                            if (rsp.status === 1) {
                                aroundInfo.commit("aroundInfo", rsp);
                                aroundInfo.commit("housueName", this.houseName);
                                this.$router.push("/houseinfo");
                            }
                        })
                    );
            },
            getinfo() {

                var _this=this;
                Server.get({
                    url: services.getallinfo,
                    params: {
                        name: _this.value
                    }
                }).then(function(res){
                    _this.data5 = res.data;
                })
            }
        }
        }
</script>
<style lang="less" >

    // .ivu-layout {
    //     height: 1024px;
    // }
    .submit{
        margin: 10px;
        margin-right: 0;
    }
    .pageFoot{
        margin-top: 10px;
     float: right;
    }
    .group-panel-box {
        &.blue {
            .panel-title {
                background: #2d8cf0;
            }
            .panel-line {
                background: #2d8cf0;
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
        width: 200px;
        float: right;
    }

    .data-view {
        padding: 20px;
        height: 1450px;
        .group-header {
            height: 20px;
        }
        .ivu-row {
            .left {
                padding-right: 10px;
            }
            .right {
                padding-left: 10px;
            }
            .chart {
                height: 400px;
                width: 100%;
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
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>
