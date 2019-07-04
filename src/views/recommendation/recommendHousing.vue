<template>
  <Layout :style="{height:'100%'}">
    <Sider ref="side1" :width='180'>
      <Menu active-name="" theme="dark" width="auto" :open-names="['']">
        <router-link to="/menu">
          <MenuItem name="1-1">
          <Icon type="ios-navigate"></Icon>
          <span>首页</span>
          </MenuItem>
        </router-link>
        <Submenu name="2">
          <template slot="title">
            <Icon type="md-speedometer" /> 数据展示
          </template>
          <router-link to="/data">
            <MenuItem name="2-1">
            <span style="font-size: 13px">数据统计</span>
            </MenuItem>
          </router-link>
          <router-link to="/data/dataDeatils">
            <MenuItem name="2-2">
            <span style="font-size: 13px">数据查询</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/infoSearch">
          <MenuItem name="3-1">
          <Icon type="md-search" />
          <span>信息查询</span>
          </MenuItem>
        </router-link>
        <Submenu name="4">
          <template slot="title">
            <Icon type="md-globe" /> 区位资源
          </template>
          <router-link to="/locationResources">
            <MenuItem name="4-1">
            <span>学区资源</span>
            </MenuItem>
          </router-link>
          <router-link to="/medicalResources">
            <MenuItem name="4-2">
            <span>医疗资源</span>
            </MenuItem>
          </router-link>
          <router-link to="/greenlResources">
            <MenuItem name="4-3">
            <span>绿地资源</span>
            </MenuItem>
          </router-link>
          <router-link to="/businessResources">
            <MenuItem name="4-4">
            <span>商业资源</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/recommendation/factor">
          <MenuItem name="5-1">
          <Icon type="md-pin" />
          <span>购房选址</span>
          </MenuItem>
        </router-link>
        <router-link to="/recommendation/housingPreference">
          <MenuItem name="6-1">
          <Icon type="md-thumbs-up" />
          <span>房源推荐</span>
          </MenuItem>
        </router-link>

        <Submenu name="7">
          <template slot="title">
            <Icon type="ios-radio" /> 房价分析
          </template>
          <router-link to="/priceAnalysis">
            <MenuItem name="7-1">
            <span style="font-size: 13px">价格分析</span>
            </MenuItem>
          </router-link>
          <router-link to="/heatMap2d">
            <MenuItem name="7-2">
            <span style="font-size: 13px">二维热力图</span>
            </MenuItem>
          </router-link>
          <router-link to="/heatMap">
            <MenuItem name="7-3">
            <span style="font-size: 13px">三维热力图</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <Submenu name="8">
          <template slot="title">
            <Icon type="md-analytics" /> 房价预测
          </template>
          <router-link to="/GWR">
            <MenuItem name="8-2">
            <span style="font-size: 13px">GWR模型</span>
            </MenuItem>
          </router-link>
          <router-link to="/Kriging">
            <MenuItem name="8-1">
            <span style="font-size: 13px">克里金插值预测</span>
            </MenuItem>
          </router-link>

          <router-link to="/priceForecast">
            <MenuItem name="8-3">
            <span style="font-size: 13px">房价预测</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/userManager">
          <MenuItem name="9-1" v-if="show">
          <Icon type="md-contacts" />
          <span>用户管理</span>
          </MenuItem>
        </router-link>
        <Submenu name="10">
          <template slot="title">
            <Icon type="md-paper" /> 用户手册
          </template>
          <router-link to="/auDecision/usersManual">
            <MenuItem name="10-1">
            <span style="font-size: 13px">用户手册</span>
            </MenuItem>
          </router-link>
          <router-link to="/auDecision/livablemodel">
            <MenuItem name="10-2">
            <span style="font-size: 13px">宜居模型</span>
            </MenuItem>
          </router-link>
          <router-link to="/auDecision/model">
            <MenuItem name="10-3">
            <span style="font-size: 13px">引力模型</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/personalcenter">
          <MenuItem name="11-1">
          <Icon type="md-person" />
          <span>个人中心</span>
          </MenuItem>
        </router-link>
      </Submenu>
      <router-link to="/personalcenter">
        <MenuItem name="11-1">
        <Icon type="md-person" />
        <span>个人中心</span>
        </MenuItem>
      </router-link>
    </Menu>
  </Sider>
  <Content>
    <div style="margin:65px auto;width:1000px;">
      <table id="customers">
        <thead>
          <tr>
            <th>小区名称</th>
            <th @click="education" title="查看教育资源可达性计算数据">教育资源可达性
              <Icon type="ios-book" />
            </th>
            <th @click="Medical" title="查看医疗资源可达性计算数据">医疗资源可达性
              <Icon type="md-add-circle" />
            </th>
            <th @click="traffic" title="查看交通资源可达性计算数据">交通资源可达性
              <Icon type="ios-car" />
            </th>
            <th @click="entertainment" title="查看休闲娱乐可达性计算数据">休闲娱乐可达性
              <Icon type="md-cart" />
            </th>
            <th>综合值</th>
          </tr>
        </thead>
        <tbody id="customerss"></tbody>
      </table>
      <Row>
        <Col span="12">
        <div id="trend" style="height: 350px;margin-top: 5px;margin-right: 5px; border: 1px solid  #dcdee2">
        </div>
        </Col>
        <Col span="12">
        <div id="comprise" style="height:350px;margin-top: 5px; margin-left: 5px;border: 1px solid  #dcdee2">
        </div>
        </Col>
      </Row>
      <Row type="flex" justify="end" class="code-row-bg" style="margin-top:6px">
        <Col span="5">
        <ButtonGroup shape="circle">
          <Button type="primary" @click="back()">
            <Icon type="ios-arrow-back"></Icon>
            重新推荐
          </Button>
          <Button type="primary" @click="map()">
            地图查看
            <Icon type="ios-arrow-forward"></Icon>
          </Button>
        </ButtonGroup>
        </Col>
      </Row>

    <Content>
      <div style="margin:65px auto;width:1000px;">
        <table id="customers">
          <thead>
            <tr>
              <th>小区名称</th>
              <th @click="education" title="查看教育资源可达性计算数据">教育资源可达性
                <Icon type="ios-book" />
              </th>
              <th @click="Medical" title="查看医疗资源可达性计算数据">医疗资源可达性
                <Icon type="md-add-circle" />
              </th>
              <th @click="traffic" title="查看交通资源可达性计算数据">交通资源可达性
                <Icon type="ios-car" />
              </th>
              <th @click="entertainment" title="查看休闲娱乐可达性计算数据">休闲娱乐可达性
                <Icon type="md-cart" />
              </th>
              <th>综合值</th>
            </tr>
          </thead>
          <tbody id="customerss"></tbody>
        </table>
        <Row>
          <Col span="12">
          <div id="trend" style="height: 350px;margin-top: 5px;margin-right: 5px; border: 1px solid  #dcdee2">
          </div>
          </Col>
          <Col span="12">
          <div id="comprise" style="height:350px;margin-top: 5px; margin-left: 5px;border: 1px solid  #dcdee2">
          </div>
          </Col>
        </Row>
        <Row type="flex" justify="end" class="code-row-bg" style="margin-top:6px">
          <Col span="5">
          <ButtonGroup shape="circle">
            <Button type="primary" @click="back()">
              <Icon type="ios-arrow-back"></Icon>
              重新推荐
            </Button>
            <Button type="primary" @click="map()">
              地图查看
              <Icon type="ios-arrow-forward"></Icon>
            </Button>
          </ButtonGroup>
          </Col>
        </Row>

        <Modal v-model="modal1" title="教育资源的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th>公服设施</th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance"></tbody>
          </table>
        </Modal>

        <Modal v-model="modal2" title="医疗资源的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population2"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service2"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance2"></tbody>
          </table>
        </Modal>

        <Modal v-model="modal3" title="交通资源的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population3"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service3"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance3"></tbody>
          </table>
        </Modal>
        <Modal v-model="modal4" title="休闲娱乐的中间过程数据" :styles="{top: '55px'}" width="700">
          <table id="customers">
            <thead>
              <tr>
                <th>小区名称</th>
                <th>人口</th>
              </tr>
            </thead>
            <tbody id="population4"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>服务能力</th>
              </tr>
            </thead>
            <tbody id="service4"></tbody>
          </table>

          <table id="customers">
            <thead>
              <tr>
                <th></th>
                <th>距离</th>
              </tr>
            </thead>
            <tbody id="distance4"></tbody>
          </table>
        </Modal>

      </div>
    </Content>
  </Layout>
