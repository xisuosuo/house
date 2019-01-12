<template>
  <div class="home">
    <div class="home-body">
      <Menu v-if="IsMenu"></Menu>
      <Content>
        <router-view/>
      </Content>
    </div>
  </div>

</template>
<script>
import Menu from "./components";
export default {
  data() {
    return {
      IsMenu: true
    };
  },
  components: {
    Menu
  }
  // mounted() {
  //   this.IsMenu = true;
  // }
};
</script>

<style lang="less" scoped>
.home {
  height: 1980px;
  background: url("../../assets/img/logo/home_bg.png");
  margin-top: 55px;
}
</style>
