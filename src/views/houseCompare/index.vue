<template>
    <!-- <Layout :height="w_height-55">
        <Sider hide-trigger :width="70">
            <div class="layout-menu">
                <ul>
                    <router-link to="/menu">
                        <li class="menu-home">
                            <a>
                                <span class="icon-home"></span>
                            </a>
                        </li>
                    </router-link>
                    <router-link to="/compare">
                        <li class="menu-item">
                            <a class="nav-item">
                                <div class="icon-wrap">
                                    <span class="menu-icon icon-database"></span>
                                </div>
                                <div class="div-label">
                                    <span>房源对比</span>
                                </div>
                            </a>
                        </li>
                    </router-link>
                    <li class="menu-item" @click="openCalculator()">
                        <a class="nav-item">
                            <div class="icon-wrap">
                                <span class="menu-icon icon-wnpg"></span>
                            </div>
                            <div class="div-label">
                                <span>房贷计算器</span>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </Sider>
        <Content>
            <!-- <siteSelection v-if="site" v-on:change="getfalse($event)" :site="site" /> -->
    <!-- <MapView v-if="map"></MapView>
            <Calculator></Calculator>
        </Content> -->
    <!-- </Layout> -->
    <div>
        <Layout :style="{height:'100%'}">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                    <router-link to="/data/dataDeatils">
                        <MenuItem name="1-1">
                        <Icon type="ios-navigate"></Icon>
                        <span>Option 1</span>
                        </MenuItem>
                    </router-link>
                    <MenuItem name="1-2">
                    <Icon type="ios-search"></Icon>
                    <span>Option 2</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                    <Icon type="ios-settings"></Icon>
                    <span>Option 3</span>
                    </MenuItem>
                </Menu>
                <!-- <MenuItem name="1-4">
        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
        <span>Option 4</span>
        </MenuItem> -->
                </Menu>
            </Sider>

            <Content>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Breadcrumb>
                        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                        <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </Header>
                <router-view/>
            </Content>
        </Layout>
    </div>

</template>
<script>
import Calculator from "./components/Calculator";

import { computeh } from "@/core/computeh";
// import siteSelection from "./components/siteSelection";
import MapView from "@/map/components/MapView";
export default {
  mixins: [computeh],
  methods: {
    openCompare() {
      this.$root.Bus.$emit("eventCompare");
    },
    openCalculator() {
      this.$root.Bus.$emit("eventCalculator");
    }
    // siteSelect: function() {
    //   if (this.site == false) {
    //     this.site = true;
    //   } else {
    //     this.site = false;
    //   }
    // },
    // getfalse(msg) {
    //   this.site = msg;
    // }
  },
  mounted() {},
  data() {
    return {
      map: true,
      //   site: false,
      Result: false
    };
  },
  components: {
    MapView,

    Calculator
    // siteSelection
  }
};
</script>
<style lang="less" scoped>
.ivu-layout {
  height: 100%;
}
.tabs {
  width: 380px;
  height: 400px;
}

.main .container-fluid {
  padding: 0 0px;
}
.breadcrumb {
  position: relative;
  margin-bottom: 0.01rem;
  border-bottom: 1px solid #cfd8dc;
}
#layerToggle {
  top: 20px;
  right: 20px;
  position: absolute;
  z-index: 99;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  opacity: 0.75;
}
.baidu {
  position: absolute;
  right: 0;
  top: 115px;
}

.tools {
  position: absolute;
  top: 60px;
  left: 80px;
}
.search {
  position: absolute;
  top: 58px;
  left: 120px;
}
.list-wrapper {
  padding: 10px;
  overflow-y: auto;
}
.esri-layer-list__item-title {
  margin-left: -5px;
  padding-left: -5px;
}
#switchbasemap {
  float: left;
  padding: 0 10px 0 4px;
  height: 30px;
  line-height: 30px;
  background: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  cursor: pointer;
}
</style>

