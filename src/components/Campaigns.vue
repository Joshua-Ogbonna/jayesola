<template>
  <b-overlay :show="show" rounded="sm">
    <b-alert
      :show="dismissCountDown"
      variant="warning"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      Your mail was sent successfully 😊
    </b-alert>
    <div class="campaigns" :aria-hidden="show ? 'true' : null">
      <h3>Send a campaign</h3>

      <form @submit.prevent="sendCampaign">
        <div class="form-group">
          <label for="from_email" class="form-label">From:</label>
          <input
            type="email"
            name="from_email"
            class="form-control"
            v-model="this.$store.getters.user.email"
          />
        </div>
        <div class="form-group mt-4">
          <label for="from_name" class="form-label">Name:</label>
          <input type="text" name="from_name" class="form-control" />
        </div>
        <div class="form-group mt-4">
          <label for="to_email" class="form-label">To:</label>
          <input
            type="text"
            name="to_email"
            class="form-control"
            v-model="emails"
          />
        </div>
        <div class="form-group mt-4">
          <label for="message" class="form-label">Message</label>
          <textarea
            name="message"
            cols="30"
            rows="7"
            class="form-control"
            v-model="campaigns.message"
          ></textarea>
        </div>
        <div class="form-group mt-4">
          <button type="submit">
            <i class="fas fa-paper-plane me-2"></i> Send
          </button>
        </div>
      </form>
    </div>
  </b-overlay>
</template>

<script>
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      show: false,
      emails: [],
      dismissSecs: 5,
      dismissCountDown: 0,
      campaigns: {
          id: uuidv4(),
          message: '',
          dateCreated: new Date(Date.now()).toLocaleDateString()
      }
    };
  },
  methods: {
    async sendCampaign(e) {
      this.show = true;
      await emailjs
        .sendForm(
          'service_wrv2n0p',
          'template_gqztfep',
          e.target,
          'user_ibEJMxEm0HnUUePcyui0b'
        )
        .then((res) => {
          if (res.status === 200) {
            this.show = false;
            this.showAlert();
            this.$router.push('/dashboard/sales')
            // Get Emails from LocalStorage
            let emails = localStorage.getItem('emails')
            // Check if email is present. If there is email, JSON.parse it. Else, initialize it to empty array
            emails = emails ? JSON.parse(emails) : []

            // Add new data 
            emails.push(this.campaigns)
            // Save back to localStorage
            localStorage.setItem('emails', JSON.stringify(emails))
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
  mounted() {
    this.$store.dispatch('GETCLIENTS');
    this.emails = this.$store.getters.clients.map((client) => client.email);
  },
};
</script>

<style scoped>
.campaigns {
  padding-top: 30px;
}
button {
  border: none;
  font-size: 13px;
  padding: 10px 70px;
  background-color: rgb(40, 49, 92);
  color: #fff;
}
form input {
  padding: 10px 10px;
}
.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: rgb(196, 196, 196);
  outline: 0;
  box-shadow: none;
}
</style>