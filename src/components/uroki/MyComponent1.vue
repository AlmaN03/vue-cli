<template>
  <div class="root">
    <label >
        Введите  емаил 
        <input 
        type="email" 
        :value="email"
        @input="emailInput($event.target.value) "
        >
    </label>
       
    <label>
        Введите пароль:
        <input 
        type="password" 
        :value="password"
        @input="pasInput($event.target.value)"
        >
    </label>
  </div>
</template>

<script>
export default {
  name: 'MyComponent1',
  data(){
      return {
          email:'email@email.ru',
          password:'123456789'
      }
  },
  methods:{
      emailInput(value){
          this.email = value
      },
      pasInput(value){
          this.password = value
      }
  }
}
</script>
