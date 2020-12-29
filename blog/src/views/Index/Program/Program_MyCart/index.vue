<template>
	<div class="my_cart">
		<div class="shop_goods">
			<ShopGoods></ShopGoods>
		</div>
		<div class="shop_cart">
			<ShopCart></ShopCart>
		</div>
		
	</div>
</template>

<script>
import ShopGoods from '@/components/Program/ShopGoods/ShopGoods.vue'
import ShopCart from '@/components/Program/ShopCart/ShopCart.vue'
export default {
	data () {
		return {}
	},
	components: {
		ShopGoods,
		ShopCart
	}
}
</script>

<style lang='stylus' scoped>
.my_cart
	width 350px
	height 596px
	position relative
	border 1px solid #ccc
	border-radius 20px
	overflow hidden
	.shop_goods
		position relative
		width 100%
		height 550px
	.shop_cart
		width 100%
		height 46px
</style>
