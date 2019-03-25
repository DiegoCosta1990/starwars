import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflowY:'scroll', border: '8px dotted blue', height: '700px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;