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
      </Menu>
    </Sider>

    <Content>
      <div style="overflow-y: hidden;">
        <Row>
          <Col span="18">
          <div class="map" style="height: 670px;width: 100%;">
            <smallMapView></smallMapView>
          </div>
          </Col>
          <Col span="6">
          <div class="aside">
            <div class="filter">
              <ul class="clear">
                <li class="li-filter fl" data-role="li-filter" data-type="filter" data-xftrack="10145" @click="changeStyle">
                  <span>筛选条件</span>
                  <i id="drop" class="drop-i"></i>
                </li>
                <li class="li-filter fl" @click="showOrder">
                  <span>{{this.order}}</span>
                  <i id="drop2" class="drop-i"></i>
                  <ul id="drop-list" style="display: none;">
                    <li v-for="(value,index) in orderList" :key="index" @click="giveOrder(value)">{{ value.name }}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="list-wrap1">
              <div class="hd" id="part" style="display: none">
                为您推荐
                <span class="ret">5</span>
                <span>个楼盘</span>
                <Badge :count=this.count style="float: right;margin-right: 10px">
                  <Icon title="楼盘对比" @click="addComapre" type="ios-notifications-outline" size="26"></Icon>
                </Badge>
                <img title="我的收藏夹" @click="jumpCollect" src="../../assets/img/sumcollect.png" alt="" style="float: right;height: 20px;width: 20px;margin-top: 7px;margin-right: 10px">
              </div>
            </div>
            <div class="list-wrap3" style="overflow: auto;height:580px">
              <choice v-if="showChoice" />
              <div v-for="(value,index) in information" :key="index">
                <div @click="location(index,value)" style="margin: 10px;border-bottom:1px solid #999">
                  <Row>
                    <Col span="12">
                    <div class="left mend_img">
                      <img style="width: 150px;height: 100px" v-bind:src="value.image" />
                    </div>
                    </Col>
                    <Col span="12">
                    <div class="left name" style="margin-top: 5px">
                      <h3 style="display:inline-block;width:140px">{{value.name}}</h3>
                      <Icon @click="detail(index,value)" type="ios-information-circle" color="#2d8cf0" size="17" title="小区信息详情" style="margin-bottom:8px;" />
                      <img v-if="value.collected == '0'" :src=uncollect alt="" title="收藏" @click="Collection(index,value)" id="index" style="width: 15px;height: 15px;margin-left: 5px">
                      <img v-else-if="value.collected == '1'" :src=collect alt="" title="取消收藏" @click="Collection(index,value)" style="width: 15px;height: 15px;margin-left: 5px">
                      <p style="margin-top: 5px">
                        <span>建面：</span>{{value.area}}/m2</p>
                      <div style="margin-top: 5px;color: red">
                        <span>均价：</span>{{value.price}}元
                        <Button @click="add(index,value)" size="small" style="float: right">加入对比
                        </Button>
                      </div>
                      <a @click="getInfo(index,value)" style="font-size: 10px">查看小区周边详情>></a>
                    </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <Drawer title="安邦花园" :closable="false" v-model="info" width="23%">
            <div style="overflow: hidden;">
              <div style="width: 140px;height: 100px;float:left;">
                <img v-bind:src="currentImg" style="width: 150px;height: 110px">
              </div>
              <div style="float:right;height: 100px;width: 160px;margin-top:8px">
                <ul>
                  <li>
                    <span style="font-weight:bold; font-size:14px">小区高度类型:</span>{{houseHeight}}
                  </li>
                  <li>
                    <span style="font-weight:bold; font-size:14px">小区类型:</span>{{houseType}}
                  </li>
                  <li>
                    <span style="font-weight:bold; font-size:14px">绿化率:</span>{{greeningRate}}
                  </li>
                  <li>
                    <span style="font-weight:bold; font-size:14px">停车位:</span>{{parkingSpace}}
                  </li>
                </ul>
              </div>
            </div>

            <div v-for="(value,index) in detailList" style="margin-top:20px;border-bottom:1px solid #999;">
              <img v-bind:src="value.image" style="width: 150px;height: 100px;">
              <div style="width:130px;height:40px;float:right;margin-right:25px;">
                <p style="font-weight:bold; font-size:14px;text-align:center;margin-top:5px">
                  {{value.imagename}}</p>
                <span style="font-weight:bold;margin-bottom:30px">特点:</span>
                <span>{{value.charact}}</span>
              </div>
            </div>
          </Drawer>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
