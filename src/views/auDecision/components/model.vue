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
                    <card title="可达性模型介绍" style="margin-left: 10%">
                        <div id="comprise" style="height: 190px;">
                            <p>空间可达性度量是人文地理学分析公共服务资源空间分布是否合理最常用的方法，可达性（accessibility）表示由一点到达另一点的容易程度空间可达性关注可达性的空间属性。可达性受到不同研究领域学者的广泛关注。也因此产生了对可达性概念的不同理解其中较有代表性的包括：可达性是指在社会中产生的包括直接来源于个体作用与来源于整个社会如交通拥堵、环境污染等副产品作用的必然花费；是指个人参与活动的自由度；可达性是指在一定的交通系统中。到达某一地点的难易程度；可达性是指在合适的时间选择某种交通设施到达目的地的能力；是由土地利用一交通系统所决定的、人或货物通过一定的交通方式到达目的地或参与活动的方便程度。可达性是指不同空间分布的点或区域之间相互影响的潜力；可达性是指城市用地在时空上可接近的方便程度等。</p>
                        </div>
                    </card>
                    </Col>
                    <Col span="12">
                    <card title="引力模型方法" style="margin-right: 10%">
                        <div id="comprise" style="height: 190px;">
                            <p>引力模型法也称重力模型或潜能模型，该模型以衡量在合理范围内居民之间的相互作用和组织所有的服务，在某种意义上是一个累积的机会，优化模型，该模型引入了评估供给和需求的旅游或增加吸引力较低阻抗距离衰减函数之间的距离。重力模型有不同的表现形式，早期的引力模型只考虑供给方的累积效应和距离衰减效应，是常用的重力模型的改进模型，提高买方账户之间的竞争效应。引力模型是计算医院吸引患者的累计值，重力模型提供的计算方法是非常有效的城市或乡村的可达性。重力模型也会考虑可用性和接近，供应商和买家之间的相互作用考虑，考虑供应商和买方之间的竞争。在一个合理的距离的引力指数试图描述任何潜在住宅等服务点之间的相互作用的方法，随着距离或行驶阻力的增加，其潜力将减少。因为引力指数考虑到所有可用的服务，他们被看作是计算机将积累的好方法。</p>
                        </div>
                    </card>
                    </Col>
                </Row>
                <br>
                <Row>
                    <Col>
                    <card title="引力模型公式" style="margin-left: 5%;margin-right: 5%">
                        <div id="comprise">
                            <p> 其中在引力指标中，表示某一地区就医（教育、交通，以及休闲娱乐）的可达性指标；表示第j个医院（学校、高铁站、汽车站、火车站、餐厅或者公园）的服务能力，为第K个居民点的服务需求，常用人口数表示；、表示居民点与医院（学校、高铁站、汽车站、火车站、餐厅或者公园）之间距离或时间；表示阻抗系数；为竞争强度，既医院的影响范围内居民点的总和，用潜在需求点的人口数表达。的值越大，表示空间可达性越好。</p>
                            <div style="text-align:center;">
                                <img class="yjmx" src="../../../assets/img/yjmx.png"> 其中
                                <img class="yjmx" src="../../../assets/img/yjmxV.png">
                            </div>
                            <div style="text-align:center;">
                                <img style="width:1000px;height:500px;" src="../../../assets/img/fytj.png">
                                <div> <img style="width:110px;height:150px;" src="../../../assets/img/jt.png"></div>
                                <img style="width:1000px;height:500px;" src="../../../assets/img/tuijaindata.png">
                            </div>
                        </div>
                    </card>
                    </Col>
                    <!-- <Col span="12">
                <card title="系统实现展示" style="margin-right: 10%">
                    <div id="comprise" style="height: 200px;width: 800px;overflow-y:scroll;">
                        <img class="kdx" src="../../../assets/img/kdx.png">
                    </div>
                </card>
                </Col> -->
                </Row>
            </div>
        </Content>
    </Layout>

</template>

<script>
import SiderMenu from "@/views/main/siderMenu";
export default {
  name: "model",
  components: {
    SiderMenu
  }
};
</script>

<style scoped>
p {
  text-indent: 2em;
}
.yjmx {
  margin-top: 10px;
}
.kdx {
  width: 500px;
  height: 400px;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>