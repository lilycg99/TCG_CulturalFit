<template>
  <v-form v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="full_name"
          required
          density="compact"
          variant="solo"
          class="text-fields"
          type="text"
          bg-color="#BDF0EE"
          :placeholder="full_name_placeholder"
          single-line
          :rules="fullnameRules"
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-icon color="#00C3C0">mdi mdi-account</v-icon>
          </template>
        </v-text-field>
      </v-col>
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
          single-line
          :rules="emailRules"
          hide-details
        >
          <template v-slot:prepend-inner>
            <v-icon color="#00C3C0">mdi mdi-email</v-icon>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="company_name"
          required
          density="compact"
          variant="solo"
          class="text-fields"
          type="text"
          bg-color="#BDF0EE"
          :placeholder="company_name_placeholder"
          single-line
          hide-details
          :rules="companynameRules"
        >
          <template v-slot:prepend-inner>
            <v-icon color="#00C3C0">mdi mdi-domain</v-icon>
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
          single-line
          hide-details
          :rules="passwordRules"
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
          class="font-weight-bold signin_button"
          @click="signin"
        >
          {{ signin_btn_label }}
        </v-btn>
      </v-col>
      <v-col cols="12">
      <v-btn
        block
        rounded="lg"
        density="comfortable"
        size="large"
        class="font-weight-bold"
        @click="goto_linkedin"
      >
        {{ linkedin_btn_label }}
        <template v-slot:append>
          <v-icon color="light-blue-darken-4" size="30">mdi mdi-linkedin</v-icon>
        </template>
      </v-btn>
    </v-col>
    </v-row>
  </v-form>
</template>
  
<script>
import { mapState } from "vuex";

export default {
  name: "SigninDataForm",
  components: {},

  data: () => ({

    //Form Data
    valid: false,

     //Text Field Model
     full_name: '',
     email: '',
     company_name: '',
    password: '',

    //Signin Form TextField Placeholder
    full_name_placeholder: "Nombre Completo",
    email_placeholder: "E-mail Corporativo",
    company_name_placeholder: "Nombre de la empresa",
    password_placeholder: "Contraseña",

    //Signin Form Actions Buttons
    signin_btn_label: "REGISTRAR",
    linkedin_btn_label: "O CONTINUAR CON LINKEDIN",


    //Text Field Rules
    fullnameRules: [(v) => !!v || "Campo requerido"],
    companynameRules: [(v) => !!v || "Campo requerido"],
    passwordRules: [
      (v) => !!v || "Contraseña requerida",
      (v) =>
        (v && v.length <= 20) ||
        "La contraseña no debe tener más de 20 caracteres",
    ],
    emailRules: [(v) => !!v || "Usuario requerido"],

  }),

  computed: {
    ...mapState(["signin_form"]),
  },

  methods: {
    signin() {},
    goto_linkedin() {},
  },
};
</script>

<style scoped>
.text-fields {
  font-style: italic;
  font-weight: bold;
}

.signin_button {
  background-color: #34495e;
  color: white;
}
</style>