<template>
  <Layout :style="{height:'100%'}">
    <Sider ref="side1" :width='180'>
      <sider-menu/>>
    </Sider>
    <Content>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Breadcrumb>
          <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
          <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <Tabs type="card" style="margin: 0 auto;width: 95%;border: 1px solid #dcdee2">
        <TabPane label="基本信息">
          <div style="margin: 10px">
            <div>
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
                    <div style="margin-top:40px;margin-left: 10%">
                      <div>
                        <div class="key">
                          <strong>楼盘最低价:</strong>
                        </div>
                        <div class="value light">
                          <span class="price">{{this.houseInfo.price}}</span> 元/平方米
                        </div>
                        <Form :label-width="70">
                          <FormItem label="绿化率">
                            <span>{{this.houseInfo.greeningRate}}</span>
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
                          <FormItem label="房价走势:">
                            <Button type="primary" @click=price size="small">点击查看</Button>
                            <Modal v-model="modal1s"
                            >
                             <div id="trend" style="height: 200px;width: 500px"></div>
                            </Modal>
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
                    <table style="margin-top: 50px;margin-left: 5%">
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
                          <td class="label-l">所属学区：</td>
                          <td valign="top" class="text-l" style="color: red"> {{this.houseInfo.schoolName}}</td>
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
                    <div>
                      <h3 style="display:inline-block">楼盘评论</h3>
                      <Button type="primary" style="float:right" @click="write">写评论</Button>
                    </div>
                    <Modal v-model="modal1" title="你的评价" @on-ok="ok">
                      <Input v-model="form.houseComments" type="textarea" :autosize="{minRows: 5,maxRows: 10}" placeholder="评价字数100-120字" />
                      <Rate v-model="form.houseScore" />
                    </Modal>
                    <Row v-for="(v,k) in commentList" :key="k" style="margin-top:20px">
                      <Col span="6">
                      <div class="avatar" style="text-align:center;">
                        <img style="width: 60px;height: 60px;border-radius: 50%;" src="../../../assets/img/u=3085477210,754180516&fm=11&gp=0.jpg" />
                      </div>
                      <div style="width:140px;text-align:center;">
                        <span style="font-weight:bold;font-size: 1.17em;"> 系统用户:</span>
                        {{v.userNickName}}
                      </div>
                      </Col>
                      <Col span="8">
                      <div style="width:450px;background-color:#f9f9f9">
                        <Rate disabled v-model="v.houseScore" />
                        <div>{{v.houseComments}}</div>
                        <div style="margin-top:5px;text-align:right">
                          <span style="font-weight:bold;"> 评论时间：</span>{{v.commentTime}}
                        </div>
                      </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                </Col>
              </Row>
            </div>
            <Card>
              <div>
                <Row>
                  <Col>
                  <span style="font-size: 14px">
                    <strong>相似小区:</strong>
                  </span>
                  <div class="map" style="height: 200px;width: 100%;">
                    <div v-for="(value,index) in BaseOnHouse" :key="index">
                      <Col span="4">
                      <img @click="onHouseclick(value,index)" style="width: 200px;height: 160px;margin: 5px" v-bind:src="value.image" alt="">
                      <strong>
                        <span>{{value.name}}</span>
                      </strong>
                      <a>
                        <span style="margin: 20px">{{value.price}}元/㎡</span>
                      </a>
                      </Col>
                    </div>
                  </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>

        </TabPane>
        <TabPane label="周边设施">
          <Card>
            <div class="around">
              <ul>
                <li v-for="(value,index) in orderList" :key="index" @click="selectTimer(index,value)" :class="timeIndex === index ? 'default-active' : 'default' ">{{ value.name }}
                </li>
              </ul>
              <Row>
                <Col span="17">
                <div class="map" style="height: 570px;width: 100%;">
                  <routerView ref="routerView" v-if="map"></routerView>
                </div>
                </Col>
                <Col span="7">
                <div class="list">
                  <div class="name">{{listName}}</div>
                  <div class="ul-box">
                    <div class="around-no-info">
                      <ul>
                        <item v-for="(item,id) in listData" :key="item.id" :data="item" :id="id+1" @on-item-click="onItemClick" />
                      </ul>
                    </div>
                  </div>
                </div>
                </Col>
              </Row>
            </div>
          </Card>
        </TabPane>
      </Tabs>
    </Content>
  </Layout>
</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
import routerView from "@/map/components/routerView";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import houseInfoId from "@/vuex/store";
import { MapAPI } from "@/core/config/const";
import Item from "./items/item";
import aroundInfo from "@/vuex/store";
import housueName from "@/vuex/store";
import companyName from "@/vuex/store";
import housePoint from "@/vuex/store";
var echarts = require("echarts");

