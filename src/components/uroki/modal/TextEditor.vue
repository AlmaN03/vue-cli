<template>
  <div class="text-editor">
      <textarea v-model="text"></textarea>
      <div class="output-text"  :inner-html.prop="text | upperCase | emoji" >
          <!-- {{ text | upperCase}} -->
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            text: ''
        }
    },
    filters:{
        upperCase(value){
            return value.toUpperCase()
        },
        emoji(value) {
            return value.replace(':)', '😀')
        }
    }
}
</script>

<style lang="scss" scoped>
textarea {
    margin-top: 25px;
  width: 500px;
  height: 200px;
}
</style>



