import React from "react";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import Spinner from "./component/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import { useState, useEffect }  from "react";



const App = () => {

const [courses, setCourses] = useState(null);
const [loading, setLoading] = useState(true);
const [category, setCategory] = useState(filterData[0].title);

async function fetchData() {
  setLoading(true);
  try{
    let response = await fetch(apiUrl);
    let output = await response.json();
    //*Output
    setCourses(output.data);
  
  }
  catch(error){
    toast.error("Network me koi dikkat hai");
  }

  setLoading(false);
}
useEffect(() => {fetchData()}, []);


  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter FilterDataIdTitile={filterData} category = {category} setCategory={setCategory}/>
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards aCourses = {courses} category = {category}/>)
        }
      </div>
    </div>
  );
};

export default App;
