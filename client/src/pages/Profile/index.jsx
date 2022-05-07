import Account from '../../components/Account';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import './profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <Nav />
      <Account />
      <Footer />
    </div>
  );
}

export default Profile;
