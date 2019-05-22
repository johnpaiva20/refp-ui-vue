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
            <v-flex grow pa-1>
              <v-layout row>
                <v-flex grow pa-1>
                  <div class="col-5" style="margin-top: 10px">
                    <label style="color: #43a047;">Código ANEEL</label>
                    <h6>{{"Não Informado"}}</h6>
                  </div>
                </v-flex>
                <v-flex grow pa-1>
                  <div class="col-5" style="margin-top: 10px">
                    <label style="color: #43a047;">Empresa Proponente</label>
                    <h6>{{"Não Informado"}}</h6>
                  </div>
                </v-flex>
              </v-layout>
              <v-layout row>
                <div class="col-5" style="margin-top: 10px">
                  <label style="color: #43a047;">Titulo do Projeto</label>
                  <h6>{{"Não Informado"}}</h6>
                </div>
              </v-layout>
              <v-layout row>
                <v-flex grow pa-1>
                  <div class="col-5" style="margin-top: 10px">
                    <label style="color: #43a047;">Data inicio</label>
                    <h6>{{"Não Informado"}}</h6>
                  </div>
                </v-flex>
                <v-flex grow pa-1>
                  <div class="col-4" style="margin-top: 10px">
                    <label style="color: #43a047;">Duração</label>
                    <h6>{{"Não Informado"}}</h6>
                  </div>
                </v-flex>
                <v-flex grow pa-1>
                  <div class="col-5" style="margin-top: 10px">
                    <label style="color: #43a047;">Data prevista de conclusão</label>
                    <h6>{{"Não Informado"}}</h6>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex grow>
              <div class="col-12" style="margin-top: 10px">
                <label style="color: #43a047;">Ordem de Serviço(ODS)</label>
                <h6>{{"Não Informado"}}</h6>
              </div>
            </v-flex>
            <v-flex grow>
              <div class="col-5" style="margin-top: 10px">
                <label style="color: #43a047;">Segmento</label>
                <h6>{{"Não Informado"}}</h6>
              </div>
            </v-flex>
            <v-flex grow>
              <div class="col-5" style="margin-top: 10px">
                <label style="color: #43a047;">Fase da Cadeia de Inovação</label>
                <h6>{{"Não Informado"}}</h6>
              </div>
            </v-flex>
          </v-layout>
          <v-layout row>
            <div class="col-5" style="margin-top: 10px">
              <label style="color: #43a047;">Tema</label>
              <h6>{{"Não Informado"}}</h6>
            </div>
          </v-layout>
          <v-layout row>
            <div class="col-5" style="margin-top: 10px">
              <label style="color: #43a047;">Subtema</label>
              <h6>{{"Não Informado"}}</h6>
            </div>
          </v-layout>
          <v-layout row>
            <div class="col-5" style="margin-top: 10px">
              <label style="color: #43a047;">Produto</label>
              <h6>{{"Não Informado"}}</h6>
            </div>
          </v-layout>
          <v-layout row>
            <div class="col-5" style="margin-top: 10px">
              <label style="color: #43a047;">Descrição Produto</label>
              <h6>{{"Não Informado"}}</h6>
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