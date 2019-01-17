<template>
    <div class="wripper">
        <Row>
            <Col span="18">
                <Card style="margin-top: 45px;width: 850px;margin-left: 248px;">
                    <div slot="title">
                        <Icon type="md-aperture" size="20"/>
                        <strong>
                            <span style="margin-left: 5px;font-size: 18px">影响因子权重调整</span>
                        </strong>
                    </div>
                    <Form :model="formItem" :label-width="80">
                        <p>小区特征</p>
                        <Row>
                            <Col span="12">
                                <FormItem label="楼层：">
                                    <CheckboxGroup>
                                        <Checkbox label="低层"></Checkbox>
                                        <Checkbox label="多层"></Checkbox>
                                        <Checkbox label="小高层"></Checkbox>
                                        <Checkbox label="高层"></Checkbox>
                                        <Checkbox label="超高层"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem label="绿化率：">
                                    <CheckboxGroup>
                                        <Checkbox label="25%-30%"></Checkbox>
                                        <Checkbox label="30%-40%"></Checkbox>
                                        <Checkbox label="40%-45%"></Checkbox>
                                        <Checkbox label="45%-50%"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12">
                                <FormItem label="户型：">
                                    <CheckboxGroup>
                                        <Checkbox label="平层户型"></Checkbox>
                                        <Checkbox label="错层户型"></Checkbox>
                                        <Checkbox label="跃层户型"></Checkbox>
                                        <Checkbox label="复式户型"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Col>
                            <Col span="12">
                                <FormItem label="装修：">
                                    <CheckboxGroup>
                                        <Checkbox label="精装修"></Checkbox>
                                        <Checkbox label="普通装修"></Checkbox>
                                        <Checkbox label="毛坯房"></Checkbox>
                                    </CheckboxGroup>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="13">
                                <FormItem label="学区选择：">
                                    <Select v-model="model1" multiple style="width:250px"  placeholder="选择小学">
                                        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
                                            item.label }}
                                        </Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col span="11">
                                <Select v-model="model2" multiple style="width:250px"  placeholder="选择中学">
                                    <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label
                                        }}
                                    </Option>
                                </Select>
                            </Col>
                        </Row>

                        <Divider orientation="right">小区筛选</Divider>
                        <p>邻里特征</p>
                        <Row>
                            <Col span="10">
                                <FormItem label="教育">
                                    <Slider v-model="formItem.school" :step="10" show-stops @on-input="add()"></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.schools}}%</p>
                            </Col>
                            <Col span="13" style="padding: 7px;padding-left: 60px">
                                <CheckboxGroup>
                                    <Checkbox label="幼儿园"></Checkbox>
                                    <Checkbox label="小学"></Checkbox>
                                    <Poptip trigger="hover" placement="bottom-start">
                                        <Checkbox label="中学"
                                                  :indeterminate="indeterminate"
                                                  :value="checkAll"
                                                  @click.prevent.native="handleCheckAll">中学
                                        </Checkbox>
                                        <div class="api" slot="content">
                                            <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                                                <Checkbox label="一级中学"></Checkbox>
                                                <Checkbox label="二级中学"></Checkbox>
                                            </CheckboxGroup>
                                        </div>
                                    </Poptip>
                                    <Poptip trigger="hover" placement="bottom-start">
                                        <Checkbox label="大学">大学</Checkbox>
                                        <div class="api" slot="content">
                                            <CheckboxGroup>
                                                <Checkbox label="一级大学"></Checkbox>
                                                <Checkbox label="二级大学"></Checkbox>
                                            </CheckboxGroup>
                                        </div>
                                    </Poptip>
                                </CheckboxGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="10">
                                <FormItem label="医疗">
                                    <Slider v-model="formItem.hosptial" :step="10" show-stops @on-input="add"></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.hosptials}}%</p>
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
                                <FormItem label="交通">
                                    <Slider v-model="formItem.station" :step="10" show-stops @on-input="add"></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.stations}}%</p>
                            </Col>
                            <Col span="13" style="padding: 7px;padding-left: 60px">
                                <CheckboxGroup>
                                    <Checkbox label="火车站"></Checkbox>
                                    <Checkbox label="汽车站"></Checkbox>
                                    <Checkbox label="高铁站"></Checkbox>
                                    <Checkbox label="公交站"></Checkbox>
                                </CheckboxGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col span="10">
                                <FormItem label="休闲娱乐">
                                    <Slider v-model="formItem.market" :step="10" show-stops @on-input="add"></Slider>
                                </FormItem>
                            </Col>
                            <Col span="1">
                                <p style="margin: 7px">{{formItem.markets}}%</p>
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
                    </Form>
                    <div style="text-align: center;margin-top:20px">
                        <Button style="margin-right: 20px" type="primary" @click="showTable">确定</Button>
                        <Button style="margin-right: 80px">重置</Button>
                    </div>
                </Card>
            </Col>
            <Col span="5">
                <div>
                    <img class="light" v-show="!downIcon" @click="change" src="../../../assets/img/lightbulb1.png">
                    <img class="light" v-show="downIcon" @click="change" src="../../../assets/img/lightbulb2.png">
                    <Alert type=success id="tip" style="width:200px;">
                        <h3 style="margin-left:10px">用户提示</h3>
                        <p style="font-weight: normal;font-size: 12px;margin-left:10px">
                            在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前以此确定您的购房类型在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型。</p>
                    </Alert>
                </div>
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
                let color = "#2db7f5";
                return color;
            }
        },
        data() {
            return {
                cityList: [
                    {
                        value: '会峰小学',
                        label: '会峰小学'
                    },
                    {
                        value: '紫薇小学',
                        label: '紫薇小学'
                    },
                    {
                        value: '逸夫小学',
                        label: '逸夫小学'
                    },
                    {
                        value: '城南小学',
                        label: '城南小学'
                    },
                    {
                        value: '永乐小学',
                        label: '永乐小学'
                    },
                    {
                        value: '湘西路小学',
                        label: '湘西路小学'
                    },
                    {
                        value: '杨子路小学',
                        label: '杨子路小学'
                    },
                    {
                        value: '琅琊路小学',
                        label: '琅琊路小学'
                    },
                    {
                        value: '解放小学',
                        label: '解放小学'
                    },
                    {
                        value: '清流小学',
                        label: '清流小学'
                    },
                    {
                        value: '湖西路小学',
                        label: '湖西路小学'
                    },
                    {
                        value: '实验小学',
                        label: '实验小学'
                    },
                    {
                        value: '第二实验小学',
                        label: '第二实验小学'
                    },
                ],
                cityList2: [
                    {
                        value: '滁州二中',
                        label: '滁州二中'
                    },
                    {
                        value: '滁州三中',
                        label: '滁州三中'
                    },
                    {
                        value: '滁州五中',
                        label: '滁州五中'
                    },
                    {
                        value: '滁州六中',
                        label: '滁州六中'
                    },
                    {
                        value: '滁州七中',
                        label: '滁州七中'
                    },
                    {
                        value: '滁州八中',
                        label: '滁州八中'
                    },
                    {
                        value: '东坡中学',
                        label: '东坡中学'
                    },
                ],
                model1: [],
                model2: [],
                indeterminate: false,
                checkAll: false,
                checkAllGroup: [],
                downIcon: true,
                percent1: 30,
                percent2: 20,
                percent3: 50,
                formItem: {
                    greeningRate: "25",
                    parking: "25",
                    floor: "25",
                    plotRatio: "25",
                    school: 25,
                    schools: "",
                    hosptials: "",
                    stations: "",
                    markets: "",
                    hosptial: 25,
                    station: 30,
                    market: 30,
                }
            };
        },
        mounted() {
            this.add();
        },
        methods: {
            handleCheckAll() {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['一级中学', '二级中学'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange(data) {
                if (data.length === 2) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
            add() {
                let sum = this.formItem.school + this.formItem.hosptial + this.formItem.station + this.formItem.market;
                this.formItem.schools = ((this.formItem.school / sum) * 100).toFixed(2);
                this.formItem.hosptials = ((this.formItem.hosptial / sum) * 100).toFixed(2);
                this.formItem.stations = ((this.formItem.station / sum) * 100).toFixed(2);
                this.formItem.markets = ((this.formItem.market / sum) * 100).toFixed(2);
            },
            showTable() {
                this.$router.push("/recommendHousing");
            },
            change() {
                this.downIcon = !this.downIcon;
                var obj = document.getElementById("tip");
                if (tip.style.display == "none") {
                    tip.style.display = "block";
                } else {
                    tip.style.display = "none";
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    .ivu-alert.ivu-alert-with-icon {
        padding: 8px 5px 8px 38px;
    }

    .ivu-alert {
        padding-right: 18px
    }

    .ivu-layout {
        height: 1024px;
    }

    .light {
        cursor: pointer;
        width: 30px;
        height: 30px;
        margin-top: 55px;
        display: inline-block;
    }

    .wripper {
        height: 100%;
        width: 100%;
        /*background: url(../../assets/img/house.jpg)  no-repeat ;*/
    }

    p {
        font-size: 14px;
        font-weight: bold;
    }
</style>
