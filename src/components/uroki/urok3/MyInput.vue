<template>
    <input type="text" class="search" @input="$emit('input',$event.target.value) " >     
</template>

<script>
export default {
    model:{
        prop:'value',
        event:'input'
    }
    
}
</script>

<style lang="scss" scoped>
input {
  height: 25px;
  margin-left: 40px;
}
</style>
