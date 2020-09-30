import React from 'react';
import './headerDesign.css';

function Header(props) {
    const getAllImagesFromServer = function(){
        props.getAllImagesFromServer()
    }
    

  return (
    <div className="Header">
      <h1>6GAG</h1>
      <button onClick={getAllImagesFromServer}>GetAllMemes</button>
    </div>
  );
}

export default Header;
