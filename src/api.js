const url = "https://davecastworks.com/mailer/";

function sendPost(content) {
  let formData = new FormData();
  formData.append("name", `${content.first_name} ${content.last_name}`);
  formData.append("email", content.email);
  formData.append("phone", content.phone);
  formData.append("company", content.company);
  formData.append("job", content.job);
  formData.append("comments", content.comments);
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
//function sendPost(content) {
// console.log(content);
//return fetch(`${url}?email=${content.email}&?name=${content.fitst}`);
//return fetch(url);
//}

export default {
  sendPost
};
