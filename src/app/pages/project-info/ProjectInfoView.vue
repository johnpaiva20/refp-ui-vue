<template>
  <project-info-card :project="project" />
</template>

<style>
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { ProjectStatusEnum } from '@/domain/enums';
import { Project, Topic, Subtopic, Enterprise } from '@/domain/entities';
import { ProjectInfoCardComponent } from './components';
import store from '@/domain/store';
import { AxiosResponse } from 'axios';
import { FETCH_PROJECT } from '../../../domain/store/actions.type';
import moment from 'moment';
@Component({
  components: {
    'project-info-card': ProjectInfoCardComponent,
  },
})
export default class ProjectInfoView extends Vue {
  project: Project = new Project();

  created() {
    this.fetchData(parseInt(this.$router.currentRoute.params.id));
  }

  async fetchData(id: number) {
    store
      .dispatch(FETCH_PROJECT, id)
      .then((response: AxiosResponse) => {
        this.project = response.data;

        let end = moment(this.project.serviceOrder.begin).add(
          this.project.serviceOrder.duration,
          'months'
        ).add('day',1);

        this.project.serviceOrder.end = end.toDate();

        let remaning = moment(moment.now()).diff(
          this.project.serviceOrder.end,
          'months',
          true
        );

        let complete = moment(this.project.serviceOrder.end).diff(
          this.project.serviceOrder.begin,
          'months',
          true
        );

        this.project.topic = new Topic();
        this.project.subtopic = new Subtopic();
        if(this.project.mainEnterprise ==null){
          this.project.mainEnterprise = new Enterprise()

        }
        this.project.serviceOrder.begin = moment(this.project.serviceOrder.begin).add('day',1).toDate()
        let sum = remaning + complete;
        this.project.progress = sum;
        console.log(this.project)
      })
      .catch((error) => {
        console.log('Error ' + error);
      });
  }
}
</script>
