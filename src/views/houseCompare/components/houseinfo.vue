<template>
    <div style="margin: 100px">
        <div style="margin-top: 55px">
            <Row :gutter="30">
                <Col span="12">
                <div style="border: 1px solid #dcdee2;">
                    <Row>
                        <Col span="12">
                        <div style="padding: 5px">
                            <span style="font-size: 14px">
                                <strong>楼盘首页:</strong>
                            </span>
                            <span style="font-size: 14px">
                                <strong>{{this.houseInfo.name}}</strong>
                            </span>
                            <img style="height: 250px;width: 300px;margin: 10px" v-bind:src="this.houseInfo.image" alt="">
                        </div>
                        </Col>
                        <Col span="12">
                        <div style="margin-top:40px;margin-left: 10px">
                            <div>
                                <div class="key">
                                    <strong>楼盘最低价:</strong>
                                </div>
                                <div class="value light">
                                    <span class="price">{{this.houseInfo.price}}</span> 元/平方米
                                </div>
                                <Form :model="formItem" :label-width="70">
                                    <FormItem label="价格说明:">
                                        <span>价格说明：</span>在{{this.houseInfo.minPrice}}元/㎡ ~ {{this.houseInfo.maxPrice}}元/㎡之间
                                    </FormItem>
                                    <FormItem label="建筑类型:">
                                        <span>{{this.houseInfo.houseFeature}}</span>
                                    </FormItem>
                                    <FormItem label="物业类型:">
                                        <span>{{this.houseInfo.houseType}}</span>
                                    </FormItem>
                                    <FormItem label="楼盘高度:">
                                    <span>{{this.houseInfo.houseHeight}}</span>
                                </FormItem>
                                    <FormItem label="主力户型:">
                                        <span>{{this.detailList[0].imagename}}</span>
                                    </FormItem>
                                    <FormItem label="楼盘位置:">
                                        <span>{{this.houseInfo.address}}</span>
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
                            <span style="font-size: 14px">
                                <strong>户型:</strong>
                            </span>
                            <span style="font-size: 14px">
                                <strong>{{this.detailList[0].imagename}}</strong>
                            </span>
                            <img style="height: 250px;width: 300px;margin: 10px" :src=detailList[0].image alt="">
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
                                    <td class="label-l">结构类型：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.houseFeature}}</td>
                                    <td class="label-r">最小面积：</td>
                                    <td valign="top" class="text-r">{{this.houseInfo.minFloorArea}}㎡</td>
                                </tr>
                                <tr>
                                    <td class="label-l">是否已售：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.isSelling}}</td>
                                    <td class="label-r">最大面积：</td>
                                    <td valign="top" class="text-r">{{this.houseInfo.maxFloorArea}}㎡</td>
                                </tr>
                                <tr>
                                    <td class="label-l">楼盘地址：</td>
                                    <td valign="top" class="text-l">{{this.houseInfo.address}}</td>
                                    <td class="label-r">建筑面积：</td>
                                    <td valign="top" class="text-r">{{this.houseInfo.area}}㎡</td>
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
            <Card>
                <div class="around">
                    <div class="title">
                        <p>{{houseName}}</p>
                    </div>
                    <ul>
                        <li v-for="(value,index) in orderList" :key="index" @click="selectTimer(index,value)" :class="timeIndex === index ? 'default-active' : 'default' ">{{ value.name }}</li>
                    </ul>
                    <Row>
                        <Col span="17">
                        <div class="map" style="height: 540px;width: 100%;">
                            <routerView ref="routerView" v-if="map"></routerView>
                        </div>
                        </Col>
                        <Col span="7">
                        <div class="list" id="mapListContainer">
                            <div class="name">{{listName}}</div>
                            <div class="ul-box">
                                <div class="around-no-info">
                                    <ul>
                                        <item v-for="(item,id) in listData" :key="item.id" :data="item" :id="id+1" @on-item-click="onItemClick" />
                                    </ul>
                                </div>
                            </div>
                            <div class="page-footer" v-show="list.length>10">
                                <Page :total="list.length" :page-size="pageSize" size="small" @on-change="onPageChange"></Page>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import routerView from "@/map/components/routerView";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import houseInfoId from "@/vuex/store";
