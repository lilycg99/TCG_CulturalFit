<template>
  <v-main>
    <!--Dashboar App Bar-->
    <v-app-bar fixed elevate-on-scroll :elevation="0">
      <v-toolbar color="#34495E">
        <v-row dense align="center">
          <v-col cols="10" lg="2">
            <!--Avatar Cultural Fit in colors-->
            <v-avatar color="#34495E" size="180" rounded="0" class="ml-5">
              <v-img
                src="~@/assets/White-GreenLogo.png"
                max-height="100%"
                max-width="100%"
                contain
              ></v-img>
            </v-avatar>
          </v-col>

          <v-col lg="8" class="hidden-md-and-down">
            <!--App Bar Tabs-->
            <v-tabs
              v-model="step"
              optional
              class="ml-16 hidden-md-and-down"
              color="#00C3C0"
            >
              <!--Linkk to Dashboard-->
              <v-tab
                :value="1"
                class="text-start text-none"
                prepend-icon="mdi mdi-chart-multiple"
              >
                <h3>
                  Diagnóstico <br />
                  de cultura corporativa
                </h3>
              </v-tab>

              <!--Linkk to Profiles Evaluation-->
              <v-tab
                :value="2"
                prepend-icon="mdi mdi-file-document-multiple-outline"
                class="text-start text-none"
              >
                <h3>
                  {{ profiles_evaluation }}
                </h3>
              </v-tab>
            </v-tabs>
          </v-col>

          <v-col lg="2" class="hidden-md-and-down">
            <v-row dense>
              <v-col cols="12" lg="3" class="d-flex justify-end">
                <v-avatar size="50" class="mr-3">
                  <v-img
                    class="bg-white"
                    width="40"
                    src="~@/assets/TheCloudLogo.jpg"
                    cover
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col lg="9" class="text-start">
                <h3 class="text-white text-uppercase hidden-md-and-down">
                  {{ user_info.company_name }}
                </h3>
                <h4 class="hidden-md-and-down" style="color: #00c3c0">
                  {{ user_info.full_name }}
                </h4>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="2" class="hidden-md-and-up text-center">
            <!--Menu responsive to device md and down with the links-->
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  v-bind="props"
                  class="hidden-md-and-up text-white"
                  size="x-large"
                  icon="mdi-menu"
                >
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  :title="user_info.company_name"
                  :subtitle="user_info.full_name"
                >
                  <template v-slot:prepend>
                    <v-avatar size="50" class="mr-3">
                      <v-img
                        class="bg-white"
                        width="40"
                        :src="user_info.avatar"
                        cover
                      ></v-img>
                    </v-avatar>
                  </template>
                </v-list-item>
                <v-list-item
                  :value="dashboard"
                  prepend-icon="mdi mdi-chart-multiple"
                  @click="step=1"
                >
                  <v-list-item-title>{{ dashboard }}</v-list-item-title>
                </v-list-item>
                <v-list-item
                  :value="profiles_evaluation"
                  prepend-icon="mdi mdi-file-document-multiple-outline"
                  @click="step=2"
                >
                  <v-list-item-title>{{
                    profiles_evaluation
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-toolbar>
    </v-app-bar>

    <!--End Dashboard App Bar-->

    <!--Dashboard windows: Dashboard View and Profiles Evaluation View-->

    <v-window v-model="step">
      <v-window-item :value="1">
        <!--Login Form-->
        <DashboardView />
      </v-window-item>

      <v-window-item :value="2">
        <!--Signin Form-->
        <ProfilesEvaluationView />
      </v-window-item>
    </v-window>
  </v-main>
</template>
  
  <script>
//Components

//Views
import DashboardView from "../views/DashboardView.vue";
import ProfilesEvaluationView from "../views/ProfilesEvaluationView.vue";

import { mapState } from "vuex";

export default {
  name: "DashboardLayout",
  components: {
    ProfilesEvaluationView,
    DashboardView,
  },

  data: () => ({
    //Var to change windows
    step: null,

    //App Bar Tabs Labels
    dashboard: "Diagnóstico de cultura corporativa",
    profiles_evaluation: "Evaluación de perfiles",
  }),

  computed: {
    ...mapState(["user_info"]),
  },
};
</script>

<style scoped>
.testing {
  color: #00c3c0;
}
</style>