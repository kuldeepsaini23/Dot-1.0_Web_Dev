const countValue = document.getElementById('counter');

const increment = ()=> {
  //get the value from UI
  // let value = countValue.innerText; in strin form
  let value = parseInt (countValue.innerText);
  //Update the value
  value++;
  //Set the value onto UI
  countValue.innerText = value;

}

const decrement = ()=> {
  //get the value from UI
  // let value = countValue.innerText; in strin form
  let value = parseInt (countValue.innerText);
  //Update the value
  value--;
  //Set the value onto UI
  countValue.innerText = value;

}

