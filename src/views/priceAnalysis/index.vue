<template>
    <div>
        <Layout :style="{height:'100%'}">
            <Sider ref="side1" :width='180'>
                <sider-menu/>
            </Sider>
            <Content>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Breadcrumb>
                        <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                        <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                    </Breadcrumb>
                </Header>
                <!-- <div id="map" style="height: 670px;width: 100%;"> -->
                <iframe src="price.html" frameborder="0" scrolling="auto" height="720px" width="100%"></iframe>
                <!-- </div> -->
                <router-view/>
            </Content>
        </Layout>
    </div>
</template>
<script>
    import SiderMenu from "@/views/main/siderMenu";
import smallMapView from "@/map/components/smallMapView";
import Register from "@/map/api/register";
import { MapAPI } from "@/core/config/const";
import Server from "@/core/server";
import { services } from "@/core/config/services";
import { Pricemap } from "@/core/config/services";

export default {
  data() {
    return {
      data: [],
      list: [],
      show: true,
      isExtent: true,
      isPopup: true,
      isPan: true,
      visible: false
    };
  },
    components: {
        SiderMenu
    }
};
</script>
 <style lang="less" scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>
