<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <router-link  class="nav-brand" :to="{
            name : 'all'
            }">TODO</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">

          
          <router-link  class="nav-item nav-link" :to="{
            name : 'completed'          }">Completed</router-link>

          <router-link  class="nav-item nav-link" :to="{
            name : 'important'          }">Important</router-link>

          <router-link  class="nav-item nav-link" :to="{
            name : 'contoh-vuex'          }">Contoh Vuex</router-link>

          <a class="nav-item nav-link" href="#">Delete</a>

          
        </div>
      </div>
    </nav>

    <div class="card m-5">
      <div class="card-body">
        <div class="card-title p-3">
          <h1>Simple Todo</h1>
        </div>
<!-- 
        <Todo> </Todo> -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<style>
</style>
