<template>
    <div style="height: 1000px;margin-top: 60px;width: 100%">
        <div style="border: 1px solid #dcdee2;width: 900px;margin: 0 auto">
            <Tabs value="name1">
                <TabPane label="楼盘首页" name="name2">
                </TabPane>
                <TabPane label="详细信息" name="name1">
                    <div style="padding: 14px">
                        <h3>基本信息</h3>
                        <table class="table-noline">
                            <tbody>
                            <tr>
                                <td class="label-l">楼盘名称：</td>
                                <td valign="top" class="text-l"> 海上明珠</td>
                                <td class="label-r">建成年代：</td>
                                <td valign="top" class="text-r">暂无数据</td>
                            </tr>
                            <tr>
                                <td class="label-l">物业类型：</td>
                                <td valign="top" class="text-l"> 普通住宅 , 自住型商品房</td>
                                <td class="label-r">项目特色：</td>
                                <td valign="top" class="text-r"> 投资地产 , 河景地产 , 名企盘</td>
                            </tr>
                            <tr>
                                <td class="label-l">建筑类型：</td>
                                <td valign="top" class="text-l"> 板楼 , 高层</td>
                                <td class="label-r">装修标准：</td>
                                <td valign="top" class="text-r">暂无数据</td>
                            </tr>
                            <tr>
                                <td class="label-l">产权年限：</td>
                                <td valign="top" class="text-l">70年</td>
                                <td class="label-r">装修情况：</td>
                                <td valign="top" class="text-r"> 毛坯</td>
                            </tr>
                            <tr>
                                <td class="label-l">开发商：</td>
                                <td valign="top" class="text-l"> 烟台海上明珠置业有限公司</td>
                                <td class="label-r">环线位置：</td>
                                <td valign="top" class="text-r">暂无数据</td>
                            </tr>
                            <tr>
                                <td class="label-l">投资商：</td>
                                <td valign="top" class="text-l"> 暂无数据</td>
                            </tr>
                            <tr>
                                <td class="label-l">品牌商：</td>
                                <td valign="top" class="text-l"> 暂无数据</td>
                            </tr>
                            <tr>
                                <td class="label-l">楼盘地址：</td>
                                <td valign="top" class="text-l">北马路与西南河交汇处</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane label="户型" name="name3">
                </TabPane>
                <TabPane label="楼盘点评" name="name4">
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "houseinfo"
    }
</script>

<style lang="less"  scoped>
    .label-l {
        min-width: 70px;
        color: #666;
        text-align: right;
        vertical-align: top;
        white-space: nowrap;
        padding: 5px 0;
        line-height: 24px;
    }
    .label-r {
        width: 74px;
        text-align: right;
        color: #666;
        vertical-align: top;
        white-space: nowrap;
        padding: 5px 0;
        line-height: 24px;
    }
    .text-l {
        width: 366px;
        line-height: 24px;
        vertical-align: top;
        padding: 5px 40px 5px 4px;
    }
    .text-r {
        width: 286px;
        line-height: 24px;
        overflow: hidden;
        display: inline-block;
    }
    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    td{
        margin: 5px;
    }

</style>