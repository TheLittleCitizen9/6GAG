import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './client/components/header';
import GagList from './client/components/gagList';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import GagItem from './client/components/gag';

function App() {
  // const [gags, setGags] = useState([{id:uuid(), text:"Meme", title:"First Meme", img: 'maxresdefault.jpg'}, 
  //                                 {id:uuid(), text:"Meme", title:"Second Meme", img: 'meme2.jpg'},
  //                                 {id:uuid(), text:"Meme", title:"Third Meme", img: 'maxresdefault.jpg'}])

  // const [gag, setGag] = useState({
  //   id: "",
  //   text: "Meme pic unavailable",
  //   title: "",
  //   img: ""
  // })

  const [gags, setGags] = useState([])

  const addGag = (gag) =>{
    setGags([gag, ...gags])
    console.log(gags)
  }

  const getAllImagesFromServer = function() {axios.get('http://localhost:3001/getAll').then(res => {
    for(var i=0; i<res.data.length; i++){
      console.log(res.data[i])
      var title = res.data[i].split('/')
      var newGag = {
        id: uuid(),
        text: "Meme pic unavailable",
        title: title[title.length-1],
        img:res.data[i]
      }
      console.log(newGag)
      addGag(newGag)
    }
    console.log(gags)
  })}

  const onOpen = (p, g) =>{
    var newWindow = window.open(p, "", "width=600,height=400,left=200,top=200")
    newWindow.document.body.innerHTML = <GagItem key={g.id} gag={g} pic={p} onOpen={onOpen}></GagItem>
  }

  return (
    <div className="App">
      <Header getAllImagesFromServer={getAllImagesFromServer}></Header>
      <GagList gags={gags} onOpen={onOpen}></GagList>
    </div>
  );
}

export default App;
