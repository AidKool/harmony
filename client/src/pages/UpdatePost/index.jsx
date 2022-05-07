import UpdatePostForm from '../../components/PostUpdate';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

function UpdatePost() {
  return (
    <div className="profile-container">
      <Nav />
      <UpdatePostForm />
      <Footer />
    </div>
  );
}

export default UpdatePost;
