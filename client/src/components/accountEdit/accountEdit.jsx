import './accountEdit.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { BsEmojiAngry } from 'react-icons/bs';
import { useMutation } from '@apollo/client';
import { UPDATE_ACCOUNT } from '../../utils/mutations';
import Auth from '../../utils/auth';

export default function App() {
  const [updateAccount, { error, data }] = useMutation(UPDATE_ACCOUNT);
  const [image, setImage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    console.log('formData', formData);
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
      const { data } = await updateAccount({
        variables: { ...formData, picture: newImageUrl },
      });
    } catch (e) {
      console.log(e);
    }
  };

  //get profiles from params
  const params = useParams();
  const accountId = params.profileId;
  // console.log(accountId);
  // decode JWT
  const userToken = localStorage.getItem('id_token');
  const jwtToken = JSON.parse(atob(userToken.split('.')[1]));
  const jwtId = jwtToken.data._id;
  const jwtUsername = jwtToken.data.username;

  if (jwtId === accountId) {
    return (
      <>
        <div class="editContainer">
          {Auth.loggedIn() ? (
            <form class="editForm" onSubmit={handleSubmit(onSubmit)}>
              <p class="loggedIn"> Currently logged in as {jwtUsername}</p>

              <input type="file" onChange={(e) => setImage(e.target.files[0])} />
              <input type="text" placeholder="bio" {...register('bio', {})} />
              <select {...register('location')}>
                <option value="6262d041d6300e64987d8e73">Manchester</option>
                <option value="6262d041d6300e64987d8e74">Leicester</option>
                <option value="6262d041d6300e64987d8e75">Leeds</option>
              </select>
              <select {...register('genres')} multiple>
                <option value="Blues">Blues</option>
                <option value="Classic Rock">Classic Rock</option>
                <option value="Country">Country</option>
                <option value="Dance">Dance</option>
                <option value="Disco">Disco</option>
                <option value="Funk">Funk</option>
                <option value="Grunge">Grunge</option>
                <option value="Hip-hop">Hip-hop</option>
                <option value="Jazz">Jazz</option>
                <option value="Metal">Metal</option>
                <option value="Pop">Pop</option>
                <option value="R&B">R&B</option>
                <option value="Rap">Rap</option>
              </select>
              <input
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full subBtn"
                type="submit"
              />
            </form>
          ) : (
            <p>You need to be logged in to edit your profile details</p>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div class="editContainer">
        <div class="noAccessContainer">
          <span class="icon text-9xl">
            <BsEmojiAngry />
          </span>
          <p class="noAccess">Tsk Tsk! This isn't your page to edit friend!</p>
        </div>
      </div>
    );
  }
}
