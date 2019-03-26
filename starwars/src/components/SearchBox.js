import React from 'react';
import 'tachyons';
import '../index.css'

const SearchBox = ({searchChange}) => {
    return(
        <div className='pa2'>
            <input 
            className='pa3 ba b--green w-60 imputcolor'
            type='search' 
            placeholder='Search Star Wars people'
            onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;
