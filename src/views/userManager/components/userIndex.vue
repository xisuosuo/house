<template>
  <div class="page-style" style="margin: 10px">
    <div class="userHeader">
      <span style="margin-left:5px">账号：</span>
      <Input class="control search-input-default" style="width: 200px" clearable v-model="username" @on-enter="onSearch" />
      <span>昵称：</span>
      <Input class="control search-input-default" style="width: 200px" clearable v-model="nickName" @on-enter="onSearch" />
      <search-buttons :showSearch="true" @on-search="onSearch" @on-refresh="onRefresh"></search-buttons>
    </div>
    <div class="section main-table-section">
      <Table :loading="loading" border :columns="table.columns" :data="table.data"></Table>
    </div>
    <Modal v-model="dialog" :mask-closable="false" width="800" title="用户管理">
      <user-form ref="userform" />
      <modal-footer slot="footer" @on-save="savePerson" @on-cancel="onCancelPerson"></modal-footer>
    </Modal>
  </div>
</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
import SearchButtons from "@/components/common/search-buttons";
import modalFooter from "@/components/common/modal-footer";
import userForm from "./userForm.vue";
export default {
  data() {
    return {
      dialog: false,
      accountname: "",
      username: "",
      nickName: "",
      loading: false,
      table: {
        columns: [
          {
            type: "index",
            width: 60,
            align: "center"
          },
          {
            title: "账号",
            key: "username",
            sortable: true,
            align: "center"
          },
          {
            title: "昵称",
            key: "nickName",
            align: "center"
          },
          {
            title: "密码",
            key: "password",
            align: "center"
          },
          {
            title: "年龄等级",
            key: "age",
            maxWidth: 80,
            align: "center"
          },
          {
            title: "文化程度等级",
            key: "userEducationLevel",
            align: "center"
          },
          {
            title: "家庭收入等级",
            key: "money",
            align: "center"
          },
          {
            title: "手机号码",
            key: "mobile",
            maxWidth: 150,
            align: "center"
          },

          // {
          //   title: "电脑端",
          //   key: "isEnablePC",
          //   maxWidth: 90,
          //   align: "center",
          //   render: (h, params) => {
          //     return h("Tag", {
          //       props: {
          //         color: params.row.isEnablePC === married ? "success" : "gray",
          //         type: "dot"
          //       }
          //     });
          //   }
          // },
          {
            title: "操作",
            key: "action",
            maxWidth: 150,
            align: "center",
            render: (h, params) => {
              return h("div", [
                h("i-button", {
                  props: {
                    shape: "circle",
                    icon: "ios-create"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.onRowClick(params.row, params.index);
                    }
                  }
                }),
                h("i-button", {
                  props: {
                    shape: "circle",
                    icon: "ios-trash"
                  },
                  style: {
                    cursor: "pointer"
                  },
                  on: {
                    click: () => {
                      this.remove(params.row, params.index);
                    }
                  }
                })
              ]);
            }
          }
        ],
        data: []
      }
    };
  },
  mounted() {
    this.getTable();
  },
  methods: {
    getTable() {
      debugger;
      var userId = JSON.parse(sessionStorage.getItem("userId"));
      // var nickName = JSON.parse(sessionStorage.getItem("nickName"));
      // var userName = JSON.parse(sessionStorage.getItem("userName"));
      //   this.loading = true;
      Server.post({
        url: services.usermanager,
        params: {
          nickName: this.nickName,
          queryUsername: this.username,
          userId: userId
        }
      }).then(rsp => {
        // this.loading = false;
        this.table.data = rsp.data;
      });
    },
    //刷新
    onRefresh() {
      this.getTable();
    },
    //查询
    onSearch() {
      this.onRefresh();
    },
    //新增
    onAdd() {
      this.dialog = true;
      this.$refs.userform.resetForm();
    },
    //编辑
    onRowClick(currentRow, index) {
      currentRow.Index = index;
      this.selectedRow = currentRow;
      var row = this.selectedRow;
      if (!row) {
        this.$Message.warning("请选择需要操作的行");
      } else {
        var form = this.$refs.userform.editForm(row);
        this.dialog = true;
      }
    },
    //删除
    remove(currentRow, index) {
      debugger;
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
            var id = row.userId;
            Server.get({
              url: services.deleteUser,
              params: {
                userId: id
              }
            }).then(rsp => {
              if (rsp.status == 1) {
                this.$Message.success("删除成功");
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
    //保存
    savePerson() {
      debugger;
      var form = this.$refs.userform.getForm();
      Server.post({
        url: services.update,
        params: { userInfo: JSON.stringify(form) }
      }).then(rsp => {
        if (rsp.status === 1) {
          this.$Message.success("操作成功");
          this.onRefresh();
          this.dialog = false;
        } else {
          this.$Message.error(rsp.message);
        }
      });
    },
    //取消
    onCancelPerson() {
      this.dialog = false;
    }
  },
  components: {
    modalFooter,
    SearchButtons,
    userForm
  }
};
</script>
<style lang="less" scoped>
.userHeader {
  height: 50px;
  margin-top: 15px;
}
.search-input-default {
  margin-right: 10px;
}
</style>


 