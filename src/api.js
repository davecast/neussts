const url = "https://www.neuss-ts.com/mailer/";

function sendPost(content) {
  let formData = new FormData();
  formData.append("fullname", content.fullName);
  formData.append("email", content.email);
  formData.append("message", content.message);
  return fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-url-encoded",
      Accept: "application/json"
    },
    body: formData
  });
}

function sendMail(content) {
  console.log("send");
  let formData = new FormData();
  formData.append("email", content.email);
  formData.append("b_c7d8954ec0e4f6a1cd4a53b50_48d74c72d8", content.code);
  return fetch(
    "https://neuss-ts.us19.list-manage.com/subscribe/post?u=c7d8954ec0e4f6a1cd4a53b50&amp;id=48d74c72d8",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-url-encoded",
        Accept: "application/json"
      },
      body: formData
    }
  );
}
//function sendPost(content) {
// console.log(content);
//return fetch(`${url}?email=${content.email}&?name=${content.fitst}`);
//return fetch(url);
//}

export default {
  sendPost,
  sendMail
};
