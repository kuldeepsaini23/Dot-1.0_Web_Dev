import './App.css';
import { useState } from 'react';

function App() {

  // const[firstName, setFirstName] = useState(" ");
  // const[lastName, setlastName] = useState(" ");


  // function changeFirstNameHandler(event){
  //   setFirstName(event.target.value)
  // }

  // function changelastNameHandler(event){
  //   setlastName(event.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "", //*textarea
    isVisible: true, //*Checkbox
    mode :"" ,//*Radio button
    favCar:""
  });

  // console.log(formData);
  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type=== "checkbox"? checked : value 
      }
    });
  }


  function submitHandler(event){
    event.preventDefault();
    //Print
    console.log("printing the entire form ");
    console.log(formData);
  }

  return (
    <div clasName="App">
      <form onSubmit={submitHandler}>

        <input type="text" placeholder="First Name" onChange={changeHandler} name="firstName"
          value={formData.firstName}></input>
        <br></br>
        <input type="text" placeholder="last Name" onChange={changeHandler} name="lastName"
          value={formData.lastName}></input>
        <br></br>
        <input type="email" placeholder="Email" onChange={changeHandler} name="email"
          value={formData.email}></input>

        <br></br>
        <textarea placeholder='Enter your comments here' onChange={changeHandler} name="comments" 
          value={formData.comments}></textarea>

        <br></br>
        <input type="checkbox" onChange={changeHandler} name="isVisible"
          checked={formData.isVisible} id="isVisible"></input>

        <label htmlFor='isVisible'>Am i visible?</label>  


        <br></br>
        <fieldset>
          <legend>Mode</legend>
          <input type="radio" onChange={changeHandler} name="mode"
          value="Online-Mode" id="Online-Mode" checked={formData.mode === "Online-Mode"}></input>

        <label htmlFor='Online-Mode'>Online Mode</label>  

        <input type="radio" onChange={changeHandler} name="mode"
          value="Offline-Mode" id="Offline-Mode" checked={formData.mode === "Offline-Mode"}></input>

        <label htmlFor='Online-Mode'>Offline Mode</label>  
        </fieldset>
      


        {/*Dropdown */}
        <label htmlFor='favCar'>Tell me your favouirte Car</label>
        <select name='favCar' id='favCar' value={formData.favCar} onChange={changeHandler}>
          <option value="scarpio">Scarpio</option>
          <option value="thar">Thar</option>
          <option value="swift">Swift</option>
          <option value="xuv">XUV</option>
        </select>

        
      {/*Submit Button  */}
      {/* <input type="submit" ></input> */}
      <br></br>
      <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
