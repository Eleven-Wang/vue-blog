<template>
	<div class="cartcontrol">
		<transition name="move">
			<div class="iconfont icon-reduce_3" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
		</transition>
		<div class="cart-count" v-if="food.count">{{food.count}}</div>
		<div class="iconfont icon-add_3" @click.stop="updateFoodCount(true)"></div>
	</div>
</template>

<script>
export default {
	props: ['food'],
	methods: {
		updateFoodCount (isAdd) {
			this.$store.dispatch('updateFoodCount', { food: this.food, isAdd })
		}
	}
}
</script>

<style lang='stylus' scoped>
@import "../../../common/css/mixins.styl"
.cartcontrol
	font-size: 0
	.move-enter-active, .move-leave-active
		transition all .3s ease
	.move-enter, .move-leave-to
		transform translateX(30px)
	.cart-decrease
		display: inline-block
		padding: 6px
		line-height: 24px
		font-size: 24px
		color: rgb(0, 160, 220)
	.icon-reduce_3
		display: inline-block
		padding 6px
		line-height 24px
		font-size 24px
		color green
	.cart-count
		display: inline-block
		vertical-align: top
		width: 12px
		padding-top: 6px
		line-height: 24px
		text-align: center
		font-size: 10px
		color: rgb(147, 153, 159)
	.icon-add_3
		display: inline-block
		padding: 6px
		line-height: 24px
		font-size: 24px
		color green
</style>
