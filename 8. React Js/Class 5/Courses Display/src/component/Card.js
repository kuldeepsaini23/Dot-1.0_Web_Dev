import React from 'react'
import {FcLike} from "react-icons/fc";


const Card = (props) => {
  let course = props.oneCourseData;
  return (
    <div>
      <div>
        <img src={course.image.url} alt="Course"></img>
      </div>
      
      <div>
        <button>
          <FcLike/>
        </button>
      </div>

      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  )
}

export default Card