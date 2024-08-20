import './App.css';
const ProductPage = ({ product }) => {
  //destrucring data
  // const {name, image, price, color, description, inStock } = product

  return (
    <>
      <h1>Product Page</h1>
      <h2>{product.name}</h2>
      <img src={product.image} />
      <p>
        <strong>Price: </strong>${product.price}
      </p>
      <p>
        <strong>Color: </strong>
        {product.color}
      </p>
      <p>
        <strong>Description: </strong>
        {product.description}
      </p>
      <p>
        <strong>
          {product.inStock ? 'In Stock' : 'Currently out of stock'}
        </strong>
      </p>
    </>
  );
};

export default function App() {
  const product = {
    name: 'iPhone 15 Pro',
    image: 'https://via.placeholder.com/150',
    price: 499.99,
    color: 'Midnight Green',
    description:
      'The latest flagship smartphone from Apple with cytting-edge features and stunning design.',
    inStock: true,
  };

  return (
    <main>
      <ProductPage product={product} />
    </main>
  );
}
