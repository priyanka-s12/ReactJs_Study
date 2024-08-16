import './App.css';

const StudentDetails = () => {
  const name = 'Bob';
  const age = 28;
  const grade = 'A';

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Grade: {grade}</p>
    </div>
  );
};

const Product = () => {
  const product = {
    name: 'Laptop',
    brand: 'Dell',
    price: 20000,
  };
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

//nested obj
const UserProfile = () => {
  const user = {
    name: 'John Doe',
    age: 30,
    address: {
      street: '123 Main',
      city: 'New York',
      state: 'CA',
      zipcode: '234543',
    },
  };

  return (
    <>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>
        Address: {user.address.street}, {user.address.city},{' '}
        {user.address.state}, {user.address.zipcode}
      </p>
    </>
  );
};

//nested obj with array
const MovieDetails = () => {
  const movie = {
    title: 'Inception',
    releaseYear: 2010,
    director: {
      name: 'Christopher Nolan',
      nationality: 'British',
    },
    genre: ['Sci-fi', 'Action', 'Thriller'],
  };

  return (
    <div>
      <p>Name: {movie.title}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>
        Director: {movie.director.name} ({movie.director.nationality})
      </p>
      <p>Genre: {movie.genre.join(', ')}</p>
    </div>
  );
};
export default function App() {
  return (
    <>
      <h1>Student Details</h1>
      <StudentDetails />

      <h1>Product Details</h1>
      <Product />

      <h1>User Profile</h1>
      <UserProfile />

      <h1>Movie Details</h1>
      <MovieDetails />
    </>
  );
}
