<template>
    <Layout :style="{height:'100%'}">
        <Sider ref="side1" :width='180'>
            <sider-menu/>>
        </Sider>
        <Content>
            <Header :style="{padding: 0}" class="layout-header-bar">
                <Breadcrumb>
                    <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                    <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                </Breadcrumb>
            </Header>
            <Card style="margin: 0 auto;margin-top: 20px;width: 80%">
                <h2 style="text-align: center"> 用户手册</h2>
                <h3>欢迎使用城市商品住宅选择推荐系统</h3>
                <Collapse v-model="value2" accordion>
                    <Panel name="1">
                        数据台账
                        <div slot="content">
                            <p style="margin-left: 30px">
                                1.数据图表，以可视化的方式使用4个图表来直观的展示滁州市房价的整体情况。使用geojson数据，反映滁州市两区的平均房价，折线图显示近4年滁州市房价走势，按照行政区划把滁州市划分为城东、城南、城西、城北四部分并对比各区域历年房价价格及走势，通过筛选城区以柱状图的形式展示公共设施数量，包括各个城区的学校、医院、政府机构、商场、车站数量。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/accountdata.png" alt="">
                            <p style="margin-left: 30px">
                                2.数据统计,主要展示每个小区的详细信息主要包括小区名称、地址、类型、高度、绿化率、停车位、平均房价、是否在售等。用户可以通过点击表格的排序按钮对小区房价进行排序，也可以在输入框中输入小区名字来精确查询到符合条件的小区详情。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/information.png" alt="">
                        </div>
                    </Panel>
                    <Panel name="2">
                        信息共享展示
                        <div slot="content">
                            <p style="margin-left: 30px">
                                1.空间查询,在地图上展示用户想要查找的小区，并把该小区的详细信息展示给用户。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/searchinfo.png" alt="">
                            <p style="margin-left: 30px">
                                2.条件选房,在用户选择的行政区划、房源类型、价格以及面积的基础上查询出符合用户条件的小区并在地图上把小区所在位置展示给用户，并展示该小区的详细信息。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/tiaojianxuanfang.png" alt="">
                            <p style="margin-left: 30px">
                                3.数据统计 ,向用户展示出用户选择街道或自定义区域的公共服务设施数量，包括医疗保健，学校，政府机构，电讯营业厅，售票点，公共设施，车站等。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/shujutj.png" alt="">
                            <p style="margin-left: 30px">
                                4.街道查询,用户选择想要查询的街道然后点击确定就可以查看到该街道的公共设施的统计图表。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/jiedaotj.png" alt="">
                            <p style="margin-left: 30px">
                                5.自定义查询,用户自定义画出想要查询的区域范围，点击确定即可查看到该区域的公共设施的统计图表。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/zdy.png" alt="">
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/zdytj.png" alt="">
                            <p style="margin-left: 30px">
                                6.缓冲区查询 用户选择缓冲区的中点，然后输入缓冲区半径，即可得到该缓冲区的全部小区，然后点击每个具体小区，都会给用户展示该小区的详细信息。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/hcq.png" alt="">
                        </div>
                    </Panel>
                    <Panel name="3">
                        房源对比
                        <div slot="content">
                            <p style="margin-left: 30px">
                                1.在web页面中每个小区都有“加入对比”按钮，通过点击按钮可将小区加入消息气泡，通过点击消息气泡跳转到房源对比页面
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/addcompare.png" alt="">
                            <p style="margin-left: 30px">
                                2.房源对比页面最多可对比4个小区，通过横向对比的方式排列出所选小区的各个影响因子，方便用户选择出最适合自己的小区。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/compare.png" alt="">
                        </div>
                    </Panel>
                    <Panel name="4">
                        辅助决策
                        <p slot="content">
                            暂无
                        </p>
                    </Panel>
                    <Panel name="5">
                        房源推荐
                        <div slot="content">
                            <p style="margin-left: 30px">
                                1.利用用户对小区自身和小区周边资源的选择和权重，使用可达性模型向用户展示出相关资源的可达性以及符合用户的小区。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/tuijian.png" alt="">
                            <p style="margin-left: 30px">
                                2.可达性计算数据展示
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/tuijaindata.png" alt="">
                        </div>
                    </Panel>
                    <Panel name="6">
                        住房估价
                        <p slot="content">
                            暂无</p>
                    </Panel>
                    <Panel name="7">
                        用户管理
                        <div slot="content">
                            <p style="margin-left: 30px">
                                1.管理员登入后，可以在用户管理模块，对已注册的用户进行增、删、改、查。 </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/gly.png" alt="">
                            <p style="margin-left: 30px">
                                2.管理员可查看已注册的用户的详细信息
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/glysearh.png" alt="">
                            <p style="margin-left: 30px">
                                3.管理员可修改已注册用户的详细信息
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/glyxiugai.png" alt="">
                            <p style="margin-left: 30px">
                                4.管理员可删除已注册的用户
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/glyshanchu.png" alt="">
                        </div>
                    </Panel>
                    <Panel name="8">
                        个人中心
                        <div slot="content">
                            <p style="margin-left: 30px">
                                在个人中心页面可以查看修改个人信息和已收藏的房源信息。
                            </p>
                            <img style="width: 600px;height: 300px;margin-left: 20%" src="../../../assets/img/personalcenter.png" alt="">
                        </div>
                    </Panel>
                </Collapse>
            </Card>
        </Content>
    </Layout>
</template>


<script>
import { services } from "@/core/config/services";
import { computeh } from "@/core/computeh";
import SiderMenu from "@/views/main/siderMenu";

export default {
  mixins: [computeh],
  data() {
    return {
      value2: "1"
    };
  },
  components: {
    SiderMenu
  },
  mounted() {},

  methods: {}
};
</script>
<style lang="less" scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

