<template>
  <v-app>
    <div class="project-info-container">
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex shrink pa-1>
              <!-- Project Progress  -->
              <v-progress-circular
                :rotate="-90"
                :size="220"
                :width="15"
                :value="value"
                color="primary"
              >{{ value }}%</v-progress-circular>
            </v-flex>
            <!-- Project Info  -->
            <div class="divStatusProject">

              <b-row>
              <b-col md="4">
                <label class="labelConfirmation">Código ANEEL</label>
                <h6>Não Informado</h6>
        
                <label id="tituloProjeto" class="labelConfirmation">Título do Projeto</label>
                <h6 id="tituloProjeto">Não Informado</h6>
                <label class="labelConfirmation"></label>
                <h6></h6>
                
                <label class="labelConfirmation">Data Inico</label>
                <h6>Não Informado</h6>
                

                <label class="labelConfirmation">Segmento</label>
                <h6>Não Informado</h6>

                <label class="labelConfirmation">Fase da Cadeia de Inovação</label>
                <h6>Não Informado</h6>
            </b-col>
            <b-col md="4">
                <label class="labelConfirmation"></label>
                <h6></h6>
                 <label class="labelConfirmation"></label>
                <h6></h6> 
                <label class="labelConfirmation"></label>
                <h6></h6>               
                <label class="labelConfirmation"></label>
                <h6></h6>
                <label class="labelConfirmation"></label>
                <h6></h6>

                <label class="labelConfirmation">Duração</label>
                <h6>Não Informado</h6>

                <label class="labelConfirmation">Produto</label>
                <h6>Não Informado</h6>
           </b-col>
           <b-col md="4">
                <label class="labelConfirmation">Empresa Proponente</label>
                <h6>Não Informado</h6>

                <label></label>
                <h6></h6> 

                <label></label>
                <h6></h6> 
             <label class="labelConfirmation">Data Prevista de conclusão</label>
             <h6>Não Informado</h6>
           </b-col>
        </b-row>

        
            </div>
          </v-layout>
        </v-container>
      </v-card>
      <!-- <v-expansion-panel>
        <v-expansion-panel-content v-for="(item,i) in 1" :key="i" >
          <template v-slot:header>
            <div>Aplicabilidade</div>
          </template>
          <v-card>
            <v-card-text
              class="grey lighten-3"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>-->
    </div>
  </v-app>
</template>

<style>
.project-info-container {
  position: relative;
  top: 50px;
  padding: 30px 5px 15px 5px;
}
.divStatusProject{
  margin-left: 30px;
  margin-top: 20px;
}
#tituloProjeto{
  width: 800px;
}
</style>


<script>
import api from "../../../../api/ProjectApi";
export default {
  data() {
    return {
      value: 70,
      project: {}
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      api
        .getProject(1)
        .then(response => {
          this.loading = false;
          this.project = response;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    api
      .getProject(1)
      .then(response => {
        this.project = response;
        console.log(this.project);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>