<template>
  <div class="container">
      <div class="flex">
          <div class="img-wrapper">
              <img 
              v-if="isCatVisible"
              :class="imgFilters"
              :style="imgStyles"
              src="../../assets/images/cat.jpg" >
              <p v-else>Кот скоро вернётся </p>
          </div>
          <div class="controls" >
              <h1>Шаверма кот</h1>
              <h2>Фильтры</h2>
              <div class="btn-group flex">
                  <button
                  :class="imgFilters.sepia ? 'active': ''"
                  @click="imgFilters.sepia = !imgFilters.sepia"
                  > Сепия</button>
                  <button
                  :class="imgFilters.border ? 'active': ''"
                  @click="imgFilters.border = !imgFilters.border"
                  
                  > Рамка </button>
                  <button
                  :class="imgFilters.shadow ? 'active': ''"
                  @click="imgFilters.shadow = !imgFilters.shadow"
                  
                  > Тень</button>
              </div>
              <h2>Размеры</h2>
              <div class="btn-group">
                  <label >
                      Ширина: 
                      <input type="number"
                      class="nomer"
                      @input="imgSizes.currentWidth = $event.target.value"
                      :value="imgSizes.currentWidth"
                      :min="imgSizes.minWidth"
                      :max="imgSizes.maxWidth"
                      >
                      <input 
                      type="range"
                      @input="imgSizes.currentWidth = $event.target.value"
                      :value="imgSizes.currentWidth"
                      :min="imgSizes.minWidth"
                      :max="imgSizes.maxWidth"
                      >
                  </label>
                  <label >
                      Высота:
                      <input type="number"
                      @input="imgSizes.currentHeight = $event.target.value"
                      :value="imgSizes.currentHeight"
                      :min="imgSizes.minHeight"
                      :max="imgSizes.maxHeight"
                      >
                      <input 
                      type="range"
                      @input="imgSizes.currentHeight = $event.target.value"
                      :value="imgSizes.currentHeight"
                      :min="imgSizes.minHeight"
                      :max="imgSizes.maxHeight"
                      >
                  </label>
                  <label >
                      Угол:
                      <input type="number"
                      
                      @input="imgSizes.currentRotate = $event.target.value"
                      :value="imgSizes.currentRotate"
                      :min="imgSizes.minRotate"
                      :max="imgSizes.maxRotate"
                      >
                      <input 
                      type="range"
                      @input="imgSizes.currentRotate = $event.target.value"
                      :value="imgSizes.currentRotate"
                      :min="imgSizes.minRotate"
                      :max="imgSizes.maxRotate"
                      >
                  </label>
              </div>


              <button
              @click="isCatVisible = !isCatVisible "
              >
              {{ isCatVisible ? 'Спрятать' : 'Показать' }}
              </button>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name:'MyComponent3',
    data(){
        return{
            isCatVisible: true,
            imgFilters:{
                sepia: false,
                border: false,
                small: false,

            },
            imgSizes:{
                maxWidth:640,
                maxHeight:480,
                currentWidth:640,
                currentHeight:480,
                minWidth:0,
                minHeight:0,
                currentRotate:0,
                minRotate:0,
                maxRotate:180
            }
        }
    },
    computed:{
        imgStyles(){
            return{
                width:`${this.imgSizes.currentWidth}px`,
                height:`${this.imgSizes.currentHeight}px `,
                rotate:`${this.imgSizes.currentRotate}deg `

            }
        }
    } 
}
</script>

<style lang="scss" scoped>
input[type="number"] {
	-moz-appearance: textfield;
	-webkit-appearance: textfield;
	appearance: textfield;
    width: 25px;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
	display: none;
    width: 25px;
}

  .container {
    margin-top: 40px;
  }
  .controls {
    margin-left: 20px;
  }
  .img-wrapper {
    width: 640px;
    height: 480px;
    background-color: #cecece;
  }
  img {
    transition: 0.2s ease;
    &.sepia {
      filter: sepia(100%);
    }
    &.border {
      border: 5px dashed #464646
    }
    &.shadow {
      box-shadow: 7px 7px 10px 0 #7e7e7e;
    }
  }
  button {
    margin-right: 10px;
    &.active {
      background-color: #dbdbdb;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  .btn-group {
    margin-bottom: 20px;
  }
  input[type="range"] {
    display: block;
  }

  

</style>
