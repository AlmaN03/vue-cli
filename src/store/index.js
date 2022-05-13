// import Vue from 'vue'
// import Vuex from 'vuex'
// // import reactions from '../mocks/reactions'
// import reactions from './reactions';


// Vue.use(Vuex)

// // имитация сервера 
// ////////////////////////////
// // const LoadReactions = (time) => {
// //   return new Promise ((resolve) =>{
// //     setTimeout(() => {
// //       resolve(reactions)
// //     }, time)
// //   })
// // }
// ////////////////////////////


// export default new Vuex.Store({
//   modules:{reactions}
//     // переменные
//   // state: {
//   //   reactions:[

//   //   ]
//   // },
//   // // получает переменные из стейта 
//   // getters:{
//   //   getReactions(state){
//   //     return state.reactions
//   //   }
//   // },
//   // // управление переменными 
//   // mutations: {
//   //   SET_REACTIONS( state, payload){
//   //     state.reactions = payload

//   //   }
//   // },
//   // // похож на мутации но асинхроннен  
//   // actions:{
//   //   async LoadReactions({commit}, payload){
//   //     try{
//   //       const reactions = await LoadReactions (payload)
//   //       commit ('SET_REACTIONS',reactions)

//   //     } catch(error){
//   //       console.error(error);
//   //     }
//   //   }
//   // }
// })
