<template>
  <div>
    <button data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Task
    </button>

    <div class="tasks" v-if="this.$store.getters.tasks.length > 0">
      <div class="row">
        <div
          class="col-lg-6"
          v-for="task in this.$store.getters.tasks"
          :key="task._id"
        >
          <div class="card shadow mb-3 bg-body rounded">
              <div class="card-header">
                <div class="title_action">
                  <h5> {{ task.title }} </h5>
                  <span><i class="far fa-trash-alt"></i></span>
                </div>
                <div class="task__details">
                  <div>
                    <p>due by: {{ task.dueDate}} </p>
                    <p>assigned to: {{task.assignedTo.name }} </p>
                  </div>
                  
                </div>
              </div>
            <div class="card-body">
              <p> {{ task.body }} </p>
              <div class="determinant">
                <p>priority: {{ task.priority }} </p>
                <p>category: {{ task.category }} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- if no task -->
    <div class="no_task" v-else>
      <p>Create a task for yourself or a teammate. Keep track of all your to-dos for this record.</p>
    </div>

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
            <h5 class="modal-title" id="exampleModalLabel">Add Task</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  class="form-control"
                  placeholder="task title"
                  v-model="task.title"
                />
              </div>
              <div class="form-group mb-3">
                <label for="body" class="form-label">Body</label>
                <textarea
                  name="body"
                  cols="20"
                  rows="4"
                  class="form-control"
                  v-model="task.body"
                ></textarea>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col-lg-6">
                    <label for="category" class="form-label">Category</label>
                    <select name="category" class="form-select" v-model="task.category">
                      <option value="todo">To-do</option>
                      <option value="call">Value</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <label for="priority" class="form-label">Priority</label>
                    <select name="priority" class="form-select" v-model="task.priority">
                      <option value="low">Low</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <div class="row">
                  <div class="col-lg-6">
                    <label for="assignedto" class="form-label"
                      >Assigned To</label
                    >
                    <select name="assignedto" class="form-select" v-model="task.assignedTo">
                      <option
                        v-for="lead in this.leads.leads"
                        :key="lead._id"
                        :value="lead"
                      >
                        {{ lead.name }}
                      </option>
                    </select>
                  </div>
                  <div class="col-lg-6">
                    <label for="dueDate" class="form-label">Due Date</label>
                    <input type="datetime-local" name="dueDate" class="form-control" v-model="task.dueDate">
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
            <button type="button" class="btn btn-primary" @click="addTask" data-bs-dismiss="modal">Save Task</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      leads: [],
      task: {
        title: '',
        body: '',
        category: '',
        priority: '',
        assignedTo: {},
        dueDate: ''
      }
    };
  },
  methods: {
    async addTask () {
      await axios
        .put(
          'https://frozen-refuge-45677.herokuapp.com/api/task/' +
            this.$route.params.id,
          this.task
        )
        .then(response => {
          if (response.data.success) {
            this.$store.dispatch('getTasks', this.$route.params.id);
          }
        })
        .catch(err => {
          console.log(err.message);
        });
    }
  },
  mounted() {
    this.$store.dispatch('getTasks', this.$route.params.id);
    this.leads = JSON.parse(localStorage.getItem('vuex'));
  },
};
</script>

<style scoped>
button {
  background-color: rgb(40, 49, 92);
  color: #fff;
  border: none;
  padding: 10px 30px;
  border-radius: 3px;
  margin-bottom: 30px;
}
.tasks .card {
  border: none;
}
.no_task p {
  font-size: 12px;
  text-align: center;
}
.title_action {
  display: flex;
  justify-content: space-between;
}
.task__details div  {
  line-height: 1px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.task__details div p {
  color: gray;
  font-size: 12px;
}
.determinant {
  display: flex;
  margin-top: 20px;
}
.determinant p {
  margin-right: 20px;
  line-height: 1px;
  color: gray;
  font-size: 12px;
}
.card-body p {
  font-size: 15px;
}
.card-header {
  background-color: #fff;
}
.card-header h5 {
  font-size: 18px;
  font-weight: 800;
  color: rgb(40, 49, 92);
}
</style>
