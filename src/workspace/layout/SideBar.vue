 <template>
  <v-navigation-drawer class="primary" app clipped :mini-variant="collapsed">
     <v-list
        dense
        nav
      >
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

<script>
export default {
  props: { collapsed: Boolean },
  watch: {
    $route(to) {
      this.handlerRoute(to);
    },
  },
  beforeMount() {
    this.itens = this.menuItens.personal;
  },
  data() {
    return {
      itens: [],
      menuItens: {
        personal: [
          { id: 1, title: 'Projetos', icon: 'tst-project', path: 'projects' },
          //{ id: 2, title: 'Empresas', icon: 'business', path: 'enterprises' },
          // { id: 3, title: "Membros", icon: "people", path: "members" },
          // { id: 4, title: "Auditoria", icon: " inbox ", path: "members" },
          // {
          //   id: 5,
          //   title: "Contabilidade",
          //   icon: "monetization_on",
          //   path: "members"
          // }
        ],
        project: [
          { id: 1, title: 'Informações', icon: 'info', path: 'info' },
          //{ id: 2, title: 'Empresas', icon: 'business', path: 'enterprises' },
          // { id: 3, title: "Membros", icon: "people", path: "members" },
          {
            id: 4,
            title: 'Despesas',
            icon: 'monetization_on',
            path: 'expenses',
          },
          { id: 5, title: 'Documentos', icon: 'folder', path: 'documents' },
          { id: 6, title: 'Gráficos', icon: 'insert_chart', path: 'charts' },
          // { id: 7, title: "Finalizar Projeto", icon: "cancel", path: "terminate" }
          {
            id: 8,
            title: 'Voltar',
            icon: 'arrow_back_ios',
            path: '/personal/projects',
          },
        ],
      },
    };
  },
  methods: {
    handlerRoute(to) {
      if (to.params && new RegExp(/\bproject\b/).test(to.path)) {
        this.itens = this.menuItens.project;
      } else {
        this.itens = this.menuItens.personal;
      }
    },
    goToPage(item) {
      if (new RegExp(/\bregister\b/).test(this.$router.currentRoute.path)) {
        this.$router.back();
        this.$router.push({ path: item.path });
      } else {
        this.$router.push({ path: item.path });
      }
      this.$emit('modelSelected', item);
    },
  },
};
</script>