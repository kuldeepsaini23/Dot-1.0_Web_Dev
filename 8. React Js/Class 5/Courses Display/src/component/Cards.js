import React from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.aCourses;
  let category = props.category;

  function getCourses() {
    if(category == "All"){ let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
      //! this is an single array which has data of all the courses
    }
    else{
      // main sirf Specific category ka array pass krugaa
      return courses[category];
    }
   
  }

  return (
    <div>
      {getCourses().map((course) => (
        <Card key={course.id} oneCourseData = {course}/>
      ))}
    </div>
  );
};

export default Cards;
