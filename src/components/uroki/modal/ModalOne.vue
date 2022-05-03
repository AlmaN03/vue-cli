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

              <!-- ref="modalBody" при отсуцтвии миксина нужно вставить ниже -->
              <div class="modal-body"
              
              @scroll="onBodyScroll"
              >
                  <!-- слоты перезаписываются если передаются с родительскокого компонента  -->
                  <slot> </slot>
              </div>
              <div class="modal-footer">
                  <slot name="footer"> 
                    <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeModal"
                        >Отмена
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        :disabled="!isRulesReaded"
                        @click="ConsilLog"
                        >
                        Принять
                    </button>
                  </slot>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// import ScrollHandler from '../../../mixins/scrollHandler' // микси нсейчас в плагине 


// clientHeight - размер отображаемой скрол части
// scrollTop- количество просколеных пикселей 
// scrollHeight - высота скрол части
export default {
    props:{
        title:{
            type: String,
            default:''
        }
    },
    // mixins:[ScrollHandler],
    data(){
        return{
            isRulesReaded: false
        }
    },
    created(){
        this.$log()
    },
    // проматываетскрол в самый низ в данном случае в пользовательском соглашении
    // mounted(){
    //     const modalBody =this.$refs.modalBody 
    //     modalBody.scrollTop = modalBody.scrollHeight  -  modalBody.clientHeight
    // },
    
    methods:{
        ConsilLog(){
            console.log('Сработано ');
        },
        closeModal(){
            this.$emit('close')
        },
        // onBodyScroll(){ //перенесено в миксин 
        //     const modalBody =this.$refs.modalBody
        //     if(modalBody.clientHeight+ modalBody.scrollTop >= modalBody.scrollHeight ){
        //        this.isRulesReaded = true
        //     }
        // },
        onScrolEnd(){
            this.isRulesReaded = true
        }
    } 
}
</script>


<style lang="scss" scoped>
.modal {
    margin-top: 80px;
  display: block;
  &-body {
    height: 200px;
    overflow-y: scroll;
  }
}

</style>



