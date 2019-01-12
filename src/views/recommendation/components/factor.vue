<template>
    <div class="wripper">
        <Row>
            <Col span="18">
                <div style="margin-top: 45px;width: 850px;margin-left: 248px;height:950px;background-color: #ffffff;padding: 14px">
                    <div slot="title" style="border-bottom:1px solid #d3d3d3;margin-bottom: 10px">
                        <Icon type="md-aperture" size="20"/>
                        <strong>
                            <span style="margin-left: 5px;font-size: 18px">影响因子权重调整</span>
                        </strong>
                    </div>
                    <Form :model="formItem" :label-width="80">
                        <p>建筑特征</p>
                        <Row>
                            <Col span="5">
                                <FormItem label="绿化率">
                                    <Slider v-model="formItem.greeningRate" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.greeningRate}}</p>
                            </Col>
                            <Col span="5">
                                <FormItem label="停车位">
                                    <Slider v-model="formItem.parking" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.parking}}</p>
                            </Col>
                            <Col span="5">
                                <FormItem label="层数">
                                    <Slider v-model="formItem.floor" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.floor}}</p>
                            </Col>
                            <Col span="5">
                                <FormItem label="容积率">
                                    <Slider v-model="formItem.plotRatio" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.plotRatio}}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="13">
                                <FormItem label="户型：">
                                    <CheckboxGroup>
                                        <Checkbox label="平层户型"></Checkbox>
                                        <Checkbox label="错层户型"></Checkbox>
                                        <Checkbox label="跃层户型"></Checkbox>
                                        <Checkbox label="复式户型"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Col>
                            <Col span="11">
                                <FormItem label="建筑结构：">
                                    <CheckboxGroup>
                                        <Checkbox label="低层"></Checkbox>
                                        <Checkbox label="多层"></Checkbox>
                                        <Checkbox label="小高层"></Checkbox>
                                        <Checkbox label="高层"></Checkbox>
                                        <Checkbox label="超高层"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Col>
                        </Row>
                        <p>邻里特征</p>
                        <Row>
                            <Col span="10">
                                <FormItem label="学校">
                                    <Slider v-model="formItem.school" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.school}}</p>
                            </Col>
                            <Col span="13" style="padding: 7px;padding-left: 60px">
                                <CheckboxGroup>
                                    <Checkbox label="幼儿园"></Checkbox>
                                    <Checkbox label="小学"></Checkbox>
                                    <Checkbox label="初中"></Checkbox>
                                    <Checkbox label="高中"></Checkbox>
                                    <Checkbox label="大学"></Checkbox>
                                </CheckboxGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="10">
                                <FormItem label="医院">
                                    <Slider v-model="formItem.hosptial" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.hosptial}}</p>
                            </Col>
                            <Col span="13" style="padding: 7px;padding-left: 60px">
                                <CheckboxGroup>
                                    <Checkbox label="三甲医院"></Checkbox>
                                    <Checkbox label="诊所"></Checkbox>
                                    <Checkbox label="三甲医院"></Checkbox>
                                    <Checkbox label="诊所"></Checkbox>
                                </CheckboxGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="10">
                                <FormItem label="车站">
                                    <Slider v-model="formItem.station" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.station}}</p>
                            </Col>
                            <Col span="13" style="padding: 7px;padding-left: 60px">
                                <CheckboxGroup>
                                    <Checkbox label="火车站"></Checkbox>
                                    <Checkbox label="汽车站"></Checkbox>
                                    <Checkbox label="高铁站"></Checkbox>
                                </CheckboxGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="10">
                                <FormItem label="商场">
                                    <Slider v-model="formItem.market" :step="10" show-stops></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.market}}</p>
                            </Col>
                            <Col span="13" style="padding: 7px;padding-left: 60px">
                                <CheckboxGroup>
                                    <Checkbox label="广场"></Checkbox>
                                    <Checkbox label="大商场"></Checkbox>
                                    <Checkbox label="大型超市"></Checkbox>
                                    <Checkbox label="商店"></Checkbox>
                                </CheckboxGroup>
                            </Col>
                        </Row>
                        <p>区位特征</p>
                        <Row>
                            <Col span="8" style="text-align:center">
                                <i-Circle
                                        :size="120"
                                        :trail-width="4"
                                        :stroke-width="5"
                                        :percent=percent1
                                        stroke-linecap="square"
                                        stroke-color="#43a3fb">
                                    <div class="demo-Circle-custom">
                                        <p style="margin-bottom: 10px">地价等级</p>
                                        <p>{{ percent1}}</p>
                                    </div>
                                </i-Circle>
                                <ButtonGroup>
                                    <Button icon="md-add" @click="add"></Button>
                                    <Button icon="md-remove" @click="minus"></Button>
                                </ButtonGroup>
                            </Col>
                            <Col span="8" style="text-align:center">
                                <i-Circle
                                        :size="120"
                                        :trail-width="4"
                                        :stroke-width="5"
                                        :percent=percent2
                                        stroke-linecap="square"
                                        stroke-color="#43a3fb">
                                    <div class="demo-Circle-custom">
                                        <p style="margin-bottom: 10px">公交线个数</p>
                                        <p>{{ percent2}}</p>
                                    </div>
                                </i-Circle>
                                <ButtonGroup>
                                    <Button icon="md-add" @click="add2"></Button>
                                    <Button icon="md-remove" @click="minus2"></Button>
                                </ButtonGroup>
                            </Col>
                            <Col span="8" style="text-align:center">
                                <!--<div style="float:left;margin-top:50px;margin-left: 45px;">公交线个数</div>-->
                                <i-Circle
                                        :size="120"
                                        :trail-width="4"
                                        :stroke-width="5"
                                        :percent=percent3
                                        stroke-linecap="square"
                                        stroke-color="#43a3fb">
                                    <div class="demo-Circle-custom">
                                        <p style="margin-bottom: 10px">道路便捷性</p>
                                        <p>{{ percent3}}</p>
                                    </div>
                                </i-Circle>
                                <ButtonGroup>
                                    <Button icon="md-add" @click="add3"></Button>
                                    <Button icon="md-remove" @click="minus3"></Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                        <FormItem>
                            <div style="text-align: center;margin-top:20px">
                                <Button style="margin-right: 20px" type="primary" @click="showTable">确定</Button>
                                <Button style="margin-right: 80px">重置</Button>
                            </div>
                        </FormItem>
                    </Form>
                </div>
            </Col>
            <Col span="4">
                <Alert show-icon style="width:200px;margin-top: 45px">
                    <h3>用户提示</h3>
                    <Icon type="ios-bulb-outline" slot="icon"></Icon>
                    <p style="font-weight: normal;font-size: 12px">在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型。</p>
                </Alert>
            </Col>
        </Row>
    </div>
