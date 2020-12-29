<template>
	<div class="shop_goods">
		<ShopGoods></ShopGoods>
	</div>
</template>

<script>
import ShopGoods from '@/components/Program/ShopGoods/ShopGoods.vue'
export default {
	data () {
		return {}
	},
	components: {
		ShopGoods
	}
}
</script>

<style lang='stylus' scoped>
.shop_goods
	width 350px
	height 550px
	position relative
	border 1px solid #ccc
	border-radius 20px
	overflow hidden
</style>
