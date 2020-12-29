<template>
	<div class="indexBox">
		<HeaderTop/>
		<div ref="nav" class="box">
			<div id="topPart">
				<h1>Eleven's Blog</h1>
				<nav class="nav" :class="{'stayTop': isTop}">
					<!-- <router-link class="navLi" :to="{name: 'home'}">主页</router-link>
					<span> | </span> -->
					<router-link class="navLi" :class="{'current': isCurrent == 'note'}" :to="{name: 'note', params: {type: 'all'}}">笔 记</router-link>
					<span> | </span>
					<router-link class="navLi" :class="{'current': isCurrent == 'program'}" :to="{name: 'program'}">项 目</router-link>
					<span> | </span>
					<router-link class="navLi" :class="{'current': isCurrent == 'about'}" :to="{name: 'about'}">关 于 我</router-link>
				</nav>
			</div>
			<transition name="fade">
				<router-view class="content"></router-view>
			</transition>
		</div>
		<Footer/>
	</div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import Footer from '../../components/Footer/Footer.vue'
export default {
	data () {
		return {
			isCurrent: 'note',
			isTop: false
		}
	},
	components: {
		HeaderTop,
		Footer
	},
	created() {
		this.changeCurrent(this.$route.name)
		console.log(this.$route)
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	watch: {
		$route() {
			this.changeCurrent(this.$route.name)
		},
		handleScroll() {
			console.log('move')
		}
	},
	methods: {
		changeCurrent(now) {
			this.isCurrent = now
			console.log(this.isCurrent)
		},
		handleScroll() {
			let navPos = this.$refs.nav.getBoundingClientRect()
			// let navPos2 = this.$refs.nav.scrollTop;
			// console.log(navPos2)
			if (navPos.y < -64) {
				if (!this.isTop) {
					this.isTop = true
				}
			} else {
				this.isTop = false
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
$mainColor = #434a50
.indexBox
	overflow hidden
	padding-bottom 90px
	.box
		position relative
		margin 30px auto
		#topPart
			height 141px
			background white
			width 100%
			h1 
				font-size 30px
				padding 30px 0
				width 95%
				margin 0 auto
			nav
				width 100%
				height 40px
				padding 5px 0
				border-bottom 1px solid #555
				z-index 999
				background white
				&.stayTop
					position fixed
					top 26px
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
				.navLi 
					display inline-block
					width 100px
					height 40px
					line-height 40px
					margin 0 5px
					text-align center
					&.router-link-active
						background-color $mainColor
						border-radius 7px
						color #fff
						font-size 14px
		.content
			width 90% 
			margin 20px auto
		.fade-enter-active 
			transition opacity .5s
		.fade-leave-active 
			transition 0
		.fade-enter, .fade-leave-to 
			opacity 0
</style>