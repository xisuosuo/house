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
                    <router-link to="/recommendation/housingPreference">
                        <li class="menu-item">
                            <a class="nav-item">
                                <div class="icon-wrap">
                                    <span class="menu-icon icon-cgzs"></span>
                                </div>
                                <div class="div-label">
                                    <span>住房推荐</span>
                                </div>
                            </a>
                        </li>
                    </router-link>
                    <router-link to="/recommendation/factor">
                        <li class="menu-item">
                            <a class="nav-item">
                                <div class="icon-wrap">
                                    <span class="menu-icon icon-cgzs"></span>
                                </div>
                                <div class="div-label">
                                    <span>住房选择</span>
                                </div>
                            </a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </Sider>
        <Content>

            <router-view/>
        </Content>
    </Layout>
</template>

<script>
    import factor from "./components/factor.vue";

    export default {
        data() {
            return {};
        },
        components: {
            factor
        }
    };
</script>

<style lang="less" scoped>
    // .ivu-layout {
    //   height: 1024px;
    // }
    .wripper {
        height: 100%;
        width: 100%;
        padding-top: 20px;
        /*background: url(../../assets/img/house.jpg)  no-repeat ;*/
    }
</style>