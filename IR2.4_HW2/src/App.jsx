import './App.css';

const Cars = ({ cars, model }) => {
  const carData = cars.find((car) => car.model === model);

  return (
    <div>
      <h2>Car Details</h2>
      <p>Model: {carData.model}</p>
      <p>Make: {carData.make}</p>
      <p>Year: {carData.year}</p>
    </div>
  );
};

const Gyms = ({ gyms, location }) => {
  const gymInfo = gyms.find((gym) => gym.location === location);

  return (
    <div>
      <h2>Gym Data</h2>
      <p>Name: {gymInfo.name}</p>
      <p>Location: {gymInfo.location}</p>
      <p>Rating: {gymInfo.rating}</p>
    </div>
  );
};

const Travels = ({ travels, destination }) => {
  const travelData = travels.find(
    (travel) => travel.destination === destination
  );

  return (
    <div>
      <h2>Travel Details</h2>
      <p>Destination: {travelData.destination}</p>
      <p>Duration: {travelData.duration}</p>
      <p>Activities: {travelData.activities.join(', ')}</p>
    </div>
  );
};

const Laptops = ({ laptops, processor }) => {
  const laptopInfo = laptops.find((laptop) => laptop.processor === processor);

  return (
    <div>
      <h2>Laptop Data</h2>
      <p>Brand: {laptopInfo.brand}</p>
      <p>Processor: {laptopInfo.processor}</p>
      <p>RAM: {laptopInfo.ram}</p>
    </div>
  );
};

const Recipes = ({ recipes, dish }) => {
  const recipeDetails = recipes.find((recipe) => recipe.dish === dish);

  return (
    <div>
      <h2>Recipes Details</h2>
      <p>Dish: {recipeDetails.dish}</p>
      <p>Cuisine: {recipeDetails.cuisine}</p>
      <p>Ingredients: {recipeDetails.ingredients.join(', ')}</p>
    </div>
  );
};

const Blogposts = ({ blogposts, title }) => {
  const blogData = blogposts.find((blogpost) => blogpost.title === title);

  return (
    <div>
      <h2>Blog Data</h2>
      <p>Id: {blogData.id}</p>
      <p>Title: {blogData.title}</p>
      <p>Content: {blogData.content}</p>
      <p>Category: {blogData.category}</p>
    </div>
  );
};

export default function App() {
  const cars = [
    { model: 'Car 1', make: 'Make 1', year: 2022 },
    { model: 'Car 2', make: 'Make 2', year: 2021 },
    { model: 'Car 3', make: 'Make 3', year: 2023 },
  ];

  const gyms = [
    { name: 'Gym 1', location: 'Location 1', rating: 4.7 },
    { name: 'Gym 2', location: 'Location 2', rating: 4.2 },
    { name: 'Gym 3', location: 'Location 3', rating: 4.5 },
  ];

  const travels = [
    {
      destination: 'Travel 1',
      duration: '5 days',
      activities: ['Hiking', 'Sightseeing'],
    },
    {
      destination: 'Travel 2',
      duration: '7 days',
      activities: ['Beach', 'Shopping'],
    },
    {
      destination: 'Travel 3',
      duration: '3 days',
      activities: ['Cultural Tours', 'Photography'],
    },
  ];

  const laptops = [
    { brand: 'Laptop 1', processor: 'Intel i5', ram: '8GB' },
    { brand: 'Laptop 2', processor: 'AMD Ryzen 7', ram: '16GB' },
    { brand: 'Laptop 3', processor: 'Apple M1', ram: '12GB' },
  ];

  const recipes = [
    {
      dish: 'Recipe 1',
      cuisine: 'Italian',
      ingredients: ['Tomatoes', 'Pasta', 'Cheese'],
    },
    {
      dish: 'Recipe 2',
      cuisine: 'Mexican',
      ingredients: ['Beans', 'Rice', 'Avocado'],
    },
    {
      dish: 'Recipe 3',
      cuisine: 'Indian',
      ingredients: ['Curry', 'Rice', 'Naan'],
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'Blog Post 1',
      content: 'Content 1',
      category: 'Technology',
    },
    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },
    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Fashion' },
  ];

  return (
    <main>
      <Cars cars={cars} model="Car 2" />
      <hr />
      <Gyms gyms={gyms} location="Location 2" />
      <hr />
      <Travels travels={travels} destination="Travel 3" />
      <hr />
      <Laptops laptops={laptops} processor="Apple M1" />
      <hr />
      <Recipes recipes={recipes} dish="Recipe 2" />
      <hr />
      <Blogposts blogposts={blogPosts} title="Blog Post 3" />
    </main>
  );
}
