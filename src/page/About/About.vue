<template>
  <div>
    <div>{{name}}</div>
    <Permission Permission="btn1">
      <button>我是一个权限按钮</button>
    </Permission>
  </div>
</template>
<script>
import Permiss from '../Permission.vue';
import hoc from '../Hoc.js';
const Permission = hoc(Permiss);
export default {
  data(){
    return {
      name:"About页面"
    };
  },
  components: {Permiss, Permission}
};
</script>
<style lang="less" scoped>

</style>

