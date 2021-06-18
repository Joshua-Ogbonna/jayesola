<template>
  <div class="sign__up">
    <div class="form__area">
      <router-link to="/"><i class="fas fa-link brand"></i></router-link>
      <h3>Sign Up</h3>
      <p>See your growth and consulting support 🚀</p>
      <c-button size="lg" width="100%"><i class="fab fa-google"></i> Sign up with Google</c-button>
      <hr />
      <span>or sign up with email address</span>

      <!-- Form area -->
      <form class="sign_up">
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="name"
          />
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email address"
          />
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="password"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword" class="form-label"
            >Confirm Password</label
          >
          <input
            type="confirmPassword"
            name="confirmPassword"
            id="confirmPassword"
            class="form-control"
            placeholder="password"
          />
        </div>
        <div class="form-group">
          <input type="checkbox" name="terms" id="termsConditions" /> I agree to
          the terms and conditions
        </div>
        <c-button size="lg" width="100%">Sign Up</c-button>
      </form>
      <!-- End of form -->
      <h5>Already have an account? <span>Sign in</span></h5>
    </div>
    <div class="design">
      <Auth />
    </div>
  </div>
</template>

<script>
import Auth from "@/views/Auth";
import { CButton } from "@chakra-ui/vue";
export default {
  components: {
    Auth,
    CButton,
  },
};
</script>

<style scoped>
.sign__up {
  display: flex;
}
.form__area,
.design {
  width: 50%;
}
.form__area {
  padding: 20px 100px;
  height: 100vh;
}
.form__area .brand {
  margin-bottom: 40px;
  font-size: 25px;
  font-weight: 800;
  color: #03256C;
}
.form__area h3 {
  font-size:25px;
  font-weight: 800;
}
</style>
