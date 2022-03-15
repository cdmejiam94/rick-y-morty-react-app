import React, { useState } from 'react'
import useCharacter from '../hooks/useCharacter'

const goToUpdate = (item) => {

}

const Characters = () => {

  var characters = useCharacter() 

  const [updatedCharacters, setUpdatedCharacters] = useState([])
  
  const deleteItem = ({id}, list = []) => {
    const newList = list.filter((item) => item.id !== id)
    console.log(newList)
    setUpdatedCharacters(newList)
  }

  return (
    <div className='container' id='carachters-container'>
      {characters ? 
        <div className='row'>
          {characters.map((item, index) => (
              <div key={index} className='col mb-4' id={item.id}>
                  <div className='card' style={{minWidth: "200px"}}>
                      <img className='p-2' src={item.image} alt=''/>
                      <hr/>
                      <div className='card-body'>
                          <h5 className='card-title text-uppercase m-1'>
                              {item.name}
                          </h5>
                          <button type='button' className='btn btn-primary m-1' onClick={() => {goToUpdate(item)}}>
                            Update  
                          </button>                
                          <button type='button' className='btn btn-danger m-1' onClick={() => {deleteItem(item, characters)}}>
                            Delete  
                          </button>
                          <a href='/update'>Update</a>
                      </div>
                  </div>
              </div>
            ))}        
        </div>
      : null}
    </div>
  )
}

export default Characters