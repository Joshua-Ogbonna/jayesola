<template>
  <div>
    <!-- Search head button and head functionalities -->

    <div class="form__search">
      <h1></h1>
      <div class="icons">
        <i class="fas fa-question-circle"></i>
        <router-link to="/dashboard/notifications">
        
        <i class="fas fa-bell"></i>
        </router-link>
      </div>
    </div>

    <!-- Customer section actions -->
    <div class="actions__center">
      <h3>Leads</h3>
      <div class="action__buttons">
        <router-link to="/dashboard/newlead">
        <c-button class="customer">Add Lead</c-button>
        </router-link>
        <!-- <c-button class="import">Import</c-button> -->
      </div>
    </div>

    <BlueLoader v-if="this.$store.state.isLoading" />

    <!-- Lead Tables -->
    <Tables :leads="leads" />
    <!-- Lead Tables -->
    
    <!-- If leads.length < 0 -->
    <div v-if="leads.length === 0">
      <h4 class="text-center">You do not have any leads yet</h4>
    </div>
  </div>
</template>

<script>
import { CButton } from '@chakra-ui/vue';
import Tables from '@/components/Tables'
import BlueLoader from '@/components/BlueLoader';
export default {
  name: 'Customers',
  components: {
    CButton,
    BlueLoader,
    Tables
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
.form__search a {
  color: #000;
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



</style>
