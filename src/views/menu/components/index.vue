<template>
  <div class="menu">
    <router-link to="/data">
      <div class="item-view">
        <div class="item bg0">
          <div class="icon-wrap">
            <i class="icon-chart"></i>
          </div>
          <div class="label">
            <span>数据展示</span>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="/infoSearch">
      <div class="item-view">
        <div class="item bg1">
          <div class="icon-wrap">
            <i class="icon-cgzs"></i>
          </div>
          <div class="label">
            <span>空间查询</span>
          </div>
        </div>
      </div>
    </router-link>

    <router-link to="/locationResources">
      <div class="item-view">
        <div class="item bg2">
          <div class="icon-wrap">
            <i class="icon-ltbz"></i>
          </div>
          <div class="label">
            <span>区位资源</span>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="/recommendation/factor">
      <div class="item-view">
        <div class="item bg3">
          <div class="icon-wrap">
            <i class="icon-fzjc"></i>
          </div>
          <div class="label">
            <span>购房选址</span>
          </div>
        </div>
      </div>
    </router-link>
    <router-link to="/recommendation/housingPreference">
    <div class="item-view">
      <div class="item bg4">
        <div class="icon-wrap">
        <i class="icon-ssjc"></i>
      </div>
        <div class="label">
          <span>房源推荐</span>
        </div>
      </div>
    </div>
    </router-link>
    <router-link to="/priceAnalysis">
      <div class="item-view">
        <div class="item bg5">
          <div class="icon-wrap">
            <i class="icon-task"></i>
          </div>
          <div class="label">
            <span>房价分析</span>
          </div>
        </div>
      </div>
      <router-link to="/GWR">
        <div class="item-view">
          <div class="item bg8">
            <div class="icon-wrap">
              <i class="icon-gpxfx"></i>
            </div>
            <div class="label">
              <span>房价预测</span>
            </div>
          </div>
        </div>
      </router-link>
    </router-link>
    <div @click="jump1()" class="item-view">
      <div class="item bg6">
        <div class="icon-wrap">
          <i class="icon-pgkh"></i>
        </div>
        <div class="label">
          <span>用户管理</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  data() {
    return {
      name: "personal",
      user: ""
    };
  },
  methods: {
    tips() {
      this.$Message.info({
        content: "需完善个人信息，才可使用房源推荐功能",
        duration: 2
      });
    },
    jump() {
      this.$router.push("/recommendation");
    },
    jump1() {
      var _this = this;
      _this.user = JSON.parse(sessionStorage.getItem("userAccount"));
      if (_this.user === "superAdmin") {
        this.$router.push("/userManager");
      } else if (_this.user === "admin") {
        this.$router.push("/userManager");
      } else {
        this.$Message.warning("用户不是管理员，没有权限使用该功能");
      }
    },
  }
};
</script>

