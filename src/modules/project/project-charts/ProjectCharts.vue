<template>
  <div>
    <accounting-chart />
    <accounting-pie-chart />
    <accounting-line-chart />
  </div>
</template>

<style>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AccountChar1Component from './compontents/AccountChar1Component.vue';
import AccountPieChartComponent from './compontents/AccountPieChartComponent.vue';
import AccountLineChartComponent from './compontents/AccountLineChartComponent.vue';
@Component({
  components: {
    'accounting-chart': AccountChar1Component,
    'accounting-pie-chart': AccountPieChartComponent,
    'accounting-line-chart': AccountLineChartComponent,
  },
})
export default class ProjectCharts extends Vue {}
</script>