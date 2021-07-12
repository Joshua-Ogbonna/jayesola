<template>
  <div>
    <form>
      <h3>New Sale</h3>
      <!-- Form group -->
      <div class="form-group mt-4">
        <div class="row">
          <div class="col-lg-6">
            <label for="name" class="form-label">Deal Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              v-model="sale.name"
            />
          </div>
          <div class="col-lg-6">
            <label for="stage" class="form-label">Deal Stage</label>
            <select name="stage" class="form-select" v-model="sale.stage">
              <option value="Appointment Scheduled">
                Appointment Scheduled
              </option>
              <option value="Qualified to Buy">Qualified to buy</option>
              <option value="Presentation Scheduled">
                Presentation Scheduled
              </option>
              <option value="Contract Sent">Contract Sent</option>
              <option value="Closed Won">Closed Won</option>
              <option value="Closed Lost">Closed Lost</option>
            </select>
          </div>
        </div>
      </div>
      <!-- Form group -->
      <div class="form-group mt-4">
        <div class="row">
          <div class="col-lg-6">
            <label for="amount" class="form-label">Amount</label>
            <input
              type="text"
              name="amount"
              class="form-control"
              v-model="sale.amount"
            />
          </div>
          <div class="col-lg-6">
            <label for="owner" class="form-label">Deal Owner</label>
            <select name="owner" class="form-select" v-model="sale.owner">
              <option
                v-for="lead in this.$store.getters.leads"
                :key="lead._id"
                :value="lead"
              >
                {{ lead.name }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Form group -->
      <div class="form-group mt-4">
        <div class="row">
          <div class="col-lg-6">
            <label for="priority" class="form-label">Priority</label>
            <select name="priority" class="form-select" v-model="sale.priority">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div class="col-lg-6">
            <label for="type" class="form-label">Deal Type</label>
            <select name="type" class="form-select" v-model="sale.category">
              <option value="New Business">New Business</option>
              <option value="Existing Business">Existing Business</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Form group -->
      <div class="form-group mt-4">
        <div class="row">
          <div class="col-lg-6">
            <label for="productAssociate" class="form-label"
              >Product Associate</label
            >
            <select
              name="productAssociate"
              class="form-select"
              v-model="sale.productAssociate"
            >
              <option
                v-for="product in this.$store.getters.products"
                :key="product._id"
                :value="product"
              >
                {{ product.title }}
              </option>
            </select>
          </div>
          <div class="col-lg-6">
            <label for="quantity" class="form-label">Quantity</label>
            <input
              type="text"
              name="quantity"
              class="form-control"
              v-model="sale.quantity"
            />
          </div>
        </div>
      </div>
      <!-- Form group -->
      <div class="form-group mt-4">
        <div class="row">
          <div class="col-lg-6">
            <label for="contactAssociate" class="form-label"
              >Contact Associate</label
            >

            <select
              name="contactAssociate"
              class="form-select"
              v-model="sale.contactAssociate"
            >
              <option
                v-for="contact in this.$store.getters.clients"
                :key="contact._id"
                :value="contact"
              >
                {{ contact.name }}
              </option>
            </select>
          </div>
          <div class="col-lg-6">
            <label for="closedDate" class="form-label">Closed Date</label>
            <input
              type="date"
              name="closedDate"
              class="form-control"
              v-model="sale.closedDate"
            />
          </div>
        </div>
      </div>
      <button class="mt-4" @click.prevent="addSale">Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sale: {
        name: '',
        stage: '',
        amount: '',
        owner: {},
        priority: '',
        category: '',
        productAssociate: {},
        quantity: '',
        contactAssociate: {},
        closedDate: '',
      },
    };
  },
  methods: {
    async addSale() {
      await this.$store
        .dispatch('postSale', this.sale)
        .then(() => {
          this.$router.push('/dashboard/sales');
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }
};
</script>

<style scoped>
h3 {
  font-size: 20px;
  font-weight: 800;
}
form {
  margin-top: 10px;
}
form input,
form select {
  padding: 15px 10px;
  color: gray;
}
.form-control:focus,
.form-select:focus {
  color: #212529;
  background-color: #fff;
  border-color: rgb(196, 196, 196);
  outline: 0;
  box-shadow: none;
  color: gray;
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
form label {
  font-size: 15px;
  color: gray;
}
</style>
