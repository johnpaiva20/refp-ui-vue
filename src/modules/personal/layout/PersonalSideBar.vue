 <template>
  <v-navigation-drawer class="primary" width="200px" app fixed clipped permanent>
    <div class="divMenuSide">
          <b-img class="logoMenu" src="https://static.wixstatic.com/media/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.png/v1/fill/w_141,h_36,al_c,q_80,usm_0.66_1.00_0.01/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.webp" fluid alt="Responsive image"></b-img>
    </div>
    <v-list class="menuSideBar">
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
.menuSideBar{
  margin-top: 25px;
}
.logoMenu{
  background-color: #F5F5F5;
  margin-left: 18px;
  margin-top: 10px;
}
.divMenuSide{
  background-color: #F5F5F5;
  width: 200px;
  height: 64px;
}
</style>


 <script>
import router from "../../../router/router";
export default {
  data() {
    return {
      menuItens: [
        { id: 1, title: "Projetos", icon: "assignment", path: "projects" },
        { id: 2, title: "Empresas", icon: "business", path: "enterprises" },
        { id: 3, title: "Membros", icon: "people", path: "members" },
        { id: 4, title: "Auditoria", icon: " inbox ", path: "members" },
        { id: 5, title: "Contabilidade", icon: "monetization_on", path: "members" },
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