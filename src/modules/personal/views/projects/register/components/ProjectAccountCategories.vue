<template>
  <div>
    <b-form-group
      v-for="category in accountingCategories "
      v-bind:key="category.id"
      id="fieldset-1"
      :label="`${category.description}`"
      label-for="input-1"
    >
      <b-form-input type="number"></b-form-input>
    </b-form-group>
    <div>
      <div>
        <!-- <div>
          <ApexCharts type="donut" width="380" :series="series"/>
        </div> -->
      </div>
      <div class="mt-2">
        <h4>O Valor Total Consolidado é de R${{ total }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
//import ApexCharts from "apexcharts/dist/apexcharts.js";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const AccountCategoriesRepository = RepositoryFactory.get("accountCategories");
export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      total: 0,
      accountingCategories: [],
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ]
    };
  },
  methods: {
    async fetch() {
      await AccountCategoriesRepository.getByProjectType("PD").then(
        response => (this.accountingCategories = response.data)
      );
    }
  },
  components: {
   // ApexCharts
  }
};
</script>

