<template>
  <div class="login__area">
    <div class="sign__form">
      
    </div>
    <div class="design__area">
      <Auth />
    </div>
  </div>
</template>

<script>
import Auth from '@/views/Auth'
export default {
  components: {
    Auth
  }
};
</script>

<style scoped>
  .login__area {
    display: flex;
  }
  .sign__form, .design__area {
    width: 50%;
  }
</style>
