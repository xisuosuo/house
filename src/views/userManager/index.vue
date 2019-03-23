<template>
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

    <!-- <Layout>
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
                    <li class="menu-item">
                        <a class="nav-item">
                            <div class="icon-wrap">
                                <span class="menu-icon icon-xmsc"></span>
                            </div>
                            <div class="div-label">
                                <span>用户管理</span>
                            </div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a class="nav-item">
                            <div class="icon-wrap">
                                <span class="menu-icon icon-xmsc"></span>
                            </div>
                            <div class="div-label">
                                <span>权限管理</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </Sider>
        <Content>
            <user-manager/>
        </Content>
    </Layout> -->
</template>
<script>
import userManager from "./components/userIndex.vue";
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
  },
  components: {
    userManager
  }
};
</script>

<style lang="less" scoped>
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

// .ivu-layout {
//   height: 1024px;
// }
</style>