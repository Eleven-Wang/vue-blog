<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(good, index) in goods" :key="index" class="menu-item" :class="{'current': currentIndex === index}" @click="clickMenuItem(index)">
					<span class="text bottom-border-1px">
						<img class="icon"
						:src="good.icon">
						{{good.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWrapper">
			<ul>
				<li class="food-list-hook" v-for="(good, index) in goods" :key="index">
					<h1 class="title">{{good.name}}</h1>
					<ul>
						<li v-for="(food, index) in good.foods" :key="index" class="food-item bottom-border-1px">
							<div class="icon">
								<img width="57" height="57"
								:src="food.icon">
							</div>
							<div class="content">
								<h2 class="name">{{food.name}}</h2>
								<p class="desc">{{food.description}}</p>
								<div class="extra">
									<span class="count">月售 {{food.sellCount}} 份</span>
									<span>好评率 {{food.rating}}%</span>
								</div>
								<div class="price">
									<span class="now">￥{{food.price}}</span>
									<span v-if="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
								</div>
								<div class="cartcontrol-wrapper">
										<CartControl :food="food"></CartControl>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<br>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import CartControl from '@/components/Program/CartControl/CartControl.vue'
export default {
	data () {
		return {
			tops: [],
			currentIndex: 0,
			scrollY: 0
		}
	},
	created () {
		this.$store.dispatch('getGoods')
	},
	computed: {
		goods () {
			return this.$store.state.a.goods
		}
	},
	watch: {
		goods () {
			this.$nextTick(() => {
				console.log(this.goods)
				this._initScroll()
				this._initTops()
			})
		}
	},
	methods: {
		_initScroll () {
			this.menuScroll = new BScroll(this.$refs.menuWrapper, {
				click: true
			})
			this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
				click: true,
				probeType: 2
			})
			this.foodsScroll.on('scroll', (pos) => {
				this.setIndex(pos)
			})
			// 惯性滚动部分没有保存位置数据，所以需要滚动结束时再设置
			this.foodsScroll.on('scrollEnd', (pos) => {
				this.setIndex(pos)
			})
		},
		_initTops () {
			const tops = []
			let top = 0
			tops.push(top)
			const lis = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook')
			const list = Array.prototype.slice.call(lis)
			list.forEach(li => {
				top += li.clientHeight
				tops.push(top)
			})
			this.tops = tops
		},
		clickMenuItem (index) {
			this.currentIndex = index
			this.scrollY = this.tops[index]
			this.foodsScroll.scrollTo(0, -this.scrollY, 300)
		},
		setIndex (pos) {
			this.scrollY = Math.abs(pos.y)
			this.currentIndex = this.tops.findIndex((top, index) => {
				return this.scrollY < this.tops[index + 1] && this.scrollY >= top
			})
		}
	},
	components: {
		CartControl
	}
}
</script>

<style lang='stylus' scoped>
@import "../../../common/css/mixins.styl"
.goods
	display: flex
	position: absolute
	width: 100%
	height: 100%
	background: #fff;
	.menu-wrapper
		flex: 0 0 80px
		width: 80px
		background: #f3f5f7
		.menu-item
			display: table
			height: 54px
			width: 56px
			padding: 0 12px
			line-height: 14px
			&.current
				position: relative
				z-index: 10
				margin-top: -1px
				background: #fff
				color: $green
				font-weight: 700
				.text
					border-none()
			.icon
				display: inline-block
				vertical-align: top
				width: 12px
				height: 12px
				margin-right: 2px
				background-size: 12px 12px
				background-repeat: no-repeat
			.text
				display: table-cell
				width: 56px
				vertical-align: middle
				bottom-border-1px(rgba(7, 17, 27, 0.1))
				font-size: 12px
	.foods-wrapper
		flex: 1
		.title
			padding-left: 14px
			height: 26px
			line-height: 26px
			border-left: 2px solid #d9dde1
			font-size: 12px
			color: rgb(147, 153, 159)
			background: #f3f5f7
		.food-item
			display: flex
			margin: 18px
			padding-bottom: 18px
			bottom-border-1px(rgba(7, 17, 27, 0.1))
			&:last-child
				border-none()
				margin-bottom: 0
			.icon
				flex: 0 0 57px
				margin-right: 10px
			.content
				flex: 1
				.name
					margin: 2px 0 8px 0
					height: 14px
					line-height: 14px
					font-size: 14px
					color: rgb(7, 17, 27)
				.desc, .extra
					line-height: 10px
					font-size: 10px
					color: rgb(147, 153, 159)
				.desc
					line-height: 12px
					margin-bottom: 8px
				.extra
					.count
						margin-right: 12px
				.price
					font-weight: 700
					line-height: 24px
					.now
						margin-right: 8px
						font-size: 14px
						color: rgb(240, 20, 20)
					.old
						text-decoration: line-through
						font-size: 10px
						color: rgb(147, 153, 159)
				.cartcontrol-wrapper
					position: absolute
					right: 0
					bottom: 0
</style>
