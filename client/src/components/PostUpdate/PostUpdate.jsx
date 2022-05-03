import React, { useState, useEffect } from 'react';
import './PostUpdate.css';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_POST } from '../../utils/mutations';
import { GET_SINGLE_POST } from '../../utils/queries';
import { Navigate, useParams } from 'react-router-dom';
import Auth from '../../utils/auth';

const UpdatePostForm = () => {
  const [postContent, setPostContent] = useState({ title: '', content: '' });
  const [image, setImage] = useState('');
  const [updatePost, {}] = useMutation(UPDATE_POST);
  const params = useParams();
  const postId = params.postId;
  const { data, error, loading } = useQuery(GET_SINGLE_POST, { variables: { id: postId } });

  const post = data?.getPost || {};

  useEffect(() => {
    if (post.title && post.content) {
      setPostContent(post);
    }
  }, [post]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
      console.log(postContent);
      const { data } = await updatePost({
        variables: { ...postContent, picture: newImageUrl, postId: postId },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostContent({ ...postContent, [name]: value });
  };

  return (
    <section className="post-update-container">
      {Auth.loggedIn() ? (
        <>
          <h1 className="update-post-h1">Update your post</h1>
          <div className="update-post-form-container">
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
                className="update-post-title"
                onChange={handleInputChange}
                value={postContent.title || ''}
              />
              <input
                type="textarea"
                placeholder="Enter your post content"
                name="content"
                className="update-post-content"
                onChange={handleInputChange}
                value={postContent.content || ''}
              />
              <input type="submit" className="submit-btn" value="Update" />
            </form>
          </div>
        </>
      ) : (
        <div>NOT LOGGED IN</div>
      )}
    </section>
  );
};

export default UpdatePostForm;
