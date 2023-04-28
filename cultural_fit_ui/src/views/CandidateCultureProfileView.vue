<template>
    <v-row dense class="bg-grey-lighten-4" >
        <!--Chart Section-->
        <v-col cols="12" lg="8">
            <v-row dense>
                <!--Candidate Profile Culture Chart-->
                <v-col cols="12" lg="6">
                    <OneSerieSpiderChart/>
                </v-col>
                 <!--Candidate Profile Culture Chart Data Set Table-->
                 <v-col cols="12" lg="5" class="mt-5">
                    <ChartDataSetTable/>
                 </v-col>

            </v-row>

            <v-row dense>
                <!--Culture Apects Descriptions-->
                <v-col cols="12">
                    <CultureAspectsDescription/>
                </v-col>
              
            </v-row>
            <v-container fluid class="bg-grey-lighten-4">

            </v-container>
           

        </v-col>

        <!--Prevailing Principles Section-->
        <v-col cols="12" lg="4" class="bg-white">
            <PrevailingPrinciplesSection/>
        </v-col>
    </v-row>
  
  </template>
   
     <script>
  import { defineComponent } from "vue";
  
  // Components
  import OneSerieSpiderChart from "@/components/DashboardComponents/OneSerieSpiderChart.vue";
  import ChartDataSetTable from "@/components/DashboardComponents/ChartDataSetTable.vue";
  import CultureAspectsDescription from "@/components/DashboardComponents/ProfilesEvaluation/CultureAspectsDescription.vue";
  import PrevailingPrinciplesSection from "@/components/DashboardComponents/ProfilesEvaluation/PrevailingPrinciplesSection.vue";
  
  
  export default defineComponent({
    name: "CandidateCultureProfileView",
  
    components: {
      OneSerieSpiderChart,
      ChartDataSetTable,
      CultureAspectsDescription,
      PrevailingPrinciplesSection,
    },
  });
  </script>