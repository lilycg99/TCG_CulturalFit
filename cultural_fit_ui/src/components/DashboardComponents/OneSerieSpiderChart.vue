<template>
  <div>
    <apexchart
      type="radar"
      height="400"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";

export default {
  name: "OneSerieSpiderChart",

  data: () => ({
    series: [
      {
        name: "Predominance Values",
        data: [70, 50, 90, 45, 70, 50],
      },
    ],
    chartOptions: {
      chart: {
        height: 350,
        type: "radar",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          "People",
          "ESG",
          "Norms",
          "Goals",
          "Digital",
          "Innovation",
        ],
        labels: {
          show: true,
          style: {
            colors: ["#00C3C0", "#00C3C0", "#00C3C0", "#00C3C0", "#00C3C0", "#00C3C0"],
            fontSize: "11px",
            fontFamily: "Arial",
          },
        },
      },

      yaxis: {
        show: false,
      },
      stroke: {
        width: 1,
        colors: ["#00C3C0"],
      },
      markers: {
        size: 0,
      },
      fill: {
        colors: ["#00C3C0"],
      },
    },
  }),

  computed: {
    ...mapState(["culture_profile_data_set"]),
  },
};
</script>