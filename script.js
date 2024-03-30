function sendMessage() {
    event.preventDefault(); // Prevent the default form submission behavior

    (function () {
        emailjs.init("64DSsWc6XiC7IF-of"); // Account Public key
    })();

    var serviceID = "service_x71mw2v";
    var templateID = "template_1aexbgk";

    var nameField = document.querySelector('#name');
    var emailField = document.querySelector('#email');
    var subjectField = document.querySelector('#subject');
    var messageField = document.querySelector('#message');

    var params = {
        sendername: nameField.value,
        senderemail: emailField.value,
        subject: subjectField.value,
        message: messageField.value
    };

    if (!nameField.value || !emailField.value || !subjectField.value || !messageField.value) {
        alert('Please fill in all fields');
        return;
    }

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('Thank You, ' + params['sendername'] + '! Your Message has been Sent.');

            // Clear form fields after successful submission
            nameField.value = '';
            emailField.value = '';
            subjectField.value = '';
            messageField.value = '';
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('Sorry, something went wrong. Please try again later.');
        });
}

const disabledKeys = ["c", "C", "x", "J", "u", "I"]; // keys that will be disabled
const showAlert = e => {
  e.preventDefault(); // preventing its default behaviour
  return alert("Sorry, you can't view or copy source codes this way!");
}
document.addEventListener("contextmenu", e => {
  showAlert(e); // calling showAlert() function on mouse right click
});
document.addEventListener("keydown", e => {
  // calling showAlert() function, if the pressed key matched to disabled keys
  if((e.ctrlKey && disabledKeys.includes(e.key)) || e.key === "F12") {
    showAlert(e);
  }
});