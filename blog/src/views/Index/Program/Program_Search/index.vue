<template>
	<div>
		<p>
			<input type="text" v-model="keyword" placeholder="搜索用户" class="left">
			<button @click.prevent="search">搜索</button>
		</p>
		<div v-if="loading">
			请求中...
		</div>
		<div ref="userList">
			<ul v-if="users">
				<li v-for="(item, index) in users" :key="index">
					<img :src="item.avatar_url" alt="">
					<p>{{item.login}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
		return {
			keyword: '',
			users: [],
			page: 1,
			contentHeight: 0,
			onOff: true,
			loading: false
		}
	},
	methods: {
		search () {
			this.loading = true
			this.getUsers(() => {
				this.loading = false
			})
		},
		getUsers (cb) {
			axios.get('https://api.github.com/search/users?per_page=40&q=' + this.keyword + '&page=' + this.page).then(res => {
				if (res.status === 200) {
					this.users = this.users.concat(res.data.items)
					cb()
					console.log(res)
				}
			})
		}
	},
	mounted () {
		window.addEventListener('scroll', () => {
			let scrollT = document.documentElement.scrollTop || document.body.scrollTop
			if ((this.contentHeight - scrollT) < 1300) {
				if (this.onOff) {
					this.onOff = false
					console.log('hello')
					this.page++
					this.getUsers()
				}
			} else {
				this.onOff = true
			}
		})
	},
	updated () {
		this.contentHeight = document.documentElement.scrollHeight
	}
}
</script>

<style lang='stylus' scoped>
p
	margin-bottom 20px
	input
		width 200px
		height 26px
		border 1px solid #999
		border-radius 5px
		padding 0 5px
		
	button
		width 50px
		height 28px
		border 1px solid #999
		border-radius 5px
div
	ul
		width 100%
		li
			width 25%
			float left
			border 1px solid #eee
			box-sizing border-box
			img
				width 100px
				height 100px
				margin 5px auto
				display block
			p
				text-align center
				line-height 40px
				overflow hidden
</style>
