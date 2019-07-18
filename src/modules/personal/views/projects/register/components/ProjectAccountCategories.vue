<template>
  <div>
    <b-form-group
      v-for="category in accountingCategories "
      v-bind:key="category.id"
      :label="`${category.description}`"
    >
      <b-form-input type="number"></b-form-input>
    </b-form-group>
    <div>
      <div class="mt-2">
        <h4>O Valor Total Consolidado é de R${{ total }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const AccountCategoriesRepository = RepositoryFactory.get("accountCategories");
export default {
  props:["type"],
  created() {
    this.fetch();
  },
  watch: {},
  data() {
    return {
      total: 0,
      accountingCategories: []
    };
  },
  methods: {
    async fetch() {
      await AccountCategoriesRepository.listAccountCategories("PD").then(
        response => (this.accountingCategories = response.data)
      );
    }
  },
  components: {}
};
</script>

