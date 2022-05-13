<template>
  <div class="films-layout">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import {mapActions} from 'vuex'

export default {
  components: { MainHeader },
  methods:{
    ...mapActions({
      load:'reactionsModul/loadReactions'
      })
  },
  created() {
    // this.$store.dispatch('loadReactions', 1000) // 1000- задержка в 1 секунду передаётся в VUEX
    // более краткая запись верхнего (для жтого испольузется методсы)
    this.load (1000)
    
  }
}
</script>
