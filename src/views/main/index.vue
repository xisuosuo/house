<template>
  <div class="layout">
    <Layout>
      <Header class='header'>
        <Row type="flex" justify="start" class="code-row-bg">
          <Col span="1">
          <div style="margin-left: 22px">
            <img src="../../assets/img/logo.png" style="height: 30px;width:30px;margin-top: 10px" alt="logo">
          </div>
          </Col>
          <Col span="17">
          <span style='margin-left: 10px; font-size: 24px;color: white;font-family: sans-serif;'>城市商品住宅选择推荐系统</span>
          <span class="sub-title">
            <span>({{this.name}})</span>
          </span>
          <span class="toggle">
            <Icon type="ios-arrow-down"></Icon>
            <div class="ivu-poptip-arrow"></div>
            <div class="poupTitle">
              <div style="color:#2b85e4">

                <div>
                  <span class="city">华北东北</span>
                  <span class="cityname" v-for="(value,index) in citylist1" :key="index" @click="selectTimer(index,value)">{{ value }}
                  </span>
                </div>
                <div>
                  <span class="city">华东地区</span>
                  <span class="cityname" v-for="(value,index) in citylist2" :key="index" @click="selectTimer(index,value)">{{ value }}
                  </span>
                </div>
                <div>
                  <span class="city">华南地区</span>
                  <span class="cityname" v-for="(value,index) in citylist3" :key="index" @click="selectTimer(index,value)">{{ value }}
                  </span>
                </div>
                <div>
                  <span class="city">中 西 部</span>
                  <span class="cityname" v-for="(value,index) in citylist4" :key="index" @click="selectTimer(index,value)">{{ value }}
                  </span>
                </div>

              </div>
            </div>
          </span>
          </Col>
          <Col span="6">
          <div class="user-tools">
            <Dropdown :transfer="false" placement="bottom-end" @on-click="onUserItemClick">
              <div class="user-info">
                <icon type="ios-contact" :size="25" />
                <span>欢迎您，{{this.user}}</span>
              </div>
              <DropdownMenu slot="list">
                <div @click="getInfo()">
                  <DropdownItem divided>
                    <icon type="ios-person-outline" :size="16" />
                    <span> 个人中心</span>
                  </DropdownItem>
                </div>
                <div @click="collection()">
                  <DropdownItem divided>
                    <icon type="ios-cart-outline" :size="16" />
                    <span> 我的收藏</span>
                  </DropdownItem>
                </div>
                <DropdownItem name="changePsd" divided>
                  <icon type="ios-lock-outline" :size="16" />
                  <span> 修改密码</span>
                </DropdownItem>
                <DropdownItem name="exit" divided>
                  <icon type="ios-exit-outline" :size="16" />
                  <span> 退出系统</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Modal v-model="modal" title="修改密码" width="400">
            <change-psd ref="changepsd" @on-modal-close="modal=false" v-if="modal"></change-psd>
            <div class="modal-footer" slot="footer" v-if="modal">
              <Button type="text" @click="onCancel">取消</Button>
              <Button type="primary" @click="onSubmit">确定</Button>
            </div>
          </Modal>
          </Col>
        </Row>
      </Header>
      <Content :style="{minHeight: 'w_height-55', margin: '55px 0px 0px 0px', background: '#fff'}">
        <router-view />
      </Content>
    </Layout>
  </div>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";

import { login } from "@/views/login/js/login.js";
import ChangePsd from "@/views/login/components/changepsd";
import { computeh } from "@/core/computeh";
export default {
  mixins: [login, computeh],
  provide() {
    return {
      reload: this.reload
    };
  },

  data() {
    return {
      citylist1: [
        "北京",
        "天津",
        "大连",
        "石家庄",
        "哈尔滨",
        "沈阳",
        "太原",
        "长春",
        "威海",
        "潍坊",
        "包头",
        "秦皇岛",
        "烟台",
        "保定"
      ],
      citylist2: [
        "上海",
        "杭州",
        "苏州",
        "南京",
        "无锡",
        "济南",
        "青岛",
        "昆山",
        "宁波",
        "南昌",
        "福州",
        "合肥",
        "徐州",
        "淄博",
        "南通",
        "常州",
        "湖州",
        "滁州"
      ],
      citylist3: [
        "深圳",
        "广州",
        "佛山",
        "长沙",
        "三亚",
        "惠州",
        "东莞",
        "海口",
        "珠海",
        "中山",
        "厦门",
        "南宁",
        "泉州",
        "柳州"
      ],
      citylist4: [
        "成都",
        "重庆",
        "武汉",
        "郑州",
        "西安",
        "昆明",
        "贵阳",
        "兰州",
        "洛阳"
      ],

      name: "滁州",
      nav: false,
      nav1: false,
      user: "",
      modal: false,
      isRouterAlive: true,
      roleid: ""
    };
  },
  mounted() {
    debugger;
    this.user = JSON.parse(sessionStorage.getItem("userAccount"));
    this.roleid = JSON.parse(sessionStorage.getItem("roleId"));

    console.log(this.user);
  },
  methods: {
    selectTimer(index, value) {
      this.name = value;
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    collection() {
      this.$router.push("/collection");
    },
    getPath() {
      this.name = this.$route.name;
    },
    getInfo() {
      var _this = this;
      _this.$router.push("/personalcenter");
    },
    onSubmit() {
      this.$refs.changepsd.onSubmit();
    },
    onUserItemClick(name) {
      switch (name) {
        case "changePsd":
          this.modal = true;
          break;
        case "exit":
          this.exit();
          break;
      }
    },
    onCancel() {
      this.modal = false;
    },
    exit() {
      this.$Modal.confirm({
        title: "系统注销",
        content: "您确定注销系统吗？",
        onOk: () => {
          sessionStorage.clear();
          this.$router.push({
            path: "/login"
          });
        }
      });
    }
  },
  watch: {
    $route: "getPath"
  },
  components: {
    ChangePsd
  }
};
</script>


<style lang="less" scoped>
.body {
  height: 100%;
  width: 100%;
}
.header {
  background: #2d8cf0;
  height: 55px;
  padding: 0px;
  line-height: 50px;
}
.user-info {
  cursor: pointer;
  * {
    vertical-align: middle;
  }
  &:hover {
    background: #79a2fe;
  }
  span {
    margin-left: 8px;
    font-size: 14px;
  }
}
.toggle {
  font-size: 18px;
  color: white;
  margin-left: 10px;
  display: inline-block;
  cursor: pointer;
}
.user-tools {
  float: right;
  font-size: 14px;
  color: white;
  margin-right: 10px;
}
.toggle:hover .poupTitle {
  display: block;
}

.sub-title {
  margin-left: 10px;
  font-size: 18px;
  color: white;
  .icon-chevron-down {
    padding: 20px;
  }
}
.sub-title .icon-chevron-down:hover {
  cursor: pointer;
}

.poupTitle:hover {
  display: block;
}

.demo-badge {
  float: right;
  width: 22px;
  height: 22px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
.poupTitle {
  color: white;
  font-size: 13px;
  position: absolute;
  top: 55px;
  left: 330px;
  display: none;
  will-change: top, left;
  width: 380px;
  background-color: #f8f8f9;
  z-index: 8;
  padding: 0px 10px 0px 10px;
}

.city {
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;
}
.cityname{
  color:black;
  font-size: 13px;
}
</style>
