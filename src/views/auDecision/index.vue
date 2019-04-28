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
            <MenuItem name="6-1">
              <span style="font-size: 13px">用户手册</span>
            </MenuItem>
          </router-link>
          <router-link to="/auDecision/livablemodel">
            <MenuItem name="6-2">
              <span style="font-size: 13px">宜居模型</span>
            </MenuItem>
          </router-link>
          <router-link to="/auDecision/model">
            <MenuItem name="6-3">
              <span style="font-size: 13px">引力模型</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <Submenu name="1">
          <template slot="title">
            <Icon type="md-analytics" /> 数据展示
          </template>
          <router-link to="/data">
            <MenuItem name="1-1">
              <span style="font-size: 13px">数据统计</span>
            </MenuItem>
          </router-link>
          <router-link to="/data/dataDeatils">
            <MenuItem name="1-2">
              <span style="font-size: 13px">数据查询</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/recommendation/housingPreference">
          <MenuItem name="2-1">
            <Icon type="md-thumbs-up" />
            <span>房源推荐</span>
          </MenuItem>
        </router-link>
        <router-link to="/recommendation/factor">
          <MenuItem name="2-2">
            <Icon type="md-pin" />
            <span>购房选址</span>
          </MenuItem>
        </router-link>
        <router-link to="/infoSearch">
          <MenuItem name="4-1">
          <Icon type="md-search" />
          <span>信息查询</span>
          </MenuItem>
        </router-link>
        <router-link to="/userManager">
          <MenuItem name="4-2" v-if="show">
          <Icon type="md-contacts" />
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


        