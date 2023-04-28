<template>
  <v-container>
    <v-container class="ml-5">
      <h3 class="text-uppercase" style="color: #34495e">
        Valores predominantes
      </h3>
    </v-container>
    <v-container
      v-for="item in prevailing_principles"
      :key="item"
      class="ml-5 mr-5"
    >
      <v-row dense>
        <v-col cols="3" class="d-flex align-center justify-center col1">
          <h4 style="color: #585858">{{ item.value }}</h4>
        </v-col>
        <v-col
          cols="8"
          class="d-flex align-center text-center text-justify col2"
        >
          <div class="ml-5 mr-10">
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              dolore veniam, consequuntur sit quasi culpa vitae exercitationem
              commodi expedita quo aliquam iure, dignissimos a quod quae
              corrupti architecto, quia iste.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
           
           <script>
import { mapState } from "vuex";

export default {
  name: "PrevailingPrinciplesSection",

  data: () => ({}),

  computed: {
    ...mapState(["prevailing_principles"]),
  },
};
</script>
         
         <style scoped>
.description {
  color: #585858;
  font-weight: bold;
  font-size: 12px;
}

.row {
  border: 1px solid #00c3c0 !important;
}
.col2 {
  border: 1px solid #00c3c0 !important;
}
.col1 {
  border: 1px solid #00c3c0 !important;
  background-color: #e7f7f6;
}
</style>