</template>
<script>
import $ from "jquery";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import dataRap from "@/vuex/store";
import mapHouse from "@/vuex/store";
var echarts = require("echarts");

export default {
  data() {
    return {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      tableData: {}
    };
  },
  mounted() {
    this.getData();
    this.trendMap();
    this.compriseMap();
    this.qq();
  },
  methods: {
    qq() {
      // var recommend = this.tableData.houseInfo.sort(this.compare("level"));
      // var t = recommend.reverse();
      // console.log(this.tableData);
      // dataRap.commit("mapHouse", this.tableData.data.houseInfo);
      var tab = document.getElementById("customerss");
      for (var i = 0; i < 5; i++) {
        tab.insertRow(i);
        for (var j = 0; j < 6; j++) {
          var tt = this.tableData.data[i];
          for (var k in tt) {
            tab.rows[i].insertCell(j).innerHTML = tt[k];
            continue;
          }
          break;
        }
      }
    },
    education() {
      this.modal1 = true;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.processData,
        params: {
          serviceType: "education",
          userId: userId
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          var tab1 = document.getElementById("population");
          var tab2 = document.getElementById("service");
          var tab3 = document.getElementById("distance");
          for (var i = 0; i < 5; i++) {
            tab1.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.peopleNumList[i];
              for (var k in tt) {
                tab1.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab2.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.serviceList[i];
              for (var k in tt) {
                tab2.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab3.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.distanceList[i];
              for (var k in tt) {
                tab3.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
        } else {
        }
      });
    },
    Medical() {
      this.modal2 = true;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.processData,
        params: {
          serviceType: "medical",
          userId: userId
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          var tab1 = document.getElementById("population2");
          var tab2 = document.getElementById("service2");
          var tab3 = document.getElementById("distance2");
          for (var i = 0; i < 5; i++) {
            tab1.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.peopleNumList[i];
              for (var k in tt) {
                tab1.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab2.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.serviceList[i];
              for (var k in tt) {
                tab2.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab3.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.distanceList[i];
              for (var k in tt) {
                tab3.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
        } else {
        }
      });
    },
    traffic() {
      this.modal3 = true;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.processData,
        params: {
          serviceType: "station",
          userId: userId
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          var tab1 = document.getElementById("population3");
          var tab2 = document.getElementById("service3");
          var tab3 = document.getElementById("distance3");
          for (var i = 0; i < 5; i++) {
            tab1.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.peopleNumList[i];
              for (var k in tt) {
                tab1.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab2.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.serviceList[i];
              for (var k in tt) {
                tab2.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab3.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.distanceList[i];
              for (var k in tt) {
                tab3.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
        } else {
        }
      });
    },
    entertainment() {
      this.modal4 = true;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.processData,
        params: {
          serviceType: "entertainment",
          userId: userId
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          var tab1 = document.getElementById("population4");
          var tab2 = document.getElementById("service4");
          var tab3 = document.getElementById("distance4");
          for (var i = 0; i < 5; i++) {
            tab1.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.peopleNumList[i];
              for (var k in tt) {
                tab1.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab2.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.serviceList[i];
              for (var k in tt) {
                tab2.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
          for (var i = 0; i < 100; i++) {
            tab3.insertRow(i);
            for (var j = 0; j < 2; j++) {
              var tt = rsp.data.distanceList[i];
              for (var k in tt) {
                tab3.rows[i].insertCell(j).innerHTML = tt[k];
                continue;
              }
              break;
            }
          }
        } else {
        }
      });
    },
    back() {
      this.$router.push("/recommendation/factor");
    },
    map() {
      this.$router.push("/mapMatching");
    },
    getData() {
      this.tableData = dataRap.state.dataDeatil;
      console.log(this.tableData);
    },
    trendMap() {
      if (!this.trend) {
        this.trend = echarts.init(document.getElementById("trend"));
      }
      this.trend.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          type: "scroll",
          top: 10,
          data: [
            "教育资源可达性",
            "医疗资源可达性",
            "交通资源可达性",
            "休闲娱乐可达性"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        yAxis: {
          type: "value"
        },
        xAxis: {
          type: "category",
          data: [
            this.tableData.data[0].name,
            this.tableData.data[1].name,
            this.tableData.data[2].name,
            this.tableData.data[3].name,
            this.tableData.data[4].name
          ]
        },
        series: [
          {
            name: "教育资源可达性",
            type: "bar",
            stack: "总量",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].educationLevel,
              this.tableData.data[1].educationLevel,
              this.tableData.data[2].educationLevel,
              this.tableData.data[3].educationLevel,
              this.tableData.data[4].educationLevel
            ]
          },
          {
            name: "医疗资源可达性",
            type: "bar",
            stack: "总量",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].medicalLevel,
              this.tableData.data[1].medicalLevel,
              this.tableData.data[2].medicalLevel,
              this.tableData.data[3].medicalLevel,
              this.tableData.data[4].medicalLevel
            ]
          },
          {
            name: "交通资源可达性",
            type: "bar",
            stack: "总量",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].trafficLevel,
              this.tableData.data[1].trafficLevel,
              this.tableData.data[2].trafficLevel,
              this.tableData.data[3].trafficLevel,
              this.tableData.data[4].trafficLevel
            ]
          },
          {
            name: "休闲娱乐可达性",
            type: "bar",
            stack: "总量",
            barMaxWidth: 50,
            label: {
              normal: {
                show: false,
                position: "top"
              }
            },
            data: [
              this.tableData.data[0].entertainmentLevel,
              this.tableData.data[1].entertainmentLevel,
              this.tableData.data[2].entertainmentLevel,
              this.tableData.data[3].entertainmentLevel,
              this.tableData.data[4].entertainmentLevel
            ]
          }
        ]
      });
    },
    compriseMap() {
      if (!this.comprise) {
        this.comprise = echarts.init(document.getElementById("comprise"));
      }
      this.comprise.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          top: 10,
          data: [
            this.tableData.data[0].name,
            this.tableData.data[1].name,
            this.tableData.data[2].name,
            this.tableData.data[3].name,
            this.tableData.data[4].name
          ]
        },
        series: [
          {
            name: "综合值对比",
            type: "pie",
            radius: "55%",
            center: ["50%", "55%"],
            data: [
              {
                value: this.tableData.data[0].level,
                name: this.tableData.data[0].name
              },
              {
                value: this.tableData.data[1].level,
                name: this.tableData.data[1].name
              },
              {
                value: this.tableData.data[2].level,
                name: this.tableData.data[2].name
              },
              {
                value: this.tableData.data[3].level,
                name: this.tableData.data[3].name
              },
              {
                value: this.tableData.data[4].level,
                name: this.tableData.data[4].name
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
  }
};
</script>
<style lang="less">
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  width: 100%;
  border-collapse: collapse;
}
#customers td,
#customers th {
  font-size: 1.1em;
  border: 1px solid #2b85e4;
  text-align: center;
  padding: 3px 7px 2px 7px;
  width: 350px;
}
#customers th {
  font-size: 1.2em;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 4px;
  background-color: #5cadff;
  color: #ffffff;
  cursor: pointer;
}
#customers tr.alt td {
  color: #000000;
  background-color: #eaf2d3;
}
</style>
