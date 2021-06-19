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
        <p><span></span> Dashboard</p>
        <p><span></span> Customers</p>
        <p><span></span> Pipeline</p>
        <p><span></span> Reporting</p>
        <p><span></span> Reviews</p>
        <p><span></span> Automations</p>
      </div>

      <!-- Integrations -->
      <div class="integrations">
        <h5>Integrations</h5>
        <p><span></span> Gmail</p>
        <p><span></span> Twitter</p>
        <p><span></span> Facebook Ads</p>
        <p><span></span> Instagram</p>
        <p><span></span> Yahoo Mail</p>
      </div>

      <hr>
      <!-- Sign Out Action -->
      <p class="sign__out"><span></span> Sign Out</p>
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
  background-color: #E7E7DE;
}
.sidebar .card .card-body {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.sidebar .card .card-body h4 {
  font-size: 20px;
  background-color: #FF577F;
  color: #fff;
  padding: 14px;
  border-radius:50%;
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
  margin-top: 30px;
}
.manage h5,
.integrations h5 {
  font-size: 15px;
  margin-bottom: 20px;
  color: #000;
  font-weight: 800;
}
.manage p,
.integrations p {
  line-height: 16px;
  font-size: 15px;
  font-weight: 400;
  color: grey;
  cursor: pointer;
}
hr {
  margin-block: 30px
}
.sidebar .sign__out {
  padding-left: 20px;
}
/* Sidebar main styles */

/* End of sidebar main styles */
.main__bar {
  width: 80%;
  height: 100%;
}
</style>
