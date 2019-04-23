<template>
  <input
    :class= 'className'
    type="text"
    :placeholder='placeholder'
    :maxlength='maxlength'
    :minlength='minlength'
    :disabled='disabled'
    :readonly='readonly'
    :name='name'
    :value = 'currentValue'
    @keyup="verify"
  />
</template>
<script>
export default {
  data() {
    return {
      rules: {
        text: e => {
          this.$emit('input', e.target.value);
        },
        number: e => {
          const value = e.target.value;
          e.target.value = value.replace(/[^\d.]/g, '');
          this.$emit('input', value.replace(/[^\d.]/g, ''));
        },
        letter: e => {
          const value = e.target.value;
          e.target.value = value.replace(/[^\d.]/g, '');
          this.$emit('input', value.replace(/[^a-zA-Z]/g, ''));
        },
        chinese: e => {
          const value = e.target.value;
          const reg = /[\u4e00-\u9fa5]+$/ig;
          if (reg.test(value)) {
            e.target.value = value;
            this.$emit('input', value);
          } else {
            e.target.value = value.slice(0, value.length - 1);
            this.$emit('input', value.slice(0, value.length - 1));
          }
        },
        numberLetter: e => {
          const value = e.target.value;
          e.target.value = value.replace(/[^\w./]/ig, '');
          this.$emit('input', value.replace(/[^\w./]/ig, ''));
        }
      },
      classData: {
        mini: 'mini',
        small: 'small',
        medium: 'medium',
        large: 'large'
      }
    };
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    maxlength: {
      type: [String, Number],
      required: false,
      default: ''
    },
    minlength: {
      type: [String, Number],
      required: false,
      default: ''
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false
    },
    name: {
      type: String,
      required: false,
      default: ''
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: [String, Number],
      required: false,
      default: ''
    },
    size: {
      type: String,
      required: false,
      default: 'medium'
    }
  },
  computed: {
    verify: function () {
      return this.rules[this.type];
    },
    currentValue: function () {
      return this.value;
    },
    className: function () {
      return this.classData[this.size];
    }
  }
};
</script>
<style lang="less" scoped>
  input{
    width: 186px;
    outline: none;
    box-sizing: border-box;
    padding: 0 8px;
    border:1px solid #e1e2e6;
    border-radius: 2px;
    &:focus{
      border-color: rgb(133, 211, 147);
    }
  }
  ::-webkit-input-placeholder{
    color: #C2C3C5;
    font-size: 12px;
  }
  .mini{
    height: 24px;
  }
  .small{
    height: 28px;
  }
  .medium{
    height: 32px;
  }
  .large{
    height: 40px;
  }
</style>

