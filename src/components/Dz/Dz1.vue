<template>
  <div class="root">
    <label >
        выберите количество продуктов <br><br>
        <button
        @click="minus"
        >-</button>

        <input 
        type="number"
        :value="Num"
        :min="MinNum"
        :max="MaxNum"
        >
        <button   
        @click="plus"
        
        >+</button>

    </label>
  </div>
</template>

<script>
export default {
  name: 'DzComponent1',
  data(){
      return{
        Num:1,
        MinNum:10,
        MaxNum:10
      }
  },
  methods:{
    minus(){
      if(this.Num > this.MinNum){
        this.Num--
      }
    },
    plus(){
      if(this.Num< this.MaxNum){
        this.Num++
      }
    }
      
  }
}
</script>



