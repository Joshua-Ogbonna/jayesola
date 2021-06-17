<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          <i class="fas fa-link"></i>
        </a>
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
              <a class="nav-link" href="#">Solution</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Support</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Report</a>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto right_ul">
            <li class="nav-item">
              <a href="#" class="nav-link">Login</a>
            </li>
            <li class="nav-item">
              <button href="#" class="nav-link">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  
  nav {
    padding: 20px 30px;
  }
  .navbar-brand i {
    color: #03256C;
  }
  .left_ul li a {
    margin-left: 30px;
    color: lightblue;
  }
  .right_ul li {
    margin-right: 30px;
  }
</style>
