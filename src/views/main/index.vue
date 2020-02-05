<template>
  <div class="layout">
    <Layout>
      <Header class='header'>
        <Row type="flex" justify="start" class="code-row-bg">
          <Col span="1">
            <div @click="myMenu" style="margin-left: 22px">
              <img src="../../assets/img/logo.png" style="height: 30px;width:30px;margin-top: 11px" alt="logo">
            </div>
          </Col>
          <Col span="10">
            <span style='margin-left: 10px; font-size: 24px;color: white;font-family: sans-serif;'>基于空间协同过滤的房产推荐系统</span>
            <span class="sub-title">
            <span>({{this.name}})</span>
          </span>
            <span class="toggle">
            <Icon type="ios-arrow-down"></Icon>
            <div class="ivu-poptip-arrow"></div>
            <span class="poupTitle">
              <Navigation v-if="nav" class="nav" />
            </span>
            <span class="poupTitle1">
              <Navigation1 v-if="nav1" class="nav" />
            </span>
          </span>
          </Col>
          <Col span="2">
            <div class="user-tools">
                <div class="user-info" @click="jumpdata">
                  <span  style="background-color: #19be6b;color: #fff">
                    <icon type="md-speedometer" :size="25" />数据展示</span>
                </div>
            </div>
          </Col>
          <Col span="2">
            <div class="user-tools">
                <div class="user-info" @click="jumpsearch">
                  <span  style="background-color: #19be6b;color: #fff">
                    <icon type="md-search" :size="25" />空间查询</span>
                </div>
            </div>
          </Col>
          <Col span="2">
          <div class="user-tools">
            <Dropdown :transfer="false" placement="bottom-end" @on-click="onUserItemClick">
              <div class="user-info">
                <span  style="background-color: #19be6b;color: #fff">
                  <icon type="md-pin" :size="25" />购房选址 <Icon type="ios-arrow-down"></Icon></span>
              </div>
              <DropdownMenu slot="list">
                <router-link to="/recommendation/factor">
                <div>
                  <DropdownItem divided>
                    <!--<icon type="ios-person-outline" :size="16" />-->
                    <span> 偏好选址</span>
                  </DropdownItem>
                </div>
                </router-link>
                <router-link to="/compareHouse">
                <div>
                  <DropdownItem divided>
                    <!--<icon type="ios-cart-outline" :size="16" />-->
                    <span> 房源对比</span>
                  </DropdownItem>
                </div>
                </router-link>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Col>
          <Col span="2">
            <div class="user-tools">
              <Dropdown :transfer="false" placement="bottom-end" @on-click="onUserItemClick">
                <div class="user-info">
                  <span  style="background-color: #19be6b;color: #fff">
                    <icon type="md-thumbs-up" :size="25" />房源推荐 <Icon type="ios-arrow-down"></Icon></span>
                </div>
                <DropdownMenu slot="list">
                  <router-link to="/recommendation/housingPreference">
                  <div>
                    <DropdownItem divided>
                      <span> 基于用户推荐</span>
                    </DropdownItem>
                  </div>
                  </router-link>
                  <router-link to="/recommendation/housings">
                  <div>
                    <DropdownItem divided>
                      <span> 基于住宅推荐</span>
                    </DropdownItem>
                  </div>
                  </router-link>
                </DropdownMenu>
              </Dropdown>
            </div>
          </Col>
          <Col span="2">
            <div class="user-tools">
              <Dropdown :transfer="false" placement="bottom-end" @on-click="onUserItemClick">
                <div class="user-info"  @click="jumpmanger">
                  <span   style="background-color: #19be6b;color: #fff">
                    <icon type="md-contacts" :size="25" />用户管理</span>
                </div>
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
          <Col span="3">
            <div class="user-tools">
              <Dropdown :transfer="false" placement="bottom-end" @on-click="onUserItemClick">
                <div class="user-info">
                  <span style="background-color: #19be6b;color: #fff"><icon type="ios-contact" :size="25" />欢迎您，{{this.user}}</span>
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
    import Navigation from "@/views/menu/components";
    import Navigation1 from "@/views/menu/components/userIndex";
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
                name: "首页",
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
            if (this.roleid == "R0002") {
                this.nav = true;
            } else {
                this.nav1 = true;
            }
            console.log(this.user);
        },
        methods: {
            myMenu(){
                this.$router.push("/menu");
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
            jumpmanger() {
                this.$router.push("/userManager");
            },
            getPath() {
                this.name = this.$route.name;
            },
            getInfo() {
                var _this = this;
                _this.$router.push("/personalcenter");
            },
            jumpdata() {
                var _this = this;
                _this.$router.push("/data");
            },
            jumpsearch() {
                var _this = this;
                _this.$router.push("/infoSearch");
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
            Navigation1,
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
    background: #19be6b;
    height: 60px;
    padding: 0;
    line-height: 60px;
  }
  .user-info {
    /*border: 1px solid black;*/
    cursor: pointer;
    * {
      vertical-align: middle;
    }
    /*&:hover {*/
      /*background: #79a2fe;*/
    /*}*/
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
    margin-top: 8px;
    margin-right: 10px;
  }
  .toggle:hover .poupTitle {
    display: block;
  }
  .toggle:hover .poupTitle1 {
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
  .poupTitle1:hover {
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
  .poupTitle1 {
    position: absolute;
    top: 55px;
    left: 90px;
    display: none;
    will-change: top, left;
    width: 680px;
    background: white;
    z-index: 8;
    padding: 10px 0px 0px 20px;
  }
</style>