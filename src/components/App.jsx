import { useEffect, useState } from 'react'
import '../css/App.css'

import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NotFound from './NotFound'
function App() {
  //javascript
  const [search, setSearch]=useState("")
  const[error,setError]=useState("")
  const[characters, setcharacters]=useState([])/* cuando se cambia la variable tiene que vovle a renderizar para que se vean los cambia */
  useEffect(()=>{/* cuantas veces queremos que se ejecute una funcion*/
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
  .then(resp=>resp.json())
  .then(data=>{
    console.log(data.results);
    /*if(data.results){
      setcharacters(data.results);
    }
    else{
      setcharacters([])
    }*/
    //condincion?algo:otracosa
    setcharacters(data.results?data.results:[])
    setError(data.error?`No existe el personaje ${search}`:"")
  })
  },[search])
  /* 
  []-> se ejuta una sola vez al cargar el componente
  [varstate1] [varstate2]--> la funcion del useEffect se ejecuta cada vez que cambien el valor 
  */
  return (  
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home setSearch={setSearch} error={error} info={characters}/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/*'element={<NotFound/>}/>
      </Routes> 
    </>
  )
}

export default App
/*<h1>Api de Rick and Morty</h1>
          <Form setSearch={setSearch} error={error}/>
          <List info={characters}/> */