<template>
  <div
    v-if="isSend"
    class="form__loader"
    :class="{ form__success__view: isSend }"
  >
    <i class="wz-icon wz-check-double"></i>
    <span class="form__success">Thank you for subscribe to our newsletter</span>
  </div>
  <form
    v-else
    @submit="checkForm"
    action="https://neuss-ts.us19.list-manage.com/subscribe/post?u=c7d8954ec0e4f6a1cd4a53b50&amp;id=48d74c72d8"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    target="_blank"
    novalidate
  >
    <div class="form__control">
      <input
        class="input"
        name="EMAIL"
        id="email"
        v-model="form.email.data"
        placeholder="Email"
        :class="{ input__error: form.email.error.has }"
      />
      <span v-if="form.email.error.has" class="error">{{
        form.email.error.message
      }}</span>
    </div>
    <input
      type="hidden"
      tabindex="-1"
      value=""
      name="b_c7d8954ec0e4f6a1cd4a53b50_48d74c72d8"
    />
    <div class="form__control">
      <NeButton
        onSubmited
        value-input="subscribe"
        color="2d2d2d"
        background="EFDC30"
        align="left"
      />
    </div>
  </form>
</template>

<script>
import NeButton from "@/components/Button.vue";
//import api from "@/api";

export default {
  name: "FormNewsletter",
  components: {
    NeButton
  },
  data() {
    return {
      errors: [],
      isSend: false,
      form: {
        email: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        }
      }
    };
  },
  methods: {
    checkForm(e) {
      this.errors = [];

      if (!this.form.email.data) {
        this.form.email.error.has = true;
        this.form.email.error.message = "Business email is required field";
      } else {
        if (!this.validEmail(this.form.email.data)) {
          this.form.email.error.has = true;
          this.form.email.error.message = "Please use a correct email format";
        } else {
          this.form.email.error.has = false;
          this.form.email.error.message = "";
        }
      }

      for (const key in this.form) {
        const element = this.form[key];
        if (element.error.has) {
          this.errors.push(element);
        }
      }

      if (!this.errors.length) {
        setTimeout(() => {
          this.isSend = true;
          this.form.email.data = "";
        }, 500);
        return true;
      }

      e.preventDefault();
    },
    validEmail(email) {
      // eslint-disable-next-line no-use-before-define
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>

<style scoped>
form {
  position: relative;
}
.form__success {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 18px;
  color: #2d2d2d;
  transition: all 0.3s ease-out 0.2s;
}
.form__loader i {
  width: 30px;
  height: 30px;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  border: 2px solid #4caf50;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-right: 10px;
  color: #4caf50;
}
.form__success__view {
  transform: translateY(0px);
  opacity: 1;
}
.form__loader {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 1fr / 30px 1fr;
  grid-gap: 10px;
}
.form {
  background-color: #efefef;
  padding: 40px 30px;
  position: relative;
  opacity: 1;
  transition: all 0.3s ease-in;
}
.form__control {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition: all 0.3s ease-in;
}
.form__hidden .form__control {
  transform: translateY(15px);
  opacity: 0;
}
.label {
  display: block;
}
.label span {
  color: rgba(247, 45, 45, 0.898);
}
input,
textarea {
  appearance: none;
  border: none;
  background: none;
  border-bottom: 1px solid #2d2d2d;
  width: 100%;
  padding: 10px 0;
  font-size: 18px;
  font-family: "Muli", sans-serif;
  color: #d6c600;
  outline: none;
  box-shadow: none;
}
.input::placeholder,
.textarea::placeholder {
  color: #d6c600;
}
.textarea {
  resize: none;
}
.input__error {
  color: #ff9292;
}
.input__error::placeholder {
  color: #ff9292;
}
.error {
  font-size: 12px;
  line-height: 14px;
  color: #d00000;
  display: block;
  height: 22px;
  background: #ffd3d3;
  padding: 4px 10px;
  box-sizing: border-box;
}
</style>
