
<template>
  <div class="menu">
 fdsfdag

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

