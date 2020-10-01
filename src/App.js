import React, { useState } from 'react';
import './App.css';
import Header from './client/components/header';
import GagList from './client/components/gagList';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import GagItem from './client/components/gag';
import UploadFile from './client/components/uploadFile';
import MostLikedGags from './client/components/mostLikedGags';

function App() {

  const [gags, setGags] = useState([])

  const getAllImagesFromServer = function() {axios.get('http://localhost:3001/getAll').then(res => {
    var allGags = []
      for(var key in res.data){
        var title = key.split('/')
        var newGag = {
          id: uuid(),
          text: "Meme pic unavailable",
          title: title[title.length-1],
          img:key,
          votes: res.data[key]
        }
        allGags.push(newGag)
      }
    setGags(allGags)
  })}

  const uploadFile = (file, name) =>{
    const fd = new FormData()
    fd.append('profile', file, file.name)
    fd.append('name', name)
    axios.post('http://localhost:3001/upload', fd).then(alert('Meme uploaded succssefully'))
    setTimeout(function() {
      getAllImagesFromServer()
    }, 500);
    
  }

  const onLike = (gag) => {
    const fd = new FormData()
    fd.append('img', gag.img)
    axios.put('http://localhost:3001/like', {'img':gag.img})
    setTimeout(function() {
      getAllImagesFromServer()
    }, 500);
  }

  const onDislike = (gag) => {
    const fd = new FormData()
    fd.append('img', gag.img)
    axios.put('http://localhost:3001/dislike', {'img':gag.img})
    setTimeout(function() {
      getAllImagesFromServer()
    }, 500);
  }

  const onOpen = (p, g) =>{
    var newWindow = window.open(p, "", "width=600,height=400,left=200,top=200")
    newWindow.document.body.innerHTML = <GagItem key={g.id} gag={g} pic={p} onOpen={onOpen}></GagItem>
  }


  return (
    <div className="App">
      <div className="row">
        <Header getAllImagesFromServer={getAllImagesFromServer}></Header>
        <UploadFile uploadFile={uploadFile} getAllImagesFromServer={getAllImagesFromServer}></UploadFile>
        <MostLikedGags gags={gags}></MostLikedGags>
      </div>
      <div className="row">
        <div className="col-md-8">
          <GagList gags={gags} onOpen={onOpen} onLike={onLike} onDislike={onDislike}></GagList>    
        </div>
      </div>
      
    </div>
  );
}

export default App;
