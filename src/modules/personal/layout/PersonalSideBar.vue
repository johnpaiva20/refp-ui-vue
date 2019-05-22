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
        { id: 1, title: "Projetos", icon: "assignment", path: "projects" },
        { id: 2, title: "Empresas", icon: "business", path: "enterprises" },
        { id: 3, title: "Membros", icon: "people", path: "members" }
      ]
    };
  },
  methods: {
    goToPage(path) {
      router.push({ path: path });
    }
  }
};
</script>