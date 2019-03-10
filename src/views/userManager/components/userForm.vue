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
        <Input v-model="form.userAge" size="large" />
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <FormItem label="职务:">
        <Input v-model="form.age" size="large" />
      </FormItem>
      </Col>
      <Col span="11" offset="2">
      <FormItem label="文化程度:">
        <Input v-model="form.userEducationLevel " size="large" />
      </FormItem>
      </Col>
      <Col span="11">
      <FormItem label="手机:">
        <Input v-model="form.tel" size="large" />
      </FormItem>
      </Col>
      <!-- <Col span="11" offset="2">
      <FormItem label="角色等级:">
        <Input v-model="form.roleId " size="large" />
      </FormItem>
      </Col> -->
      <!-- <Col span="11" offset="2">
      <FormItem label="是否结婚:">
        <RadioGroup v-model="form.getMarry ">
          <Radio label="true">已婚</Radio>
          <Radio label="false">未婚</Radio>
        </RadioGroup>
      </FormItem>
      </Col> -->
    </Row>
    <Row>
      <Col span="11">
      <FormItem label="家庭收入:">
        <Input v-model="form.userMoney" size="large" />
      </FormItem>
      </Col>
    </Row>
    <!-- <Col span="11" offset="2">
    <FormItem label="是否有房:">
      <RadioGroup v-model="form.buyHouse ">
        <Radio label="true">有房</Radio>
        <Radio label="false">无房</Radio>
      </RadioGroup>
    </FormItem>
    </Col> -->

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
        tel: "",
        email: "",
        roleId: "R0001",
        userAge: "",
        userMoney: "",
        userStatus: "",
        userEducationLevel: ""
      },
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
      this.form.tel = "";
      this.form.email = "";
      this.form.userMoney = "";
      this.form.workPlace = "";
      this.form.userEducationLevel = "";
      this.form.userStatus = "";
    },
    //编辑表单
    editForm(row) {
      this.form.userId = row.userId;
      this.form.userNickName = row.userNickName;
      this.form.username = row.username;
      this.form.password = row.password;
      this.form.tel = row.tel;
      this.form.userAge = row.userAge;
      this.form.email = row.email;
      this.form.roleId = row.roleId;
      this.form.userMoney = row.userMoney;
      this.form.userStatus = row.userStatus;
      this.form.userEducationLevel = row.userEducationLevel;
    },
    //初始化新增
    getForm() {
      debugger
      return {
        userId: this.form.userId||"",
        userNickName: this.form.userNickName||"",
        username: this.form.username||"",
        password: this.form.password||"",
        tel: this.form.tel||"",
        email: this.form.email||"",
        roleId: this.form.roleId||"R0001",
        userAge: this.form.userAge||"",
        userMoney: this.form.userMoney||"",
        userStatus: this.form.userStatus||"",
        userEducationLevel: this.form.userEducationLevel||""
      };
    }
  }
};
</script>