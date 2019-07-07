<template>
  <Form :model="form" ref="formValidate" :rules="ruleValidate" :label-width="80">
    <Row>
      <Col span="11">
      <FormItem label="账号:" prop="username">
        <Input v-model="form.username" size="large" />
      </FormItem>
      </Col>
      <Col span="11" offset="2">
      <FormItem label="昵称:" prop="userNickName ">
        <Input v-model="form.userNickName " size="large" />
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <FormItem label="密码:" prop="password ">
        <Input v-model="form.password" size="large" />
      </FormItem>
      </Col>
      <Col span="11" offset="2">
      <FormItem label="年龄:">
        <Select v-model="form.userAge">
          <Option v-for="item in age" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <FormItem label="文化程度:">
        <Select v-model="form.userEducationLevel">
          <Option v-for="item in educationModel" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      </Col>
      <Col span="11" offset="2">
      <FormItem label="手机:">
        <Input v-model="form.mobile" size="large" />
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <FormItem label="家庭收入:">
        <Select v-model="form.money">
          <Option v-for="item in capital" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
      </Col>
    </Row>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        userId: "",
        userNickName: "",
        username: "",
        password: "",
        mobile: "",
        email: "",
        roleId: "R0001",
        userAge: "",
        money: "",
        userStatus: "",
        userEducationLevel: ""
      },
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
      educationModel: [
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

      ruleValidate: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        userNickName: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    //重置表单
    resetForm() {
      this.form.userId = "";
      this.form.userNickName = "";
      this.form.username = "";
      this.form.password = "";
      this.form.userAge = "";
      this.form.mobile = "";
      this.form.email = "";
      this.form.money = "";
      this.form.workPlace = "";
      this.form.userEducationLevel = "";
      this.form.userStatus = "";
    },
    //编辑表单
    editForm(row) {
      debugger;
      this.form.userId = row.userId;
      this.form.userNickName = row.userNickName;
      this.form.username = row.username;
      this.form.password = row.password;
      this.form.mobile = row.mobile;
      this.form.userAge = row.userAge;
      this.form.email = row.email;
      this.form.roleId = row.roleId;
      this.form.money = row.money;
      this.form.userStatus = row.userStatus;
      this.form.userEducationLevel = row.userEducationLevel;
    },
    //初始化新增
    getForm() {
      debugger;
      return {
        userId: this.form.userId || "",
        userNickName: this.form.userNickName || "",
        username: this.form.username || "",
        password: this.form.password || "",
        mobile: this.form.mobile || "",
        email: this.form.email || "",
        roleId: this.form.roleId || "R0001",
        userAge: this.form.userAge || "",
        money: this.form.money || "",
        userStatus: this.form.userStatus || "",
        userEducationLevel: this.form.userEducationLevel || ""
      };
    }
  }
};
</script>