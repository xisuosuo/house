<template>
    <Layout >
        <Content>
            
           <div style="text-align:center;margin:auto;width:1000px;height:715px;border:1px solid rgb(220, 222, 226);background: #fff;margin-top: 55px">
                    <Alert show-icon style="width:660px;height:90px;margin-left:175px;margin-top:20px">
                        用户提示
                        <Icon type="ios-bulb-outline" slot="icon"></Icon>
                        <template slot="desc">在使用房源推荐功能之前，需完善用户个人信息，以此确定您的购房类型。</template>
                    </Alert>
                <div style="text-align:center;margin:auto;width:600px;height:515px;">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100" style="margin-top:30px">
                        <FormItem label="年龄" prop="age" style="margin-bottom:30px">
                            <Input v-model="formValidate.age" placeholder="请输入年龄"></Input>
                        </FormItem>
                        <FormItem label="购房预备资金" prop="capital" style="margin-bottom:30px">
                          <Input v-model="formValidate.capital" placeholder="请输入购房预备资金"></Input>
                        </FormItem>
                        <FormItem label="工作类型" prop="type" style="margin-bottom:30px">
                            <Input v-model="formValidate.type" placeholder="请输入工作类型"></Input>
                        </FormItem>
                        <FormItem label="工作地址" prop="address" style="margin-bottom:30px">
                            <Input v-model="formValidate.address" placeholder="请输入工作地址"></Input>
                        </FormItem>
                        <FormItem label="婚姻情况" prop="Marriage">
                            <RadioGroup style="float:left" v-model="formValidate.Marriage">
                                <Radio label="married">已婚</Radio>
                                <Radio label="unmarried">未婚</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="是否有房" prop="house">
                            <RadioGroup style="float:left" v-model="formValidate.house">
                                <Radio label="yes">有房</Radio>
                                <Radio label="no">无房</Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="是否有房" prop="house">
                            <RadioGroup style="float:left" v-model="formValidate.type">
                                <Radio label="投资">投资型</Radio>
                                <Radio label="教育">教育型</Radio>
                                <Radio label="养老">养老型</Radio>
                                <Radio label="生活">生活型</Radio>
                                <Radio label="医疗">医疗型</Radio>
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
                        <Tag style="height:70px" checkable color="primary">(1) 过度购房，以过渡作为购房目的的主要是年轻人，
                            包括为了结婚、落户等。这类需求只是为了解决阶段性的住房问题。
                            此类购房需求价格通常是最为重要的考虑因素，其次是交通。</Tag>
                        <Tag style="height:70px" checkable color="success">(2)改善型购房,此类购房者都是拥有一定的经济基础，
                            为了改善生活水平，提高生活质量而选择换房。
                            此时，价格已经不是最为重要的考虑因素，居住体验才是最为重要的。</Tag>
                        <Tag style="height:70px" checkable color="error">(3)以孩子上学为目的的购房,此类需求通常应优先考虑楼盘所在区位的教育资源问题，
                            比如是否有知名的中小学校，甚至是幼儿园。</Tag>
                        <Tag style="height:70px" checkable color="warning">(4)投资性购房,投资购房分两类，一类是通过持有后转让获利，另一种是持有通过出租获利。</Tag>
                    </Drawer>
              </div>

            </div>
        </Content>
    </Layout >
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  data() {
    return {
      age: "",
      capital: "",
      type: "",
      address: "",
      Marriage: "",
      house: "",
      value1: false,

      formValidate: {
        age: "",
        capital: "",
        type: "",
        address: "",
        Marriage: "",
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
      },
      formItem: {
        age: ""
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
           _this.formValidate.age=rsp.age;
           _this.formValidate.capital=rsp.buyHouseMoney;
           _this.formValidate.type=rsp.workType;
           _this.formValidate.address=rsp.workPlace;
           _this.formValidate.Marriage=rsp.isGetMarry;
           _this.formValidate.house=rsp.isHouse
        }
        else {
          console.log(rsp.message);
        }
      })          
  },
  methods: {
    preserve() {
      var _this = this;
      let username = JSON.parse(sessionStorage.getItem("userAccount"));
    
      Server.post({
        url: services.preserve,
        params: {
          age: _this.formValidate.age,
          buyHouseMoney: _this.formValidate.capital,
          workType: _this.formValidate.type,
          workPlace: _this.formValidate.address,
          isGetMarry: _this.formValidate.Marriage,
          isHouse: _this.formValidate.house,
          username: username
        }
      }).then(rsp => {
        if (rsp.status === 1) {
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