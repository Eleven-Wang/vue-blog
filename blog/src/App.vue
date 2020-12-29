<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="stylus">
@import 'http://at.alicdn.com/t/font_2254991_0pcmu5juvr5.css'
$mainColor = #434a50
// #app 
//     height 100%
//     width 100%
.clearfix 
	*zoom 1
	&::after 
		content ''
		display block
		clear both
		height 0
		overflow hidden
.left 
	float left
.right 
	float right
.box
	margin 0 auto
	@media screen and (max-width: 600px)
		width 100%
	@media screen and (min-width: 600px)
		width 90%
	@media screen and (min-width: 768px)
		width 80%
	@media screen and (min-width: 1200px)
		width 70%
	@media screen and (min-width: 1600px)
		width 60%
</style>
