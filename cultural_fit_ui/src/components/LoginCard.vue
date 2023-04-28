<template>
  <!--Center Card-->
  <v-container class="mt-15 h-100">
    <v-card class="mx-auto h-auto w-100" elevation="3">
      <v-row dense no-gutters>
        <!--Picture Column-->
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          class="d-flex align-center text-center"
        >
          <v-img
            src="../assets/Picture.png"
            class="d-flex align-center text-center"
            cover
          >
            <v-avatar color="transparent" size="75%" rounded="0">
              <v-img src="../assets/WhiteLogo.png"></v-img>
            </v-avatar>
          </v-img>
        </v-col>

        <!--Forms Column-->
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          class="d-flex align-center text-center"
        >
          <v-container class="mx-auto my-auto h-100 w-75">
            <v-row>
              <v-col cols="12">
                <!--Form Select Buttons-->
                <v-btn-toggle
                  v-model="toggle"
                  mandatory
                  color="#34495E"
                  selected-class="testing"
                >
                  <v-btn
                    elevation="8"
                    class="font-weight-bold px-16 mx-0"
                    density="compact"
                    rounded="lg"
                    value="signin"
                    @click="step = 2"
                  >
                    {{ signin_label }}
                  </v-btn>
                  <v-btn
                    elevation="8"
                    class="font-weight-bold px-16 mx-0"
                    density="compact"
                    rounded="lg"
                    value="login"
                    @click="step = 1"
                  >
                    {{ login_label }}
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>

         
            <v-row class="mt-10">
              <v-col cols="12">
                <!-- Forms window -->
                <v-window v-model="step">

                  <v-window-item :value="1">
                    <!--Login Form-->
                    <CredentialsForm />
                  </v-window-item>

                  <v-window-item :value="2">
                    <!--Signin Form-->
                    <SigninDataForm />

                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
  
<script>
import { defineComponent } from "vue";



// Components
import SigninDataForm from "../components/forms/SigninDataForm.vue";
import CredentialsForm from "../components/forms/CredentialsForm.vue";

export default defineComponent({
  name: "LoginCard",

  data: () => ({
    //Loging Button Toggle is always selected on load
    toggle: "login",

    //Buttons Toggle Label
    signin_label: "REGISTRARSE",
    login_label: "ACCEDER",

    //To change forms window item
    step: 1,
  }),

  components: {
    SigninDataForm,
    CredentialsForm,
  },

 
});
</script>

<style scoped>


.testing{
  color: white;
}
</style>