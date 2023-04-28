<template>
  <!--Static Header-->
  <v-row dense class="bg-grey-lighten-4">
    <v-col cols="12" lg="8">
      <v-row dense class="mt-3">
        <!--Candidate Info-->
        <v-col cols="10" class="hidden-sm-and-up">
          <h2 class="text-uppercase" style="color: #34495e"> {{ selected_candidate.name }} </h2>
          <h4 style="color: #00c3c0"> {{ selected_candidate.label }} </h4>
        </v-col>

        <v-col md="12" class="ml-5 hidden-sm-and-down ml-16">
          <h2 class="text-uppercase" style="color: #34495e">{{ selected_candidate.name }}</h2>
          <h4 style="color: #00c3c0">{{ selected_candidate.label }}</h4>
        </v-col>

        <v-col cols="2" class="hidden-sm-and-up">
          <!--Menu responsive to device sm and down with the view options-->
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                class="hidden-sm-and-up bg-white"
                size="x-large"
                color="#34495e"
                icon="mdi mdi-dots-vertical"
                variant="text"
              >
              </v-btn>
            </template>
            <v-list>
              <v-list-item :value="cultural_profile" @click="detailed_view_option1_change_step">
                <v-list-item-title>{{ cultural_profile }}</v-list-item-title>
              </v-list-item>
              <v-list-item :value="engagement" @click="detailed_view_option2_change_step">
                <v-list-item-title>{{ engagement }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <!--View options-->
      <v-row dense class="mt-3">
        <v-col md="9" class="hidden-sm-and-down ml-16">
          <!--Button Toggle-->
          <div>
            <v-btn-toggle
              v-model="toggle"
              mandatory
              color="#34495E"
              selected-class="testing"
            >
              <!--Culture Profile Button-->
              <v-btn
                elevation="8"
                class="font-weight-bold px-16 mx-0"
                density="compact"
                rounded="lg"
                height="35"
                width="230"
                value="cultural_profile_btn"
                @click="detailed_view_option1_change_step"
              >
                {{ cultural_profile }}
              </v-btn>
              <!--Engagement Button-->
              <v-btn
                elevation="8"
                class="font-weight-bold px-16 mx-0"
                density="compact"
                rounded="lg"
                height="35"
                width="230"
                value="engagement_btn"
                @click="detailed_view_option2_change_step"
              >
                {{ engagement }}
              </v-btn>
            </v-btn-toggle>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col lg="4" :class="detailed_view_options_step===1 ? 'd-flex align-center bg-white' : 'd-flex align-center bg-grey-lighten-4'">
      <v-container fluid class="text-center">
        <!--Go Back Button-->
        <v-btn
          elevation="8"
          class="font-weight-bold top_buttons ml-5"
          rounded="lg"
          @click="detailed_view_change_step"
        >
          <v-icon class="mr-2">mdi mdi-keyboard-return</v-icon>
          {{ goback }}
        </v-btn>

        <!--Storing Button-->

        <v-btn
          elevation="8"
          class="font-weight-bold top_buttons ml-5"
          rounded="lg"
        >
          <v-icon class="mr-2">mdi mdi-clipboard-arrow-down</v-icon>
          {{ storing }}
        </v-btn>
      </v-container>
    </v-col>
  </v-row>

  <!--View Options Windows Section-->
  <v-window v-model="detailed_view_options_step">
    <v-window-item :value="1">
      <!--Candidate Culture Profile View-->
      <CandidateCultureProfileView />
    </v-window-item>

    <v-window-item :value="2">
      <!--Signin Form-->
      <CandidateEngagementView />
    </v-window-item>
  </v-window>

  <!-- 
<v-btn
icon="mdi mdi-eye"
size="x-large"
@click="detailed_view_change_step"
></v-btn>

 -->
</template>
   
     <script>
import { defineComponent } from "vue";
import { mapMutations, mapState } from "vuex";

// Components
import CandidateCultureProfileView from "./CandidateCultureProfileView.vue";
import CandidateEngagementView from "./CandidateEngagementView.vue";

export default defineComponent({
  name: "CandidateDetailedView",

  data: () => ({
    //Loging Button Toggle is always selected on Cultural Profile
    toggle: "cultural_profile_btn",

    //Buttons Toggle Label
    cultural_profile: "Perfil Cultural",
    engagement: "Kpis de engagement",

    //Buttons Label
    goback: "Volver",
    storing: "Archivar",

  }),

  components: {
    CandidateCultureProfileView,
    CandidateEngagementView,
  },

  computed: {
    ...mapState(["detailed_view_step", "detailed_view_options_step", "selected_candidate"]),
  },

  methods: {
    ...mapMutations(["detailed_view_change_step", "detailed_view_option1_change_step", "detailed_view_option2_change_step"]),
  },
});
</script>

<style scoped>
.testing {
  color: white;
}

.top_buttons {
  background-color: #00c3c0;
  color: white;
}

.row {
  background-color: #fbfbfb;
}
</style>