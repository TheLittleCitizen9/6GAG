import React from 'react';
import './gagDesign.css'

function GagItem(props) {
  const png = require('./images/'+props.gag.img)
  
  const onOpen = () => {
      props.onOpen(png, props.gag)
  }

  return (
    <div className="col-md-3 gagItem">
        <p onClick={onOpen}>{props.gag.title}</p>
        <img src={png} alt={props.gag.text} onClick={onOpen}></img>
    </div>
  );
}

export default GagItem;
