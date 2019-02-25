<template>
  <div style="margin:65px auto;width:1000px;">
    <table id="customers">
      <thead>
        <tr>
          <th>小区名称</th>
          <th @click="modal1 = true" title="查看教育资源可达性计算数据">教育资源可达性
            <Icon type="ios-book" />
          </th>
          <th @click="modal2 = true" title="查看医疗资源可达性计算数据">医疗资源可达性
            <Icon type="md-add-circle" />
          </th>
          <th @click="modal3 = true" title="查看交通资源可达性计算数据">交通资源可达性
            <Icon type="ios-car" />
          </th>
          <th @click="modal4 = true" title="查看休闲娱乐可达性计算数据">休闲娱乐可达性
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
          <Icon type="ios-arrow-back" ></Icon>
          重新推荐
        </Button>
        <Button type="primary" @click="map()">
          地图查看
          <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
      </Col>
    </Row>

    <Modal v-model="modal1" title="教育资源的中间过程数据" :loading="loading" :styles="{top: '55px'}" width="700">
      <table id="customers">
        <tr>
          <th>小区名称</th>
          <th>人口</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>距离</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>服务能力</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>
    </Modal>

    <Modal v-model="modal2" title="医疗资源的中间过程数据" :loading="loading" :styles="{top: '55px'}" width="700">
      <table id="customers">
        <tr>
          <th>小区名称</th>
          <th>人口</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>距离</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>服务能力</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>
    </Modal>

    <Modal v-model="modal3" title="交通资源的中间过程数据" :loading="loading" :styles="{top: '55px'}" width="700">
      <table id="customers">
        <tr>
          <th>小区名称</th>
          <th>人口</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>距离</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>服务能力</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>
    </Modal>
    <Modal v-model="modal4" title="休闲娱乐的中间过程数据" :loading="loading" :styles="{top: '55px'}" width="700">
      <table id="customers">
        <tr>
          <th>小区名称</th>
          <th>人口</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>距离</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>

      <table id="customers" class="table">
        <tr>
          <th></th>
          <th>服务能力</th>
        </tr>
        <tr>
          <td>Alfreds</td>
          <td>Maria Anders</td>
        </tr>
        <tr class="alt">
          <td>Berglunds</td>
          <td>Christina Berglund</td>
        </tr>
        <tr>
          <td>Centro</td>
          <td>Francisco Chang</td>
        </tr>
      </table>
    </Modal>

  </div>

</template>
<script>
import $ from "jquery";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import userMessage from "@/vuex/store";
import dataRap from "@/vuex/store";
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
      var tab = document.getElementById("customerss");
      for (var i = 0; i < 10; i++) {
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
    back() {
      this.$router.push("/recommendation");
    },
    map() {
      this.$router.push("/mapMatching");
    },
    getData() {
      this.tableData = dataRap.state.dataDeatil;
    },
    education() {
      this.$router.push("/Details");
    },
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
            this.tableData.data[4].name,
            this.tableData.data[5].name,
            this.tableData.data[6].name,
            this.tableData.data[7].name,
            this.tableData.data[8].name,
            this.tableData.data[9].name
          ]
        },
        series: [
          {
            name: "教育资源可达性",
            type: "bar",
            stack: "总量",
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
              this.tableData.data[4].educationLevel,
              this.tableData.data[5].educationLevel,
              this.tableData.data[6].educationLevel,
              this.tableData.data[7].educationLevel,
              this.tableData.data[8].educationLevel,
              this.tableData.data[9].educationLevel
            ]
          },
          {
            name: "医疗资源可达性",
            type: "bar",
            stack: "总量",
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
              this.tableData.data[4].medicalLevel,
              this.tableData.data[5].medicalLevel,
              this.tableData.data[6].medicalLevel,
              this.tableData.data[7].medicalLevel,
              this.tableData.data[8].medicalLevel,
              this.tableData.data[9].medicalLevel
            ]
          },
          {
            name: "交通资源可达性",
            type: "bar",
            stack: "总量",
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
              this.tableData.data[4].trafficLevel,
              this.tableData.data[5].trafficLevel,
              this.tableData.data[6].trafficLevel,
              this.tableData.data[7].trafficLevel,
              this.tableData.data[8].trafficLevel,
              this.tableData.data[9].trafficLevel
            ]
          },
          {
            name: "休闲娱乐可达性",
            type: "bar",
            stack: "总量",
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
              this.tableData.data[4].entertainmentLevel,
              this.tableData.data[5].entertainmentLevel,
              this.tableData.data[6].entertainmentLevel,
              this.tableData.data[7].entertainmentLevel,
              this.tableData.data[8].entertainmentLevel,
              this.tableData.data[9].entertainmentLevel
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
            this.tableData.data[4].name,
            this.tableData.data[5].name,
            this.tableData.data[6].name,
            this.tableData.data[7].name,
            this.tableData.data[8].name,
            this.tableData.data[9].name
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
              },
              {
                value: this.tableData.data[5].level,
                name: this.tableData.data[5].name
              },
              {
                value: this.tableData.data[6].level,
                name: this.tableData.data[6].name
              },
              {
                value: this.tableData.data[7].level,
                name: this.tableData.data[7].name
              },
              {
                value: this.tableData.data[8].level,
                name: this.tableData.data[8].name
              },
              {
                value: this.tableData.data[9].level,
                name: this.tableData.data[9].name
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
