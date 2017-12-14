<template>
    <div class="tmpl">
        <!-- 1.0 页面头，菜单导航代码 -->
        <!-- 头部搜索框 -->
        <header class="header-con header-con1">
            <div class="header">
                <div class="header-content">
                    <div class="SZY-SUBSITE">
                        <a class="city" href="javascript:;">秦皇岛站</a>
                    </div>
                    <div class="box-search current">
                        <a class="react" href="javascript:void(0)">
                            <i class="icon-search iconfont"></i>
                            <span class="single-line"> 请输入要搜索的关键字 </span>
                        </a>
                    </div>
                    <div class="nav-wap-right">
                        <div class="qrcode SZY-SCANQRCODE-RIGHT"></div>
                        <a href="javascript:;">
                            <em class="top-right">
                                <i class="message-num SZY-INTERNAL-COUNT">0</i>
                            </em>
                            <span class="bottom-nav">消息</span>
                        </a>
                    </div>

                </div>
            </div>
            <div style="height: 50px; line-height: 50px;" id="bottom_div"></div>
        </header>
        <!--轮播图-->
        <div class="lbt">
            <yd-slider autoplay="4000" :loop="isTure" speed="600">
                <yd-slider-item v-for="(item,index) in gImg" :key="index">
                    <a href="javascript:;">
                        <img v-lazy="item.src">
                    </a>
                </yd-slider-item>
            </yd-slider>
        </div>
        <!--导航栏-->
        <nav class="nav-list nav-col05-list">
            <ul>
                <li v-for="(item,index) in navImg" :key="index">
                    <a href="javascript:;">
                        <img class="" alt="item.title" v-lazy="item.src">
                        <span>{{item.title}}</span>
                    </a>
                </li>
            </ul>

        </nav>
        <!--商城热点-->
