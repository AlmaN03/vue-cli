<template>
  <div class="modal fade show">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">
                      {{ title}} 
                  </h5>
                  <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  @click="closeModal"
                  >
                  <span aria-hidden="true"> &times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <p>очень важный текст</p>
              </div>
              <div class="modal-footer">
                  <button
                  type="button"
                  class="btn btn-secondary"
                  @click="closeModal"
                  >Отмена</button>
                  <button
                  type="button"
                  class="btn btn-primary"
                  >
                  Сохранить
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            default:''
        }
    },
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }  
}
</script>


<style lang="scss" scoped>
.modal {
  display: block;
  &-body {
    height: 200px;
    overflow-y: scroll;
  }
}
</style>



