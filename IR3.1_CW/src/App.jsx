import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//to get something from somewhere
//Blog app - small web app in react js - create multiple pages (routing(pages)) and route through that page(add navigation)

// (/ in url always renders App.jsx page)
//export means export anywhere, so in other file it imports easily
export default function App() {
  return (
    <main className="container py-4">
      <h1>Latest Blogs</h1>
      <article>
        <h2>Blog 1</h2>
        <img
          src="https://via.placeholder.com/500x200"
          alt="blog 1"
          className="img-fluid rounded"
        />
        <p>Posted on August 24, 2024 by John Doe</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>

      <article>
        <h2>Blog 2</h2>
        <img
          src="https://via.placeholder.com/500x200"
          alt="blog 2"
          className="img-fluid rounded"
        />
        <p>Posted on August 20, 2024 by Jane Smith</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.{' '}
        </p>
      </article>
    </main>
  );
}
