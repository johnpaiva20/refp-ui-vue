<template>
  <v-list three-line>
    <template v-for="(item, index) in items">
      <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

      <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

      <v-list-item v-else :key="item.id" @click="()=>{}">
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="item.title"></v-list-item-title>
          <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<style lang="scss">
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class NotificationListComponent extends Vue {
  items = [
    { header: 'Hoje' },
    {
      id: 1,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 2,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 3,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 4,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 5,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 6,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    { header: 'Ontem' },
    {
      id: 7,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 8,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 9,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
    {
      id: 10,
      avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Nova Despesa ',
      subtitle:
        "<span class='text--primary'>José</span> &mdash; Nova despesa com viagem",
    },
  ];
}
</script>



