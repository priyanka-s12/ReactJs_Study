import './App.css';

const WelcomeMessage = (props) => {
  return <h1>Welcome, {props.username}!</h1>;
};

const BookDetails = (props) => {
  // console.log(props);
  return (
    <>
      <h2>Book Details</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Genre: {props.genre}</p>
    </>
  );
};

const ArticleInformation = (props) => {
  // console.log(props)
  return (
    <>
      <h2>Article Information</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Published Date: {props.publishedDate}</p>
    </>
  );
};

const ProductDetails = (props) => {
  // console.log(props)
  return (
    <>
      <h2>Product Details</h2>
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: ${props.price}</p>
    </>
  );
};

const EventDetails = (props) => {
  // console.log(props)
  return (
    <>
      <h2>Event Details</h2>
      <p>Title: {props.title}</p>
      <p>Location: {props.location}</p>
      <p>Date: {props.date}</p>
    </>
  );
};

const UserProfile = (props) => {
  console.log(props);
  return (
    <>
      <h1>User Profile</h1>
      <p>Name: {props.name}</p>
      <img src={props.avatarUrl} alt={props.alt} />
    </>
  );
};
export default function App() {
  return (
    <>
      <WelcomeMessage username="Emily" />

      <BookDetails
        title="To Kill a Mockingbird"
        author="Harper Lee"
        genre="Classic"
      />

      <ArticleInformation
        title="The Power of Habit"
        author="Charles Duhigg"
        publishedDate="March 1, 2024"
      />

      <ProductDetails name="Smartphone" brand="Samsung" price="799.99" />

      <EventDetails
        title="Tech Conference 2024"
        location="San Francisco"
        date="April 15, 2024"
      />

      <UserProfile
        name="Chris"
        avatarUrl="https://via.placeholder.com/150"
        alt="placeholder"
      />
    </>
  );
}
