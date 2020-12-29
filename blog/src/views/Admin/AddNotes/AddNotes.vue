<template>
    <div class="menu-content">
        <h1>添加笔记</h1>
        <form @submit.prevent="addNote" class="addInput">    <!--.prevent阻止submit本身跳转行为-->
            <div>
                标题：<input v-model="noteData.title" class="title" type="text" />
            </div>
            <!-- <div class="contentContainer">
                内容：<textarea v-model="noteData.content" class="content" name="" id="" cols="30" rows="10"></textarea>
            </div> -->
            <div class="clearfix">
                <div class="left">内容：</div>
                <div class="left" id="editor"></div>
            </div>
            <div>
                类型：<select v-model="noteData.type" class="selectStyle" name="" id="">
                    <option value="html">
                        HTML
                    </option>
                    <option value="css">
                        CSS
                    </option>
                    <option value="js">
                        JS
                    </option>
                    <option value="vuejs">
                        Vue
                    </option>
                </select>
            </div>
            <!-- <div class="uploadContainer">
                缩略图：
                <span class="fileinput-button">
                    <span>上传图片</span>
                    <input class="imgFile" type="file" name="" />
                </span>
            </div> -->
            <div>
                <button class="btn" type="submit">提交</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import E from 'wangeditor'
// import qs from 'querystring'
export default {
    data () {
        return {
            noteData: {
                type: 'html'
            },
            editor: {}
        }
    },
    mounted() {
        this.editor = new E('#editor')
        this.editor.config.height = 300
        this.editor.create()
    },
    methods: {
        addNote() {
            this.noteData.content = this.editor.txt.html()
            axios.post(this.$store.state.BASE_URL + '/addNote', this.noteData).then(res => {
                if (res.data.code) {
                    console.log('fail')
                } else {
                    console.log('success')
                    this.$router.push({name: 'message'})
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
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
    width 500px
    height 300px
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
</style>