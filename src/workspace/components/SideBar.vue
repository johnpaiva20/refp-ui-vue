 <template>
  <v-navigation-drawer
    class="primary mt-5"
    width="180px"
    style="top: 24px"
    app
    clipped
    :mini-variant.sync="collapsed"
  >
    <v-list class="menuSideBar">
      <v-list-tile v-for="item in itens" v-bind:key="item.id" v-on:click="goToPage(item.path)">
        <v-list-tile-action>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="white--text">{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
</style>

<script>
export default {
  props: { collapsed: Boolean },
  watch: {
    $route(to) {
      this.handlerRoute(to);
    }
  },
  beforeMount() {
    this.itens = this.menuItens.personal;
  },
  data() {
    return {
      itens: [],
      menuItens: {
        personal: [
          { id: 1, title: "Projetos", icon: "assignment", path: "projects" },
          { id: 2, title: "Empresas", icon: "business", path: "enterprises" }
          //{ id: 3, title: "Membros", icon: "people", path: "members" },
          // { id: 4, title: "Auditoria", icon: " inbox ", path: "members" },
          // {
          //   id: 5,
          //   title: "Contabilidade",
          //   icon: "monetization_on",
          //   path: "members"
          // }
        ],
        project: [
          { id: 1, title: "Informações", icon: "info", path: "info" },
          { id: 2, title: "Empresas", icon: "business", path: "enterprises" },
          //{ id: 3, title: "Membros", icon: "people", path: "members" },
          //{ id: 4, title: "Despesas", icon: "monetization_on", path: "expenses" },
          //{ id: 5, title: "Documentos", icon: "folder", path: "documents" },
          //{ id: 6, title: "Gráficos", icon: "insert_chart", path: "charts" },
          //{ id: 7, title: "Finalizar Projeto", icon: "cancel", path: "terminate" }
          {
            id: 8,
            title: "Voltar",
            icon: "arrow_back_ios",
            path: "/personal/projects"
          }
        ]
      }
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
    goToPage(path) {
      if (new RegExp(/\bregister\b/).test(this.$router.currentRoute.path)) {
        this.$router.back();
        this.$router.push({ path: path });
      } else {
        this.$router.push({ path: path });
      }
    }
  }
};
</script>