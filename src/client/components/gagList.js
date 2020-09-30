import React from 'react'
import GagItem from './gag'

function GagList(props){
    return(
        <div className="row">
            {props.gags.map(gag => (
                <GagItem key={gag.id} gag={gag}></GagItem>
            ))}
        </div>
    )
}

export default GagList