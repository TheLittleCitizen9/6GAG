import React from 'react'
import GagItem from './gag'

function GagList(props){
    var png = null
    return(
        <div className="container">
            <div className="row">
                {props.gags.map(gag => (
                    png = require('./images/'+gag.img),
                    <GagItem key={gag.id} gag={gag} pic={png} onOpen={props.onOpen}></GagItem>
                ))}
            </div>
        </div>
        
    )
}

export default GagList