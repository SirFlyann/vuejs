import Vue from 'vue'
import page from 'page'
import routes from './routes'

const app = new Vue({
  el: '#app',
  data: {
    ViewComponent: { render: h => h('div', 'loading...') }
  },
  render (h) { return h(this.ViewComponent) }
});

// var link = 'https://api-front.tempoagora.com.br/observed?city=SaoPaulo-SP';
// const app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: null
//   },
//   methods:{
//     getUsers: function(){
//       this.$http.get(link).then(function(response){
//         this.todos = response.data.list;
//       }, function(error){
//         console.log(error.statusText);
//       });
//     }
//   },
//   mounted: function () {
//     this.getUsers();
//   }
// });

Object.keys(routes).forEach(route => {
  const Component = require('./pages/' + routes[route] + '.vue')
  page(route, () => app.ViewComponent = Component)
})
page('*', () => app.ViewComponent = require('./pages/404.vue'))
page()
