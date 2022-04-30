<template>
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин:</label>
      <input 
      id="login" 
      class="form-control"
      v-model="login"
      >
    </div>
    <div class="form-group">
      <label for="login">Почта:</label>
      <input 
      id="email" 
      type="email"
      class="form-control"
      v-model="email"
      >
    </div>
    <div class="form-group">
      <label for="login">Пароль:</label>
        <input 
        id="password"
        type="password"
        class="form-control"
        v-model="password"
        >
    </div>
    <!-- <div class="form-group">
      <label for="country">Страна проживания:</label>
      <select id="country" class="form-control">
        <option> Россия</option>
      </select>
    </div> -->
    <!-- <div class="form-group">
      <label for="themes">Любимые темы: </label>
      <select id="themes" class="form-control">
        <option >IT</option>
      </select>
    </div> -->
    <!-- <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="notification" >
      <label class="form-check-label" for="notification">Уведомлять меня о новых курсах </label>
    </div> -->
    <!-- <div class="flex">
      <div class="form-check">
        <input class="form-check-input" type="radio" value="male" name="exampleRadios" id="male" >
        <label class="form-check-label" for="male" >
          Мужчина
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="female" name="exampleRadios" id="female" >
        <label class="form-check-label" for="female">
          Женщина
        </label>
      </div>
    </div> -->
    <!-- <button type="submit" class="btn btn-primary">Сохранить</button> -->
  </form>
</template>

<script>
export default {
  name: 'UserForm',
  data(){
      return{
        login:'',
        email:'',
        password:'',

      }
  }
}
</script>

<style lang="scss" scoped>
.sign-up{
  margin:10px 50px ;
}
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>





