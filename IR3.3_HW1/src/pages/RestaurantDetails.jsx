import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const restaurantId = useParams();
  console.log(restaurantId);

  const restaurants = [
    {
      id: '1',
      name: 'The Golden Spoon',
      cuisine: 'Italian',
      location: '123 Main Street, Cityville',
      rating: 4.7,
      description: 'Experience authentic Itaian cuisine in a cozy restaurant.',
      menu: [
        { name: 'Spaghetti Carbonara', price: '$15' },
        { name: 'Margherita Pizza', price: '$12' },
        { name: 'Tiramisu', price: '$8' },
      ],
    },
    {
      id: '2',
      name: 'Spice Junction',
      cuisine: 'Indian',
      location: '458 Elm Street, Townsville',
      rating: 4.5,
      description: 'Savor the flavors of India with our traditional dishes.',
      menu: [
        { name: 'Chicken Tikka Masala', price: '$14' },
        { name: 'Vegetable Biryani', price: '$12' },
        { name: 'Gulab Jamun', price: '$6' },
      ],
    },
    {
      id: '3',
      name: 'Sushi Delight',
      cuisine: 'Japanese',
      location: '789 Oak Avenue, Villageland',
      rating: 4.5,
      description: 'Enjoy exquisite Japanese sushi prepared by master chefs.',
      menu: [
        { name: 'California Roll', price: '$10' },
        { name: 'Sashimi Platter', price: '$18' },
        { name: 'Green Tea Ice Cream', price: '$5' },
      ],
    },
  ];
  //find the restaurant data from array of objs that matches with url-id
  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id === restaurantId.restaurantId
  );
  console.log(restaurantData);

  //   const menu = restaurantData.menu.map((restaurant) => (
  //     <>
  //       <h5>{restaurant.name}</h5>
  //       <p>Price: {restaurant.price}</p>
  //     </>
  //   ));

  return (
    <>
      {/* <h1>Restaurant Details</h1> */}
      <Header />
      <main className="container py-4">
        <section>
          <h2 className="display-5 fw-normal">{restaurantData.name}</h2>
          <p>Cuisine: {restaurantData.cuisine}</p>
          <p>Location : {restaurantData.location}</p>
          <p>Rating: {restaurantData.rating}</p>
          <p>{restaurantData.description}</p>
          <hr />
          <h4 className="mb-3">Menu</h4>
          <div className="row">
            {/* {menu} */}
            {restaurantData.menu.map((restaurant) => (
              <>
                <div className="col-md-4">
                  <div className="card mb-3 p-3">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text">Price: {restaurant.price}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default RestaurantDetails;
