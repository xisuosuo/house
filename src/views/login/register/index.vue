
<!--账号登录  -->

<template>
  <div>
    <div class="register " style="cursor:pointer">
      <span @click="onCheck">注册账号?</span>
    </div>
    <modal v-model="checkModal" :mask-closable="false" title="用户注册">
      <Row>
        <i-form ref="form" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <form-item label="用户名" prop="userName">
            <i-input v-model="formValidate.userName" placeholder="输入用户账户" />
          </form-item>
          <form-item label="昵称" prop="accountName">
            <i-input v-model="formValidate.accountName" placeholder="输入用户昵称" />
          </form-item>
          <form-item label="密码" prop="password">
            <i-input type="password" v-model="formValidate.password" placeholder="输入至少6位数密码" />
          </form-item>
          <form-item label="确认密码" prop="pwdCheck">
            <i-input type="password" v-model="formValidate.pwdCheck" placeholder="输入至少6位数密码" />
          </form-item>
          <FormItem label="年龄" prop="age">
            <Select v-model="ageModel">
              <Option v-for="item in age" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="购房资金" prop="capital">
            <Select v-model="capitalModel">
              <Option v-for="item in capital" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
          <FormItem label="学历" prop="education">
            <Select v-model="educationModel">
              <Option v-for="item in education" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </FormItem>
        </i-form>
      </Row>
      <model-footer slot="footer" saveText="提交" @on-cancel="onCancelUser" @on-save="onsaveUser" />
    </modal>
  </div>
</template>
<script>
import ModelFooter from "@/components/common/modal-footer";
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  data() {
    const validateAccount = (rule, value, callback) => {
      var reg = /^[A-Za-z0-9]{1,30}$/;
      if (!reg.test(value)) {
        callback(new Error("请输入字母或数字组成的账户"));
      }
    };
    const pwdValidate = (rule, value, callback) => {
      this.$refs.form.validateField("pwdCheck");
      callback();
    };
    const pwdCheckValidate = (rule, value, callback) => {
      if (this.formValidate.password != "" && value == "") {
        callback(new Error("确认密码不能为空"));
      } else if (this.formValidate.password != value) {
        callback(new Error("新密码和确认密码应相同"));
      } else {
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      var reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
      if (!reg.test(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      ageModel: "",
      capitalModel: "",
      educationModel: "",
      age: [
        {
          value: "1",
          label: "25岁以下"
        },
        {
          value: "2",
          label: "26-30岁"
        },
        {
          value: "3",
          label: "31-35岁"
        },
        {
          value: "4",
          label: "36-40岁"
        },
        {
          value: "5",
          label: "41-45岁"
        },
        {
          value: "6",
          label: "46-50岁"
        },
        {
          value: "7",
          label: "51-55岁"
        },
        {
          value: "8",
          label: "51-55岁"
        },
        {
          value: "9",
          label: "60岁以上"
        }
      ],
      capital: [
        {
          value: "1",
          label: "1w以下"
        },
        {
          value: "2",
          label: "1w-3w"
        },
        {
          value: "3",
          label: "3w-5w"
        },
        {
          value: "4",
          label: "5w-10w"
        },
        {
          value: "5",
          label: "10w-20w"
        },
        {
          value: "6",
          label: "20w-50w"
        },
        {
          value: "7",
          label: "80w-150w"
        },
        {
          value: "8",
          label: "80w-150w"
        },
        {
          value: "9",
          label: "150w以上"
        }
      ],
      education: [
        {
          value: "1",
          label: "小学及以下"
        },
        {
          value: "2",
          label: "初中"
        },
        {
          value: "3",
          label: "高中"
        },
        {
          value: "4",
          label: "中专"
        },
        {
          value: "5",
          label: "大专"
        },
        {
          value: "6",
          label: "本科"
        },
        {
          value: "7",
          label: "硕士"
        },
        {
          value: "8",
          label: "博士"
        },
        {
          value: "9",
          label: "博士以上"
        }
      ],
      checkModal: false,
      formValidate: {
        userName: "",
        password: "",
        pwdCheck: "",
        accountName: "",
        userMobile: ""
      },
      ruleValidate: {
        userName: [
          {
            validator: validateAccount,
            required: true,
            trigger: "blur"
          }
        ],
        accountName: [
          {
            message: "昵称不能为空",
            required: true,
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            validator: pwdValidate,
            trigger: "blur"
          },
          {
            min: 6,
            message: "密码不能少于6位数",
            trigger: "blur"
          }
        ],
        pwdCheck: [
          {
            required: true,
            validator: pwdCheckValidate,
            trigger: "blur"
          },
          {
            min: 6,
            message: "密码不能少于6位数",
            trigger: "blur"
          }
        ],
        userMobile: [
          {
            validator: validatePhone,
            required: true,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onCheck() {
      this.checkModal = true;
    },
    onsaveUser() {
      debugger;
      const title = "注册提示";
      const content = "信息提交成功，等待管理员审核";
      Server.post({
        url: services.register,
        params: {
          userName: this.formValidate.userName,
          password: this.formValidate.password,
          userNickName: this.formValidate.accountName,
          age: this.ageModel,
          money: this.capitalModel,
          userEducationLevel: this.educationModel,
          userMobile: "",
          eMail: ""
        }
      }).then(rsp => {
        if (rsp.data.status === 1) {
          this.checkModal = false;
          this.$Modal.success({
            title: title,
            content: content
          });
          this.$refs.form.resetFields();
        } else {
          this.$Message.error(rsp.message);
        }
      });
    },
    onCancelUser() {
      this.checkModal = false;
      this.$refs.form.resetFields();
    }
  },
  components: {
    ModelFooter
  }
};
</script>
<style  lang="less" scoped>
.register {
  float: right;
  padding-top: 5px;
  padding-right: 5px;
  &register:hover {
    color: black;
  }
}
.red {
  color: red;
}
.text {
  height: 10px;
  margin-top: -17px;
}
.red1 {
  color: red;
  height: 8px;
}
</style>
