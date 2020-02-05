<template>
    <Layout :style="{height:'100%'}">
        <!--<Sider ref="side1" :width='180'>-->
            <!--<sider-menu/>-->
        <!--</Sider>-->
        <Content>
            <Header :style="{padding: 0}" class="layout-header-bar">
                <Breadcrumb>
                    <Icon :class="rotateIcon" :style="{margin: '0 5px'}" type="md-menu" size="25"></Icon>
                    <BreadcrumbItem v-for="(item,idx) in $route.matched" :key="idx" :to="(item.path)">{{item.name}}
                    </BreadcrumbItem>
                </Breadcrumb>
            </Header>
            <div style="margin: 15px; width: 100%;overflow-y: hidden">
                <Row>
                    <Col span="8">
                        <Card>
                            <div class="avatar">
                                <img style="width: 100px;height: 100px;border-radius: 50%;margin: 20px" src="../../../assets/img/atvter.jpeg" />
                            </div>
                            <div style="text-align: left;margin-left: 10%;font-size: 12px">
                                <div>
                                    <span>昵称：</span>
                                    <span style="margin-left: 5px">{{this.user}}</span>
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
                            <strong>
                                <div style="margin-bottom: 10px;">标签</div>
                            </strong>
                            <div>
                                <Tag checkable color="error">有房</Tag>
                                <Tag checkable color="success">有车</Tag>
                                <Tag checkable color="primary">有存款</Tag>
                                <Tag checkable color="warning">长得漂亮</Tag>
                            </div>
                            <Divider dashed="true" />
                            <strong>
                                <div>详细信息:</div>
                            </strong>
                            <Form style="margin-left: 10%"  :label-width="80">
                                <FormItem label="昵称:">
                                    <span>{{this.user}}</span>
                                </FormItem>
                                <FormItem label="年龄:">
                                    <span>{{this.userage}}</span>
                                </FormItem>
                                <FormItem label="资金:">
                                    <span>{{this.money}}</span>
                                </FormItem>
                                <FormItem label="手机号码:">
                                    <span>{{this.userInfo.userMobile}}</span>
                                </FormItem>
                                <FormItem label="注册时间:">
                                    <span>{{this.userInfo.createTime}}</span>
                                </FormItem>
                                <FormItem label="教育程度:">
                                    <span>{{this.educations}}</span>
                                </FormItem>
                                <FormItem label="用户类型:">
                                    <span>{{this.userInfo.roleName}}</span>
                                </FormItem>
                                <FormItem>
                                    <router-link to="/personal">
                                        <Button style="margin-left: 50%">更新基本信息</Button>
                                    </router-link>
                                </FormItem>
                            </Form>
                        </Card>
                    </Col>
                    <Col span="16">
                        <Card>
                            <strong>
                                <div style="margin-bottom: 10px">我的收藏夹</div>
                            </strong>
                            <div>
                                <Table height="349" stripe :columns="columns1" :data="data1"></Table>
                            </div>
                            <Divider dashed="true" />
                            <strong>
                                <div>我的评论：</div>
                            </strong>
                            <div>
                                <Table height="170" width="100%" stripe :columns="columns2" :data="data2"></Table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Content>
    </Layout>
