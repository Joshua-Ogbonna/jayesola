<template>
  <div class="new_leadContainer">
    <h3>Add New Lead</h3>

    <form>
      <div class="row">
        <div class="col-lg-6">
          <label for="First name">Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            v-model="customer.name"
          />
        </div>
        <div class="col-lg-6">
          <label for="Email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Customer Email"
            aria-label="Email"
            v-model="customer.email"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-6">
          <label for="Phone">Phone</label>
          <input
            type="text"
            class="form-control"
            placeholder="Customer Phone"
            aria-label="Phone"
            v-model="customer.phone"
          />
        </div>
        <div class="col-lg-6">
          <label for="Phone">Company</label>
          <input
            type="text"
            class="form-control"
            placeholder="Customer Company"
            aria-label="Company"
            v-model="customer.company"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-lg-6">
          <label for="Confidence">Confidence</label>
          <select
            class="form-select"
            aria-label="Confidence"
            v-model="customer.confidence"
          >
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="col-lg-6">
          <label for="Estimated Value">Estimated Value</label>
          <select
            class="form-select"
            aria-label="Estimated Value"
            v-model="customer.estimatedValue"
          >
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-lg-6">
          <label for="Status">Status</label>
          <select
            class="form-select"
            aria-label="Status"
            v-model="customer.status"
          >
            <option selected value="new">New</option>
            <option value="contact">Contacted</option>
            <option value="inprogress">In Progress</option>
            <option value="lost">Lost</option>
            <option value="won">Won</option>
          </select>
        </div>
        <div class="col-lg-6">
          <label for="Priority">Priority</label>
          <select
            class="form-select"
            aria-label="Priority"
            v-model="customer.priority"
          >
            <option selected value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <button class="mt-4" @click.prevent="addCustomer">
        <span v-if="!loading">Add Customer</span> <span v-if="loading">loading...</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer: {
        name: '',
        email: '',
        phone: '',
        company: '',
        confidence: 0,
        estimatedValue: 0,
        status: '',
        priority: ''
      },
      loading: false
    };
  },
  methods: {
    addCustomer() {
      this.loading = true;
      this.$store
        .dispatch('POSTLEAD', this.customer)
        .then(() => {
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.new_leadContainer {
  padding-top: 100px;
  padding-inline: 100px;
}
form {
  margin-top: 20px;
}
form input {
  margin-top: 10px;
}
input,
select {
  padding: 13px 10px;
  border: solid 1px rgb(236, 236, 236);
  margin-bottom: 10px;
}
form button {
  border: none;
  background: #1da1f2;
  padding: 10px 30px;
  color: #fff;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: rgb(236, 236, 236);
  outline: 0;
  box-shadow: none;
}
.form-select:focus {
  border-color: rgb(236, 236, 236);
  outline: 0;
  box-shadow: none;
}
</style>
