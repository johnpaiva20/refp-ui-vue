import EnterpriseList from '@/modules/enterprise/enterprise-list/EnterpriseList.vue';
import MemberList from '@/modules/member/member-list/MemberList.vue';
import ProjectCharts from '@/modules/project/project-charts/ProjectCharts.vue';
import ProjectDocuments from '@/modules/project/project-documents/ProjectDocuments.vue';
import ProjectEnterprises from '@/modules/project/project-enterprises/ProjectEnterprises.vue';
import ProjectExpenses from '@/modules/project/project-expenses/ProjectExpenses.vue';
import ProjectTerminate from '@/modules/project/project-finalization/ProjectTerminate.vue';
import ProjectInfoView from '@/modules/project/project-info/ProjectInfoView.vue';
import ProjectList from '@/modules/project/project-list/ProjectList.vue';
import ProjectMembers from '@/modules/project/project-members/ProjectMembers.vue';
import RootArea from '@/workspace/layout/RootArea.vue';
import Login from '@/workspace/modules/Login.vue';
import Vue from 'vue';
import Router from 'vue-router';




Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Login },
    {
      path: '/personal', component: RootArea,
      children: [
        { path: 'projects', component: ProjectList, name: 'Lista de Projetos' },
        { path: 'enterprises', component: EnterpriseList, name: 'Lista de Empresas' },
        { path: 'members', component: MemberList, name: 'Lista de Membros' },
      ],
    },
    {
      path: '/project/:id', component: RootArea,
      children: [
        { path: 'info', component: ProjectInfoView, name: 'Informações' },
        { path: 'enterprises', component: ProjectEnterprises, name: 'Empresas' },
        { path: 'members', component: ProjectMembers, name: 'Membros' },
        { path: 'charts', component: ProjectCharts, name: 'Gráficos' },
        { path: 'expenses', component: ProjectExpenses, name: 'Despesas' },
        { path: 'documents', component: ProjectDocuments, name: 'Documentos' },
        { path: 'terminate', component: ProjectTerminate, name: 'Finalizar Projeto' },
      ],
    },
  ],

});

export const menuItens = {
  personal: [
    { id: 1, title: 'Projetos', icon: 'tst-project', path: 'projects' },
    { id: 2, title: 'Empresas', icon: 'business', path: 'enterprises' },
    { id: 3, title: 'Membros', icon: 'people', path: 'members' },
    // { id: 4, title: "Auditoria", icon: " inbox ", path: "members" },
    // {
    //   id: 5,
    //   title: "Contabilidade",
    //   icon: "monetization_on",
    //   path: "members"
    // }
  ],
  project: [
    { id: 1, title: 'Informações', icon: 'info', path: 'info' },
    //{ id: 2, title: 'Empresas', icon: 'business', path: 'enterprises' },
    // { id: 3, title: "Membros", icon: "people", path: "members" },
    {
      id: 4,
      title: 'Despesas',
      icon: 'monetization_on',
      path: 'expenses',
    },
    { id: 5, title: 'Documentos', icon: 'folder', path: 'documents' },
    { id: 6, title: 'Gráficos', icon: 'insert_chart', path: 'charts' },
    // { id: 7, title: "Finalizar Projeto", icon: "cancel", path: "terminate" }
    {
      id: 8,
      title: 'Voltar',
      icon: 'arrow_back_ios',
      path: '/personal/projects',
    },
  ],
};

export const toolbarItens = [
  // {
  //   id: 3,
  //   desription: 'settings_applications',
  //   icon: 'settings_applications',
  //   action: 'settings',
  // },
  // {
  //   id: 2,
  //   description: 'notifications',
  //   icon: 'notifications',
  //   action: 'notifications',
  // },
  {
    id: 1,
    description: 'logout',
    icon: 'power_settings_new',
    action: 'logout',
  },
];
