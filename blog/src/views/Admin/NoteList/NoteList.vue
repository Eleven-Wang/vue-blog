<template>
    <div>
        <table border="0">
            <tr>
                <th>标题</th>
                <th>类型</th>
                <!-- <th>国家</th>
                <th>缩略图</th> -->
                <th>操作</th>
            </tr>

            <tr v-for="(note, index) in notes" :key="index">
                <td>{{note.title}}</td>
                <td>{{note.type}}</td>
                <td><span @click="del(note.id)" class="delBtn">删除</span></td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
        return {
            notes: []
        }
    },
    created() {
        this.getNotes()
    },
    methods: {
        del(noteId) {
            axios.delete(this.$store.state.BASE_URL + '/note/' + noteId).then(res => {
                console.log(res)
                if (res.data.code) {
                    console.log('fail')
                } else {
                    console.log(res.data)
                    this.getNotes()
                }
            })
        },
        getNotes() {
            axios({
                url: '/api/notes/all'
            }).then(({data}) => {
                console.log(data)
                this.notes = data
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
table 
    border-left 1px solid #ebeef5
    border-top 1px solid #ebeef5
    margin-top 40px
    width 80%
table td, th 
    border-bottom 1px solid #ebeef5
    border-right 1px solid #ebeef5
    line-height 40px
.delBtn 
    cursor pointer
a 
    text-decoration none

</style>