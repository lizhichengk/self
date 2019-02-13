<template>
    <div>
        <div class='title'><span>{{name}}{{id}}</span></div>
        <Child :title.sync = 'title' :todos = "list">
            <template slot-scope="slotProps">
                <span v-if="slotProps.todo.isComplete">√</span>
                {{slotProps.todo.text}}
            </template>
        </Child>
        <button @click="update" >点我</button>
        <baseInput @focus="onFocus"></baseInput>
        <router-view></router-view>
    </div>
</template>
<script>
import Child from './Child';
import baseInput from './base-input';
export default {
    data(){
        return {
            name:'home页面',
            id:this.$route.params.id,
            title:'我是HOME',
            list:[
                {id:0,text:'我是第一个',isComplete:1},
                {id:1,text:'我是第二个',isComplete:0},
                {id:2,text:'我是第三个',isComplete:0},
            ]
        }
    },
    components: {Child,baseInput},
    created(){
    
    },
/*     beforeRouteEnter (to, from, next) {
        const num = sessionStorage.getItem('num')
        alert(num)
        if(num){
        next({ path: '/about' })

        }else{

        next({ path: '/' })

        }
        
    在渲染该组件的对应路由被 confirm 前调用
    不！能！获取组件实例 `this`
    因为当守卫执行前，组件实例还没被创建
  }, */
  methods:{
      'update':function(){
           this.title += '我是父页面的title'
      },
      'onFocus':function(){
          console.log('父页面监听')
      }
  }
}
</script>
<style lang="less" scoped>
    .title{
        div{
            color:deepskyblue;
        }
    }
</style>

