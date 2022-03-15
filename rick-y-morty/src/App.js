import { useEffect, useState,  } from 'react';
import axios from 'axios'
import Characters from './components/Characters';
import FormComponent from './components/FormComponent';
import CharacterContext from './context/CharacterContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState([])

  const getCharacters = async () => {
    await axios.get('https://rickandmortyapi.com/api/character')
    .then((result) => {
      setInfo(result.data.info)
      setCharacters(result.data.results)
    })
  } 

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <>
    <CharacterContext.Provider value={characters}>
      <Router>
        <Routes>
          <Route path="/update" element={<FormComponent/>}/>
          <Route path="/" element={<Characters/>}/>
        </Routes>
      </Router>
    </CharacterContext.Provider>
    </>
  );
}

export default App;
