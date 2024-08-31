import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
//hooks are function like encapsulation already written code you need to plugin in your code
const BlogDetails = () => {
  const blogId = useParams();
  //Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path
  // console.log(blogId);
  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      datePosted: 'August 1, 2024',
    },
    {
      id: 2,
      title: 'Blog 2',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      datePosted: 'August 7, 2024',
    },
    {
      id: 3,
      title: 'Blog 3',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      datePosted: 'August 14, 2024',
    },
  ];

  //as blogId is object want to access data blogId.blogId
  const blogData = blogs.find((blog) => blog.id == blogId.blogId);
  // console.log(blogData);
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Blog Details</h1>
        <small>Posted on {blogData.datePosted}</small>
        <p className="mt-3">{blogData.content}</p>
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
