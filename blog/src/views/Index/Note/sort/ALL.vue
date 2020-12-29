<template>
    <div>
        <ul>
            <li v-for="note in notes" :key="note.id">
                <router-link @mouseover.native="mouseover(note.id, $event)" @mouseout.native="mouseout()" :to="{name: 'detail', params: {detailId: note.id}}">{{note.title}}</router-link>
            </li>
        </ul>
        <div class="tip" :style="{left: tip.left, top: tip.top}" v-show="tip.isShow">
            <Detail :detailId="tip.id"></Detail>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Detail from '../NoteDetail.vue'
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
        this.getNotes();
    },
    methods: {
        getNotes() {
            axios({
                url: '/api/notes'
            }).then(({data}) => {
                this.notes = data
                console.log(data)
            })
        },
        mouseover(detailId, e) {
            let pos = e.target.getBoundingClientRect();
            this.tip.isShow = true;
            this.tip.id = detailId;
            this.tip.left = pos.left + pos.width + 10 + 'px';
            this.tip.top = pos.top + pos.height + 10 + 'px';
        },
        mouseout() {
            this.tip.isShow = false;
        }
    },
    components: {
        Detail
    }
}
</script>
<style scoped>
.tip {
    position: fixed;
    left: 0;
    top: 0;
    border: 1px solid black;
    background: white;
    padding: 10px;
}
</style>