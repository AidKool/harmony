import './account.css';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_ACCOUNT } from '../../utils/queries';
import { MdLocationOn, MdModeEditOutline } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import { BsSignpostFill } from 'react-icons/bs';
import Auth from '../../utils/auth';

function Account() {
  //Assigns url params to get id from profiles/:profileId
  const params = useParams();
  const accountId = params.profileId;
  console.log(accountId);
  //Get a single account and create and object set as "user"
  const { data, error, loading } = useQuery(QUERY_SINGLE_ACCOUNT, {
    variables: { id: accountId },
  });
  const user = data?.getAccount;

  //if conditions depending on the query's return results
  if (loading) {
    <p> loading.....</p>;
  }

  if (data) {
    const userGenres = user.genres;
    const genreList = userGenres.map((genre) => <li>{genre}</li>);

    if (Auth.loggedIn()) {
      const userToken = localStorage.getItem('id_token');
      const jwtToken = JSON.parse(atob(userToken.split('.')[1]));
      const jwtId = jwtToken.data._id;
      const editUrl = accountId + '/edit';


      return (
        <>
          <div class="profileContainer">
            <div class="topContainer">
              {user.picture === null ? (
                <img src="https://i.imgur.com/ZOgaykp.png" alt="profile" class="userImg" />
              ) : (
                <img src={user.picture} alt="profile" class="userImg" />
              )}
              {jwtId === accountId && (
                <>
                <div className='editAndPostsContainer'> 
                
                  <a href={editUrl} class="editBtn">
                    <div className="editBtn">
                      <MdModeEditOutline />
                      <p class="editBtnText">Edit profile</p>
                    </div>
                  </a>
                  <a href="/my-posts" class="editBtn">
                    <div className="myPostBtn">
                      <BsSignpostFill />
                      <p className='myPostText'>My posts</p>
                    </div>
                  </a>
                  </div>
                </>
              )}
              <p class="userName text-white">{user.username}</p>
              {user.type === 'Band' ? (
                <p class="userDisplayName text-white text-capitalize"> {user.bandId.bandName}</p>
              ) : (
                <>
                  <p>.</p>
                </>
              )}
              <p></p>
              {user.type === 'Musician' && (
                <p class="userFullName text-white text-capitalize">
                  {user.musicianId.firstName} {user.musicianId.lastName}
                </p>
              )}
              <button className="msgBtn">Message</button>
              <div className="locationContainer">
                <span className="locationMarker text-white text-2xl">
                  <MdLocationOn />
                </span>
                {user.location === null ? (
                  <p class="userLocation text-white">UNKNOWN</p>
                ) : (
                  <p class="userLocation text-white">{user.location.name}</p>
                )}
              </div>
              <p className="userRole text-white">{user.type}</p>
            </div>
          </div>
          <div className="infoContainer">
            {user.type === 'Musician' && (
              <>
                <h2>Availability</h2>
                <p>{user.musicianId.available ? <TiTick /> : <ImCross />}</p>
              </>
            )}

            {user.genres.length >= 1 && (
              <ul class="genreList">
                <h2>Genre</h2>
                <p key={genreList}> {genreList}</p>
              </ul>
            )}
            {console.log(user.bio)}
            {user.bio !== null && (
              <>
                <h2>About</h2> <p>{user.bio}</p>
              </>
            )}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div class="profileContainer">
            <div class="topContainer">
              {user.picture === null ? (
                <img src="https://i.imgur.com/ZOgaykp.png" alt="profile" class="userImg" />
              ) : (
                <img src={user.picture} alt="profile" class="userImg" />
              )}
              <p class="userName text-white">{user.username}</p>
              {user.type === 'Band' ? (
                <p class="userDisplayName text-white text-capitalize"> {user.bandId.bandName}</p>
              ) : (
                <>
                  <p>.</p>
                </>
              )}
              <p></p>
              {user.type === 'Musician' && (
                <p class="userFullName text-white text-capitalize">
                  {user.musicianId.firstName} {user.musicianId.lastName}
                </p>
              )}
              <button className="msgBtn">Message</button>
              <div className="locationContainer">
                <span className="locationMarker text-white text-2xl">
                  <MdLocationOn />
                </span>
                {user.location === null ? (
                  <p class="userLocation text-white">UNKNOWN</p>
                ) : (
                  <p class="userLocation text-white">{user.location.name}</p>
                )}
              </div>
              <p className="userRole text-white">{user.type}</p>
            </div>
          </div>
          <div className="infoContainer">
            {user.type === 'Musician' && (
              <>
                <h2>Availability</h2>
                <p>{user.musicianId.available ? <TiTick /> : <ImCross />}</p>
              </>
            )}

            {user.genres.length >= 1 && (
              <ul class="genreList">
                <h2>Genre</h2>
                <p key={genreList}> {genreList}</p>
              </ul>
            )}
            {console.log(user.bio)}
            {user.bio !== null && (
              <>
                <h2>About</h2> <p>{user.bio}</p>
              </>
            )}
          </div>
        </>
      );
    }
  }
  //decoding and unpacking the JWT token in local storage and assigning values for conditional rendering
}

export default Account;