</template>

<script>
import smallMapView from "@/map/components/smallMapView";
import recommendHose from "./components/recommendHose.vue";
import choice from "./components/choice.vue";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import aroundInfo from "@/vuex/store";
import housueName from "@/vuex/store";
import housePoint from "@/vuex/store";
import compareHouseOne from "@/vuex/store";
import compareHouseTwo from "@/vuex/store";
import compareHouseThree from "@/vuex/store";
import compareHouseFour from "@/vuex/store";
import Add from "@/views/main/index.vue";

export default {
  mounted() {
    // setTimeout(() => {
    //   this.getdata();
    // }, 100);
    this.getdata();
    setTimeout(() => {
      this.showGraphics();
    }, 5000);
  },
  data() {
    return {
      count: 0,
      countCollect: "",
      houseName: [],
      timeIndex: "",
      total: 5,
      map: true,
      info: false,
      showChoice: false,
      order: "默认排序",
      information: [],
      houseShape: "",
      orderList: [
        { name: "默认排序", type: "" },
        { name: "单价由低到高", type: "1", type2: "PRICE" },
        { name: "单价由高到低", type: "0", type2: "PRICE" },
        { name: "面积由低到高", type: "1", type2: "AREA " },
        { name: "面积由高到低", type: "0", type2: "AREA " }
      ],
      houseHeight: "",
      houseType: "",
      greeningRate: "",
      parkingSpace: "",
      detailList: [],
      list: "",
      currentImg: "",
      isPopup: true,
      isPan: true,
      nullData: {
        houseName: "",
        image: "",
        address: "",
        houseHeight: "",
        price: "",
        houseType: "",
        isSelling: "",
        greeningRate: "",
        parkingSpace: ""
      },
      collect: require(`../../assets/img/collect.png`),
      uncollect: require(`../../assets/img/uncollect.png`)
    };
  },
  methods: {
    addComapre() {
      this.count = 0;
      debugger;
      var _this = this;
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: this.houseName[0]
        }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          compareHouseOne.commit("compareHouseOne", rsp);
        } else if (rsp.errMsg === "null") {
          compareHouseOne.commit("compareHouseOne", _this.nullData);
        }
      });
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: this.houseName[1]
        }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          compareHouseTwo.commit("compareHouseTwo", rsp);
        } else if (rsp.errMsg === "null") {
          compareHouseTwo.commit("compareHouseTwo", _this.nullData);
        }
      });
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: this.houseName[2]
        }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          compareHouseThree.commit("compareHouseThree", rsp);
        } else if (rsp.errMsg === "null") {
          compareHouseThree.commit("compareHouseThree", _this.nullData);
        }
      });
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: this.houseName[3]
        }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          compareHouseFour.commit("compareHouseFour", rsp);
        } else if (rsp.errMsg === "null") {
          compareHouseFour.commit("compareHouseFour", _this.nullData);
        }
      });
      this.$router.push("/compare");
    },
    add(index, value) {
      this.count++;
      this.houseName.push(value.houseId);
      if (this.houseName.length > 3) {
        this.count = 4;
        this.$Message.warning("最多添加4条哦");
      }
    },
    jumpCollect() {
      this.$router.push("/personalcenter");
    },
    getdata() {
      debugger;
      debugger;
      var self = this;
      this.map = true;
        var userId = JSON.parse(sessionStorage.getItem("userId"));
        Server.get({
        url: services.getrecommendHouse,
            params: {
                userId: userId
            }
      }).then(function(rsp) {
        if (rsp.status === 1) {
          self.information = rsp.data;
        }
      });
    },
    showGraphics() {
      debugger;
      for (
        var i = 0, len = this.total, item;
        i < len, (item = this.information[i]);
        i++
      ) {
        if (i < this.total) {
          item.pIndex = "p" + i;
          this.information.push(item);
        } else {
          break;
        }
      }
      document.getElementById("part").style.display = "block";
      onemap.pubsub.publish("drawHouseByList", {
        list: this.information,
        popup: this.isPopup,
        pan: this.isPan
      });
    },
    getInfo(index, value) {
      this.houseName = value.name;
      debugger;
      this.houseShape = value.Shape;
      housePoint.commit("housePoint", this.houseShape);
      Server.get({
        url: services.road,
        params: {
          name: value.name,
          tableName: "BUSSTATION"
        }
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          aroundInfo.commit("aroundInfo", rsp);
          aroundInfo.commit("housueName", this.houseName);
        }
      });
      this.$router.push("/periphery");
    },
    detail(index, value) {
      this.currentImg = value.image;
      this.houseName = value.name;
      this.info = true;
      var _this = this;
      this.houseName = value.name;
      Server.get({
        url: services.getdetail,
        params: {
          name: this.houseName
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          //   console.log(rsp.data[0].picture);
          //   _this.detailList = rsp.data[0].picture;
          _this.houseHeight = rsp.data[0].houseHeight;
          _this.houseType = rsp.data[0].houseType;
          _this.greeningRate = rsp.data[0].greeningRate;
          _this.parkingSpace = rsp.data[0].parkingSpace;
        } else {
        }
      });
      Server.get({
        url: services.getImageToCommunity
      }).then(rsp => {
        if (rsp.status === 1) {
          _this.detailList = rsp.imageData;
        } else {
        }
      });
    },
    giveOrder(value) {
      debugger;
      document.getElementById("part").style.display = "block";
      this.type = value.type;
      this.type2 = value.type2;
      let this_ = this;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.getrecommendHouse,
        params: {
          userId: userId,
          sorting: this_.type,
          column: this_.type2
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          this_.information = rsp.data;
          this_.total = rsp.length;
        }
      });
    },
    location(index, value) {
      for (var i = 0, g; (g = window.mapview.graphics.items[i]); i++) {
        var pIndex = "p" + index;
        if (g.attributes.id === value.pIndex) {
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
    },
    Collection(index, value) {
      if (value.collected === 0) {
        var userId = JSON.parse(sessionStorage.getItem("userId"));
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
        var userId = JSON.parse(sessionStorage.getItem("userId"));
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
    },
    changeStyle() {
      var obj = document.getElementById("drop");
      if (obj.className == "drop-i") {
        obj.classList.remove("drop-i");
        obj.setAttribute("class", "drop-open");
        this.showChoice = true;
      } else {
        obj.classList.remove("drop-open");
        obj.setAttribute("class", "drop-i");
        this.showChoice = false;
      }
    },
    showOrder() {
      var obj = document.getElementById("drop2");
      if (obj.className == "drop-i") {
        obj.classList.remove("drop-i");
        obj.setAttribute("class", "drop-open");
      } else {
        obj.classList.remove("drop-open");
        obj.setAttribute("class", "drop-i");
      }
      var obj = document.getElementById("drop-list");
      if (obj.style.display === "none") {
        obj.style.display = "block";
      } else if (obj.style.display === "block") {
        obj.style.display = "none";
      }
    }
  },
  components: {
    smallMapView,
    choice,
    recommendHose
  }
};
</script>
<style lang="less" scoped>
ul {
  list-style: none;
  padding-left: 0;
}

.filter {
  width: 380px;
  height: 51px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  .li-filter {
    position: relative;
    width: 50%;
    float: left;
    margin-top: 15px;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
    z-index: 10;
  }
  .drop-open {
    display: inline-block;
    margin: 6px 0 0 4px;
    width: 0;
    height: 0;
    font-size: 0;
    border: 5px solid transparent;
    border-top-color: #dfdfdf;
    vertical-align: top;
    margin: 0px 0 0 4px;
    border-color: transparent transparent #999;
  }
  .drop-i {
    display: inline-block;
    margin: 6px 0 0 4px;
    width: 0;
    height: 0;
    font-size: 0;
    border: 5px solid transparent;
    border-top-color: #dfdfdf;
    vertical-align: top;
  }
  #drop-list {
    top: 35px;
    position: absolute;
    width: 100%;
    line-height: 30px;
    border-radius: 0 0 2px 2px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding-top: 6px;
    padding-bottom: 6px;
    cursor: pointer;
    .li {
      cursor: default;
    }
  }
  #drop-list li:hover {
    color: #f15044;
  }
}

.list-wrap1 {
  position: fixed;
  top: 107px;
  bottom: 0;
  width: 380px;
  background-color: #fff;
  .hd {
    color: #999;
    background-color: #f7f7f7;
    line-height: 35px;
    font-size: 12px;
    text-indent: 1px;
  }
  .ret,
  .ret-all {
    padding: 0 2px;
    color: #f15044;
    font-weight: 700;
  }
}

.list-wrap3 {
  position: absolute;
  left: 0;
  right: 0;
  top: 87px;
  bottom: 0;
  height: 675px;
  background: #fff;
  overflow-y: auto;
}
</style>
