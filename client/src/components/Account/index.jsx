import { useMutation, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { MdLocationOn, MdModeEditOutline } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import { BsSignpostFill } from 'react-icons/bs';

import { QUERY_SINGLE_ACCOUNT } from '../../utils/queries';
import { ADD_CHAT } from '../../utils/mutations';
import Auth from '../../utils/auth';

import './account.css';

function Account() {
  const [addChat] = useMutation(ADD_CHAT);

  const params = useParams();
  const accountId = params.profileId;
  const { data, error, loading } = useQuery(QUERY_SINGLE_ACCOUNT, {
    variables: { id: accountId },
  });
  const user = data?.getAccount;

  if (loading) {
    <p> loading.....</p>;
  }

  async function createChat() {
    try {
      await addChat({ variables: { id: accountId } });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  if (data) {
    const userGenres = user.genres;
    const genreList = userGenres.map((genre) => <li key={genre}>{genre}</li>);

    if (Auth.loggedIn()) {
      const userToken = localStorage.getItem('id_token');
      const jwtToken = JSON.parse(atob(userToken.split('.')[1]));
      const jwtId = jwtToken.data._id;
      const editUrl = `/profiles/${accountId}/edit`;

      return (
        <>
          <div className="profileContainer">
            <div className="topContainer">
              {user.picture === null ? (
                <img src="https://i.imgur.com/ZOgaykp.png" alt="profile" className="userImg" />
              ) : (
                <img src={user.picture} alt="profile" className="userImg" />
              )}
              {jwtId === accountId && (
                <>
                  <div className="editAndPostsContainer">
                    <Link to={editUrl} className="editBtn">
                      <div className="editBtn">
                        <MdModeEditOutline />
                        <p className="editBtnText">Edit profile</p>
                      </div>
                    </Link>
                    <Link to="/my-posts" className="editBtn">
                      <div className="myPostBtn">
                        <BsSignpostFill />
                        <p className="myPostText">My posts</p>
                      </div>
                    </Link>
                  </div>
                </>
              )}
              <p className="userName text-white">{user.username}</p>
              {user.type === 'Band' ? (
                <p className="userDisplayName text-white text-capitalize"> {user.bandId.bandName}</p>
              ) : (
                <>
                  <p>.</p>
                </>
              )}
              <p></p>
              {user.type === 'Musician' && (
                <p className="userFullName text-white text-capitalize">
                  {user.musicianId.firstName} {user.musicianId.lastName}
                </p>
              )}
              <Link to={`/messages`} onClick={createChat} className="msgBtn">
                Message
              </Link>
              <div className="locationContainer">
                <span className="locationMarker text-white text-2xl">
                  <MdLocationOn />
                </span>
                {user.location === null ? (
                  <p className="userLocation text-white">UNKNOWN</p>
                ) : (
                  <p className="userLocation text-white">{user.location.name}</p>
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
              <ul className="genreList">
                <h2 className="account-genre-title">Genre</h2>
                <p key={genreList}> {genreList}</p>
              </ul>
            )}
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
          <div className="profileContainer">
            <div className="topContainer">
              {user.picture === null ? (
                <img src="https://i.imgur.com/ZOgaykp.png" alt="profile" className="userImg" />
              ) : (
                <img src={user.picture} alt="profile" className="userImg" />
              )}
              <p className="userName text-white">{user.username}</p>
              {user.type === 'Band' ? (
                <p className="userDisplayName text-white text-capitalize"> {user.bandId.bandName}</p>
              ) : (
                <>
                  <p>.</p>
                </>
              )}
              <p></p>
              {user.type === 'Musician' && (
                <p className="userFullName text-white text-capitalize">
                  {user.musicianId.firstName} {user.musicianId.lastName}
                </p>
              )}
              <Link to={`/messages`} onClick={createChat} className="msgBtn">
                Message
              </Link>
              <div className="locationContainer">
                <span className="locationMarker text-white text-2xl">
                  <MdLocationOn />
                </span>
                {user.location === null ? (
                  <p className="userLocation text-white">UNKNOWN</p>
                ) : (
                  <p className="userLocation text-white">{user.location.name}</p>
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
              <ul className="genreList">
                <h2 className="account-genre-title">Genre</h2>
                <p key={genreList}> {genreList}</p>
              </ul>
            )}
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
}

export default Account;
