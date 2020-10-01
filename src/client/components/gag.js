import React from 'react';
import './gagDesign.css'

function GagItem(props) {
  const png = props.gag.img
  const likeDisabled = window.localStorage.getItem(`like-${props.gag.title}`) ? true : false
  const dislikeDisabled = window.localStorage.getItem(`dislike-${props.gag.title}`) ? true : false
  
  const onOpen = () => {
      props.onOpen(png, props.gag)
  }

  const onLike = (e) => {
    window.localStorage.setItem(`like-${props.gag.title}`, true)
    props.onLike(props.gag)
  }

  const onDislike = (e) => {
    window.localStorage.setItem(`dislike-${props.gag.title}`, true)
    props.onDislike(props.gag)
  }


  return (
    <div className="col-md-3 gagItem">
        <p onClick={onOpen}>{props.gag.title}</p>
        <div className="row">
          <div >
            <img src={png} alt={props.gag.text} onClick={onOpen}></img>
          </div>
          <div >
            <button id="like" onClick={onLike} disabled={likeDisabled}>Like</button>
          </div>
          <div>
            <button id="dislike" onClick={onDislike} disabled={dislikeDisabled}>Dislike</button>
          </div>
          <div className="votes">{props.gag.votes}</div>
        </div>
        
    </div>
  );
}

export default GagItem;
