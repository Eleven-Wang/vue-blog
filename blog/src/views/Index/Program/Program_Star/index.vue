<template>
	<div>
		<p class="setStar">
			<span>评分：</span>
			<input class="rateText" ref="rate" type="text" placeholder="满分5分">
			<input class="btn" @click=rate() type="button" value="确定">
		</p>
		<p v-show="isShow" class="tip">请输入0-1之间的数字</p>
		<div class="star">
			<Star :rating="rating" size="24" />
		</div>
	</div>
</template>

<script>
import Star from '@/components/Program/Star/Star'
export default {
	data () {
		return {
			rating: 0,
			isShow: false
		}
	},
	components: {
		Star
	},
	methods: {
		rate() {
			let value = this.$refs.rate.value
			if (value > 5 || value < 0) {
				this.isShow = true
			} else {
				this.rating = this.$refs.rate.value
				this.isShow = false
			}
		}
	},
	mounted () {
		this.$refs.rate.focus()
	}
}
</script>

<style lang="stylus" scoped>
.setStar
	margin 0 0 10px 0
	.rateText
		width 100px
		height 20px
		border 1px solid orange
		border-radius 8px
		padding 5px
		margin 0 10px
		font-size 14px
	.btn
		width 50px
		height 30px
		color #666
		font-size 12px
		border 1px solid #666
		border-radius 8px
		padding 5px
.tip
	font-size 12px
	color orange
	marign 5px 0
.star
	margin-top 5px
</style>