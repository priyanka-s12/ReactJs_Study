import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Products = () => {
  const products = [
    {
      id: '1',
      name: 'Product 1',
      description:
        'This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$99.99',
      availableColors: ['Red', 'Blue', 'Green'],
      isReturnApplicable: true,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: '2',
      name: 'Product 2',
      description:
        'This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$129.99',
      availableColors: ['White', 'Black'],
      isReturnApplicable: true,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: '3',
      name: 'Product 3',
      description:
        'This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$79.99',
      availableColors: ['Yellow'],
      isReturnApplicable: false,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
    {
      id: '4',
      name: 'Product 4',
      description:
        'This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: '$49.99',
      availableColors: ['Purple', 'Yellow'],
      isReturnApplicable: true,
      productImageUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <>
      <Header />
      <main className="container py-4">
        <section>
          <h2 className="display-5 fw-normal mb-3">Products</h2>

          {products.map((product) => (
            <div className="card mb-3" key={product.id}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={product.productImageUrl}
                    alt="Product 1"
                    className="rounded-start img-fluid"
                  />
                </div>
                <div className="col-md-8 py-2">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <small className="text-secondary">
                    Price: {product.price}
                  </small>
                  <p className="mt-3">
                    <Link className="btn btn-primary" to={product.id}>
                      View Product
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Products;
