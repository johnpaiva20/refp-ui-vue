 <template>
  <v-navigation-drawer class="primary" width="200px" app fixed clipped permanent>
    <v-list>
      <v-list-tile v-for="item in menuItens" v-bind:key="item.id" v-on:click="goToPage(item.path)">
        <v-list-tile-action>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="white--text">{{item.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile v-on:click="back()">
        <v-list-tile-action>
          <v-icon class="white--text">arrow_back_ios</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="white--text">Voltar</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>


<style>
</style>


 <script>
import router from "../../../router/router";

export default {
  data() {
    return {
      menuItens: [
        { id: 1, title: "Informações", icon: "info", path: "info" },
        { id: 2, title: "Empresas", icon: "business", path: "enterprises" },
        { id: 3, title: "Membros", icon: "people", path: "members" },
        { id: 4, title: "Despesas", icon: "monetization_on", path: "expenses" },
        { id: 5, title: "Documentos", icon: "folder", path: "documents" },
        { id: 6, title: "Gráficos", icon: "insert_chart", path: "charts" },
        { id: 7, title: "Finalizar Projeto", icon: "cancel", path: "terminate" }
      ]
    };
  },
  methods: {
    goToPage(path) {
      console.log(router.currentRoute.params.id);
      router.push({ path: path });
    },
    back() {
      router.push({ path: "/personal/projects" });
    }
  }
};
</script>