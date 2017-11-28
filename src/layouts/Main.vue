<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <v-link href="/" class="navbar-brand">Home</v-link>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://somar.com.br" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cidades
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdown01">
              <v-link href="/saopaulo" class="dropdown-item">São Paulo - SP</v-link>
              <v-link href="/bauru" class="dropdown-item">Bauru - SP</v-link>
              <v-link href="/limeira" class="dropdown-item">Limeira - SP</v-link>
              <v-link href="/marilia" class="dropdown-item">Marilia - SP</v-link>
              <v-link href="/jau" class="dropdown-item">Jau - SP</v-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import VLink from '../components/VLink.vue'

  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .container {
    background: #f9f7f5;
  }
  .dropdown-item.active, .dropdown-item:active{
    background-color: #ffffff;
  }
</style>
