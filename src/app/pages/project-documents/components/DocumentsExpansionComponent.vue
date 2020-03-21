<template>
  <v-expansion-panels accordion focusable class="table-position">
    <v-expansion-panel v-for="section in sections" :key="section.id">
      <v-expansion-panel-header>{{section.title}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list two-line subheader dense>
          <v-list-item v-for="item in items" :key="item.title">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="blue">close</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({})
export default class DocumentsExpansionComponent extends Vue {
  sections = [
    { id: 1, title: 'Contratos', count: 10 },
    { id: 2, title: 'Relatórios', count: 5 },
  ];
  items = [
    {
      icon: 'assignment',
      iconClass: 'blue white--text',
      title: 'Photos',
      subtitle: 'Jan 9, 2014',
    },
    {
      icon: 'assignment',
      iconClass: 'blue white--text',
      title: 'Recipes',
      subtitle: 'Jan 17, 2014',
    },
    {
      icon: 'assignment',
      iconClass: 'blue white--text',
      title: 'Work',
      subtitle: 'Jan 28, 2014',
    },
  ];
}
</script>

