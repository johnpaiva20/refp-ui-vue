<template>
  <v-app>
      <div class="divPrincipal">
      <h3 class="tituloTelaCadastro">Cadastro de Membros</h3>
      <b-row>
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Código Membro" label-for="input-1">
            <b-form-input id="input-1" v-model="codMembro" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="3">
          <b-form-group id="fieldset-1" label="Número de Matricula" label-for="input-2">
            <b-form-input id="input-2" v-model="nrMatricula" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>

        <b-col md="3">
          <b-form-group id="fieldset-1" label="Número de Membro" label-for="input-3">
            <b-form-input id="input-3" v-model="nrMembro" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>  

         <b-col md="3">
          <b-form-group id="fieldset-1" label="CPF" label-for="input-4">
            <b-form-input id="input-4" v-model="nrCPF" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col> 

      </b-row>

      <b-row>
        <b-col md="5">
          <b-form-group id="fieldset-1" label="E-mail" label-for="input-5">
            <b-form-input id="input-5" v-model="email" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Telefone" label-for="input-6">
            <b-form-input id="input-6" placeholder="Ex: (00) 0-0000-0000" v-model="telefone" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
           <b-form-group id="fieldset-1" label="Data de Nascimento" label-for="input-7">
            <b-form-input id="input-7" type="date" v-model="dtNascimento" :state="state" trim></b-form-input>
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
  margin-left: 0px;
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

  }  
 }
};
</script>