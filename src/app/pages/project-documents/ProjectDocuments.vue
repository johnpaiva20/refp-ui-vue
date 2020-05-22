<template>
  <div>
    <v-row>
      <v-col cols="6" class="pb-0 pt-0">
        <v-row class="ma-1">
          <v-col cols="12" class="ma-0 pa-0">
            <v-text-field v-model="search" append-icon="search" label="Pesquisar" outlined dense></v-text-field>
          </v-col>
        </v-row>

        <v-row class="ma-1">
          <v-col cols="10" class="ma-0 pa-0">
            <v-file-input multiple label="Anexar Documento" @click.stop="dialog = true"></v-file-input>
            <documents-expansion />
          </v-col>
          <v-col cols="2" class="ma-0 pa-0">
            <v-btn color="success" dark>Salvar</v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-col>

      <v-col cols="6" class="pl-0 pb-0 pt-0">
        <v-col cols="12" class="ma-0 pa-0">
          <iframe
            width="100%"
            height="510px"
            src="http://www.africau.edu/images/default/sample.pdf"
          />
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<style>
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { DocumentsExpansionComponent } from "./components";
@Component({
  components: {
    "documents-expansion": DocumentsExpansionComponent
  }
})
export default class ProjectDocumentsListView extends Vue {
  search: string = "";
}
</script>

