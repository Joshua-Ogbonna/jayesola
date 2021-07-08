<template>
<b-overlay :show="show" rounded="sm">
  <div class="new_leadContainer" :aria-hidden="show ? 'true' : null">
    <h3>Add New Client</h3>

    <form>
      <div class="row">
        <div class="col-lg-6">
          <label for="First name">Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
            v-model="client.name"
          />
        </div>
        <div class="col-lg-6">
          <label for="Email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Customer Email"
            aria-label="Email"
            v-model="client.email"
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
            v-model="client.phone"
          />
        </div>
        <div class="col-lg-6">
          <label for="Phone">Website</label>
          <input
            type="text"
            class="form-control"
            placeholder="Customer Company"
            aria-label="Company"
            v-model="client.website"
          />
        </div>
      </div>      
      <button class="mt-4" @click.prevent="addClient">
        <span v-if="!loading">Add Client</span> <span v-if="loading">loading...</span>
      </button>
    </form>
  </div>
</b-overlay>
</template>

<script>
export default {
  data() {
    return {
      client: {
        name: '',
        email: '',
        phone: '',
        website: ''
      },
      loading: false,
      show: false
    };
  },
  methods: {
    addClient() {
      this.show = true
      this.$store
        .dispatch('POSTCLIENTS', this.client)
        .then(() => {
          this.show = false;
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
