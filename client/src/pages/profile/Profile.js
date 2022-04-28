import Account from '../../components/account/account.js';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/Footer';
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
