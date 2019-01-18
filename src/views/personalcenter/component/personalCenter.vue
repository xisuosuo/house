<template>
    <Layout >
        <Content>
            <div style="margin: 0 auto;margin-top: 70px;width: 1200px;height: 1024px;overflow-y: auto">
                <Row>
                    <Col span="8">
                        <Card>
                            <div class="avatar">
                                <img style="width: 100px;height: 100px;border-radius: 50%;margin: 20px"  src="../../../assets/img/u=3085477210,754180516&fm=11&gp=0.jpg" />
                            </div>
                            <div style="text-align: left;margin-left: 10%;font-size: 12px">
                                <div>
                                    <span>昵称：</span>
                                    <span style="margin-left: 5px">林噙霜</span>
                                </div>
                                <div>
                                    <span>地址：</span>
                                    <span style="margin-left: 5px">安徽滁州市</span>
                                </div>
                                <div>
                                    <span>个性签名：</span>
                                    <span style="margin-left: 5px">这个人很懒，什么都没有留下</span>
                                </div>
                            </div>
                            <Divider dashed="true" />
                            <strong><p style="margin-bottom: 10px">标签</p></strong>
                            <div>
                                <Tag checkable color="error">有房</Tag>
                                <Tag checkable color="success">有车</Tag>
                                <Tag checkable color="primary">有存款</Tag>
                                <Tag checkable color="warning">长得漂亮</Tag>
                                <Button icon="ios-add" type="dashed" size="small">添加标签</Button>
                            </div>
                            <Divider dashed="true" />
                            <strong><p>详细信息:</p></strong>
                            <Form style="margin-left: 10%" :model="formItem" :label-width="80">
                                <FormItem label="昵称:">
                                   <span>林噙霜</span>
                                </FormItem>
                                <FormItem label="年龄:">
                                   <span>21岁</span>
                                </FormItem>
                                <FormItem label="工作类型:">
                                   <span>程序猿</span>
                                </FormItem>
                                <FormItem label="工作地址:">
                                   <span>地信楼325</span>
                                </FormItem>
                                <FormItem label="婚姻状况:">
                                   <span>未婚</span>
                                </FormItem>
                                <FormItem label="购房类型:">
                                   <span>投资型</span>
                                </FormItem>
                                <FormItem label="用户类型:">
                                   <span>超级VIP用户</span>
                                </FormItem>
                                <FormItem >
                                    <router-link to="/personal">
                                    <Button style="margin-left: 50%">更新基本信息</Button>
                                    </router-link>
                                </FormItem>
                            </Form>
                        </Card>
                    </Col>
                    <Col span="16">
                        <Card>
                            <strong><p style="margin-bottom: 10px">我的收藏夹</p></strong>
                            <div>
                                <Table  height="311" stripe :columns="columns1" :data="data1"></Table>
                            </div>
                            <Divider dashed="true" />
                            <strong><p>安全设置：</p></strong>
                            <div style="font-size: 13px">
                                <div style="margin-left: 10%">
                                    <p>账户密码</p>
                                    <span>当前密码强度：<span style="color: green">强</span></span>
                                    <a name="changePsd" divided style="color: #2d8cf0;float: right">修改密码</a>
                                    <Divider dashed="true" />
                                    <Modal v-model="modal" title="修改密码" width="400">
                                        <change-psd ref="changepsd" @on-modal-close="modal=false" v-if="modal"></change-psd>
                                        <div class="modal-footer" slot="footer" v-if="modal">
                                            <Button type="text" @click="onCancel">取消</Button>
                                            <Button type="primary" @click="onSubmit">确定</Button>
                                        </div>
                                    </Modal>
                                </div>
                                <div style="margin-left: 10%">
                                    <p>密保手机</p>
                                    <span>已绑定手机：<span>183****6526</span></span>
                                    <a style="color: #2d8cf0;float: right">修改手机</a>
                                    <Divider dashed="true" />
                                </div>
                                <div style="margin-left: 10%">
                                    <p>绑定邮箱</p>
                                    <span>已绑定邮箱：<span style="color: green">183****6526@qq.com</span></span>
                                    <a style="color: #2d8cf0;float: right">修改邮箱</a>
                                    <Divider dashed="true" />
                                </div>
                            </div>

                        </Card>
                    </Col>
                </Row>
            </div>
        </Content>
    </Layout >
</template>
<script>
    import Server from "@/core/server";
    import { services } from "@/core/config/services";
    import ChangePsd from "@/views/login/components/changepsd";
    export default {
        data() {
            return {
                modal: false,
                columns1: [
                    {
                        align: "center",
                        title: "小区名称",
                        key: "name"
                    },
                    {
                        align: "center",
                        title: "地址",
                        key: "education"
                    },
                    {
                        align: "center",
                        title: "均价",
                        key: "education"
                    },
                    {
                        align: "center",
                        title: "教育资源可达性",
                        key: "education"
                    },
                    {
                        align: "center",
                        title: "医疗资源可达性",
                        key: "Medical"
                    },
                    {
                        align: "center",
                        title: "交通资源可达性",
                        key: "traffic"
                    },
                    {
                        align: "center",
                        title: "休闲娱乐可达性",
                        key: "entertainment"
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看详情'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                data1: [
                    {
                        name: "山水人家",
                        education: 4555,
                        Medical: "52",
                        traffic: "03",
                        entertainment: "53"
                    },
                    {
                        name: "丰乐小区",
                        education: 6666,
                        Medical: "35",
                        traffic: "33",
                        entertainment: "45"
                    },
                    {
                        name: "山水人家",
                        education: 4555,
                        Medical: "52",
                        traffic: "03",
                        entertainment: "53"
                    },
                    {
                        name: "丰乐小区",
                        education: 6666,
                        Medical: "35",
                        traffic: "33",
                        entertainment: "45"
                    },
                    {
                        name: "丰乐小区",
                        education: 6666,
                        Medical: "35",
                        traffic: "33",
                        entertainment: "45"
                    },
                    {
                        name: "山水人家",
                        education: 4555,
                        Medical: "52",
                        traffic: "03",
                        entertainment: "53"
                    },
                    {
                        name: "丰乐小区",
                        education: 6666,
                        Medical: "35",
                        traffic: "33",
                        entertainment: "45"
                    }
                ]
            }
        },
        mounted() {

        },
        methods: {
            onCancel() {
                this.modal = false;
            },
            onSubmit() {
                this.$refs.changepsd.onSubmit();
            },
            show () {
               this.$router.push("/collection");
            },
            remove (index) {
                this.data1.splice(index, 1);
            }
        }
    };
</script>
<style lang="less">
.avatar{
   text-align: center;
}
.ivu-form-item {
    margin-bottom: 1px;
}
.ivu-divider-horizontal {
    display: block;
    height: 1px;
    width: 100%;
    min-width: 100%;
    margin: 15px 0;
    clear: both;
}
</style>