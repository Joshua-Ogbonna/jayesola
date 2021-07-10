<template>
  <b-overlay :show="show" rounded="sm">
    <div class="profile" :aria-hidden="show ? 'true' : null">
      <h3>Profile</h3>
      <form>
        <div class="form-group mb-4">
          <div class="row">
            <div class="col-lg-6">
              <input
                type="text"
                name="name"
                id=""
                class="form-control"
                v-model="user.name"
              />
            </div>
            <div class="col-lg-6">
              <input
                type="email"
                name="email"
                id=""
                class="form-control"
                v-model="user.email"
              />
            </div>
          </div>
        </div>
        <div class="form-group mb-4">
          <div class="row">
            <div class="col-lg-6">
              <label for="leads" class="form-label mb-3">Your Leads</label>
              <input
                type="text"
                name="leads"
                class="form-control"
                v-model="leads.length"
              />
            </div>
            <div class="col-lg-6">
              <label for="clients" class="form-label mb-3">Your Clients</label>
              <input
                type="text"
                name="clients"
                class="form-control"
                v-model="clients.length"
              />
            </div>
          </div>
        </div>
      </form>

      <!-- Product section -->
      <div class="products mt-5">
        <h3>Your Products</h3>
        <router-link to="/dashboard/profile/new-product">
          <b-button id="show-btn">Create product</b-button>
        </router-link>

        <div class="mt-3">
          <b-table hover :items="this.$store.getters.products" :fields="fields"></b-table>
        </div>
      </div>

    </div>
  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      leads: '',
      clients: '',
      products: [],
      fields: ['category', 'title', 'description'],
      show: false,
    };
  },
  mounted() {
    const vuex = JSON.parse(localStorage.getItem('vuex'));
    this.$store.dispatch('GETPRODUCTS');
    this.user = vuex.user;
    this.leads = vuex.leads;
    this.clients = vuex.clients;
    this.products = vuex.user.products;
  }
};
</script>

<style scoped>
h3 {
  font-size: 20px;
}
.profile {
  padding-block: 50px;
}
form {
  margin-top: 20px;
}
.profile form input {
  padding: 20px 10px;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: rgb(196, 196, 196);
  outline: 0;
  box-shadow: none;
}
button {
  background-color: rgb(40, 49, 92);
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 15px;
}
button:hover,
button:focus {
  background-color: rgb(40, 49, 92) !important;
  outline: none;
}
</style>
