import './account.css';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_ACCOUNT } from '../../utils/queries';
import { MdLocationOn, MdModeEditOutline } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

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

  if (error) {
    <p> error....</p>;
  }

  if (data) {
    //decoding and unpacking the JWT token in local storage and assigning values for conditional rendering
    let jwtId;
    try {
      const userToken = localStorage.getItem('id_token');
      console.log('usertoken:', userToken);
      const jwtToken = JSON.parse(atob(userToken.split('.')[1]));
      jwtId = jwtToken.data._id;
    } catch (error) {
      // TODO
      console.log(error.message);
    }
    // console.log('JWT TOKEN', userToken);
    // console.log('jwtToken return', jwtToken);
    // console.log(jwtToken.data.email);
    // console.log(jwtToken.data.username);
    // console.log(jwtToken.data._id);

    //mapping of genres in user object
    const userGenres = user.genres;
    const genreList = userGenres.map((genre) => <li>{genre}</li>);
    const editUrl = accountId + '/edit';

    return (
      <>
        <div class="profileContainer">
          <div class="topContainer">
            <img src={user.picture} alt="profile" class="userImg" />
            <p class="userName text-white">{}</p>
            {jwtId === accountId && (
              <a href={editUrl} class="editBtn">
                <div class="editBtn">
                  <MdModeEditOutline />
                  <p>Edit profile</p>
                </div>
              </a>
            )}
            <p class="userName text-white">{user.username}</p>
            {user.type === 'Band' && <p class="userDisplayName text-white text-capitalize"> {user.bandId.bandName}</p>}
            {user.type === 'Musician' && (
              <p class="userDisplayName text-white text-capitalize">
                {user.musicianId.firstName} {user.musicianId.lastName}
              </p>
            )}
            <button class="msgBtn">Message</button>
            <div class="locationContainer">
              <span class="locationMarker text-white text-2xl">
                <MdLocationOn />
              </span>
              <p class="userLocation text-white">{user.location.name}</p>
            </div>
            <p class="userRole text-white">{user.type}</p>
          </div>
        </div>
        <div class="infoContainer">
          {user.type === 'Musician' && (
            <>
              <h2>Availability</h2>
              <p>{user.musicianId.available ? <TiTick /> : <ImCross />}</p>
            </>
          )}
          <h2>Looking for</h2>
          <p> lead guitar</p>
          <h2>Genre</h2>

          <ul class="genreList">
            <p key={genreList}> {genreList}</p>
          </ul>
          <h2>About us</h2>
          <p>{user.bio}</p>
        </div>
      </>
    );
  }
}

export default Account;
