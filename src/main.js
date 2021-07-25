
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.bus = new Vue();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


// // D A R K  &&  L I G H T  M O D E  S C R I P T //

// const btn = document.querySelector('.mode__btn');
// let prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// // Home page selectors

// const searchbar = document.querySelectorAll('.col');
// const searchbarInput = document.querySelectorAll(".col input");
// const cards = document.querySelectorAll('.job__card');
// const cardsHeading = document.querySelectorAll('.job__card h4');
// const jobBody = document.querySelectorAll('.job__body--content');
// const searchText = document.querySelector('.nav__searchbar--checkbox p');

// const mobileSearchbar = document.querySelector('.nav__searchbar--mobile')
// const mobileInput = document.querySelector('.nav__searchbar--mobile input')

// // Event listener

// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     document.body.classList.toggle("light-theme");
//     searchText.classList.toggle("light-theme");
//     mobileSearchbar.classList.toggle("light-theme");
//     mobileInput.classList.toggle("light-theme");


//     for (let i = 0; i < searchbar.length; i++) {
//         searchbar[i].classList.toggle('light-theme');       
//     }

//     for (let i = 0; i < searchbar.length; i++) {
//         searchbarInput[i].classList.toggle('light-theme');       
//     }
    
//     for (let i = 0; i < cards.length; i++) {
//       cards[i].classList.toggle('light-theme');      
//     }

//     for (let i = 0; i < cardsHeading.length; i++) {
//       cardsHeading[i].classList.toggle('light-theme');      
//     }

//     for (let i = 0; i < jobBody.length; i++) {
//       jobBody[i].classList.toggle('light-theme');      
//     }
   
//   } else {
//     document.body.classList.toggle("dark-theme");
//     searchText.classList.toggle("dark-theme");
//     mobileSearchbar.classList.toggle("dark-theme")
//     mobileInput.classList.toggle("dark-theme");


//     for (let i = 0; i < searchbar.length; i++) {
//         searchbar[i].classList.toggle('dark-theme');       
//     }

//     for (let i = 0; i < searchbar.length; i++) {
//         searchbarInput[i].classList.toggle('dark-theme');       
//     }

//     for (let i = 0; i < cards.length; i++) {
//       cards[i].classList.toggle('dark-theme');      
//     }

//     for (let i = 0; i < cardsHeading.length; i++) {
//       cardsHeading[i].classList.toggle('dark-theme');      
//     }
    
//     for (let i = 0; i < jobBody.length; i++) {
//       jobBody[i].classList.toggle('dark-theme');      
//     }
//   }
// });
