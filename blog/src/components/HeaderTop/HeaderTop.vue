<template>
	<div id="header">
		<div class="box clearfix">
			<p class="left">欢迎来到Eleven的博客！</p>
			<p class="right" v-if="!isLogin"><router-link target="_blank" to="/login">登录</router-link></p>
			<!-- <p class="right" v-else>
				<span>管理中心</span>
				<span> | </span>
				<span><router-link :to="{name: 'home'}">退出</router-link></span>
			</p> -->
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			isLogin: false,
			user: null
		}
	}
}
</script>

<style lang="stylus" scoped>
#header 
	width 100%
	height 26px
	border-bottom 1px solid #ddd
	background-color #ddd
	position fixed
	top 0
	left 0
	z-index 20
	.box 
		p 
			font-size 12px
			line-height 26px
		.left 
			color #555
		.right 
			color steelblue

</style>