<template>
  <v-container fluid>
    <v-row dense>
      <v-col cols="12" md="2" class="d-flex align-center">
        <DashboardButtonsSection />
      </v-col>
      <v-col cols="12" md="8">
        <DashboardChartSection />
      </v-col>
      <v-col cols="12" md="2">
        <DashboardDataDescriptionSection/>
      </v-col>
    </v-row>
  </v-container>
</template>
 
   <script>
import { defineComponent } from "vue";

// Components
import DashboardButtonsSection from "@/components/DashboardComponents/CorporateCultureDiagnosis/DashboardButtonsSection.vue";
import DashboardChartSection from "@/components/DashboardComponents/CorporateCultureDiagnosis/DashboardChartSection.vue";
import DashboardDataDescriptionSection from "@/components/DashboardComponents/CorporateCultureDiagnosis/DashboardDataDescriptionSection.vue";

export default defineComponent({
  name: "DashboardView",

  components: {
    DashboardButtonsSection,
    DashboardDataDescriptionSection,
    DashboardChartSection,
  },
});
</script>