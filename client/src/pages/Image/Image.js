import React, { useState } from 'react';
import './image.css';

function Image() {
  const [image, setImage] = useState('');
  const [imageUrl, setImageUrl] = useState('NOTHING');
  const postDetails = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'harmony');
    data.append('cloud_name', 'mattglwilliams');
    fetch('https://api.cloudinary.com/v1_1/mattglwilliams/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.url);
        // console.log(data);
      })
      .then(console.log(imageUrl))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Uplaod Image</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className="btn waves-effect waves-light #64b5f6 blue darken-1" onClick={() => postDetails()}>
        Submit post
      </button>
    </>
  );
}

export default Image;
