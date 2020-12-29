<template>
	<div>
		<h4>上传图片</h4>
		<p>上传到</p>
		<div>
			<ul>
				<li>
					<img src="" alt="">
					<p>name</p>
				</li>
				<li>
					<p>+</p>
					<p>添加照片</p>
					<input type="file" accept="image/jpeg, image/gif, image/png" name="+">
				</li>
			</ul>
			<p>拖拽到此处上传</p>
		</div>
		<button>点击上传</button>
	</div>
</template>

<script>
export default {
	data () {
		return {}
	}
}
</script>

<style lang='stylus' scoped>
</style>
