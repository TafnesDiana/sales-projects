"use server"

export const fetchProducts = async() =>{
    return await fetch("http://localhost:3001/products").then(
       async (response)=>{
           return await response.json();
       }
   ) 
}

