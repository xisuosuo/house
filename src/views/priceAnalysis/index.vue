<template>
    <div>
        <Layout :style="{height:'100%'}">
            <Sider ref="side1" :width='180'>
                <Menu active-name="" theme="dark" width="auto" :open-names="['']">
                    <router-link to="/menu">
                        <MenuItem name="8-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>首页</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="md-analytics" /> 数据展示
                        </template>
                        <router-link to="/data">
                            <MenuItem name="1-1">
                            <span style="font-size: 13px">数据统计</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/data/dataDeatils">
                            <MenuItem name="1-2">
                            <span style="font-size: 13px">数据查询</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                    <router-link to="/recommendation/housingPreference">
                        <MenuItem name="2-1">
                        <Icon type="md-thumbs-up" />
                        <span>房源推荐</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/recommendation/factor">
                        <MenuItem name="2-2">
                        <Icon type="md-pin" />
                        <span>购房选址</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/infoSearch">
                        <MenuItem name="4-1">
                        <Icon type="md-search" />
                        <span>信息查询</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/userManager">
                        <MenuItem name="4-2" v-if="show">
                        <Icon type="md-contacts" />
                        <span>用户管理</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/personalcenter">
                        <MenuItem name="5-1">
                        <Icon type="md-person" />
                        <span>个人中心</span>
                        </MenuItem>
                    </router-link>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="md-paper" /> 用户手册
                        </template>
                        <router-link to="/auDecision/usersManual">
                            <MenuItem name="6-1">
                            <span style="font-size: 13px">用户手册</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/auDecision/livablemodel">
                            <MenuItem name="6-2">
                            <span style="font-size: 13px">宜居模型</span>
                            </MenuItem>
                        </router-link>
                        <router-link to="/auDecision/model">
                            <MenuItem name="6-3">
                            <span style="font-size: 13px">引力模型</span>
                            </MenuItem>
                        </router-link>
                    </Submenu>
                </Menu>
            </Sider>
            <Content>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Breadcrumb>
                        <!-- <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon> -->
                        <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </Header>
                <!-- <div id="map" style="height: 670px;width: 100%;"> -->
                   <iframe src="snadiantu.html" frameborder="0" scrolling="auto" height="600px" width="100%" ></iframe>
                <!-- </div> -->
                <router-view/>
            </Content>
        </Layout>
    </div>
</template>
<script>
import smallMapView from "@/map/components/smallMapView";
import Register from "@/map/api/register";
import { MapAPI } from "@/core/config/const";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import { Pricemap } from "@/core/config/services";
 
export default {
  data() {
    return {
      data: [],
      list: [],
      show: true,
      isExtent: true,
      isPopup: true,
      isPan: true,
      visible: false
    };
  },

//   mounted() {
//     this.mapLoaded(window.mapview);
//     this.onSearchClick();
//   },
//   methods: {
//     mapLoaded(mapview) {
//       new Register(mapview).mapAPI();
//       // .parentMapAPI();
//     },
//     register() {
//       //接收外部结果
//       onemap.pubsub.subscribe("showQuickSearchResult", arg => {
//         this.isExtent = false;
//         this.isPan = false;
//         this.isPopup = arg.isPopup || true;
//         this.data = arg.list;
//         this.visible = true;
//       });
//       onemap.pubsub.subscribe("hideQuickSearchResult", arg => {
//         this.visible = false;
//         this.data = [];
//       });

//       //clear
//       onemap.pubsub.subscribe("clear", arg => {
//         this.visible = false;
//         // this.pa;
//         this.data = [];
//       });
//     },
//     onSearchClick() {
//       Server.get({
//         url: services.houseQuery,
//         params: {
//           name: "安邦花园"
//         }
//       }).then(
//         rsp => {
//           debugger;
//           var _this = this;
//           if (rsp.status === 1) {
//             _this.data = rsp.data;
//             _this.list = rsp.data;
//             this.showGraphics();
//           } else {
//             _this.data = [];
//           }
//           _this.visible = true;
//         },
//         error => {
//           this.$Message.warning(error.message);
//         }
//       );
//     },
//     showGraphics() {
//       debugger;
//       //   window.mapview.graphics.removeAll();
//       if (this.list === 0) return;
//       onemap.pubsub.publish("drawHouseByList", {
//         list: this.list,
//         popup: this.isPopup,
//         pan: this.isPan,
//         mapView: window.mapview
//       });
//     }
//   },

//   components: {
//     smallMapView
//   }
};
</script>