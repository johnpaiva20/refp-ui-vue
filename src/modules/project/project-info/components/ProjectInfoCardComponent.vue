<template>
  <v-card>
    <v-card-text>
      <v-row>
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
        <v-flex shrink pa-1>
          <v-col>
            <label class="label">Código ANEEL</label>
            <h6>{{project.aneelId||"Não Informado"}}</h6>
          </v-col>
          <v-col>
             <label class="label">Título</label>
             <h6>{{project.title||"Não Informado"}}</h6>
          </v-col>
          <v-col>
             <v-row>
               <v-flex shrink pa-1>
                 <v-col>
              <label class="label">Data Iníco</label>
              <h6>{{project.serviceOrder.begin| formatDate}}</h6>

                 </v-col>

               </v-flex>
               
               </v-row>
          </v-col>
        </v-flex>
        <!-- Project Info  -->
        <!-- <div class="divStatusProject">
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
        </div>-->
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style>
.label {
  color: #3e8f52;
  font-size: 15px;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Project } from '../../../../workspace/models';
import { Prop } from 'vue-property-decorator';
@Component({})
export default class ProjectInfoCardComponent extends Vue {
  @Prop()
  project: Project;
}
</script>
