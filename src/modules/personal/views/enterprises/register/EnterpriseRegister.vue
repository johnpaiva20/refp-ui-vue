<template>
  <div class="divPrincipal">
    <h1 class="tituloTelaCadastro">Cadastro de Empresa</h1>
    <b-row>
      <b-col md="4">
        <b-form-group id="fieldset-1" label="CNPJ" label-for="input-2">
          <b-form-input id="input-2" v-model="enterprise.cnpj"></b-form-input>
        </b-form-group>
      </b-col>

      <b-col md="4">
        <b-form-group id="fieldset-1" label="Razão Social" label-for="input-3">
          <b-form-input id="input-3" v-model="enterprise.company"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="10">
        <b-form-group id="fieldset-1" label="Nome Fantasia" label-for="input-4">
          <b-form-input id="input-4" v-model="enterprise.trade"></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="2">
        <b-form-group id="fieldset-1" label="Sigla" label-for="input-5">
          <b-form-input id="input-5" v-model="enterprise.initials"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <div class="divBtn">
        <v-btn color="success" @click="cancel()">Voltar</v-btn>
        <v-btn color="success" @click="save()">Cadastrar</v-btn>
      </div>
    </b-row>
  </div>
</template>

<style>
.divPrincipal {
  margin-top: 90px;
  margin-left: 15px;
  margin-right: 15px;
}
.tituloTelaCadastro {
  margin-left: 395px;
  margin-bottom: 20px;
  color: #bdd7c5;
}
.divBtn {
  margin-left: 450px;
  margin-top: 30px;
}
</style>


<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const EnterprisesRepository = RepositoryFactory.get("enterprises");
export default {
  data() {
    return {
      enterprise: {
        id: null,
        trade: "",
        company: "",
        cnpj: "",
        initials: ""
      }
    };
  },
  methods: {
    cancel() {
      this.$router.push("/personal/enterprises");
    },
    save() {
      EnterprisesRepository.createEnterprise(this.enterprise)
        .then(() => {
          this.$router.push({ path: `/personal/enterprises` });
        })
        .catch(error => console.log("Error: " + error));
    }
  }
};
</script>