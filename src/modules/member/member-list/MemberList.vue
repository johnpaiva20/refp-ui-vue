<template>
  <div>
    <v-row class="ma-1">
      <v-col cols="3" class="ma-0 pa-0">
        <v-text-field v-model="search" append-icon="search" label="Pesquisar" outlined dense></v-text-field>
      </v-col>

      <v-spacer></v-spacer>
      <v-col sm="1" class="ma-0 pa-0 pl-5">
        <v-btn color="primary" @click.stop="dialog = true">Novo</v-btn>
      </v-col>
    </v-row>

    <v-row class="ma-1">
      <v-col cols="12" class="ma-0 pa-0">
        <v-card>
          <v-data-table
            :headers="headers"
            :items="members"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"
            height="450"
          ></v-data-table>
          <div class="text-xs-right pt-2">
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style>
.table-position {
  top: 30px;
}

.search-field {
  padding-left: 5px;
}

.search-field > v-text-field {
  width: 300px;
}

.row-padding {
  padding-left: 10px;
  padding-right: 10px;
}
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const MemberRepository = RepositoryFactory.getMemberRepository();
@Component({})
export default class MemberListView extends Vue {
  
   search: string = '';
  page: number = 1;
  pageCount: number = 0;
  itemsPerPage: number = 8;
  isLoading: boolean = false;
  headers = [
    { text: 'Código do Membro', value: 'id' },
    { text: 'Nome', value: 'name' },
    { text: 'Função', value: 'degree' },
    { text: 'Titulação', value: 'role' },
    { text: 'CPF', value: 'cpf' },
  ];
  members = [];

  created() {
    this.fetch();
  }

  async fetch() {
    this.isLoading = true;
    const { data } = await MemberRepository.listMembers();
    this.isLoading = false;
    this.members = data;
  }

  goToMember() {
    const id = this.$router.currentRoute.params.id;
    this.$router.push({ path: `/member/${id}` });
  }
}
</script>
