<template>
  <Layout :style="{height:'100%'}">
    <Sider ref="side1" :width='180'>
      <Menu active-name="" theme="dark" width="auto" :open-names="['']">
        <router-link to="/menu">
          <MenuItem name="8-1">
          <Icon type="ios-navigate"></Icon>
          <span>首页</span>
          </MenuItem>
        </router-link>
        <router-link to="/personalcenter">
          <MenuItem name="5-1">
          <Icon type="md-person" />
          <span>个人中心</span>
          </MenuItem>
        </router-link>
        <Submenu name="1">
          <template slot="title">
            <Icon type="md-analytics" /> 数据展示
          </template>
          <router-link to="/data">
            <MenuItem name="1-1">
            <span style="font-size: 13px">数据统计</span>
            </MenuItem>
          </router-link>
          <router-link to="/data/dataDeatils">
            <MenuItem name="1-2">
            <span style="font-size: 13px">数据查询</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/recommendation/housingPreference">
          <MenuItem name="2-1">
          <Icon type="md-thumbs-up" />
          <span>房源推荐</span>
          </MenuItem>
        </router-link>
        <router-link to="/recommendation/factor">
          <MenuItem name="2-2">
          <Icon type="md-pin" />
          <span>购房选址</span>
          </MenuItem>
        </router-link>
        <Submenu name="8">
          <template slot="title">
            <Icon type="ios-radio" /> 房价分析
          </template>
          <router-link to="/priceAnalysis">
            <MenuItem name="8-2">
            <span style="font-size: 13px">价格分析</span>
            </MenuItem>
          </router-link>
          <router-link to="/heatMap2d">
            <MenuItem name="8-1">
            <span style="font-size: 13px">二维热力图</span>
            </MenuItem>
          </router-link>
          <router-link to="/heatMap">
            <MenuItem name="8-3">
            <span style="font-size: 13px">三维热力图</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <router-link to="/infoSearch">
          <MenuItem name="4-1">
          <Icon type="md-search" />
          <span>信息查询</span>
          </MenuItem>
        </router-link>
        <router-link to="/locationResources">
          <MenuItem name="2-2">
          <Icon type="md-pin" />
          <span>区位资源</span>
          </MenuItem>
        </router-link>
        <router-link to="/userManager">
          <MenuItem name="4-2" v-if="show">
          <Icon type="md-contacts" />
          <span>用户管理</span>
          </MenuItem>
        </router-link>
        <Submenu name="6">
          <template slot="title">
            <Icon type="md-paper" /> 用户手册
          </template>
          <router-link to="/auDecision/usersManual">
            <MenuItem name="6-1">
            <span style="font-size: 13px">用户手册</span>
            </MenuItem>
          </router-link>
          <router-link to="/auDecision/livablemodel">
            <MenuItem name="6-2">
            <span style="font-size: 13px">宜居模型</span>
            </MenuItem>
          </router-link>
          <router-link to="/auDecision/model">
            <MenuItem name="6-3">
            <span style="font-size: 13px">引力模型</span>
            </MenuItem>
          </router-link>
        </Submenu>
        <Submenu name="9">
          <template slot="title">
            <Icon type="md-analytics" /> 房价预测
          </template>
          <router-link to="/priceForecast">
            <MenuItem name="1-1">
            <span style="font-size: 13px">房价预测</span>
            </MenuItem>
          </router-link>
          <router-link to="/GWR">
            <MenuItem name="1-2">
            <span style="font-size: 13px">GWR模型</span>
            </MenuItem>
          </router-link>
        </Submenu>
      </Menu>
    </Sider>

    <Content>
      <Header :style="{padding: 0}" class="layout-header-bar">
        <Breadcrumb>
          <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
          <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
        </Breadcrumb>
      </Header>
      <div style="margin: 15px; width: 100%;overflow-y: auto">
        <Row>
          <Col span="8">
          <Card>
            <div class="avatar">
              <img style="width: 100px;height: 100px;border-radius: 50%;margin: 20px" src="../../../assets/img/u=3085477210,754180516&fm=11&gp=0.jpg" />
            </div>
            <div style="text-align: left;margin-left: 10%;font-size: 12px">
              <div>
                <span>昵称：</span>
                <span style="margin-left: 5px">{{this.user}}</span>
              </div>
              <div>
                <span>地址：</span>
                <span style="margin-left: 5px">安徽滁州市</span>
              </div>
              <div>
                <span>个性签名：</span>
                <span style="margin-left: 5px">这个人很懒，什么都没有留下</span>
              </div>
            </div>
            <Divider dashed="true" />
            <strong>
              <div style="margin-bottom: 10px;">标签</div>
            </strong>
            <div>
              <Tag checkable color="error">有房</Tag>
              <Tag checkable color="success">有车</Tag>
              <Tag checkable color="primary">有存款</Tag>
              <Tag checkable color="warning">长得漂亮</Tag>
            </div>
            <Divider dashed="true" />
            <strong>
              <div>详细信息:</div>
            </strong>
            <Form style="margin-left: 10%" :model="formItem" :label-width="80">
              <FormItem label="昵称:">
                <span>{{this.user}}</span>
              </FormItem>
              <FormItem label="年龄:">
                <span>{{this.userInfo.age}}</span>
              </FormItem>
              <FormItem label="工作类型:">
                <span>程序猿</span>
              </FormItem>
              <FormItem label="注册时间:">
                <span>{{this.userInfo.createTime}}</span>
              </FormItem>
              <FormItem label="资金:">
                <span>{{this.userInfo.userMoney}}元</span>
              </FormItem>
              <FormItem label="购房类型:">
                <span>投资型</span>
              </FormItem>
              <FormItem label="用户类型:">
                <span>{{this.userInfo.roleName}}</span>
              </FormItem>
              <FormItem>
                <router-link to="/personal">
                  <Button style="margin-left: 50%">更新基本信息</Button>
                </router-link>
              </FormItem>
            </Form>
          </Card>
          </Col>
          <Col span="16">
          <Card>
            <strong>
              <div style="margin-bottom: 10px">我的收藏夹</div>
            </strong>
            <div>
              <Table height="349" stripe :columns="columns1" :data="data1"></Table>
            </div>
            <Divider dashed="true" />
            <strong>
              <div>我的评论：</div>
            </strong>
            <div>
              <Table height="170" width="100%" stripe :columns="columns2" :data="data2"></Table>
            </div>
          </Card>
          </Col>
        </Row>
      </div>
    </Content>
  </Layout>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import ChangePsd from "@/views/login/components/changepsd";

