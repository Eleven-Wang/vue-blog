<template>
    <div class="container">
        <div class="menu-left">
            <ul>
                <li :class="{'isChoose': isChoose}"><router-link :to="{name: 'addNotes'}">笔记添加</router-link></li>
                <li :class="{'isChoose': !isChoose}"><router-link :to="{name: 'noteList'}">笔记列表</router-link></li>
            </ul>
            <p class="backToHome">- <router-link target="_blank" :to="{name: 'home'}"> 主页 </router-link> -</p>
        </div>
        <!-- <iframe
            src="file:///Users/yuweihai/Desktop/%E6%A1%8C%E9%9D%A2/%E5%BC%80%E8%AF%BE%E5%90%A7/%E7%BB%86%E5%8C%96%E8%BF%87%E8%AF%BE/nodejs/%E6%96%87%E7%AB%A0%E4%BF%A1%E6%81%AF%E5%B1%95%E7%A4%BA%E6%A8%A1%E6%9D%BF/%E5%B8%A6%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E6%A8%A1%E6%9D%BF/addNews.html"
            frameborder="0" width="800px"></iframe> -->
        <router-view class="menu-content"></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isChoose: true
        }
    },
    created() {
        this.changeChoose()
    },
    watch: {
        $route() {
            this.changeChoose()
        }
    },
    methods: {
        changeChoose() {
            if (this.$route.path === '/admin/noteList') {
                this.isChoose = false
            } else {
                this.isChoose = true
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
body 
    margin 0
.container 
    display flex
    flex-direction row
    height 100%
ul 
    display flex
    width 200px
    flex-direction column
    padding 0
li 
    float left
    display block
    list-style none
    color white
    font-size 14px
    cursor pointer
    line-height 56px
    text-align center
    a 
        color white
    &:hover 
        background rgb(84, 92, 100)
    &:nth-child(1) 
        color rgb(255, 208, 75)
.isChoose 
    a 
        color orange
.menu-left 
    width 200px
    background rgb(67, 74, 80)
    height 100%
    float left
    display block
.backToHome 
    position absolute
    left 20px
    bottom 20px
    font-size 12px
    color #7e8c8d
.menu-content 
    flex 1
    padding-left 40px
    padding-top 40px
.addInput 
    div 
        margin-top 30px
        input 
            &:focus 
                outline none
                border-color #409eff
.title 
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
.content 
    display block
    resize vertical
    padding 5px 15px
    line-height 1.5
    box-sizing border-box
    width 300px
    height 100px
    font-size inherit
    color #606266
    background-color #fff
    background-image none
    border 1px solid #dcdfe6
    border-radius 4px
.contentContainer 
    display flex
.selectStyle 
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
    width 200px
.fileinput-button 
    position relative
    display inline-block
    overflow hidden
    background #409eff
    padding 9px 15px
    font-size 12px
    border-radius 3px
    color white
    input 
        position absolute
        right 0px
        top 0px
        opacity 0
        font-size 50px
.btn 
    background-color #409eff
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
table 
    border-left 1px solid #ebeef5
    border-top 1px solid #ebeef5
    margin-top 40px
    width 900px
table td,
th 
    border-bottom 1px solid #ebeef5
    border-right 1px solid #ebeef5
.delBtn 
    cursor pointer
iframe 
    margin-left 40px

</style>