import React from 'react'
import './TraitItem.css';


const TraitItem = ({trait}) => {;
  
  return (
    <>
        <div className='trait-item'>
            <h4 className='trait-name'>{trait.name}: </h4>
            <p>{trait.desc}</p>
        </div>

    </>
  )
}

export default TraitItem;