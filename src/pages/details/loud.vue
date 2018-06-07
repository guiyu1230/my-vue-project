<template>
	<div>
		品牌营销
		<div> {{ getVuex }} </div>
	</div>
</template>

<script>
export default{
	name: "load",
	data(){
		return {
			
		}
	},
	computed:{
		getVuex(){
			return this.$store.getters.getOrder;
		}
	}
}
</script>

<style scoped>
	
</style>