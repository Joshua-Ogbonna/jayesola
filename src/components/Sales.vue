<template>
  <div class="sales">
    <div class="sales__actions">
      <h3>Deals</h3>
      <router-link to="/dashboard/sales/new-sale">
        <button>Create deals</button>
      </router-link>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Owner</th>
          <th scope="col">Category</th>
          <th scope="col">Product Associate</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sale in this.$store.getters.sales" :key="sale._id">
          <td><input type="checkbox" name="check"></td>
          <td> {{ sale.name }} </td>
          <td> {{ sale.amount }} </td>
          <td> {{ sale.owner.name }} </td>
          <td> {{ sale.category }} </td>
          <td> {{ sale.productAssociate.title }} </td>
          <td> details </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  mounted () {
      this.$store.dispatch('GETSALES')
  }
};
</script>

<style scoped>
.sales {
  margin-top: 30px;
}
h3 {
  font-weight: 800;
}
.sales__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.sales__actions button {
  border: none;
  font-size: 13px;
  padding: 10px 30px;
  background-color: rgb(40, 49, 92);
  color: #fff;
}
tbody {
  font-size: 15px;
  color: grey;
}
</style>
