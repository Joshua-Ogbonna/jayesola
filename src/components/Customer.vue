<template>
  <div>
    <!-- Search head button and head functionalities -->

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
      <h3>Customers</h3>
      <div class="action__buttons">
        <router-link to="/dashboard/newlead">
        <c-button class="customer">Add Customer</c-button>
        </router-link>
        <!-- <c-button class="import">Import</c-button> -->
      </div>
    </div>

    <BlueLoader v-if="this.$store.state.isLoading" />

    <!-- Customer tables -->
    <div
      class="table-responsive customer__table"
      v-if="!this.$store.state.isLoading && leads.length > 0"
    >
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" name="" id="" /></th>
            <th scope="col">Contact Person</th>
            <th scope="col">Company</th>
            <th scope="col">Status</th>
            <th scope="col">Priority</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody v-for="lead in leads" :key="lead._id">
          <tr>
            <td><input type="checkbox" name="" id="" /></td>
            <td>
              {{ lead.name }} <span class="lead_email"> {{ lead.email }} </span>
            </td>
            <td>{{ lead.company }}</td>
            <td>{{ lead.status }}</td>
            <td>{{ lead.priority }}</td>
            <td class="actions"><span class="edit_button">edit</span> <span class="delete_button">delete</span></td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- If leads.length < 0 -->
    <div v-if="leads.length < 0">
      <h4 class="text-center">You do not have any leads yet</h4>
    </div>
  </div>
</template>

<script>
import { CFormControl, CInput, CButton } from '@chakra-ui/vue';
import BlueLoader from '@/components/BlueLoader';
export default {
  name: 'Customers',
  components: {
    CFormControl,
    CInput,
    CButton,
    BlueLoader
  },

  created() {
    this.$store.dispatch('GETLEAD');
  },
  computed: {
    leads() {
      return this.$store.getters.leads;
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
  background: #1da1f2;
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
  line-height: 30px;
}
tbody .lead_email {
  font-size: 13px;
  margin-left: 15px;
  color: rgb(182, 181, 181);
}
tbody .actions span {
  cursor: pointer;
  border-radius: 20px;
  padding: 2px 10px;
  color: white;
  font-size: 10px;
}
tbody .actions .edit_button {
  background: #ff577f;
  margin-right: 10px;
  font-size: 10px;
}
tbody .actions .delete_button {
  background:#1da1f2;

}
</style>
