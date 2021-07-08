<template>
  <div>
    <!-- Gmail success alert -->
    <b-alert
      :show="dismissCountDown"
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      Your mail was sent successfully 😊
    </b-alert>

    <!-- Add note button -->
    <section class="add__note">
      <button type="button" @click="toggleForm">Create Email</button>
    </section>

    <!-- Email form -->
    <b-overlay :show="show" rounded="sm">
      <form
        v-if="showForm"
        @submit.prevent="sendMail"
        variant="success"
        class="m-1"
        :aria-hidden="show ? 'true' : null"
      >
        <div class="form-group mb-2">
          <label for="from" class="form-label">From</label>
          <input
            type="text"
            class="form-control"
            name="from"
            v-model="user.user.email"
          />
        </div>
        <div class="form-group mb-2">
          <label for="to" class="form-label">To</label>
          <input
            type="text"
            class="form-control"
            name="to"
            v-model="contact.email"
          />
        </div>
        <div class="form-group mb-2">
          <label for="receiver" class="form-label">Receiver</label>
          <input
            type="text"
            class="form-control"
            name="receiver"
            v-model="contact.name"
          />
        </div>
        <div class="form-group mb-2">
          <label for="subject" class="form-label">Subject</label>
          <input
            type="text"
            class="form-control"
            name="subject"
            placeholder="mail subject"
            v-model="mail.subject"
          />
        </div>
        <div class="form-group mb-2">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            name="title"
            placeholder="mail title"
            v-model="mail.title"
          />
        </div>
        <div class="form-group mb-2">
          <label for="body" class="form-label">Body</label>
          <textarea
            name="body"
            id="name"
            cols="30"
            rows="6"
            class="form-control"
            v-model="mail.body"
          ></textarea>
        </div>
        <button>Send</button>
      </form>
      <section class="if__note" v-else>
        <p>Send emails to a contact from this record.</p>
      </section>
    </b-overlay>
  </div>
</template>

<script>
import axios from 'axios';
import emailjs from 'emailjs-com';
export default {
  data() {
    return {
      user: '',
      contact: '',
      showForm: false,
      mail: {
        subject: '',
        title: '',
        body: '',
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      show: false,
    };
  },
  mounted() {
    axios
      .get(
        'https://frozen-refuge-45677.herokuapp.com/api/client/' +
          this.$route.params.id
      )
      .then((response) => {
        this.contact = response.data.data;
      })
      .catch((err) => {
        console.log(err);
      });

    this.user = JSON.parse(localStorage.getItem('vuex'));
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
    sendMail(e) {
      this.show = true
      emailjs
        .sendForm(
          'service_d9mhdlc',
          'template_hjgdfhs',
          e.target,
          'user_ibEJMxEm0HnUUePcyui0b'
        )
        .then((res) => {
          if (res.status === 200) {
            this.mail.subject = ''
            this.mail.title = ''
            this.mail.body = ''
            this.showForm = false
            this.show = false
            this.showAlert();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style scoped>
button {
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
