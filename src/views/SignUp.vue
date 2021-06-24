<template>
  <div class="sign__up">
    <div class="form__area">
      <div class="info">
        <router-link to="/" class="text-center"
          ><i class="fas fa-link brand"></i
        ></router-link>
        <h3>Sign Up</h3>
        <p>See your growth and consulting support 🚀</p>
      </div>

      <form class="signup__form">
        <div class="form-group">
          <label for="name" class="form-label">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="name"
            v-model="user.name"
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
          <input type="checkbox" name="terms" id="termsConditions" /> I agree to
          the <router-link to="/terms">terms and conditions</router-link>
        </div>
        <c-button
          size="lg"
          width="100%"
          class="lg_button"
          @click.prevent="signUpUser"
          >
          <span v-if="!isLoading">Sign Up</span>
          <Loader v-else />
          </c-button
        >
      </form>
      <!-- End of form -->
      <h5>
        Already have an account?
        <router-link to="/login"><span>Sign in</span></router-link>
      </h5>
    </div>
    <!-- <div class="design">
      <Auth />
    </div> -->
  </div>
</template>

<script>
// import Auth from "@/views/Auth";
import { CButton } from '@chakra-ui/vue';
import Loader from '@/components/Loader.vue'

export default {
  components: {
    // Auth,
    CButton,
    Loader
  },
  // Vue data
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      },
      isLoading: false
    };
  },
  // Methods
  methods: {
    signUpUser() {
      this.isLoading = true
      this.$store
        .dispatch('SIGNUP', this.user).then((response) => {
          if(response.data.success) {
            this.isLoading = false
          }
        }).catch(err => console.log(err))
    }
  }
};
</script>

<style scoped>
.sign__up {
  display: flex;
  background-image: url('../assets/images/background2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  padding-top: 40px;
}
.signup__form {
  padding-top: 50px;
}
/* .info {
  text-align: left;
} */
.form__area {
  width: 40%;
  margin: 0 auto;
  background: #fff;
  border-radius: 20px;
  height: 90vh;
}
.form__area {
  padding: 20px 50px;
  /* height: 80%; */
}
.form__area button {
  border-radius: 40px;
}
.form__area .brand {
  margin-bottom: 30px;
  font-size: 25px;
  font-weight: 800;
  color: #03256c;
}
.form__area h3 {
  font-size: 25px;
  font-weight: 800;
  color: #03256c;
}
.form__area p {
  font-size: 15px;
  color: grey;
  margin-bottom: 20px;
}
.form__area .google__signup {
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
  margin-top: -20px;
}
form .form-group label {
  font-size: 15px;
  font-weight: 800;
  line-height: 0;
  color: #03256c;
}
form .form-group input {
  margin-bottom: 10px;
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
  margin-top: 20px;
}
form .lg_button {
  font-size: 15px;
  margin-bottom: 20px;
  border: none;
  color: #fff;
  background: #03256c;
}
.form__area h5 {
  font-size: 15px;
}
</style>
