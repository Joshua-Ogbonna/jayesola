<template>
  <div>
    <form>
      <h3>New Product</h3>
      <div class="form-group mb-3">
        <label for="category" class="form-label">Product Type</label>
        <input
          type="text"
          name="category"
          class="form-control"
          placeholder="e.g. e-book, cosmetic, product"
          v-model="product.category"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          name="title"
          class="form-control"
          placeholder="e.g. Think and grow rich"
          v-model="product.title"
          required
        />
      </div>
      <div class="form-group mb-3">
        <label for="description" class="form-label">Description</label>
        <input
          type="text"
          name="description"
          class="form-control"
          placeholder="Description"
          v-model="product.description"
          required
        />
      </div>
      <button class="mt-3" @click.prevent="addProduct">add product</button>
    </form>
  </div>
</template>

<script>
import router from '../router'
export default {
  data() {
    return {
      product: {
        category: '',
        title: '',
        description: '',
      },
    };
  },
  methods: {
    addProduct() {
      this.$store
        .dispatch('POSTPRODUCT', this.product)
        .then(() => {
          this.$store.dispatch('GETPRODUCTS');
          router.replace('/dashboard/profile')
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
form {
  margin-top: 40px;
}
form input {
  padding: 15px 10px;
}
.form-control:focus {
  color: #86a9cc;
  background-color: #fff;
  border-color: rgb(196, 196, 196);
  outline: 0;
  box-shadow: none;
}
button {
  background-color: rgb(40, 49, 92);
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 15px;
}
button:hover,
button:focus {
  background-color: rgb(40, 49, 92) !important;
  outline: none;
}
.form-group {
  margin-top: 30px;
}
h3 {
  font-size: 20px;
}
</style>
