import { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [crustType, setCrustType] = useState('');
  const [delivery, setDeliveryType] = useState('');
  const [instruction, setInstruction] = useState('');
  const [formData, setFormData] = useState(false);

  const toppingsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping != value));
    }
  };
  const formHandler = (event) => {
    event.preventDefault();
    // console.log(
    //   name,
    //   size,
    //   toppings.join(', '),
    //   crustType,
    //   delivery,
    //   instruction
    // );
    if (name && size && toppings.length > 0 && crustType && delivery) {
      setFormData(true);
    }
  };
  return (
    <main>
      <h1>Pizza Order Form</h1>
      <form id="orderForm" onSubmit={formHandler}>
        <label htmlFor="nameInput">Customer Name: </label>
        <input
          type="text"
          id="nameInput"
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="pizzaSelect">Choose Pizza Size: </label>
        <select
          id="pizzaSelect"
          onChange={(event) => setSize(event.target.value)}
          required
        >
          <option value="">Select Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <br />
        <br />
        <label>Choose Toppings: </label>
        <br />
        <label htmlFor="pepperoni">
          <input
            type="checkbox"
            id="pepperoni"
            value="pepperoni"
            onChange={toppingsHandler}
          />
          Pepperoni
        </label>
        <br />
        <label htmlFor="mushrooms">
          <input
            type="checkbox"
            id="mushrooms"
            value="mushrooms"
            onChange={toppingsHandler}
          />
          Mushrooms
        </label>
        <br />
        <label htmlFor="olives">
          <input
            type="checkbox"
            id="olives"
            value="olives"
            onChange={toppingsHandler}
          />
          Olives
        </label>
        <br />
        <br />
        <label>Choose Crust Type: </label>
        <br />
        <label htmlFor="thin">
          <input
            type="radio"
            id="thin"
            name="crust"
            value="thin"
            onChange={(event) => setCrustType(event.target.value)}
            required
          />
          Thin
        </label>
        <br />
        <label htmlFor="thick">
          <input
            type="radio"
            id="thick"
            name="crust"
            value="thick"
            onChange={(event) => setCrustType(event.target.value)}
            required
          />
          Thick
        </label>
        <br />
        <br />
        <label>Choose Delivery Option: </label>
        <br />
        <label htmlFor="pickup">
          <input
            type="radio"
            id="pickup"
            name="delivery"
            value="pickup"
            onChange={(event) => setDeliveryType(event.target.value)}
            required
          />
          Pickup
        </label>
        <br />
        <label htmlFor="delivery">
          <input
            type="radio"
            id="delivery"
            name="delivery"
            value="delivery"
            onChange={(event) => setDeliveryType(event.target.value)}
            required
          />
          Delievry
        </label>
        <br />
        <br />
        <label htmlFor="instructions">Special Instructions (If any): </label>
        <br />
        <textarea
          rows={4}
          cols={50}
          id="instructions"
          onChange={(event) => setInstruction(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button type="submit">Place Order</button>
      </form>
      {formData && (
        <div>
          <h2>Order Details</h2>
          <p>Customer Name: {name}</p>
          <p>Pizza Size: {size}</p>
          <p>Toppings: {toppings.join(', ')}</p>
          <p>Crust Type: {crustType}</p>
          <p>Delivery Option: {delivery}</p>
          <p>Special Instructions: {instruction ? `${instruction}` : 'none'}</p>
        </div>
      )}
    </main>
  );
}
