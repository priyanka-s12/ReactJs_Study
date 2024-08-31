import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
  //nested objects
  const userData = {
    john_doe: {
      fullName: 'John Doe',
      bio: 'Software Developer | Tech Enthusiast',
      imageUrl: 'https://via.placeholder.com/250',
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: 'Jane Smith',
      bio: 'Graphic Designer | Nature Lover',
      imageUrl: 'https://via.placeholder.com/250',
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: 'Alice Wonder',
      bio: 'Travel Blogger | Foodie',
      imageUrl: 'https://via.placeholder.com/250',
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  //   const userName = useParams().userName;
  //destructuring - extracting multiple values from data stored in (possibly nested) objects and Arrays
  const { userName } = useParams();
  console.log(userName);

  const user = userData[userName];
  //   console.log(user);

  return (
    <>
      <Header />
      <main className="container py-4">
        <section>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src={user.imageUrl}
                alt="Profile image"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-8">
              <h4>{user.fullName}</h4>
              <p>@{userName}</p>
              <p>{user.bio}</p>
              <p>Followers: {user.followers}</p>
              <p>Following: {user.following}</p>
              <p>Posts: {user.posts}</p>
              <p></p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProfileDetails;
