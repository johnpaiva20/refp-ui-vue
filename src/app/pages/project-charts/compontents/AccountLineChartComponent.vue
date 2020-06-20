<template>
  <v-card height="350">
    <v-card-title
      class="headline primary white--text"
      primary-title
    >Evolução das despesas por rubrica</v-card-title>
    <v-card-text>
    <apexchart type="line" height="350" :options="chartOptions" :series="series" />
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
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
  };

  series = [
    {
      name: 'Recursos Humanos',
      data: [10, 4, 35, 51, 49, 62, 69, 91, 148],
    },
    {
      name: 'Materiais de Consumo',
      data: [10, 41, 35, 61, 49, 62, 69, 91, 148],
    },
    {
      name: 'Materiais permanentes e equipamentos',
      data: [10, 41, 35, 51, 49, 48, 99, 91, 148],
    },
    {
      name: 'Serviços de terceiros',
      data: [10, 41, 35, 81, 49, 42, 69, 91, 148],
    },
    { name: 'Viagens e Diarias', data: [10, 91, 35, 71, 49, 62, 69, 91, 148] },
    { name: 'Outros', data: [10, 41, 35, 71, 99, 62, 29, 91, 148] },
  ];
}
</script>