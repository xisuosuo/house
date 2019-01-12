<template>
    <div style="margin:80px auto;width:1000px;">
        <Table style="height:1500px" stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script>
    import Server from "@/core/server";
    import {services} from "@/core/config/services";
    import userMessage from "@/vuex/store";
export default {
  data() {
    return {
      columns1: [
        {
          align: "center",
          title: "小区名称",
          key: "name"
        },
        {
          align: "center",
          title: "教育资源可达性",
          key: "education"
        },
        {
          align: "center",
          title: "医疗资源可达性",
          key: "Medical"
        },
        {
          align: "center",
          title: "交通资源可达性",
          key: "traffic"
        },
        {
          align: "center",
          title: "休闲娱乐可达性",
          key: "entertainment"
        },
        {
          title: "操作",
          key: "action",
          maxWidth: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h("Button", {
                props: {
                  shape: "circle",
                  icon: "ios-create"
                },
                style: {
                  marginRight: "5px"
                },
                on: {
                  click: () => {
                    this.showMap(params.row, params.index);
                  }
                }
              })
            ]);
          }
        }
      ],
      data1: [
        {
          name: "John Brown",
          education: 18,
          Medical: "New York No. 1 Lake Park",
          traffic: "2016-10-03",
          entertainment: "123"
        },
        {
          name: "John Brown",
          education: 18,
          Medical: "New York No. 1 Lake Park",
          traffic: "2016-10-03",
          entertainment: "123"
        }
      ]
    };
  },
  methods: {
    showMap() {
      Server.get({
        url: services.rightHouseInfo,
        params: {
          sorting: "",
          column: ""
        }
      }).then(rsp => {
        if (rsp.status === 1) {
          // this_.information = rsp.data;
          userMessage.commit("user_message", rsp);
          // this_.total = rsp.length;
        }
      });

      this.$router.push("/mapMatching");
    }
  }
};
</script>
