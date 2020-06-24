<template>
  <v-card>
    <v-card-text>
      <v-col>
        <v-row>
          <v-flex shrink pa-1>
            <v-col class="pt-0 pb-0">
              <v-row>
                <v-flex shrink pa-1>
                  <v-col class="pt-0 pb-0">
                    <label class="label mb-0">Código ANEEL</label>
                    <h6>{{project.aneelId||"Não Informado"}}</h6>
                  </v-col>
                </v-flex>
                <v-spacer></v-spacer>
                <v-flex class="float-right" shrink pa-1>
                  <v-col class="pt-0 pb-0">
                    <label class="labelConfirmation">Empresa Proponente</label>
                    <h6>{{project.mainEnterprise.trade||"Não Informado"}}</h6>
                  </v-col>
                </v-flex>
              </v-row>
            </v-col>
            <v-flex shrink pt-0>
              <v-col class="pt-0 pb-0">
                <label class="label mb-0">Título</label>
                <h6>{{project.title||"Não Informado"}}</h6>
              </v-col>
            </v-flex>
            <v-col>
              <v-row>
                <v-flex shrink pt-0>
                  <v-col class="pt-0 pb-0">
                    <label class="label mb-0">Data Início</label>
                    <h6>{{project.serviceOrder.begin| formatDate}}</h6>
                  </v-col>
                </v-flex>
                <v-flex shrink pt-0 ml-5>
                  <v-col class="pt-0 pb-0">
                    <label class="label mb-0">Duração</label>
                    <h6>{{project.serviceOrder.duration||"Não Informado"}} meses</h6>
                  </v-col>
                </v-flex>
                <v-flex shrink pt-0 ml-5>
                  <v-col class="pt-0 pb-0" v-if="project.serviceOrder">
                    <label class="label mb-0">Data prevista de conclusão</label>
                    <h6>{{project.serviceOrder.end | formatDate}}</h6>
                  </v-col>
                </v-flex>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <v-flex v-if="true" shrink pt-0>
                  <v-col class="pt-0 pb-0">
                    <label class="label mb-0">Fase da cadeia de inovação</label>
                    <h6>{{project.innovationPhase||"Não Informado"}}</h6>
                  </v-col>
                </v-flex>
              </v-row>
              <v-row>
                <v-flex v-if="true" shrink pt-0>
                  <v-col class="pt-0 pb-0">
                    <label class="label mb-0">Segmento</label>
                    <h6>{{project.segment||"Não Informado"}}</h6>
                  </v-col>
                </v-flex>
              </v-row>
            </v-col>
          </v-flex>
          <!-- Project Progress  -->
          <v-flex shrink pl-5>
            <v-progress-circular
              :rotate="-90"
              :size="200"
              :width="15"
              :value="project.progress"
              color="primary"
            >{{ project.progress }}% Concluído</v-progress-circular>
          </v-flex>
        </v-row>
        <v-row>
          <v-flex shrink pt-0>
            <v-col v-if="project.serviceOrder" class="pt-0 pb-0">
              <label class="label mb-0">Ordem de Serviço (ODS)</label>
              <h6>{{project.serviceOrder.number||"Não Informado"}}</h6>
            </v-col>
          </v-flex>
        </v-row>
        <v-row>
          <v-flex shrink pt-0>
            <v-col v-if="project.topic">
              <v-row>
                <v-flex shrink pa-0>
                  <v-col class="pt-0 pb-0">
                    <label class="label mb-0">Tema</label>
                    <h6>{{project.topic.description||"Não Informado"}}</h6>
                  </v-col>
                </v-flex>
              </v-row>
              <v-row>
                <v-flex shrink pa-0>
                  <v-col class="pt-0 pb-0">
                    <label class="label mb-0">Subtema</label>
                    <h6>{{project.subtopic.description||"Não Informado"}}</h6>
                  </v-col>
                </v-flex>
              </v-row>
            </v-col>
          </v-flex>
        </v-row>
      </v-col>
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
import { Project } from '@/domain/entities';
import { Prop } from 'vue-property-decorator';
@Component({})
export default class ProjectInfoCardComponent extends Vue {
  @Prop()
  project: Project;
}
</script>
