<template>
	<div class="to_do_list">
		<ToDoList></ToDoList>
	</div>
</template>

<script>
import ToDoList from '@/components/Program/ToDoList/ToDoList.vue'
export default {
	data () {
		return {}
	},
	components: {
		ToDoList
	}
}
</script>

<style lang='stylus' scoped>
.to_do_list
	width 100%
	max-width 500px
	position relative
	border 1px solid #ccc
	border-radius 10px
	overflow hidden
	padding 10px 20px
</style>
