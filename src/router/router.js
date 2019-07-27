import Vue from 'vue';
import Router from 'vue-router';

import Login from '../workspace/modules/Login.vue';
import RootArea from '../workspace/components/RootArea.vue';

// -------------------Personal Modules---------------------------
import ProjectList from '../modules/project/project-list/ProjectList.vue';
import ProjectRegister from '../modules/project/project-register/ProjectRegister.vue';
import EnterpriseList from '../modules/enterprise/enterprise-list/EnterpriseList.vue';
import EnterpriseRegister from '../modules/enterprise/enterprise-register/EnterpriseRegister.vue';
import MemberList from '../modules/member/member-list/MemberList.vue';
import MemberRegister from '../modules/member/member-register/MemberRegister.vue';

// -------------------Project Modules-----------------------------
import ProjectInfo from '../modules/project/project-info/ProjectInfo.vue';
import ProjectCharts from '../modules/project/project-charts/ProjectCharts.vue';
import ProjectEnterprises from '../modules/project/project-enterprises/ProjectEnterprises.vue';
import ProjectMembers from '../modules/project/project-members/ProjectMembers.vue';
import ProjectDocuments from '../modules/project/project-documents/ProjectDocuments.vue';
import ProjectExpenses from '../modules/project/project-expenses/ProjectExpenses.vue';
import ProjectTerminate from '../modules/project/project-finalization/ProjectTerminate.vue';

Vue.use(Router);

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login') 
//   } else {
//     next() 
//   }
// })

export default new Router({
  routes: [
    { path: '/', component: Login },
    {
      path: '/personal', component: RootArea,
      children: [
        { path: 'projects', component: ProjectList },
        { path: 'projects/register', component: ProjectRegister },
        { path: 'enterprises', component: EnterpriseList },
        { path: 'enterprises/register', component: EnterpriseRegister },
        { path: 'members/register', component: MemberRegister },
        { path: 'members', component: MemberList },
      ],
    },
    {
      path: '/project/:id', component: RootArea,
      children: [
        { path: 'info', component: ProjectInfo },
        { path: 'enterprises', component: ProjectEnterprises },
        { path: 'members', component: ProjectMembers },
        { path: 'charts', component: ProjectCharts },
        { path: 'expenses', component: ProjectExpenses },
        { path: 'documents', component: ProjectDocuments },
        { path: 'terminate', component: ProjectTerminate },
      ],
    },
  ],
  
});


