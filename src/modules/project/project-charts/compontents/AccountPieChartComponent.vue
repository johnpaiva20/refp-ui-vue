<template>
  <v-card width="380" height="250">
    <apexchart type="pie" width="380" :options="chartOptions" :series="series" />
  </v-card>
</template>

<style>
</style>

<script lang="ts">
import VueApexCharts from 'vue-apexcharts';
import { Component, Vue } from 'vue-property-decorator';
@Component({ components: { apexchart: VueApexCharts } })
export default class AccountChartComponent extends Vue {
  chartOptions = {
    labels: ['Previsto', 'Executado'],
  };

  series = [1, 20];
}
</script>