<template>
  <v-app-bar fixed elevate-on-scroll  :elevation="0" class="mt-5">
    
    <!--Avatar Cultural Fit in colors-->
    <v-avatar class="ml-15" color="white" size="230" rounded="0">
      <v-img
      
        src="../assets/Logo.png"
        max-height="100%"
        max-width="100%"
        contain
      ></v-img>
    </v-avatar>

    <v-spacer></v-spacer>

     
    <div class="d-flex align-end" v-for="link in bar_buttons_links"  :key="link">
        <!--External Links-->
        <v-btn variant="text"  class="bar_button font-weight-bold text-none hidden-md-and-down" :to="link.to">
            {{ link.title }}
        </v-btn>
    </div>

    <!--Link to this page-->
    <v-btn density="comfortable"  class="bar_button_selected font-weight-bold px-15 mr-15 hidden-md-and-down">
        INICIAR SESIÓN
    </v-btn>

    <!--Menu responsive to device md and down with the links-->
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn  v-bind="props" class="hidden-md-and-up" size="x-large" icon="mdi-menu">
            </v-btn>
        </template>
        <v-list>
          <v-list-item
          v-for="link in bar_buttons_links"  :key="link" :value="link.title"
           class="bar_button">
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>

        <v-list-item>
        <v-btn density="comfortable" block class="bar_button_selected font-weight-bold px-15">
            INICIAR SESIÓN
        </v-btn>
        </v-list-item>
        </v-list>
      </v-menu>
   


  </v-app-bar>
</template>
  
  <script>


export default {
  name: "LoginAppBar",

  data: () => ({

    //Label and URL of the External Links
    bar_buttons_links: [
        {
            title: 'Inicio',
            to: '',

        },
        {
            title: 'Método CFAM',
            to: '',

        },
        {
            title: 'MasterClass',
            to: '',

        },
        {
            title: 'Test de Madurez',
            to: '',

        },
        {
            title: 'Test de Cultura',
            to: '',

        },
        {
            title: 'Contacto',
            to: '',

        },
    ]
    
  }),

  computed: {
    showMenu() {
      return this.toggleMenu || this.$vuetify.breakpoint.mdAndUp;
    },
  },
};
</script>

<style scoped>

.bar_button{
    color : #34495E;
    font-size: 14px;
    
}

.bar_button_selected{
    background-color: #34495E;
    color: white;
    font-size: 14px;
}


</style>