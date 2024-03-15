const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const followModal = document.querySelector(".modal-follow");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  followModal.classList.remove("active");
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

const openFollowModal = () => {
  console.log("Modal is Open");
  followModal.classList.add("active");
  overlay.classList.add("overlayactive");
};



// Copy to clipboard
function copyLinkToClipboard() {
  const websiteUrl = "https://kuldeepsaini23.github.io/ProfileModal/"; // Replace with your website URL
  const copyText = document.createElement("textarea");
  copyText.value = websiteUrl;
  document.body.appendChild(copyText);
  copyText.select();
  document.execCommand("copy");
  document.body.removeChild(copyText);
  const toastMessage = document.createElement("div");
  toastMessage.innerHTML = "Link copied to clipboard!";
  document.body.appendChild(toastMessage);
  setTimeout(function() {
    document.body.removeChild(toastMessage);
  }, 2000);
}

async function alert() {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-left',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })
  await Toast.fire({
    icon: 'success',
    title: 'Link Copied to Clipboard'
  })
}


//! Some Js function to copy to clip board

// <a href="#" onclick="navigator.clipboard.writeText('https://example.com').then(function() { alert('Link copied to clipboard!'); }).catch(function() { alert('Failed to copy link to clipboard!'); }); return false;">Copy Link</a>
