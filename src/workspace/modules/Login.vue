<template>
  <div class="background">
    <v-card raised  max-width="600" height="420" max-height="450" elevation="12">
      <v-container>
        <v-row>
          <v-col cols="3" class="pb-0 pr-0 pt-0">
            <h6 class="version text-left">Versão {{appVersion}}</h6>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <b-img
            src="https://static.wixstatic.com/media/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.png/v1/fill/w_141,h_36,al_c,q_80,usm_0.66_1.00_0.01/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.webp"
            fluid
            alt="Responsive image"
            width="150px"
          ></b-img>
        </v-row>
        <v-row class="justify-center mt-12">
          <v-col>
            <v-form>
              <v-text-field
                label="Usuário/Email"
                placeholder="Usuário/Email"
                v-model="form.username"
                type="text"
                required
                outlined
                dense
              ></v-text-field>
              <v-text-field
                label="Senha"
                placeholder="Senha"
                v-model="form.password"
                type="password"
                required
                outlined
                dense
              ></v-text-field>
              <v-btn
                :loading="loading"
                :disabled="loading"
                block
                color="primary"
                class="white--text"
                v-on:click="login()"
              >Entrar</v-btn>
            </v-form>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn  text small>Esqueceu sua senha ?</v-btn>
          </v-col>
        </v-row>
         <v-row>
          <v-col >
            <h6 class="enterprise text-right">ToStringTech © Copyright 2019.</h6>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-snackbar
      v-model="snackbar.show"
      :bottom="true"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >{{ snackbar.message }}</v-snackbar>
  </div>
</template>

<style  >
.background {
  width: 100%;
  height: 100%;
  background-color: #3e8f52;
  padding: 45px;
}

.version {
  color: #3e8f52;
}

.enterprise{
  font-size: 11px
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface LoginForm {
  username: string;
  password: string;
}

interface Snackbar {
  show: boolean;
  message: string;
  timeout: number;
  color: string;
}

@Component({})
export default class Login extends Vue {
  private loading: boolean = false;

  private form: LoginForm = { username: '', password: '' };

  private snackbar: Snackbar = {
    show: false,
    message: '',
    timeout: 3000,
    color: 'info',
  };

  beforeCreate() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push({ path: '/personal/projects' });
    }
  }

  private login() {
    this.loading = true;
    this.$router.push({ path: '/personal/projects' });
    this.$store
      .dispatch('login', this.form)
      .then(() => {
        this.loading = false;
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
        if (err === 401) {
          this.loading = false;
          this.snackbar.show = true;
          this.snackbar.message = 'Credencias inválidas';
          this.snackbar.color = 'error';
        } else if (err === 500) {
          this.loading = false;
          this.snackbar.show = true;
          this.snackbar.message = 'Problemas com o servidor contate a TI';
          this.snackbar.message = 'info';
        }
      });
  }

  get appVersion() {
    return this.$store.getters.appVersion;
  }
}
</script>


