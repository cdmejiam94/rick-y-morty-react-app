import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className='row'>
        {characters.map((item, index) => (
            <div key={index} className='col mb-4'>
                <div className='card' style={{minWidth: "200px"}}>
                    <img src={item.image} alt=''/>
                    <hr/>
                    <div className='card-body'>
                        <h5 className='card-title text-uppercase'>
                            {item.name}
                        </h5>
                    </div>
                </div>
            </div>
        ))}        
    </div>
  )
}

export default Characters