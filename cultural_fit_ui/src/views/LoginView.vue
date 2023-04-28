<template>
   <!--Main Container with the picture and forms-->
   <LoginCard/>
    
</template>

  <script>
import { defineComponent } from "vue";

// Components
import LoginCard from "@/components/LoginCard.vue";

export default defineComponent({
  name: "LoginView",

  components: {
    LoginCard,
  },
});
</script>