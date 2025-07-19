 import React from 'react'
 
 function Filter(props) {
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;

      function fiterHandler(title){
            setCategory(title);
     }

   return (
     <div className='w-11/12 flex flex-wrap max-w-max 
     space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        
            {filterData.map((data)=>{
                return(
                <button key={data.id}  onClick={() => fiterHandler(data.title)}>
                    {data.title}
                </button>
                )
            })}
     </div>
   )
 }
 
 export default Filter