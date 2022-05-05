import UpdatePostForm from '../../components/PostUpdate/PostUpdate';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/Footer';
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
