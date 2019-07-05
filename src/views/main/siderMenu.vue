   <template>
    <Sider ref="side1" :width='180'>
        <Menu active-name="" theme="dark" width="auto" :open-names="['']">
            <router-link to="/menu">
                <MenuItem name="1-1">
                <Icon type="ios-navigate"></Icon>
                <span>首页</span>
                </MenuItem>
            </router-link>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="md-speedometer" /> 数据展示
                </template>
                <router-link to="/data">
                    <MenuItem name="2-1">
                    <span style="font-size: 13px">数据统计</span>
                    </MenuItem>
                </router-link>
                <router-link to="/data/dataDeatils">
                    <MenuItem name="2-2">
                    <span style="font-size: 13px">数据查询</span>
                    </MenuItem>
                </router-link>
            </Submenu>
            <router-link to="/infoSearch">
                <MenuItem name="3-1">
                <Icon type="md-search" />
                <span>信息查询</span>
                </MenuItem>
            </router-link>
            <Submenu name="4">
                <template slot="title">
                    <Icon type="md-globe" /> 区位资源
                </template>
                <router-link to="/locationResources">
                    <MenuItem name="4-1">
                    <span>学区资源</span>
                    </MenuItem>
                </router-link>
                <router-link to="/medicalResources">
                    <MenuItem name="4-2">
                    <span>医疗资源</span>
                    </MenuItem>
                </router-link>
                <router-link to="/greenlResources">
                    <MenuItem name="4-3">
                    <span>绿地资源</span>
                    </MenuItem>
                </router-link>
                <router-link to="/businessResources">
                    <MenuItem name="4-4">
                    <span>商业资源</span>
                    </MenuItem>
                </router-link>
            </Submenu>
            <router-link to="/recommendation/factor">
                <MenuItem name="5-1">
                <Icon type="md-pin" />
                <span>购房选址</span>
                </MenuItem>
            </router-link>
            <router-link to="/recommendation/housingPreference">
                <MenuItem name="6-1">
                <Icon type="md-thumbs-up" />
                <span>房源推荐</span>
                </MenuItem>
            </router-link>

            <Submenu name="7">
                <template slot="title">
                    <Icon type="ios-radio" /> 房价分析
                </template>
                <router-link to="/priceAnalysis">
                    <MenuItem name="7-1">
                    <span style="font-size: 13px">价格分析</span>
                    </MenuItem>
                </router-link>
                <router-link to="/heatMap2d">
                    <MenuItem name="7-2">
                    <span style="font-size: 13px">二维热力图</span>
                    </MenuItem>
                </router-link>
                <router-link to="/heatMap">
                    <MenuItem name="7-3">
                    <span style="font-size: 13px">三维热力图</span>
                    </MenuItem>
                </router-link>
            </Submenu>
            <Submenu name="8">
                <template slot="title">
                    <Icon type="md-analytics" /> 房价预测
                </template>
                <router-link to="/Kriging">
                    <MenuItem name="8-1">
                    <span style="font-size: 13px">克里金插值预测</span>
                    </MenuItem>
                </router-link>
                <router-link to="/GWR">
                    <MenuItem name="8-2">
                    <span style="font-size: 13px">GWR模型</span>
                    </MenuItem>
                </router-link>
                <router-link to="/priceForecast">
                    <MenuItem name="8-3">
                    <span style="font-size: 13px">房价预测</span>
                    </MenuItem>
                </router-link>
            </Submenu>
            <router-link to="/userManager">
                <MenuItem name="9-1" v-if="show">
                <Icon type="md-contacts" />
                <span>用户管理</span>
                </MenuItem>
            </router-link>
            <Submenu name="10">
                <template slot="title">
                    <Icon type="md-paper" /> 用户手册
                </template>
                <router-link to="/auDecision/usersManual">
                    <MenuItem name="10-1">
                    <span style="font-size: 13px">用户手册</span>
                    </MenuItem>
                </router-link>
                <router-link to="/auDecision/livablemodel">
                    <MenuItem name="10-2">
                    <span style="font-size: 13px">宜居模型</span>
                    </MenuItem>
                </router-link>
                <router-link to="/auDecision/model">
                    <MenuItem name="10-3">
                    <span style="font-size: 13px">引力模型</span>
                    </MenuItem>
                </router-link>
            </Submenu>
            <router-link to="/personalcenter">
                <MenuItem name="11-1">
                <Icon type="md-person" />
                <span>个人中心</span>
                </MenuItem>
            </router-link>
        </Menu>
    </Sider>
</template>
          
  