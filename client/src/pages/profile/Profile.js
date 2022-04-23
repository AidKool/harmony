import React from 'react';
import "./profile.css"
import userImg from './assets/userProfile.jpg';

function Profile() {
  return (
<div className="profileContainer">
        <div className="topContainer">
            <img src={userImg} alt="profile" className="userImg"></img>
            <p className="userName">Erik Ten Haag</p>
            <button className="userRandomAsset">
                Message
            </button>
            <p className="userLocation">Manchester</p>
            <p className="userRole">Band</p>
        </div>
        <div className="infoContainer">
            <h2>Looking for</h2>
                <p> lead guitar</p>
            <h2>Genre</h2>
                <p> Jazz, Rock, Blues</p>
            <h2>About us</h2>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit qui necessitatibus saepe? Aperiam vitae aliquam excepturi, tempora corrupti magnam! Nihil velit dolorem laudantium earum nobis eum commodi nostrum consectetur aliquid ipsum, sequi totam error repellat, omnis debitis corrupti quam fuga reiciendis minus ea ipsa neque doloribus. Iusto aspernatur sequi blanditiis!</p>
        </div>
    </div>
  );
}

export default Profile;
