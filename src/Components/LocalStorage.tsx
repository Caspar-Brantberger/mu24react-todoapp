import {useState,useEffect} from 'react'

import React from 'react'

function LocalStorage() {
    const [storageData,setStorageData]= useState([]);

    

    useEffect(() => {
        if(localStorage.getitem('todos')){
            setStorageData(JSON.parse(localStorage.getitem('todos') as string))
        }
    },[]) 
   
  return (
    <>
             {
              storageData.map(todo => {
                return (
                <> 
                 <h3>{todo.title}</h3>
                 <p>{todo.text}</p>
                </>
                )
              })
             }
    
    
    </>
    
  )
}

export default LocalStorage