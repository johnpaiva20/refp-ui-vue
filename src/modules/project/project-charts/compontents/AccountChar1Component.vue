<template>
  <apexchart height="200" type="bar" :options="chartOptions" :series="series" />
</template>

<style>
</style>

<script lang="ts">
import VueApexCharts from 'vue-apexcharts';
import { Component, Vue } from 'vue-property-decorator';
@Component({ components: { apexchart: VueApexCharts } })
export default class AccountChartComponent extends Vue {
  chartOptions = {
    xaxis: {
      type: 'datetime',
      categories: [
        '2019-01-01',
        '2019-02-01',
        '2019-03-01',
        '2019-04-01',
        '2019-05-01',
        '2019-06-01',
        '2019-07-01',
      ],
    },
  };

  series = [
    {
      name: 'WebsiteHits',
      data: [15, 20, 21, 25, 60, 120, 93],
    },
  ];
}
</script>