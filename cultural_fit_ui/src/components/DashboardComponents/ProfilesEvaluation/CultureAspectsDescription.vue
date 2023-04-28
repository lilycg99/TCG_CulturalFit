<template>
    <div>
    <v-row dense :class="mdAndUp ? 'ml-16' : 'ml-5 mt-10'">
      <v-col cols="11" md="5">
        <h4 class="aspects"> {{ culture_profile_chart.culture_aspects.at(0) }} </h4>
        <p class="description text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat
          earum nostrum harum porro tempore reprehenderit aliquam delectus illo
          quidem odit voluptatibus non, quos ducimus quae cupiditate assumenda
          aspernatur accusantium
        </p>
      </v-col>
      <v-col cols="11" md="5" :class="mdAndUp ? 'ml-10' : 'ml-0'">
        <h4 class="aspects"> {{ culture_profile_chart.culture_aspects.at(3) }} </h4>
        <p class="description text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat
          earum nostrum harum porro tempore reprehenderit aliquam delectus illo
          quidem odit voluptatibus non, quos ducimus quae cupiditate assumenda
          aspernatur accusantium
        </p>
      </v-col>
    </v-row>
    <v-row dense :class="mdAndUp ? 'ml-16 mt-3' : 'ml-5'">
        <v-col cols="11" md="5" >
          <h4 class="aspects"> {{ culture_profile_chart.culture_aspects.at(1) }} </h4>
          <p class="description text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat
            earum nostrum harum porro tempore reprehenderit aliquam delectus illo
            quidem odit voluptatibus non, quos ducimus quae cupiditate assumenda
            aspernatur accusantium
          </p>
        </v-col>
        <v-col cols="11" md="5" :class="mdAndUp ? 'ml-10' : 'ml-0'">
          <h4 class="aspects"> {{ culture_profile_chart.culture_aspects.at(4) }} </h4>
          <p class="description text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat
            earum nostrum harum porro tempore reprehenderit aliquam delectus illo
            quidem odit voluptatibus non, quos ducimus quae cupiditate assumenda
            aspernatur accusantium
          </p>
        </v-col>
      </v-row>
      <v-row dense :class="mdAndUp ? 'ml-16 mt-3' : 'ml-5 mb-10'">
        <v-col cols="11" md="5" >
          <h4 class="aspects"> {{ culture_profile_chart.culture_aspects.at(2) }} </h4>
          <p class="description text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat
            earum nostrum harum porro tempore reprehenderit aliquam delectus illo
            quidem odit voluptatibus non, quos ducimus quae cupiditate assumenda
            aspernatur accusantium
          </p>
        </v-col>
        <v-col cols="11" md="5" :class="mdAndUp ? 'ml-10' : 'ml-0'">
          <h4 class="aspects"> {{ culture_profile_chart.culture_aspects.at(5) }} </h4>
          <p class="description text-justify">
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
  import { useDisplay } from 'vuetify'

  export default {
    name: "CultureAspectsDescription",
  
    data: () => ({
          
    }),
  
    computed: {
      ...mapState(["culture_profile_chart"]),
    },

    setup () {
      // Destructure only the keys we want to use
      const {mdAndUp } = useDisplay()

      return {mdAndUp }
    }
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