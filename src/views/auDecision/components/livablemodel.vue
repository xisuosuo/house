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
            <div class="data-view" style="margin-top: 20px;overflow: hidden;">
                <Row :gutter="30">
                    <Col span="12">
                    <card title="宜居模型介绍" style="margin-left: 10%">
                        <div id="comprise" style="height: 190px;">
                            <p>宜居模型是按照国家颁布的宜居标准。主要是通 过对小区的生活便宜度、环境优美度、公共安全度、社 区文明度等四个方面经行评价。本系统的模型主要通 过比较小区的生活便宜度。生活便宜度主要是比较小 区到周围基础设施的距离，基础设施主要包括学校、公 园、医院、超市等。最后根据宜居模型计算出各个小区的宜居性，并进行小区对比。
                            </p>
                        </div>
                    </card>
                    </Col>
                    <Col span="12">
                    <card title="模型方法" style="margin-right: 10%">
                        <div id="comprise" style="height: 190px;">
                            <p>A 小区分数 =［A 距离最近公园距离/( A 距离最近公园距离+B 最近公园距离) +A 距离最 近医院距离/( A 距离最近医院距离+B 距离最近医院 距离) +A 距离最近超市距离/( A 距离最近超市距离+ 距离最近超市距离) +A 距离最近学校距离 / ( A 距离 最近学校距离+B 距离最近学校距离) ］* 10+环境优 美度( 满分 20 分) +公共安全度( 满分 20 分) +社区文 明度( 满分 20) 。
                            </p>
                            <p>
                                小区分数 =［B 距离最近公园距离 / ( A 距离最近 公园距离+B 最近公园距离) +B 距离最近医院距离/( A 距离最近医院距离+B 距离最近医院距离) +A 距离最近 超市距离/( B 距离最近超市距离+B 距离最近超市距 离) +B 距离最近学校距离/( A 距离最近学校距离+B 距 离最近学校距离) ］* 10+环境优美度( 满分 20 分) +公 共安全度( 满分 20 分) +社区文明度( 满分 20)
                            </p>
                        </div>
                    </card>
                    </Col>
                </Row>
                <br>
                <Row>
                    <Col>
                    <card title="引力模型公式" style="margin-left: 5%;margin-right: 5%">
                        <div id="comprise">
                            <p> 房源比较界面图的左右两侧分别输入两 个小区的名称，系统将会查找并计算该小区生活便宜 度( 距离最近学校公园、医院、超市、学校距离) ，环境 优美度，公共安全度，社区文明度的数据，按照宜居模 型中提供的计算公式得出两个小区的宜居指数，通过 系统提供的客观数据，方便用户做出选择。</p>
                            <div style="text-align:center;">
                                <img style="width:400px;height:350px;" src="../../../assets/img/fydb1.png">
                                <a style="font-size:60px;">=>></a>
                                <img style="width:400px;height:350px;" src="../../../assets/img/fydb2.png">
                            </div>
                        </div>
                    </card>
                    </Col>
                </Row>
            </div>
        </Content>

    </Layout>
</template>

<script>
import SiderMenu from "@/views/main/siderMenu";
export default {
  name: "livablemodel",
  components: {
    SiderMenu
  }
};
</script>

<style scoped>
p {
  text-indent: 2em;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>