import React, { useState } from 'react';

function UploadFile(props) {
    const [fileSelected, setFile] = useState(null)
    const [name, setName] = useState("null")

    const fileSelectedHandler = (e) => {
        setFile(e.target.files[0])
    }

    const nameHandler = (e) =>{
        setName(e.target.value)
    }

    const fileUploadHandler = () =>{
        props.uploadFile(fileSelected, name)
    }
  return (
    <div className="uploadFile">
        <input type="file" onChange={fileSelectedHandler}></input>
        <input className="name" type="text" placeholder="Enter Name" onChange={nameHandler}></input>
        <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
}

export default UploadFile;
