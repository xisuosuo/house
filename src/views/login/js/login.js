/* eslint-disable */
import Server from "@/core/server";
import {
  services
} from "@/core/config/services";
export const login = {
  data() {
    return {
      accountName: "",
      user: {
        userAccount: "superAdmin",
        userPwd: "superAdmin",
        remember: false
      },
      rules: {
        userAccount: [{
          required: true,
          message: "用户名不能为空",
          trigger: "blur"
        }],
        userPwd: [{
          required: true,
          message: "密码不能为空",
          trigger: "blur"
        }]
      },
      loading: false
    };
  },
  created() {
    let remember =
      localStorage.getItem("login-remember") || null;
    if (remember !== null) {
      this.user.remember = true;
      var rememberInfo = onemap.utils.base64.decode(remember);
      var userJson = JSON.parse(rememberInfo);
      this.user.userAccount = userJson.user;
      this.user.userPwd = userJson.psd;
    }
  },

  methods: {
    // onCheckLogin() {
    //     this.$refs["user"].validate(valid => {
    //         if (valid) {
    //             this.checkLogin();
    //         }
    //     });
    // },
    checkLogin() {
      this.loading = true;
      Server.post({
        url: services.login,
        params: {
          username: this.user.userAccount,
          password: this.user.userPwd
        }
      }).then(rsp => {
        if (rsp.data.status === 1) {
          this.accountName = rsp.accountName
          var jsonStr = JSON.stringify({
            user: this.user.userAccount,
            psd: this.user.userPwd,
          });
          if (this.user.remember === true) {
            localStorage.setItem(
              "login-remember",
              onemap.utils.base64.encode(jsonStr)
            );
          } else {
            localStorage.removeItem("login-remember");
          }
          sessionStorage.setItem(
            "login-info", onemap.utils.base64.encode(jsonStr)
          );
          this.$Message.success("登录成功");
          sessionStorage.setItem("userInfo", JSON.stringify(this.accountName));
          sessionStorage.setItem("userAccount", JSON.stringify(this.user.userAccount));
          this.$router.push({
            path: `/menu`
          });
        } else {
          this.$Message.error(rsp.message);
        }
      });
    }
  }
};