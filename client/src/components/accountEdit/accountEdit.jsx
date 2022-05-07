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
                  <div>
                  <p className="loggedIn"> Currently logged in as {jwtUsername}</p>
                  <div className="imageContainer">
                    {user.picture !== null ? (
                      <img src={user.picture} alt="profile" className="editImg" />
                    ) : (
                      <img src="https://i.imgur.com/ZOgaykp.png" alt="profile" className="editImg" />
                    )}
              <input className="" type="file" onChange={(e) => setImage(e.target.files[0])} />
                  </div>
             </div>
              <input className='accountEditInput'type="text" placeholder="bio" {...register('bio', {})} />
              <select className='accountEditSelect' {...register('location')}>
                <option value="6262d041d6300e64987d8e73">Manchester</option>
                <option value="6262d041d6300e64987d8e74">Leicester</option>
                <option value="6262d041d6300e64987d8e75">Leeds</option>
                <option value="6262d041d6300e64987d8e76">Cardiff</option>
                <option value="6262d041d6300e64987d8e77">Sheffield</option>
                <option value="6262d041d6300e64987d8e78">Ipswich</option>
                <option value="6262d041d6300e64987d8e79">York</option>
                <option value="6262d041d6300e64987d8e7a">Aberdeen</option>
                <option value="6262d041d6300e64987d8e7b">Birmingham</option>
                <option value="6262d041d6300e64987d8e7c">Newcastle</option>
                <option value="6262d041d6300e64987d8e7d">Glasgow</option>
                <option value="6262d041d6300e64987d8e7e">Liverpool</option>
                <option value="6262d041d6300e64987d8e7f">Portsmouth</option>
                <option value="6262d041d6300e64987d8e61">Southampton</option>
                <option value="6262d041d6300e64987d8e62">Nottingham</option>
                <option value="6262d041d6300e64987d8e63">London</option>
              </select>
              <select className='accountEditSelect' {...register('genres')} multiple>
                <option value="blues">Blues</option>
                <option value="classic Rock">Classic Rock</option>
                <option value="country">Country</option>
                <option value="dance">Dance</option>
                <option value="disco">Disco</option>
                <option value="funk">Funk</option>
                <option value="grunge">Grunge</option>
                <option value="hip-hop">Hip-hop</option>
                <option value="jazz">Jazz</option>
                <option value="metal">Metal</option>
                <option value="pop">Pop</option>
                <option value="r&b">R&B</option>
                <option value="rap">Rap</option>
              </select>
              <input
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full subBtn"
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
