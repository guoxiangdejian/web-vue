<template>
	<div id="app">
		<transition name="el-fade-in">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		</transition>
		<transition name="el-fade-in">
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {
			
		}
	}
</script>

<style>

</style>