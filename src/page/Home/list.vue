<template>
  <div>
    <div id="toolbar">
      <button class="ql-bold"></button>
      <button class="ql-link"></button>
      <button class="ql-image"></button>
      <button class="ql-tel" @click="tel">Tel</button>
    </div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
      @change="onEditorChange($event)">
    </quill-editor>
  </div>
</template>
<script>
import { MessageBox } from 'element-ui';
import { quillEditor } from "vue-quill-editor";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'element-ui/lib/theme-chalk/index.css';

export default {
  data() {
    return {
      content: ``,
      editorOption: {
        modules:{
          toolbar: {
            container:'#toolbar',
            handlers: {
              'tel': function(value) {
                console.log(value);
              }
            }
          }
        }
      }
    };
  },
  components: {
    quillEditor,
    MessageBox
  },
  methods: {
    tel() {
      MessageBox.prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          let content = this.$refs.myQuillEditor.quill.root.innerHTML;
          content += `<p><a href='tel:${value}'>${value}</a></p>`;
          this.$refs.myQuillEditor.quill.root.innerHTML = content;
          console.log(this.$refs.myQuillEditor.quill.root.innerHTML);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
    },
    onEditorReady(editor) { // 准备编辑器

    },
    onEditorBlur(){}, // 失去焦点事件
    onEditorFocus(){}, // 获得焦点事件
    onEditorChange({ quill, html, text }){
      // console.log(quill);
      // console.log(html);
    }
  }
};
</script>
<style lang="less" scoped>

</style>

