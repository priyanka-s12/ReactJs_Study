import { useState } from 'react';

const CountApp = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>Positive and Negative</h2>
      <p>Count: {count}</p>
      <p>The count is {count >= 0 ? 'positive' : 'negative'}.</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

const UserLoginApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();
    // console.log(username, password);
    if (username && password) {
      setIsLoggedIn(true);
    }
  };
  return (
    <div>
      <h2>User Login</h2>
      {isLoggedIn ? (
        <h2>Welcome {username}</h2>
      ) : (
        <form id="loginForm" onSubmit={formHandler}>
          <label htmlFor="usernameInput">Username: </label>
          <input
            type="text"
            id="usernameInput"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <br />
          <label htmlFor="passwordInput">Password: </label>
          <input
            type="password"
            id="passwordInput"
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <br />
          <input type="submit" value="Login" />
        </form>
      )}
    </div>
  );
};

const TemperatureConverterApp = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  const celsiusHandler = (event) => {
    const temp = parseFloat(event.target.value);
    setCelsius(temp);
    setFahrenheit((temp * 9) / 5 + 32);
  };

  const fahrenheitHandler = (event) => {
    const temp = parseFloat(event.target.value);
    setFahrenheit(temp);
    setCelsius(((temp - 32) * 5) / 9);
  };
  return (
    <div>
      <h2>Temperature Converter</h2>
      <label htmlFor="celsius">Celsius: </label>
      <input
        type="number"
        id="celsius"
        value={celsius}
        onChange={celsiusHandler}
      />
      <br />
      <br />
      <label htmlFor="fahrenheit">Fahrenheit: </label>
      <input
        type="number"
        id="fahrenheit"
        value={fahrenheit}
        onChange={fahrenheitHandler}
      />
    </div>
  );
};

const ShoppingCartApp = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [productList, setProductList] = useState([]);

  const addProductToCart = (productName, productPrice) => {
    const product = { name: productName, price: productPrice };
    const updatedProduct = [...productList, product];
    // console.log(updatedProduct);
    setProductList(updatedProduct);
    setTotalPrice(totalPrice + productPrice);
  };
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      {/* {console.log(productList)} */}
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => addProductToCart('Product A', 10)}>
        Add Product A
      </button>
      <button onClick={() => addProductToCart('Product B', 20)}>
        Add Product B
      </button>
    </div>
  );
};

const QuizApp = () => {
  const questions = [
    'What is the national bird of India?',
    'How many colors are there in Indian flag?',
    'What is the color of sky?',
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');

  const nextQuestionHandler = () => {
    // console.log(currentQuestion, questions.length);
    setCurrentQuestion(currentQuestion + 1);
    setAnswer('');
  };
  return (
    <div>
      <h2>Quiz App</h2>
      {currentQuestion <= questions.length - 1 ? (
        <>
          <label>{questions[currentQuestion]}</label>
          <br />
          <br />
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          />
          <button onClick={nextQuestionHandler}>Next</button>
        </>
      ) : (
        <p>You answered all questions!</p>
      )}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <CountApp />

      <UserLoginApp />

      <TemperatureConverterApp />

      <ShoppingCartApp />

      <QuizApp />
    </main>
  );
}
