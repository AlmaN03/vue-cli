<template>
  <div class="user-card">
    <h1>Научу зарабатывать от 50 00р. в час </h1>
    <div class="main-information">
        <img src="../../assets/images/коуч.jpg" width="500px">
        <div class="info">
            <h2>
              {{ getAuthorFullName }}
            </h2>
            <strong>Бизне коуч</strong>
            <ul>
                <li>Учу делать РЕАЛЬНЫЕ бабки, на себя просто не хватило времени</li>
                <li>НЕ знаю, что такое "Успешный Успех", но знаю, что нужно ТЕБЕ!</li>
                <li>Пообещал, что побреюсь, когда кого-нибудь ОБМАНУ.</li>
            </ul>
        </div>
    </div>
    <p>Участников: {{users.length}}  </p>
    <ul>
      <li
      v-for="(user,key,index) in users   " 
      :key="index"
      >
      {{ `${index+1} ${getFullName(user)}` }}
      </li> 
      <br>

       <li
      v-for="(value,index) in users[0]   " 
      :key="index"
      >
      {{ value }}
      </li>

    </ul>

    <button
      @click="currentPage--"
    >
      Пред.
    </button>

    <button
      v-for="page in pages"
      :key="page"
      @click="currentPage = page"
    >
    {{page}}
      
    </button>
    

    <button
    @click="currentPage++" 
    >
      След.
    </button>
    
    <p>Страница: {{ currentPage }} из {{ pages }}</p>

  </div>
</template>

<script>
export default {
    name:'userCard',
    data(){
        return{
            firstName:'Игнатий',
            secondName:'Иларионович',
            lastName:'богатов',
            users: [
              {
                firstName: 'Игнатий',
                secondName: 'Иларионович',
                lastName: 'Богатов'
              },
              {
                firstName: 'Игнатий',
                secondName: 'Иларионович',
                lastName: 'Богатов'
               },
              {
                firstName: 'Игнатий',
                secondName: 'Иларионович',
                lastName: 'Богатов'
              }
            ],
            pages:3,
            currentPage:1

        }
        
    },
    computed:{
      getAuthorFullName(){
        return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase()
      }
    },
    methods:{
      getFullName(user){
        return `${user.firstName} ${user.secondName} ${user.lastName}`
      },
      loadUsers(page){
        console.log(`Загрузка пользователей, страница - ${page}`)
      }
    },
    watch:{
      // должны назыываься так же как и функции за которой они следят
      currentPage(page){
        this.loadUsers(page)
      }
    }
  
}
</script>

<style lang="scss" scoped>
  .user-card {
    margin-top: 40px;
  }
  .info {
    margin-left: 50px;
  }
  h2 {
    margin-bottom: 14px;
  }
</style>

