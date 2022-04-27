<template>
    <div class="product-card">
        <img src="imgUrl" 
        width="300px"
        >
        <div class="product-card__info">
            <h2>{{ title }} </h2>
            <p class="price"> {{price}}р. </p>
            <p class="count">Доступно для доставки {{count}} </p>
            <button>Добавить в корзину </button>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'ProductCard',
  data(){
      return{
          title: 'Стол Jim',
          price: '19999',
          imgUrl: 'https://hoff.ru/upload/iblock/af2/af2d37161f217d4f489373be7da4a7a0.jpg',
          count:'20'
      }
  },
  
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
