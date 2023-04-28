<template>
  <v-main>
    <v-container class="mx-auto h-100 text-center">
      <!--Logo-->
      <v-row dense>
        <v-col cols="12">
          <v-avatar class="mx-auto" color="white" size="250" rounded="0">
            <v-img
              src="../assets/Logo.png"
              max-height="100%"
              max-width="100%"
              contain
            ></v-img>
          </v-avatar>
        </v-col>
      </v-row>

      <!--To Do Test Button-->
      <v-row dense>
        <v-col cols="12">
          <p class="text">{{ text1 }}</p>
          <v-btn
            rounded="lg"
            density="comfortable"
            size="x-large"
            class="dotest_button mt-5 px-16"
          >
            {{ dotest_button }}
          </v-btn>
        </v-col>
      </v-row>

      <!--Info Section-->
      <v-row dense>
        <v-col cols="12" class="mt-16">
          <p class="text">
            Cuando personas y organizaciones comparten valores suceden <br />
            cosas extraordinarias
          </p>
        </v-col>
      </v-row>

      <v-row dense class="d-flex justify-center">
        <v-col cols="12" md="3" class="mt-10 d-flex justify-end">
          <v-img
            src="../assets/BoxBg.png"
            max-height="100%"
            max-width="100%"
            contain
            class="d-flex align-end"
          >
            <div class="w-75 ml-10 mb-5">
              <h3 class="text_box">{{ card1 }}</h3>
            </div>
          </v-img>
        </v-col>
        <v-col cols="12" md="3" class="mx-15 mt-10">
          <v-img
            src="../assets/BoxBg.png"
            max-height="100%"
            max-width="100%"
            contain
            class="d-flex align-end"
          >
            <div class="w-75 ml-10 mb-3">
              <h3 class="text_box">{{ card2 }}</h3>
            </div>
          </v-img>
        </v-col>
        <v-col cols="12" md="3" class="mt-10">
          <v-img
            src="../assets/BoxBg.png"
            max-height="100%"
            max-width="100%"
            contain
            class="d-flex align-end"
          >
            <div class="w-75 ml-10 mb-3">
              <h3 class="text_box">{{ card3 }}</h3>
            </div>
          </v-img>
        </v-col>
      </v-row>

      <!--To do another time button-->
      <v-row dense>
        <v-col cols="12" class="mt-10">
          <a href="#" class="text-black">{{ another_time_button }} </a>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
 
   <script>
import { defineComponent } from "vue";

// Components

export default defineComponent({
  name: "TestInfoView",

  components: {},

  data: () => ({
    //Components Labels
    text1: "¿Sabes cuál es la Cultura vivida en tu empresa?",
    dotest_button: "HACER TEST",
    text2:
      "Cuando personas y organizaciones comparten valores suceden cosas extraordinarias",
    card1: "Termina el test en menos de 5 minutos",
    card2: "Obten un diagnóstico de cultura corporativo gratuito",
    card3: "Evalua el fit de los candidatos en tu proceso de selección",
    another_time_button: "Quiero hacerlo en otro momento",
  }),
});
</script>

<style scoped>
.dotest_button {
  background-color: #34495e;
  color: white;
}

.text {
  color: #34495e;
  font-size: 20px;
  font-weight: 500;
}

.text_box {
  color: white;
}
</style>