import Header from '../components/Header';
import Footer from '../components/Footer';
const Cart = () => {
  const cart = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 129.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 79.99, quantity: 3 },
  ];

  //   const cartDisplay = cart.map((cart) => {
  //     const total = (cart.price * cart.quantity).toFixed(2);

  //     return (
  //       <li
  //         className="list-group-item d-flex justify-content-between"
  //         key={cart.id}
  //       >
  //         <div>
  //           <h4>{cart.name}</h4>
  //           <p>Price: ${cart.price}</p>
  //           <p>Quantity: {cart.quantity}</p>
  //         </div>
  //         <p>Total: ${total}</p>
  //       </li>
  //     );
  //   });

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  //console.log(totalPrice);

  return (
    <>
      <Header />
      <main className="container py-4">
        <section>
          <h2 className="display-5 fw-normal mb-3">Shopping Cart</h2>
          <ul className="list-group">
            {cart.map((cart) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={cart.id}
              >
                <div>
                  <h4>{cart.name}</h4>
                  <p>Price: ${cart.price}</p>
                  <p>Quantity: {cart.quantity}</p>
                </div>
                <p>Total: ${(cart.price * cart.quantity).toFixed(2)}</p>
              </li>
            ))}
            {/* {cartDisplay} */}
            <hr />
            <h4>Total Price: ${totalPrice}</h4>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Cart;
