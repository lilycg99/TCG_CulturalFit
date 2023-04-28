<template>
  <v-row dense class="bg-grey-lighten-4">
    <!--Company Engagement-->
    <v-col cols="12" lg="4" class="text-center mt-16">
      <v-row dense>
        <v-col cols="12">
          <h2 class="text-uppercase" style="color: #34495e">
            {{ title1_line1 }} <br />
            {{ title1_line2 }}
          </h2>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" class="d-flex justify-center">
          <div class="w-75">
            <p class="subtitle">{{ subtitle1 }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="mt-10">
          <OneSerieSpiderChart />
        </v-col>
      </v-row>
    </v-col>

    <!--Performance/ Cultural Matrix-->
    <v-col cols="12" lg="4" class="text-center mt-16">
      <v-row dense>
        <v-col cols="12">
          <h2 class="text-uppercase" style="color: #34495e">
            {{ title2_part1 }}
            <h3 class="text-uppercase" style="color: #00c3c0">
              {{ title2_part2 }}
            </h3>
          </h2>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" class="mt-16 d-flex justify-center align-center">
          <!--Matrix background-->
          <v-img
            src="../assets/Matrix.png"
            max-height="75%"
            max-width="75%"
            contain
            class="mt-10"
          >
            <v-row align="center" dense class="mt-5">
              <!--1.1-->
              <v-col
                cols="4"
                class="col px-13 py-10 mb-6 ml-13 d-flex justify-center align-center"
              >
                <h5 style="color: #585858">{{ matrix_label_11 }}</h5>
              </v-col>
              <!--1.2-->
              <v-col
                cols="4"
                class="col px-13 py-10 mb-6 ml-10 d-flex justify-center align-center"
              >
                <h5 style="color: #585858">{{ matrix_label_12 }}</h5>
              </v-col>
            </v-row>
            <v-row align="center" dense class="mt-2">
              <!--2.1-->
              <v-col
                cols="4"
                class="col px-13 py-12 ml-13 d-flex justify-center align-center"
              >
                <h5 style="color: #585858">{{ matrix_label_21 }} </h5>
              </v-col>
              <!--2.2-->
              <v-col
                cols="4"
                class="col px-13 py-10 ml-10 d-flex justify-center align-center"
              >
                <h5 style="color: #585858">{{ matrix_label_22 }}</h5>
              </v-col>
            </v-row>
          </v-img>
        </v-col>
      </v-row>
    </v-col>
    <!--Company Engagement-->
    <v-col cols="12" lg="4" class="text-center mt-16">
      <v-row dense>
        <v-col cols="12">
          <h2 class="text-uppercase" style="color: #34495e">
            {{ title3_line1 }} <br />
            {{ title3_line2 }}
          </h2>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12" class="d-flex justify-center">
          <div class="w-75">
            <p class="subtitle">{{ subtitle3 }}</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="mt-10">
          <CompanyTeamEngagementChart/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
   
     <script>
import { defineComponent } from "vue";

// Components
import OneSerieSpiderChart from "@/components/DashboardComponents/OneSerieSpiderChart.vue";
import CompanyTeamEngagementChart from "@/components/DashboardComponents/CorporateCultureDiagnosis/CompanyTeamEngagementChart.vue";

export default defineComponent({
  name: "CandidateEngagementView",

  components: {
    OneSerieSpiderChart,
    CompanyTeamEngagementChart,
  },

  data: () => ({
    //Labels
    title1_line1: "Engagement deseada",
    title1_line2: "Cultura de la organización",
    subtitle1:
      "Identifica en que grado encajan los valores de la persona deseada con los valores realmente vividos en la organización",

    title2_part1: "performance / cultural",
    title2_part2: "Matrix",

    matrix_label_11: "Considerar Entrevista",
    matrix_label_12: "Priorizar Contratación",
    matrix_label_21: "Descartar",
    matrix_label_22: "Considerar Entrevista",

    title3_line1: "Engagement deseada",
    title3_line2: "Cultura de la organización",
    subtitle3:
      "Identifica en que grado encajan los valores de la persona deseada con los valores realmente vividos en la organización",

  }),
});
</script>

<style scoped>
.subtitle {
  color: #585858;
  font-weight: bold;
  font-size: 14px;
}

.col {
  border: 1px solid #00c3c0 !important;
}
</style>