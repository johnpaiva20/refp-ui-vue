<template>
  <apexchart height="500" type="bar" :options="chartOptions" :series="series" />
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
        'Recursos Humanos',
        'Materiais de Consumo',
        'Materiais permanentes e equipamentos',
        'Serviços de terceiros',
        'Viagens e Diarias',
        'Outros',
      ],
    },
  };

  series = [
    {
      name: 'Previsto',
      data: [80, 20, 28, 95, 60, 170],
    },
    {
      name: 'Executado',
      data: [1, 20, 21, 25, 30, 120],
    },
  ];
}
</script>