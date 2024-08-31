import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const profile = {
    name: 'John Doe',
    username: '@john_doe',
    bio: 'Software Developer | Tech Enthisiast',
    followers: 1000,
    following: 500,
    posts: 50,
  };
  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="https://via.placeholder.com/150x150"
              alt="profile image"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <h4>{profile.name}</h4>
            <p>{profile.username}</p>
            <p>{profile.bio}</p>
            <p>Followers: {profile.followers}</p>
            <p>Following: {profile.following}</p>
            <p>Posts: {profile.posts}</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
export default Profile;
