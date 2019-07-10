<template>
  <div class="layout">
    <Layout :style="{height:'1400px'}">
      <Sider ref="side1" :width='185'>
        <Menu active-name="" theme="dark" width="auto" :open-names="['']">
          <router-link to="/data">
            <MenuItem name="2-1">
            <Icon type="md-speedometer" />
            <span class="siderItem">数据台账</span>
            </MenuItem>
          </router-link>

          <Submenu name="2">
            <template slot="title">
              <Icon type="md-search" />查询统计
            </template>

            <Submenu name="3">
              <template slot="title">
                空间查询
              </template>
              <MenuItem name="3-1">
              <span class="kjcx" @click="siteSelect()">条件选房</span>
              </MenuItem>

              <Submenu name="4">
                <template slot="title">
                  数据统计
                </template>
                <MenuItem name="4-1-2">
                <span class="kjcx" @click="selectHouse() ">公共设施</span>
                </MenuItem>
                <MenuItem name="4-1-3">
                <span class="kjcx" @click="selectBuffer() ">缓冲区查询</span>
                </MenuItem>
              </Submenu>

              <MenuItem name="4-2">
              <span class="kjcx" @click="controlAnlayse()">周边设施</span>
              </MenuItem>

            </Submenu>
            <router-link to="/data/dataDeatils">
              <MenuItem name="4-3">
              <span> 属性查询</span>
              </MenuItem>
            </router-link>
          </Submenu>

          <Submenu name="5">
            <template slot="title">
              <Icon type="md-globe" />区位资源
            </template>
            <router-link to="/locationResources">
              <MenuItem name="5-1">
              <span>学区资源</span>
              </MenuItem>
            </router-link>
            <router-link to="/medicalResources">
              <MenuItem name="5-2">
              <span>医疗资源</span>
              </MenuItem>
            </router-link>
            <router-link to="/greenlResources">
              <MenuItem name="5-3">
              <span>绿地资源</span>
              </MenuItem>
            </router-link>
            <router-link to="/businessResources">
              <MenuItem name="5-4">
              <span>商业资源</span>
              </MenuItem>
            </router-link>
          </Submenu>

          <router-link to="/recommendation/factor">
            <MenuItem name="5-1">
            <Icon type="md-pin" />
            <span class="siderItem">购房选址</span>
            </MenuItem>
          </router-link>
          <router-link to="/recommendation/housingPreference">
            <MenuItem name="6-1">
            <Icon type="md-thumbs-up" />
            <span class="siderItem">房源推荐</span>
            </MenuItem>
          </router-link>

          <Submenu name="7">
            <template slot="title">
              <Icon type="ios-radio" />房价分析
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
              <Icon type="md-analytics" />房价预测
            </template>
            <router-link to="/modelAnalysis">
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
            <MenuItem name="9-1">
            <Icon type="md-contacts" />
            <span class="siderItem">用户管理</span>
            </MenuItem>
          </router-link>
          <Submenu name="10">
            <template slot="title">
              <Icon type="md-paper" />用户手册
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
            <span class="siderItem">个人中心</span>
            </MenuItem>
          </router-link>
        </Menu>
      </Sider>
      <Content>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Breadcrumb>
            <Icon :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
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
            <FormItem label="搜索半径" :label-width="60" prop="zoning" :width="10">
              <div style="width:120px ;display:inline-block">
                <Input v-model="distance" placeholder="" clearable></Input>
                </Input>
              </div>
              <span style="width:20px;margin-left:10px">米</span>
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
      distance: "",
      isCollapsed: false,
      path: "10",
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
  computed: {},

  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    gethousePoint() {
      if (this.distance < 1000) {
        this.$Message.warning("范围过小或小区不存在，未查询到数据");
      } else {
        Server.get({
          url: services.road,
          params: {
            name: this.houseTitle,
            tableName: this.publicsheshi,
            distance: this.distance
          }
        }).then(rsp => {
          var _this = this;
          if (rsp.status === 1) {
            _this.list = rsp.data;
            debugger;
            this.showGraphics();
          } else {
            this.$Message.warning("小区不存在，未查询到数据");
          }
        });
      }
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
.kjcx {
  display: block;
}
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
.siderItem {
  margin-left: 1px;
}
</style>
