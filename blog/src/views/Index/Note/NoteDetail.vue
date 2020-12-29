<template>
    <div>
        <template v-if="loading">
            Loading...
        </template>
        <template v-else-if="note">
            <h2>{{note.title}}</h2>
            <p class="info"><span> 分类：{{note.type}} </span> <span> 日期：{{note.date}} </span></p>
            <p v-html="note.content">{{note.content}}</p>   
        </template>
        <template v-else>
            <h2>没有此文章</h2>
        </template>

    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'note-detail',
    props: ['detailId'],
    data() {
        return {
            note: null,
            loading: false
        }
    },
    watch: {
        detailId() { // 监听detailId变化
            this.note = null
            this.getDetail()
        }
    },
    created() {
        this.getDetail()
    },
    methods: {
        getDetail() {
            if (this.detailId) {
                this.loading = true
                axios({
                    url: this.$store.state.BASE_URL + '/note/' + this.detailId
                }).then(({data}) => {
                    this.note = data
                }).then(() => {
                    this.loading = false
                })
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
h2 
    font-size 24px
    line-height 40px
p 
    line-height 30px
    padding-top 10px
    color #555
    font-size 14px
    span 
        display inline-block
        margin-right 10px
.info 
    font-size 12px
    color #aaa

</style>