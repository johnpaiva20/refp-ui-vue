import Vue from 'vue'
import Router from 'vue-router'


import Login from '../modules/Login.vue';
//-------------------Personal Modules---------------------------

import PersonalArea from '../modules/personal/layout/PersonalArea.vue';
import ProjectList from '../modules/personal/views/projects/list/ProjectList.vue';
import ProjectRegister from '../modules/personal/views/projects/register/ProjectRegister.vue';
import EnterpriseList from '../modules/personal/views/enterprises/list/EnterpriseList.vue';
import EnterpriseRegister from '../modules/personal/views/enterprises/register/components/EnterpriseRegister.vue';
import MemberList from '../modules/personal/views/members/MemberList';

//-------------------Project Modules-----------------------------
import ProjectArea from '../modules/project/layout/ProjectArea.vue';
import ProjectInfo from '../modules/project/views/info/ProjectInfo.vue';
import ProjectCharts from '../modules/project/views/charts/ProjectCharts.vue';
import ProjectEnterprises from '../modules/project/views/enterprises/ProjectEnterprises.vue';
import ProjectMembers from '../modules/project/views/members/ProjectMembers.vue';
import ProjectDocuments from '../modules/project/views/documents/ProjectDocuments.vue';
import ProjectExpenses from '../modules/project/views/expenses/ProjectExpenses.vue';
import ProjectTerminate from '../modules/project/views/finalization/ProjectTerminate.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Login },
    {
      path: '/personal', component: PersonalArea,
      children: [
        { path: 'projects', component: ProjectList },
        { path: 'projects/register', component: ProjectRegister },
        { path: 'enterprises', component: EnterpriseList },
        { path: 'enterprises/register', component: EnterpriseRegister },
        { path: 'members', component: MemberList }
      ]
    },
    {
      path: '/project/:id', component: ProjectArea,
      children: [
        { path: 'info', component: ProjectInfo },
        { path: 'enterprises', component: ProjectEnterprises },
        { path: 'members', component: ProjectMembers },
        { path: 'charts', component: ProjectCharts },
        { path: 'expenses', component: ProjectExpenses },
        { path: 'documents', component: ProjectDocuments },
        { path: 'terminate', component: ProjectTerminate },
      ]
    }
  ]
})
