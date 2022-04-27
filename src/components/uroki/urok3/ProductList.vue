<template>
    <div class="product-list">
        <h1>Письменные столы</h1>
        <!-- <input type="text" class="search" :value="searchText" @input="searchText = $event.target.value"> -->
        <my-input v-model="searchText" />   
        {{searchText}}
        <button >
          Найти
        </button>
        <ul class="list-default flex">
            <li
              v-for="(product,index) in products "
              :key="index"
            > 
                <product-card
                :title="product.title" 
                :price="product.price"
                :img-Url="product.img-Url"
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
        searchText:'',
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
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
  margin-bottom: 22px;
}
</style>

