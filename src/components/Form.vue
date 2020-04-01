<template>
  <form class="form" :class="{ form__hidden: isSend }" @submit.prevent>
    <div class="form__control">
      <label for="fullName" class="label text--smal text--black"
        >Full name <span>*</span></label
      >
      <input
        class="input"
        name="fullName"
        id="fullName"
        v-model="form.fullName.data"
        placeholder="Full Name"
        :class="{ input__error: form.fullName.error.has }"
      />
      <span v-if="form.fullName.error.has" class="error">{{
        form.fullName.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="email" class="label text--smal text--black"
        >Business Email <span>*</span></label
      >
      <input
        class="input"
        name="email"
        id="email"
        v-model="form.email.data"
        placeholder="Email"
        :class="{ input__error: form.email.error.has }"
      />
      <span v-if="form.email.error.has" class="error">{{
        form.email.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="message" class="label text--smal text--black"
        >Message <span>*</span></label
      >
      <textarea
        name="message"
        id="message"
        v-model="form.message.data"
        cols="40"
        rows="5"
        class="textarea"
        placeholder="Message"
        :class="{ input__error: form.message.error.has }"
      ></textarea>
      <span v-if="form.message.error.has" class="error">{{
        form.message.error.message
      }}</span>
    </div>
    <div class="form__control">
      <NeButton
        @custom-click="sendForm"
        onClickable
        color="2d2d2d"
        background="EFDC30"
        align="left"
      >
        send your request
      </NeButton>
    </div>
    <div v-if="isLoading" class="form__loader">
      <bar-loader
        class="form__loader--spiner"
        :color="'#2d2d2d'"
        :loading="isLoading && !isSend"
        :size="200"
        :height="6"
      ></bar-loader>
      <span
        class="form__success"
        :class="{ form__success__view: isSend }"
        v-if="isSend"
        ><i class="wz-icon wz-check-double"></i> Thank you, we will contact you
        soon</span
      >
    </div>
  </form>
</template>

<script>
import api from "@/api";

import NeButton from "@/components/Button.vue";
import * as firebase from "firebase/app";
import "firebase/database";

export default {
  name: "Form",
  components: {
    NeButton
  },
  data() {
    return {
      errors: [],
      isSend: false,
      isLoading: false,
      form: {
        fullName: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        email: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        message: {
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
    fierbasePush(body) {
      return firebase
        .database()
        .ref("requests")
        .push()
        .set(body);
    },
    sendForm() {
      let checked = this.checkForm();
      if (checked) {
        let contentBody = {
          fullName: this.form.fullName.data,
          email: this.form.email.data,
          message: this.form.message.data
        };
        this.isLoading = true;

        this.fierbasePush(contentBody).finally(() => {
          api.sendPost(contentBody).finally(() => (this.isSend = true));
        });
      }
    },
    checkForm() {
      this.errors = [];

      if (!this.form.fullName.data) {
        this.form.fullName.error.message = "First name is required field";
        this.form.fullName.error.has = true;
      } else {
        this.form.fullName.error.has = false;
        this.form.fullName.error.message = "";
      }
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
      if (!this.form.message.data) {
        this.form.message.error.has = true;
        this.form.message.error.message = "Comments is required field";
      } else {
        this.form.message.error.has = false;
        this.form.message.error.message = "";
      }

      for (const key in this.form) {
        const element = this.form[key];
        if (element.error.has) {
          this.errors.push(element);
        }
      }

      if (!this.errors.length) {
        return true;
      }
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
.form__success {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 18px;
  color: #2d2d2d;
  transform: translateY(15px);
  opacity: 0;
  transition: all 0.3s ease-out 0.2s;
}
.form__success i {
  width: 30px;
  height: 30px;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  border: 2px solid #4caf50;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 20px;
  color: #4caf50;
}
.form__success__view {
  transform: translateY(0px);
  opacity: 1;
}
.form__loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);
  box-sizing: border-box;
  border: 1px solid #cccccc;
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
@media screen and (max-width: 768px) {
  .form__success {
    padding: 10px;
    line-height: 24px !important;
    text-align: center;
  }
}
</style>
