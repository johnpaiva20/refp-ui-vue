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
import { Project, ProjectType, AccountCategory } from '@/domain/entities';
import { ProjectTypeEnum } from '../../../../domain/enums/ProjectTypeEnum';
@Component({})
export default class ProjectCardComponent extends Vue {
  @Prop()
  project: Project;

  total = 0;
  accountingCategories = [
    { id: 'RH', description: 'Recursos Humanos' },
    { id: 'MC', description: 'Materiais de Consumo' },
    { id: 'MP', description: 'Materiais Permanentes e Equipamentos' },
    { id: 'ST', description: 'Serviços de Terceiros' },
    { id: 'VD', description: 'Viagens e Diárias' },
    { id: 'OU', description: 'Outros' },
  ];
  currencyMask = '###.###.###.###,##';

  created() {
    this.fetchData(this.project.type);
  }

  @Watch('project.type')
  onProjectTypeChange(value: ProjectTypeEnum, oldValue: ProjectTypeEnum) {
    this.fetchData(value);
  }

  fetchData(value: ProjectTypeEnum) {
    // AccountCategoriesRepository.listAccountCategories(value.id).then(
    //   (response) => (this.accountingCategories = response.data)
    // );
  }

  calculateAccountsValue() {
    let sum = 0;
    this.accountingCategories.forEach((e: any) => {
      if (e.value) {
        this.setAccountCategory2Project(e.id, e.value);
        sum += parseFloat(e.value);
      }
      this.total = sum;
    });
  }

  setAccountCategory2Project(id: string, value: number) {
    this.project.accountCategories.push({id:id,value:value})
    if (id === 'RH') {
      this.project.rbRH = value;
    } else if (id === 'MC') {
      this.project.rbMatCons = value;
    } else if (id === 'MP') {
      this.project.rbMatPerm = value;
    } else if (id === 'ST') {
      this.project.rbServTerc = value;
    } else if (id === 'VD') {
      this.project.rbViaDia = value;
    } else if (id === 'OU') {
      this.project.rbOutros = value;
    }
  }
}
</script>


