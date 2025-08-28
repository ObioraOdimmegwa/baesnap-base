let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let sendBtn = document.getElementById("sendBtn");

let fullName2 = document.getElementById("fullName2");
let email2 = document.getElementById("email2");
let message2 = document.getElementById("message2");
let sendBtn2 = document.getElementById("sendBtn2");


let count = 0;

sendBtn.addEventListener("click", function (e) {
  count++;

  if (count > 1) {
    sendBtn.textContent = "You have sent too many messages. Try again later...";
    return;
  }

  if (fullName.value == "" || email.value == "" || message.value == "") {
    alert("Complete the form before submitting");
    return;
  }

  const d = new Date();
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending message...";

  axios
    .post("https://api.baesnap.com/v1/contact-mail", {
      toName: fullName.value,
      toEmail: email.value,
      message: message.value,
      timeStamp: String(d),
    })
    .then(function (response) {
      sendBtn.disabled = false;
      sendBtn.textContent = "Message sent successfully 👍👍👍";
    });
});

sendBtn2.addEventListener("click", function (e) {
  count++;

  if (count > 1) {
    sendBtn2.textContent = "You have sent too many messages. Try again later...";
    return;
  }

  if (fullName2.value == "" || email2.value == "" || message2.value == "") {
    alert("Complete the form before submitting");
    return;
  }

  const d = new Date();
  sendBtn2.disabled = true;
  sendBtn2.textContent = "Sending message...";

  axios
    .post("https://api.baesnap.com/v1/contact-mail", {
      toName: fullName2.value,
      toEmail: email2.value,
      message: message2.value,
      timeStamp: String(d),
    })
    .then(function (response) {
      sendBtn2.disabled = false;
      sendBtn2.textContent = "Message sent successfully 👍";
    });
});
