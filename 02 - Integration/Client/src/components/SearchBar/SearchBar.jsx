import { useState } from "react";

import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
   const { onSearch } = props
   const [id, setId ] = useState('')
  

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSearch = ()=>{
      onSearch(id);
   }

   const enter = (event) => {

      if(event.keyCode === 13){
         handleSearch();
         event.target.value = ""
      }
    }

   return (
      
         
         <div className={styles.inputAndBtn} >
            <input 
            className={styles.input}
            type='text' 
            placeholder="Search character..." 
            
            onChange= {handleChange}
            onKeyDown={enter}
            // relacionamos el estado local
            
            />
            <button className={styles.btn} 
            
            onClick={handleSearch }>
               +
            </button>
         </div>
      
   );
}