import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    streetAdrress:"",
    city:"",
    state: "",
    postalCode:"",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification:""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }


  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
  }


  return (
    <div className="flex flex-col items-center mt-2 gap-4">
      <form className="flex flex-col gap-2" onSubmit={submitHandler}>
        {/* FirstName */ }
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter Your Name"
          value={formData.firstName}
          onClick={changeHandler}
          className="outline"
        />

        {/* LastName */}
        <br></br>
        <label htmlFor="lastName">lastName</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter Your Last Name"
          value={formData.lastName}
          onClick={changeHandler}
          className="outline"
        />

         {/* Mail */}
        <br></br>
        <label htmlFor="emailName">E-mail</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Mail"
          value={formData.email}
          onClick={changeHandler}
          className="outline"
        />

         {/* Dropdown */}
        <br></br>
        <label htmlFor="country"></label>
        <select id="country" name="country" value={formData.country} className="outline">
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

         {/* Street address */}
        <br></br>
        <label htmlFor="streetAdrress">Street Address</label>
        <input
          type="text"
          name="streetAdrress"
          id="streetAdrress"
          placeholder="Enter Your Address"
          value={formData.streetAdrress}
          onClick={changeHandler}
          className="outline"
        />

         {/* City */}
        <br></br>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter Your City"
          value={formData.city}
          onClick={changeHandler}
          className="outline"
        />

         {/* State */}
        <br></br>
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Enter Your State"
          value={formData.state}
          onClick={changeHandler}
          className="outline"
        />

         {/* Postal Code */}
        <br></br>
        <label htmlFor=" postalCode">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Enter Your Postal Code"
          value={formData.postalCode}
          onClick={changeHandler}
          className="outline"
        />

       {/* checkbox */}
      <fieldset className="flex gap-1">
        <legend>By Email</legend>

       
          <input id="comments" name="comments" type="checkbox" checked={formData.comments} onChange={changeHandler}/>
          <label htmlFor="comments">Comments</label>
          <p></p>
       
          <br></br>
          <input id="candidates" name="candidates" type="checkbox" checked={formData.candidates} onChange={changeHandler}/>
          <label htmlFor="candidates">Candidates</label>
          <p></p>
          <br></br>
          <input id="offers" name="offers" type="checkbox" checked={formData.offers} onChange={changeHandler}/>
          <label htmlFor="offers">Offers</label>
          <p></p>

      </fieldset>
      <br></br>

       {/* Radio button */}
       <fieldset>
        <legend>Push Notification</legend>

        <input id="pushEverything" name="pushNotification" type="radio" value="Push Everuthing" onChange={changeHandler}/>
        <label htmlFor="pushEverything">Push Everything</label>
        <br></br>

        <input id="pushEmail" name="pushNotification" type="radio" value="Same as email" onChange={changeHandler}/>
        <label htmlFor="pushEmail">Push E-mail</label>
        <br></br>

        <input id="pushNothing" name="pushNotification" type="radio" value="No Push" onChange={changeHandler}/>
        <label htmlFor="pushNothing">No Push Notification</label>

       </fieldset>
       

       <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-sm">Save</button>

      </form>
    </div>
  );
}

export default App;
