<template>
  <div class="dashboard">
    <div class="sidebar">
      <router-link to="/"><i class="fas fa-link brand"></i></router-link>
      <!-- User Information -->
      <div class="card">
        <div class="card-body">
          <h4>AJ</h4>
          <div class="user__info">
            <h5>Adekoya Jadeola</h5>
            <p>adekoya*****@cu.edu</p>
          </div>
        </div>
      </div>
      <!-- Manage Section -->
      <div class="manage">
        <h5>Manage</h5>
        <div>
          <span><i class="fas fa-landmark"></i></span>
          <p>Dashboard</p>
        </div>
        <div>
          <span><i class="fas fa-user-friends"></i></span>
          <p>Customers</p>
        </div>
        <div>
          <span><i class="fas fa-stream"></i></span>
          <p>Pipeline</p>
        </div>

        <div>
          <span><i class="fas fa-chart-line"></i></span>
          <p>Reporting</p>
        </div>

        <div>
          <span><i class="fas fa-thumbs-up"></i></span>
          <p>Reviews</p>
        </div>

        <div>
          <span><i class="fas fa-exchange-alt"></i></span>
          <p>Automations</p>
        </div>
      </div>

      <!-- Integrations -->
      <div class="integrations">
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
      </div>

      <hr />
      <!-- Sign Out Action -->
      <div class="signout__div">
        <span><i class="fas fa-sign-out-alt"></i></span>
      <p class="sign__out"> Sign Out</p>
      </div>
    </div>
    <div class="main__bar"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dashboard {
  display: flex;
  align-items: center;
  height: 100%;
}
.sidebar {
  background: #f4f9f9;
  width: 20%;
  height: 100%;
  padding-top: 10px;
}
.sidebar .brand {
  margin-bottom: 10px;
  font-size: 20px;
  margin-left: 20px;
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
  font-size: 20px;
  background-color: #ff577f;
  color: #fff;
  padding: 14px;
  border-radius: 50%;
  margin-right: 20px;
}
.sidebar .card .card-body .user__info h5 {
  /* line-height: 10px; */
  margin-top: 10px;
  font-size: 20px;
  color: #000;
  font-weight: 800;
}
.sidebar .card .card-body .user__info p {
  font-size: 15px;
  line-height: 10px;
  color: grey;
}
.manage,
.integrations {
  padding-left: 20px;
  margin-top: 20px;
}
.integrations {
  margin-top: 10px;
}
.manage h5,
.integrations h5 {
  font-size: 15px;
  margin-bottom: 20px;
  color: #000;
  font-weight: 800;
}
.manage div,
.integrations div {
  display: flex;
  /* align-items: center; */
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
  line-height: 18px;
  font-size: 15px;
  font-weight: 400;
  color: grey;
  cursor: pointer;
  /* margin-left: 10px; */
}
hr {
  margin-block: 20px;
}
.sidebar .signout__div {
  padding-left: 20px;
  display: flex;
}
.sidebar .signout__div span {
  margin-right: 10px;
}
/* Sidebar main styles */

/* End of sidebar main styles */
.main__bar {
  width: 80%;
  height: 100%;
}
</style>
