<template>
	<div>
		勇攀高峰
		<div> {{ getVuex }} </div>
	</div>
</template>

<script>
export default{
	name: "hill",
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