<template>
	<div>
		<input type="text" ref="todoText" placeholder="请输入你的任务名称，按回车键确认" class="todoText" @keyup.13="add()" v-model="inputTodo">
		<ul class="todoUl" v-if="todoList.length">
			<li v-for="(todo, index) in todoList" :key="index" @mouseover="isOver=index" @mouseout="isOver=null" :class="{'isOver': isOver===index}">
				<label>
					<input type="checkbox" v-model="todo.checked">
					<span :class="{'done': todo.checked}">{{todo.name}}</span>
				</label>
				<button v-show="isOver === index" @click="del(index)">删除</button>
			</li>
		</ul> 
		<p class="footer">
			<label class="selectAll"><input type="checkbox" value="all" v-model="isAll"> 已完成{{completeNum}} / 全部{{todoList.length}}</label>
			<button v-show="completeNum > 0" class="clearCompleted" @click="clearCompleted">清除已完成任务</button>
		</p>
	</div>
</template>

<script>
import storageUtils from '@/utils/storageUtils.js'
export default {
	data () {
		return {
			todoList: storageUtils.readTodos(),
			inputTodo: '',
			isOver: null
		}
	},
	methods: {
		add () {
			const todo = {
				name: this.inputTodo,
				checked: false
			}
			this.todoList.push(todo)
			this.inputTodo = ''
		},
		del (index) {
			this.todoList.splice(index, 1)
		},
		clearCompleted () {
			if (window.confirm('确定清除已完成的码？')) {
				this.todoList = this.todoList.filter(todo => !todo.checked)
			}
		}
	},
	computed: {
		isAll: {
			get () {
				console.log(this.todoList.every(todo => todo.checked))
				return this.todoList.length && this.todoList.every(todo => todo.checked)
			},
			set (newValue) {
				console.log(newValue)
				this.todoList.forEach(todo => {
					todo.checked = newValue
				})
				console.log(this.todoList)
			}
		},
		completeNum () {
			return this.todoList.reduce((preTotal, item) => {
				return preTotal + (item.checked ? 1 : 0)
			}, 0)
		}
	},
	watch: {
		todoList: {
			deep: true,
			handler () {
				storageUtils.saveTodos(this.todoList)
			}
		}
	},
	mounted () {
		this.$refs.todoText.focus()
	}
}
</script>

<style lang='stylus' scoped>
.todoText
	padding 10px
	border 1px solid #ccc
	border-radius 4px
	box-sizing border-box
	width 100%
	font-size 14px
.todoUl
	width 100%
	box-sizing border-box
	border 1px solid #ccc
	border-radius 2px
	line-height 30px
	li
		border-bottom 1px solid #ccc
		box-sizing border-box
		padding 5px
		width 100%
		position relative
		&.isOver
			background #aaa
		&:last-child
			border-bottom 0
		span
			font-weight bold
			margin-left 5px
			&.done
				text-decoration line-through
				color #555
				font-weight normal
		button
			width 40px
			line-height 24px
			position absolute
			right 5px
			font-size 12px
			background #da4f49
			color white
			border 1px solid #da4f49
			border-radius 5px
			&:hover
				background #bd362f
.footer
	position relative
	padding 6px
	font-size 13px
	line-height 30px
	.clearCompleted
		position absolute
		right 0
		height 30px
		background #da4f49
		color white
		border 1px solid #da4f49
		border-radius 5px
		&:hover
			background #bd362f

</style>
