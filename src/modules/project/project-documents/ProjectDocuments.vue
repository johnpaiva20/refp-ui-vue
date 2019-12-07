<template>
  <div>
    <v-row class="ma-1">
      <div>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Pesquisar"
          outline
          single-line
          hide-details
          dense
        ></v-text-field>
      </div>
    </v-row>

    <v-row class="ma-1">
      <v-col cols="7">
        <v-btn class="float-right" color="primary" @click.stop="dialog = true">Adicionar</v-btn>
        <documents-expansion />
      </v-col>
      <v-spacer></v-spacer>
      <iframe width="40%" height="500px" src="http://www.africau.edu/images/default/sample.pdf" />
    </v-row>
  </div>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { DocumentsExpansionComponent } from './components';
@Component({
  components: {
    'documents-expansion': DocumentsExpansionComponent,
  },
})
export default class ProjectDocumentsListView extends Vue {}
</script>

