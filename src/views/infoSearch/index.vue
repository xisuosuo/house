<template>
  <div class="layout">
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
          <Submenu name="3">
            <template slot="title">
              <Icon type="md-search" /> 信息查询
            </template>
            <MenuItem name="3-1">
              <span @click="siteSelect">条件选房</span>
            </MenuItem>
            <Submenu name="3-1-1">
              <template slot="title">
                数据统计
              </template>
              <MenuItem name="3-1-1-1">
                <span @click="selectHouse() ">公共设施</span>
              </MenuItem>
              <MenuItem name="3-1-1-2">
                <span @click="selectBuffer() ">缓冲区分析</span>
              </MenuItem>
            </Submenu>
            <MenuItem name="3-3">
              <span @click="controlAnlayse">周边设施</span>
            </MenuItem>
          </Submenu>
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
            <router-link to="/Kriging">
              <MenuItem name="8-1">
                <span style="font-size: 13px">克里金插值预测</span>
              </MenuItem>
            </router-link>
            <router-link to="/GWR">
              <MenuItem name="8-2">
                <span style="font-size: 13px">GWR模型</span>
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
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Breadcrumb>
            <Icon  :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
            <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
          </Breadcrumb>
        </Header>
        <siteSelection v-if="site " v-on:change="getfalse($event) " :site="site " />
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
        <router-view/>
      </Content>
    </Layout>
  </div>
  <!-- <div class="screen" style="width:w_height"> -->
  <!-- <Layout :height="w_height-55">
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
  </Layout> -->
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
  mounted() {
    var roleid = JSON.parse(sessionStorage.getItem("roleId"));
    if (roleid === "R0001" || roleid === "R0002") {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  data() {
    return {
      show: true,
      isCollapsed: false,
      path: "",
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
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  watch: {
    $route: "getPath"
  },
  methods: {
    getPath() {
      this.path = this.$route.matched;
      console.log(this.path);
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    gethousePoint() {
      debugger;
      Server.get({
        url: services.road,
        params: {
          name: this.houseTitle,
          tableName: this.publicsheshi
        }
      }).then(rsp => {
        var _this = this;
        if (rsp.status === 1) {
          _this.list = rsp.data;
          this.showGraphics();
        }
      });
    },
    showGraphics() {
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
.layout {
  height: 800px;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fcf9f2;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
