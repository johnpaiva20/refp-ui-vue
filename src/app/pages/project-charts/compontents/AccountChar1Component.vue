<template>
  <v-card width="630" height="450">
    <v-card-title
      class="headline primary white--text"
      primary-title
    >Despesas por rubrica</v-card-title>
    <v-card-text>
      <apexchart width="590" height="350" type="bar" :options="chartOptions" :series="series" />
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
    colors: ['#3E8F52', '#B9CD00'],
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
    yaxis: {
          title: {
            text: 'R$ (Mil)'
          }
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