<template>
  <div>
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
            <td class="actions"><span class="edit_button">details</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    props: ['leads']
};
</script>

<style scoped>
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
  padding: 2px 10px;
  color: white;
  font-size: 10px;
}
tbody .actions .edit_button {
  background: #1da1f2;
  margin-right: 10px;
  font-size: 10px;
}
</style>
