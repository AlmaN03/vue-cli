<template>
    <div class="user-page">
        <button
        type="button"
        class="btn btn-primary"
        @click="openModal"
        >
            Отправить что-нибуть
        </button>
        <modal
            v-if="isModalOpen"
            title="Пользовательское соглашение"
            @close="isModalOpen = false "
        >
           <div class="information">
               <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae, repellendus fugit. Perferendis molestiae reiciendis 
                magni minus, saepe voluptatem. Laborum temporibus quas eos minus 
                placeat saepe nisi nesciunt distinctio optio fugit.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae, repellendus fugit. Perferendis molestiae reiciendis 
                magni minus, saepe voluptatem. Laborum temporibus quas eos minus 
                placeat saepe nisi nesciunt distinctio optio fugit.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae, repellendus fugit. Perferendis molestiae reiciendis 
                magni minus, saepe voluptatem. Laborum temporibus quas eos minus 
                placeat saepe nisi nesciunt distinctio optio fugit.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae, repellendus fugit. Perferendis molestiae reiciendis 
                magni minus, saepe voluptatem. Laborum temporibus quas eos minus 
                placeat saepe nisi nesciunt distinctio optio fugit.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae, repellendus fugit. Perferendis molestiae reiciendis 
                magni minus, saepe voluptatem. Laborum temporibus quas eos minus 
                placeat saepe nisi nesciunt distinctio optio fugit.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Molestiae, repellendus fugit. Perferendis molestiae reiciendis 
                magni minus, saepe voluptatem. Laborum temporibus quas eos minus 
                placeat saepe nisi nesciunt distinctio optio fugit.
                </p>               
           </div>
           <!-- Передача в именной слот -->
            <!-- <template v-slot:footer>
                <button
                        type="button"
                        class="btn btn-secondary"
                        @click="closeModal"
                        >Отмена 1
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        :disabled="!isRulesReaded"
                        >
                        Принять 1
                    </button>
            </template> -->
        </modal>
        
    </div>
</template>

<script>
import Modal from './ModalOne.vue'

export default {
    components: { Modal },
    data(){
        return{
            isModalOpen: false
        }
    },
    methods:{
        openModal(){
            this.isModalOpen = true
        }
    }
}
</script>

<style lang="scss" scoped>
.user-page{
    margin: 10px;
}
</style>
