<template>
  <div class="layout">
    <Layout>
      <Header class='header'>
        <Row type="flex" justify="start" class="code-row-bg">
          <Col span="1">
          <Icon type="md-globe" size='40' color='white' />
          </Col>
          <Col span="17">
          <span style='margin-left: 10px; font-size: 24px;color: white;font-family: sans-serif;'>滁州市“商品住宅”选择推荐系统</span>
          <span class="sub-title">
            <span>({{this.name}})</span>
          </span>
          <span class="toggle">
            <Icon type="ios-arrow-down"></Icon>
            <div class="ivu-poptip-arrow"></div>
            <span class="poupTitle">
              <Navigation class="nav" />
            </span>
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
                <DropdownItem name="changePsd" divided>
                  <icon type="ios-cart-outline" :size="16" />
                  <span> 我的收藏</span>
                </DropdownItem>
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
      <Content :style="{minHeight: '970px', background: '#fff'}">
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import Navigation from "@/views/menu/components";
import { login } from "@/views/login/js/login.js";
import ChangePsd from "@/views/login/components/changepsd";
export default {
  mixins: [login],
  data() {
    return {
      name: "首页",
      user: "",
      modal: false
    };
  },
  mounted() {
    this.user = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  methods: {
    getPath() {
      this.name = this.$route.name;
    },
    getInfo() {
      var _this = this;
      _this.$router.push("/personal");
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
    Navigation,
    ChangePsd
  }
};
</script>


<style lang="less" scoped>
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

.poupTitle {
  position: absolute;
  top: 55px;
  left: 90px;
  display: none;
  will-change: top, left;
  width: 800px;
  background: white;
  z-index: 8;
  padding: 10px 0px 0px 20px;
}
</style>