//list elements/ array of objects on the dom in react js using map()
import './App.css';

//passing props, and destructre
const ProductList = ({ products }) => {
  //will run map since it's an array
  const productListing = products.map((product) => (
    //round bracket coz render html- round bracket optional
    //key attribute can be used to any html tag, using that we will provide unique id to each element/ data, so when using map() use key attribute - if not used it gives warning in console, but it runs app- you should use unique identification - "each child in list should have a unique prop"
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  ));
  // console.log(products);
  return (
    <>
      <h2>Products</h2>
      {productListing}
    </>
  );
};

const Restaurants = ({ restaurants }) => {
  const restaurantListing = restaurants.map((restaurant) => (
    <div key={restaurant.id}>
      <h3>Name: {restaurant.name}</h3>
      <p>Cuisine: {restaurant.cuisine}</p>
    </div>
  ));

  return (
    <>
      <h2>Restaurants</h2>
      {restaurantListing}
    </>
  );
};

const Videos = ({ videos }) => {
  const videoListing = videos.map((video) => (
    <div key={video.id}>
      <h3>Title: {video.title}</h3>
      <p>Views: {video.views}</p>
    </div>
  ));

  return (
    <>
      <h2>Videos</h2>
      {videoListing}
    </>
  );
};
export default function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    { id: 3, name: 'Product 3', price: 39.99 },
  ];

  const restaurants = [
    { id: 1, name: 'Restaurant 1', cuisine: 'Italian' },
    { id: 2, name: 'Restaurant 2', cuisine: 'Mexican' },
    { id: 3, name: 'Restaurant 3', cuisine: 'Chinese' },
  ];

  const videos = [
    { id: 1, title: 'Video 1', views: 1000 },
    { id: 2, title: 'Video 2', views: 2000 },
    { id: 3, title: 'Video 3', views: 3000 },
  ];
  return (
    <main>
      <ProductList products={products} />
      <hr />
      <Restaurants restaurants={restaurants} />
      <hr />
      <Videos videos={videos} />
    </main>
  );
}
