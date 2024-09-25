import { useState } from 'react';

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setShowContent(true)}>Know More</button>
      {showContent && <p>{content}</p>}
    </div>
  );
};

const About = ({ heading, name, learning }) => {
  const [showLeaning, setShowLearning] = useState(false);
  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={() => setShowLearning(true)}>Know More</button>
      {showLeaning && <p>{learning}</p>}
    </div>
  );
};

const UserInfo = ({ username, email, age }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Username: </strong>
        {username}
      </p>
      {!showDetails ? (
        <div>
          <button onClick={() => setShowDetails(true)}>See Profile</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Age: </strong>
            {age}
          </p>
        </div>
      )}
    </div>
  );
};

const UserProfile = ({ username, imageUrl, bio, location }) => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Username</strong>: {username}
      </p>
      {!showProfileDetails ? (
        <div>
          <button onClick={() => setShowProfileDetails(true)}>
            View Profile
          </button>
        </div>
      ) : (
        <div>
          <img src={imageUrl} />
          <br />
          <p>
            <strong>Bio: </strong>
            {bio}
          </p>
          <p>
            <strong>Location: </strong>
            {location}
          </p>
        </div>
      )}
    </div>
  );
};

const ProductDetails = ({ productName, description, price }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  return (
    <div>
      <h2>Product Details</h2>
      <p>
        <strong>Product Name: </strong>
        {productName}
      </p>
      {!showProductDetails ? (
        <div>
          <button onClick={() => setShowProductDetails(true)}>
            Show Details
          </button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Price: </strong>${price}
          </p>
        </div>
      )}
    </div>
  );
};
export default function App() {
  const title = 'React is awesome';
  const content = 'React is a JavaScript library for building user interfaces.';

  const heading = 'About Me';
  const name = 'Priyanka';
  const learning = 'I am learning React JS currently at neoG Camp.';

  const username = 'Priyanka';
  const email = 'priyanka@testmail.com';
  const age = 30;

  return (
    <main>
      <Article title={title} content={content} />
      <br />

      <About heading={heading} name={name} learning={learning} />
      <br />
      <UserInfo username={username} email={email} age={age} />
      <br />
      <UserProfile
        username="Jane Doe"
        imageUrl="https://via.placeholder.com/200"
        bio="Frontend Developer"
        location="New York"
      />
      <br />
      <ProductDetails
        productName="Smartphone"
        description="High-performance smartphone with advanced features."
        price={599.99}
      />
    </main>
  );
}
