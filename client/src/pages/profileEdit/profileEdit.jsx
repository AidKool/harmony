import AccountEdit from '../../components/accountEdit/accountEdit.jsx';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/Footer';
function Profile() {
  return (
    <div className="profile-container">
      <Nav />
      <AccountEdit />
      <Footer />
    </div>
  );
}

export default Profile;
