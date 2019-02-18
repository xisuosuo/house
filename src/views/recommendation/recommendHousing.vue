<template>
    <div style="margin:70px auto;width:1000px;">
        <table id="customers">
            <tr>
                <th>小区名称</th>
                <th @click="education" title="查看教育资源可达性计算数据">教育资源可达性
                    <Icon type="ios-book" />
                </th>
                <th title="查看医疗资源可达性计算数据">医疗资源可达性
                    <Icon type="md-add-circle" />
                </th>
                <th title="查看交通资源可达性计算数据">交通资源可达性
                    <Icon type="ios-car" />
                </th>
                <th title="查看休闲娱乐可达性计算数据">休闲娱乐可达性
                    <Icon type="md-cart" />
                </th>
                <th>综合值</th>
            </tr>
            <tr>
                <td class="jj">11</td>
            </tr>
        </table>
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
import $ from 'jquery';
import Server from "@/core/server";
import { services } from "@/core/config/services";
import userMessage from "@/vuex/store";
import dataRap from "@/vuex/store";
var echarts = require("echarts");

export default {
  data() {
    return {
      tableData: {}
    };
  },
  mounted() {
    this.qq();
    this.trendMap();
    this.compriseMap();
    this.getData();
  },
  methods: {

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
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
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
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "inside"
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "inside"
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "inside"
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "inside"
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "inside"
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
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
