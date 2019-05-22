<template>
  <v-app>
    <div class="background">
      <div class="login-form-container">
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
          <h6 class="version">Versão 0.0.0</h6>
        </div>
      </div>
    </div>
  </v-app>
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
</style>



<script>
import router from "../router/router";
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
      router.push({ path: "/personal/projects" });
    }
  }
};
</script>


