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
        <br>
        <br>
        <br>
        <div>
            <div>
                <header>
                    <div>一级</div>
                    <div>二级</div>
                    <div>三级</div>
                </header>
                <div>
                    <div>一级提示语</div>
                    <div class='first-level'>
                        <div>一级回复</div>
                        <div class='sconed-level'>
                            <div>二级提示语</div>
                            <div>
                                <div>二级回复</div>
                                <div>二级回复</div>
                                <div>二级回复</div>
                                <div>二级回复</div>
                                <div>二级回复</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
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

