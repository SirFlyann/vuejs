<template>
  <main-layout>
    <p>Bauru</p>
    <div id="app-4">
      <ol>
        <li v-for="todo in todos">
          {{ todo  }}
        </li>
      </ol>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  export default {
    components: {
      MainLayout
    }
  }
</script>