<div class="shop-notice-con">
		<div class="notice-img">
			
			<img src="../../../statics/images/sc-news-tit.png" alt="商城公告">
			
			
		</div>
    <yd-rollnotice autoplay="3000" height="40" style="position: absolute;left: 95px;top: 0px; overflow: hidden;">
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
        <yd-rollnotice-item><span> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
        <yd-rollnotice-item><span> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
        <yd-rollnotice-item><span> 荐 </span>京东服饰 早春新品低至7折111</yd-rollnotice-item>
    </yd-rollnotice>	

	</div>
        <!--商城热点-->
        <!--<div class="hot" style="position: relative; overflow: hidden;">
            <div class="notice-img">
                <a href="http://www.qq.com">
                    <img class="" src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/11/01/14779907765766.png?x-oss-process=image/format,webp/quality,q_75" style="display: block;">
                </a>

            </div>-->
            
    <!--<yd-rollnotice autoplay="3000" style="position: absolute;left: 95px;top: 0px; overflow: hidden;">
        <yd-rollnotice-item><span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
        <yd-rollnotice-item><span> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
        <yd-rollnotice-item><span> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
        <yd-rollnotice-item><span> 荐 </span>京东服饰 早春新品低至7折111</yd-rollnotice-item>
    </yd-rollnotice>-->
            <!--<ul style="top: -60px;">
                <li>
                    <div class="hot-message">

                        <a href="http://www.68dsw.com/article/list?aid=30,29,28,22" title="批发市场已正式上线">批发市场已正式上线</a>
                        <a href="http://www.68dsw.com/article/list?aid=30,29,28,22" title="产品库功能更新中">产品库功能更新中</a>

                    </div>
                </li>

                <li>
                    <div class="hot-message">

                        <a href="http://www.68dsw.com/article/list?aid=30,29,28,22">欢迎优质商家入驻开启零售新篇章</a>
                        <a href="http://www.68dsw.com/article/list?aid=30,29,28,22" title="入驻小帮手">入驻小帮手</a>

                    </div>
                </li>

            </ul>-->


        <!--</div>-->
        <!--商城热点-->

        <!--xiao标题 必抢-->
        <h2 class="litle_title">
            <font style="background:#FF2E2E;">&nbsp;</font>
            &nbsp;&nbsp;
            <span style="color:#FF2E2E;">必抢</span>
            &nbsp;&nbsp;
            <font style="background:#FF2E2E;">&nbsp;</font>
        </h2>
        <!--必抢内容区域-->
        <div class="box1">
            <ul>
                <li v-for="(item,index) in BQimg" :key="index">
                    <a href="javascript:;">
                        <img alt="" v-lazy="item.src">
                    </a>
                </li>
            </ul>
        </div>
        <!--xiao标题 品牌资讯-->
        <h2 class="litle_title">
            <font style="background:#43AF00;">&nbsp;</font>
            &nbsp;&nbsp;
            <span style="color:#43AF00;">品牌资讯</span>
            &nbsp;&nbsp;
            <font style="background:#43AF00;">&nbsp;</font>
        </h2>

        <!--品牌资讯内容区域-->
        <div class="box1 box2">
            <ul>
                <li v-for="(item,index) in PPimg" :key="index">
                    <a href="javascript:;">
                        <img v-lazy="item.src" alt="">
                    </a>
                </li>
            </ul>
        </div>

        <!--xiao标题 便捷生活-->
        <h2 class="litle_title">
            <font style="background:#009F8A;">&nbsp;</font>
            &nbsp;&nbsp;
            <span style="color:#009F8A;">便捷生活</span>
            &nbsp;&nbsp;
            <font style="background:#009F8A;">&nbsp;</font>
        </h2>
        <!--便捷生活内容区域-->
        <div class="box3">
            <dl>
                <dt>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751183540771.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </dt>
                <dd>
                    <span class="span1">
                        <a href="javascript:;">
                            <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751183837262.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                        </a>
                    </span>
                    <span>
                        <a href="javascript:;">
                            <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751183837262.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                        </a>
                    </span>
                </dd>
            </dl>
        </div>

        <!--xiao标题 品牌特卖-->
        <h2 class="litle_title">
            <font style="background:#FF8000;">&nbsp;</font>
            &nbsp;&nbsp;
            <span style="color:#FF8000;">品牌特卖</span>
            &nbsp;&nbsp;
            <font style="background:#FF8000;">&nbsp;</font>
        </h2>

        <!--xiao标题 精选市场-->
        <h2 class="litle_title">
            <font style="background:#E24AA5;">&nbsp;</font>
            &nbsp;&nbsp;
            <span style="color:#E24AA5;">精选市场</span>
            &nbsp;&nbsp;
            <font style="background:#E24AA5;">&nbsp;</font>
        </h2>
        <!--精选市场内容区域-->
        <div class="box1 box4">
            <ul>
                <li v-for="(item,index) in market1img" :key="index">
                    <a href="javascript:;">
                        <img v-lazy="item.src" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <!--精选市场内容区域2-->
        <div class="box1 box5">
            <ul>
                <li v-for="(item,index) in market2img" :key="index">
                    <a href="javascript:;">
                        <img alt="" v-lazy="item.src">
                    </a>
                </li>
            </ul>
        </div>
        <!--xiao标题 热门行业-->
        <h2 class="litle_title">
            <font style="background:#5E4AE2;">&nbsp;</font>
            &nbsp;&nbsp;
            <span style="color:#5E4AE2;">热门行业</span>
            &nbsp;&nbsp;
            <font style="background:#5E4AE2;">&nbsp;</font>
        </h2>
        <!--热门行业内容区域1-->
        <div class="box1 box6">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751183837262.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751183837262.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <!--热门行业内容区域2-->
        <div class="box1 box7">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/gallery/2016/09/29/14751213282627.png?x-oss-process=image/format,webp/quality,q_75" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <!--xiao标题 精挑细选-->
        <h2 class="litle_title">
            <font style="background:#000;">&nbsp;</font>
            &nbsp;&nbsp;
            <span style="color:#000;">精挑细选</span>
            &nbsp;&nbsp;
            <font style="background:#000;">&nbsp;</font>
        </h2>
        <!--精挑细选内容区域-->
        <div class="selects">
            <div class="selects-content clearfix">
                <ul v-for="(item,index) in chooseimg" :key="index">
                    <li>
                        <div class="goods-info">
                            <div class="item-tag-box">
                                <!---->
                                <!---->
                            </div>
                            <div class="goods-pic">
                                <a href="javascript:;" title="" style="display: block">
                                    <img class=""  style="display: block;" v-lazy="item.src">
                                </a>
                            </div>
                            <div class="goods-name">
                                <a href="javascript:;" title="item.title">{{item.title}}</a>
                            </div>
                            <div class="price price-color">
                                <span>￥{{item.price}}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--附近店铺-->
        <div class="nearby-shops-box">
            <div class="shop-loading-con">
                <img src="../../../statics/images/shop_loading_icon.png">
                <div class="shop-loading-text">1000公里范围没有找到相关店铺</div>
            </div>
        </div>

        <!--底部占行-->
        <div class="occupying"></div>
        <!--底部菜单footer-->
        <div class="footer-nav">
            <ul>
                <li class="current">
                    <!--<a href="/index.html">-->
                    <router-link to="/site/index">
                    
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/03/01/14883532969138.png);background-size: contain;"></i>
                        <span class="footer-span-color">首页</span>
                    </router-link> 
                </li>

                <li class="">
                    <!--<a href="/category.html">
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/03/01/14883532462342.png);background-size: contain;"></i>
                        <span>分类</span>
                    </a>-->
                    <router-link to="/site/category1">
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/03/01/14883532462342.png);background-size: contain;"></i>
                        <span>分类</span>
                    </router-link> 
                </li>

                <li class="">
                    <a href="/bill.html">
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/04/20/14926502086561.png);background-size: contain;"></i>
                        <span>清单</span>
                    </a>
                </li>

                <li class="">
                    <a href="/cart.html">
                        <i style="background: url(http://m.68dsw.com/images/tab_cart_normal.png);background-size: contain;"></i>
                        <span>购物车</span>
                    </a>
                </li>

                <li class="">
                    <a href="/user.html">
                        <i style="background: url(http://m.68dsw.com/images/tab_user_normal.png);background-size: contain;"></i <span>我的</span>
                    </a>
                </li>

            </ul>

        </div>
        <!-- 2.0 路由的占位符 -->
        <!--<router-view></router-view>-->
    </div>
