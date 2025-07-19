import React from 'react'
import Card from './Card'
import {useState} from 'react';


const Cards=(props) => {

  let courses=props.courses;
  let category=props.category;

  const[likedCourses,setLikedCourses]=useState([]);

  //it returns you a list of all courses received from the api response
    const getCourses = ()=>{
      if(category === "All"){
      // console.log(courses);
      let allCourses=[];
      Object.values(courses).forEach(array=>{
          array.forEach(courseData =>{
              allCourses.push(courseData);
          })
      })
      return allCourses;
      }
      else{
        //mai sirf specific category ka data pass karunga
          return courses[category];
      }
    }



   return (
     <div>
        {
            getCourses().map((course)=>{
              return <Card key={course.id} course={course}
               likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            })
         }
      </div>
   )
 }
 
 export default Cards