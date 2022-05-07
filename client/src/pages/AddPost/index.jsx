import AddPostForm from '../../components/PostAdd';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
function AddPost() {
  return (
    <div className="profile-container">
      <Nav />
      <AddPostForm />
      <Footer />
    </div>
  );
}

export default AddPost;
