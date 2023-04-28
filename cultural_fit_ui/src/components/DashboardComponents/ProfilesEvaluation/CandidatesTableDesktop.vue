<template>
  <v-table class="table">
    <thead>
      <tr>
        <th
          v-for="header in table_headers"
          :key="header"
          class="text-center headers"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(candidate, index) in candidates"
        :key="candidate"
        class="text-center body_table"
      >
        <td>
          <v-avatar size="40" color="#00C3C0">
            <v-img src="~@/assets/Avatar1.jpg" cover></v-img>
          </v-avatar>
        </td>
        <td>{{ candidate.email_user }}</td>
        <td class="w-100">{{ candidate.name }}</td>
        <td>{{ candidate.gender }}</td>
        <td>{{ candidate.fit_ind }}</td>
        <td>{{ candidate.fit_dev }}</td>
        <td>{{ candidate.icde }}</td>
        <td>{{ candidate.dominant_individual_arq }}</td>
        <td>{{ candidate.desired_org_culture }}</td>
        <td>
          <v-menu v-if="candidate.label === ''">
            <template v-slot:activator="{ props }">
              <v-chip
                pill
                v-bind="props"
                link
                size="small"
                class="select_label_chip"
                append-icon="mdi mdi-menu-down"
              >
                {{ label }}
              </v-chip>
            </template>
            <v-list density="compact">
              <v-list-item
                v-for="label in labels_list"
                :key="label"
                density="compact"
                :value="label"
                active-color="#00c3c0"
                rounded="lg"
                style="font-size: 13px; color: #34495e"
                @click="put_label_candidate([index, label])"
              >
                <v-list-item-title>{{ label }} </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-chip
            v-else
            pill
            closable
            size="small"
            class="chip"
            close-icon="mdi mdi-close-circle-outline"
            @click:close="delete_label_candidate(index)"
          >
            {{ candidate.label }}
          </v-chip>
        </td>
        <td>
          <v-btn
            variant="text"
            density="compact"
            size="small"
            icon="mdi mdi-file-download"
            class="table_actions_icons"
          >
          </v-btn>
          <v-btn
            variant="text"
            density="compact"
            size="small"
            icon="mdi mdi-eye"
            class="table_actions_icons ml-2"
            @click="profiles_evaluation_view_change_step(index)"
          >
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
           
           <script>
import { mapState, mapMutations } from "vuex";
import { useDisplay } from "vuetify";



export default {
  name: "CultureAspectsDescription",
  components: {},
  data() {
    return {
      //Label Menu Button
      label: "Etiquetas",
    };
  },

  computed: {
    ...mapState(["table_headers", "candidates", "labels_list"]),
  },

  methods: {
    ...mapMutations([
      "delete_label_candidate",
      "put_label_candidate",
      "profiles_evaluation_view_change_step",
      "detailed_view_step",
    ]),

    alert (item){
      alert(item)
    }
  },

  setup() {
    // Destructure only the keys we want to use
    const { mdAndUp } = useDisplay();

    return { mdAndUp };
  },
};
</script>
         
<style scoped>
tr {
  border: 1px solid #00c3c0;
}

.table {
  background-color: transparent;
}
.headers {
  color: #34495e !important;
  font-size: 12px;
  font-weight: bolder !important;
}

.body_table {
  color: #585858 !important;
  font-size: 12px;
}

.select_label_chip {
  background-color: #00c3c0;
  color: white;
}

.chip {
  background-color: #bfc6cc;
}

.table_actions_icons {
  color: #34495e;
}
</style>