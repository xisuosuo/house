<template>
  <Layout :style="{height:'100%'}">
    <!-- <Sider ref="side1" :width='180'>
      <sider-menu/>
    </Sider> -->
    <Content>
      <houseCompare></houseCompare>
      <router-view/>
    </Content>
  </Layout>
</template>
<style lang="less" scoped>
// .ivu- {
//   height: 1024px;
// }
</style>
<script>
// import SiderMenu from "@/views/main/siderMenu";
import houseCompare from "./components/houseCompare";
export default {
  data() {
    return {
      show: true
    };
  },
  // components: {
  //   SiderMenu
  // },
  mounted() {
    var roleid = JSON.parse(sessionStorage.getItem("roleId"));
    if (roleid === "R0001" || roleid === "R0002") {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  methods: {
    openCompare() {
      this.$root.Bus.$emit("eventCompare");
    }
  },
  components: {
    houseCompare
  }
};
</script>


