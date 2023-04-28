<template>
  
  <v-container class="hidden-md-and-down">
    <v-navigation-drawer v-model="drawer" width="320" class="d-flex align-center"> 
      
    <v-container fluid > 
    <!--Vista Detallada-->
    <!-- <v-row dense class="mt-5">
      <v-col cols="12">
        <v-btn
          icon="mdi mdi-eye"
          size="x-large"
          @click="profiles_evaluation_view_change_step"
        ></v-btn>
      </v-col>
    </v-row> -->

    <!--Static text-->
    <v-row dense class="mt-16">
      <v-col cols="12">
        <P class="font-weight-bold" style="color: #585858; font-size: 14px"
          >Comparte el link al Assessment de Evaluación de Perfiles a las
          personas que quieras analizar:
        </P>
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
          class="font-weight-bold btn py-7"
        >
          {{ link_btn_line1 }} <br> {{ link_btn_line2 }}
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
          class="font-weight-bold btn py-7"
        >
          {{ contact_btn }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  </v-navigation-drawer>

    <!--Go to Candidate Detailed View -->
    <v-window v-model="detailed_view_step">
      <v-window-item :value="1">
        
        <CandidateDetailedView />
      </v-window-item>

      <v-window-item :value="0">
        
        <ProfilesEvaluationView/>
      </v-window-item>
    </v-window>
    
  </v-container>
</template>
        
        <script>
import { mapMutations, mapState } from "vuex";

import CandidateDetailedView from "@/views/CandidateDetailedView.vue"

export default {
  name: "ProfilesEvaluationNavBar",
  components:{
    CandidateDetailedView,
  },

  data: () => ({

    
    //Label
    link_btn_line1: "Assessment Evaluación",
    link_btn_line2: "Perfiles Interno (No Ánonimo)",
    contact_btn: "Contáctanos",
  }),

  computed: {
    ...mapState(["drawer"]),
  },

  methods: {
    ...mapMutations(["profiles_evaluation_view_change_step"]),
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