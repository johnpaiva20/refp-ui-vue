<template>
  <project-info-card :project="project"/>
</template>

<style>
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.getProjectRepository();
import { ProjectStatusEnum } from '../../../workspace/enums/ProjectStatusEnum';
import { Project } from '../../../workspace/models';
import { ProjectInfoCardComponent } from './components';
@Component({
  components: {
    'project-info-card': ProjectInfoCardComponent,
  },
})
export default class ProjectInfoView extends Vue {
  project: Project = new Project();
  loading: boolean;
  isLoading: boolean;

  created() {
    this.fetchData(parseInt(this.$router.currentRoute.params.id));
  }

  async fetchData(id: number) {
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
</script>
