import styles from './styles/App.module.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from "./components/Form/Form"
import Favorites from "./components/Favorites/Favorites"


import { useState, useEffect } from 'react'
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';



function App() {
   
   const [ characters, setCharacters ] = useState([])
    //estado para oscurecer el fondo cuando mouse hover en una Card
   

   const [ access, setAccess ] = useState(false)
   const navigate = useNavigate();
   const location = useLocation();

   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   
   

   function onSearch(id) {
    
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            let idS = []; //arreglo que va a contener las id's actuales
            idS = characters.map((character) => //se guardan las id's de cada character en idS
               character.id
            )
            if (!idS.includes(data.id)) { //si la id de data NO existe en idS
               setCharacters((oldChars) => [...oldChars, data]); //se agrega data
            }
            
            
         } else {
            window.alert('');
         }
      })
      .catch((error) => {
         if (error.response && error.response.status === 404) {
            window.alert('¡No hay personajes con este ID!');
         } else {
            window.alert('Ocurrió un error en la solicitud');
         }
      });
   }

   function onClose(id){
 
      let filteredChars = characters.filter((character) => 
         character.id !== parseInt(id)
      )
      setCharacters(filteredChars);
   }

   

   
   return (
      // className={`${styles.mainDiv} ${darkenBackground ? styles.darkBackground : ''}`}
      
      <div>
         {location.pathname!=="/" && <Nav onSearch={onSearch} currentPath={location.pathname} />}
         
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/favorites" element={<Favorites onClose={onClose} characters={characters} />} />
            <Route path="/home" 
            
            element={<Cards characters={characters} 
            onClose={onClose} 
            />} 
           />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
      
      
   );
}

export default App;
