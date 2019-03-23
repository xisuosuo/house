<template>
    <Card style="margin: 10px;">
        <div title="数据详情">
            <div class="group-panel-box blue">
                <div class="panel-title">数据统计</div>
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
    export default {
        data () {
            return {
                value: '',
                columns5: [
                    {
                        title: '小区',
                        key: 'houseName',
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
                ],
                data5:[],
            }
        },
        mounted() {
            var _this=this;
            Server.get({
                url: services.getallinfo,
            }).then(function(res){
                _this.data5 = res.data
            })
        },
        methods: {
            getinfo() {
                var _this=this;
                Server.get({
                    url: services.getallinfo,
                    params: {
                        name: _this.value
                    }
                }).then(function(res){
                    _this.data5 = res.data
                })
            }
        }
        }
</script>
<style lang="less" scoped>
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
</style>
