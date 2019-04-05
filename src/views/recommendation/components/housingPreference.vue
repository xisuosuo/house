<template>
  <Layout>
    <Content>
      <div id="preference" style="margin-left: 5%;display: block">
        <h1 style="text-align: center;margin: 50px;">楼盘推荐</h1>
        <Row :gutter="30">
          <div v-for="(value,index) in information1">
            <Col span="8">
              <Card style="width:385px;padding: 0;">
                <div  style="text-align:center" @click="getInfo(index,value)">
                  <img style="width: 350px;height: 250px" v-bind:src="value.image" alt="">
                  <div style="overflow: hidden">
                    <h2 style="float: left">{{value.name}}</h2>
                    <span style="float: right">{{value.price}}元/㎡</span>
                  </div>
                </div>
              </Card>
            </Col>
          </div>
        </Row>
        <div style="padding: 20px;float: right;">
          <a @click="moreInfo">点击查看更多小区>></a>
        </div>
      </div>
      <div id="moreInfo" style="margin-top: 55px;background-color: #F5F5F5;display: none">
        <div v-for="(value,index) in information2" :key="index" style="width: 800px;margin: 0 auto;background-color: #fff;">
          <div @click="location(index,value)" style="margin: 10px;border-bottom:1px solid #999">
            <Row>
              <Col span="7">
              <div class="left mend_img">
                <img style="width: 200px;height: 150px;margin-top: 20px;margin-bottom: 10px" v-bind:src="value.image" />
              </div>
              </Col>
              <Col span="17">
              <div class="left name" style="margin-top: 35px">
                <div style="margin-top: 25px;float: right">
                  <span style="color: red;font-size: 20px;font-weight: bold;">均价：{{value.price}}元/㎡</span>
                  <p style="margin-top: 5px;font-size: 13px">
                    <span>楼层高度：{{value.houseHeight}}</span>
                  </p>
                  <p style="margin-top: 5px;font-size: 13px">
                    <span>销售情况：{{value.isSelling}}</span>
                  </p>
                  <p style="margin-top: 5px;font-size: 13px">
                    <span>停车位：{{value.parkingSpace}}个</span>
                  </p>
                </div>
                <h2 style="display:inline-block;">{{value.name}}</h2>
                <img v-if="value.collected == '0'" :src=uncollect alt="" title="收藏" @click="Collection(index,value)" id="index" style="width: 15px;height: 15px;margin-left: 20px">
                <img v-else-if="value.collected == '1'" :src=collect alt="" title="取消收藏" @click="Collection(index,value)" style="width: 15px;height: 15px;margin-left: 20px">

                <p style="margin-top: 5px;font-size: 13px">
                  <span>价格说明：</span>在{{value.minPrice}}元/㎡ ~ {{value.maxPrice}}元/㎡之间</p>
                <p style="margin-top: 5px;font-size: 13px">
                  <span>物业类型：</span>{{value.houseType}}</p>
                <p style="margin-top: 5px;font-size: 13px">
                  <span>地址：</span>{{value.address}}</p>
                <p style="margin-top: 5px">
                  <a @click="getInfo(index,value)" style="font-size: 10px">查看小区详情>></a>
                </p>
              </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Content>
  </Layout>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import houseInfoId from "@/vuex/store";
import userMessage from "@/vuex/store";
import dataRap from "@/vuex/store";
import aroundInfo from "@/vuex/store";
import housePoint from "@/vuex/store";
export default {
  computed: {},
  data() {
    return {
      information2: [],
      information1: [],
      houseName: "",
      collect: require(`.././../../assets/img/collect.png`),
      uncollect: require(`.././../../assets/img/uncollect.png`)
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getInfo(index, value) {
      this.houseName = value.name;
      this.houseId = value.houseId;
      this.houseShape = value.Shape;
      housePoint.commit("housePoint", this.houseShape);
      Server.get({
        url: services.compareHouseDetails,
        params: {
          houseId: this.houseId
        }
      })
        .then(rsp => {
          if (rsp.status === 1) {
            houseInfoId.commit("houseInfoId", rsp);
          }
        })
        .then(
          Server.get({
            url: services.road,
            params: {
              name: value.name,
              tableName: "BUSSTATION"
            }
          }).then(rsp => {
            debugger;
            var _this = this;
            if (rsp.status === 1) {
              aroundInfo.commit("aroundInfo", rsp);
              aroundInfo.commit("housueName", this.houseName);
            }
          })
        );
      this.$router.push("/houseinfo");
    },
    getdata() {
        debugger;
        var information = JSON.parse(sessionStorage.getItem("information2"));
        this.information2 = information;
        this.information1.push(information[0],information[1],information[2])
    },
    moreInfo() {
      document.getElementById("preference").style.display = "none";
      document.getElementById("moreInfo").style.display = "block";
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
    }
  }
};
</script>

<style lang="less" scoped>
</style>
