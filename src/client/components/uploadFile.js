import React from 'react';

function UploadFile(props) {
    const fileSelectedHandler = (e) => {
        props.uploadFile(e.target.files[0])
    }
  return (
    <div className="uploadFile">
        <input type="file" onChange={fileSelectedHandler}></input>
    </div>
  );
}

export default UploadFile;
