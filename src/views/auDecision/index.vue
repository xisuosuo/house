<template>
  <Layout>
    <Sider ref="side1" :width='180'>
      <Menu active-name="" theme="dark" width="auto" :open-names="['']">
        <router-link to="/menu">
          <MenuItem name="8-1">
          <Icon type="ios-navigate"></Icon>
          <span>首页</span>
          </MenuItem>
        </router-link>
        <Submenu name="6">
          <template slot="title">
            <Icon type="md-paper" /> 用户手册
          </template>
          <router-link to="/auDecision/usersManual">
            <MenuItem name="6-1">用户手册</MenuItem>
          </router-link>
          <router-link to="/auDecision/livablemodel">
            <MenuItem name="6-2">宜居模型</MenuItem>
          </router-link>
          <router-link to="/auDecision/model">
            <MenuItem name="6-3">引力模型</MenuItem>
          </router-link>
        </Submenu>
        <Submenu name="1">
          <template slot="title">
            <Icon type="md-analytics" /> 数据展示
          </template>
          <router-link to="/data">
            <MenuItem name="1-1">数据统计</MenuItem>
          </router-link>
          <router-link to="/data/dataDeatils">
            <MenuItem name="1-2">数据查询</MenuItem>
          </router-link>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>
            房源推荐
          </template>
          <router-link to="/recommendation/housingPreference">
            <MenuItem name="2-1">住房推荐</MenuItem>
          </router-link>
          <router-link to="/recommendation/factor">
            <MenuItem name="2-2">住房选择</MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/infoSearch">
          <MenuItem name="4-1">
          <Icon type="md-search" />
          <span>信息查询</span>
          </MenuItem>
        </router-link>
        <router-link to="/userManager">
          <MenuItem name="4-1" v-if="show">
          <Icon type="md-contact" />
          <span>用户管理</span>
          </MenuItem>
        </router-link>
        <router-link to="/personalcenter">
          <MenuItem name="5-1">
          <Icon type="md-person" />
          <span>个人中心</span>
          </MenuItem>
        </router-link>

      </Menu>
    </Sider>
    <Content>
      <houseCompare></houseCompare>
      <router-view/>
    </Content>
  </Layout>
</template>
<style lang="less" scoped>
// .ivu-layout {
//   height: 1024px;
// }
</style>
<script>
import houseCompare from "./components/houseCompare";
export default {
  data() {
    return {
      show: true
    };
  },
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


        