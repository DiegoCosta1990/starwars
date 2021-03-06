import React from 'react';
import '../index.css';

const Card = ({ name, height, gender, hair_color }) => {
    return(
        <div className= 'tc dib br3 pa5 ma2 grow bw2 shadow-5 background'>
            <div>
              <h2><u><i><b>Name</b></i></u>: {name}</h2>
              <p>Gender: {gender}</p>
              <p>Height: {height}</p>
              <p>Hair color: {hair_color}</p>
            </div>            
        </div>
    )
}

export default Card;