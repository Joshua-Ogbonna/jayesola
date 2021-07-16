<template>
  <div class="analytics">
    <h3>Actvities</h3>

    <div class="separate__activities">
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              Team activities by activity date <br />
              <span>Date range: In the last 30 days</span>
            </div>

            <div class="card-body">
              <p class="card-text">
                <!-- With supporting text below as a natural lead-in to additional
                content. -->
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              Contacts created and worked totals with deals created and won
              totals <br />
              <span>Date range: In the last 30 days</span>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <h5>CONTACT CREATED</h5>
                        <span> {{ this.$store.getters.clients.length }} </span>
                    </div>
                    <div class="col-md-4">
                        <h5>CONTACTS ASSIGNED</h5>
                        <span>0</span>
                    </div>
                    <div class="col-md-4">
                        <h5>NEW DEALS CREATED</h5>
                        <span> {{ this.$store.getters.sales.length }} </span>
                    </div>
                    <div class="col-md-4">
                        <h5>DEALS CLOSED WON</h5>
                        <span>0</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Row -->
      <div class="row mt-5">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              Deal revenue forecast by stages <br />
              <span>Date range: In the last 30 days</span>
            </div>

            <div class="card-body">
                <div class="row">
                  <div class="col-lg-3">
                    <h5>Appointment Scheduled</h5>
                    {{ this.$store.getters.sales.map(sale => sale.stage === 'Appointment Schedule').length }}
                  </div>
                  <div class="col-lg-3">
                    <h5>Qualified to Buy</h5>
                    {{ this.$store.getters.sales.map(sale => sale.stage === 'Qualified to Buy').length }}
                  </div>
                  <div class="col-lg-3">
                    <h5>Presentation Scheduled</h5>
                    {{ this.$store.getters.sales.map(sale => sale.stage === 'Appointment Schedule').length }}
                  </div>
                  <div class="col-lg-3">
                    <h5>Contract Sent</h5>
                    {{ this.$store.getters.sales.map(sale => sale.stage === 'Appointment Schedule').length }}
                  </div>
                  <div class="col-lg-3">
                    <h5>Closed Won</h5>
                    {{ this.$store.getters.sales.map(sale => sale.stage === 'Appointment Schedule').length }}
                  </div>
                  <div class="col-lg-3">
                    <h5>Closed Lost</h5>
                    {{ this.$store.getters.sales.map(sale => sale.stage === 'Appointment Schedule').length }}
                  </div>
                </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.analytics {
  padding-top: 30px;
}
.separate__activities {
  margin-top: 20px;
}
.separate__activities .card {
  height: 35vh;
}
.card .card-header {
  background: #fff !important;
  font-weight: 700;
  font-size: 15px;
}
.card .card-header span {
    font-weight:400;
    font-size: 13px
}
.card-body h5 {
    font-size: 13px;
    font-weight: 500;
    margin-top: 15px
}
.card-body span {
    font-size: 28px;
    font-weight: 800;
    width: 100%;
    color: rgb(31, 28, 28);
    margin-block: auto;
}
</style>