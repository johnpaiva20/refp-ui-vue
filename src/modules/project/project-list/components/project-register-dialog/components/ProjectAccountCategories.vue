<template>
  <v-form>
    <v-row>
      <v-col cols="4" v-for="category in accountingCategories" v-bind:key="category.id">
        <v-text-field
          v-model="category.value"
          :label="category.description"
          prefix="R$"
          outlined
          dense
          placeholder="10000"
          v-on:change="calculateAccountsValue()"
        />
      </v-col>
    </v-row>
    <div>
      <div class="mt-2">
        <h4>O Valor Total Consolidado é de R$ {{ total }}</h4>
      </div>
    </div>
  </v-form>
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
import { Project, ProjectType } from '../../../../../../workspace/models';
import { AccountCategory } from '../../../../../../workspace/models/AccountCategory';
const AccountCategoriesRepository = RepositoryFactory.getAccountCategoryRepository();
@Component({})
export default class ProjectCardComponent extends Vue {
  @Prop()
  project: Project;

  total = 0;
  accountingCategories = [];
  currencyMask = '###.###.###.###,##';

  created() {
    this.fetchData(this.project.type);
  }

  @Watch('project.type')
  onProjectTypeChange(value: ProjectType, oldValue: ProjectType) {
    this.fetchData(value);
  }

  fetchData(value: ProjectType) {
    AccountCategoriesRepository.listAccountCategories(value.id).then(
      (response) => (this.accountingCategories = response.data)
    );
  }

  calculateAccountsValue() {
    let sum = 0;
    this.accountingCategories.forEach((e: any) => {
      if (e.value) {
        sum += parseFloat(e.value);
      }
      this.total = sum;
    });
  }
}
</script>


