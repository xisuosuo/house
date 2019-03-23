<template>
  <div>
    <Layout :style="{height:'100%'}">
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu active-name="" theme="dark" width="auto" :open-names="['']">
        <router-link to="/menu">
        <MenuItem name="7-1">
          <Icon type="ios-navigate"></Icon>
             <span>首页</span>
          </MenuItem>
        </router-link>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              数据展示
            </template>
            <router-link to="/data">
            <MenuItem name="1-1">数据统计</MenuItem>
            </router-link>
            <router-link to="/data/dataDeatils">
            <MenuItem name="1-2">数据查询</MenuItem>
            </router-link>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
             房源推荐
            </template>
            <router-link to="/recommendation/housingPreference">
            <MenuItem name="2-1">住房推荐</MenuItem>
            </router-link>
              <router-link to="/recommendation/factor">
              <MenuItem name="2-2">住房选择</MenuItem>
              </router-link>
          </Submenu>
            <router-link to="/infoSearch">
              <MenuItem name="4-1">
                <Icon type="ios-navigate"></Icon>
                <span>信息查询</span>
              </MenuItem>
            </router-link>
        <router-link to="/userManager">
        <MenuItem name="4-1">
          <Icon type="ios-navigate"></Icon>
          <span>用户管理</span>
        </MenuItem>
        </router-link>
        <router-link to="/personalcenter">
          <MenuItem name="5-1">
            <Icon type="ios-navigate"></Icon>
            <span>个人中心</span>
          </MenuItem>
        </router-link>
        <Submenu name="6">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            用户手册
          </template>
          <router-link to="/auDecision/usersManual">
            <MenuItem name="6-1">用户手册</MenuItem>
          </router-link>
          <router-link to="/auDecision/livablemodel">
            <MenuItem name="6-2">宜居模型</MenuItem>
          </router-link>
          <router-link to="/auDecision/model">
            <MenuItem name="6-3">引力模型</MenuItem>
          </router-link>
        </Submenu>
        </Menu>
      </Sider>
      <!-- <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1" >
          <Icon type="ios-navigate"></Icon>
          <span @click="siteSelect">条件选房</span>
          </MenuItem>
          <MenuItem name="1-2">
          <Icon type="ios-search"></Icon>
          <span>数据统计</span>
          </MenuItem>
          <MenuItem name="1-3">
          <Icon type="ios-settings"></Icon>
          <span>周边设施</span>
          </MenuItem>
        </Menu>
        <!-- <MenuItem name="1-4">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        <span>Option 4</span>
        </MenuItem> -->
      </Sider> -->
      <Content>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Breadcrumb>
            <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
            <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
          </Breadcrumb>
        </Header>
        <siteSelection v-if="site " v-on:change="getfalse($event) " :site="site " />
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
  data() {
    return {
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
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
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