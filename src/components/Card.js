  import React from "react";
  import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

 
 const Card = (props) => {

    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

      function clickHandler(){
          //logic
          if(likedCourses.includes(course.id)){
            //pehle se like pada hua tha 
            setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
            toast.warning("like removed");
          }
          else{
                //pehle se like nhi hai course
                //insert krna hai likrd courses me
              if(likedCourses.length === 0){
                  setLikedCourses([course.id]);
              }
              else{
                //non-empty pehle se
                setLikedCourses((prev)=> [...prev,course.id])
              }
              toast.success("liked sucess")
          }
      }

  let course=props.course;
   return (
     <div>
         
          <div>
            <img src={course.image.url}></img>

            <div>
              <button onClick={clickHandler}>
                    {
                      likedCourses.includes(course.id) ? 
                      (<FcLike fontSize="1.75rem" />) :
                      (<FcLikePlaceholder fontSize="1.75rem"/>) 
                    }
              </button>
            </div>

          </div>

          <div>
            <p>{course.title}</p>
            <p>
              {
                course.description.length>100 ?
                (course.description.substr(0,100)) +"..." : (course.description)
              }
            </p>
          </div>

      </div>
   )
 }
 
 export default Card;