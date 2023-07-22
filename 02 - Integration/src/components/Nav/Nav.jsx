import SearchBar from "../SearchBar/SearchBar"
import Favorites from "../Favorites/Favorites"
import styles from "./Nav.module.css"
import React from 'react';
import { Link } from 'react-router-dom';



const Nav = (props) => {
    const { onSearch } = props
    return (
        <>
            
            <SearchBar onSearch= {onSearch}>
            <NavItems></NavItems>
            </SearchBar>
            
            
            
        </>
    )
}

function NavItems() {
    return (
         <> 
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
            
        </>
    );
  }

export default Nav