<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <i class="fas fa-link"></i>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav left_ul">
            <li class="nav-item">
              <a class="nav-link" href="/#solution">Solutions</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#features">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#pricing">Pricing</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Support</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Report</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto right_ul">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="sign-up" style="text-decoration: none;">

              <Button class="button" variant="solid" content="Sign Up" />
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
nav {
  padding: 20px 30px;
}
.navbar-brand i {
  color: #03256c;
}
.left_ul li a {
  margin-left: 30px;
  color: lightblue;
}
.right_ul li {
  margin-right: 30px;
}
.button {
  border: none !important;
}
</style>
