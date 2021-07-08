<template>
<b-overlay :show="show" rounded="sm">
  <div class="login__area" :aria-hidden="show ? 'true' : null">
    <div class="sign__form">
      <!-- Brand logo -->
      
      <router-link to="/"><i class="fas fa-link brand"></i></router-link>
      <h3>Login</h3>
      <p>See your growth and get unlimited support</p>

      
      
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
            v-model="user.email"
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
            v-model="user.password"
          />
        </div>

        <div class="form-group checkbox">
          <div>

          <input type="checkbox" name="remember" id="remember" /> Remember me
          </div>
          <router-link to="/login">Forgot Password?</router-link>
        </div>
        <c-button size="lg" width="100%" class="lg_button" @click.prevent="loginUser">
          <span>Login</span>
          
        </c-button>
      </form>
      <!-- End of form -->
      <h5>
        Not registered yet?
        <router-link to="/sign-up"><span>Register</span></router-link>
      </h5>
    </div>
    <!-- <div class="design__area">
      <Auth />
    </div> -->
  </div>
</b-overlay>
</template>

<script>
// import Auth from "@/views/Auth";
import { CButton } from "@chakra-ui/vue";


export default {
  components: {
    // Auth,
    CButton,
    
  },
  // Vue data
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      show: false
    }
  },

  // Vue methods
  methods: {
    loginUser() {
      this.show = true
      this.isLoading = true
      this.$store.dispatch('LOGIN', this.user).then((response) => {
        if (response.data.success) {
          this.isLoading = false
          this.show = false
        }
      }).catch(err => {
        console.log(err)
        this.show = false
      })
    },
    
  }
};
</script>

<style scoped>
.login__area {
  display: flex;
  background-image: url("../assets/images/background2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding-top: 40px;

}
.sign__form {
  width: 40%;
  margin: 0 auto;
  background: #fff;
  padding: 20px 80px;
  height: 90vh;
  border-radius: 20px;
}
.login_up {
  margin-top: 70px;
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
  /* color: rgb(247, 243, 243); */
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
