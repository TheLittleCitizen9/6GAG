import React from 'react';
import './votesBoard.css'

function MostLikedGags(props) {
    let allGags = props.gags
    let mostLikedGags = []
    const getMostLikedGags = function(){
        allGags.sort((a, b) => {
            return (b.votes) - (a.votes)
        })
        
        mostLikedGags = allGags.slice(0, 4)
    }
    
  return (
    <div className="MostLiked">
        <h3>Most Liked Memes</h3>
        {getMostLikedGags()}
      {mostLikedGags.map(gag => (
                    <div className="meme" key={gag.id}>{gag.title} - {gag.votes}</div>
                ))}
    </div>
  );
}

export default MostLikedGags;
