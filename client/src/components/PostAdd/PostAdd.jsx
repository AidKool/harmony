import React, { useState } from 'react';
import './PostAdd.css';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const [postContent, setPostContent] = useState({ title: '', content: '' });
  const [image, setImage] = useState('');
  const [addPost, { error, data }] = useMutation(ADD_POST);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(postContent);
    const imageFormData = new FormData();
    imageFormData.append('file', image);
    imageFormData.append('upload_preset', 'harmony');
    imageFormData.append('cloud_name', 'mattglwilliams');
    const settings = { method: 'POST', body: imageFormData };
    try {
      const fetchData = await fetch('https://api.cloudinary.com/v1_1/mattglwilliams/image/upload', settings);
      const resData = await fetchData.json();
      console.log(resData.url);
      const newImageUrl = await resData.url;
      const userId = Auth.getProfile().data._id;
      const { data } = await addPost({
        variables: { ...postContent, picture: newImageUrl, accountId: userId },
      });
    } catch (e) {
      console.log(e);
    }
    navigate('/my-posts');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostContent({ ...postContent, [name]: value });
  };

  return (
    <section className="post-add-container">
      {Auth.loggedIn() ? (
        <>
          <h1 className="new-post-title">Add a new post</h1>
          <div className="add-post-form-container">
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="image-file" className="file-upload-label">
                Upload an image
              </label>
              <input
                type="file"
                name="image-file"
                className="upload-image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <input
                type="text"
                placeholder="Enter your post title"
                name="title"
                className="add-post-title"
                onChange={handleInputChange}
                value={postContent.title}
              />
              <textarea
                type="text"
                placeholder="Enter your post content"
                name="content"
                className="add-post-content"
                onChange={handleInputChange}
                value={postContent.content}
              />
              <input type="submit" className="submit-btn" />
            </form>
          </div>
        </>
      ) : (
        <div>NOT LOGGED IN</div>
      )}
    </section>
  );
};

export default AddPostForm;
