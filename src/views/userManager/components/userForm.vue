<template>
  <Form :model="form" ref="formValidate" :rules="ruleValidate" :label-width="80">
    <Row>
      <Col span="11">
      <FormItem label="账号:" prop="accountName">
        <Input v-model="form.accountName" size="large" />
      </FormItem>
      </Col>
      <Col span="11" offset="2">
      <FormItem label="昵称:" prop="landName ">
        <Input v-model="form.landName " size="large" />
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <FormItem label="密码:" prop="password ">
        <Input v-model="form.password " size="large" />
      </FormItem>
      </Col>
      <Col span="11" offset="2">
      <FormItem label="年龄:">
        <Input v-model="form.age" size="large" />
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
      <FormItem label="单位:">
        <Input v-model="form.workType " size="large" />
      </FormItem>
      </Col>
      <Col span="11">
      <FormItem label="手机:">
        <Input v-model="form.workPlace " size="large" />
      </FormItem>
      </Col>
      <Col span="11" offset="2">
      <FormItem label="是否结婚:">
        <RadioGroup v-model="form.getMarry ">
          <Radio label="true">已婚</Radio>
          <Radio label="false">未婚</Radio>
        </RadioGroup>
      </FormItem>
      </Col>
    </Row>
    <Row>
      <Col span="11">
      <FormItem label="买房资金:">
        <Input v-model="form.buyHouseMoney " size="large" />
      </FormItem>
      </Col>
      <Col span="11">
      <FormItem label="是否有房:" offset="2">
        <RadioGroup v-model="form.buyHouse ">
          <Radio label="true">已婚</Radio>
          <Radio label="false">未婚</Radio>
        </RadioGroup>
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
        accountName: "",
        landName: "",
        password: "",
        userMobile: "",
        age: "",
        buyHouseMoney: "",
        workType: "",
        workPlace: "",
        buyHouse: "",
        getMarry: ""
      },
      ruleValidate: {
        accountName: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        landName: [
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
      this.form.accountName = "";
      this.form.landName = "";
      this.form.password = "";
      this.form.age = "";
      this.form.userMobile = "";
      this.form.buyHouseMoney = "";
      this.form.workType = "";
      this.form.workPlace = "";
      this.form.buyHouse = false;
      this.form.getMarry = false;
    },
    //编辑表单
    editForm(row) {
      this.form.userId = row.userId;
      this.form.accountName = row.accountName;
      this.form.landName = row.landName;
      this.form.password = row.password;
      this.form.userMobile = row.userMobile;
      this.form.age = row.age;
      this.form.buyHouseMoney = row.buyHouseMoney;
      this.form.workPlace = row.workPlace;
      this.form.workType = row.workType;
      this.form.buyHouse = row.buyHouse;
      this.form.getMarry = row.getMarry;
    },
    //初始化新增
    getForm() {
      return {
        userId: this.form.userId,
        accountName: this.form.accountName,
        landName: this.form.landName,
        password: this.form.password,
        userMobile: this.form.userMobile,
        age: this.form.age,
        buyHouseMoney: this.form.buyHouseMoney,
        workType: this.form.workType,
        workPlace: this.form.workPlace,
        buyHouse: this.form.buyHouse,
        getMarry: this.form.getMarry
      };
    }
  }
};
</script>