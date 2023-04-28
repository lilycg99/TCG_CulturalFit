<template>
  <div v-for="item in culture_profile_chart.culture_aspects" :key="item">
  <v-row dense class="mb-3">
    <v-col cols="12" >
      <h4 class="aspects"> {{ item }} </h4>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat
        earum nostrum harum porro tempore reprehenderit aliquam delectus illo
        quidem odit voluptatibus non, quos ducimus quae cupiditate assumenda
        aspernatur accusantium
      </p>
    </v-col>
  </v-row>
  </div>

</template>
         
         <script>
import { mapState } from "vuex";

export default {
  name: "DashboardDataDescriptionSection",

  data: () => ({
        
  }),

  computed: {
    ...mapState(["culture_profile_chart"]),
  },
};
</script>
       
       <style scoped>

.description{
  color: #585858;
  font-weight: bold;
  font-size: 12px;
}

.aspects{
  color: #00C3C0
}
</style>