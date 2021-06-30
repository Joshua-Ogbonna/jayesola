<template>
  <div>
    <section class="add__note">
      <button
        type="button"
        class="btn btn-primary"
        
      >
        Create Email
      </button>
    </section>

    <section class="if__note">
      <p>Send emails to a contact from this record.</p>
    </section>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .add__note button {
  background: rgb(30, 37, 75);
  color: #fff;
  padding: 10px 30px;
  font-size: 11px;
  border: none;
  margin-bottom: 20px;
  border-radius: 3px;
}
.if__note {
  text-align: center;
  font-size: 15px;
}
</style>
