<template>
  <Modal v-model="Compare" draggable>
    <p slot="header" style="color:#19be6b;text-align:left">
      <Icon type="md-git-compare" color="#19be6b" size="23" />
      <span>房源对比</span>
    </p>
    <Row type="flex" justify="space-between" class="code-row-bg">
      <Col span="10">
      <Input v-model="community1" placeholder="请输入小区名" />
      </Col>
      <Col span="4" style="text-align:center;line-height:32px;font-size:16px;font-weight:bold">VS</Col>
      <Col span="10">
      <Input v-model="community2" placeholder="请输入小区名" />
      </Col>
    </Row>

    <Table :columns="columns1" :data="data1" border="1" style="margin-top:10px"></Table>

    <div slot="footer">
      <Row type="flex" justify="end" style="margin-top:10px">
        <Col span="4">
        <Button type="primary" style="margin-left:2px" @click="getResult">基本对比</Button>
        </Col>
        <Col span="4">
        <Button type="primary" style="margin-left:3px" @click="showmapView">地图对比</Button>
        </Col>
      </Row>
    </div>
  </Modal>

</template>
<script>
import Server from "@/core/server";
import { services } from "@/core/config/services";
export default {
  created() {
    this.$root.Bus.$on("eventCompare", () => {
      this.Compare = true;
    });
  },
  data() {
    return {
      Compare: false,
      mapModel: false,
      columns1: [
        {
          title: "比较参数",
          key: "name",
          align: "center"
        },
        {
          title: "小区一",
          key: "community1",
          align: "center"
        },
        {
          title: "小区二",
          key: "community2",
          align: "center"
        }
      ],
      data1: [
        {
          name: "距最近学校距离 (m)",
          community1: "",
          community2: ""
        },
        {
          name: "距最近医院距离 (m)",
          community1: "",
          community2: ""
        },
        {
          name: "距最近商场距离 (m)",
          community1: "",
          community2: ""
        },
        {
          name: "小区宜居度",
          community1: "",
          community2: ""
        }
      ]
    };
  },
  methods: {
    getResult() {
      var _this = this;
      Server.get({
        url: services.compare,
        params: {
          name1: this.community1,
          name2: this.community2
        }
      }).then(function(res) {
        _this.columns1[1].title = _this.community1;
        _this.columns1[2].title = _this.community2;
        _this.data1[0].community1 = (res.data[1].schoolDistance1).toFixed(2);
        _this.data1[0].community2 = (res.data[1].schoolDistance2).toFixed(2);

        _this.data1[1].community1 = (res.data[0].hospitalDistance1).toFixed(2);
        _this.data1[1].community2 = (res.data[0].hospitalDistance2).toFixed(2);

        _this.data1[2].community1 = (res.data[2].shopDistance1).toFixed(2);
        _this.data1[2].community2 = (res.data[2].shopDistance2).toFixed(2);

        var s1 = res.data[1].schoolDistance1;
        var s2 = res.data[1].schoolDistance2;

        var h1 = res.data[1].schoolDistance1;
        var h2 = res.data[1].schoolDistance1;
        
        var sp1 = res.data[2].shopDistance1;
        var sp2 = res.data[2].shopDistance2;
        _this.data1[3].community1 = (s1/(s1+s2)+h1/(h1+h2)+sp1/(sp1+sp2)*10+30).toFixed(2);
        _this.data1[3].community2 = (s2/(s1+s2)+h2/(h1+h2)+sp2/(sp1+sp2)*10+30).toFixed(2);
      });
    },
    showmapView() {
      debugger;
      this.mapModel = true;
    }
  },
  beforeDestroy() {
    this.$root.Bus.$off("eventCompare");
  }
};
</script>
<style lang="less" scoped>
</style>
