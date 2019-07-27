<template>
  <div class="background">
    <div class="login-form-container">
      <div class="divLogo">
        <b-img
          class="logo"
          src="https://static.wixstatic.com/media/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.png/v1/fill/w_141,h_36,al_c,q_80,usm_0.66_1.00_0.01/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.webp"
          fluid
          alt="Responsive image"
        ></b-img>
      </div>
      <b-form>
        <b-form-group id="input-group-1" label="Usuário/Email" label-for="input-1">
          <b-form-input id="input-1" v-model="form.username" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Senha" label-for="input-2">
          <b-form-input id="input-2" v-model="form.password" type="password" required></b-form-input>
        </b-form-group>
      </b-form>
      <v-btn
        :loading="loading"
        :disabled="loading"
        block
        color="#3e8f52"
        class="white--text"
        v-on:click="login()"
      >Entrar</v-btn>
      <div>
        <h6 class="version">Versão {{appVersion}}</h6>
      </div>
    </div>
    <v-snackbar
      v-model="snackbar.show"
      :bottom="true"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    
    >{{ snackbar.message }}</v-snackbar>
  </div>
</template>

<style>
.background {
  width: 100%;
  height: 100%;
  background-color: #3e8f52;
  padding: 45px;
}

.login-form-container {
  width: 500px;
  height: 450px;
  background-color: white;
  border-radius: 20px;
  position: relative;
  top: 20px;
  left: 420px;
  padding: 45px;
}

.btn-login {
  color: white;
}

.version {
  color: #3e8f52;
}
.divLogo {
  margin-left: 25%;
  margin-top: 20px;
  height: 100px;
}
.logo {
  height: 50px;
  width: 180px;
}
</style>

<script>
export default {
  mounted() {},
  created() {},
  data() {
    return {
      loading: false,
      snackbar: {
        show: false,
        message: "",
        timeout: 3000,
        color: "info"
      },
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          this.loading = false;
          this.$router.push({ path: "/personal/projects" });
        })
        .catch(err => {
          if (err.response.data.status === 401) {
            this.loading = false;
            this.snackbar.show = true;
            this.snackbar.message = "Credencias inválidas";
            this.snackbar.color="error"
          }else if(err.response.data.status === 500){
             this.loading = false;
            this.snackbar.show = true;
            this.snackbar.message = "Problemas com o servidor contate a TI";
            this.snackbar.message = "info";
          }

          console.log(err);
        });
    }
  },
  computed: {
    appVersion() {
      return this.$store.getters.appVersion;
    }
  }
};
</script>


