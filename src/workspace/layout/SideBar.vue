 <template>
  <v-navigation-drawer class="primary" app clipped :mini-variant="show" width="180">
    <v-list dense nav>
      <v-list-item v-for="item in itens" v-bind:key="item.id" v-on:click="goToPage(item)">
        <v-list-item-icon>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
.icon {
  width: 24px;
  height: 24px;
}
</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { menuItens } from '../router/router';
@Component({})
export default class SideBar extends Vue {
  @Prop()
  collapsed: Boolean;

  itens: any = [];

  beforeMount() {
    this.itens = menuItens.personal;
  }

  @Watch('$route', { immediate: true, deep: true })
  handlerRoute(to: any) {
    if (to.params && new RegExp(/\bproject\b/).test(to.path)) {
      this.itens = menuItens.project;
    } else {
      this.itens = menuItens.personal;
    }
  }

   get show() {
    return this.collapsed;
  }

  set show(value) {
    this.$emit('input', value);
  }

  goToPage(item: any) {
    if (new RegExp(/\bregister\b/).test(this.$router.currentRoute.path)) {
      this.$router.back();
      this.$router.push({ path: item.path });
    } else {
      this.$router.push({ path: item.path });
    }
  }
}
</script>