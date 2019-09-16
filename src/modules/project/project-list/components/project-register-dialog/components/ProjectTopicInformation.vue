<template>
  <v-form>
    <v-container fluid ma-0 pa-2>
      <v-layout row>
        <v-flex xs12>
          <v-select
            v-model="project.topic.id"
            :items="topics"
            item-value="id"
            item-text="description"
            label="Tema do Projeto"
            required
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 v-if="false">
          <v-textarea
            v-model="project.topic.description"
            label="Sugestão de Tema"
            auto-grow
            counter="1000"
          ></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-select
            v-model="project.subtopic.id"
            :items="subtopics"
            value="id"
            item-value="id"
            item-text="description"
            label="Subtema do Projeto"
            required
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 v-if="false">
          <v-textarea
            v-model="project.subtopic.description"
            label="Sugestão de Subtema"
            auto-grow
            counter="1000"
          ></v-textarea>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
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
import { Project } from '../../../../../../workspace/models/Project';
import { Prop, Watch } from 'vue-property-decorator';
import { Topic } from '../../../../../../workspace/models/Topic';
import { Subtopic } from '../../../../../../workspace/models/Subtopic';
import { ProjectType } from '../../../../../../workspace/models/ProjectType';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.getProjectRepository();
@Component({})
export default class ProjectTopicInfomationComponent extends Vue {
  @Prop()
  project: Project;

  topics: Topic[] = [];

  subtopics: Subtopic[] = [];

  @Watch('project.type')
  onProjectTypeChange(value: ProjectType, oldValue: ProjectType) {
    ProjectsRepository.listProjectTopics(value.id).then(
      (response) => (this.topics = response.data)
    );
  }

  @Watch('project.topic')
  onProjectTopicChange(value: Topic, oldValue: Topic) {
    ProjectsRepository.listProjectSubtopics(value.initials).then(
      (response) => (this.subtopics = response.data)
    );
  }

  created() {}
}
</script>        