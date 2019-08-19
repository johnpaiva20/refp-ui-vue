<template>
  <div class="project-documents-container">
    <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>

    <p class="mt-2">
      Selected file:
      <b>{{ file ? file.name : '' }}</b>
    </p>

    <b-button @click="clearFiles" class="btnFile">Limpar</b-button>
    <b-button class="btnFile">Adicionar</b-button>

    <v-data-table
      :headers="headers"
      :items="files"
      class="tableArch"
      hide-actions
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.extension }}</td>
      </template>
    </v-data-table>
    <div class="text-xs-right pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </div>
</template>
<style>
.project-documents-container {
  margin-top: 100px;
  padding: 0px 5px 15px 5px;
}
.btnFile {
  background-color: #3e8f52;
  margin-left: 5px;
}
.tableArch {
  margin-top: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      pagination: {},
      file: null,
      headers: [
        { text: 'Nome do Arquivo', value: 'name' },
        { text: 'Extensão', value: 'extension' },
      ],
      files: [],
    };
  },
  methods: {
    clearFiles() {
      this.$refs['file-input'].reset();
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

