import './accountEdit.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { BsEmojiAngry } from 'react-icons/bs';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useMutation , useQuery } from '@apollo/client';
import { UPDATE_ACCOUNT } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { QUERY_SINGLE_ACCOUNT} from '../../utils/queries';
import MusicianEdit from '../musicianEdit/musicianEdit';
import BandEdit from '../bandEdit/bandEdit';

export default function App() {
  const [updateAccount, { error, dataAcc }] = useMutation(UPDATE_ACCOUNT);
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
      console.log("resData" , resData.url);
      const newImageUrl = await resData.url;
      const { dataAcc } = await updateAccount({
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
  
  const profilePath = `/profiles/${jwtId}`
//get user query

const { data, errorAcc, loading } = useQuery(QUERY_SINGLE_ACCOUNT, {
    variables: { id: accountId },
  });
  const user= data?.getAccount



  if(data){
  if (jwtId === accountId) {


    
    return (
      <>
        <div className="editContainer">
          {Auth.loggedIn() ? (
            <>
              <div className="editForm">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                  <a href={profilePath}>
                    <div className="backArrow">
                      <IoMdArrowRoundBack />
                      <p> your profile</p>
                    </div>
                  </a>
                  <p className="loggedIn"> Currently logged in as {jwtUsername}</p>
                  <div className="imageContainer">
                    {user.picture !== null ? (
                      <img src={user.picture} alt="profile" className="editImg" />
                    ) : (
                      <img src="https://i.imgur.com/ZOgaykp.png" alt="profile" className="editImg" />
                    )}
                  </div>
                  <p className="userName text-white">{}</p>
                  <input className="accountEditInput" type="file" onChange={(e) => setImage(e.target.files[0])} />

                  <input className="accountEditInput" type="text" placeholder="bio" {...register('bio', {})} />
                  <select className="accountEditSelect" {...register('location')}>
                    <option value="6262d041d6300e64987d8e73">Manchester</option>
                    <option value="6262d041d6300e64987d8e74">Leicester</option>
                    <option value="6262d041d6300e64987d8e75">Leeds</option>
                  </select>
                  <select className="accountEditSelect" {...register('genres')} multiple>
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
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full subBtn"
                    type="submit"
                  />
                </form>

                <div>
                  {user.type === 'Musician' ? (
                    <>
                      {' '}
                      <MusicianEdit user={user} />
                    </>
                  ) : (
                    <>
                      {' '}
                      <BandEdit user={user} />{' '}
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <p>You need to be logged in to edit your profile details</p>
          )}
        </div>
      </>
    );
  } else {
    return (
      <div className="editContainer">
        <div className="noAccessContainer">
          <span className="icon text-9xl">
            <BsEmojiAngry />
          </span>
          <p className="noAccess">Tsk Tsk! This isn't your page to edit friend!</p>
        </div>
      </div>
    );
  }
}
}
