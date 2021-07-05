<template>
  <div>
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Task
    </button>

    <section class="tasks__section" v-if="data.tasks.length > 0">
      <div class="row" >
        <div class="col-lg-6" v-for="task in data.tasks.reverse()" :key="task._id">
          <div class="card shadow p-2 mb-2 bg-body rounded">
            <div class="card-body">
              <div class="task__details">
                <div>
                  <span> {{ task.category }} </span>
                  <span> {{ task.priority }} </span>
                </div>
                <i class="far fa-trash-alt"></i>
              </div>
              <div class="task__body">
                <h5> {{ task.title }} </h5>
                <p> {{ task.body }} </p>
              </div>
              <div class="task__supp">
                <span> {{ task.assignedTo }} </span>
                <span> {{ task.dueDate }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="task__note" v-else>
      <p>
        Create a task for yourself or a teammate. Keep track of all your to-dos
        for this record.
      </p>
    </section>

    <!-- Modal -->
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
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          </div>
          <div class="modal-body">
            <form>
              <!-- Form group -->
              <div class="form-group mb-4">
                <label for="title" class="form-label">Task Title</label>
                <input type="text" name="title" class="form-control" aria-placeholder="task title">
              </div>
              <!-- Form group -->
              <div class="form-group mb-4">
                <label for="body" class="form-label">Body</label>
                <textarea name="body" cols="10" rows="7" class="form-control"></textarea>
              </div>
              <!-- Form group -->
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-6">
                    <label for="category" class="form-label">Task Category</label>
                <select name="category" class="form-select">
                  <option value="To-do">To-do</option>
                  <option value="Call">Call</option>
                  <option value="Email">Email</option>
                </select>
                  </div>
                  <div class="col-lg-6">
                    <label for="priority" class="form-label">Priority</label>
                <select name="priority" class="form-select">
                  <option value="none">None</option>
                  <option value="high">High</option>
                </select>
                  </div>
                  <div class="col-lg-6">
                    <label for="assigned-to" class="form-label">Assign To</label>
                <div>
                  <select name="assigned-to" class="form-select">
                    <option
                      v-for="lead in leads"
                      :key="lead._id"
                      :value="lead.name"
                      >{{ lead.name }}</option
                    >
                  </select>
                </div>
                <div v-if="leads.length === 0">
                  <select name="assigned-to" class="form-select">
                    <option value="none">No lead</option>
                  </select>
                </div>
                  </div>
                  <div class="col-lg-6">
                    <label for="due-date" class="form-label">Due Date</label>
                <input type="date" name="due-date" class="form-control" />
                  </div>
                </div>
                
              </div>
              
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
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      data: [],
      id: ''
    };
  },
  computed: {
    leads() {
      return JSON.parse(localStorage.getItem('leads'));
    }
    // tasks() {
    //     return this.data.reverse()
    // }
  },
  methods: {
    async addTasks() {
      await axios
        .put(
          'https://frozen-refuge-45677.herokuapp.com/task/' +
            this.$route.params.id
        )
        .then(response => {
          if (response.data.success) {

          axios
            .get('https://frozen-refuge-45677.herokuapp.com/api/client/' + this.id)
            .then(response => {
              this.data = response.data.data;
              localStorage.setItem('client', JSON.stringify(response.data.data))
            })
            .catch(err => {
              console.log(err);
            });

          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  mounted() {
    this.data = JSON.parse(localStorage.getItem('client'));
    this.id = this.$route.params.id
    console.log(this.$route.params.id)
  }
};
</script>

<style scoped>
button {
  background: rgb(40, 49, 92);
  color: #fff;
  padding: 10px 30px;
  font-size: 12px;
  border: none;
  border-radius: 3px;
  margin-bottom: 20px;
}
.task__note {
  font-size: 13px;
  text-align: center;
}
.modal-footer button:hover {
  background: rgb(40, 49, 92);
}
.form-select:focus {
  border-color: none;
  outline: 0;
  box-shadow: none;
}
.tasks__section .card {
  border: none;
}
.task__details,
.task__body {
  margin-bottom: 20px;
}
.task__details span {
  margin-right: 20px;
  text-transform: lowercase;
  font-weight: 100;
  background: grey;
  padding: 2px 5px;
  border-radius: 3px;
  font-size: 12px;
  color: whitesmoke;
}
.task__details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task__details i {
  cursor: pointer;
}
.task__body h5 {
  color: rgb(40, 49, 92);
  font-size: 21px;
  text-transform:capitalize;
  font-weight: 800;
  line-height: 20px;
  margin-top: 40px;
}
.task__body p {
  font-size: 16px;
}
.task__supp span {
  margin-right: 20px;
  text-transform: lowercase;
  font-weight: 300;
  color: #000;
}
</style>
