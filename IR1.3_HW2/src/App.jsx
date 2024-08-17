import './App.css';

const WelcomeBanner = (props) => {
  // console.log(props)
  return <h1>Welcome to {props.appName}!</h1>;
};

const RecipeDetails = (props) => {
  // console.log(props)
  return (
    <>
      <h2>Recipe Details</h2>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Rating: {props.rating}</p>
    </>
  );
};

const MovieInformation = (props) => {
  // console.log(props)
  return (
    <>
      <h2>Movie Information</h2>
      <p>Title: {props.title}</p>
      <p>Director: {props.director}</p>
      <p>Release Date: {props.releaseDate}</p>
    </>
  );
};

const ProductFeatures = (props) => {
  // console.log(props)
  return (
    <>
      <h2>Product Features</h2>
      <p>Name: {props.name}</p>
      <p>Color: {props.color}</p>
      <p>Size: {props.size}</p>
    </>
  );
};

const UserProfileCard = (props) => {
  console.log(props);
  return (
    <>
      <h2>User Profile</h2>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Role: {props.role}</p>
    </>
  );
};
export default function App() {
  return (
    <>
      <WelcomeBanner appName="My Recipe App" />

      <RecipeDetails title="Chocolate Cake" author="Baker Betty" rating={4.7} />

      <MovieInformation
        title="The Godfather"
        director="Francis Ford Coppola"
        releaseDate="March 24, 1972"
      />

      <ProductFeatures name="Smartwatch" color="Black" size="Medium" />

      <UserProfileCard name="Alice" email="alice@example.com" role="Admin" />
    </>
  );
}
