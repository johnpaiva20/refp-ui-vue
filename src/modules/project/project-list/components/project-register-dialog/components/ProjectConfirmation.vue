<template>
  <div>
    <v-container fluid ma-0 pa-2>
      <b-row>
        <b-col md="5">
          <label class="labelConfirmation">Código ANEEL</label>
          <h6>{{project.aneelId||"Não Informado"}}</h6>

          <label class="labelConfirmation">Título do Projeto</label>
          <h6>{{project.title||"Não Informado"}}</h6>

          <label class="labelConfirmation">Tema</label>
          <h6>{{project.topic.id||"Não Informado"}}</h6>

          <label class="labelConfirmation">Segmento</label>
          <h6>{{project.segment||"Não Informado"}}</h6>

          <label class="labelConfirmation">Fase da Cadeia de Inovação</label>
          <h6>{{project.innovationPhase||"Não Informado"}}</h6>
        </b-col>
        <b-col>
          <label class="labelConfirmation">Ordem de Serviço(ODS)</label>
          <h6>{{project.serviceOrder.order||"Não Informado"}}</h6>

          <label></label>
          <h6></h6>
          <label></label>
          <h6></h6>

          <label class="labelConfirmation">Subtema</label>
          <h6>{{project.subtopic.description||"Não Informado"}}</h6>

          <label class="labelConfirmation">Produto</label>
          <h6>{{project.product.type.id||"Não Informado"}}</h6>
        </b-col>
      </b-row>
    </v-container>
  </div>
</template>

<style>
.labelConfirmation {
  color: #43a047;
  font-size: 15px;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Project } from '../../../../../../workspace/models/Project';

@Component({})
export default class ProjectCardComponent extends Vue {
  @Prop()
  project: Project;
}
</script>   