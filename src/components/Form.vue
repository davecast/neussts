<template>
  <form class="form" :class="{ form__hidden: isSend }" @submit.prevent>
    <div class="form__control">
      <label for="first__name" class="label text--smal text--black"
        >First Name <span>*</span></label
      >
      <input
        class="input"
        name="first__name"
        id="first__name"
        v-model="form.firstName.data"
        placeholder="First Name"
        :class="{ input__error: form.firstName.error.has }"
      />
      <span v-if="form.firstName.error.has" class="error">{{
        form.firstName.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="last__name" class="label text--smal text--black"
        >Last Name <span>*</span></label
      >
      <input
        class="input"
        name="last__name"
        id="last__name"
        v-model="form.lastName.data"
        placeholder="Last Name"
        :class="{ input__error: form.lastName.error.has }"
      />
      <span v-if="form.lastName.error.has" class="error">{{
        form.lastName.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="bussinessEmail" class="label text--smal text--black"
        >Business Email <span>*</span></label
      >
      <input
        class="input"
        name="bussinessEmail"
        id="bussinessEmail"
        v-model="form.businessEmail.data"
        placeholder="Business Email"
        :class="{ input__error: form.businessEmail.error.has }"
      />
      <span v-if="form.businessEmail.error.has" class="error">{{
        form.businessEmail.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="phone" class="label text--smal text--black"
        >Phone Number <span>*</span></label
      >
      <input
        class="input"
        name="phone"
        id="phone"
        v-model="form.phone.data"
        placeholder="Phone Number"
        :class="{ input__error: form.phone.error.has }"
      />
      <span v-if="form.phone.error.has" class="error">{{
        form.phone.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="companyName" class="label text--smal text--black"
        >Company Name <span>*</span></label
      >
      <input
        class="input"
        name="companyName"
        id="companyName"
        v-model="form.companyName.data"
        placeholder="Company Name"
        :class="{ input__error: form.companyName.error.has }"
      />
      <span v-if="form.companyName.error.has" class="error">{{
        form.companyName.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="jobTitle" class="label text--smal text--black"
        >Job Title <span>*</span></label
      >
      <input
        class="input"
        name="jobTitle"
        id="jobTitle"
        v-model="form.jobTitle.data"
        placeholder="Job Title"
        :class="{ input__error: form.jobTitle.error.has }"
      />
      <span v-if="form.jobTitle.error.has" class="error">{{
        form.jobTitle.error.message
      }}</span>
    </div>
    <div class="form__control">
      <label for="comments" class="label text--smal text--black"
        >Comments <span>*</span></label
      >
      <textarea
        name="comments"
        id="comments"
        v-model="form.comments.data"
        cols="40"
        rows="5"
        class="textarea"
        placeholder="Comments"
        :class="{ input__error: form.comments.error.has }"
      ></textarea>
      <span v-if="form.comments.error.has" class="error">{{
        form.comments.error.message
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
        send and contact us
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
        firstName: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        lastName: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        businessEmail: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        phone: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        companyName: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        jobTitle: {
          data: "",
          error: {
            has: false,
            message: ""
          }
        },
        comments: {
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
          first_name: this.form.firstName.data,
          last_name: this.form.lastName.data,
          email: this.form.businessEmail.data,
          phone: this.form.phone.data,
          company: this.form.companyName.data,
          job: this.form.jobTitle.data,
          comments: this.form.comments.data
        };
        this.isLoading = true;

        this.fierbasePush(contentBody).finally(() => {
          api.sendPost(contentBody).finally(() => (this.isSend = true));
        });
      }
    },
    checkForm() {
      this.errors = [];

      if (!this.form.firstName.data) {
        this.form.firstName.error.message = "First name is required field";
        this.form.firstName.error.has = true;
      } else {
        this.form.firstName.error.has = false;
        this.form.firstName.error.message = "";
      }
      if (!this.form.lastName.data) {
        this.form.lastName.error.has = true;
        this.form.lastName.error.message = "Last name is required field";
      } else {
        this.form.lastName.error.has = false;
        this.form.lastName.error.message = "";
      }
      if (!this.form.businessEmail.data) {
        this.form.businessEmail.error.has = true;
        this.form.businessEmail.error.message =
          "Business email is required field";
      } else {
        if (!this.validEmail(this.form.businessEmail.data)) {
          this.form.businessEmail.error.has = true;
          this.form.businessEmail.error.message =
            "Please use a correct email format";
        } else {
          this.form.businessEmail.error.has = false;
          this.form.businessEmail.error.message = "";
        }
      }
      if (!this.form.phone.data) {
        this.form.phone.error.has = true;
        this.form.phone.error.message = "Phone is required field";
      } else {
        if (!this.validPhone(this.form.phone.data)) {
          this.form.phone.error.has = true;
          this.form.phone.error.message = "Please use a correct phone format";
        } else {
          this.form.phone.error.has = false;
          this.form.phone.error.message = "";
        }
      }
      if (!this.form.companyName.data) {
        this.form.companyName.error.has = true;
        this.form.companyName.error.message = "Company name is required field";
      } else {
        this.form.companyName.error.has = false;
        this.form.companyName.error.message = "";
      }
      if (!this.form.jobTitle.data) {
        this.form.jobTitle.error.has = true;
        this.form.jobTitle.error.message = "Job title is required field";
      } else {
        this.form.jobTitle.error.has = false;
        this.form.jobTitle.error.message = "";
      }
      if (!this.form.comments.data) {
        this.form.comments.error.has = true;
        this.form.comments.error.message = "Comments is required field";
      } else {
        this.form.comments.error.has = false;
        this.form.comments.error.message = "";
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
    },
    validPhone(phone) {
      var re = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})\s*(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+)\s*)?$/;
      return re.test(phone);
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
.form__loader--spiner {
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
