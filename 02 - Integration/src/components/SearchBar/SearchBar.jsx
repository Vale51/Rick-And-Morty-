import { useState } from "react";
import imageLogo from '../../img/logoNav.png'
import styles from "./SearchBar.module.css";


export default function SearchBar(props) {
   const { onSearch } = props
   const [id, setId ] = useState('')
   console.log('componente search', id);

   const handleChange = (evento) => {
      setId(evento.target.value)
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
            // relacionamos el estado local
           
            />
            <button className={styles.btn} 
            onClick={()=> onSearch(id) }>
               Add
            </button>
         </div>
      </div>
   );
}