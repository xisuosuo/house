<template>
    <div style="margin:80px auto;width:1000px;">
        <Table style="height:700px" stripe :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script>
    import Server from "@/core/server";
    import { services } from "@/core/config/services";
export default {
     data() {
    return {
        columns1: [
            {
                type: "index",
                width: 60,
                align: "center",
                title: "ID",
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
                title: "面积/m2",
                key: "area"
            },
            {
                align: "center",
                title: "楼层类型",
                key: "houseHeight"
            },
            {
                align: "center",
                title: "楼盘类型",
                key: "houseType"
            },
            {
                align: "center",
                title: "绿化率%",
                key: "greeningRate"
            },
            {
                align: "center",
                title: "停车位",
                key: "parkingSpace"
            },
            {
                align: "center",
                title: "街道",
                key: "street"
            },
            {
                align: "center",
                title: "地址",
                key: "address"
            }
        ],
      data1: []
    };
  },
    mounted() {
        this.getTable();
    },
    methods: {
        getTable() {
            var this_=this;
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
    }
};
</script>

<style lang="less" scoped>
</style>
