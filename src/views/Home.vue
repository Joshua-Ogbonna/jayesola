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
            <div class="card shadow p-3 mb-5 bg-body rounded">
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
            <div class="card shadow p-3 mb-5 bg-body rounded">
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
            <div class="card shadow p-3 mb-5 bg-body rounded">
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

      <!-- Tracking your business -->
      <div class="business_track container">
        <h3>
          Control and <br />
          track your business
        </h3>

        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <h5 class="card-title">
                <i class="fas fa-check-double"></i> Easy to use
              </h5>
              <p class="card-text">
                SMECRM is an easy to use intuitive tool built <br />
                with excellent user experience <br />
                in place
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <h5 class="card-title">
                <i class="fas fa-shield-alt"></i> Secure system
              </h5>
              <p class="card-text">
                With greater increase in user data breach, <br />
                our system is built on high security <br />
                measures to ensure user data safety
              </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card">
              <h5 class="card-title">
                <i class="fas fa-chart-line"></i> Read report
              </h5>
              <p class="card-text">
                Accurate and timely report on performance, <br />
                trades, marketing, and analysis, <br />
                our system provides the best option for SMEs
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Business Tracking -->

      <!-- Work Better Section -->
      <div class="better_section container">
        <div class="section_header">
          <h3>Get better work done</h3>
          <p>
            Get more work done in a short time with our powerful automation.
            <br />
            Link your projects from different platform with just one click!
          </p>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <!-- Card One -->
            <div class="card shadow-lg p-3 mb-5 bg-body rounded">
              <h5 class="card-title">
                <i class="fas fa-tachometer-alt dashboard"></i>
                <span>Dashboard</span>
              </h5>
              <p class="card-text">
                See your activities all in one screen with our interactive
                dashboard!
              </p>
            </div>
          </div>

          <!-- Card two -->
          <div class="col-lg-4 management">
            <div class="card shadow p-3 mb-5 bg-body rounded">
              <h5 class="card-title">
                <i class="fas fa-project-diagram project"></i>
                <span>Project Management</span>
              </h5>
              <p class="card-text">
                Manage your sales and projects from one place! Save the stress
                with diverse apps!
              </p>
            </div>
          </div>

          <!-- Card Three -->
          <div class="col-lg-4 platform">
            <div class="card shadow-sm p-3 mb-5 bg-body rounded">
              <h5 class="card-title">
                <i class="fas fa-network-wired integrated"></i>
                <span>Integrated Platform</span>
              </h5>
              <p class="card-text">
                Integrate your activities with our all-powerful automation
                platform 🚀!
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Better Section -->

      <!-- Pricing Section -->
      <div class="pricing_section container">
        <div class="pricing_header">
          <h3>
            Simple, transparent pricing
          </h3>
          <p>
            Choose the plan that's right for your company. All plans include a
            30 day trial.
          </p>
        </div>

        <!-- Card groups -->
        <div class="row">
          <!-- Basic Pricing -->
          <div class="col-lg-4">
            <div class="card card shadow p-3 mb-5 bg-body rounded basic">
              <div class="card-body">
                <div class="card_header">
                  <h4 class="price_header">Basic</h4>
                  <p class="price_headerParagraph">
                    Unlimited users
                  </p>
                  <div class="card_price">
                    <h5 class="price">
                      $10<span class="price_description">/month</span>
                    </h5>
                  </div>
                </div>
                <hr />

                <!-- pricing details -->
                <div class="pricing_details">
                  <ul>
                    <li>
                      <span>Event Reporting, Action Tracking</span>
                    </li>
                    <li><s>Live Content</s></li>
                    <li><s>Dedicated Support</s></li>
                  </ul>
                </div>

                <!-- Action Button -->
                <c-button size="lg" width="100%">Get Started</c-button>
              </div>
            </div>
          </div>
          <!-- Business Pricing -->
          <div class="col-lg-4">
            <div class="card card shadow p-3 mb-5 bg-body rounded business">
              <div class="card-body">
                <div class="card_header">
                  <h4 class="price_header">Business</h4>
                  <p class="price_headerParagraph">
                    Unlimited users
                  </p>
                  <div class="card_price">
                    <h5 class="price">
                      $20<span class="price_description">/month</span>
                    </h5>
                  </div>
                </div>
                <hr />

                <!-- pricing details -->
                <div class="pricing_details">
                  <ul>
                    <li>
                      <span>Event Reporting, Action Tracking</span>
                    </li>
                    <li>
                      <span>Live Content</span>
                    </li>
                    <li>
                      <span>Dedicated Support</span>
                    </li>
                  </ul>
                </div>

                <!-- Action Button -->
                <c-button size="lg" width="100%">Get Started</c-button>
              </div>
            </div>
          </div>

          <!-- Entreprise pricing -->
          <div class="col-lg-4">
            <div class="card card shadow p-3 mb-5 bg-body rounded enterprise">
              <div class="card-body">
                <div class="card_header">
                  <h4 class="price_header">Enterprise</h4>
                  <p class="price_headerParagraph">
                    Unlimited users
                  </p>
                  <div class="card_price">
                    <h5 class="price">Custom</h5>
                  </div>
                </div>
                <hr />

                <!-- pricing details -->
                <div class="pricing_details">
                  <ul>
                    <li>
                      <span>Event Reporting, Action Tracking</span>
                    </li>
                    <li>
                      <span>Live Content</span>
                    </li>
                    <li>
                      <span>Dedicated Support</span>
                    </li>
                  </ul>
                </div>

                <!-- Action Button -->
                <c-button size="lg" width="100%">Get Started</c-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Pricing Section -->

      <!-- Last info section -->
      <div class="last_info">
        <h3>
          maximize productivity <br />
          with SMECRM automation
        </h3>
        <p>Go world class! Become a pro! Go with SMECRM 🚀</p>
        <c-button>Get Started</c-button>
      </div>
      <!-- Endof last info section -->
      <!-- Footer section -->
      <div class="footer_section container">
        <div class="row">
          <!-- Solutions -->
          <div class="col-md-6 col-lg-3 solutions">
            <h5>Solutions</h5>

            <p>Integration</p>
            <p>Automation</p>
            <p>Sales Reports</p>
            <p>Marketing</p>
          </div>

          <!-- Company -->
          <div class="col-md-6 col-lg-3 company">
            <h5>Company</h5>

            <p>About</p>
            <p>Leadership</p>
            <p>Customer</p>
            <p>Career</p>
          </div>

          <!-- Product -->
          <div class="col-md-6 col-lg-3 product">
            <h5>Product</h5>

            <p>Personal</p>
            <p>Business</p>
            <p>Team</p>
          </div>

          <!-- Stay with us -->
          <div class="col-md-6 col-lg-3">
            <h5>Stay with us</h5>
            <p>Join our mailing list to get updates</p>

            <input type="search" name="search" id="" placeholder="email address" />
            <c-button>submit</c-button>
          </div>
        </div>

        <!-- Company info -->
        <div class="row company_info">
          <div class="col-lg-9">
            <i class="fas fa-link"></i>
          </div>
          <div class="col-lg-3 links">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter" style="margin-left: 30px;"></i>
            <i class="fab fa-instagram" style="margin-left: 30px;"></i>
          </div>
        </div>
      </div>
      <!-- End of footer -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
