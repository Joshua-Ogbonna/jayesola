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
        <div class="products__actions">

          <h3>Your Products</h3>
          <router-link to="/dashboard/profile/new-product">
            <b-button id="show-btn">Create product</b-button>
          </router-link>
        </div>

        <div class="mt-3">
          <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Categories</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in this.$store.getters.products" :key="product._id">
          <td><input type="checkbox" name="check"></td>
          <td> {{ product.category }} </td>
          <td> {{ product.title }} </td>
          <td> {{ product.description }} </td>
          
          <td>
            <router-link to="/">
              <i class="fas fa-info-circle"></i>
            </router-link>
            <i class="far fa-trash-alt delete" @click="removeProduct(product._id)"></i>
          </td>
        </tr>
      </tbody>
    </table>
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
  },
  methods: {
    removeProduct (id) {
      this.show = true
      this.$store.dispatch('DELETEPRODUCT', id).then(() => {
        this.$store.dispatch('GETPRODUCTS')
        this.show = false
      }).catch(() => {
        this.show = true
      })
    }
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
tbody {
  font-size: 15px;
  color: grey;
  line-height: 40px;
}
tbody a {
  text-decoration: none;
  color: #808080;
  font-size: 13px;
  margin-right: 20px;
}
tbody a:hover {
  text-decoration: underline;
}
.products__actions {
  display: flex;
  justify-content: space-between;
}
.delete {
  cursor: pointer;
}
</style>
