import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons


const Link = (props) => {
    const{name,link} =props.router
    return (
        <div>
            
               <li className='mr-14'>
                   <a href={link}>{name}</a>
               </li>
              
        
        </div>
    );
};

export default Link;