<template>
  <div>
    <c-button> {{content}} </c-button>
  </div>
</template>

<script>
import { CButton } from "@chakra-ui/vue";
  export default {
    props: ['content'],
    components: {
      CButton
    }
  }
</script>

<style scoped>
  
</style>
