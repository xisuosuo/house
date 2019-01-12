<template>
  <Layout>
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
          <li class="menu-item" @click="siteSelect">
            <a class="nav-item">
              <div class="icon-wrap">
                <span class="menu-icon icon-collision"></span>
              </div>
              <div class="div-label">
                <span>条件选房</span>
              </div>
            </a>
          </li>
          <li class="menu-item">
            <a class="nav-item">
              <div class="icon-wrap">
                <span class="menu-icon icon-wnpg"></span>
              </div>
              <div class="div-label">
                <span>智能选房</span>
              </div>
            </a>
            <ul class="sub-menu-item">
              <li>
                <a @click="openCompare()">房源对比</a>
              </li>
              <li>
                <a @click="openCalculator()">房源计算器</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Sider>
    <Content>
      <siteSelection v-if="site" v-on:change="getfalse($event)" :site="site" />
      <MapView v-if="map"></MapView>
      <Calculator></Calculator>
      <houseCompare></houseCompare>
    </Content>
  </Layout>
</template>
<script>
import Calculator from "./components/Calculator";
import houseCompare from "./components/houseCompare";
import siteSelection from "./components/siteSelection";
import MapView from "@/map/components/MapView";
export default {
    methods: {
        openCompare() {
            this.$root.Bus.$emit("eventCompare");
        },
        openCalculator() {
            this.$root.Bus.$emit("eventCalculator");
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
        }
    },
    mounted() {},
    data() {
        return {
            map: true,
            site: false,
            Result: false
        };
    },
    components: {
        MapView,
        houseCompare,
        Calculator,
        siteSelection
    }
};
</script>
<style lang="less" scoped>
.ivu-layout {
    height: 1024px;
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

