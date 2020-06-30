import EnterpriseList from '@/app/pages/enterprise-list/EnterpriseList.vue';
import MemberList from '@/app/pages/member-list/MemberList.vue';
import ProjectCharts from '@/app/pages/project-charts/ProjectCharts.vue';
import ProjectDocuments from '@/app/pages/project-documents/ProjectDocuments.vue';
import ProjectEnterprises from '@/app/pages/project-enterprises/ProjectEnterprises.vue';
import ProjectExpenses from '@/app/pages/project-expenses/ProjectExpenses.vue';
import ProjectTerminate from '@/app/pages/project-finalization/ProjectTerminate.vue';
import ProjectInfoView from '@/app/pages/project-info/ProjectInfoView.vue';
import ProjectList from '@/app/pages/project-list/ProjectList.vue';
import ProjectMembers from '@/app/pages/project-members/ProjectMembers.vue';
import RootArea from '@/app/components/RootArea.vue';
import Login from '@/app/pages/login/Login.vue';
import ExpenseList from '@/app/pages/expense-list/ExpenseList.vue'
import Vue from 'vue';
import Router from 'vue-router';
import { SET_PERSONAL } from '@/domain/store/mutations.type';
import { LOGOUT } from '@/domain/store/actions.type';

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
        { path: 'auditorship', component: ProjectList, name: 'Auditoria' },
        { path: 'accounting', component: ProjectList, name: 'Contabilidade' },
        { path: 'expenses', component: ExpenseList, name: 'Despesas' },
        { path: 'reports', component: ExpenseList, name: 'Relatorios' }
      ],
    },
    {
      path: '/project/:id', component: RootArea,
      children: [
        { path: 'info', component: ProjectInfoView, name: 'Informações' },
        { path: 'enterprises', component: ProjectEnterprises, name: 'Empresas' },
        { path: 'members', component: ProjectMembers, name: 'Membros' },
        { path: 'charts', component: ProjectCharts, name: 'Gráficos' },
        { path: 'expenses', component: ProjectExpenses, name: 'Despesas do Projeto' },
        { path: 'documents', component: ProjectDocuments, name: 'Documentos' },
        { path: 'terminate', component: ProjectTerminate, name: 'Finalizar Projeto' },
      ],
    },
  ],

});

export const menuItens =
  [
    { id: 1, title: 'Projetos', icon: 'tst-project', path: 'projects' },
    { id: 2, title: 'Empresas', icon: 'business', path: 'enterprises' },
    { id: 3, title: 'Membros', icon: 'people', path: 'members' },
    // { id: 4, title: 'Auditoria', icon: ' inbox ', path: 'auditorship' },
    // {
    //   id: 5,
    //   title: 'Contabilidade',
    //   icon: 'monetization_on',
    //   path: 'accounting'
    // },
    {
      id: 6,
      title: 'Despesas',
      icon: 'monetization_on',
      path: 'expenses'
    },
    { id: 6, title: 'Informações', icon: 'info', path: 'info', isProject: true },
   // { id: 7, title: 'Empresas', icon: 'business', path: 'enterprises', isProject: true },
    { id: 8, title: 'Membros', icon: 'people', path: 'members', isProject: true },
    {
      id: 9,
      title: 'Despesas',
      icon: 'monetization_on',
      path: 'expenses',
      isProject: true
    },
    { id: 10, title: 'Documentos', icon: 'folder', path: 'documents', isProject: true },
    { id: 11, title: 'Gráficos', icon: 'insert_chart', path: 'charts', isProject: true },
    //{ id: 12, title: 'Finalizar Projeto', icon: 'cancel', path: 'terminate', isProject: true },
    {
      id: 13,
      title: 'Voltar',
      icon: 'arrow_back_ios',
      path: '/personal/projects',
      action: SET_PERSONAL,
      isProject: true
    },
/*    {
      id: 14,
      title: 'Relatórios',
      icon: 'assignment',
      path: 'reports'
    }*/,
  ];


export const toolbarItens = [
  {
    id: 1,
    description: 'Logout',
    icon: 'power_settings_new',
    action: LOGOUT,
  },
  {
    id: 2,
    description: 'Notificações',
    icon: 'notifications',
    action: 'notifications',
  },
  // {
  //   id: 3,
  //   description: 'Configurações',
  //   icon: 'settings',
  //   action: 'settings',
  // },
];
