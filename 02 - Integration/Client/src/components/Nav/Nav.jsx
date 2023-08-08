import SearchBar from "../SearchBar/SearchBar"
import imageLogo from '../../img/logoNav.png'
import Favorites from "../Favorites/Favorites"
import styles from "./Nav.module.css"
import React from 'react';
import { Link } from 'react-router-dom';



const Nav = (props) => {
    const { onSearch, currentPath } = props
    if (currentPath==="/favorites") {
        return (
        <div className={styles.container}>
            <Link className={styles.link} to="/favorites">
                <button className={styles.btn}>Favorites</button>
            </Link>

            <Link  className={styles.link} to="/about">
                <button className={styles.btn}>    
                    About
                </button>    
            </Link>
            <Link className={styles.link}  to="/home">
                <button className={styles.btn}>  
                    Home
                </button> 
            </Link>
            <img src={imageLogo} className={styles.image}/>
        </div>
        )
    }
    else{
        return (
            <div className={styles.container}>
               <SearchBar onSearch={onSearch}/> 
               <Link className={styles.link} to="/favorites">
                   <button className={styles.btn}>Favorites</button>
               </Link>
           
               <Link  className={styles.link} to="/about">
                   <button className={styles.btn}>    
                       About
                   </button>    
               </Link>
               <Link className={styles.link}  to="/home">
                   <button className={styles.btn}>  
                       Home
                   </button> 
               </Link>
               <img src={imageLogo} className={styles.image}/>
            </div>
       
       );
    }
}

function NavItems(currentPath, onSearch) {
    


    
}

export default Nav