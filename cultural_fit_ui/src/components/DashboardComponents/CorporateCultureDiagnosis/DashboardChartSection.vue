<template>
  <v-container fluid class="w-100">
    <!--Corporate Culture Profile-->
    <v-row dense>
      <v-col cols="12">
        <v-row >
          <v-col cols="12">
            <!--Title-->
            <h2 class="text-uppercase text-myblue">
              {{ title1 }}
            </h2>
            <!--Subtitle-->
            <h4 class="text-uppercase text-myblue">
              {{ user_info.company_name }}
            </h4>
          </v-col>
        </v-row>

        <!--Chart-->
        <v-row>
          <v-col cols="12" lg="6">
            <OneSerieSpiderChart />
          </v-col>

          <!--Table-->
          <v-col cols="12" lg="6">
            <ChartDataSetTable />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!--Engagement-->
    <v-row>
      <v-col cols="12">
        <!--Title-->
        <v-row>
          <v-col cols="12">
            <h3 class="text-uppercase text-myblue">
              {{ title2 }}
            </h3>
            <h4 class="text-uppercase text-myblue">
              {{ subtitle2 }}
            </h4>
          </v-col>
        </v-row>

        <!--Chart-->
        <v-row>
          <v-col cols="12" lg="6">
            <CompanyTeamEngagementChart />
          </v-col>

          <v-col cols="12" lg="6"> 
            
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
         
<script>
import { mapState } from "vuex";

//Components
import OneSerieSpiderChart from "@/components/DashboardComponents/OneSerieSpiderChart.vue";
import ChartDataSetTable from "@/components/DashboardComponents/ChartDataSetTable.vue";
import CompanyTeamEngagementChart from "./CompanyTeamEngagementChart.vue";

export default {
  name: "DashboardChartSection",

  components: {
    OneSerieSpiderChart,
    ChartDataSetTable,
    CompanyTeamEngagementChart,
  },

  data: () => ({
    //Label
    title1: "Perfil Cultura Corporativa",
    title2: "Engagement",
    subtitle2: "Ajuste de valores de la organización y el equipo",
  }),

  computed: {
    ...mapState(["user_info"]),
  },
};
</script>
       
       <style scoped>
.text-myblue {
  color: #34495e;
}
</style>