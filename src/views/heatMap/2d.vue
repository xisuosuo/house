<template>
    <div>
        <Layout :style="{height:'100%'}">
            <Sider ref="side1" :width='180'>
                <sider-menu/>
            </Sider>
            <Content>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Breadcrumb> 
                        <Icon :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                        <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </Header>
                <!-- <div id="map" style="height: 670px;width: 100%;"> -->
                <iframe src="baidu.html" frameborder="0" scrolling="auto" height="600px" width="100%"></iframe>
                <!-- </div> -->
                <router-view/>
            </Content>
        </Layout>
    </div>
</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
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
  components: {
    SiderMenu
  }

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
 <style lang="less" scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
