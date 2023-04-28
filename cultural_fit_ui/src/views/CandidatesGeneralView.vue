<template>
  <v-container class="container h-screen">
    <ProfilesEvaluationNavBar app />

    <v-row dense>
      <v-col cols="12" md="5" class="d-flex align-center">
        <h3 class="text-uppercase ml-10" style="color: #34495e">
          {{ table_title }}
        </h3>
      </v-col>
      <v-col cols="12" md="2" class="d-flex align-center justify-end">
        <LabelsMenu />
      </v-col>
      <v-col cols="12" md="5" class="">
        <v-text-field
          density="compact"
          variant="plain"
          :placeholder="search_placeholder"
          bg-color="white"
          hide-details
          class="ml-5 w-75 search_tf"
          v-model="search_table"
        >
          <template v-slot:append-inner>
            <v-icon size="30px" color="#00c3c0">mdi mdi-card-search</v-icon>
          </template>
        </v-text-field>
      </v-col>
    </v-row>

    <v-row dense class="d-flex justify-center mt-10">
      <v-col cols="11">
        <CandidatesTableDesktop/>
      </v-col>
    </v-row>
  </v-container>
</template>
     <script>
import { defineComponent } from "vue";
import { mapState } from "vuex";

// Components
import ProfilesEvaluationNavBar from "@/components/DashboardComponents/ProfilesEvaluation/ProfilesEvaluationNavBar.vue";
import LabelsMenu from "@/components/DashboardComponents/ProfilesEvaluation/LabelsMenu.vue";
import CandidatesTableDesktop from "@/components/DashboardComponents/ProfilesEvaluation/CandidatesTableDesktop.vue";

export default defineComponent({
  name: "CandidatesGeneralView",
  data() {
    return {
      //Table Title
      table_title: "Evaluación de Perfiles",

      //Label
      label: "Etiquetas",

      //Text Field Search Placeholder
      search_placeholder: "Escribe y filtra por la palabra que quieras",
    };
  },
  components: {
    ProfilesEvaluationNavBar,
    LabelsMenu,
    CandidatesTableDesktop,
  },

  computed: {
    ...mapState(["detailed_view_step", "search_table"]),
  },

  methods: {},
});
</script>

<style scoped>
.search_tf {
  font-style: italic;
}

.container {
  background-color: #fbfbfb;
}
</style>