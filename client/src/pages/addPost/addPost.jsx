import AddPostForm from '../../components/PostAdd/PostAdd.jsx';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/Footer';
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
