<template>
  <div class="client__area">
    <!-- contact information area -->
    <div class="user__info">
      <span class="link">
        <i class="fas fa-arrow-circle-left"></i>
        <router-link to="/dashboard/clients">Contacts</router-link>
      </span>
      <section class="contact__section">
        <div class="name__email">
          <element>
            <h5>{{ data.name | secondChar }}</h5>
          </element>
          <div class="inside__nameEmail">
            <h5>{{ data.name }}</h5>
            <p>{{ data.email }}</p>
          </div>
        </div>
        <div class="links">
          <router-link :to=" '/client/' + id + '/notes' ">
            <i class="fas fa-sticky-note"></i>
          </router-link>
          <router-link :to=" '/client/' + id + '/emails' ">
            <i class="far fa-envelope"></i>
          </router-link>
          <router-link :to=" '/client/' + id + '/calls' ">
            <i class="fas fa-phone-alt"></i>
          </router-link>
          <router-link :to=" '/client/' + id + '/tasks' ">
            <i class="fas fa-tasks"></i>
          </router-link>
        </div>
      </section>

      <!-- Separation line -->
      <hr />

      <!-- About this contact -->
      <section class="about__contact">
        <h5>About this contact</h5>

        <div class="email">
          <p>Email</p>
          <span> {{ data.email }} </span>
        </div>
        <div class="name">
          <p>Name</p>
          <span> {{ data.name }} </span>
        </div>
        <div class="phone">
          <p>Phone</p>
          <span> {{ data.phone }} </span>
        </div>
      </section>

      <hr />
    </div>

    <!-- contact action  -->
    <div class="user__actions">
      <section class="actions__header">
        <router-link :to="'/client/' + id + '/notes'">
          <p>Notes</p>
        </router-link>
        <router-link :to="'/client/' + id + '/emails'">
          <p>Emails</p>
        </router-link>
        <router-link :to="'/client/' + id + '/calls'">
          <p>Calls</p>
        </router-link>
        <router-link :to="'/client/' + id + '/tasks'">
          <p>Tasks</p>
        </router-link>
      </section>
      <router-view></router-view>
    </div>
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
          localStorage.setItem('client', JSON.stringify(response.data.data))
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
  border-right: 1px solid #e8f6ef;
  padding-block: 30px;
  /* padding-inline: 30px; */
}
.client__area .user__info a {
  text-decoration: none;
  color: rgb(40, 49, 92);
  margin-left: 10px;
}
.client__area .user__info a:hover {
  text-decoration: underline;
}
.client__area .user__info .link {
  color: rgb(40, 49, 92);
  padding-inline: 30px;
}

.contact__section {
  margin-top: 20px;

  background: rgb(40, 49, 92);
  color: whitesmoke;
  padding-block: 20px;
  padding-inline: 30px;
}
.name__email {
  display: flex;
  align-items: center;
}
.name__email element h5 {
  background: whitesmoke;
  color: rgb(40, 49, 92);
  border-radius: 99px;
  padding-inline: 25px;
  padding-block: 20px;
}
.inside__nameEmail h5,
.inside__nameEmail p {
  line-height: 10px;
  margin-left: 10px;
}
.inside__nameEmail h5 {
  padding-top: 25px;
  font-size: 25px;
  font-weight: 200;
}
.inside__nameEmail p {
  font-size: 15px;
  font-weight: 100;
  margin-top: 20px;
}
.contact__section .links {
  display: flex;
  align-items: center;
  margin-top: 20px;
  /* justify-content: space-evenly; */
}
.contact__section .links i {
  background: whitesmoke;
  color: rgb(40, 49, 92);
  padding: 5px;
  border-radius: 99px;
  margin-right: 20px;
  font-size: 10px;
  cursor: pointer;
}
.user__info hr {
  margin-top: 50px;
}
.about__contact {
  padding-left: 25px;
}
.about__contact h5 {
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 17px;
  font-weight: 400;
  color: rgb(30, 37, 75);
}
.email p,
.name p,
.phone p {
  line-height: 1px;
  margin-top: 20px;
  font-size: 12px;
}
.email span,
.name span,
.phone span {
  line-height: -10px;
  font-size: 15px;
}
.email,
.name,
.phone {
  margin-top: 40px;
}

/* User actions styles */
.user__actions {
  padding: 25px;
  width: 75%;
}
.user__actions .actions__header {
  display: flex;
  padding: 6px;
  border-bottom: 1px solid rgb(153, 157, 180);
  width: 100%;
  margin-bottom: 20px;
}
.user__actions .actions__header p {
  margin-right: 40px;
}
.user__actions .actions__header a {
  text-decoration: none;
  color: #000;
}
.user__actions .actions__header a:hover {
  text-decoration: underline;
}
</style>
