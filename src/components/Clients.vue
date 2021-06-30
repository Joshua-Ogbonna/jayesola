<template>
  <div>
    <div class="form__search">
      <c-form-control>
        <i class="fas fa-search search"></i>
        <c-input
          type="search"
          id="search"
          aria-describedby="search-helper-text"
          placeholder="Search for something"
          size="lg"
          width="550px"
        ></c-input>
      </c-form-control>
      <div class="icons">
        <i class="fas fa-question-circle"></i>
        <i class="fas fa-bell"></i>
      </div>
    </div>

    <!-- Customer section actions -->
    <div class="actions__center">
      <h3>Clients</h3>
      <div class="action__buttons">
        <router-link to="/dashboard/clients/new-client">
          <c-button class="customer">Add Client</c-button>
        </router-link>
        <!-- <c-button class="import">Import</c-button> -->
      </div>
    </div>

    <BlueLoader v-if="this.$store.state.isLoading" />

    <!-- Tables view -->
    <div
      class="table-responsive customer__table mt-4"
      v-if="!this.$store.state.isLoading && clients.length > 0"
    >
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" name="" id="" /></th>
            <th scope="col">Client Name</th>
            <th scope="col">Client Email</th>
            <th scope="col">Client Phone</th>
            <th scope="col">Client Website</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody v-for="client in clients" :key="client._id">
          <tr>
            <td><input type="checkbox" name="" id="" /></td>
            <td>
              {{ client.name }}
            </td>
            <td>{{ client.email }}</td>
            <td>{{ client.phone }}</td>
            <td>{{ client.website }}</td>
            <td class="actions">
              <router-link :to=" '/client/' + client._id ">
                <span class="edit_button">details</span>
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- If clients.length < 0 -->
    <div v-if="clients.length === 0">
      <h4 class="text-center">You do not have any client yet</h4>
    </div>
  </div>
</template>

<script>
import { CFormControl, CInput, CButton } from '@chakra-ui/vue';
import BlueLoader from '@/components/BlueLoader'

export default {
  components: {
    CFormControl,
    CInput,
    CButton,
    BlueLoader
  },
  created() {
    this.$store.dispatch('GETCLIENTS')
  },
  computed: {
    clients() {
      return this.$store.getters.clients
    }
  }
};
</script>

<style scoped>
/* form__search styles */
.form__search {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form__search .search {
  position: absolute;
  top: 30px;
  /* right: 20px; */
  left: 340px;
  z-index: 1;
  color: grey;
  font-size: 15px;
}
.form__search .icons i {
  font-size: 20px;
  margin-left: 40px;
  cursor: pointer;
}
.form__search input {
  font-size: 15px;
  padding-left: 40px;
}
.form__search input:focus {
  z-index: 0;
}
/* Actions center */
.actions__center {
  display: flex;
  align-items: center;
  margin-top: 50px;
  justify-content: space-between;
}
.actions__center h3 {
  font-size: 30px;
  font-weight: 800;
}
.actions__center .action__buttons .customer {
  margin-right: 20px;
  border: none;
  background: rgb(40, 49, 92);
  color: #fff;
}
.actions__center .action__buttons .import {
  border: 0.04px solid rgb(211, 210, 210);
  background-color: #fff;
}
.actions__center a {
  text-decoration: none;
}
/* Tables custom styles */
.customer__table {
  margin-top: 30px;
}
.customer__table table {
  padding: 0 40px;
}
.customer__table table tr {
  border-bottom: #fff solid 1px;
}
.customer__table table thead {
  border-bottom: #fff solid 1px;
  background-color: #f4f9f9;
  color: rgb(179, 183, 184);
  font-size: 17px;
  font-weight: 100;
}
.table > :not(caption) > * > * {
  padding: 0.5rem 0.5rem;
  background-color: var(--bs-table-bg);
  border-bottom-width: 0;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}
tbody {
  color: grey;
  font-size: 15px;
  font-weight: 600;
}
tbody tr {
  line-height: 40px;
}
tbody .lead_email {
  font-size: 13px;
  margin-left: 15px;
  color: rgb(182, 181, 181);
}
tbody .actions span {
  cursor: pointer;
  border-radius: 4px;
  padding: 4px 10px;
  color: white;
  font-size: 10px;
}
tbody .actions .edit_button {
  background: #ff577f;
  margin-right: 10px;
  font-size: 10px;
}
table a {
  text-decoration: none;
}
</style>
