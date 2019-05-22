<template>
  <v-app>
    <div>
    <b-btn class="btnAddEnterprise" variant="success"> + </b-btn>
    </div>
    <div>
        <b-table striped hover :items="items"></b-table>
    </div>

  </v-app>
</template>

<style>
.btnAddEnterprise{
    width: 40px;
    height: 40px;
    padding: 0px 0px;
    border-radius: 35px;
    text-align: center;
    font-size: 26px;
    line-height: 1.42857;
}

</style>



<script>
export default {
  data() {
    return { 
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]

    };
  }
};
</script>