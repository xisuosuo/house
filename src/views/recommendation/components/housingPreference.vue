<template>
    <Layout>
        <Content>
            <div  style="margin: 0 auto;width: 95%;">
                <!--<TabPane label="基于用户推荐">-->
                    <Card>
                        <span style="margin: 15px">昵称:</span>
                        <span>{{this.user}}</span>
                        <span style="margin: 15px">年龄:</span>
                        <span>{{this.userage}}</span>
                        <span style="margin: 15px">资金:</span>
                        <span>{{this.money}}</span>
                        <span style="margin: 15px">教育程度:</span>
                        <span>{{this.educations}}</span>
                        <span style="margin: 15px">用户类型:</span>
                        <span>{{this.userInfo.roleName}}</span>
                        <span style="margin: 15px">注册时间:</span>
                        <span>{{this.userInfo.createTime}}</span>
                        <router-link to="/personal">
                        <Button style="margin-right: 20px;margin-left: 20px">更新基本信息</Button>
                        </router-link>
                        <router-link to="/personalcenter">
                        <Button style="margin-right: 20px">查看收藏小区</Button>
                        </router-link>
                    </Card>
                    <Card>
                        <Row :gutter="30">
                            <div v-for="(value,index) in information1">
                                <Col span="8">
                                    <Card style="padding: 0;">
                                        <div style="text-align:center">
                                            <img @click="getInfo(index,value)" style="width: 320px;height: 230px"
                                                 v-bind:src="value.image" alt="">
                                            <div style="overflow: hidden">
                                                <h2 style="float: left;font-size: 15px">{{value.name}}</h2>
                                                <img v-if="value.collected == '0'" :src=uncollect alt="" title="收藏"
                                                     @click="Collection(index,value)"
                                                     style="width: 15px;height: 15px;margin-top: 7px;margin-left: 15px;float: left">
                                                <img v-else-if="value.collected == '1'" :src=collect alt="" title="取消收藏"
                                                     @click="Collection(index,value)"
                                                     style="width: 15px;height: 15px;margin-top: 7px;margin-left: 15px;float: left">
                                                <span style="float: right">{{value.price}}元/㎡</span>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </div>
                        </Row>
                    </Card>
                    <card>
                        <div>
                            <div v-for="(value,index) in information2" :key="index">
                                <div @click="location(index,value)" style="border-bottom:1px solid #999">
                                    <Row>
                                        <Col span="7">
                                            <div class="left mend_img">
                                                <img style="width: 250px;height: 150px;margin-top: 20px;margin-bottom: 10px"
                                                     v-bind:src="value.image"/>
                                            </div>
                                        </Col>
                                        <Col span="17">
                                            <div class="left name" style="margin-top: 35px">
                                                <div style="margin-top: 25px;float: right;margin-right: 10%">
                                                    <span style="color: red;font-weight: bold;">均价：{{value.price}}元/㎡</span>
                                                    <p style="margin-top: 5px;font-size: 13px">
                                                        <span>楼层高度：{{value.houseHeight}}</span>
                                                    </p>
                                                    <p style="margin-top: 5px;font-size: 13px">
                                                        <span>销售情况：{{value.isSelling}}</span>
                                                    </p>
                                                    <p style="margin-top: 5px;font-size: 13px">
                                                        <span>停车位：{{value.parkingSpace}}个</span>
                                                    </p>
                                                </div>
                                                <h2 style="display:inline-block;font-size: 15px">{{value.name}}</h2>
                                                <img v-if="value.collected == '0'" :src=uncollect alt="" title="收藏"
                                                     @click="Collection(index,value)" id="index"
                                                     style="width: 15px;height: 15px;margin-left: 20px">
                                                <img v-else-if="value.collected == '1'" :src=collect alt="" title="取消收藏"
                                                     @click="Collection(index,value)"
                                                     style="width: 15px;height: 15px;margin-left: 20px">

                                                <p style="margin-top: 5px;font-size: 13px">
                                                    <span>价格说明：</span>在{{value.minPrice}}元/㎡ ~ {{value.maxPrice}}元/㎡之间
                                                </p>
                                                <p style="margin-top: 5px;font-size: 13px">
                                                    <span>物业类型：</span>{{value.houseType}}</p>
                                                <p style="margin-top: 5px;font-size: 13px">
                                                    <span>地址：</span>{{value.address}}</p>
                                                <p style="margin-top: 5px">
                                                    <a @click="getInfo(index,value)"
                                                       style="font-size: 10px">查看小区详情>></a>
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </card>
                <!--</TabPane>-->
                <!--<TabPane label="基于住宅推荐">-->
                    <!--<Card>-->
                        <!--<div>-->
                            <!--<Input v-model="value6" placeholder="请输入小区名" style="width: 200px;margin: 10px;" />-->
                            <!--<Button type="primary" @click="getSmiarly" class="submit">确定</Button>-->
                        <!--</div>-->
                    <!--</Card>-->
                    <!--<div>-->
                        <!--<Row :gutter="30">-->
                            <!--<div v-for="(value,index) in BaseOnHouses">-->
                                <!--<Col span="8">-->
                                    <!--<Card style="padding: 0;">-->
                                        <!--<div style="text-align:center">-->
                                            <!--<img @click="getInfo(index,value)" style="width: 320px;height: 230px"-->
                                                 <!--v-bind:src="value.image" alt="">-->
                                            <!--<div style="overflow: hidden">-->
                                                <!--<h2 style="float: left;font-size: 16px">{{value.name}}</h2>-->
                                                <!--<img v-if="value.collected == '0'" :src=uncollect alt="" title="收藏"-->
                                                     <!--@click="Collection(index,value)"-->
                                                     <!--style="width: 15px;height: 15px;margin-top: 7px;margin-left: 15px;float: left">-->
                                                <!--<img v-else-if="value.collected == '1'" :src=collect alt="" title="取消收藏"-->
                                                     <!--@click="Collection(index,value)"-->
                                                     <!--style="width: 15px;height: 15px;margin-top: 7px;margin-left: 15px;float: left">-->
                                                <!--<span style="float: right">{{value.price}}元/㎡</span>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</Card>-->
                                <!--</Col>-->
                            <!--</div>-->
                        <!--</Row>-->
                    <!--</div>-->
                <!--</TabPane>-->
            </div>
        </Content>
    </Layout>
