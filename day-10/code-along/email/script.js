console.log("start");

let textareaDOM = document.querySelector("#message");
let buttonSendDOM = document.querySelector("#sendEmailButton");

let href = "mailto:zahin.zulkipli@gmail.com?subject=Hello&body=";

textareaDOM.addEventListener("change", function (e) {
  let message = e.target.value;
  let newHref = href + message;
  console.log(newHref);
  buttonSendDOM.setAttribute("href", newHref);
});