</template>
<script>
    import Server from "@/core/server";
    import {services} from "@/core/config/services";
    import userMessage from "@/vuex/store";

    export default {
        computed: {
            color() {
                let color = '#2db7f5';
                return color;
            }
        },
        data() {
            return {
                percent1: 30,
                percent2: 20,
                percent3: 50,
                formItem: {
                    greeningRate: "30",
                    parking: "40",
                    floor: "20",
                    plotRatio: "60",
                    school: "40",
                    hosptial: "60",
                    station: "70",
                    market: "20",
                    percent1: "0",
                    percent2: "0"
                }
            };
        },

        methods: {
            add() {
                if (this.percent1 >= 100) {
                    return false;
                }
                this.percent1 += 10;
            },
            minus() {
                if (this.percent1 <= 0) {
                    return false;
                }
                this.percent1 -= 10;
            },
            add2() {
                if (this.percent2 >= 100) {
                    return false;
                }
                this.percent2 += 10;
            },
            minus2() {
                if (this.percent2 <= 0) {
                    return false;
                }
                this.percent2 -= 10;
            },
            add3() {
                if (this.percent3 >= 100) {
                    return false;
                }
                this.percent3 += 10;
            },
            minus3() {
                if (this.percent3 <= 0) {
                    return false;
                }
                this.percent3 -= 10;
            },
            showTable(){
                this.$router.push("/recommendHousing");
            }
            // tomapMatching() {
            //     Server.get({
            //         url: services.rightHouseInfo,
            //         params: {
            //             sorting: "",
            //             column: ""
            //         }
            //     }).then(rsp => {
            //         if (rsp.status === 1) {
            //             // this_.information = rsp.data;
            //             userMessage.commit("user_message", rsp);
            //             // this_.total = rsp.length;
            //         }
            //     });

            //     this.$router.push("/mapMatching");
            // }
        },
    };
</script>

<style lang="less" scoped>
    .ivu-alert.ivu-alert-with-icon {
        padding: 8px 5px 8px 38px;
    }

    .ivu-layout {
        height: 1024px;
    }

    .wripper {
        height: 100%;
        width:  100%;
        padding-top: 20px;
        /*background: url(../../assets/img/house.jpg)  no-repeat ;*/
    }

    p {
        font-size: 14px;
        font-weight: bold;
    }
</style>
