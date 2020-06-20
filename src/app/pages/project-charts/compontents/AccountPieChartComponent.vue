<template>
  <v-card width="380" height="300">
    <v-card-title class="headline primary white--text" primary-title>Despesas consolidadas</v-card-title>
    <v-card-text>
      <apexchart type="pie" width="380" :options="chartOptions" :series="series" />
    </v-card-text>
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
    colors : ['#3E8F52', '#B9CD00'],
    labels: ['Previsto', 'Executado'],
  };
  series = [20,1];
 
}
</script>