import { MapAPI } from "@/core/config/const";
import Item from "./items/item";
import aroundInfo from "@/vuex/store";
import userMessage from "@/vuex/store";
import housueName from "@/vuex/store";
import companyName from "@/vuex/store";
export default {
  mounted() {
    this.getimg();
    setTimeout(() => {
      this.getData();
    }, 600);
    setTimeout(() => {
      this.getmapdata();
    }, 600);
  },
  data() {
    return {
      detailList: [],
      formItem: "",
      Id: [],
      houseInfo: [],
      map: true,
      timeIndex: 0,
      pageSize: 10,
      listName: "公交",
      listData: [],
      list: [],
      total: "",
      housueName: "",
      isPopup: true,
      isPan: true,
      orderList: [
        { name: "公交", type: "BUSSTATION " },
        { name: "车站" },
        { name: "医疗设施", type: "MEDICALDATA " },
        { name: "学校", type: "SCHOOLDATA " },
        { name: "休闲娱乐", type: "ENTERTAINMENT " },
        { name: "公园", type: "PARKDATA " }
      ]
    };
  },
  watch: {
    data() {
      this.onPageChange(1);
    }
  },
  methods: {
    onItemClick(data) {
      for (var i = 0, g; (g = window.mapview.graphics.items[i]); i++) {
        if (g.attributes.id === data.pIndex) {
          var geometry = null;
          if (g.geometry.type === "point") {
            geometry = g.geometry;
          } else {
            var extent = g.geometry.extent.clone();
            geometry = extent.expand(2);
          }
          window.mapview.goTo(geometry);
          var attributes = g.attributes;
          mapApi.popup.show({
            mapView: window.mapview,
            res: attributes.attr,
            centerPt: attributes.centerPt
          });
          break;
        }
      }
      this.$refs.routerView.addStop(data);
    },
    getmapdata() {
      this.houseName = this.houseInfo.name;
      this.list = aroundInfo.state.list;
      this.total = aroundInfo.state.length;
      this.onPageChange(1);
    },
    selectTimer(index, value) {
      this.timeIndex = index;
      this.listName = value.name;
      companyName.commit("companyName", this.listName);
      this.houseName = housueName.state.housueName;
      console.log(this.houseName);
      Server.get({
        url: services.road,
        params: {
          name: this.houseName,
          tableName: value.type
        }
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.list = rsp.data;
          _this.total = rsp.length;
          _this.onPageChange(1);
        }
      });
    },
    onPageChange(page) {
      let data = [];
      for (
        var i = (page - 1) * this.pageSize, len = this.total, item;
        i < len, (item = this.list[i]);
        i++
      ) {
        if (i < page * this.pageSize) {
          item.pIndex = "p" + i;
          data.push(item);
        } else {
          break;
        }
      }
      this.listData = data;
      this.showGraphics();
    },
    showGraphics() {
      window.mapview.graphics.removeAll();
      if (this.list === 0) return;
      onemap.pubsub.publish("drawMarkerByList", {
        list: this.listData
      });
    },
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
      }).then(function(rsp) {
        if (rsp.status === 1) {
          console.log(rsp);
          _this.houseInfo = rsp.data;
          console.log(_this.houseInfo);
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
    }
  },
  components: {
    Item,
    routerView
  }
};
</script>

<style lang="less" scoped>
#viewDiv {
  padding: 0;
  margin: 0;
  width: 100%;
}
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
  line-height: 24px;
  vertical-align: top;
  padding: 5px 40px 5px 4px;
}

.text-r {
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
.around {
  height: 600px;
  width: 1250px;
  margin: 0 auto;
  .title {
    font-size: 22px;
    margin-top: 80px;
    margin-bottom: 5px;
    font-weight: 600;
    color: #101d37;
  }
  ul {
    margin-left: -8px;
    .select:after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #3072f6;
    }
    li {
      cursor: pointer;
      display: inline-block;
      line-height: 28px;
      padding: 0 9px;
      margin-bottom: 5px;
      color: #555;
      font-size: 14px;
    }
    .default-active {
      color: #3072f6;
      // background: #f00;
    }
    li:hover {
      color: #3072f6;
    }
  }
}

.around .list {
  //   width: 310px;
  height: 540px;
  background-color: #fff;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.45);
  .name {
    line-height: 39px;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background: #3072f6 !important;
  }
  .ul-box {
    height: 420px;
    overflow-y: scroll;
  }
}
.page-footer {
  margin-left: 10px;
}
</style>