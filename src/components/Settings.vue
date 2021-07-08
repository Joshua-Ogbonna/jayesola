<template>
  <div class="profile">
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
                  <input type="text" name="leads" class="form-control" v-model="leads.length">
              </div>
              <div class="col-lg-6">
                  <label for="clients" class="form-label mb-3">Your Clients</label>
                  <input type="text" name="clients" class="form-control" v-model="clients.length">
              </div>
          </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      leads: '',
      clients: '',
    };
  },
  mounted() {
    const vuex = JSON.parse(localStorage.getItem('vuex'));
    this.user = vuex.user;
    this.leads = vuex.leads;
    this.clients = vuex.clients;
  },
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
</style>