export default {
  components: {
    ChangePsd
  },
  data() {
    return {
      show: true,
      modal1: false,
      columns2: [
        {
          align: "center",
          title: "小区名称",
          key: "name"
        },
        {
          align: "center",
          title: "评论内容",
          key: "houseComments"
        },
        {
          align: "center",
          title: "分数",
          key: "houseScore"
        },
        {
          align: "center",
          title: "评论时间",
          key: "commentTime"
        },
        {
          title: "操作",
          key: "action",
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.removecomment(params.row, params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      columns1: [
        {
          type: "index",
          width: 60,
          align: "center",
          title: "ID"
        },
        {
          align: "center",
          title: "小区名称",
          key: "name"
        },
        {
          align: "center",
          title: "均价",
          key: "price"
        },
        {
          align: "center",
          title: "楼层类型",
          key: "houseHeight"
        },
        {
          align: "center",
          title: "绿化率%",
          key: "greeningRate"
        },
        {
          align: "center",
          title: "地址",
          key: "address"
        },
        {
          title: "操作",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "查看详情"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "error",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row, params.index);
                    }
                  }
                },
                "删除"
              )
            ]);
          }
        }
      ],
      data1: [],
      data2: [],
      userInfo: [],
      user: ""
    };
  },
  mounted() {
    this.getTable();
    this.getInfo();
    this.personalComments();
    var roleid = JSON.parse(sessionStorage.getItem("roleId"));
    if (roleid === "R0001" || roleid === "R0002") {
      this.show = true;
    } else {
      this.show = false;
    }
  },
  methods: {
    getInfo() {
      var this_ = this;
      var user = JSON.parse(sessionStorage.getItem("userAccount"));
      this.user = user;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.getInfo,
        params: {
          username: user,
          userId: userId
        }
      }).then(rsp => {
        this.userInfo = rsp.data;
        // console.log() ;
      });
    },
    getTable() {
      var this_ = this;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.getCollectHouseInfo,
        params: {
          userId: userId
        }
      }).then(rsp => {
        this_.data1 = rsp.data;
      });
    },

    onCancel() {
      this.modal1 = false;
    },
    onRefresh() {
      this.getTable();
      this.personalComments();
    },
    onSubmit() {
      this.$refs.changepsd.onSubmit();
    },
    show() {
      this.$router.push("/collection");
    },
    personalComments() {
      var this_ = this;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      Server.get({
        url: services.personalComments,
        params: {
          userId: userId
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          this_.data2 = rsp.data;
        }
      });
    },
    remove(currentRow, index) {
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      currentRow.Index = index;
      this.selectedRow = currentRow;
      var row = this.selectedRow;
      if (!row) {
        this.$Message.warning("请选择需要删除的行");
      } else {
        this.$Modal.confirm({
          title: "提示",
          content: "是否永久删除此数据?",
          onOk: () => {
            debugger;
            // var id = row.houseId;
            var name = row.name;
            Server.get({
              url: services.delCollectHouse,
              params: {
                userId: userId,
                houseName: name
              }
            }).then(rsp => {
              if (rsp.status == 1) {
                this.$Message.success(rsp.message);
                this.personalComments();
              } else {
                this.$Message.error(rsp.message);
              }
            });
          },
          onCancel: () => {}
        });
      }
    },
    removecomment(currentRow, index) {
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      currentRow.Index = index;
      this.selectedRow = currentRow;
      var row = this.selectedRow;
      if (!row) {
        this.$Message.warning("请选择需要删除的行");
      } else {
        this.$Modal.confirm({
          title: "提示",
          content: "是否永久删除此数据?",
          onOk: () => {
            debugger;
            // var id = row.houseId;
            var name = row.name;
            Server.get({
              url: services.delUserComments,
              params: {
                userId: userId,
                commentsId: commentsId
              }
            }).then(rsp => {
              if (rsp.data.status == 1) {
                this.$Message.success(rsp.message);
                this.onRefresh();
              } else {
                this.$Message.error(rsp.message);
              }
            });
          },
          onCancel: () => {}
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.avatar {
  text-align: center;
}
.layout {
  // border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.ivu-form-item {
  margin-bottom: 1px;
}

.ivu-divider-horizontal {
  display: block;
  height: 1px;
  width: 100%;
  min-width: 100%;
  margin: 15px 0;
  clear: both;
}
</style>