(function(Vue) {
    'use strict';
      var link = 'https://api-front.tempoagora.com.br/observed?city=SaoPaulo-SP';
      new Vue ({
                el: '#app-4',
                data: {
                            todos: null
                                      
                },
                methods:{
                  getUsers: function(){
                    this.$http.get(link).then(function(response){
                                    this.todos = response.data.list;
                    }, function(error){
                                    console.log(error.statusText);
                    });
                  }
                },
                mounted: function () {
                            this.getUsers();
                                    
                }
                      
      });
})(Vue);
