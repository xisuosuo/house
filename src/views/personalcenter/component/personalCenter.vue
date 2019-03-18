<template>
    <Layout>
        <Content>
            <div style="margin: 0 auto;margin-top: 70px;width: 1200px;height: 700px;overflow-y: auto">
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
                        <Divider dashed="tr ue" />
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
                                <Button style="margin-left: 50%" @click="personalComments">查看个人评论</Button>
                            </FormItem>
                        </Form>
                    </Card>
                    </Col>
                    <Modal v-model="modal2" width="1000" title="个人评论记录" @on-ok="ok">
                        <div>
                            <Table height="200" stripe :columns="columns2" :data="data2"></Table>
                        </div>
                    </Modal>
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
                            <div>安全设置：</div>
                        </strong>
                        <div style="font-size: 13px">
                            <div style="margin-left: 10%">
                                <div>账户密码</div>
                                <span>当前密码强度：
                                    <span style="color: green">强</span>
                                </span>
                                <a @click="modal1 = true" name="changePsd" style="color: #2d8cf0;float: right">修改密码</a>
                                <Modal v-model="modal1" title="修改密码" width="400">
                                    <change-psd ref="changepsd" @on-modal-close="modal1=false" v-if="modal1"></change-psd>
                                    <div class="modal-footer" slot="footer" v-if="modal1">
                                        <Button type="text" @click="onCancel">取消</Button>
                                        <Button type="primary" @click="onSubmit">确定</Button>
                                    </div>
                                </Modal>
                                <Divider dashed="true" />
                            </div>
                            <div style="margin-left: 10%">
                                <div>密保手机</div>
                                <span>已绑定手机：
                                    <span>183****6526</span>
                                </span>
                                <a style="color: #2d8cf0;float: right">修改手机</a>
                                <Divider dashed="true" />
                            </div>
                            <div style="margin-left: 10%">
                                <div>绑定邮箱</div>
                                <span>已绑定邮箱：183****6526@qq.com</span>
                                <a style="color: #2d8cf0;float: right">修改邮箱</a>
                                <Divider dashed="true" />
                            </div>
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
      modal1: false,
      modal2: false,
      columns2: [
        {
          width: 121,
          align: "center",
          title: "小区名称",
          key: "name"
        },
        {
          width: 500,
          align: "center",
          title: "评论内容",
          key: "houseComments"
        },
        {
          width: 121,
          align: "center",
          title: "分数",
          key: "houseScore"
        },
        {
          width: 121,
          align: "center",
          title: "评论时间",
          key: "commentTime"
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
    },
    onRefresh1() {
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
      this.modal2 = true;
      debugger;
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
                this.onRefresh();
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
                houseName: name
              }
            }).then(rsp => {
              if (rsp.data.status == 1) {
                this.$Message.success(rsp.message);
                this.onRefresh1();
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