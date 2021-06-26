<template>
  <div class="new_leadContainer">
    <h3>Add New Lead</h3>

    <form>
      <div class="row">
        <div class="col">
          <label for="First name">Name</label>
          <input
            type="name"
            class="form-control"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <label for="Email">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Customer Email"
            aria-label="Email"
          />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <label for="Phone">Phone</label>
          <input
            type="text"
            class="form-control"
            placeholder="Customer Phone"
            aria-label="Phone"
          />
        </div>
        <div class="col">
          <label for="Phone">Company</label>
          <input
            type="text"
            class="form-control"
            placeholder="Customer Company"
            aria-label="Company"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="Confidence">Confidence</label>
          <select class="form-select" aria-label="Confidence">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="col">
          <label for="Estimated Value">Estimated Value</label>
          <select class="form-select" aria-label="Estimated Value">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <label for="Status">Status</label>
          <select class="form-select" aria-label="Status">
            <option selected value="new">New</option>
            <option value="contact">Contacted</option>
            <option value="inprogress">In Progress</option>
            <option value="lost">Lost</option>
            <option value="won">Won</option>
            
          </select>
        </div>
        <div class="col">
          <label for="Priority">Priority</label>
          <select class="form-select" aria-label="Priority">
            <option selected value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>
.new_leadContainer {
  padding-top: 100px;
  padding-inline: 100px;
}
form {
  margin-top: 20px;
}
form input {
  margin-top: 10px;
}
</style>
