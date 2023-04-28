<template>
    <v-main>
      <LoginAppBar app />
      <router-view/>
    </v-main>
  </template>
  
  <script>
  import LoginAppBar from "../components/LoginAppBar.vue";
  
  export default {
    name: "LoginLayout",
    components: {
        LoginAppBar,
    },
  };
  </script>