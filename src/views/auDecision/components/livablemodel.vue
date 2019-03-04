<template>
    <div style="margin-top: 100px">
        <Content>
        <div class="data-view" style="margin-top: 55px;overflow: hidden;">
            <Row :gutter="30">
                <Col  span="12">
                    <card title="宜居模型介绍" style="margin-left: 10%">
                        <div id="comprise"  style="height: 190px;width: 600px">                        
                            宜居模型是按照国家颁布的宜居标准。主要是通
                        过对小区的生活便宜度、环境优美度、公共安全度、社
                        区文明度等四个方面经行评价。本系统的模型主要通
                        过比较小区的生活便宜度。生活便宜度主要是比较小
                        区到周围基础设施的距离，基础设施主要包括学校、公
                        园、医院、超市等
                        </div>
                    </card>
                </Col>
                <Col span="12">
                    <card title="模型方法" style="margin-right: 10%">
                        <div id="comprise"  style="height: 190px;width: 600px">                        
                        <p>A 小区分数 =［A 距离最近公园距离/
                         A 距离最近公园距离+B 最近公园距离) +A 距离最
                        近医院距离/( A 距离最近医院距离+B 距离最近医院
                        距离) +A 距离最近超市距离/( A 距离最近超市距离+
                         距离最近超市距离) +A 距离最近学校距离 / ( A 距离
                        最近学校距离+B 距离最近学校距离) ］* 10+环境优
                        美度( 满分 20 分) +公共安全度( 满分 20 分) +社区文
                        明度( 满分 20) 。
                        </p>
                        <p>
                         小区分数 =［B 距离最近公园距离 / ( A 距离最近
                        公园距离+B 最近公园距离) +B 距离最近医院距离/( A
                        距离最近医院距离+B 距离最近医院距离) +A 距离最近
                        超市距离/( B 距离最近超市距离+B 距离最近超市距
                        离) +B 距离最近学校距离/( A 距离最近学校距离+B 距
                        离最近学校距离) ］* 10+环境优美度( 满分 20 分) +公
                        共安全度( 满分 20 分) +社区文明度( 满分 20)
                        </p>
                        </div>
                    </card>
                </Col>
            </Row>
            <br>
            <Row :gutter="30">
                <Col span="12">
                    <card title="模型实现" style="margin-left: 10%">
                        <div id="comprise"  style="height: 190px;width: 600px">                        
                            房源比较界面图的左右两侧分别输入两
                    个小区的名称，系统将会查找并计算该小区生活便宜
                    度( 距离最近学校公园、医院、超市、学校距离) ，环境
                    优美度，公共安全度，社区文明度的数据，按照宜居模
                    型中提供的计算公式得出两个小区的宜居指数，通过
                    系统提供的客观数据，方便用户做出选择。
                    </div>
                    </card>
                </Col>
                <Col span="12">
                    <card title="模型展示" style="margin-right: 10%">
                        <div id="comprise"  style="height: 190px;width: 600px"></div>
                    </card>
                </Col>
            </Row>
        </div>
    </Content>
    </div>

</template>

<script>
    export default {
        name: "livablemodel"
    }
</script>

<style scoped>

</style>