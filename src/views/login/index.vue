<template>
    <div id="login">
        <header>
            <div class="top">
                <div class="line1 float"></div>
                <div class="line2 float"></div>
                <div class="line3 float"></div>
                <div class="line4 float"></div>
                <div class="clearfloat"></div>
            </div>
            <div class="wrapper">
                <div class="logo">
                    <img src="../../assets/img/logo/gh_logo.png" width="60"/>
                    <span class="title">城市商品住宅选择推荐系统（“购房无忧”）
          </span>
                </div>
            </div>
        </header>

        <section>
            <Carousel autoplay :autoplay-speed="3000" loop :radius-dot="true">
                <CarouselItem>
                    <div class="bg1"></div>
                </CarouselItem>
                <CarouselItem>
                    <div class="bg2"></div>
                </CarouselItem>
            </Carousel>
            <div class="login-content_style1">
                <div class="title">
                    <span>欢迎登录</span>
                </div>
                <Form ref="user" :model="user" :rules="rules">
                    <FormItem prop="userAccount">
                        <Input class="input" size="large" v-model="user.userAccount" placeholder="请输入账号">
                        <Icon type="ios-person" :size="20" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="userPwd">
                        <Input class="input" type="password" size="large" v-model="user.userPwd" @on-enter="checkLogin"
                               placeholder="请输入密码">
                        <Icon type="ios-lock" :size="20" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem class="checkbox">
                        <checkbox v-model="user.remember">记住密码</checkbox>
                    </FormItem>
                </Form>
                <div class="login-btn">
                    <Button type="primary" :loading="loading" long size="large" @click="checkLogin">登 录</Button>
                </div>
                <register ref="register" class="register"/>
            </div>
        </section>
    </div>
    </div>
</template>

<script>
    import {login} from "./js/login";
    import Server from "@/core/server";
    import register from "@/views/login/register";
    import { services } from "@/core/config/services";

    export default {
        mixins: [login],
        data() {
            return {};
        },
        components: {
            register
        },
        methods: {
        }
    };
</script>

<style lang="less">
    #login {
        header {
            background: white;
            .top {
                width: 1024px;
                margin: 0 auto;
                div.float {
                    float: left;
                    height: 30px;
                }
                .line1 {
                    width: 20px;
                    background: #006cbc;
                }
                .line2 {
                    width: 80px;
                    background: #298ad2;
                }
                .line3 {
                    width: 200px;
                    background: #63aee6;
                }
                .line4 {
                    width: 500px;
                    background: linear-gradient(to right, #abd1eb, #fff);
                }
                .clearfloat {
                    clear: both;
                }
            }
            .wrapper {
                height: 120px;
                width: 1024px;
                margin-bottom: 20px;
                padding-bottom: 20px;
                margin: 0 auto;
                .logo {
                    float: left;
                    margin-top: 30px;
                    * {
                        vertical-align: middle;
                    }
                    img {
                        vertical-align: middle;
                        margin-right: 20px;
                    }
                    .title {
                        font-family: "微软雅黑";
                        font-size: 26px;
                        font-weight: bold;
                        color: #0088ce;
                        background-image: -webkit-gradient(
                                linear,
                                0 0,
                                0 bottom,
                                from(#005dba),
                                to(rgb(11, 75, 139))
                        );
                        background-clip: text;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }
            }
        }
        section {
            position: relative;
            top: -10px;
            margin: 0 auto;
            background-size: cover;
            width: 100%;
            .bg1 {
                height: 500px;
                background: url("../../assets/img/logo/banner2.jpg") center no-repeat;
                background-color: #016fc3;
            }
            .bg2 {
                height: 500px;
                background: url("../../assets/img/logo/banner1.jpg") center no-repeat;
                background-color: #8ccfed;
            }
        }
        footer {
            position: absolute;
            top: 650px;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: white;
            // background: url("../../img/logo/login-foot.png") center bottom no-repeat;
            .tips {
                margin-top: 20px;
                text-align: center;
                font-size: 14px;
                color: #808080;
                opacity: 0.5;
            }
            .info {
                position: absolute;
                bottom: 40px;
                width: 100%;
                text-align: center;
                font-size: 12px;
                color: #808080;
            }
        }
    }

    .login-content_style1 {
        position: absolute;
        top: 80px;
        right: 105px;
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        .title {
            margin-bottom: 10px;
            line-height: 30px;
            font-size: 16px;
            text-align: center;
            font-weight: bold;
            color: #464c5b;
        }
        .content {
            .login-btn {
                text-align: center;
                button {
                    width: 100%;
                    height: 40px;
                    font-size: 14px;
                }
            }
        }
        //覆盖iview样式
        .ivu-form-item {
            margin-bottom: 18px;
            .ivu-input-group-prepend {
                width: 36px;
                background: white;
            }
            .ivu-input {
                height: 44px;
                width: 180px !important;
            }
        }
    }
</style>
