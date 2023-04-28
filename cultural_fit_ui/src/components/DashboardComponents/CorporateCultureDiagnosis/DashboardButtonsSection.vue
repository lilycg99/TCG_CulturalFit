<template>
  <v-container class="mx-auto">

    <!--Received Answers Info-->
    <v-row dense style="background-color: #00C3C0">
      <v-col cols="8">
        <div class="w-25 my-3 ml-5">
          <h3> {{ received_answers }} </h3>
        </div>
      </v-col>
        <v-col cols="4" class="d-flex align-center justify-end">
          <h1 class="mr-5" style="color: #34495E">{{ summary }} </h1>
        </v-col>
    </v-row>

    <v-row dense class="mt-5">
      <v-col cols="12">
        <P class="font-weight-bold" style="color: #585858 ; font-size : 14px">Comparte el link al Assessment con 
          más miembros de tu organización para 
        obtener un diagnóstico más robusto:  </P>
      </v-col>
    </v-row>

    <!--Share Link Button-->
    <v-row dense class="mt-5">
      <v-col cols="12">
        <v-btn
          block
          rounded="lg"
          density="comfortable"
          size="large"
          class="font-weight-bold btn"
        >
          {{ link_btn }}
        </v-btn>
      </v-col>
    </v-row>

    <!--Get Company Report Button-->
    <v-row dense class="mt-5">
      <v-col cols="12">
        <v-btn
          block
          rounded="lg"
          density="comfortable"
          size="large"
          class="font-weight-bold btn"
        >
          {{ report_btn }}
        </v-btn>
      </v-col>
    </v-row>

     <!--Contact Button-->
     <v-row dense class="mt-5">
      <v-col cols="12">
        <v-btn
          block
          rounded="lg"
          density="comfortable"
          size="large"
          class="font-weight-bold btn"
        >
          {{ contact_btn }}
        </v-btn>
      </v-col>
    </v-row>

    
  </v-container>

</template>
      
      <script>
  import { mapState } from "vuex";
  
  export default {
    name: "DashboardButtonsSection",
  
    data: () => ({

      //Label 
      received_answers : 'Respuestas Recibidas',
      link_btn : 'Assessment Interno (Ánonimo)',
      report_btn : 'Informe Detallado',
      contact_btn : 'Contáctanos'
      
    }),
  
    computed: {
      ...mapState(["summary"]),
    },
  };
  </script>
    
    <style scoped>

    .btn {
      background-color: #34495e;
      color: white;
      font-size: 12px;
    }
  </style>