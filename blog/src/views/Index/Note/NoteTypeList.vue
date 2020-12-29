<template>
    <div>
        <ul>
            <li v-for="note in notes" :key="note.id">
                <router-link @mouseover.native="mouseover(note.id, $event)" @mouseout.native="mouseout()" :to="{name: 'detail', params: {detailId: note.id}}">{{note.title}}</router-link>
            </li>
        </ul>
        <div class="tip" :style="{left: tip.left, top: tip.top}" v-show="tip.isShow">
            <div class="tipBox">
                <Detail :detailId="tip.id"></Detail>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Detail from './NoteDetail.vue'
export default {
    name: 'all',
    data() {
        return {
            notes: [],
            tip: {
                isShow: false,
                id: 0,
                left: 0,
                top: 0
            }
        }
    },
    created() {
        this.getNotes()
    },
    watch: {
        $route() {
            console.log(this.type)
            this.getNotes()
        }
    },
    methods: {
        getNotes() {
            axios({
                url: this.$store.state.BASE_URL + '/notes/' + this.$route.params.type
            }).then(({data}) => {
                console.log(this.type)
                this.notes = data
                console.log(data)
            })
        },
        mouseover(detailId, e) {
            let pos = e.target.getBoundingClientRect()
            this.tip.isShow = true
            this.tip.id = detailId
            this.tip.left = pos.left + pos.width + 10 + 'px'
            this.tip.top = pos.top + pos.height + 10 + 'px'
        },
        mouseout() {
            this.tip.isShow = false
        }
    },
    components: {
        Detail
    }
}
</script>
<style lang="stylus" scoped>
.tip 
    position fixed
    left 0
    top 0
    border 1px solid #aaa
    border-radius 10px
    background white
    z-index 1
.tipBox 
    max-width 600px
    max-height 390px
    margin 10px
    overflow hidden

</style>