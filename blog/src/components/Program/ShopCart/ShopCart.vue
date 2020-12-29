<template>
	<div>
		<div class="shopcart">
			<div class="content">
				<div class="content-left">
					<div class="logo-wrapper">
						<div class="logo highlight" @click="shopCart.length ? isShow = !isShow : isShow = false">
							<i class="iconfont icon-gouwuchekong highlight"></i>
						</div>
						<div class="num" v-if="shopCart.length">{{totalCount}}</div>
					</div>
					<div class="price">
						<span class="highlight">￥{{totalPrice}}</span>
						<strike v-show="totalOldPrice != totalPrice">{{totalOldPrice}}</strike>
					</div>
					<div class="desc">另需配送费￥4 元</div>
				</div>
				<div class="content-right">
					<div v-if="float_minimum_order_amount > totalPrice" class="pay not-enough">
						还差￥{{float_minimum_order_amount - totalPrice}} 元起送
					</div>
					<div v-else class="pay enough">
						去结算
					</div>
				</div>
			</div>
			<div class="shopcart-list" v-show="isShow&&shopCart.length">
				<div class="list-header">
					<h1 class="title">购物车</h1>
					<span class="empty" @click="clearCart">清空</span>
				</div>
				<div class="list-content">
					<ul>
						<li class="food" v-for="(food, index) in shopCart" :key="index">
							<span class="name">{{food.name}}</span>
							<div class="price"><span>￥{{food.price * food.count}}</span></div>
							<div class="cartcontrol-wrapper">
								<div class="cartcontrol">
									<div @click="updateFoodCount(food, false)" class="iconfont icon-reduce_3"></div>
									<div class="cart-count">{{food.count}}</div>
									<div @click="updateFoodCount(food, true)" class="iconfont icon-add_3"></div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="list-mask" v-show="isShow&&shopCart.length" @click="isShow = false"></div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data () {
		return {
			isShow: false,
			float_minimum_order_amount: 20
		}
	},
	computed: {
		...mapGetters(['totalCount', 'totalPrice', 'totalOldPrice']),
		shopCart () {
			return this.$store.state.a.shopCart
		}

	},
	methods: {
		clearCart () {
			this.$store.dispatch('clearCart')
			this.isShow = false
		},
		updateFoodCount (food, isAdd) {
			this.$store.dispatch('updateFoodCount', { food, isAdd })
		}
	}
}
</script>

<style lang='stylus' scoped>
@import "../../../common/css/mixins.styl"
.shopcart
	position absolute
	left 0
	bottom 0
	z-index 50
	width 100%
	height 48px
	.content
		display flex
		background #141d27
		font-size 0
		color rgba(255, 255, 255, 0.4)
		.content-left
			flex 1
			.logo-wrapper
				display inline-block
				vertical-align top
				position relative
				top -10px
				margin 0 12px
				padding 6px
				width 56px
				height 56px
				box-sizing border-box
				border-radius 50%
				background #141d27
				.logo
					width 100%
					height 100%
					border-radius 50%
					text-align center
					background #2b343c
					&.highlight
						background $green
					.icon-gouwuchekong
						line-height 44px
						font-size 24px
						color #80858a
						&.highlight
							color #fff
				.num
					position absolute
					top 0
					right 0
					width 24px
					height 16px
					line-height 16px
					text-align center
					border-radius 16px
					font-size 9px
					font-weight 700
					color #ffffff
					background rgb(240, 20, 20)
					box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
			.price
				width 90px
				display inline-block
				vertical-align top
				margin-top 5px
				line-height 24px
				padding-right 12px
				box-sizing border-box
				color #fff
				font-size 12px
				.highlight
					display inline-block
					margin-right 5px
					color #fff
					font-size 16px
					font-weight 700
			.desc
				display inline-block
				vertical-align bottom
				margin-bottom 15px
				margin-left -90px
				font-size 10px
				line-height 16px
		.content-right
			flex 0 0 105px
			width 105px
			.pay
				height 48px
				line-height 48px
				text-align center
				font-size 12px
				font-weight 700
				color #fff
				&.not-enough
					background #2b333b
				&.enough
					background #00b43c
					color #fff
	.ball-container
		.ball
			position fixed
			left 32px
			bottom 22px
			z-index 200
			transition all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
			.inner
				width 16px
				height 16px
				border-radius 50%
				background $green
				transition all 0.4s linear
	.shopcart-list
		position absolute
		left 0
		top 0
		z-index -1
		width 100%
		transform translateY(-100%)
		&.swipe-enter-active, &.swipe-leave-active
			transition transform .3s
		&.swipe-enter, &.swipe-leave-to
			transform translateY(0)
		.list-header
			height 40px
			line-height 40px
			padding 0 18px
			background #f3f5f7
			border-bottom 1px solid rgba(7, 17, 27, 0.1)
			.title
				float left
				font-size 14px
				color rgb(7, 17, 27)
			.empty
				float right
				font-size 12px
				color rgb(0, 160, 220)
		.list-content
			padding 0 18px
			max-height 217px
			overflow hidden
			background #fff
			.food
				position relative
				padding 12px 0
				box-sizing border-box
				bottom-border-1px(rgba(7, 17, 27, 0.1))
				.name
					line-height 24px
					font-size 14px
					olor rgb(7, 17, 27)
				.price
					position absolute
					right 90px
					bottom 12px
					line-height 24px
					font-size 14px
					font-weight 700
					color rgb(240, 20, 20)
					span
						line-height 24px
				.cartcontrol-wrapper
					position absolute
					right 0
					bottom 16px
					div
						display inline-block
						padding 0 3px
						&.iconfont
							color green

.list-mask
	position absolute
	top 0
	left 0
	width 100%
	height 100%
	z-index 40
	backdrop-filter blur(10px)
	opacity 1
	background rgba(7, 17, 27, 0.6)
	&.fade-enter-active, &.fade-leave-active
		transition all 0.5s
	&.fade-enter, &.fade-leave-to
		opacity 0
		background rgba(7, 17, 27, 0)
</style>
