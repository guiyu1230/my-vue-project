<template>
	<div>
		开放产品	
		<div> {{ getVuex }} </div>
		<div> {{ getTotalPrice }} </div>
	</div>
</template>

<script>
export default{
	name: "earth",
	data(){
		return {

		}
	},
	computed:{
		getVuex(){
			return this.$store.getters.getOrder;
		},
		getTotalPrice(){
			return this.$store.getters.getPrice;
		}
	}
}
</script>

<style scoped>
	
</style>