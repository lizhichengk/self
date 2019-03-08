<template>
  <div>
    {{title}}
    <button @click="update">盘他</button>
    <div v-for="todo in todos"
      :key = "todo.id"
    >
      <slot :todo = "todo">
            {{todo.text}}
      </slot>
    </div>
  </div>
  <!-- 我是新建分支的一次提交 -->
</template>
<script>
export default {
  data(){
    return {
        name:'home===>Child1111页面'
    }
  },
    props:['title','todos'],
    methods:{
      update:function(){
        this.$emit('update:title',this.title+'我是子页面title')
      }
    }
}
</script>
<style lang="less" scoped>
header{
  div{
    float: left;
    width: 500px;
  }
}
.first-level{
  overflow: hidden;
}
.first-level >div,.sconed-level >div{
  float: left;
  width: 500px;
  overflow: hidden;
}
.sconed-level >div{
  width:250px;
}
</style>

