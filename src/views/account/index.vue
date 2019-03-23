<template>
  <div>

    <!-- <Sider hide-trigger :width="70">
      <div class="layout-menu">
        <ul>
          <router-link to="/menu">
            <li class="menu-home">
              <a>
                <span class="icon-home"></span>
              </a>
            </li>
          </router-link>
          <router-link to="/data">
            <li class="menu-item">
              <a class="nav-item">
                <div class="icon-wrap">
                  <span class="menu-icon icon-database"></span>
                </div>
                <div class="div-label">
                  <span>数据台账</span>
                </div>
              </a>
            </li>
          </router-link>
          <router-link to="/data/dataDeatils">
            <li class="menu-item">
              <a class="nav-item">
                <div class="icon-wrap">
                  <span class="menu-icon icon-ctxtjh"></span>
                </div>
                <div class="div-label">
                  <span>数据统计</span>
                </div>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </Sider> -->
    <Layout :style="{height:'100%'}">
      <!--<Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">-->
        <!--<Menu  theme="dark" width="auto" :class="menuitemClasses">-->

          <!--<router-link to="/menu">-->
          <!--<MenuItem name="1-1">-->
          <!--<Icon type="ios-navigate"></Icon>-->
          <!--<span>首页</span>-->
          <!--</MenuItem>-->
            <!--<MenuItem name="1-1">Option 1</MenuItem>-->
            <!--<MenuItem name="1-2">Option 2</MenuItem>-->
            <!--<MenuItem name="1-3">Option 3</MenuItem>-->
          <!--</router-link>-->

          <!--<router-link to="/data">-->
            <!--<MenuItem name="1-2">-->
          <!--<Icon type="ios-search"></Icon>-->
          <!--<span>数据查询</span>-->
          <!--</MenuItem>-->
          <!--</router-link>-->

          <!--<router-link to="/data/dataDeatils">-->
          <!--<MenuItem name="1-3">-->
          <!--<Icon type="ios-settings"></Icon>-->
          <!--<span>数据统计</span>-->
          <!--</MenuItem>-->
          <!--</router-link>-->
        <!--</Menu>-->
      <!--</Sider>-->
    <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              数据查询
            </template>
            <!--<router-link to="/data">-->
            <MenuItem name="1-1">数据统计</MenuItem>
            <!--</router-link>-->
            <MenuItem name="1-2">数据查询</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
             房源推荐
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
            用户管理
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
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
export default {
  data() {
    return {
      isCollapsed: false,
      path: ""
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
    }
  }
};
</script>

 <style lang="less" scoped>
// .ivu-layout {
//   height: 1024px;
// }

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

.group-panel-box {
  &.blue {
    .panel-title {
      background: #2d8cf0;
    }
    .panel-line {
      background: #2d8cf0;
    }
  }
  .panel-title {
    float: left;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: white;
    font-size: 14px;
    margin-left: 10px;
    clear: both;
  }
  .panel-line {
    height: 2px;
    clear: both;
  }
}
.chartImage {
  position: relative;
  left: 0;
  float: right;
  top: -51px;
  cursor: pointer;
}
.slelectInput {
  width: 200px;
  float: right;
}

.data-view {
  padding: 20px;
  height: 2000px;
  .group-header {
    height: 20px;
  }
  .ivu-row {
    .left {
      padding-right: 10px;
    }
    .right {
      padding-left: 10px;
    }
    .chart {
      height: 400px;
      width: 100%;
    }
    .card-box {
      .card-tools {
        span {
          float: left;
        }
        .ivu-select {
          float: left;
          margin: 4px 20px 4px 5px;
          width: 150px;
          .ivu-select-selection {
            border-radius: 0;
          }
        }
      }
    }
  }
}
</style>
