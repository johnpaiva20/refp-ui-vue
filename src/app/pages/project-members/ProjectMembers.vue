<template>
 <div>
    <v-row class="ma-1">
      <v-col cols="3" class="ma-0 pa-0">
        <v-text-field v-model="search" append-icon="search" label="Pesquisar" outlined dense></v-text-field>
      </v-col>

      <v-spacer></v-spacer>
      <v-col sm="1" class="ma-0 pa-0 pl-5">
        <v-btn color="primary" @click.stop="dialog = true">Adicionar</v-btn>
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
            height="430"
          ></v-data-table>
          <div>
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <member-register-dialog v-model="dialog" />
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

.btn-new {
  padding-right: 5px;
}
</style>


<script>
export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      pagination: {},
      search: '',
      headers: [
        { text: 'Código do Membro', value: 'id' },
        { text: 'Nome', value: 'name' },
        { text: 'Função', value: 'degree' },
        { text: 'Titulação', value: 'role' },
        { text: 'CPF', value: 'cpf' },
      ],
      members: [],
    };
  },
  methods: {
    async fetch() {
      // this.isLoading = true;
      // let id = this.$router.currentRoute.params.id;
      // const { data } = await ProjectsRepository.listProjectMembers(id);
      // this.isLoading = false;
      // this.enterprises = data;
    },
    goToMember() {
      const id = this.$router.currentRoute.params.id;
      this.$router.push({ path: `/member/${id}` });
    },
  },
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    },
  },
};
</script>