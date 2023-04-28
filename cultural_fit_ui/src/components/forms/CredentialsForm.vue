<template>

  <v-form v-model="valid" lazy-validation>
     <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="email"
          required
          density="compact"
          variant="solo"
          class="text-fields"
          type="email"
          bg-color="#BDF0EE"
          :placeholder="email_placeholder"
          :rules="emailRules"
          single-line
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-icon color="#00C3C0">mdi mdi-email</v-icon>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="password"
          required
          density="compact"
          variant="solo"
          class="text-fields"
          type="password"
          bg-color="#BDF0EE"
          :placeholder="password_placeholder"
          :rules="passwordRules"
          single-line
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-icon color="#00C3C0">mdi mdi-lock</v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row class="mt-16">
      <v-col cols="12">
        <v-btn
          block
          rounded="lg"
          density="comfortable"
          size="large"
          class="font-weight-bold login_button"
          @click="login"
        >
          {{ login_btn_label }}
        </v-btn>
      </v-col>
    </v-row> 
  </v-form>
</template>
  
<script>

export default {
  name: "CredentialsForm",
  data: () => ({
    // Form data
    valid: false,

    //Text Field Model
    email: '',
    password: '',



    //Text Field Rules
    passwordRules: [
      (v) => !!v || "Contraseña requerida",
      (v) =>
        (v && v.length <= 20) ||
        "La contraseña no debe tener más de 20 caracteres",
    ],
    emailRules: [(v) => !!v || "Usuario requerido"],

    //Login Form TextField Placeholder
    email_placeholder: "E-mail Corporativo",
    password_placeholder: "Contraseña",

    //LoginForm Action Button 
    login_btn_label: "INICIAR SESIÓN",
  }),

  components: {},

  methods: {
    login() {},
  },

 
};
</script>

  <style scoped>
.text-fields {
  font-style: italic;
  font-weight: bold;
  background-color: #BDF0EE;
}

.login_button {
  background-color: #34495e;
  color: white;
}
</style>