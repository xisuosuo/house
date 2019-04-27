<template>
    <div class="themes" style="text-align: center;overflow-y: hidden">
        <div style="margin-top: 20px;">
            <div id="part1" class="map" style=";margin: 0 auto;height: 650px;width: 1200px;border:1px;">
                <div title="数据台账">
                    <div class="group-panel-box blue">
                        <div class="panel-title">房产用途位置确定</div>
                        <div class="panel-line"></div>

                        <Input size="large" search enter-button="确 定" @on-search="next" style="margin:auto;margin-top:250px;width:600px;" placeholder="请输入小区名称或地址" />
                        <div style="margin-top:5px;">
                            <Select v-model="model1" style="width:150px">
                                <Option v-for="item in Orientation" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                            <Input v-model="value" placeholder="面积" style="width: 150px" />
                            <Input v-model="value" placeholder="所在楼层" style="width: 150px" />
                            <Input v-model="value" placeholder="总楼层" style="width: 150px" />
                        </div>

                        <ul id="reportprocess" class="process">
                            <li class="process_1">房产位置和用途确定</li>
                            <li class="prcess_arrows arrows1"></li>
                            <li class="process_2">获取位置点房价行情</li>
                            <li class="prcess_arrows arrows2"></li>
                            <li class="process_3">填写房产特征信息</li>
                            <li class="prcess_arrows arrows3"></li>
                            <li class="process_4">快速估价结果</li>
                            <li class="prcess_arrows arrows4"></li>
                            <li class="process_5">评估调查报告</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="part2" style=" display: none; height: 650px;background-color: #f9f9fb;text-align: center;">

            <div style="width: 1200px; height: 650px;margin: 0 auto">
                <Row :gutter="16">
                    <Col span="12">
                    <div style="height: 300px;width: 600px;margin-top: 55px">
                        <Table height="300" stripe :columns="columns1" :data="data1"></Table>
                    </div>

                    </Col>
                    <Col span="12">
                    <div style="height: 245px;width: 600px;border: 1px solid #dcdee2;margin-top: 55px;overflow: hidden">
                        <smallMapView v-if="map"></smallMapView>
                    </div>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="12">
                    <div id="part3" style="height: 330px; width: 600px; border: 1px solid #dcdee2">
                        <div style="margin: 20px">
                            <div style="background-color:#f8f8f9;height:120px;width: 100%;">
                                <p style="font-size: 30px;color: #2d8cf0;text-align: left;margin: 20px">
                                    <strong style="margin-right: 180px">单价:6992/m2</strong>
                                    <strong>总价:70万</strong>
                                </p>
                                <div style="text-align: left">
                                    <span style="font-size: 14px;margin-right: 80px;margin-left: 20px;">
                                        <a href="#">房贷计算器</a>
                                    </span>
                                    <span style="margin-right: 20px;font-size: 14px;">估价时间：2018/12/18</span>
                                </div>
                            </div>
                            <Button style="text-align: left;margin: 20px" @click="next1">重新估价</Button>
                            <Button style="text-align: left;" @click="assessment">精准估价</Button>
                            <Modal v-model="Model" title="精准评估" :loading="loading" @on-ok="asyncOK">
                                <Row :gutter="40">
                                    <Col span="11">
                                    <Form :model="formItem" :label-width="80">
                                        <FormItem label="小区">
                                            <Input v-model="formItem.input"></Input>
                                        </FormItem>
                                    </Form>
                                    <Form :model="formItem" :label-width="80">
                                        <FormItem label="楼栋">
                                            <Input v-model="formItem.input"></Input>
                                        </FormItem>
                                    </Form>
                                    <Form :model="formItem" :label-width="80">
                                        <FormItem label="朝向">
                                            <Input v-model="formItem.input"></Input>
                                        </FormItem>
                                    </Form>
                                    <Form :model="formItem" :label-width="80">
                                        <FormItem label="面积">
                                            <Input v-model="formItem.input"></Input>
                                        </FormItem>
                                    </Form>
                                    <Form :model="formItem" :label-width="80">
                                        <FormItem label="楼层">
                                            <Input v-model="formItem.input"></Input>
                                        </FormItem>
                                    </Form>
                                    </Col>
                                    <Col span="11">
                                    <Select v-model="model2" style="width:150px;margin-bottom:14px">
                                        <Option v-for="item in houseType" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <Select v-model="model3" style="width:150px;margin-bottom:14px">
                                        <Option v-for="item in year" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <Select v-model="model4" style="width:150px;margin-bottom:14px">
                                        <Option v-for="item in structure" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <Select v-model="model5" style="width:150px;margin-bottom:14px">
                                        <Option v-for="item in type" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <Select v-model="model6" style="width:150px;margin-bottom:14px">
                                        <Option v-for="item in environment" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    <Select v-model="model7" style="width:150px;margin-bottom:14px">
                                        <Option v-for="item in noise" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                    </Select>
                                    </Col>
                                </Row>

                            </Modal>
                        </div>
                    </div>
                    </Col>

                    <Col span="12">
                    <div style="height: 330px;width: 609px;border: 1px solid #dcdee2">
                        <Tabs value="name1">
                            <TabPane label="小区评级" name="name1">
                                <div style="overflow: hidden;text-align: left">
                                    <div class="image" style="margin: 0 10px; height: 150px;width: 200px;float: left">
                                        <img style="width: 190px;height: 100px" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" alt="pic" />
                                        <div style="margin-left: 30px">
                                            <Rate v-model="rate" />
                                        </div>
                                    </div>
                                    <span>精装全配无税无尾款 拎包入住 电器都是新的 采光好业主心态诚心出售，工作调动，外地买房，价格可小刀，小区配套车库，车位 ，24小时保安巡楼 超市，学校 菜场服务介绍收取服务费：最高7280元（≤1%）本店经营一手楼盘代理，二手房买卖，银行贷款 代理过户 专业诚信，专车接送</span>
                                </div>
                                <div style="float: left;text-align: left;margin: 20px;width: 500px">
                                    <span>超过其他小区评分</span>
                                    <Progress :percent="25" status="active" />
                                    <span>超过其他小区评分</span>
                                    <Progress :percent="45" status="active" />
                                </div>
                            </TabPane>
                            <TabPane label="小区详情" name="name4">
                                <div>
                                    <div style="text-align:left">
                                        <div style="height: 60px;width: 600px;padding-left: 50px;background-color: #f5f6f5">
                                            <p style="color: green;font-size: 15px;padding-top: 5px">小区基准价：</p>
                                            <p style="color: red;font-size: 25px">6448元/m2</p>
                                        </div>
                                    </div>
                                    <div style="height: 110px; width: 500px;text-align: left;margin-left: 30px">
                                        <p style="margin: 20px;">小区地址：安徽省滁州市丰乐南路86号(会峰西路与丰乐南路交叉口)</p>
                                        <p style="margin: 20px;">划片小学：安徽省滁州市丰乐南路86号(会峰西路与丰乐南路交叉口)</p>
                                        <p style="margin: 20px;">轨道交通：安徽省滁州市丰乐南路86号(会峰西路与丰乐南路交叉口)</p>
                                    </div>
                                </div>
                                <Button style="margin-top: 30px" type="primary" @click="modal1 = true">楼盘详情</Button>
                                <Modal v-model="modal1" title="Common Modal dialog box title">
                                    <p>一会再写</p>
                                </Modal>
                            </TabPane>
                            <TabPane label="量价走势" name="name2">
                                <div id="trends" style="width: 600px;height: 290px;"></div>
                            </TabPane>
                            <TabPane label="周边小区" name="name3">
                                <div id="around" style="width: 600px;height: 290px;"></div>
                            </TabPane>
                        </Tabs>
                    </div>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
