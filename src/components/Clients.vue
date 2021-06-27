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
        <router-link to="/dashboard/newlead">
        <c-button class="customer">Add Client</c-button>
        </router-link>
        <!-- <c-button class="import">Import</c-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { CFormControl, CInput, CButton } from '@chakra-ui/vue';

  export default {
    components: {
CFormControl,
    CInput,
    CButton,

    }
  }
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
</style>
