<template>
    <div class="tmpl">
        <!--分类头部-->
        <header class="header clearfix" style="position: fixed; top: 0">
            <div class="header-left">
                <a class="sb-back" href="javascript:history.back(-1)" title="返回"></a>
            </div>
            <div class="header-middle">
                <div class="search-box">
                    <input id="search_text" class="text" placeholder="请输入商品名称">
                    <i class="submit"></i>
                </div>
            </div>
            <div class="header-right">
                <aside class="show-menu-btn">
                    <div class="show-menu" id="show_more" @click="toggle">
                        <a href="javascript:void(0)"></a>
                    </div>
                </aside>
            </div>
        </header>
        <!--按钮-->
        <div id="menu" v-bind:class="{ 'show-menu-info' : isShow, 'show-menu-info show': !isShow}">
            <ul>
                <li>
                    <a href="/">
                        <span class="index-menu"></span>
                        <i>首页</i>
                    </a>
                </li>
                <li>
                    <a href="/category.html">
                        <span class="category-menu"></span>
                        <i>分类</i>
                    </a>
                </li>
                <li>
                    <a href="/cart.html">
                        <span class="cart-menu"></span>
                        <i>购物车</i>
                    </a>
                </li>
                <li style=" border:0;">
                    <a href="/user.html">
                        <span class="user-menu"></span>
                        <i>我的</i>
                    </a>
                </li>
            </ul>
        </div>
        <!--分类头部-->
        <!--左右侧内容-->
        <div class="container">
            <div class="category-box" >
                <!--左侧-->
<div class="category-left" tabindex="5000">
				<ul class="clearfix left_menu">
					
					<li class="cur"><a>生鲜食品</a></li>
					
					<li><a href="javascript:;">食品饮料</a></li>
					
					<li><a href="javascript:;">家用电器</a></li>
					
					<li><a href="javascript:;">手机数码</a></li>
					
					<li><a href="javascript:;">电脑办公</a></li>
					
					<li><a href="javascript:;">女装</a></li>
					
					<li><a href="javascript:;">男装</a></li>
					
					<li><a href="javascript:;">个护化妆</a></li>
					
					<li><a href="javascript:;">箱包鞋帽</a></li>
					
					<li><a href="javascript:;">童装童鞋</a></li>
					
					<li><a href="javascript:;">酒水</a></li>
					
					<li><a href="javascript:;">地方特产</a></li>
					
					<li><a href="javascript:;">图书音像</a></li>
					
					<li><a href="javascript:;">家居家装</a></li>
					
					<li><a href="javascript:;">家具建材</a></li>
					
					<li><a href="javascript:;"> 汽车配件</a></li>
					
					<li><a href="javascript:;">母婴用品</a></li>
                    <li><a href="javascript:;">11</a></li>
					<li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
                    <li><a href="javascript:;">11</a></li>
				</ul>
			</div>
            <!--右侧-->
            <div class="category-right" style="border:1px solid red" v-iscroll>
                <div class="contents">
                <!--banner图-->
                    <div class="banner">
                        <a href="javascript:;">
                            <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/goods/category/2017/05/25/14956768543015.jpg" alt="">
                        </a>
                    </div>
                    <a href="javascript:;" class="all">
                        进入生鲜食品频道&nbsp;&gt;&nbsp;&gt;
                    </a>
                 <!--数据列表-->
                 <div class="contents_list">
                     <a href="javascript:;" class="titles">新鲜水果1</a>
                     <ul class="clearfix">
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                     </ul>
                 </div>
                 <!--数据列表-->
                 <div class="contents_list">
                     <a href="javascript:;" class="titles">新鲜水果2</a>
                     <ul class="clearfix">
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                     </ul>
                 </div>
                 <!--数据列表-->
                 <div class="contents_list">
                     <a href="javascript:;" class="titles">新鲜水果3</a>
                     <ul class="clearfix">
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                     </ul>
                 </div>
                 <!--数据列表-->
                 <div class="contents_list">
                     <a href="javascript:;" class="titles">新鲜水果4</a>
                     <ul class="clearfix">
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                         <li>
                             <a href="javascript:;">
                                <img src="//img10.360buyimg.com/focus/jfs/t13465/116/726666318/2650/623a7359/5a12b23eNbc0d7a47.jpg" id="Imglazyload157">
                                <span>新款大衣</span>
                             </a>
                         </li>
                     </ul>
                 </div>

            </div>
        </div>
             <!--右侧-->
            </div>
        </div>
        <!--左右侧内容-->
    </div>
</template>

<script>
// 导入帮助类
// import {Tapul} from "../../leftEvent/TapEvents.js";
import {my_scroll} from "../../leftEvent/ulMove.js";
// document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false);
// var myScroll = new IScroll('.category-right');

export default {
    data() {
        return {
            isShow:true,
        }
    },
    created() { 
    },
    mounted () {
        my_scroll();
    },
    methods: {
        toggle(){
            this.isShow=!this.isShow;
            // console.log(111111111);
        },
      getIscroll(iscroll) {
          if (iscroll) {
              iscroll.on('scrollStart', function() {
                console.log('scrollStart')
            })
          }
      },
    },
    // watch: {
    //     aa(){
    //         this.$nextTick(function(){
    //             my_scroll();
    //         })
    //     }
    // },
}
</script>
<style lang="less">
@import url('../../../statics/css/base.css');
@import url('../../../statics/css/category.less');
</style>