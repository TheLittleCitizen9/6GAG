import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './client/components/header';
import GagList from './client/components/gagList';
import {v4 as uuid} from 'uuid';
import GagItem from './client/components/gag';

function App() {
  const [gags, setGags] = useState([{id:uuid(), text:"Meme", title:"First Meme", img: 'maxresdefault.jpg'}, 
                                  {id:uuid(), text:"Meme", title:"Second Meme", img: 'meme2.jpg'},
                                  {id:uuid(), text:"Meme", title:"Third Meme", img: 'maxresdefault.jpg'}])

  const [gag, setGag] = useState({
    id: "",
    text: "Meme pic unavailable",
    title: "",
    img: ""
  })

  const onOpen = (p, g) =>{
    var newWindow = window.open(p, "", "width=600,height=400,left=200,top=200")
    newWindow.document.body.appendChild(<GagItem key={g.id} gag={g} pic={p} onOpen={onOpen}></GagItem>)
  }

  const addTodo = (gag) =>{
    setGags([gag, ...gags])
  }

  return (
    <div className="App">
      <Header></Header>
      <GagList gags={gags} onOpen={onOpen}></GagList>
    </div>
  );
}

export default App;
