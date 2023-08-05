import { useState } from "react";
import imageLogo from '../../img/logoNav.png'
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
   const { onSearch } = props
   const [id, setId ] = useState('')
   console.log('componente search', id);

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const handleSearch = ()=>{
      onSearch(id);
   }

   const enter = (event) => {

      if(event.keyCode === 13){
         handleSearch();
      }
    }

   return (
      <div className={styles.container} >
         <img className={styles.image} 
            src={imageLogo} 
            //
            alt="logo rick and morty" 
            
         />
         
         {props.children} 
         
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
               Add
            </button>
         </div>
      </div>
   );
}