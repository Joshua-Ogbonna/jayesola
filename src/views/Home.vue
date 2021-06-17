<template>
  <div class="home">
    <Navigation />

    <!-- Home Main Page -->
    <div class="home__main">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <h1>
              A better way
              <br />to manage life
            </h1>
            <p>
              We've taken our best ideas, layered in years in customer
              <br />insights and feedback & put together
            </p>
            <Button content="Get Started" />
          </div>
        </div>
      </div>
    </div>

    <!-- End of Home Main -->

    <!-- Wanna put everything inside one DIV Abeg -->

    <div class="main__div">
      <!-- Insight Section (Home Page) -->
      <div class="insight__section container">
        <p class="head">Insight based on</p>
        <div class="row">
          <!-- Column One -->
          <div class="col-lg-4">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
              <div class="card-body">
                <div class="card-img">
                  <i class="fas fa-tasks completed"></i>
                </div>
                <h5 class="card-title">375,776,27</h5>
                <p class="card-text">
                  Completed tasks
                </p>
              </div>
            </div>
          </div>
          <!-- End of Column one -->
          <!-- Column Two -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="card-img">
                  <i class="fas fa-spinner uncompleted"></i>
                </div>
                <h5 class="card-title">375,776,27</h5>
                <p class="card-text">
                  Completed tasks
                </p>
              </div>
            </div>
          </div>

          <!-- End of Column Two -->

          <!-- Column Three -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="card-img">
                  <i class="fas fa-pencil-ruler pending"></i>
                </div>
                <h5 class="card-title">125,245</h5>
                <p class="card-text">
                  Pending tasks
                </p>
              </div>
            </div>
          </div>

          <!-- End of Column Three -->
        </div>
      </div>
      <!-- End of Insight Section (Home Page) -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
// import Background from "../assets/images/background_picture.jpeg"
import Button from "@/components/Button.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Button,
  },
};
</script>

<style scoped>
.home__main {
  background-image: linear-gradient(to top, #080f1d, rgba(19, 14, 43, 0.73)),
    url("../assets/images/background3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 80vh;
  padding: 80px 200px 0;
  /* padding-inline: 120px; */
}
.home__main h1 {
  font-size: 80px;
  font-weight: 800;
  color: #fff;
}
.home__main p {
  color: whitesmoke;
  line-height: 30px;
  margin-top: 30px;
  font-size: 17px;
}

/* insight__section section */
.main__div {
  padding-inline: 200px;
}
.insight__section {
  padding-block: 80px;
}
.insight__section .head {
  margin-bottom: 20px;
  color: #03256c;
  font-weight: 200;
}
.insight__section img {
  height: 100px;
}
.insight__section .card {
  border: none;
}
.insight__section .card i {
  margin-bottom: 20px;
}
.insight__section .card h5 {
  font-size: 30px;
  margin-bottom: -2px;
  color: #03256c;
  font-weight: 800;
}
.insight__section .card p {
  color: grey;
  font-size: 15px;
}
.insight__section .card .completed,
.insight__section .card .uncompleted,
.insight__section .card .pending {
  border-radius: 99px;
  padding: 15px;
  color: #fff;
}
.insight__section .card .completed {
  background-color: #7952B3;
}
.insight__section .card .uncompleted {
  background-color: #7ECA9C;
}
.insight__section .card .pending {
  background-color: #FFC107;
}
</style>
