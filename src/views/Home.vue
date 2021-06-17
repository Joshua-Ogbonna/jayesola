<template>
  <div class="home">
    <Navigation />

    <div class="home__main">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>
              A better way
              <br />to manage life
            </h1>
            <p>
              We've taken our best ideas, layered in years in customer
              <br />insights and feedback & put together                                                                                                          
            </p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
// import Background from "../assets/images/background_picture.jpeg"
import { } from 'chakra-ui/vue'                                                                                                                                                                                                                 

export default {
name: "Home",
components: {
Navigation                                                                                       
}
};                                                                                                                         
</script>

<style scoped>
  .home__main {
    background-image: url("../assets/images/background3.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 80vh;
  }
</style>
