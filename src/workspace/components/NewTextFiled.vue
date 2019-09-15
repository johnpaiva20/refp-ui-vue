<template>
  <div id="input-usage">
    <label v-if="label" class="input-label">{{label}}</label>
    <v-input ref="input">
      <input class="input" :type="type" @focus="onFocus" />
    </v-input>
  </div>
</template>

<style >
#input-usage .v-input__slot {
  border: 2px solid #707070;
  border-radius: 5px;
}

.input {
  width: 100%;
  height: 100%;
  margin-top: 1px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #ffffff;
}

.input-label {
  margin-bottom: 0px;
  position: relative;
}
</style>

<script >
import { VInput } from 'vuetify/lib';
export default {
  name: 't-text-field',
  props: {
    label: String,
    type: String,
    color: {
      type: String,
      default: 'primary',
    },
    input: String,
  },
  methods: {
    onFocus() {},
  },
};
</script>

