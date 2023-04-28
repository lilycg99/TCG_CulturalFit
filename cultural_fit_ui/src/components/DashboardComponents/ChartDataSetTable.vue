<template>
    <div>
  <v-table density="compact" class="w-75 ml-10">
    <thead>
      <tr class="bg-grey-lighten-4">
        <th class="text-center">CULTURA</th>
        <th class="text-center">PREDOMINANCIA</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in table_data" :key="item.name">
        <td class="text-center testing bg-grey-lighten-4">{{ item.name }}</td>
        <td
          class="text-center"
          :style="{
            background: table_colors.at(index),
            border: table_colors.at(index),
          }"
        >
          {{ item.amount }}
        </td>
      </tr>
    </tbody>
  </v-table>
</div>
</template>

         <script>
import { mapState } from "vuex";

export default {
  name: "ChartDataSetTable",

  data: () => ({
    table_colors: [
      "#B1D095",
      "#CADFB8",
      "#E7F7F6",
      "#FFFC8B",
      "#F9D786",
      "#EF857D",
    ],
  }),

  computed: {
    ...mapState(["table_data"]),
  },
};
</script>

<style scoped>
table,
tr,
th {
  border: none !important;
  border-spacing: 15px !important;
}

.testing {
  border: 1px solid #00C3C0 !important;
  width: 50%;
  

}


</style>