</template>
<script>
    import SiderMenu from "@/views/main/siderMenu";
    import Server from "@/core/server";
    import { services } from "@/core/config/services";
    import ChangePsd from "@/views/login/components/changepsd";
    import houseInfoId from "@/vuex/store";
    import aroundInfo from "@/vuex/store";
    import housePoint from "@/vuex/store";

    export default {
        components: {
            SiderMenu,
            ChangePsd
        },
        data() {
            return {
                distance: "1000",
                show: true,
                modal1: false,
                columns2: [
                    {
                        align: "center",
                        title: "ID",
                        key: "commentsId"
                    },
                    {
                        align: "center",
                        title: "小区名称",
                        key: "name"
                    },
                    {
                        align: "center",
                        title: "评论内容",
                        key: "houseComments"
                    },
                    {
                        align: "center",
                        title: "分数",
                        key: "houseScore"
                    },
                    {
                        align: "center",
                        title: "评论时间",
                        key: "commentTime"
                    },
                    {
                        title: "操作",
                        key: "action",
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "error",
                                            size: "small"
                                        },
                                        on: {
                                            click: () => {
                                                this.removecomment(params.row, params.index);
                                            }
                                        }
                                    },
                                    "删除"
                                )
                            ]);
                        }
                    }
                ],
                columns1: [
                    {
                        type: "index",
                        width: 60,
                        align: "center",
                        title: "ID"
                    },
                    {
                        align: "center",
                        title: "小区名称",
                        key: "name"
                    },
                    {
                        align: "center",
                        title: "均价",
                        key: "price"
                    },
                    {
                        align: "center",
                        title: "楼层类型",
                        key: "houseHeight"
                    },
                    {
                        align: "center",
                        title: "绿化率%",
                        key: "greeningRate"
                    },
                    {
                        align: "center",
                        title: "地址",
                        key: "address"
                    },
                    {
                        title: "操作",
                        key: "action",
                        width: 150,
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "success",
                                            size: "small"
                                        },
                                        style: {
                                            marginRight: "5px"
                                        },
                                        on: {
                                            click: () => {
                                                this.shows(params.row, params.index);
                                            }
                                        }
                                    },
                                    "查看详情"
                                ),
                                h(
                                    "Button",
                                    {
                                        props: {
                                            type: "error",
                                            size: "small"
                                        },
                                        on: {
                                            click: () => {
                                                this.remove(params.row, params.index);
                                            }
                                        }
                                    },
                                    "删除"
                                )
                            ]);
                        }
                    }
                ],
                data1: [],
                data2: [],
                userInfo: [],
                userage: [],
                money: [],
                educations: [],
                age: [
                    {
                        value: "1",
                        label: "25岁以下"
                    },
                    {
                        value: "2",
                        label: "26-30岁"
                    },
                    {
                        value: "3",
                        label: "31-35岁"
                    },
                    {
                        value: "4",
                        label: "36-40岁"
                    },
                    {
                        value: "5",
                        label: "41-45岁"
                    },
                    {
                        value: "6",
                        label: "46-50岁"
                    },
                    {
                        value: "7",
                        label: "51-55岁"
                    },
                    {
                        value: "8",
                        label: "51-55岁"
                    },
                    {
                        value: "9",
                        label: "60岁以上"
                    }
                ],
                capital: [
                    {
                        value: "1",
                        label: "1w以下"
                    },
                    {
                        value: "2",
                        label: "1w-3w"
                    },
                    {
                        value: "3",
                        label: "3w-5w"
                    },
                    {
                        value: "4",
                        label: "5w-10w"
                    },
                    {
                        value: "5",
                        label: "10w-20w"
                    },
                    {
                        value: "6",
                        label: "20w-50w"
                    },
                    {
                        value: "7",
                        label: "80w-150w"
                    },
                    {
                        value: "8",
                        label: "80w-150w"
                    },
                    {
                        value: "9",
                        label: "150w以上"
                    }
                ],
                education: [
                    {
                        value: "1",
                        label: "小学及以下"
                    },
                    {
                        value: "2",
                        label: "初中"
                    },
                    {
                        value: "3",
                        label: "高中"
                    },
                    {
                        value: "4",
                        label: "中专"
                    },
                    {
                        value: "5",
                        label: "大专"
                    },
                    {
                        value: "6",
                        label: "本科"
                    },
                    {
                        value: "7",
                        label: "硕士"
                    },
                    {
                        value: "8",
                        label: "博士"
                    },
                    {
                        value: "9",
                        label: "博士以上"
                    }
                ],
                user: "",
                houseShape:[],
                houseId:[],
            };
        },
        mounted() {
            this.getTable();
            this.getInfo();
            this.personalComments();
            var roleid = JSON.parse(sessionStorage.getItem("roleId"));
            if (roleid === "R0001" || roleid === "R0002") {
                this.show = true;
            } else {
                this.show = false;
            }
        },
        methods: {
            getInfo() {
                var this_ = this;
                var user = JSON.parse(sessionStorage.getItem("userAccount"));
                this.user = user;
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                Server.get({
                    url: services.getInfo,
                    params: {
                        username: user,
                        userId: userId
                    }
                }).then(rsp => {
                    this.userInfo = rsp.data;
                    // this.userage = rsp.data.userEducationLevel;
                    for (let i = 1; i < 9; i++) {

                        if (this.userInfo.age == i) {
                            this.userage = this.age[i-1].label;
                        }
                    }
                    for (let i = 1; i <= 9; i++) {
                        if (this.userInfo.userMoney == i) {
                            this.money = this.capital[i-1].label;
                        }
                    }
                    for (let i = 0; i < 9; i++) {
                        if (this.userInfo.userEducationLevel == i) {
                            this.educations = this.education[i-1].label;
                        }
                    }
                });
            },
            getTable() {
                var this_ = this;
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                Server.get({
                    url: services.getCollectHouseInfo,
                    params: {
                        userId: userId
                    }
                }).then(rsp => {
                    this_.data1 = rsp.data;
                });
            },
            onCancel() {
                this.modal1 = false;
            },
            onRefresh() {
                this.getTable();
                this.personalComments();
            },
            onSubmit() {
                this.$refs.changepsd.onSubmit();
            },
            shows(currentRow, index) {
                currentRow.Index = index;
                this.selectedRow = currentRow;
                var row = this.selectedRow;
                this.houseName = row.name;
                this.houseId = row.houseId;
                housePoint.commit("housePoint", this.houseShape);
                Server.get({
                    url: services.compareHouseDetails,
                    params: {
                        houseId:  this.houseId
                    }
                }).then(rsp => {
                    if (rsp.status === 1) {
                        houseInfoId.commit("houseInfoId", rsp);
                    }
                }).then(
                    Server.get({
                        url: services.road,
                        params: {
                            name: this.houseName,
                            tableName: "BUSSTATION",distance:this.distance
                        }
                    }).then(rsp => {
                        if (rsp.status === 1) {
                            aroundInfo.commit("aroundInfo", rsp);
                            aroundInfo.commit("housueName", this.houseName);
                            this.$router.push("/houseinfo");
                        }
                    })
                );
            },
            personalComments() {
                var this_ = this;
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                Server.get({
                    url: services.personalComments,
                    params: {
                        userId: userId
                    }
                }).then(rsp => {
                    if (rsp.status === 1) {
                        this_.data2 = rsp.data;
                    }
                });
            },
            remove(currentRow, index) {
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                currentRow.Index = index;
                this.selectedRow = currentRow;
                var row = this.selectedRow;
                if (!row) {
                    this.$Message.warning("请选择需要删除的行");
                } else {
                    this.$Modal.confirm({
                        title: "提示",
                        content: "是否永久删除此数据?",
                        onOk: () => {
                            // var id = row.houseId;
                            var name = row.name;
                            Server.get({
                                url: services.delCollectHouse,
                                params: {
                                    userId: userId,
                                    houseName: name
                                }
                            }).then(rsp => {
                                if (rsp.status == 1) {
                                    this.$Message.success(rsp.message);
                                    this.onRefresh();
                                } else {
                                    this.$Message.error(rsp.message);
                                }
                            });
                        },
                        onCancel: () => {}
                    });
                }
            },
            removecomment(currentRow, index) {
                var userId = JSON.parse(sessionStorage.getItem("userId"));
                currentRow.Index = index;
                this.selectedRow = currentRow;
                var row = this.selectedRow;
                if (!row) {
                    this.$Message.warning("请选择需要删除的行");
                } else {
                    this.$Modal.confirm({
                        title: "提示",
                        content: "是否永久删除此数据?",
                        onOk: () => {
                            debugger;
                            var id = row.commentsId;
                            Server.get({
                                url: services.delUserComments,
                                params: {
                                    userId: userId,
                                    commentsId : id
                                }
                            }).then(rsp => {
                                if (rsp.data.status == 1) {
                                    this.onRefresh();
                                    this.$Message.success(rsp.data.message);
                                } else {
                                    this.$Message.error(rsp.data.message);
                                }
                            });
                        },
                        onCancel: () => {}
                    });
                }
            }
        }
    };
</script>
<style lang="less" scoped>
    .avatar {
        text-align: center;
    }
    .ivu-tabs-bar {
        margin-bottom: 0;
    }
    .layout {
        // border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }

    .layout-header-bar {
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }

    .layout-logo-left {
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }

    .menu-icon {
        transition: all 0.3s;
    }

    .rotate-icon {
        transform: rotate(-90deg);
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width 0.2s ease 0.2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size 0.2s ease, transform 0.2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width 0.2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
        vertical-align: middle;
        font-size: 22px;
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