// import Background from "../assets/images/background_picture.jpeg"
import Button from "@/components/Button.vue";
import { CButton } from "@chakra-ui/vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Button,
    CButton,
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
  font-size: 20px;
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
  font-size: 20px;
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
  background-color: #7952b3;
}
.insight__section .card .uncompleted {
  background-color: #7eca9c;
}
.insight__section .card .pending {
  background-color: #ffc107;
}

/* Business Track Styles */
.business_track {
  margin-bottom: 100px;
}
.business_track .card {
  border: none;
}
.business_track h3 {
  margin-bottom: 40px;
  font-size: 40px;
  color: #03256c;
  font-weight: 800;
}
.business_track .card .card-title {
  font-size: 18px;
  color: #03256c;
}
.business_track .card .card-title h5 {
  margin-left: 40px;
}
.business_track .card p {
  font-size: 15px;
  color: grey;
}

/* Business section */
.better_section {
  margin-bottom: 50px;
}
.better_section .card {
  border: none;
  /* margin-block: 30px; */
}
.better_section .management {
  margin-top: 80px;
}
.better_section .platform {
  margin-top: 160px;
}
.better_section .section_header {
  text-align: center;
  margin-bottom: 30px;
}
.better_section .section_header h3 {
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 800;
  color: #03256c;
}
.better_section .section_header p {
  font-size: 15px;
  color: grey;
}
.better_section .card .card-title {
  font-size: 18px;
  margin-block: 15px;
}
.better_section .card .card-title i {
  margin-right: 10px;
  color: #fff;
  border-radius: 99px;
  padding: 10px;
}
.better_section .card .card-title .dashboard {
  background: orange;
  font-size: 10px;
}
.better_section .card .card-title .project {
  background: #7868e6;
  font-size: 10px;
  border-radius: 50%;
}
.better_section .card .card-title .integrated {
  background-color: #ffc93c;
  font-size: 10px;
}
.better_section .card .card-title span {
  color: #03256c;
  font-weight: 300;
}
.better_section .card p {
  font-size: 15px;
}

