<template>
  <!--Go to Candidate Detailed View -->
  <v-window v-model="detailed_view_step">
    <v-window-item :value="0">
      <CandidatesGeneralView/>
    </v-window-item>

    <v-window-item :value="1">
      
      <CandidateDetailedView />
   
    </v-window-item>
  </v-window>
</template>
   
<script>
import { defineComponent } from "vue";

import { mapState } from "vuex";

import CandidateDetailedView from "@/views/CandidateDetailedView.vue";

// Components
import CandidatesGeneralView from "@/views/CandidatesGeneralView.vue";

export default defineComponent({
  name: "ProfilesEvaluationView",

  components: {
    CandidatesGeneralView,
    CandidateDetailedView,
  },

  computed: {
    ...mapState(["detailed_view_step"]),
  },
});
</script>