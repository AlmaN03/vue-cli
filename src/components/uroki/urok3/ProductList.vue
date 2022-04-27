<template>
  <div class="product-list">
    <div class="flex top-information">
      <h1>Письменные столы</h1>
        <!-- <input type="text" class="search" :value="searchText" @input="searchText = $event.target.value"> -->
        <my-input @search="searchProducts" />   
        
    </div>
    <ul class="list-default flex">
      <li 
      v-for="(product,index) in products "
      :key="index">
        <product-card
          :title="product.title" 
          :price="product.price"
          :img-Url="product.imgUrl"
          :count="product.count"
          @addToBasket="addToBasket(index)"
          />
      </li>
    </ul>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import MyInput from './MyInput.vue'



export default {
  name: 'ProductList',
  components: {ProductCard,MyInput},
  data(){
      return{

        products:[
              {
                title: 'Стол Jim',
                price: 19999,
                imgUrl: 'https://dom74mebeli.ru/files/originals/1_410.jpg',
                count: 30
              },
              {
                title: 'Стол Monako',
                price: 17199,
                imgUrl: 'https://dom74mebeli.ru/files/originals/1_410.jpg',
                count: 20
              },
              {
                title: 'Стол с двумя ящиками Кварт MD 768',
                price: 10999,
                imgUrl: 'https://dom74mebeli.ru/files/originals/1_410.jpg',
                count: 23
              },
              
          ]
      }
  },
  methods:{
    addToBasket(index){
      console.log(index+1);

    },
    searchProducts(searchText){
      console.log('Загрузить товары:'+searchText);
    }
  }
}
</script>


<style lang="scss" scoped>
li {
  margin-right: 20px;
}
.top-information {
  align-items: center;
  h1 {
    margin-bottom: 0;
  }
  margin-bottom: 22px;
}
</style>