import Server from "@/core/server";
import smallMapView from "@/map/components/smallMapView";
import { services } from "@/core/config/services";

var echarts = require("echarts");
export default {
  data() {
    return {
      Model: "",
      model1: "",
      model2: "",
      model3: "",
      model4: "",
      model5: "",
      model6: "",
      model7: "",
      model8: "",
      model9: "",
      map: true,
      Orientation: [
        {
          value: "南北",
          label: "南北"
        },
        {
          value: "南",
          label: "南"
        },
        {
          value: "东南",
          label: "东南"
        },
        {
          value: "西南",
          label: "西南"
        },
        {
          value: "东西",
          label: "东西"
        },
        {
          value: "东",
          label: "东"
        },
        {
          value: "东北",
          label: "东北"
        },
        {
          value: "西",
          label: "西"
        },
        {
          value: "西北",
          label: "西北"
        }
      ],
      houseType: [
        {
          value: "毛坯",
          label: "毛坯"
        },
        {
          value: "精简",
          label: "精简"
        },
        {
          value: "中装",
          label: "中装"
        },
        {
          value: "精装",
          label: "精装"
        },
        {
          value: "豪装",
          label: "豪装"
        }
      ],
      year: [
        {
          value: "一年以内",
          label: "一年以内"
        },
        {
          value: "两年以内",
          label: "两年以内"
        },
        {
          value: "三到五年",
          label: "三到五年"
        },
        {
          value: "五到十年",
          label: "五到十年"
        },
        {
          value: "十年以上",
          label: "十年以上"
        }
      ],
      structure: [
        {
          value: "砖混",
          label: "砖混"
        },
        {
          value: "钢混",
          label: "钢混"
        }
      ],
      type: [
        {
          value: "塔楼",
          label: "塔楼"
        },
        {
          value: "板塔结合",
          label: "板塔结合"
        },
        {
          value: "板楼",
          label: "板楼"
        }
      ],
      environment: [
        {
          value: "临小区绿地",
          label: "临小区绿地"
        },
        {
          value: "临小区主景观",
          label: "临小区主景观"
        },
        {
          value: "有建筑物遮挡",
          label: "有建筑物遮挡"
        }
      ],
      noise: [
        {
          value: "无噪音",
          label: "无噪音"
        },
        {
          value: "噪音较大",
          label: "噪音较大"
        },
        {
          value: "噪音较小",
          label: "噪音较小"
        }
      ],
      columns1: [
        {
          title: "楼房属性",
          key: "name"
        },
        {
          title: "参数",
          key: "age"
        }
      ],
      data1: [
        {
          name: "位置",
          age: "山水人家"
        },
        {
          name: "朝向",
          age: "朝南"
        },
        {
          name: "栋数层数",
          age: "5栋3层"
        },
        {
          name: "建筑类型",
          age: "别墅"
        },
        {
          name: "面积",
          age: "120/m2"
        }
      ],
      rate: 3,
      value1: 0,
      current: 0,
      modal1: false,
      formItem: {
        input: "",
        select: "",
        date: "",
        time: ""
      }
    };
  },
  mounted() {
    window.onresize = () => {
      this.trends.resize();
    };
    this.trendMap();
    this.aroundMap();
  },
  components: {
    smallMapView
  },
  methods: {
    assessment() {
      this.Model = true;
    },
    trendMap() {
      if (!this.trends) {
        this.trends = echarts.init(document.getElementById("trends"));
      }
      this.trends.setOption({
        title: {
          text: "小区价格走势"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["2015", "2016", "2017", "2018"]
        },
        yAxis: {
          name: "元",
          type: "value"
        },
        series: [
          {
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            data: [4481, 4057, 6589, 6455],
            type: "line"
          }
        ]
      });
    },
    aroundMap() {
      if (!this.around) {
        this.around = echarts.init(document.getElementById("around"));
      }
      var data = [
        [5000, 10000, 6785.71],
        [4000, 10000, 6825],
        [800, 6500, 4463.33],
        [2500, 5600, 3793.83],
        [2000, 4000, 3060],
        [2000, 4000, 3222.33],
        [2500, 4000, 3133.33],
        [1800, 4000, 3100]
      ];
      var cities = [
        "长乐小区",
        "长乐小区",
        "长乐小区",
        "长乐小区",
        "长乐小区",
        "长乐小区",
        "长乐小区",
        "长乐小区"
      ];
      var barHeight = 50;
      this.around.setOption({
        title: {
          text: "周边小区价格"
        },
        legend: {
          show: true,
          data: ["价格范围", "均值"]
        },
        grid: {
          top: 100
        },
        angleAxis: {
          type: "category",
          data: cities
        },
        tooltip: {
          show: true,
          formatter: function(params) {
            var id = params.dataIndex;
            return (
              cities[id] +
              "<br>最低：" +
              data[id][0] +
              "<br>最高：" +
              data[id][1] +
              "<br>平均：" +
              data[id][2]
            );
          }
        },
        radiusAxis: {},
        polar: {},
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: "transparent"
              }
            },
            data: data.map(function(d) {
              return d[0];
            }),
            coordinateSystem: "polar",
            stack: "最大最小值",
            silent: true
          },
          {
            type: "bar",
            data: data.map(function(d) {
              return d[1] - d[0];
            }),
            coordinateSystem: "polar",
            name: "价格范围",
            stack: "最大最小值"
          },
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: "transparent"
              }
            },
            data: data.map(function(d) {
              return d[2] - barHeight;
            }),
            coordinateSystem: "polar",
            stack: "均值",
            silent: true,
            z: 10
          },
          {
            type: "bar",
            data: data.map(function(d) {
              return barHeight * 2;
            }),
            coordinateSystem: "polar",
            name: "均值",
            stack: "均值",
            barGap: "-100%",
            z: 10
          }
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"]
        }
      });
    },
    next() {
      document.getElementById("part1").style.display = "none";
      document.getElementById("part2").style.display = "block";
    },
    next1() {
      document.getElementById("part1").style.display = "block";
      document.getElementById("part2").style.display = "none";
    }
  }
};
</script>

