<template>
  <layout :style="{height:'100%'}">
    <Sider ref="side1" :width='180'>
      <sider-menu/>
    </Sider>
    <Content>
      <div style=" margin: 0 auto;margin-top: 5px;width:1000px;">
        <Button type="primary" @click="impor" style="margin-bottom:3px">导入数据</Button>
        <Table :columns="columns1" :data="data1" @on-select="handleChange"></Table>
        <!-- <Page :total="dataCount1" :page-size="pageSize1" show-total show-elevator/> -->
      </div>
      <div style=" margin: 0 auto;margin-top: 5px;width:1000px;height:670px">
        <gwRmap></gwRmap>
      </div>
      <router-view/>

    </Content>
    <Modal v-model="modal1" @on-ok="ok" :width="800" title="选择需要预测的小区数据">
      <Table stripe ref="selection" :columns="columns2" :data="data2" @on-select="handleChange"></Table>
    </Modal>
  </layout>

</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
import axios from "axios";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import esriLoader from "esri-loader";
import { MapAPI } from "@/core/config/const";
import { constants } from "fs";
import gwr from "@/vuex/store";
import gwRmap from "@/map/components/gwRmap";
export default {
  data() {
    return {
      modal1: false,
      isPopup: true,
      housePoint: "",
      columns1: [
        {
          title: "预测小区",
          key: "name",
          align: "center"
        },
        {
          title: "相似小区",
          key: "foreName",
          align: "center"
        },
        {
          title: "地址",
          key: "address",
          align: "center",
          width: 200
        },
        {
          title: "房屋类型",
          key: "type",
          align: "center",
          width: 150
        },
        {
          title: "是否在售",
          key: "buildingCharact",
          align: "center"
        },
        {
          title: "GWR",
          align: "center",
          children: [
            {
              title: "地价",
              key: "dj",
              align: "center",
              width: 100
            },
            {
              title: "容积率",
              key: "rjl",
              align: "center",
              width: 100
            }
          ]
        },
        {
          title: "预测价格",
          key: "price",
          align: "center",
          fixed: "right"
        }
      ],
      data1: [],
      columns2: [
        {
          type: "selection",
          width: 60,
          align: "center"
        },
        {
          title: "小区",
          key: "name",
          align: "center"
        },
        {
          title: "地址",
          key: "address",
          align: "center"
        },
        {
          title: "房屋类型",
          key: "type"
        },
        {
          title: "是否在售",
          key: "buildingCharact",
          align: "center"
        }
      ],
      data2: [],
      data3: [],
      newdata: "",
      newdata1: "",
      gwrPoint: ""
    };
  },
  created() {
    var optionss = localStorage.getItem("gwrPoint");
    var gwrPoint = JSON.parse(optionss);
    this.gwrPoint = gwrPoint;
  },
  methods: {
    impor() {
      this.modal1 = true;
      Server.get({
        url: services.houseSelect,
        params: {}
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.data2 = rsp.data;
        }
      });
    },
    handleChange(selection, row) {
      var _this = this;
      _this.data3 = selection;
      var pushData = [];
      for (let i = 0; i < _this.data3.length; i++)
        pushData.push(_this.data3[i].name);
      _this.newdata = pushData.join(",");
      //   console.log(_this.newdata);
    },
    ok() {
      debugger;
      var _this = this;
      Server.get({
        url: services.housePrice,
        params: {
          houseName: _this.newdata
        }
      }).then(rsp => {
        debugger;
        var _this = this;
        var arr1 = [];
        var gwrPoint = _this.gwrPoint;
        if (rsp.status === 1) {
          _this.housePoint = rsp.data;
          this.showGraphics();
          gwrPoint.forEach(itemData => {
            rsp.data.forEach((itemArr, index) => {
              if (itemArr.objectId === itemData.attributes.OBJECTID) {
                arr1.push(
                  itemArr.name1,
                  itemData.attributes.C1_DJ,
                  itemData.attributes.C2_RJL
                );
                _this.newdata1 = arr1.join(",");
              }
            });
          });
        }
        Server.get({
          url: services.houseShow,
          params: {
            houseValue: _this.newdata1
          }
        }).then(rsp => {
          var _this = this;
          _this.data1 = rsp.data;
        });
      });
    },
    showGraphics() {
      console.log(this.housePoint);
      onemap.pubsub.publish("drawforeHouseWKT", {
        list: this.housePoint,
        popup: this.isPopup
      });
      onemap.pubsub.publish("drawHouseGWRByList", {
        list: this.housePoint,
        popup: this.isPopup
        // pan: this.isPan
      });
    }
  },
  components: {
    SiderMenu,
    gwRmap
  }
};
</script>
<style>
</style>

