import React from 'react';

function GagItem(props) {
    const onDone = () => {
    }

  return (
    <div className="col-3 gagItem">
        <p onClick={onDone}>{props.gag.title}</p>
        <img src={require(props.gag.img)} alt={props.gag.text}></img>
    </div>
  );
}

export default GagItem;
