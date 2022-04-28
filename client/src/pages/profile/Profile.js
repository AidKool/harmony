// import './profile.css';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_SINGLE_ACCOUNT, QUERY_ACCOUNTS } from '../../utils/queries';

// import { QUERY_SINGLE_ACCOUNT } from '../../utils/queries';

function Profile() {
  const params = useParams();
  const accountId = params.profileId;
  console.log(accountId);
  const { data, error, loading } = useQuery(QUERY_SINGLE_ACCOUNT, {
    variables: { id: accountId },
  });
  const user = data?.getAccount;
  console.log('data', data);
  console.log('error', error);
  console.log('user', user);
  console.log('username', user?.username);

  return <p> this is {user?.username} </p>;
}

export default Profile;
