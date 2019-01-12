<template>
    <Form ref="userForm" :model="user" :label-width="85">
      <FormItem label="旧密码" prop="oldPsd" :rules="{ required: true, message: '请输入密码', trigger: 'blur' }">
        <Input type="password" v-model="user.oldPsd" placeholder="请输入旧密码..."/>
      </FormItem>
      <FormItem label="新密码" prop="newPsd" :rules="{ required: true, message: '请输入新密码', trigger: 'blur' }">
        <Input type="password" v-model="user.newPsd" placeholder="请输入新密码..."/>
      </FormItem>
      <FormItem label="重新输入" prop="aNewPsd" :rules="{ required: true, message: '请再次输入密码', trigger: 'blur' }">
        <Input type="password" v-model="user.aNewPsd" placeholder="请再次输入密码..."/>
      </FormItem>
    </Form>
</template>

<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  data() {
    return {
      userAccount: "",
      user: {
        oldPsd: "",
        newPsd: "",
        aNewPsd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.userAccount = JSON.parse(sessionStorage.getItem("userAccount"));
      let _self = this;
      if (this.user.newPsd === this.user.aNewPsd) {
        onemap.server
          .post({
            url: services.changePsd,
            params: {
              username: this.userAccount,
              oldpassword: this.user.oldPsd,
              newpassword: this.user.newPsd
            }
          })
          .then(rsp => {
            if (rsp.status === 1) {
              this.$Message.success("密码修改成功");
              this.$emit("on-modal-close");
              this.$router.push("/login");
            } else {
              Message.warning(rsp.message);
            }
          });
      } else {
        this.$Message.warning("两次输入密码不一致,请重新输入");
      }
    }
  }
};
</script>