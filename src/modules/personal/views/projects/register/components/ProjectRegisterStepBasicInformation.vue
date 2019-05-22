<template>
  <v-app>
    <div>     
    <b-container width="200px" fluid="">
     
      <!-- Inicio Linha 1 -->
      <b-row>
        <!-- Inicio Coluna 1 -->
        <b-col md="4">
          <b-form-group  id="fieldset-1" class="inputFormStyle" label="Código da ANEEL" label-for="input-1">
            <b-form-input id="input-1" type="text" v-model="codigoAneel" :state="state" trim></b-form-input>
          </b-form-group>
       </b-col>
       <!-- Fim coluna 1 -->
       <!-- Inicio Coluna 2 na linha 1 -->
        <b-col md="2">
        <b-form-group id="fieldset-1" label="Data Início do Projeto" label-for="input-2">
          <b-form-input id="input-2"  type="date" v-model="dataInicioDoProjeto" :state="state" trim></b-form-input>
        </b-form-group> 
        </b-col>
        <!--Fim da coluna 2 na linha 1 -->
        <!-- Inicio da coluna 3 na linha 1 -->
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Duração (Em meses)" label-for="input-3">
            <b-form-input id="input-3" placeholder="Ex: 12 meses"  v-model="duracaoMeses" :state="state" trim></b-form-input>
          </b-form-group>
        </b-col>
        <!-- Fim da coluna 3 na linha 1 -->
        <!-- Inicio da coluna 4 na linha 1 -->
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Escolha o tipo do projeto" label-for="input-4">
            <b-form-select id="input-4"  v-model="selected" :options="options"></b-form-select>
          </b-form-group>
        </b-col>
        <!--Fim da coluna 4 na linha 1 -->      
      </b-row>
      <!-- Fim linha 1 -->  

      <!-- Inicio Linha 2 -->
       <b-row>
         <!-- Inicio Coluna Central -->
         <b-col md="12">
        <b-form-group  id="fieldset-1" label="Título do Projeto" label-for="input-5">
            <b-form-input id="input-5" type="text" v-model="tituloProjeto" :state="state" trim></b-form-input>
        </b-form-group>         
         </b-col>
      <!-- Fim Coluna Central -->
       </b-row> 
      <!-- Fim linha 2  -->

      <!-- Inicio Linha 3 -->
      <b-row>
        <!-- Inicio Coluna 1 -->
        <b-col md="4">
          <b-form-group  id="fieldset-1" class="inputFormStyle" label="Ordem de Serviço (ODS)" label-for="input-6">
            <b-form-input id="input-6" type="text" v-model="ordemServico" :state="state" trim></b-form-input>
          </b-form-group>
       </b-col>
       <!-- Fim coluna 1 -->
       <!-- Inicio Coluna 2 na linha 3 -->
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Fase de Cadeia" label-for="input-7">
            <b-form-select id="input-7"  v-model="selected2" :options="options2"></b-form-select>
          </b-form-group>
        </b-col>
        <!--Fim da coluna 2 na linha 3 -->
        <!-- Inicio da coluna 3 na linha 3 -->
          <b-col md="3">
          <b-form-group id="fieldset-1" label="Tipo do Produto" label-for="input-8">
            <b-form-select id="input-8"  v-model="selected3" :options="options3"></b-form-select>
          </b-form-group>
        </b-col>
        <!-- Fim da coluna 3 na linha 3 -->
        <!-- Inicio da coluna 4 na linha 3 -->
        <b-col md="2">
          <b-form-group id="fieldset-1" label="Segmento" label-for="input-9">
            <b-form-select id="input-9"  v-model="selected4" :options="options4"></b-form-select>
          </b-form-group>
        </b-col>        
        <!--Fim da coluna 4 na linha 3 -->      
      </b-row>
      <!-- Fim linha 3 -->  

      <!-- Inicio Linha 4 -->
       <b-row>
         <!-- Inicio Coluna Central -->
         <b-col md="12">
          <b-form-group id="fieldset-1" label="Escolha o Tema do Projeto" label-for="input-10">
            <b-form-select id="input-10"  v-model="selected5" :options="options5"></b-form-select>
          </b-form-group>       
         </b-col>
      <!-- Fim Coluna Central -->
       </b-row> 
      <!-- Fim linha 4  -->

      <!-- Inicio Linha 5 -->
       <b-row>
         <!-- Inicio Coluna Central -->
         <b-col md="12">
          <b-form-group id="fieldset-1" label="Escolha o Subtema do Projeto" label-for="input-11">
            <b-form-select id="input-11"  v-model="selected6" :options="options6"></b-form-select>
          </b-form-group>         
         </b-col>
      <!-- Fim Coluna Central -->
       </b-row> 
      <!-- Fim linha 5  -->





      
    </b-container>  
    </div>
  </v-app>
