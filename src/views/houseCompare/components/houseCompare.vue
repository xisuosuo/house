<template>
  <Modal v-model="Compare" draggable>
    <p slot="header" style="color:#2d8cf0;text-align:left">
      <Icon type="md-git-compare" color="#2d8cf0" size="23" />
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
      <!-- <Col span="4">
      <Button type="primary"   @click="getResult()">基本对比</Button>
      </Col>
      <Col span="4">
      <Button type="primary" >地图对比</Button>
      </Col> -->
    </Row>

    <Table :columns="columns1" :data="data1" border="1" style="margin-top:10px"></Table>

    <div slot="footer">
      <Row type="flex" justify="end" style="margin-top:10px">
        <Col span="4">
        <Button type="primary" @click="getResult()">基本对比</Button>
        </Col>
        <Col span="4">
        <Button type="primary">地图对比</Button>
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
      columns1: [
        {
          title: "比较参数",
          key: "name",
          align: "center"
        },
        {
          title: "小区1",
          key: "community1",
          align: "center"
        },
        {
          title: "小区2",
          key: "community2",
          align: "center"
        }
      ],
      data1: [
        {
          name: "距最近学校距离",
          community1: "",
          community2: ""
        },
        {
          name: "距最近医院距离",
          community1: "",
          community2: ""
        },
        {
          name: "距最近商场距离",
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
        _this.data1[0].community1 = res.data[1].schoolDistance1;
        _this.data1[0].community2 = res.data[1].schoolDistance2;

        _this.data1[1].community1 = res.data[0].hospitalDistance1;
        _this.data1[1].community2 = res.data[0].hospitalDistance2;

        _this.data1[2].community1 = res.data[2].shopDistance1;
        _this.data1[2].community2 = res.data[2].shopDistance2;
      });
    }
  },
  beforeDestroy() {
    this.$root.Bus.$off("eventCompare");
  }
};
</script>
<style lang="less" scoped>
</style>
