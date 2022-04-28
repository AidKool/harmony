import './account.css';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_ACCOUNT} from '../../utils/queries';
import { MdLocationOn } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';

// import { QUERY_SINGLE_ACCOUNT } from '../../utils/queries';

function Account() {
  const params = useParams();
  const accountId = params.profileId;
  console.log(accountId);
  const { data, error, loading } = useQuery(QUERY_SINGLE_ACCOUNT, {
    variables: { id: accountId },
  });

  const user = data?.getAccount
  console.log('data', data);
  console.log('error', error);
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log('username', user?.username);

  
  
  if(loading) {
      <p> loading.....</p>
    }

if (error) {
  <p> error....</p>;
}

if(data){

     const userGenres = user.genres;
     const genreList = userGenres.map((genre) => <li>{genre}</li>);

     

         return (
           <>
             <div class="profileContainer">
               <div class="topContainer">
                 <img src={user.picture} alt="profile" class="userImg" />
                 <p class="userName text-white">{user.username}</p>
                 {user.type === 'Band' && (
                   <p class="userDisplayName text-white text-capitalize"> {user.bandId.bandName}</p>
                 )}
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
                 <p> {genreList}</p>
               </ul>
               <h2>About us</h2>
               <p>{user.bio}</p>
             </div>
           </>
         );
     
 }
}

export default Account;
