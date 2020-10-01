import React from 'react';
import './gagDesign.css'

function GagItem(props) {
  const png = props.gag.img
  
  const onOpen = () => {
      props.onOpen(png, props.gag)
  }

  const onLike = () => {
    props.onLike(props.gag)
  }

  const onDislike = () => {
    props.onDislike(props.gag)
  }

  return (
    <div className="col-md-3 gagItem">
        <p onClick={onOpen}>{props.gag.title}</p>
        <div className="row">
          <div className="col-md-6">
            <img src={png} alt={props.gag.text} onClick={onOpen}></img>
          </div>
          <div className="col-md-2">
            <button onClick={onLike}>Like</button>
          </div>
          <div className="col-md-2">
            <button onClick={onDislike}>Dislike</button>
          </div>
          <div className="col-md-2">{props.gag.likes-props.gag.dislikes}</div>
        </div>
        
    </div>
  );
}

export default GagItem;
