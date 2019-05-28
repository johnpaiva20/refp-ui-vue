<template>
  <div>
    <div class="divBtn">
       <v-btn class="btnAddEnterprise" v-b-modal.modal-1 absolute dark fab right color="green">
             <v-icon>add</v-icon>
       </v-btn>       
    </div>

    <div class="divTable">
      <v-data-table
      :headers="headers"
      :items="desserts"
      
      class="elevation-1"
    >
     
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>

    </div>


<!-- Inicio modal -->
    <b-modal id="modal-1" size="xl" title="Selecione as empresas que farão parte do projeto">
      <v-card-title>
        Empresas
        <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
          
      </v-card-title>
    <v-data-table
      v-model="selectedModal"
      :headers="headersModal"
      :items="dessertsModal"
      :search="search"
      :pagination.sync="paginationModal"
      select-all
      item-key="codEmpresa"
      class="elevation-1"
    >
      <template v-slot:headers="props">
        <tr>
          <th> 
             <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              color = 'primary'
              hide-details
              @click.stop="toggleAllModal"
            ></v-checkbox>           
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', paginationModal.descending ? 'desc' : 'asc', header.value === paginationModal.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template v-slot:items="props">
        <tr :active="props.selectedModal" @click="props.selectedModal = !props.selectedModal">
          <td>
            <v-checkbox
              :input-value="props.selectedModal"
              color="primary"
              hide-details
            ></v-checkbox>
          </td>
          <td>{{ props.item.codEmpresa }}</td>
          <td class="text-xs-right">{{ props.item.cnpj }}</td>
          <td class="text-xs-right">{{ props.item.razaoSocial }}</td>
          <td class="text-xs-right">{{ props.item.nomeFantasia }}</td>
          <td class="text-xs-right">{{ props.item.sigla }}</td>
          <td class="text-xs-right">{{ props.item.tipoEmpresa }}</td>
        </tr>
      </template>
    </v-data-table>

    </b-modal>
    

  </div>
</template>

<style>
.divTable{
  margin-top: 30px;
  
}
.btnAddEnterprise{
  margin-top: 0px;
}
.divBtn{
  margin-top: 5px;
  margin-bottom: 35px;
}


</style>



<script>
export default {
  data() {
    return { 
      pagination: {
      sortBy: 'name'
    },
    selected: [],
    headers: [
      {
        text: 'Código da Empresa',
        value: 'codEmpresa'
      },
      { text: 'CNPJ', value: 'cnpj' },
      { text: 'Razão Social', value: 'razaoSocial' },
      { text: 'Nome Fantasia', value: 'nomeFantasia' },
      { text: 'Sigla', value: 'sigla'},
      { text: 'Tipo Empresa', value: 'tipoEmpresa'}
    ],
    desserts: [
      {
        codEmpresa: '',
        cnpj: '',
        razaoSocial: '',
        nomeFantasia: '',
        sigla: '',
        tipoEmpresa: ''
      },
      
    ],
    methods: {
    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort (column){      
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  },   

  // modal 
      paginationModal: {
      sortBy: 'codEmpresa'
    },
    selectedModal: [],
    search: '',
    headersModal: [
      {
        text: 'Código da Empresa',
        value: 'codEmpresa'
      },
      { text: 'CNPJ', value: 'cnpj' },
      { text: 'Razão Social', value: 'razaoSocial' },
      { text: 'Nome Fantasia', value: 'nomeFantasia' },
      { text: 'Sigla', value: 'sigla'},
      { text: 'Tipo Empresa', value: 'tipoEmpresa'}
    ],
    dessertsModal: [
      {
        codEmpresa: 1,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 1',
        sigla: 4.0,
        tipoEmpresa: '1%'
      },
      {
        codEmpresa: 2,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 2',
        sigla: 4.0,
        tipoEmpresa: '2%'
      },
      {
        codEmpresa: 3,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 3',
        sigla: 4.0,
        tipoEmpresa: '3%'
      },
     {
        codEmpresa: 4,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 4',
        sigla: 4.0,
        tipoEmpresa: '4%'
      },
      {
        codEmpresa: 5,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 5',
        sigla: 4.0,
        tipoEmpresa: '5%'
      },
     {
        codEmpresa: 6,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 6',
        sigla: 4.0,
        tipoEmpresa: '6%'
      },
      {
        codEmpresa: 7,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 7',
        sigla: 4.0,
        tipoEmpresa: '7%'
      },
      {
        codEmpresa: 8,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 8',
        sigla: 4.0,
        tipoEmpresa: '8%'
      },
      {
        codEmpresa: 9,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 9',
        sigla: 4.0,
        tipoEmpresa: '9%'
      },
      {
        codEmpresa: 10,
        cnpj: 159,
        razaoSocial: 6.0,
        nomeFantasia: 'Empresa 10',
        sigla: 4.0,
        tipoEmpresa: '10%'
      },
    ],
    methodsModal: {
    toggleAllModal () {
      if (this.selectedModal.length) this.selectedModal = []
      else this.selectedModal = this.dessertsModal.slice()
    },
    changeSort (columnModal){      
      if (this.paginationModal.sortBy === columnModal) {
        this.paginationModal.descending = !this.paginationModal.descending
      } else {
        this.paginationModal.sortBy = columnModal
        this.paginationModal.descending = false
      }
    }
  }   
  }  
 }
};
</script>