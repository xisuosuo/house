<template>
    <div style="margin: 100px">
        <div style="margin-top: 55px">
            <Row :gutter="30">
                <Col span="12">
                    <div style="border: 1px solid #dcdee2;">
                        <Row>
                            <Col span="12">
                                <div style="padding: 5px">
                                    <span style="font-size: 14px"><strong>楼盘首页:</strong></span>
                                    <span style="font-size: 14px"><strong>{{this.houseInfo.name}}</strong></span>
                                    <img style="height: 250px;width: 300px;margin: 10px"
                                         v-bind:src="this.houseInfo.image" alt="">
                                </div>
                            </Col>
                            <Col span="12">
                                <div style="margin-top:40px;margin-left: 10px">
                                    <div>
                                        <div class="key"><strong>楼盘最低价:</strong></div>
                                        <div class="value light"><span class="price">{{this.houseInfo.price}}</span> 元/平方米
                                        </div>
                                        <Form :model="formItem" :label-width="70">
                                            <FormItem label="价格说明:">
                                                <span>最低价格为{{this.houseInfo.price}}</span>
                                            </FormItem>
                                            <FormItem label="楼盘位置:">
                                                <span>{{this.houseInfo.address}}</span>
                                            </FormItem>
                                            <FormItem label="开盘时间:">
                                                <span>2018年10月30日</span>
                                            </FormItem>
                                            <FormItem label="主力户型:">
                                                <span>{{this.detailList[0].imagename}}</span>
                                            </FormItem>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span="12">
                    <div style="border: 1px solid #dcdee2;">
                        <Row>
                            <Col span="12">
                                <div style="padding: 5px">
                                    <span style="font-size: 14px"><strong>户型:</strong></span>
                                    <span style="font-size: 14px"><strong>{{this.detailList[0].imagename}}</strong></span>
                                    <img style="height: 250px;width: 300px;margin: 10px"
                                        :src=detailList[0].image  alt="">
                                </div>
                            </Col>
                            <Col span="12">
                                <table style="margin-top: 50px">
                                    <tbody>
                                    <tr>
                                        <td class="label-l">居室：</td>
                                        <td valign="top" class="text-l"> {{this.detailList[0].imagename}}</td>
                                    </tr>
                                    <tr>
                                        <td class="label-l">层高：</td>
                                        <td valign="top" class="text-l"> 暂无</td>
                                    </tr>
                                    <tr>
                                        <td class="label-l">户型朝向：</td>
                                        <td valign="top" class="text-l"> 南</td>
                                    </tr>
                                    <tr>
                                        <td class="label-l">建筑面积：</td>
                                        <td valign="top" class="text-l"> 74.0平米</td>
                                    </tr>
                                    <tr>
                                        <td class="label-l">详情：</td>
                                        <td valign="top" class="text-l">{{this.detailList[0].charact}}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
            <br>
            <Row :gutter="30">
                <Col span="12">
                    <div style="border: 1px solid #dcdee2;height: 280px">
                        <div style="padding: 14px">
                            <h3>基本信息</h3>
                            <table class="table-noline">
                                <tbody>
                                <tr>
                                    <td class="label-l">楼盘名称：</td>
                                    <td valign="top" class="text-l"> {{this.houseInfo.name}}</td>
                                </tr>
                                <tr>
                                    <td class="label-l">物业类型：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.houseType}}</td>
                                    <td class="label-l">停车位：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.parkingSpace}}</td>
                                </tr>
                                <tr>
                                    <td class="label-l">建筑类型：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.houseHeight}}</td>
                                    <td class="label-r">绿化率：</td>
                                    <td valign="top" class="text-r">{{this.houseInfo.greeningRate}}</td>
                                </tr>
                                <tr>
                                    <td class="label-l">是否已售：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.isSelling}}</td>
                                    <td class="label-r">装修情况：</td>
                                    <td valign="top" class="text-r"> </td>
                                </tr>
                                <tr>
                                    <td class="label-l">楼盘地址：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.address}}</td>
                                    <td class="label-r">建筑面积：</td>
                                    <td valign="top" class="text-r"></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </Col>
                <Col span="12">
                    <div style="border: 1px solid #dcdee2;">
                        <div style="padding: 14px;height: 280px;overflow-y: scroll">
                            <h3>楼盘评论</h3>
                            <Form :model="formItem" :label-width="70">
                                <FormItem label="焦点网友:">
                                    <span>在园中植栽设计上，采用色彩丰富、复合种植、自然搭配的手法，树阵、花树搭配修剪成型的球类及绿篱错落有致，园中春夏秋冬，四季有景有保障中海项目，大企业，有保障中海项目，大企业，有保障中海项目，大企业，有保障</span>
                                </FormItem>
                                <FormItem label="焦点网友:">
                                    <span>在园中植栽设计上，采用色彩丰富、复合种植、自然搭配的手法，树阵、花树搭配修剪成型的球类及绿篱错落有致，园中春夏秋冬，四季有景有保障中海项目，大企业，有保障中海项目，大企业，有保障中海项目，大企业，有保障</span>
                                </FormItem>
                                <FormItem label="焦点网友:">
                                    <span>在园中植栽设计上，采用色彩丰富、复合种植、自然搭配的手法，树阵、花树搭配修剪成型的球类及绿篱错落有致</span>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import Server from "@/core/server";
    import {services} from "@/core/config/services";
    import houseInfoId from "@/vuex/store";
    export default {
        mounted() {
          this.getimg();
          this.getData()
        },
        data(){
            return{
                detailList:[],
                Id:[],
                houseInfo:[],
            }
        },
        methods:{
            getData() {
                debugger;
                var _this = this;
                this.Id = houseInfoId.state.houseId;
                console.log(houseInfoId.state.houseId);
                Server.get({
                    url: services.compareHouseDetails,
                    params: {
                        houseId: _this.Id
                    }
                }).then(function (rsp) {
                    if (rsp.status === 1) {
                        console.log(rsp);
                        _this.houseInfo = rsp.data;
                    }
                });
            },
            getimg() {
                var _this = this;
                Server.get({
                    url: services.getImageToCommunity
                }).then(rsp => {
                    if (rsp.status === 1) {
                        _this.detailList = rsp.imageData;
                    }
                });
            },

        },
    }
</script>

<style lang="less" scoped>
    .value {
        display: inline-block;
        zoom: 1;
        _zoom: 1;
        *display: inline;
        padding-left: 8px;
    }

    .price {
        color: #e43;
        font-size: 30px;
        font-weight: 700;
        vertical-align: baseline;
        margin-right: 5px;
    }

    .key {
        font-size: 14px;
        display: inline-block;
        white-space: nowrap;
    }

    .label-l {
        min-width: 70px;
        color: #666;
        text-align: right;
        vertical-align: top;
        white-space: nowrap;
        padding: 5px 0;
        line-height: 24px;
    }

    .label-r {
        width: 74px;
        text-align: right;
        color: #666;
        vertical-align: top;
        white-space: nowrap;
        padding: 5px 0;
        line-height: 24px;
    }

    .text-l {
        width: 366px;
        line-height: 24px;
        vertical-align: top;
        padding: 5px 40px 5px 4px;
    }

    .text-r {
        width: 286px;
        line-height: 24px;
        overflow: hidden;
        display: inline-block;
    }

    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }

    td {
        margin: 5px;
    }

    .ivu-form-item {
        margin-bottom: 1px;
    }

    .ivu-divider-horizontal {
        display: block;
        height: 1px;
        width: 100%;
        min-width: 100%;
        margin: 15px 0;
        clear: both;
    }
</style>