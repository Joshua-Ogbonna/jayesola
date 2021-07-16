<template>
  <div class="dashboard">
    <div class="sidebar">
      <router-link to="/"><i class="fas fa-link brand"></i></router-link>
      <!-- User Information -->
      <div class="card">
        <div class="card-body">
          <!-- <h4>{{ user.name | initials }}</h4> -->
          <div class="user__info">
            <h5>{{ user.name }}</h5>
            <p>{{ user.email }}</p>
          </div>
        </div>
      </div>
      <!-- Manage Section -->
      <div class="manage">
        <h5>Manage</h5>

        <router-link to="/dashboard/">
          <div>
            <span><i class="fas fa-user-friends"></i></span>
            <p> Leads </p>
          </div>
        </router-link>

        <router-link to="/dashboard/clients">
          <div>
            <span><i class="fas fa-stream"></i></span>
            <p>Contacts</p>
          </div>
        </router-link>

        <router-link to="/dashboard/sales">
          <div>
            <span><i class="fas fa-chart-line"></i></span>
            <p>Sales</p>
          </div>
        </router-link>

        <router-link to="/dashboard/analytics">
          <div>
            <span><i class="fas fa-chart-bar"></i></span>
            <p>Analytics</p>
          </div>
        </router-link>

        <router-link to="/dashboard/profile">
          <div>
            <span><i class="fas fa-thumbs-up"></i></span>
            <p>Profile</p>
          </div>
        </router-link>
      </div>

      <!-- Integrations -->
      <!-- <div class="integrations">
        <h5>Integrations</h5>
        <div>
          <span><i class="fab fa-google"></i></span>
          <p>Gmail</p>
        </div>

        <div>
          <span><i class="fab fa-twitter"></i></span>
          <p>Twitter</p>
        </div>

        <div>
          <span><i class="fab fa-facebook-square"></i></span>
          <p>Facebook Ads</p>
        </div>

        <div>
          <span><i class="fab fa-instagram"></i></span>
          <p>Instagram</p>
        </div>

        <div>
          <span><i class="fab fa-yahoo"></i></span>
          <p>Yahoo Mail</p>
        </div>
      </div> -->

      <hr />
      <!-- Sign Out Action -->
      <div class="signout__div" @click="logout">
        <span><i class="fas fa-sign-out-alt"></i></span>
        <p class="sign__out">Sign Out</p>
      </div>
    </div>
    <div class="main__bar">
      <!-- Main section routes -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  methods: {
    logout() {
      this.$store.dispatch('SIGNOUT');
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    }
  },

  // Created lifecycle
  created() {
    this.$store.dispatch('GETPROFILE');
  },

};
</script>

<style scoped>
.dashboard {
  display: flex;
  /* align-items: center; */
  height: 100%;
}
.sidebar {
  background: #f4f9f9;
  width: 20%;
  height: 100vh;
  padding-top: 10px;
}
.sidebar .brand {
  margin-bottom: 10px;
  font-size: 20px;
  margin-left: 20px;
  color: rgb(40, 49, 92);
}
.sidebar .card {
  margin-inline: 20px;
  border: none;
  background-color: #e7e7de;
}
.sidebar .card .card-body {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.sidebar .card .card-body h4 {
  font-size: 16px;
  background-color: #ff577f;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  margin-right: 10px;
}
.sidebar .card .card-body .user__info h5 {
  /* line-height: 10px; */
  margin-top: 10px;
  font-size: 15px;
  color: #000;
  font-weight: 800;
}
.sidebar .card .card-body .user__info p {
  font-size: 12px;
  line-height: 10px;
  color: grey;
}
.manage {
  margin-top: 70px;
}
.integrations {
  margin-top: 30px;
}
.manage h5,
.integrations h5 {
  font-size: 15px;
  margin-bottom: 10px;
  color: rgb(133, 130, 130);
  font-weight: 800;
  padding-left: 20px;
}
.manage div {
  display: flex;
  /* align-items: center; */
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: -5px;
  line-height: 20px;
}
.manage p {
  margin-top: 1px;
}
.manage span,
.integrations span {
  margin-right: 15px;
  font-size: 18px;
}
.manage p,
.manage span,
.integrations p,
.integrations span {
  font-size: 15px;
  font-weight: 600;
  color: rgb(40, 49, 92);
  cursor: pointer;
  /* margin-left: 10px; */
}
.manage div:hover,
.integrations div:hover {
  background: #e7e7de;
  border-radius: 2px;
  cursor: pointer;
}
hr {
  margin-top: 100px;
  margin-bottom: 30px;
}
.sidebar .signout__div {
  padding-left: 20px;
  display: flex;
  font-size: 15px;
  cursor: pointer;
  /* padding-top: 30px; */
}
.sidebar .signout__div span {
  margin-right: 10px;
}
.sidebar .fa-google {
  color: #db4437;
}
.sidebar .fa-facebook.square {
  color: #4267b2;
}
.sidebar .fa-twitter {
  color: #1da1f2;
}
.sidebar .fa-instagram {
  color: #fd1d1d;
}
.sidebar a {
  text-decoration: none;
}
/* Sidebar main styles */

/* End of sidebar main styles */
.main__bar {
  width: 80%;
  height: 100%;
  padding: 10px 30px;
}
</style>
