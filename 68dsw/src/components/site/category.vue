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
            <div class="category-box">
                <!--左侧-->
<div class="category-left" style="outline: none; overflow: hidden;" tabindex="5000">
				<ul class="clearfix">
					
					<li><span>生鲜食品</span></li>
					
					<li><span>食品饮料</span></li>
					
					<li class="cur"><span>家用电器</span></li>
					
					<li><span>手机数码</span></li>
					
					<li><span>电脑办公</span></li>
					
					<li><span>女装</span></li>
					
					<li><span>男装</span></li>
					
					<li><span>个护化妆</span></li>
					
					<li><span>箱包鞋帽</span></li>
					
					<li><span>童装童鞋</span></li>
					
					<li><span>酒水</span></li>
					
					<li><span>地方特产</span></li>
					
					<li><span>图书音像</span></li>
					
					<li><span>家居家装</span></li>
					
					<li><span>家具建材</span></li>
					
					<li><span>汽车配件</span></li>
					
					<li><span>母婴用品</span></li>
					
				</ul>
			</div>
            <!--右侧-->
            <div class="category-right">
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
                     <a href="javascript:;" class="titles">新鲜水果</a>
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
                     <a href="javascript:;" class="titles">新鲜水果</a>
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
                     <a href="javascript:;" class="titles">新鲜水果</a>
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
export default {
    data() {
        return {
            isShow:true,
        }
    },
    created() {

    },
    methods: {
        toggle(){
            this.isShow=!this.isShow;
            console.log(111111111);
        }
    }
}
</script>
<style lang="less">
@import url('../../../statics/css/base.css');
@import url('../../../statics/css/category.less');
</style>