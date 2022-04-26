<template>
  <div class="container">
    <h1>Я найду тебя! </h1>
    <input 
    @input="searchText =$event.target.value"
    type="text"> 
    <p>Всего имён: {{names.length}} , совпадений: {{filterText.length}} </p>
    <ul>
      <li
      v-for="(name, index) in filterText" 
      :key="index"
      >
      {{name}}
      </li>
    </ul>


  </div>
</template>

<script>
export default {
  name: 'DzComponent2',
  data(){
      return{
        searchText:'',
        names:['Василий','Петр','Данил','Григорий']
      }
  },
  computed:{
    filterText(){
      return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }  
}
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 14px;
    margin-top: 40px;
  }
</style>




