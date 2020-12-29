<template>
	<div class="star" :class="'star-' + size" >
		<span v-for="(el, index) in starClass" :key="index" :class="el" class="star-item"></span>
	</div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
	data () {
		return {}
	},
	props: ['rating', 'size'],
	computed: {
		starClass () {
			const rateArr = []
			let { rating } = this
			for (let index = 0; index < 5; index++) {
				if (rating >= 1) {
					rateArr.push(CLASS_ON)
				} else if (rating > 0) {
					rateArr.push(CLASS_HALF)
				} else {
					rateArr.push(CLASS_OFF)
				}
				rating--
			}
			return rateArr
		}
	}
}
</script>

<style lang="stylus" scoped>
@import "./css/mixins.styl"
.star //2x图 3x图
	float left
	font-size 0
	.star-item
		display inline-block
		background-repeat no-repeat
	&.star-48
		.star-item
			width 20px
			height 20px
			margin-right 22px
			background-size 20px 20px
			&:last-child
				margin-right: 0
			&.on
				bg-image('./images/stars/star48_on')
			&.half
				bg-image('./images/stars/star48_half')
			&.off
				bg-image('./images/stars/star48_off')
	&.star-36
		.star-item
			width 15px
			height 15px
			margin-right 6px
			background-size 15px 15px
			&:last-child
				margin-right 0
			&.on
				bg-image('./images/stars/star36_on')
			&.half
				bg-image('./images/stars/star36_half')
			&.off
				bg-image('./images/stars/star36_off')
	&.star-24
		.star-item
			width 10px
			height 10px
			margin-right 3px
			background-size 10px 10px
			&:last-child
				margin-right 0
			&.on
				bg-image('./images/stars/star24_on')
			&.half
				bg-image('./images/stars/star24_half')
			&.off
				bg-image('./images/stars/star24_off')
</style>
