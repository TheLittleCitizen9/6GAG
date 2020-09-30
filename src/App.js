import React, { useState } from 'react';
import './App.css';
import Header from './client/components/header';
import GagList from './client/components/gagList';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import GagItem from './client/components/gag';
import UploadFile from './client/components/uploadFile';

function App() {

  const [gags, setGags] = useState([])

  const getAllImagesFromServer = function() {axios.get('http://localhost:3001/getAll').then(res => {
    var allGags = []
    for(var i=0; i<res.data.length; i++){
      var title = res.data[i].split('/')
      var newGag = {
        id: uuid(),
        text: "Meme pic unavailable",
        title: title[title.length-1],
        img:res.data[i]
      }
      allGags.push(newGag)
    }
    setGags(allGags)
  })}

  const uploadFile = (file, name) =>{
    const fd = new FormData()
    fd.append('profile', file, file.name)
    fd.append('name', name)
    axios.post('http://localhost:3001/upload', fd)
  }

  const onOpen = (p, g) =>{
    var newWindow = window.open(p, "", "width=600,height=400,left=200,top=200")
    newWindow.document.body.innerHTML = <GagItem key={g.id} gag={g} pic={p} onOpen={onOpen}></GagItem>
  }

  return (
    <div className="App">
      <Header getAllImagesFromServer={getAllImagesFromServer}></Header>
      <UploadFile uploadFile={uploadFile}></UploadFile>
      <GagList gags={gags} onOpen={onOpen}></GagList>
    </div>
  );
}

export default App;
