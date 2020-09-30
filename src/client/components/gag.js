import React from 'react';
import './gagDesign.css'

function GagItem(props) {
  //const pic = require(props.gag.img)
  const onOpen = () => {
      props.onOpen(props.pic, props.gag)
  }

  return (
    <div className="col-md-4">
        <p onClick={onOpen}>{props.gag.title}</p>
        <img src={props.pic} alt={props.gag.text} onClick={onOpen}></img>
    </div>
  );
}

export default GagItem;
