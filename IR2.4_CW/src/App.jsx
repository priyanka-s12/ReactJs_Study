import './App.css';
//find() - useful in searches - find X data from database  - returns first result/ object that satisfies the provided condition
const Products = ({ products, productId }) => {
  //traditional way
  // for(let i = 0; i < products.length; i++){
  //   if(products[i].id === productId)
  //     return products[i]
  // }

  const productData = products.find((product) => product.id === productId);
  // console.log(productData)

  return (
    <div>
      <h2>Product Data</h2>
      <p>Id: {productData.id}</p>
      <p>Name: {productData.name}</p>
      <p>Price: ${productData.price}</p>
    </div>
  );
};

const Restaurants = ({ restaurants, name }) => {
  const restaurantData = restaurants.find(
    (restaurant) => restaurant.name === name
  );
  // console.log(restaurantData)

  return (
    <div>
      <h2>Restaurant Data</h2>
      <p>Restaurant Name: {restaurantData.name}</p>
      <p>Cuisine: {restaurantData.cuisine}</p>
    </div>
  );
};

const Videos = ({ videos, title }) => {
  const videoInfo = videos.find((video) => video.title === title);
  return (
    <div>
      <h2>Video Info</h2>
      <p>Title: {videoInfo.title}</p>
      <p>Views: {videoInfo.views}</p>
    </div>
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
      <Products products={products} productId={2} />
      <hr />
      {/* <Restaurants restaurants={restaurants} name={'Restaurant 3'}/> */}
      <Restaurants restaurants={restaurants} name="Restaurant 3" />
      <hr />
      <Videos videos={videos} title="Video 1" />
    </main>
  );
}
