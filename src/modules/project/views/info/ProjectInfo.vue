<template>
  <div>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row>
          <v-flex shrink pa-1>
            <!-- Project Progress  -->
            <v-progress-circular
              :rotate="-90"
              :size="220"
              :width="15"
              :value="project.progress"
              color="primary"
            >{{ project.progress }}%</v-progress-circular>
          </v-flex>
          <!-- Project Info  -->
          <div class="divStatusProject">
            <b-row>
              <b-col md="4">
                <div class="divLabel">
                  <label class="labelConfirmation">Código ANEEL</label>
                  <h6>{{project.aneelId||"Não Informado"}}</h6>
                </div>
                <div class="divLabel">
                  <label id="tituloProjeto" class="labelConfirmation">Título do Projeto</label>
                  <h6>{{project.title||"Não Informado"}}</h6>
                </div>
                <div class="divLabel" v-if="project.serviceOrder">
                  <label class="labelConfirmation">Data Iníco</label>
                  <h6>{{project.serviceOrder.begin| formatDate}}</h6>
                </div>
                <div class="divLabel" v-if="project.serviceOrder">
                  <label class="labelConfirmation">Ordem de Serviço (ODS)</label>
                  <h6>{{project.serviceOrder.order||"Não Informado"}}</h6>
                </div>
                <div class="divLabel" v-if="project.topic">
                  <label class="labelConfirmation">Tema</label>
                  <h6>{{project.topic.description||"Não Informado"}}</h6>
                </div>
                <div class="divLabel" v-if="project.product">
                  <label class="labelConfirmation">Produto</label>
                  <h6>{{project.product.type.description||"Não Informado"}}</h6>
                </div>
              </b-col>

              <b-col md="4">
                <div id="divLabelVazia" class="divLabel"></div>
                <div id="divLabelVazia" class="divLabel"></div>
                <div class="divLabel">
                  <label class="labelConfirmation">Duração</label>
                  <h6>{{project.duration||"Não Informado"}}</h6>
                </div>
                <div class="divLabel">
                  <label class="labelConfirmation">Segmento</label>
                  <h6>{{project.segment||"Não Informado"}}</h6>
                </div>
              </b-col>
              <b-col md="4">
                <div class="divLabel">
                  <label class="labelConfirmation">Empresa Proponente</label>
                  <h6>{{project.proponentCompany||"Não Informado"}}</h6>
                </div>
                <div id="divLabelVazia" class="divLabel"></div>
                <div class="divLabel" v-if="project.serviceOrder">
                  <label class="labelConfirmation">Data prevista de conclusão</label>
                  <h6>{{project.serviceOrder.end | formatDate}}</h6>
                </div>
                <div class="divLabel">
                  <label class="labelConfirmation">Fase da cadeia de inovação</label>
                  <h6>{{project.innovationPhase||"Não Informado"}}</h6>
                </div>
                <div class="divLabel" v-if="project.subtopic">
                  <label class="labelConfirmation">Subtema</label>
                  <h6>{{project.subtopic.description||"Não Informado"}}</h6>
                </div>
                <div class="divLabel" v-if="false">
                  <label class="labelConfirmation">Descrição Produto</label>
                  <h6>{{project.product.description||"Não Informado"}}</h6>
                </div>
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
</template>

<style>
.divStatusProject {
  margin-left: 40px;
  margin-top: 10px;
}
#tituloProjeto {
  width: 700px;
}
.divLabel {
  margin-top: 5px;
}
#divLabelVazia {
  height: 58px;
}
</style>


<script>
import { RepositoryFactory } from "../../../../repositories/RepositoryFactory";
//import moment from "moment";
const ProjectsRepository = RepositoryFactory.get("projects");
export default {
  data() {
    return {
      project: {}
    };
  },
  created() {
    this.fetchData(this.$router.currentRoute.params.id);
  },
  methods: {
    async fetchData(id) {
      this.loading = true;
      this.isLoading = true;
      const { data } = await ProjectsRepository.getProjectbyId(id);
      this.isLoading = false;
      this.project = data;
      // let remaning = moment(moment.now()).diff(
      //   this.project.serviceOrder.end,
      //   "months",
      //   true
      // );
      // let complete = moment(this.project.serviceOrder.end).diff(
      //   this.project.serviceOrder.begin,
      //   "months",
      //   true
      // );
      // let sum = remaning+complete;
      this.project.progress = 10;
    }
  }
};
</script>