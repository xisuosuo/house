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
          <router-link to="/infoSearch/infoDeatil">
            <li class="menu-item">
              <a class="nav-item">
                <div class="icon-wrap">
                  <span class="menu-icon icon-search"></span>
                </div>
                <div class="div-label">
                  <span>信息查询</span>
                </div>
              </a>
            </li>
          </router-link>
          <li class="menu-item">
            <a class="nav-item">
              <div class="icon-wrap">
                <span class="menu-icon icon-chart"></span>
              </div>
              <div class="div-label">
                <span>数据统计</span>
              </div>
            </a>
            <ul class="sub-menu-item">
              <li>
                <a @click="selectHouse()">公共设施</a>
              </li>
              <li>
                <a @click="selectBuffer()">缓冲区分析</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <tool-form/>
      <buffer/>
    </Sider>
    <Content>
      <router-view/>
    </Content>
  </Layout>
</template>
<script>
import toolForm from "@/views/infoSearch/inforCount/public.vue";
import buffer from "@/views/infoSearch/inforCount/buffer.vue";
export default {
  methods: {
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
    buffer
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
</style>