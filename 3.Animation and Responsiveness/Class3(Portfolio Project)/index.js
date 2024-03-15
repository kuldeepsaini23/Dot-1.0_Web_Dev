const button = document.getElementById("btn");
const arrowButton = document.getElementById("arrow-button");


button.addEventListener("click",(e)=>{
  e.preventDefault();
  // document.body.style.backgroundColor = "black";
  Swal.fire({
    title: '<strong>Info!</strong>',
    icon: 'info',
    html:
      '<b>This Button will work Soon</b>',
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
  })
});

function myFunction() {

  arrowButton.classList.toggle("icon");
  var x = document.getElementById("myDIV");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Video Play on hover
// const video = document.getElementsByClassName("video");

// video.addEventListener("mouseenter", function () {
//   video.play();
// });

// video.addEventListener("mouseleave", function () {
//   video.pause();
// });



//FormSubmission
var subbtn = document.getElementById("submit-btn");

subbtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");

  var username = document.getElementById("username").value;
  var email = document.getElementById("mail").value;
  var subject = document.getElementById("subject").value;
  const msg = document.getElementById("msg").value;
  var body =
    "Name:" +
    username +
    "\n\n" +
    "Email:" +
    email +
    "\n\n" +
    "Subject:" +
    subject +
    "\n\n" +
    "Message:" +
    msg;

  if (!username) {
    Swal.fire("Error!", "Please Fill out your Name", "warning");
  } else if (!email) {
    Swal.fire("Error!", "Please Fill out your Email", "warning");
  } else if (!subject) {
    Swal.fire("Error!", "Please Fill out your Subject", "warning");
  } else if (!msg) {
    Swal.fire("Error!", "Please Fill out your Message", "warning");
  } else {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "aktdeku@gmail.com",
      Password: "C8D9765FF5E1F288848387CADE0673F4CC06",
      To: "aktdeku@gmail.com",
      From: "aktdeku@gmail.com",
      Subject: "ContactMe Form",
      Body: body,
    }).then((message) => Swal.fire("Good job!", "Message Sent", "success"));
    console.log("sent");
  }
});

