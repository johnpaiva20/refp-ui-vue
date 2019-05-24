<template>
  <v-app>
    <div class="divPrincipal">
      <h1 class="tituloTelaCadastro">Cadastro de Empresa</h1>
      <b-row>
        <b-col md="4">
          <b-form-group id="fieldset-1" label="Código Empresa" label-for="input-1">
            <b-form-input id="input-1" v-model="codEmpresa" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group id="fieldset-1" label="CNPJ" label-for="input-2">
            <b-form-input id="input-2" v-model="cnpj" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="4">
          <b-form-group id="fieldset-1" label="Razão Social" label-for="input-3">
            <b-form-input id="input-3" v-model="razaoSocial" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>  

      </b-row>

      <b-row>
        <b-col md="10">
          <b-form-group id="fieldset-1" label="Nome Fantasia" label-for="input-4">
            <b-form-input id="input-4" v-model="nomeFantasia" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="2">
          <b-form-group id="fieldset-1" label="Sigla" label-for="input-5">
            <b-form-input id="input-5" v-model="sigla" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <div class="divBtn">
        <v-btn color="success">Voltar</v-btn>
        <v-btn color="success">Cadastrar</v-btn>
        </div>
      </b-row>



    </div>
  </v-app>
</template>

<style>
.divPrincipal{
  margin-top: 90px;
  margin-left: 15px;
  margin-right: 15px;
}
.tituloTelaCadastro{
  margin-left: 395px;
  margin-bottom: 20px;
  color: #BDD7C5;
}
.divBtn{
  margin-left: 450px;
  margin-top: 30px;
}
</style>


<script>
export default {
  data() {
    return { 
    
      codEmpresa: "",
      cnpj: "",
      razaoSocial: "",
      nomeFantasia: "",
      sigla: "",
  }  
 }
};
</script>