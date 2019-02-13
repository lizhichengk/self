
<template>
  <label>
    <input type="text"
      v-bind="$attrs"
      v-on="inputListeners"
    >
  </label>  
</template>
<script>
export default {
  data(){
    return {
      name:"输入框"
    }
  },
  computed:{
    inputListeners:function(){
      var vm = this;
      return Object.assign({},this.$listeners,{
        input:function (event) {
          vm.$emit('input',event.target.value)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>


