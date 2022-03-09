import { useEffect, useState } from 'react';
import axios from 'axios'
import Characters from './components/Characters';

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

  const changeText = (item) => {
    document.getElementById(item.name + item.id).innerHTML = "Charlie"
  }

  const deleteItem = (item) => {
    document.getElementById(item.id).innerHTML = ""
  }

  useEffect(() => {
    getCharacters()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rick y Morty App
        </p>
      </header>
      <div className='container'>
        {/* <Characters characters={characters}/> */}
        <div className='row'>
        {characters.map((item, index) => (
            <div key={index} className='col mb-4' id={item.id}>
                <div className='card' style={{minWidth: "200px"}}>
                    <img className='p-2' src={item.image} alt=''/>
                    <hr/>
                    <div className='card-body'>
                        <h5 className='card-title text-uppercase m-1' id={item.name + item.id}>
                            {item.name}
                        </h5>
                        <button type='button' className='btn btn-primary m-1' onClick={() => {changeText(item)}}>
                          Update  
                        </button>
                        <button type='button' className='btn btn-danger m-1' onClick={() => {deleteItem(item)}}>
                          Delete  
                        </button>
                    </div>
                </div>
            </div>
        ))}        
    </div>
      </div>
    </div>
  );
}

export default App;