</template>

<script>
import Vue from 'vue';
// 轮播图
import { Slider, SliderItem } from 'vue-ydui/dist/lib.rem/slider';
Vue.component(Slider.name, Slider);
Vue.component(SliderItem.name, SliderItem);

//滚动公告
import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice';
Vue.component(RollNotice.name, RollNotice);
Vue.component(RollNoticeItem.name, RollNoticeItem);

export default {

    data() {
        return {
            // isvipshow:false,
            // buycount:0
            hello: "我是hello",
            isTure: false,
            gImg:[],
            navImg:[],
            BQimg:[],
            PPimg:[],
            market1img:[],
            market2img:[],
            chooseimg:[],
        }
    },
    methods: {
            // 获取lbt
            getgLbtImg() {
                var date=new Date();
                var timer=date.getTime().toString();
                this.$http.get('/src/json/img.json?t='+timer).then(res => {
                    // 判断状态提示

                    // 赋值
                    this.gImg = res.data.lbtImg;
                });
            },
            //获取nav图片
            getNavImg(){
                var date=new Date();
                var timer=date.getTime().toString();
                this.$http.get('/src/json/navImg.json?t='+timer).then(res => {
                    // 判断状态提示

                    // 赋值
                    this.navImg = res.data.navImg;
                    //获取必抢内容图片
                    this.BQimg=res.data.BQimg;
                    //品牌图片
                    this.PPimg=res.data.PPimg;
                    //精选市场1图片
                    this.market1img=res.data.market1img;
                    //精选市场2图片
                    this.market2img=res.data.market2img;
                    //精挑细选
                    this.chooseimg=res.data.chooseimg;
                });
            },
    },
    mounted() {

    },
    created(){
        this.getgLbtImg();
        this.getNavImg();
    },
}

</script>

<style lang="less" scoped>
/* 导入样式的格式  @import url() */

@import url('../../../statics/css/base.css');
@import url('../../../statics/css/index.less');
</style>