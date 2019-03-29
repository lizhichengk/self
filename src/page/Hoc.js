export default function Permission() {
  return {
    mounted() {
      console.log('I have already mounted');
    },
    render(h) {
    // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          // 绑定到高阶组件上
          vnode.context = this._self;
          return vnode;
        });
      const vNode = this.$attrs.Permission === 'btn' ? 'div' : '';
      return h(vNode, {
        class: 'permission',
        on: this.$listeners,
        attrs: this.$attrs,
        props: this.$props
      }, slots);
    }
  };
}
