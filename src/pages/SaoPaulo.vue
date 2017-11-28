<template >
  <main-layout>
    <p>São Paulo</p>
      <ol>
        <li v-for="todo in todos">
          {{ todo  }}
        </li>
      </ol>
  </main-layout>
</template>
<script>
  var Vue = require('vue');
  var VueResource = require('vue-resource');
  var links = 'https://api-front.tempoagora.com.br/observed?city=SaoPaulo-SP';
  Vue.use(VueResource);

  import MainLayout from '../layouts/Main.vue'
  export default {
    components: {
      MainLayout
    },
    data: {
      todos: null
    },
    methods:{
      getUsers: function(){
        this.$http.get(links).then(function(response){
          this.todos = response.data.list;
          console.log(response.data.list);
         }, function(error){
          console.log(error.statusText);
         });
        }
    },
    mounted: function () {
      this.getUsers();                                
    }
  }
</script>
