<template>
  <accounting-chart />
</template>

<style>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AccountChar1Component from './compontents/AccountChar1Component.vue';
@Component({
  components: {
    'accounting-chart': AccountChar1Component,
  },
})
export default class ProjectCharts extends Vue {
 
}
</script>