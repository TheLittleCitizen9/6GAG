import { render } from '@testing-library/react'
import React from 'react'
import GagItem from './gag'

function GagList(props){
    return(
        <div className="container">
            <div className="row">
                {props.gags.map(gag => (
                    <GagItem key={gag.id} gag={gag} onOpen={props.onOpen}></GagItem>
                ))}
            </div>
        </div>
        
    )
}

export default GagList