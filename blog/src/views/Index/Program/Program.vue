<template>
	<div class="clearfix">
		<div class="left">
			<router-view></router-view>
		</div>
		<div class="right">
			<ul>
				<li><router-link :class="{'current': isCurrent == 'star'}" :to="{name:'star'}">Star组件</router-link></li>
				<li><router-link :class="{'current': isCurrent == 'shopGoods'}" :to="{name:'shopGoods'}">移动端滚动展示</router-link></li>
				<li><router-link :class="{'current': isCurrent == 'toDoList'}" :to="{name:'toDoList'}">to_do_list</router-link></li>
				<li><router-link :class="{'current': isCurrent == 'myCart'}" :to="{name:'myCart'}">购物车组件</router-link></li>
				<li><router-link :class="{'current': isCurrent == 'album'}" :to="{name:'album'}">文件上传</router-link></li>
				<li><router-link :class="{'current': isCurrent == 'search'}" :to="{name:'search'}">github搜索</router-link></li>
			</ul>
		</div>
		<br>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isCurrent: 'star'
		}
	},
	created() {
		this.isCurrent = this.$route.name
	}
}
</script>

<style lang="stylus" scoped>
.left
	width 70%
	padding-top 30px
.right
	box-sizing border-box
	width 20%
	padding-left 30px
	font-size 16px
	border-left 2px solid orange
	li
		margin 10px
		line-height 25px
		.router-link-active
			color orange
			font weight bold
// .current 
// 	color orange
// 	font-weight bold
</style>
