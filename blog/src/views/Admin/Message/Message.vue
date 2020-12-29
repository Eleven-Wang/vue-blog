<template>
    <div>
        <p>添加成功</p>
        <p><span>{{index}}</span>秒后跳转页面</p>
        <router-link :to="{name: 'addNotes'}">点我直接跳转</router-link>
    </div>
</template>

<script>
export default {
    data () {
        return {
            index: 5,
            timer: null
        }
    },
    created() {
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            if (!this.index) {
                clearInterval(this.timer)
                this.$router.push({name: 'addNotes'})
            } else {
                this.index--
            }
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
    }
}
</script>

<style lang="stylus" scoped>
div 
    line-height 40px
</style>