</template>
<script>
    import Server from "@/core/server";
    import {services} from "@/core/config/services";
    import houseInfoId from "@/vuex/store";
    import dataRap from "@/vuex/store";
    import aroundInfo from "@/vuex/store";
    import housePoint from "@/vuex/store";

    export default {
        computed: {},
        data() {
            return {
                distance: "1000",
                value6:'南台新苑安',
                information2: [],
                information1: [],
                houseName: "",
                collect: require(`.././../../assets/img/collect.png`),
                uncollect: require(`.././../../assets/img/uncollect.png`),
                userInfo: [],
                userage: [],
                money: [],
                educations: [],
                age: [
                    {
                        value: "1",
                        label: "25岁以下"
                    },
                    {
                        value: "2",
                        label: "26-30岁"
                    },
                    {
                        value: "3",
                        label: "31-35岁"
                    },
                    {
                        value: "4",
                        label: "36-40岁"
                    },
                    {
                        value: "5",
                        label: "41-45岁"
                    },
                    {
                        value: "6",
                        label: "46-50岁"
                    },
                    {
                        value: "7",
                        label: "51-55岁"
                    },
                    {
                        value: "8",
                        label: "51-55岁"
                    },
                    {
                        value: "9",
                        label: "60岁以上"
                    }
                ],
                capital: [
                    {
                        value: "1",
                        label: "1w以下"
                    },
                    {
                        value: "2",
                        label: "1w-3w"
                    },
                    {
                        value: "3",
                        label: "3w-5w"
                    },
                    {
                        value: "4",
                        label: "5w-10w"
                    },
                    {
                        value: "5",
                        label: "10w-20w"
                    },
                    {
                        value: "6",
                        label: "20w-50w"
                    },
                    {
                        value: "7",
                        label: "80w-150w"
                    },
                    {
                        value: "8",
                        label: "80w-150w"
                    },
                    {
                        value: "9",
                        label: "150w以上"
                    }
                ],
                education: [
                    {
                        value: "1",
                        label: "小学及以下"
                    },
                    {
                        value: "2",
                        label: "初中"
                    },
                    {
                        value: "3",
                        label: "高中"
                    },
                    {
                        value: "4",
                        label: "中专"
                    },
                    {
                        value: "5",
                        label: "大专"
                    },
                    {
                        value: "6",
                        label: "本科"
                    },
                    {
                        value: "7",
                        label: "硕士"
                    },
                    {
                        value: "8",
                        label: "博士"
                    },
                    {
                        value: "9",
                        label: "博士以上"
                    }
                ],
                user: "",
                BaseOnHouses: []
            };
        },
        mounted() {
            this.getdata();
            this.getInfos();
            this.getSmiarly();
        },
        methods: {
            getSmiarly() {
                var this_ = this;
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                Server.get({
                    url: services.recommendedBaseOnHouse,
                    params: {
                        houseName:this.value6,
                        userId: userId
                    }
                }).then(function (rsp) {
                    if (rsp.status === 1) {
                        console.log(rsp);
                        this_.BaseOnHouses = rsp.data;
                        console.log(this.BaseOnHouses);
                    }
                });
            },
            getInfos() {
                var this_ = this;
                var user = JSON.parse(sessionStorage.getItem("userAccount"));
                this.user = user;
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                Server.get({
                    url: services.getInfo,
                    params: {
                        username: user,
                        userId: userId
                    }
                }).then(rsp => {
                    this.userInfo = rsp.data;
                    debugger
                    // this.userage = rsp.data.userEducationLevel;
                    for (let i = 1; i < 9; i++) {

                        if (this.userInfo.age == i) {
                            this.userage = this.age[i - 1].label;
                        }
                    }
                    for (let i = 1; i <= 9; i++) {
                        if (this.userInfo.userMoney == i) {
                            this.money = this.capital[i - 1].label;
                        }
                    }
                    for (let i = 0; i < 9; i++) {
                        if (this.userInfo.userEducationLevel == i) {
                            this.educations = this.education[i - 1].label;
                        }
                    }
                });
            },
            getInfo(index, value) {
                debugger;
                this.houseName = value.name;
                this.houseId = value.houseId;
                this.houseShape = value.Shape;
                housePoint.commit("housePoint", this.houseShape);
                Server.get({
                    url: services.compareHouseDetails,
                    params: {
                        houseId: this.houseId
                    }
                }).then(rsp => {
                    if (rsp.status === 1) {
                        houseInfoId.commit("houseInfoId", rsp);
                    }
                }).then(
                    Server.get({
                        url: services.road,
                        params: {
                            name: value.name,
                            tableName: "BUSSTATION",
                            distance:this.distance
                        }
                    }).then(rsp => {
                        debugger;
                        var _this = this;
                        if (rsp.status === 1) {
                            aroundInfo.commit("aroundInfo", rsp);
                            aroundInfo.commit("housueName", this.houseName);
                            this.$router.push("/houseinfo");
                        }
                    })
                );
            },
            getdata() {
                debugger;
                var information = JSON.parse(sessionStorage.getItem("information2"));
                this.information2 = information.slice(3, information.length);
                this.information1.push(information[0], information[1], information[2]);
            },
            Collection(index, value) {
                debugger;
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                if (value.collected === 0) {
                    this.houseName = value.name;
                    this.houseId = value.houseId;
                    Server.get({
                        url: services.addCollectHouse,
                        params: {
                            userId: userId,
                            houseName: this.houseName
                        }
                    }).then(rsp => {
                        this.$Message.success(rsp.message);
                        value.collected = 1;
                    });
                } else if (value.collected === 1) {
                    this.houseName = value.name;
                    this.$Modal.confirm({
                        title: "提示",
                        content: "是否取消收藏?",
                        onOk: () => {
                            Server.get({
                                url: services.delCollectHouse,
                                params: {
                                    userId: userId,
                                    houseName: this.houseName
                                }
                            }).then(rsp => {
                                if (rsp.status == 1) {
                                    this.$Message.success(rsp.message);
                                    value.collected = 0;
                                } else {
                                    this.$Message.error(rsp.message);
                                }
                            });
                        }
                    });
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    /*.userMessage.span{*/
        /*margin-left: 20px;*/
    /*}*/
    /*.ivu-form-item-content {*/
        /*position: relative;*/
        /*line-height: 32px;*/
        /*font-size: 14px;*/
    /*}*/
    /*.ivu-form .ivu-form-item-label {*/
        /*text-align: right;*/
        /*vertical-align: middle;*/
        /*float: left;*/
        /*font-size: 14px;*/
        /*color: #515a6e;*/
        /*line-height: 1;*/
        /*padding: 10px 12px 10px 0;*/
        /*box-sizing: border-box;*/
    /*}*/
    .ivu-tabs-bar {
        margin-bottom: 0;
    }

    .ivu-form-item {
        margin-bottom: 0;
    }
</style>
