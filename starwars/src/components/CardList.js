import React from 'react';
import Card from '../components/Card';

const CardList = ({ people }) => { 
    return (
        <div>
            {
                people.map((user, i) => {
                    return (<Card key={i} id={people[i].id} name={people[i].name} gender={people[i].gender}  height={people[i].height} hair_color={people[i].hair_color}/>);
                })
            }
        </div>
    );
}                    
export default CardList;