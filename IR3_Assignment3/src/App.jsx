import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
const Posts = () => {
  const posts = [
    {
      id: 1,
      username: 'john_doe',
      imgUrl: 'https://placehold.co/400x200?text=Hello+World',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      username: 'jane_smith',
      imgUrl: 'https://placehold.co/400x200?text=Smiling+Jane',
      content:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      username: 'alice_wonder',
      imgUrl: 'https://placehold.co/400x200?text=Alice+In+Wonder+Park',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const postData = posts.map((post) => (
    <div key={post.id}>
      <li className="list-group-item">
        <p>
          <Link className="fw-medium" to={`/profile/${post.username}`}>
            {post.username}
          </Link>
        </p>
        <img src={post.imgUrl} alt="post image" />
        <p className="mt-3">{post.content}</p>
      </li>
    </div>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <section>
          <h2 className="display-5 fw-normal mb-3">Posts</h2>
          <ul className="list-group">{postData}</ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Posts;
