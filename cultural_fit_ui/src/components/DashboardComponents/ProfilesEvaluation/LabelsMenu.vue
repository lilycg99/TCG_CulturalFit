<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="px-4 label_btn">
        {{ label }}
        <v-icon class="ml-2">mdi mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-item
        v-for="(item, index) in labels_list"
        :key="item"
        density="compact"
        :value="item"
        active-color="#00c3c0"
        rounded="lg"
        style="font-size: 13px; color: #34495e"
      >
        <v-list-item-title>{{ item }} </v-list-item-title>
        <template v-slot:append>
          <!--Icon to delete label-->
          <v-btn
            icon="mdi mdi-trash-can"
            variant="text"
            size="small"
            :value="item"
            style="color: #34495e"
            @click="delete_label(index)"
          >
          </v-btn>
        </template>
      </v-list-item>

      <!--New Label Item-->
      <v-list-item
        density="compact"
        value="new_label"
        append-icon="mdi mdi-plus"
        class="new_label_item"
        rounded="lg"
      >
        <v-list-item-title>Nueva</v-list-item-title>

        <!--Dialog to add a new label-->
        <v-dialog v-model="dialog" activator="parent" width="25%">
          <v-card class="d-flex justify-center text-center">
            <v-container>
              <!--Title Dialog-->
              <v-card-title class="text-uppercase" style="color: #34495e">Nueva Etiqueta</v-card-title>
              <v-card-text>
                <v-form v-model="valid" lazy-validation>
                  <!--Input Dialog-->
                  <v-row dense class="mt-5">
                    <v-col cols="12">
                      <v-text-field
                        v-model="newlabel_value"
                        required
                        density="compact"
                        variant="solo"
                        class="newlabel_tf"
                        type="text"
                        bg-color="#BDF0EE"
                        :placeholder="newlabel_placeholder"
                        :rules="newlabelRules"
                        hide-details
                        single-line
                      >
                        <template v-slot:prepend-inner>
                          <v-icon color="#00C3C0"
                            >mdi mdi-label-multiple</v-icon
                          >
                        </template>
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <!--Buttons Dialog-->
                  <v-row dense class="mt-8">
                    <v-col cols="12">
                      <!--Cancel Button Dialog-->
                      <v-btn
                        color="error"
                        @click="dialog = false"
                        elevation="4"
                        class="mr-3"
                      >
                        {{ cancel_btn }}
                      </v-btn>
                      <!--Save Button Dialog-->
                      <v-btn
                        class="save_btn_dialog"
                        elevation="4"
                        @click="save_new_label"
                      >
                        {{ save_btn }}
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-container>
          </v-card>
        </v-dialog>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";

// Components
//import CandidatesTable from "@/components/DashboardComponents/ProfilesEvaluation/CandidatesTable.vue";

export default defineComponent({
  name: "LabelsMenu",
  data() {
    return {
      //Label
      label: "Etiquetas",

      //New Label Dialog
      dialog: false,

      //New Label Text Field Placeholder Dialog
      newlabel_placeholder: "Nombre de la etiqueta",

      //Buttons Dialog
      cancel_btn: "Cancelar",
      save_btn: "Guardar",

      valid: false,
      newlabel_value: "",
      newlabelRules: [(v) => !!v || "Nombre de la etiqueta requerido"],
    };
  },
  components: {
    //CandidatesTable,
  },

  computed: {
    ...mapState(["labels_list", "newlabel_dialog"]),
  },

  methods: {
    ...mapMutations(["add_new_label", "get_label_index", "splice_label"]),

    //Save New Label
    save_new_label() {
      if (this.newlabel_value !== "") {
        this.dialog = false;
        this.add_new_label(this.newlabel_value);
        this.newlabel_value = "";
      } else {
        alert("Campo requerido");
      }
    },
    //Delete Label
    delete_label(index) {
      this.splice_label(index);
    },
  },
});
</script>

<style scoped>
.label_btn {
  background-color: #00c3c0;
  color: white;
}

.new_label_item {
  font-size: 13px;
  color: #34495e;
  font-weight: bold;
  background-color: #00c3c0;
}

.newlabel_tf {
  font-style: italic;
  font-weight: bold;
  background-color: #bdf0ee;
  width: auto;
}

.save_btn_dialog {
  background-color: #34495e;
  color: white;
}
</style>