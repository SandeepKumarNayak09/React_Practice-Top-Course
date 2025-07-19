import React from "react";
import  { useEffect,useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {toast} from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
 
  const[courses, setCourses]=useState([]);
  const [loading,setLoading]=useState(true);
  const[category,setCategory]=useState(filterData[0].title)

    async function fetchData(){
      setLoading(true);
      try{
        let response= await fetch(apiUrl);
        let output=await response.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong")
      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();
    },[])

  // useEffect(()=>{
  //   const fetchData= async()=>{
  //     setLoading(true);
  //     try{
  //       const res= await fetch(apiUrl);
  //       const output= await res.json();
  //       //save data into a variable
  //       setCourses(output.data);
  //       // console.log(output); 
  //     }
  //     catch(error){
  //         toast.error("something went wrong"); 
  //     }
  //     setLoading(false);
  //   } 
  //   fetchData();
  // },[])
  
  return (
      <div className="min-h-screen flex flex-col">
        <div>
            <Navbar />
        </div>

        <div>
            <Filter 
            filterData={filterData} 
            category={category}
            setCategory={setCategory}/>
        </div>

        <div className="w-11/12 max-w-[1200px]
        mx-auto flex justify-center items-center min-h-[50vh]">
          {/* <Cards  courses={courses}/> */}
          {
             loading ? (<Spinner />) : 
             (<Cards courses={courses} category={category}/>) 

          }
        </div>

      </div>
  );
}
//55
export default App;
