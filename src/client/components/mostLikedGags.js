import React from 'react';
import './votesBoard.css'

function MostLikedGags(props) {
    let allGags = props.gags
    let mostLikedGags = []
    const getMostLikedGags = function(){
        allGags.sort((a, b) => {
            return (b.likes-b.dislikes) - (a.likes-a.dislikes)
        })
        
        mostLikedGags = allGags.slice(0, 4)
    }
    
  return (
    <div className="MostLiked">
        <h3>Most Liked Memes</h3>
        {getMostLikedGags()}
      {mostLikedGags.map(gag => (
                    <div className="meme" key={gag.id}>{gag.title} - {gag.likes-gag.dislikes}</div>
                ))}
    </div>
  );
}

export default MostLikedGags;
