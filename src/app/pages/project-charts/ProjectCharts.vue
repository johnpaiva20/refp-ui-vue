<template>
  <div>
    <v-row>
      <v-col>
        <accounting-chart />
      </v-col>
      <v-col>
        <accounting-pie-chart />
      </v-col>
    </v-row>
    <v-row>
<v-col>
      <accounting-line-chart />
</v-col>
  
   
      
    </v-row>
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