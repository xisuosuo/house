<template>
    <layout>
        <Sider ref="side1" :width='180'>
            <Menu active-name="" theme="dark" width="auto" :open-names="['']">
                <router-link to="/menu">
                    <MenuItem name="8-1">
                    <Icon type="ios-navigate"></Icon>
                    <span>首页</span>
                    </MenuItem>
                </router-link>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="md-analytics" /> 数据展示
                    </template>
                    <router-link to="/data">
                        <MenuItem name="1-1">
                        <span style="font-size: 13px">数据统计</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/data/dataDeatils">
                        <MenuItem name="1-2">
                        <span style="font-size: 13px">数据查询</span>
                        </MenuItem>
                    </router-link>
                </Submenu>
                <router-link to="/recommendation/housingPreference">
                    <MenuItem name="2-1">
                    <Icon type="md-thumbs-up" />
                    <span>房源推荐</span>
                    </MenuItem>
                </router-link>
                <router-link to="/recommendation/factor">
                    <MenuItem name="2-2">
                    <Icon type="md-pin" />
                    <span>购房选址</span>
                    </MenuItem>
                </router-link>
                <Submenu name="8">
                    <template slot="title">
                        <Icon type="ios-radio" /> 房价分析
                    </template>
                    <router-link to="/priceAnalysis">
                        <MenuItem name="8-2">
                        <span style="font-size: 13px">价格分析</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/heatMap2d">
                        <MenuItem name="8-1">
                        <span style="font-size: 13px">二维热力图</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/heatMap">
                        <MenuItem name="8-3">
                        <span style="font-size: 13px">三维热力图</span>
                        </MenuItem>
                    </router-link>
                </Submenu>
                <router-link to="/infoSearch">
                    <MenuItem name="4-1">
                    <Icon type="md-search" />
                    <!-- <span>信息查询</span> -->
                    </MenuItem>
                </router-link>
                <router-link to="/locationResources">
                    <MenuItem name="2-2">
                    <Icon type="md-pin" />
                    <span>区位资源</span>
                    </MenuItem>
                </router-link>
                <router-link to="/userManager">
                    <MenuItem name="4-2" v-if="show">
                    <Icon type="md-contacts" />
                    <span>用户管理</span>
                    </MenuItem>
                </router-link>
                <router-link to="/personalcenter">
                    <MenuItem name="5-1">
                    <Icon type="md-person" />
                    <span>个人中心</span>
                    </MenuItem>
                </router-link>
                <router-link to="/locationResources">
                    <MenuItem name="2-2">
                    <Icon type="md-pin" />
                    <span>区位资源</span>
                    </MenuItem>
                </router-link>
                <Submenu name="6">
                    <template slot="title">
                        <Icon type="md-paper" /> 用户手册
                    </template>
                    <router-link to="/auDecision/usersManual">
                        <MenuItem name="6-1">
                        <span style="font-size: 13px">用户手册</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/auDecision/livablemodel">
                        <MenuItem name="6-2">
                        <span style="font-size: 13px">宜居模型</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/auDecision/model">
                        <MenuItem name="6-3">
                        <span style="font-size: 13px">引力模型</span>
                        </MenuItem>
                    </router-link>
                </Submenu>
            </Menu>
        </Sider>
        <Content>
            <div style="margin: 0 auto;margin-top: 5px;width:900px;">
                <Card style="height:1500px">
                    <Tabs type="card">
                        <TabPane label="OLS模型">
                            <Collapse v-model="value1">
                                <Panel name="1">
                                    指标选择
                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            区位资源
                                        </p>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">景观</span>
                                            <Checkbox label="">绿地公园</Checkbox>
                                            <Checkbox label="">水源</Checkbox>
                                            <Checkbox label="">风景区</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">学区教育</span>
                                            <Checkbox label="">幼儿园</Checkbox>
                                            <Checkbox label="">小学</Checkbox>
                                            <Checkbox label="">中学</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">交通</span>
                                            <Checkbox label="">公交站</Checkbox>
                                            <Checkbox label="">地铁</Checkbox>
                                            <Checkbox label="">主干道</Checkbox>
                                            <Checkbox label="">火车站</Checkbox>
                                            <Checkbox label="">汽车站</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">医疗</span>
                                            <Checkbox label="">医院</Checkbox>
                                            <Checkbox label="">卫生站</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">生活便利</span>
                                            <Checkbox label="">菜市场</Checkbox>
                                            <Checkbox label="">药店</Checkbox>
                                            <Checkbox label="">便利店</Checkbox>
                                            <Checkbox label="">超市</Checkbox>
                                            <Checkbox label="">其它生活服务</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">购物娱乐</span>
                                            <Checkbox label="">大型商场</Checkbox>
                                            <Checkbox label="">餐饮酒店</Checkbox>
                                            <Checkbox label="">文化休闲</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">消极因素</span>
                                            <Checkbox label="">垃圾中转站</Checkbox>
                                            <Checkbox label="">墓地</Checkbox>
                                            <Checkbox label="">火葬场</Checkbox>
                                            <Checkbox label="">电力站</Checkbox>
                                            <Checkbox label="">污水处理厂</Checkbox>
                                            <Checkbox label="">大型污染企业</Checkbox>
                                            <Checkbox label="">铁路沿线</Checkbox>
                                        </CheckboxGroup>
                                    </Card>

                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            小区条件
                                        </p>
                                        <Checkbox label="">物业管理</Checkbox>
                                        <Checkbox label="">容积率</Checkbox>
                                        <Checkbox label="">绿化率</Checkbox>
                                        <Checkbox label="">车位数量</Checkbox>
                                    </Card>

                                    <Card slot="content" style="width:830px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            住宅条件
                                        </p>
                                        <Checkbox label="">装修情况</Checkbox>
                                        <Checkbox label="">住宅类型</Checkbox>
                                        <Checkbox label="">户型</Checkbox>
                                        <Checkbox label="">层高</Checkbox>
                                        <Checkbox label="">面积</Checkbox>
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
                                            <Checkbox label="">2017年</Checkbox>
                                            <Checkbox label="">2018年</Checkbox>
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
                        <TabPane label="GWR模型">
                            <Collapse v-model="value1">
                                <Panel name="1">
                                    指标选择
                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            区位资源
                                        </p>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">景观</span>
                                            <Checkbox label="">绿地公园</Checkbox>
                                            <Checkbox label="">水源</Checkbox>
                                            <Checkbox label="">风景区</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">学区教育</span>
                                            <Checkbox label="">幼儿园</Checkbox>
                                            <Checkbox label="">小学</Checkbox>
                                            <Checkbox label="">中学</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">交通</span>
                                            <Checkbox label="">公交站</Checkbox>
                                            <Checkbox label="">地铁</Checkbox>
                                            <Checkbox label="">主干道</Checkbox>
                                            <Checkbox label="">火车站</Checkbox>
                                            <Checkbox label="">汽车站</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">医疗</span>
                                            <Checkbox label="">医院</Checkbox>
                                            <Checkbox label="">卫生站</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">生活便利</span>
                                            <Checkbox label="">菜市场</Checkbox>
                                            <Checkbox label="">药店</Checkbox>
                                            <Checkbox label="">便利店</Checkbox>
                                            <Checkbox label="">超市</Checkbox>
                                            <Checkbox label="">其它生活服务</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">购物娱乐</span>
                                            <Checkbox label="">大型商场</Checkbox>
                                            <Checkbox label="">餐饮酒店</Checkbox>
                                            <Checkbox label="">文化休闲</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">消极因素</span>
                                            <Checkbox label="">垃圾中转站</Checkbox>
                                            <Checkbox label="">墓地</Checkbox>
                                            <Checkbox label="">火葬场</Checkbox>
                                            <Checkbox label="">电力站</Checkbox>
                                            <Checkbox label="">污水处理厂</Checkbox>
                                            <Checkbox label="">大型污染企业</Checkbox>
                                            <Checkbox label="">铁路沿线</Checkbox>
                                        </CheckboxGroup>
                                    </Card>

                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            小区条件
                                        </p>
                                        <Checkbox label="">物业管理</Checkbox>
                                        <Checkbox label="">容积率</Checkbox>
                                        <Checkbox label="">绿化率</Checkbox>
                                        <Checkbox label="">车位数量</Checkbox>
                                    </Card>

                                    <Card slot="content" style="width:830px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            住宅条件
                                        </p>
                                        <Checkbox label="">装修情况</Checkbox>
                                        <Checkbox label="">住宅类型</Checkbox>
                                        <Checkbox label="">户型</Checkbox>
                                        <Checkbox label="">层高</Checkbox>
                                        <Checkbox label="">面积</Checkbox>
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
                                            <Checkbox label="">2017年</Checkbox>
                                            <Checkbox label="">2018年</Checkbox>
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
                        <TabPane label="Hedonic模型">
                            <Collapse v-model="value1">
                                <Panel name="1">
                                    指标选择
                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            区位资源
                                        </p>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">景观</span>
                                            <Checkbox label="">绿地公园</Checkbox>
                                            <Checkbox label="">水源</Checkbox>
                                            <Checkbox label="">风景区</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">学区教育</span>
                                            <Checkbox label="">幼儿园</Checkbox>
                                            <Checkbox label="">小学</Checkbox>
                                            <Checkbox label="">中学</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">交通</span>
                                            <Checkbox label="">公交站</Checkbox>
                                            <Checkbox label="">地铁</Checkbox>
                                            <Checkbox label="">主干道</Checkbox>
                                            <Checkbox label="">火车站</Checkbox>
                                            <Checkbox label="">汽车站</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:48px">医疗</span>
                                            <Checkbox label="">医院</Checkbox>
                                            <Checkbox label="">卫生站</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">生活便利</span>
                                            <Checkbox label="">菜市场</Checkbox>
                                            <Checkbox label="">药店</Checkbox>
                                            <Checkbox label="">便利店</Checkbox>
                                            <Checkbox label="">超市</Checkbox>
                                            <Checkbox label="">其它生活服务</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">购物娱乐</span>
                                            <Checkbox label="">大型商场</Checkbox>
                                            <Checkbox label="">餐饮酒店</Checkbox>
                                            <Checkbox label="">文化休闲</Checkbox>
                                        </CheckboxGroup>
                                        <CheckboxGroup v-model="fruit" style="margin-bottom:15px">
                                            <span style="margin-right:20px">消极因素</span>
                                            <Checkbox label="">垃圾中转站</Checkbox>
                                            <Checkbox label="">墓地</Checkbox>
                                            <Checkbox label="">火葬场</Checkbox>
                                            <Checkbox label="">电力站</Checkbox>
                                            <Checkbox label="">污水处理厂</Checkbox>
                                            <Checkbox label="">大型污染企业</Checkbox>
                                            <Checkbox label="">铁路沿线</Checkbox>
                                        </CheckboxGroup>
                                    </Card>

                                    <Card slot="content" style="width:830px;margin-bottom:10px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            小区条件
                                        </p>
                                        <Checkbox label="">物业管理</Checkbox>
                                        <Checkbox label="">容积率</Checkbox>
                                        <Checkbox label="">绿化率</Checkbox>
                                        <Checkbox label="">车位数量</Checkbox>
                                    </Card>

                                    <Card slot="content" style="width:830px">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            住宅条件
                                        </p>
                                        <Checkbox label="">装修情况</Checkbox>
                                        <Checkbox label="">住宅类型</Checkbox>
                                        <Checkbox label="">户型</Checkbox>
                                        <Checkbox label="">层高</Checkbox>
                                        <Checkbox label="">面积</Checkbox>
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
                                            <Checkbox label="">2017年</Checkbox>
                                            <Checkbox label="">2018年</Checkbox>
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
                </Card>
            </div>
            <router-view/>
        </Content>

    </layout>

</template>
<script>
export default {
  data() {
    return {
      value1: "1"
    };
  }
};
</script>
<style>
</style>