export default {
  mounted() {
    this.form.userId = JSON.parse(sessionStorage.getItem("userId"));
    this.getimg();
    setTimeout(() => {
      this.getData();
    }, 600);
    setTimeout(() => {
      this.getmapdata();
    }, 1000);
    setTimeout(() => {
      this.comment();
    }, 800);
    setTimeout(() => {
      this.getBaseOnHouseData();
    }, 800);

  },
  data() {
    return {
        modal1s:false,
      List1: {
        userId: "",
        houseName: "",
        houseScore: "",
        houseCommnets: "",
        commentsId: "",
        commentsTime: ""
      },
      modal1: false,
      form: {
        houseComments: "",
        houseScore: 0,
        houseName: "",
        userId: ""
      },
      value1: "",
      valueText2: 0,
      commentList: [],
      BaseOnHouse: [],
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
      distance: "1000",
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
      trendMap() {
          if (!this.trend) {
              this.trend = echarts.init(document.getElementById("trend"));
          }
          this.trend.setOption({
              title: {
                  text: `滁州市${this.houseInfo.name}近三年房价走向`,
                  textStyle:{
                      fontSize: 14
                  }
              },
              tooltip: {
                  trigger: 'axis'
              },
              xAxis: {
                  type: 'category',
                  data: ['2015', '2016', '2017']
              },
              grid: {
                  left: '1%',
                  right: '3%',
                  bottom: '3%',
                  top: '15%',
                  containLabel: true
              },
              yAxis: {
                  min:0,
                  max:8000,
                  interval: 2000,
                  type: 'value',
                  axisLabel: {
                      formatter: '{value} 元'
                  }
              },
              series: [{
                  label: {
                      normal: {
                          show: true,
                          position: 'top'
                      }
                  },
                  data: [4481, 4057, 6589],
                  type: 'line'
              }]
          });
      },
      price(){
          this.modal1s = true;
          this.trendMap();
      },
    onHouseclick(value, index) {
      this.$Spin.show({
        render: h => {
          return h("div", [
            h("Icon", {
              class: "demo-spin-icon-load",
              props: {
                type: "ios-loading",
                size: 35
              }
            }),
            h(
              "div",
              {
                style: {
                  fontSize: "20px"
                }
              },
              "正在为您查找"
            )
          ]);
        }
      });
      this.getimg();
      var _this = this;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      this.houseId = value.houseId;
      this.houseName = value.name;
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: _this.houseId
        }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          console.log(rsp);
          _this.houseInfo = rsp.data;
          console.log(_this.houseInfo);
        }
      });
      Server.get({
        url: services.recommendedBaseOnHouse,
        params: {
          houseName: _this.houseName,
          userId: userId
        }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          console.log(rsp);
          _this.BaseOnHouse = rsp.data;
          console.log(_this.BaseOnHouse);
        }
      });
      Server.get({
        url: services.getcomments,
        params: {
          houseName: this.houseName
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          _this.commentList = rsp.data;
        }
      });
      Server.get({
        url: services.road,
        params: {
          name: this.houseName,
          tableName: "BUSSTATION",
          distance: this.distance
        }
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.list = rsp.data;
          _this.total = rsp.length;
          _this.onPageChange(1);
        }
      });
      setTimeout(() => {
        this.$Spin.hide();
      }, 1000);
    },
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
      this.houseName = houseInfoId.state.houseInforA.name;
      this.form.houseName = houseInfoId.state.houseInforA.name;
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
          tableName: value.type,
          distance: this.distance
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
      if (mapview.graphics.length === 0) {
        onemap.pubsub.publish("drawMarkerByList", {
          list: this.listData
        });
      } else {
        mapview.graphics.removeAll();
        if (this.list === 0) return;
        onemap.pubsub.publish("drawMarkerByList", {
          list: this.listData
        });
      }
    },
    getData() {
      var _this = this;
      this.Id = houseInfoId.state.houseInforA.houseId;
      console.log(this.Id);
      //   housePoint.commit("housePoint", this.houseShape);
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
    getBaseOnHouseData() {
      var _this = this;
      this.houseName = houseInfoId.state.houseInforA.name;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.recommendedBaseOnHouse,
        params: {
          houseName: _this.houseName,
          userId: userId
        }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          console.log(rsp);
          _this.BaseOnHouse = rsp.data;
          console.log(_this.BaseOnHouse);
        }
      });
    },
    getimg() {
      // this.houseName = housueName.state.housueName;
      var _this = this;
      Server.get({
        url: services.getImageToCommunity
      }).then(rsp => {
        if (rsp.status === 1) {
          _this.detailList = rsp.imageData;
        }
      });
    },
    write() {
      this.modal1 = true;
    },
    ok() {
      this.form;
      Server.get({
        url: services.addHouseComments,
        params: {
          userComments: JSON.stringify(this.form)
        }
      }).then(rsp => {
        if (rsp.data.status === 1) {
          this.$Message.success("评论成功");
          this.comment();
        }
      });
    },
    comment() {
      var _this = this;
      this.houseName = housueName.state.housueName;
      Server.get({
        url: services.getcomments,
        params: {
          houseName: this.houseName
          // this.houseInfo.name
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          _this.commentList = rsp.data;
          _this.commentsId = rsp.data;
        }
      });
    }
  },
  components: {
    Item,
    routerView,
    SiderMenu
  }
};
</script>

<style lang="less" scoped>
.ivu-tabs-bar {
  margin-bottom: 0;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
#viewDiv {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
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
  font-size: 14px;
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

.list {
  height: 600px;
}
.around {
  height: 600px;
  width: 1250px;
  margin: 0 auto;
  .title {
    font-size: 22px;
    // margin-top: 80px;
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
  height: 580px;
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
    height: 550px;
    overflow-y: scroll;
  }
}

.page-footer {
  margin-left: 10px;
}
</style>