</template>

<style>


</style>



<script>
export default {
  data() {
    return {
      codigoAneel: "",
      dataInicioDoProjeto: "",
      selected: null,
        options: [
          { value: null, text: 'Selecione o tipo do projeto' },
          { value: 'PD', text: 'Pesquisa e Desenvolvimento' },
          { value: 'EE', text: 'Eficiência Energética' },
        ],
        selected2: null,
        options2: [
          { value: null, text: 'Fase de Cadeia' },
          { value: 'PB', text: 'Pesquisa Básica Dirigida' },
          { value: 'PA', text: 'Pesquisa Aplicada' },
          { value: 'DE', text: 'Desenvolvimento Experimental' },
          { value: 'CS', text: 'Cabeça-de-Série' },
          { value: 'LP', text: 'Lote Pioneiro' },
          { value: 'IM', text: 'Inserção no Mercado' },
        ],
          selected3: null,
        options3: [
          { value: null, text: 'Tipo de Produto' },
          { value: 'CM', text: 'Conceito ou Metodologia' },
          { value: 'SW', text: 'Software' },
          { value: 'SM', text: 'Sistema' },
          { value: 'MS', text: 'Material ou Substância' },
          { value: 'CD', text: 'Componente ou Dispositivo' },
          { value: 'ME', text: 'Máquina ou Equipamento' },
        ],
          selected4: null,
        options4: [
          { value: null, text: 'Segmento' },
          { value: 'G', text: 'Geração' },
          { value: 'T', text: 'Transmissão' },
          { value: 'D', text: 'Distribuição' },
          { value: 'C', text: 'Comercialização' },
        ],
         selected5: null,
        options5: [
          { value: null, text: 'Escolha o Tema do Projeto' },
          { value: 'FAGEE', text: 'Fontes Alternativas de Geração de Energia Elétrica' },
          { value: 'GT', text: 'Geração Termelétrica' },
          { value: 'GBR', text: 'Gestão de Bacias e Reservatórios' },
          { value: 'MB', text: 'Meio Ambiente' },
          { value: 'S', text: 'Segurança' },
          { value: 'EE', text: 'Eficiência Energética' },
          { value: 'PSEE', text: 'Planejamento de Sistemas de Energia Elétrica' },
          { value: 'OSEE', text: 'Operação de Sistemas de Energia Elétrica' },
          { value: 'SCPSEE', text: 'Supervisão, Controle e Proteção de Sistemas de Energia Elétrica' },
          { value: 'QCSEE', text: 'Qualidade e Confiabilidade dos Serviços de Energia Elétrica' },
          { value: 'MFCPC', text: 'Medição, Faturamento e Combate a Perdas Comerciais' },
          
        ],
         selected6: null,
        options6: [
          { value: null, text: 'Escolha o Subtema do Projeto' },
          { value: 'G', text: 'Geração' },
          { value: 'T', text: 'Transmissão' },
          { value: 'D', text: 'Distribuição' },
          { value: 'C', text: 'Comercialização' },
        ],
        
    };
  }
};
</script>