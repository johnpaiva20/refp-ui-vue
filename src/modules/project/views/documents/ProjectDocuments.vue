<template>
  <div class="project-documents-container">
    <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>

    <p class="mt-2">
      Selected file:
      <b>{{ file ? file.name : '' }}</b>
    </p>

    <b-button @click="clearFiles" class="btnFile">Limpar</b-button>
    <b-button class="btnFile">Adicionar</b-button>

    <v-data-table :headers="headers" :items="desserts" class="tableArch">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.calories }}</td>
      </template>
    </v-data-table>
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
      file: null,
      headers: [
        {
          text: "Nome do Arquivo",
          align: "left",
          sortable: false,
          value: "nomeArquivo"
        },
        { text: "Extensão", value: "extensao" }
      ],
      desserts: [
        {
          name: "",
          calories: ""
        }
      ]
    };
  },
  methods: {
    clearFiles() {
      this.$refs["file-input"].reset();
    }
  }
};
</script>

