<template>
  <div>
    <v-form>
      <v-container style="padding:5px;margin:0px;">
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field
              v-for="category in accountingCategories"
              v-bind:key="category.id"
              v-model="category.value"
              :label="category.description"
              prefix="R$"
              value="10000"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <!--         
        <b-form-group
          v-for="category in accountingCategories "
          v-bind:key="category.id"
          :label="`${category.description}`"
        >
          <b-form-input type="number"></b-form-input>
        </b-form-group>-->
        <div>
          <div class="mt-2">
            <h4>O Valor Total Consolidado é de R$ {{ total }}</h4>
          </div>
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const AccountCategoriesRepository = RepositoryFactory.get('accountCategories');
export default {
  props: ['project'],
  created() {
    this.fetch();
  },
  watch: {
    type: {
      handler: function() {
        this.fetch();
      },
      deep: true,
    },
    accountingCategories: {
      handler: function() {
        this.calculateAccountsValue();
      },
      deep: true,
    },
  },
  data() {
    return {
      total: 0,
      accountingCategories: [],
      currencyMask: '###.###.###.###,##',
    };
  },
  methods: {
    fetch() {
      AccountCategoriesRepository.listAccountCategories(this.type).then(
        (response) => (this.accountingCategories = response.data)
      );
    },
    calculateAccountsValue() {
      let sum = 0;
      this.accountingCategories.forEach((e) => {
        if (e.value) {
          sum += parseFloat(e.value);
        }
        this.total = sum;
      });

      this.$emit('update-account-categories', this.accountingCategories);
    },
  },
  components: {},
};
</script>

