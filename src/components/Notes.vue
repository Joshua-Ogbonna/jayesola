<template>
  <div>
    <section class="add__note">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Create Note
      </button>
    </section>

    <div class="notes" v-for="note in data" :key="note._id">
      <div class="card">
        <div class="card-body">
          {{ note.body }}
        </div>
      </div>
    </div>

    <section class="if__note" v-if="data.length === 0">
      <p>Take notes about this record to keep track of important info.</p>
    </section>

    <section class="note__modal">
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
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <textarea
                name="textarea"
                cols="30"
                rows="10"
                placeholder="Start typing to leave a note here"
                class="form-control"
              ></textarea>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary submit">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: ''
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    this.getClient()
  },
  methods: {
    async getClient() {
      await axios
        .get('https://frozen-refuge-45677.herokuapp.com/api/client/' + this.$route.params.id)
        .then(response => {
          this.data = response.data.data.notes;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
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
.btn-check:focus + .btn-primary,
.btn-primary:focus {
  color: #fff;
  background-color: rgb(30, 37, 75);
  border-color: #000;
  box-shadow: none;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #000;
  outline: 0;
  box-shadow: none;
}
.note__modal .submit {
  background: rgb(30, 37, 75);
}
.note__modal button {
  border: none;
  font-size: 12px;
}
.note__modal .close {
  background: #ff577f;
}
</style>
