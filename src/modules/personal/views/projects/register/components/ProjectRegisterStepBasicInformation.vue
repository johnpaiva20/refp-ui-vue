<template>
  <v-app>
    <div >
      <v-container fluid>
        <b-form-group id="fieldset-1" label="Código da ANEEL" label-for="input-1">
          <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
        </b-form-group>
      </v-container>
    </div>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>