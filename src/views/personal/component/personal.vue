<template>
  <Layout>
    <Content>

      <div style="text-align:center;margin:auto;width:1000px;height:715px;border:1px solid rgb(220, 222, 226);background: #fff; ">
        <Alert show-icon style="width:660px;height:90px;margin-left:175px;margin-top:20px">
          用户提示
          <Icon type="ios-bulb-outline" slot="icon"></Icon>
          <template slot="desc">在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型。</template>
        </Alert>
        <div style="text-align:center;margin:auto;width:600px;height:515px;">
          <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" style="margin-top:30px">
            <FormItem label="年龄" prop="age" style="margin-bottom:30px">
              <Select v-model="ageModel" style="width:500px">
                <Option v-for="item in age" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="购房预备资金" prop="capital" style="margin-bottom:30px">
              <Select v-model="capitalModel" style="width:500px">
                <Option v-for="item in capital" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="学历" prop="education" style="margin-bottom:30px">
              <Select v-model="educationModel" style="width:500px">
                <Option v-for="item in education" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem label="工作类型" prop="type" style="margin-bottom:30px">
              <Input v-model="formValidate.type" placeholder="请输入工作类型"></Input>
            </FormItem>
            <FormItem label="工作地址" prop="address" style="margin-bottom:30px">
              <Input v-model="formValidate.address" placeholder="请输入工作地址"></Input>
            </FormItem>
            <FormItem label="婚姻情况" prop="Marriage">
              <RadioGroup style="float:left" v-model="formValidate.Marriage">
                <Radio label="true">已婚</Radio>
                <Radio label="false">未婚</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="是否有房" prop="house">
              <RadioGroup style="float:left" v-model="formValidate.house">
                <Radio label="true">有房</Radio>
                <Radio label="false">无房</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="类型" prop="house">
              <RadioGroup style="float:left" v-model="formValidate.type">
                <Radio label="投资">投资型</Radio>
                <Radio label="教育">教育型</Radio>
                <Radio label="养老">养老型</Radio>
                <Radio label="生活">生活型</Radio>
                <Radio label="医疗">医疗型</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem label="用户类型" prop="house">
              <RadioGroup style="float:left" v-model="formValidate.userType">
                <Radio label="普通用户" disabled>普通用户</Radio>
                <Radio label="管理员" disabled>管理员</Radio>
                <Radio label="超级管理员" disabled>超级管理员</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem style="margin-left:305px;width:300px">
              <Button type="primary" @click="preserve()">确认保存</Button>
              <Button @click="value1 = true" style="margin-left:8px">了解购房类型</Button>
            </FormItem>
          </Form>
          <Drawer title="了解购房种类" :closable="false" v-model="value1" width="30%">
            <div class="img">
              <img src="../../../assets/img/house.jpeg" alt="">
            </div>
            <Tag style="height:70px" checkable color="primary">(1) 过度购房，以过渡作为购房目的的主要是年轻人， 包括为了结婚、落户等。这类需求只是为了解决阶段性的住房问题。 此类购房需求价格通常是最为重要的考虑因素，其次是交通。
            </Tag>
            <Tag style="height:70px" checkable color="success">(2)改善型购房,此类购房者都是拥有一定的经济基础， 为了改善生活水平，提高生活质量而选择换房。 此时，价格已经不是最为重要的考虑因素，居住体验才是最为重要的。
            </Tag>
            <Tag style="height:70px" checkable color="error">(3)以孩子上学为目的的购房,此类需求通常应优先考虑楼盘所在区位的教育资源问题， 比如是否有知名的中小学校，甚至是幼儿园。
            </Tag>
            <Tag style="height:70px" checkable color="warning">(4)投资性购房,投资购房分两类，一类是通过持有后转让获利，另一种是持有通过出租获利。</Tag>
          </Drawer>
        </div>

      </div>
    </Content>
  </Layout>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  data() {
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
      type: "",
      address: "",
      Marriage: "",
      house: "",
      value1: false,

      formValidate: {
        age: "",
        capital: "",
        education: "",
        type: "",
        address: "",
        Marriage: "",
        userType: "",
        house: ""
      },
      ruleValidate: {
        age: [{ required: true, message: "此项不能为空", trigger: "blur" }],
        capital: [{ required: true, message: "此项不能为空", trigger: "blur" }],
        type: [{ required: true, message: "此项不能为空", trigger: "blur" }],
        address: [{ required: true, message: "此项不能为空", trigger: "blur" }],
        Marriage: [
          { required: true, message: "请选择婚姻情况", trigger: "blur" }
        ],
        house: [{ required: true, message: "请选择", trigger: "blur" }]
      }
    };
  },
  mounted() {
    var _this = this;
    _this.user = JSON.parse(sessionStorage.getItem("userAccount"));
    Server.get({
      url: services.getInfo,
      params: {
        username: _this.user
      }
    }).then(rsp => {
      if (rsp.status === 1) {
        _this.formValidate.age = rsp.age;
        _this.formValidate.capital = rsp.buyHouseMoney;
        _this.formValidate.type = rsp.workType;
        _this.formValidate.address = rsp.workPlace;
        _this.formValidate.Marriage = rsp.isGetMarry;
        _this.formValidate.house = rsp.isHouse;
        _this.formValidate.userType = rsp.userType;
      } else {
        console.log(rsp.message);
      }
    });
  },
  methods: {
    preserve() {
      debugger;
      var _this = this;
      let username = JSON.parse(sessionStorage.getItem("userAccount"));
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.post({
        url: services.preserve,
        params: {
          age: this.ageModel,
          money: this.capitalModel,
          educationLevel: this.educationModel,
          userId: userId
        }
      }).then(rsp => {
        if (rsp.data.status === 1) {
          debugger;
          this.$Message.success("更新成功");
        } else {
          this.$Message.error(rsp.message);
        }
      });
    }
  }
};
</script>
<style lang="less">
.ivu-alert-desc {
  font-size: 16px;
  color: #515a6e;
  line-height: 21px;
  display: none;
  text-align: justify;
  margin-left: 50px;
}
.ivu-alert-with-desc .ivu-alert-message {
  font-size: 14px;
  color: #17233d;
  display: block;
  font-weight: bold;
}
.ivu-alert-with-desc.ivu-alert-with-icon {
  padding: 16px 16px 16px 20px;
}
.ivu-layout {
  height: 1024px;
}
p {
  font-size: 1.5em;
  margin-top: 15px;
}
.img {
  height: 400px;
}
img {
  width: 100%;
  height: 100%;
}
</style>