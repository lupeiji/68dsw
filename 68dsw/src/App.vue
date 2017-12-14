<template>
    <!--vue2.0中一定要有一个根元素 -->
    <div class="tmpl">        
        <!-- 使用elementUI中的一个button -->
        <!-- <el-button type="success">成功按钮</el-button> -->
        <!--<div>{{name}}22222222222222</div>-->
        <router-view></router-view>
    </div>
</template>

<script>
export default{
    // es6的写法 data() 等同于es5的 data:function()
    data(){
        return{
            // name:'hello'
        }
    },methods:{

    }
}
</script>

<style>
    .tmpl{
        height: 100%;
    }
</style>