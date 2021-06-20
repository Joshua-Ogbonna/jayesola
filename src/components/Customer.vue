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
        <c-button>Add Customer</c-button>
        <c-button>Import</c-button>
      </div>
    </div>
  </div>
</template>

<script>
import { CFormControl, CInput, CButton } from "@chakra-ui/vue";
export default {
  name: "Customers",
  components: {
    CFormControl,
    CInput,
    CButton,
  },
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
    
  }
  .form__search input {
    font-size: 15px;
    padding-left: 40px;
  }
</style>
