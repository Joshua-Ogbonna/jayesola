<template>
  <div class="client__area">
    <!-- contact information area -->
    <div class="user__info">
      <span class="link">
          <i class="fas fa-arrow-circle-left"></i>
        <router-link to="/dashboard/clients">Contacts</router-link>
      </span>
      <section class="name__email">
        <h5>{{ data.name | secondChar }}</h5>
        <div>
          <h5>{{ data.name }}</h5>
          <p>{{ data.email }}</p>
        </div>
      </section>
    </div>

    <!-- contact action  -->
    <div class="user__actions"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      data: {}
    };
  },
  methods: {
    async getClient() {
      await axios
        .get('https://frozen-refuge-45677.herokuapp.com/api/client/' + this.id)
        .then(response => {
          this.data = response.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getClient();
  }
};
</script>

<style scoped>
.client__area {
  display: flex;
}
.client__area .user__info {
  width: 25%;
  height: 100vh;
  border-right: 1px solid #E8F6EF;
  padding-block: 30px;
  padding-inline: 30px;
}
.client__area .user__info a {
    text-decoration: none;
    color: whitesmoke;
    margin-left: 10px;
}
.client__area .user__info a:hover {
    text-decoration: underline;
}
.client__area .user__info .link {
    color: whitesmoke;

}
</style>