<style lang="less" scoped>
body {
  width: 100%;
  height: 100%;
}

.themes {
  height: 100%;
  /*width: 100%;*/
  /*background: url("../../../../public/img/4.jpg") no-repeat;*/
  /*background-size:contain;*/
}

.process {
  width: 900px;
  height: 181px;
  background: url("../../../assets/img/pl_bottom_j.png");
  margin: 140px auto;
}

.process > li {
  width: 130px;
  height: 83px;
  float: left;
  margin-top: 65px;
  font-size: 14px;
  color: #191919;
  line-height: 150px;
  text-align: center;
}

.process_1 {
  background: url(../../../assets/img/procsss_1.png) no-repeat;
  margin-left: 35px;
}
.process_2 {
  background: url(../../../assets/img/procsss_2.png) no-repeat;
}
.process_3 {
  background: url(../../../assets/img/procsss_3.png) no-repeat;
}
.process_4 {
  background: url(../../../assets/img/procsss_4.png) no-repeat;
}
.process_5 {
  background: url(../../../assets/img/procsss_5.png) no-repeat;
}
.prcess_arrows {
  width: 50px !important;
  background: url(../../../assets/img/process_arrows.png) no-repeat 0px 27px;
  overflow: hidden;
}
.themes {
  border: 1px solid yellow;
  height: 100%;
  /*width: 100%;*/
  /*background: url("../../../../public/img/4.jpg") no-repeat;*/
  /*background-size:contain;*/
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
</style>
