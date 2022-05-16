<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <modal
          name="auth-modal"
          classes="auth-modal"
          height="350px"
          width="500px"
          @before-close="close"
        >
          <form @submit.prevent="formSubmit">
            <h3>{{ isSignInForm ? 'Войти' : 'Зарегистрироваться' }}</h3>
            <label>
              Email
              <input
                type="text"
                class="form-control"
                placeholder="Ваша эл. почта"
                v-model="form.email"
              >
            </label>
            <label>
              Пароль
              <input
                type="password"
                class="form-control"
                placeholder="Ваш пароль"
                v-model="form.password"
              >
            </label>
            <div class="actions">
              <a
                href="#"
                @click.prevent="mode = isSignInForm ? 'signUp' : 'signIn'"
              >
                {{ isSignInForm ? 'Регистрация' : 'Вход' }}
              </a>
              <button
                type="button"
                class="btn btn-outline-dark"
                @click="$emit('close')"
              >
                Отмена
              </button>
              <button
                type="submit"
                class="btn btn-dark"
              >
                Подтвердить
              </button>
            </div>
          </form>
        </modal>
      </div>
    </div>
  </div>            
</template>

<script>
export default {
  name: 'auth-modal',
  data() {
    return {
      mode: 'signIn',
      form: {
        email: '',
        password: '' 
      },
      errors: []
    }
  },
  computed: {
    isSignInForm() {
      return this.mode === 'signIn'
    }
  },
  mounted () {
    this.$modal.show('auth-modal')
  },
  methods: {
    changeUserState() {
      if (this.auth) {
        localStorage.removeItem('auth')
        this.$router.push({ name: 'main'})
      } else {
        localStorage.setItem('auth', true)
        this.auth = true
      }
    },
    close() {
      this.$emit('close')
    },
    formSubmit() {
      if (this.isSignInForm) {
        this.signIn()
      } else {
        this.signUp()
      }
    },
    signIn() {
      fetch('http://localhost:3000/auth/sign_in',{
        methods: 'POST',
        headers:{
          'Content-Type': 'aplication/json'
        }
      } )
    },
    signUp() {}
  }
}

</script>

<style lang="scss">
.modal {
  margin-top: 80px;
  display: flex;
}

modal{
  padding: 30px 40px;
}

form {
  display: flex;
  flex-direction: column;
  height: 100%;
  h3 {
    margin-bottom: 30px;
  }
  label {
    width: 100%;
    margin-bottom: 20px;
  }

  .actions {
    margin-top: 13px;
    display: flex;
    align-items: baseline;
    a {
      color: #EB5804;
      margin-right: 10px;
    }
    button {
      width: 130px;
      margin-left: 10px;
      &:first-of-type {
        margin-left: auto;
      }
    }
  }
}
</style>