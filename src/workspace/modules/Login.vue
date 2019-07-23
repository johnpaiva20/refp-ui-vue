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
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Senha" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Senha"
          ></b-form-input>
        </b-form-group>
      </b-form>
      <v-btn block color="#3e8f52" class="white--text" v-on:click="login()">Entrar</v-btn>
      <div>
        <h6 class="version">Versão {{appVersion}}</h6>
      </div>
    </div>
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
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$router.push({ path: "/personal/projects" });
    }
  },
  computed: {
    appVersion() {
      return this.$store.getters.appVersion;
    }
    // other computed values here
  }
};
</script>


