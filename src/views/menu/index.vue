<template>
  <div class="home">
    <div class="home-body">
      <Menu v-if="IsMenu"></Menu>
      <Content>
        <router-view/>
      </Content>
    </div>
    <div class="home-body1">
      <Menu1 v-if="IsMenu1"></Menu1>
      <Content>
        <router-view/>
      </Content>
    </div>
  </div>

</template>
<script>
import Menu from "./components";
import Menu1 from "./components/userIndex";
export default {
  data() {
    return {
      IsMenu: false,
      IsMenu1: true
    };
  },
  components: {
    Menu,
    Menu1
  }
  // mounted() {
  //   this.IsMenu = true;
  // }
};
</script>

<style lang="less" scoped>
.home {
  height: 650px;
  background: url("../../assets/img/logo/home_bg.png");
  // margin-top: 55px;
}
</style>
