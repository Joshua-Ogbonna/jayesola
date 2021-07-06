<template>
  <div>
    <!-- Note sections proper -->
    <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">
      Create Note
    </button>
    <BlueLoader v-if="this.$store.state.isLoading" />
    <section v-if="!this.$store.state.isLoading && notes.length > 0" class="note__section">
      <div class="notes" v-for="note in notes" :key="note._id">
        <div class="shadow-sm p-3 mb-2 bg-body rounded">
          <div class="card-body">
            {{ note.body }}
          </div>
        </div>
      </div>
    </section>

    <section class="notes_empty" v-if="this.$store.getters.notes.length === 0">
      <p>Take notes about this record to keep track of important info.</p>
    </section>

    <!-- Modal section -->

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Note</h5>
          </div>
          <div class="modal-body">
            <form>
              <textarea
                name="body"
                cols="30"
                rows="10"
                class="form-control"
                v-model="post.body"
              ></textarea>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              class="btn btn-primary"
              @click="postNote"
            >
              Save Note
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlueLoader from '@/components/BlueLoader';
import axios from 'axios';

export default {
  computed: {
    notes() {
      return this.$store.getters.notes;
    }
  },
  mounted() {
    this.$store.dispatch('getNote', this.$route.params.id);
  },
  components: {
    BlueLoader
  },
  data() {
    return {
      post: {
        body: ''
      }
    };
  },
  methods: {
    async postNote() {
      axios
        .put(
          'https://frozen-refuge-45677.herokuapp.com/api/client/' +
            this.$route.params.id,
          this.post
        )
        .then(response => {
          if (response.data.success) {
            this.$store.dispatch('getNote', this.$route.params.id);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  }
};
</script>

<style scoped>
button {
  background: rgb(40, 49, 92);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  margin-bottom: 20px;
  font-size: 12px;
}
.card {
  border: none;
}
.note__section {
    height: 70vh;
   overflow-x: hidden;
}
</style>
