<template>
	<div class="clearfix test">
		<div class="left">
			<router-view></router-view>
		</div>
		<div class="right">
			<ul>
				<li><router-link to="/note/html">HTML</router-link></li>
				<li><router-link to="/note/css">CSS</router-link></li>
				<li><router-link to="/note/js">JavaScript</router-link></li>
				<li><router-link to="/note/vuejs">Vue</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'all'
}
</script>
<style lang="stylus" scoped>
.left
	line-height 40px
	width 70%
.right
	box-sizing border-box
	width 20%
	padding-left 30px
	line-height 50px
	font-size 20px
	border-left 2px solid orange
	.router-link-active
		color orange
		font weight bold
</style>