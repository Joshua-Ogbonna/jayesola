<template>
  <div>
    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Add Task
    </button>

    <section class="task__note">
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
              <div class="form-group">
                <label for="category" class="form-label">Task Category</label>
                <select name="category" class="form-select">
                  <option value="To-do">To-do</option>
                  <option value="Call">Call</option>
                  <option value="Email">Email</option>
                </select>
              </div>
              <div class="form-group mt-4">
                <label for="priority" class="form-label">Priority</label>
                <select name="priority" class="form-select">
                  <option value="none">None</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div class="form-group">
                <label for="assigned-to" class="form-label">Assign To</label>
                
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
            <button type="button" class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>
