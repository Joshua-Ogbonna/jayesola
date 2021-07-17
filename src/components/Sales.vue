<template>
  <b-overlay :show="show" rounded="sm">
    <div class="sales" :aria-hidden="show ? 'true' : null">
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
            <td><input type="checkbox" name="check" /></td>
            <td>{{ sale.name }}</td>
            <td>{{ sale.amount }}</td>
            <td>{{ sale.owner.name }}</td>
            <td>{{ sale.category }}</td>
            <td>{{ sale.productAssociate.title }}</td>
            <td>
              <router-link to="/">
                <i class="fas fa-info-circle"></i>
              </router-link>
              <i class="far fa-trash-alt delete" @click="removeSale(sale._id)"></i>
            </td>
          </tr>
        </tbody>
      </table>
      
      
      <!-- Email campaigns -->

      <div class="email__campaigns">
        <div class="email__actions">
          <h3>Email Campaigns</h3>

          <router-link to="/dashboard/campaigns">
            <button>Create Campaign</button>
          </router-link>
        </div>

        <!-- Emails -->
        
        
          <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Message</th>
              <th>Date Created</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="message in messages" :key="message.id">
              <td><input type="checkbox" name="check" /></td>
              <td> {{ message.message }} </td>
              <td> {{ message.dateCreated }} </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>


  </b-overlay>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      messages: []
    };
  },
  mounted() {
    this.$store.dispatch('GETSALES');
    let messages = localStorage.getItem('emails')
    messages = messages ? JSON.parse(messages) : []
    this.messages = messages.reverse()
  },
  methods: {
    removeSale(id) {
      this.show = true
      this.$store.dispatch('DELETESALE', id).then(() => {
        this.show = false
        this.$store.dispatch('GETSALES')
      }).catch(() => {
        this.show = true
      })
    },
  },
};
</script>

<style scoped>
.sales {
  margin-top: 30px;
}
h3 {
  font-weight: 800;
}
.sales__actions,
.email__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
button {
  border: none;
  font-size: 13px;
  padding: 10px 30px;
  background-color: rgb(40, 49, 92);
  color: #fff;
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
.delete {
  cursor: pointer;
}
.email__actions {
  margin-top: 150px;
}
</style>
