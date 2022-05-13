import Vue from 'vue'
import Vuex from 'vuex'
// import reactions from '../mocks/reactions'
import reactionsModul from './reactions'



Vue.use(Vuex)

// const loadReactions = (time) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(reactions)
//       }, time)
//     })
//   }
  

export default new Vuex.Store({ // обращение к этому this.$store.(state| mutations | getters | actions ).название переменной 
    modules: {reactionsModul}



//   state: {
//     reactions: []
//   },
//   getters:{
//     //    в качестве аргумента геттеры принимают только (state)
//       getReactions(state){
//           return state.reactions
//       }
//   },
//   mutations: {
//       SET_REACTIONS(state, payload) {
//           state.reactions = payload
//       }
//   },
//   // являются асинхронными 
//   actions:{
//     //    (context, payload) могут быт ьлюбыми ( но в такой очерёдности )  
//     // context - отвечает за ... ещё не понял 
//     // payload - то чт омы можем передавать из этого компонента 

//     // async loadReactions(context, payload ){
        
//     async loadReactions({commit}, payload ){
//         try {
//             const reactions = await loadReactions(payload)
//             // console.log(context);
//             // console.log(payload);
//             commit('SET_REACTIONS', reactions)

//         } catch (error) {
//             console.error(error);            
//         }
//     }
//   } 
})
