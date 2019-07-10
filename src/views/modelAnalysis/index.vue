<template>
    <layout>
        <Sider ref="side1" :width='180'>
            <sider-menu/>>
        </Sider>
        <Content>
            <Header :style="{padding: 0}" class="layout-header-bar">
                <Breadcrumb>
                    <Icon :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                    <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}</BreadcrumbItem>
                </Breadcrumb>
            </Header>
            <div style="margin: 0 auto;margin-top: 5px;width:900px;">
                <Card style="height:1500px">
                    <Tabs type="card">
                        <TabPane label="模型XX">
                            <Collapse v-model="value1">
                                <Panel name="4">
                                    模型选择
                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <Checkbox label="">OLS模型</Checkbox>
                                        <Checkbox label="">GWR模型</Checkbox>
                                        <Checkbox label="">Hedonic模型</Checkbox>
                                    </Card>

                                </Panel>
                                <Panel name="1">
                                    指标选择
                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            区位资源
                                        </p>
                                        <CheckboxGroup v-model="jg" style="margin-bottom:15px">
                                            <span style="margin-right:48px">景观</span>
                                            <Checkbox label="绿地公园"></Checkbox>
                                            <Checkbox label="水源"></Checkbox>
                                            <Checkbox label="风景区"></Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="xqjy" style="margin-bottom:15px">
                                            <span style="margin-right:20px">学区教育</span>
                                            <Checkbox label="幼儿园"></Checkbox>
                                            <Checkbox label="小学"></Checkbox>
                                            <Checkbox label="中学"></Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="jt" style="margin-bottom:15px">
                                            <span style="margin-right:48px">交通</span>
                                            <Checkbox label="公交站"></Checkbox>
                                            <Checkbox label="地铁"></Checkbox>
                                            <Checkbox label="主干道"></Checkbox>
                                            <Checkbox label="火车站"></Checkbox>
                                            <Checkbox label="汽车站"></Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="yl" style="margin-bottom:15px">
                                            <span style="margin-right:48px">医疗</span>
                                            <Checkbox label="医院"></Checkbox>
                                            <Checkbox label="卫生站"></Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="shbl" style="margin-bottom:15px">
                                            <span style="margin-right:20px">生活便利</span>
                                            <Checkbox label="菜市场"></Checkbox>
                                            <Checkbox label="药店"></Checkbox>
                                            <Checkbox label="便利店"></Checkbox>
                                            <Checkbox label="超市"></Checkbox>
                                            <Checkbox label="其它生活服务"></Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="gwyl" style="margin-bottom:15px">
                                            <span style="margin-right:20px">购物娱乐</span>
                                            <Checkbox label="大型商场"></Checkbox>
                                            <Checkbox label="餐饮酒店"></Checkbox>
                                            <Checkbox label="文化休闲"></Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="xjys" style="margin-bottom:15px">
                                            <span style="margin-right:20px">消极因素</span>
                                            <Checkbox label="垃圾中转站"></Checkbox>
                                            <Checkbox label="墓地"></Checkbox>
                                            <Checkbox label="火葬场"></Checkbox>
                                            <Checkbox label="电力站"></Checkbox>
                                            <Checkbox label="污水处理厂"></Checkbox>
                                            <Checkbox label="大型污染企业"></Checkbox>
                                            <Checkbox label="铁路沿线"></Checkbox>
                                        </CheckboxGroup>
                                    </Card>

                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            小区条件
                                        </p>
                                        <CheckboxGroup v-model="xqtj" style="margin-bottom:15px">
                                            <Checkbox label="物业管理"></Checkbox>
                                            <Checkbox label="容积率"></Checkbox>
                                            <Checkbox label="绿化率"></Checkbox>
                                            <Checkbox label="车位数量"></Checkbox>
                                        </CheckboxGroup>
                                    </Card>

                                    <Card slot="content" style="width:830px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            住宅条件
                                        </p>
                                        <CheckboxGroup v-model="zztj" style="margin-bottom:15px">
                                            <Checkbox label="装修情况"></Checkbox>
                                            <Checkbox label="住宅类型"></Checkbox>
                                            <Checkbox label="户型"></Checkbox>
                                            <Checkbox label="层高"></Checkbox>
                                            <Checkbox label="面积"></Checkbox>
                                        </CheckboxGroup>
                                    </Card>
                                </Panel>
                                <Panel name="2">
                                    数据选择
                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            时间
                                        </p>
                                        <CheckboxGroup v-model="year" style="margin-bottom:15px">
                                            <Checkbox label="2017年"></Checkbox>
                                            <Checkbox label="2018年"></Checkbox>
                                        </CheckboxGroup>
                                    </Card>
                                    <Card slot="content" style="width:830px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            住宅
                                        </p>

                                        <CheckboxGroup style="margin-bottom:15px">
                                            <span style="margin-right:20px">楼层</span>
                                            <Checkbox label="低层"></Checkbox>
                                            <Checkbox label="多层"></Checkbox>
                                            <Checkbox label="小高层"></Checkbox>
                                            <Checkbox label="高层"></Checkbox>
                                            <Checkbox label="超高层"></Checkbox>
                                        </CheckboxGroup>

                                        <CheckboxGroup style="margin-bottom:15px">
                                            <span style="margin-right:8px">绿化率</span>
                                            <Checkbox label="25%-30%"></Checkbox>
                                            <Checkbox label="30%-40%"></Checkbox>
                                            <Checkbox label="40%-45%"></Checkbox>
                                            <Checkbox label="45%-50%"></Checkbox>
                                        </CheckboxGroup>

                                        <CheckboxGroup style="margin-bottom:15px">
                                            <span style="margin-right:20px">户型</span>
                                            <Checkbox label="平层户型"></Checkbox>
                                            <Checkbox label="错层户型"></Checkbox>
                                            <Checkbox label="跃层户型"></Checkbox>
                                            <Checkbox label="复式户型"></Checkbox>
                                        </CheckboxGroup>

                                        <CheckboxGroup style="margin-bottom:15px">
                                            <span style="margin-right:20px">装修</span>
                                            <Checkbox label="精装修"></Checkbox>
                                            <Checkbox label="普通装修"></Checkbox>
                                            <Checkbox label="毛坯房"></Checkbox>
                                        </CheckboxGroup>
                                    </Card>
                                </Panel>
                                <Panel name="3">
                                    模型参数设置
                                </Panel>
                            </Collapse>
                        </TabPane>
                    </Tabs>
                    <Button type="primary" @click="onSubmit" style="float:right;margin-top:20px">确定</Button>
                </Card>
            </div>
            <router-view/>

            <!-- <Modal v-model="modal1">
                <Card>
                    <strong>
                        <div style="margin-bottom: 10px">表</div>
                    </strong>
                    <div>
                        123
                    </div>
                </Card>
                <Card>
                    <strong>
                        <div style="margin-bottom: 10px">图</div>
                    </strong>
                    <div>
                        456
                    </div>
                </Card>
            </Modal> -->
        </Content>

    </layout>

</template>
<script>
import SiderMenu from "@/views/main/siderMenu";
export default {
  data() {
    return {
      value1: "1",
      jg: ["绿地公园", "水源"],
      xqjy: ["幼儿园", "小学"],
      jt: ["公交站", "地铁"],
      yl: ["医院", "卫生站"],
      shbl: ["菜市场", "药店"],
      gwyl: ["大型商场", "餐饮酒店"],
      xjys: [
        "垃圾中转站",
        "墓地",
      ],
      xqtj: ["容积率"],
      modal1: false
    };
  },
  components: {
    SiderMenu
  },
  methods: {
    onSubmit() {
      this.$router.push("/GWR");
    }
  }
};
</script>
<style>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

