<template>
  <div class="login__area">
    <div class="sign__form">
      <!-- Brand logo -->
      
      <router-link to="/"><i class="fas fa-link brand"></i></router-link>
      <h3>Login</h3>
      <p>See your growth and get unlimited support</p>

      <!-- Sig in Alternative button -->
      <c-button size="lg" width="100%" class="google__signin">Sign in with Google</c-button>

      <hr />
      <span class="email__span">or sign up with email address</span>

      <!-- Form Area -->
      <!-- Form area -->
      <form class="login_up">
        
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

        <div class="form-group checkbox">
          <div>

          <input type="checkbox" name="remember" id="remember" /> Remember me
          </div>
          <router-link to="/login">Forgot Password?</router-link>
        </div>
        <c-button size="lg" width="100%" class="lg_button">Login</c-button>
      </form>
      <!-- End of form -->
      <h5>
        Not registered yet?
        <router-link to="/sign-up"><span>Register</span></router-link>
      </h5>
    </div>
    <div class="design__area">
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
.login__area {
  display: flex;
}
.sign__form,
.design__area {
  width: 50%;
}
.sign__form {
  padding: 20px 140px;
  height: 80%;
}
.sign__form button {
  border-radius: 40px;
}
.sign__form .brand {
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 800;
  color: #03256c;
}
.sign__form h3 {
  font-size: 25px;
  font-weight: 800;
  color: #03256c;
}
.sign__form p {
  font-size: 15px;
  color: grey;
  margin-bottom: 20px;
}
.sign__form .google__signin {
  margin-bottom: 20px;
  background: #fff;
  border: 1px rgb(247, 243, 243) solid;
  font-size: 15px;
  color: grey;
}
.email__span {
  position: relative;
  bottom: 28px;
  background: #fff;
  left: 150px;
  padding: 0 20px;
}
.email__span,
hr {
  color: grey;
}
form {
  margin-top: 10px;
}
form .form-group label {
  font-size: 15px;
  font-weight: 800;
  line-height: 0;
  color: #03256c;
}
form .form-group input {
  margin-bottom: 20px;
  border-radius: 40px;
  margin-top: 10px;
  padding: 10px;
  color: rgb(247, 243, 243);
  border: 0.5px solid rgb(247, 243, 243);
  font-size: 15px;
}
form .checkbox {
  margin-bottom: 20px;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
}
form .lg_button {
  font-size: 15px;
  margin-bottom: 20px;
  border: none;
  color: #fff;
  background: #03256c;
}
.sign__form h5 {
  font-size: 15px;
}
.sign__form a {
  text-decoration: none;
}
</style>
