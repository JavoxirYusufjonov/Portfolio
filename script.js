// toggle icon navbar
//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

//scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //active sections for animation on scroll
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
  //sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

document.addEventListener('DOMContentLoaded', function() {
  var sendEmailBtn = document.getElementById('sendEmailBtn');
  sendEmailBtn.addEventListener('click', function() {
      var username = document.getElementById('Name').value;
      var email = document.getElementById('email').value;
      var phoneNumber = document.getElementById('phoneNumber').value;
      var emailSubject = document.getElementById('emailSubject').value;
      var message = document.getElementById('message').value;

      var messageContent = `Sender's Name: ${username}\nSender's Email: ${email}\nPhone Number: ${phoneNumber}\nEmail Subject: ${emailSubject}\n\n${message}`;

      var data = {
          service_id: 'javoxir',
          template_id: '937021783',
          user_id: 'emWDZ_S6BDM2Ho7Nr',
          template_params: {
              'message': messageContent,
              'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
          }
      };

      axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
          headers: {
              'Content-Type': 'application/json'
          }
      })     
    //   .then(function() {
    //     var alertBox = document.createElement("div");
    //     alertBox.classList.add("alert-box");
    
    //     var messageText = document.createElement("span");
    //     messageText.textContent = "Your email sent! ";
    
    //     var icon = document.createElement("i");
    //     icon.classList.add("bx", "bx-message-square-check");
    
    //     messageText.appendChild(icon);
    //     alertBox.appendChild(messageText);
    
    //     var contactSection = document.getElementById("contact");
    //     contactSection.appendChild(alertBox);
    
    //     setTimeout(function() {
    //         alertBox.remove();
    //     }, 2500);
    // }).catch(function(error) {
    //     alert('Oops... ' + JSON.stringify(error));
    // });
    .then(function() {
      var username = document.getElementById('Name').value;
      var email = document.getElementById('email').value;
      var phoneNumber = document.getElementById('phoneNumber').value;
      var emailSubject = document.getElementById('emailSubject').value;
      var message = document.getElementById('message').value;
    
      // Check if any input is empty
      if (username.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || emailSubject.trim() === "" || message.trim() === "") {
        var alertBox = document.createElement("div");
        alertBox.classList.add("alert-box");
        alertBox.innerHTML = "don't joke! &#128545;";
    
        var contactSection = document.getElementById("contact");
        contactSection.appendChild(alertBox);
    
        setTimeout(function() {
          alertBox.remove();
        }, 3000);
    
        return; // Stop further execution
      }
    
      var alertBox = document.createElement("div");
      alertBox.classList.add("alert-box");
    
      var messageText = document.createElement("span");
      messageText.textContent = " Message sent! ";
    
      var icon = document.createElement("i");
      icon.classList.add("bx", "bx-message-square-check");
    
      messageText.appendChild(icon);
      alertBox.appendChild(messageText);
    
      var contactSection = document.getElementById("contact");
      contactSection.appendChild(alertBox);
    
      setTimeout(function() {
        alertBox.remove();
      }, 2500);
    }).catch(function(error) {
      alert('Oops... ' + JSON.stringify(error));
    });
  });
});


const formToReset = document.getElementById('form');
formToReset.addEventListener('submit', (e) => {
   e.preventDefault();
   formToReset.reset();
  
});
 
