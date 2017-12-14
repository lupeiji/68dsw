<template>
    <div class="sort_view">
        <!--分类页面的头部-->
        <header class="header">
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
        <!--<div>123</div>-->
        <!--分类页面的头部-->
        <div class="container">
            <!--左侧-->
            <div class="left_box">
                <ul class="left_menu">
                    <li class="cur">
                        <a href="javascript:;">生鲜食品</a>
                    </li>
                    <li>
                        <a href="javascript:;">食品饮料</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单3</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单4</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单5</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单6</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单7</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单8</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单9</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单10</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单11</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单12</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单13</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单14</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单15</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单16</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单17</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单18</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单19</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单20</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单21</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单22</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单23</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单24</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单25</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单26</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单27</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单28</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单29</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单30</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单31</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单32</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单33</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单34</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单35</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单36</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单37</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单38</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单39</a>
                    </li>
                    <li>
                        <a href="javascript:;">菜单40</a>
                    </li>
                </ul>
            </div>
            <!--左侧-->

            <!--右侧-->
            <div class="right_box" v-iscroll>
                <div class="right_content">

                    <a href="javascript:;" class="banner">
                        <img src="http://68dsw.oss-cn-beijing.aliyuncs.com/images/goods/category/2017/05/25/14956768543015.jpg" alt="">
                    </a>

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

                </div>
            </div>
        </div>

        <!--左右侧内容-->
        
        <!--底部占行-->
        <div class="occupying"></div>
        <!--底部菜单footer-->
        <div class="footer-nav">
            <ul>
                <li class="">
                    <!--<a href="/index.html">-->
                    <router-link to="/">
                    
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/images/2017/03/23/14902502181756.png);background-size: contain;"></i>
                        <span>首页</span>
                    </router-link> 
                </li>

                <li class="current">
                    <!--<a href="/category.html">
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/backend/1/images/2017/03/01/14883532462342.png);background-size: contain;"></i>
                        <span>分类</span>
                    </a>-->
                    <router-link to="/site/category1">
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/images/2017/03/23/14902502645197.png);background-size: contain;"></i>
                        <span class="footer-span-color">分类</span>
                    </router-link> 
                </li>

                <li class="">
                    <a href="/bill.html">
                        <i style="background: url(http://68dsw.oss-cn-beijing.aliyuncs.com/images/site/1/images/2017/03/23/14902502789163.png);background-size: contain;"></i>
                        <span>附近商家</span>
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
    </div>
</template>

<script>
// 导入帮助类
// import {Tapul} from "../../leftEvent/TapEvents.js";
import { my_scroll } from "../../leftEvent/ulMove.js";
// document.addEventListener("touchmove", function(e){ e.preventDefault(); }, false);
// var myScroll = new IScroll('.category-right');

export default {
    data() {
        return {
            isShow: true,
        }
    },
    created() {
    },
    mounted() {
        my_scroll();
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow;
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

}
</script>
<style lang="less" scoped>
@import url('../../../statics/css/base.css');
@import url('../../../statics/css/category1.less');
</style>