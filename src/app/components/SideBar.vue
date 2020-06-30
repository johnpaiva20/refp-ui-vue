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
import { menuItens } from '@/app/navigator';
import store from '../../domain/store';
import { SET_PERSONAL, SET_PROJECT } from '../../domain/store/mutations.type';
@Component({})
export default class SideBar extends Vue {
  @Prop()
  value: boolean;

  itens: any = [];

  beforeMount() {
    this.itens = menuItens.filter((e) => e != undefined && !e.isProject);
    this.handlerRoute(this.$router.currentRoute);
  }

  @Watch('$route', { immediate: true, deep: true })
  handlerRoute(to: any) {
    if (this.$store.state.application.isProject)
      this.itens = menuItens.filter((e) =>e != undefined && e.isProject);
    else this.itens = menuItens.filter((e) =>e != undefined && !e.isProject);
  }

  get show() {
    return this.value;
  }

  set show(value) {
    this.$emit('input', value);
  }

  goToPage(item: any) {
    if (item.action === SET_PERSONAL) {
      store.commit(SET_PERSONAL);
    }

    this.$router.push({ path: item.path }).catch((error) => {
      console.error(error);
    });
  }
}
</script>