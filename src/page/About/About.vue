<template>
  <div>
    <div>{{name}}</div>
    <Permission Permission="btn">
      <button>我是一个权限按钮</button>
    </Permission>
  </div>
</template>
<script>
import hoc from '../Hoc.js';
const Permission = hoc();
export default {
  data(){
    return {
      name:"About页面"
    };
  },
  components: {Permission}
};
</script>
<style lang="less" scoped>

</style>

