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
    </Layout>
</template>
<script>
import userManager from "./components/userIndex.vue";
export default {
  components: {
    userManager
  }
};
</script>

<style lang="less" scoped>
// .ivu-layout {
//   height: 1024px;
// }
</style>