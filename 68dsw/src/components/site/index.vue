<template>
    <div class="tmpl">
        <!-- 1.0 页面头，菜单导航代码 -->
        <header class="header-con">
             <div class="one">11111111
                 <a href="javascript:;">你好</a>
             </div>
        </header>
        <!-- 2.0 路由的占位符 -->
        <!--<router-view></router-view>-->
    </div>
</template>

<script>

export default {
    data() {
        return {
            // isvipshow:false,
            // buycount:0
            hello: "我是hello",
        }
    },
    methods: {

    },
    mounted() {

    }
}

</script>

<style>
/* 导入样式的格式  @import url() */
@import url('../../../statics/css/base.css');
@import url('../../../statics/css/index.less');
</style>