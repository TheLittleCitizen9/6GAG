import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './client/components/header';
import GagList from './client/components/gagList';
import {v4 as uuid} from 'uuid';

function App() {
  const [gags, setGags] = useState([{id:uuid(), text:"Meme", title:"FirstMeme", img:"./client/components/maxresdefault.jpg"}])

  const [gag, setGag] = useState({
    id: "",
    text: "",
    title: "",
    img: ""
})

  const addTodo = (gag) =>{
    setGags([gag, ...gags])
  }

  return (
    <div className="App">
      <Header></Header>
      <GagList gags={gags}></GagList>
    </div>
  );
}

export default App;