/* Pricing section styles */
.pricing_section {
  margin-bottom: 70px;
}
.pricing_section .pricing_header {
  text-align: center;
  margin-bottom: 40px;
}
.pricing_section .pricing_header h3 {
  font-size: 40px;
  font-weight: 800;
  color: #03256c;
  margin-bottom: 20px;
}
.pricing_section .pricing_header p {
  font-size: 15px;
  color: grey;
}
.pricing_section .card {
  border: 0.1px solid rgb(236, 228, 228);
}
.pricing_section .card .card_header {
  text-align: center;
}
.pricing_section .card .card_header h4 {
  font-size: 30px;
  font-weight: 700;
  color: #03256c;
}
.pricing_section .card .card_header p {
  font-size: 15px;
  margin-bottom: 30px;
  color: grey;
}
.pricing_section .card .card_header .card_price h5 {
  color: #03256c;
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 30px;
}
.pricing_section .card .card_header .card_price h5 span {
  color: rgb(128, 123, 123);
  font-size: 15px;
}
.pricing_section .card .pricing_details {
  margin-bottom: 30px;
}
.pricing_section .card .pricing_details ul {
  margin-top: 30px;
}
.pricing_section .card .pricing_details ul li {
  list-style: none;
  font-size: 15px;
  /* padding-left: -60px; */
  margin-bottom: 10px;
  color: rgb(128, 123, 123);
  font-weight: 800;
}

.pricing_section .basic,
.pricing_section .enterprise {
  margin-top: 40px;
}
.pricing_section .business {
  padding-top: 40px;
  padding-bottom: 40px;
  height: 550px;
  background-color: rgb(243, 240, 240) !important;
}
.pricing_section .business .card-body {
  margin-top: 40px;
}
.pricing_section .business button {
  background-color: #2541b2;
  color: #fff;
  border: none;
}
.pricing_section .card button {
  font-size: 15px;
}
.pricing_section .card button:active {
  outline: none !important;
}

/* Last info section */
.last_info {
  text-align: center;
  margin-bottom: 70px;
}
.last_info h3 {
  font-size: 40px;
  font-weight: 800;
  color: #03256c;
  margin-bottom: 20px;
}
.last_info p {
  margin-bottom: 20px;
  font-size: 15px;
  color: grey;
}
.last_info button {
  background-color: #2541b2;
  color: #fff;
  border: none;
  font-size: 15px;
  padding: 30px 40px;
  border-radius: 40px;
}

/* Footer section */
.footer_section {
  padding-bottom: 20px;
}
.footer_section h5 {
  font-size: 18px;
  font-weight: 800;
  color: #03256c;
  margin-bottom: 20px;
}
.footer_section .solutions p,
.footer_section .company p,
.footer_section .product p {
  cursor: pointer;
}
.footer_section p {
  font-size: 15px;
  color: grey;
  line-height: 20px;
}
.footer_section input {
  outline: none;
  border: none;
  border-radius: 40px;
  background: rgb(238, 235, 235);
  padding-block: 18px;
  padding-left: 26px;
  padding-right: 60px;
  font-size: 13px;
}
.footer_section button {
  background: #FFC93C;
  border: none;
  color: #fff;
  font-size: 13px;
  position: relative;
  bottom: 55px;
  left: 160px;
  border-radius: 40px;
  padding-block: 28px;
  padding-inline: 20px;
}
.footer_section .company_info .links i {
  border-radius: 99px;
  background-color: rgb(201, 196, 196);
  font-size: 10px;
  padding: 10px;
  cursor: pointer;
}
</style>
