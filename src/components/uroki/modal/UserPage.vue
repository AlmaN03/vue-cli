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
            title="Очень важная информация"
            @close="isModalOpen = false "
        />
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
