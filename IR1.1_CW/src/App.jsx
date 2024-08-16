import './App.css';
//react - js library i.e. react is written in js, we write code in small independednt reusable functions called components - react components use a syntax called jsx (mix of html & js) i.e write logic and html together - function name in capital letter(Camel case) - not dependent on each other
//in return statement  ()- what to display on the scren

const MyComponent = () => {
  return <h1>Hello JSX!</h1>;
};

const Greeting = () => {
  const name = 'John';
  return <h1>Hello {name}!</h1>;
};

const LinkTag = () => {
  const url = 'https://google.co.in';
  return (
    <a href={url} target="_blank">
      Visit Google
    </a>
  );
};

const ImageTag = () => {
  const imageUrl = 'https://via.placeholder.com/150';
  return (
    <div>
      <img src={imageUrl} alt="placeholder"></img>
    </div>
  );
};

const ProfileDetails = () => {
  const details = {
    name: 'John Doe',
    age: 25,
    email: 'john@gmail.com',
    bio: 'A passionate software developer.',
  };

  return (
    //react fragemment <> empty tag - multiple lines return should be enclosed in tag
    <>
      <h2>Profile Details</h2>
      <p>Name: {details.name}</p>
      <p>Age: {details.age}</p>
      <p>Email: {details.email}</p>
      <p>Bio: {details.bio}</p>
    </>
  );
};
export default function App() {
  return (
    <div>
      {/* rendering jsx */}
      <MyComponent />
      {/* <MyComponent />
      <MyComponent /> */}

      <Greeting />

      <LinkTag />

      <ImageTag />

      <ProfileDetails />
    </div>
  );
}
