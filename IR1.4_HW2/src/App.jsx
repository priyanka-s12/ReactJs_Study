import './App.css';

const Header = () => {
  return (
    <header>
      <h1>Welcome to Our Blog</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const BlogDetails = ({ blog }) => {
  // console.log(props)
  return (
    <>
      <h2>{blog.title}</h2>
      <p>Author: {blog.author}</p>
      <p>Date: {blog.date}</p>
      <p>{blog.post}</p>
    </>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Our Blog. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  const blog = {
    title: 'The Importance of Learning React',
    author: 'Jane Doe',
    date: 'March 1, 2024',
    post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  };
  return (
    <>
      <Header />
      <main>
        <BlogDetails blog={blog} />
      </main>
      <Footer />
    </>
  );
}
