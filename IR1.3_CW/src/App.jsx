import './App.css';
//props
const Greeting = (props) => {
  return <h1>Hello, {props.name}</h1>;
};

const UserDetails = (props) => {
  console.log(props);
  //props return an Object {name: 'Bob', age: 20} in key value pair
  return (
    <>
      <h1>User Details</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </>
  );
};

const WeatherInfo = (props) => {
  return (
    <>
      <h1>Weather Info</h1>
      <p>Temperature: {props.temperature} degree celcius</p>
      <p>Condition: {props.condition}</p>
    </>
  );
};

const UserAvatar = (props) => {
  return (
    <>
      <h1>User Avatar</h1>
      <img src={props.img} alt={props.alt} />
    </>
  );
};
export default function App() {
  return (
    <div>
      <Greeting name="John" />
      {/* <Greeting age={28} /> */}
      {/* <Greeting name='Bob'/> */}

      <UserDetails name="Bob" age={20} country="India" />

      <WeatherInfo temperature={29} condition="Sunny" />

      <UserAvatar img="https://via.placeholder.com/150" alt="placeholder" />

      {/* <UserAvatar img='https://via.placeholder.com/200' alt='placeholder'/> */}
    </div>
  );
}
