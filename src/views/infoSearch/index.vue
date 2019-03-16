<template>
  <!-- <div class="screen" style="width:w_height"> -->
  <Layout :height="w_height-55">
    <Sider hide-trigger :width=" 70 " :height=" w_height ">
      <div class="layout-menu ">
        <ul>
          <router-link to="/menu">
            <li class="menu-home">
              <a>
                <span class="icon-home "></span>
              </a>
            </li>
          </router-link>
          <li class="menu-item " @click="siteSelect ">
            <a class="nav-item ">
              <div class="icon-wrap ">
                <span class="menu-icon icon-collision "></span>
              </div>
              <div class="div-label ">
                <span>条件选房</span>
              </div>
            </a>
          </li>
          <li class="menu-item ">
            <a class="nav-item ">
              <div class="icon-wrap ">
                <span class="menu-icon icon-chart "></span>
              </div>
              <div class="div-label ">
                <span>数据统计</span>
              </div>
            </a>
            <ul class="sub-menu-item ">
              <li>
                <a @click="selectHouse() ">公共设施</a>
              </li>
              <li>
                <a @click="selectBuffer() ">缓冲区分析</a>
              </li>
            </ul>

          </li>
          <li class="menu-item " @click="controlAnlayse">
            <a class="nav-item ">
              <div class="icon-wrap ">
                <span class="menu-icon icon-search "></span>
              </div>
              <div class="div-label ">
                <span>周边设施</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <tool-form/>
      <buffer/>
      <Modal v-model="dialog3" :mask-closable="false" width="400" title="周边设施" draggable>
        <Form :label-width="60">
          <FormItem label="小区名：" prop="zoning">
            <Input v-model="houseTitle" placeholder="" clearable></Input>
          </FormItem>
          <FormItem label="周边设施" prop="zoning">
            <Select v-model="publicsheshi">
              <Option v-for="item in orderList" :value="item.type" :key="item.name">{{ item.name }}</Option>
            </Select>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" size="large" long @click="gethousePoint">查询</Button>
        </div>
      </Modal>
    </Sider>
    <Content>
      <siteSelection v-if="site " v-on:change="getfalse($event) " :site="site " />
      <router-view/>
    </Content>
  </Layout>
  <!-- </div> -->
</template>
<script>
import toolForm from "@/views/infoSearch/inforCount/public.vue";
import buffer from "@/views/infoSearch/inforCount/buffer.vue";
import siteSelection from "./home/components/siteSelection";
import { computeh } from "@/core/computeh";
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  mixins: [computeh],
  data() {
    return {
      site: false,
      publicsheshi: "",
      isPopup: true,
      isPan: true,
      houseTitle: "",
      dialog3: false,
      list: "",
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
  methods: {
    gethousePoint() {
      Server.get({
        url: services.road,
        params: {
          name: this.houseTitle,
          tableName: this.publicsheshi
        }
      }).then(rsp => {
        debugger;
        var _this = this;
        if (rsp.status === 1) {
          _this.list = rsp.data;
          this.showGraphics();
        }
      });
    },
    showGraphics() {
      debugger;
      if (window.mapview.graphics.length == 0) {
        onemap.pubsub.publish("drawHouseByList", {
          list: this.list,
          popup: this.isPopup,
          pan: this.isPan
        });
      } else {
        window.mapview.graphics.removeAll();
        if (this.list === 0) return;
        onemap.pubsub.publish("drawHouseByList", {
          list: this.list,
          popup: this.isPopup,
          pan: this.isPan
        });
      }
    },
    controlAnlayse() {
      this.dialog3 = true;
    },
    siteSelect: function() {
      if (this.site == false) {
        this.site = true;
      } else {
        this.site = false;
      }
    },
    getfalse(msg) {
      this.site = msg;
    },
    selectHouse() {
      this.$root.Bus.$emit("eventSelectHouse");
    },

    selectBuffer() {
      this.$root.Bus.$emit("eventSelectBuffer");

      this.dialog2 = true;
    }
  },
  components: {
    toolForm,
    buffer,
    siteSelection
  }
};
</script>
<style lang="less" scoped>
.ivu-form-item {
  margin-bottom: 12px;
  vertical-align: top;
  zoom: 1;
}
.menu-item-title {
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  padding-left: 28px;
}
</style>