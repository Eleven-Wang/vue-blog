<template>
    <div class="container">
        <div class="box">
            <h2>欢迎登录</h2>
            <form @submit.prevent="login">
                <p>用 &nbsp; 户：<input v-model="user.username" type="text"></p>
                <p>密 &nbsp; 码：<input v-model="user.password" type="password"></p>
                <p class="fault" v-show="isFalse">账户名或者密码错误！</p>
                <p><button class="btn" type="submit">登录</button></p>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            user: {},
            isFalse: false
        }
    },
    methods: {
        login() {
            axios.post(this.$store.state.BASE_URL + '/login', this.user).then(res => {
                console.log(res.data.code)
                if (!res.data.code) {
                    this.$router.push({name: 'addNotes'})
                } else {
                    this.isFalse = true
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.box 
    width 400px
    height 280px
    line-height 55px
    position absolute
    top 50%
    left 50%
    margin-top -140px
    margin-left -200px
    border-radius 15px
    h2 
        width 100%
        height 60px
        line-height 60px
        text-align center
        font-size 20px
        background-color rgb(67, 74, 80)
        border-radius 14px 14px 0 0
        border 2px solid rgb(67, 74, 80)
        color orange
        letter-spacing 5px
    form 
        width 360px
        height 180px
        padding 20px
        border-left 2px solid #ddd
        border-right 2px solid #ddd
        border-bottom 2px solid #ddd
        border-radius 0 0 14px 14px
        input 
            -webkit-appearance none
            background-color #fff
            background-image none
            border-radius 4px
            border 1px solid #dcdfe6
            box-sizing border-box
            color #606266
            display inline-block
            font-size inherit
            height 40px
            line-height 40px
            outline none
            padding 0 15px
    p 
        text-align center
.fault 
    line-height 20px
    font-size 12px
    color orange
.btn 
    background-color rgb(67, 74, 80)
    color white
    display inline-block
    line-height 1
    white-space nowrap
    cursor pointer
    border 1px solid #dcdfe6
    -webkit-appearance none
    text-align center
    box-sizing border-box
    outline none
    margin 0
    transition .1s
    font-weight 500
    -moz-user-select none
    -webkit-user-select none
    -ms-user-select none
    padding 12px 20px
    font-size 14px
    border-radius 4px

</style>