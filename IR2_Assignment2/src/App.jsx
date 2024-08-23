import './App.css';

const Exercises = ({ exercises }) => {
  const totalCaloriesBurned = exercises.reduce(
    (acc, curr) => acc + curr.caloriesBurned,
    0
  );
  // console.log(totalCaloriesBurned)
  return (
    <>
      <h2>Total Calories Burned during Exercises</h2>
      <p>{totalCaloriesBurned}</p>
    </>
  );
};

const Songs = ({ songs }) => {
  const filteredSongs = songs.filter((song) => song.rating > 3.9);

  const totalDuration = filteredSongs.reduce(
    (acc, curr) => acc + curr.duration,
    0
  );

  return (
    <>
      <h2>Total Duration of Songs with Rating Above 3.9</h2>
      {totalDuration}
    </>
  );
};

const Books = ({ books, title }) => {
  const bookDetails = books.find((book) => book.title === title);

  return (
    <>
      <h2>Book Details</h2>
      <p>Title: {bookDetails.title}</p>
      <p>Author : {bookDetails.author}</p>
      <p>Genre: {bookDetails.genre}</p>
    </>
  );
};

const SongsData = ({ songsData, title }) => {
  const songDetails = songsData.find((song) => song.title === title);

  return (
    <>
      <h2>Song Details</h2>
      <p>Title: {songDetails.title}</p>
      <p>Artist: {songDetails.artist}</p>
      <p>Genre: {songDetails.genre}</p>
    </>
  );
};

const Cities = ({ cities, name }) => {
  const cityData = cities.find((city) => city.name === name);

  return (
    <>
      <h2>City Data</h2>
      <p>Name: {cityData.name}</p>
      <p>Population: {cityData.population}</p>
    </>
  );
};

const Products = ({ products, productId }) => {
  const productDetails = products.find((product) => product.id === productId);

  return (
    <>
      <h2>Product Details</h2>
      <p>Id: {productDetails.id}</p>
      <p>Name: {productDetails.name}</p>
      <p>Price: ${productDetails.price}</p>
    </>
  );
};

const Students = ({ students, name }) => {
  const studentDetails = students.find((student) => student.name === name);

  return (
    <>
      <h2>Student Data</h2>
      <p>Name: {studentDetails.name}</p>
      <p>Age: {studentDetails.age}</p>
      <p>Maths: {studentDetails.grades.math}</p>
      <p>Science: {studentDetails.grades.science}</p>
      <p>English: {studentDetails.grades.english}</p>
    </>
  );
};

const Orders = ({ orders, customerName }) => {
  const orderDetails = orders.find((order) => order.customer === customerName);

  //map() works on array - products property array of obj
  const products = orderDetails.products.map((product) => (
    <div key={product.id}>
      <p>Product Id: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Product Quantity: {product.quantity}</p>
      ------ ------ ------
    </div>
  ));

  return (
    <>
      <h2>Order Details</h2>
      <p>Customer Id: {orderDetails.id}</p>
      <p>Customer Name: {orderDetails.customer}</p>
      <p>Total Amount: {orderDetails.totalAmount}</p>
      <p>------ ------ ------</p>
      {products}
    </>
  );
};

const Employees = ({ employees, empId }) => {
  const empData = employees.find((emp) => emp.id === empId);
  // console.log(empData)

  return (
    <div>
      <h2>Employee Data</h2>
      <p>Emp Id: {empData.id}</p>
      <p>Name: {empData.name}</p>
      <p>Position: {empData.position}</p>
      <p>Department: {empData.department.name}</p>
      <p>Location: {empData.department.location}</p>
    </div>
  );
};

const Store = ({ store }) => {
  //2 ways - filter and reduce

  // const filteredItems = store.categories.filter(category => category.itemDetail.inStock === true)
  // console.log(filteredItems)

  // return(
  //   <>
  //     <h2>Total Number of Items in Stock</h2>
  //     <p>{filteredItems.length}</p>
  //   </>
  // )

  const itemsInStock = store.categories.reduce(
    (acc, curr) => (curr.itemDetail.inStock ? acc + 1 : acc),
    0
  );

  return (
    <>
      <h2>Total Number of Items in Stock</h2>
      <p>{itemsInStock}</p>
    </>
  );
};
export default function App() {
  const exercises = [
    { id: 1, name: 'Running', caloriesBurned: 300 },
    { id: 2, name: 'Cycling', caloriesBurned: 200 },
    { id: 3, name: 'Swimming', caloriesBurned: 400 },
  ];

  const songs = [
    { id: 1, title: 'Song A', duration: 180, rating: 4.2 },
    { id: 2, title: 'Song B', duration: 210, rating: 3.8 },
    { id: 3, title: 'Song C', duration: 150, rating: 4.5 },
  ];

  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
    },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
    },
  ];

  const songsData = [
    {
      id: 1,
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      genre: 'Rock',
    },
    { id: 2, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock' },
    { id: 3, title: 'Rolling in the Deep', artist: 'Adele', genre: 'Pop' },
  ];

  const cities = [
    { id: 1, name: 'New York', population: 8500000 },
    { id: 2, name: 'Paris', population: 2200000 },
    { id: 3, name: 'Tokyo', population: 3770000 },
  ];

  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 60 },
  ];

  const students = [
    {
      id: 1,
      name: 'Alice',
      age: 20,
      grades: { math: 90, science: 85, english: 92 },
    },
    {
      id: 2,
      name: 'Bob',
      age: 22,
      grades: { math: 78, science: 80, english: 85 },
    },
    {
      id: 3,
      name: 'Charlie',
      age: 21,
      grades: { math: 95, science: 88, english: 94 },
    },
  ];

  const orders = [
    {
      id: 1,
      customer: 'John Doe',
      totalAmount: 150,
      products: [
        { id: 101, name: 'Widget', quantity: 2 },
        { id: 102, name: 'Gadget', quantity: 1 },
      ],
    },
    {
      id: 2,
      customer: 'Alice Smith',
      totalAmount: 200,
      products: [
        { id: 103, name: 'Tool', quantity: 1 },
        { id: 104, name: 'Device', quantity: 3 },
      ],
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      totalAmount: 100,
      products: [{ id: 105, name: 'Accessory', quantity: 5 }],
    },
  ];

  const employees = [
    {
      id: 1,
      name: 'Jane Doe',
      position: 'Software Engineer',
      department: { name: 'Engineering', location: 'Building A' },
    },
    {
      id: 2,
      name: 'Sam Smith',
      position: 'Marketing Manager',
      department: { name: 'Marketing', location: 'Building B' },
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'HR Specialist',
      department: { name: 'Human Resources', location: 'Building C' },
    },
  ];

  const store = {
    name: 'Tech Emporium',
    categories: [
      {
        id: 1,
        name: 'Electronics',
        itemDetail: { id: 101, product: 'Laptop', inStock: true },
      },
      {
        id: 2,
        name: 'Accessories',
        itemDetail: { id: 201, product: 'Headphones', inStock: true },
      },
      {
        id: 3,
        name: 'Electronics',
        itemDetail: { id: 301, product: 'Heater', inStock: false },
      },
    ],
  };

  return (
    <main>
      <Exercises exercises={exercises} />
      <hr />
      <Songs songs={songs} />
      <hr />
      <Books books={books} title="The Great Gatsby" />
      <hr />
      <SongsData songsData={songsData} title="Bohemian Rhapsody" />
      <hr />
      <Cities cities={cities} name="Paris" />
      <hr />
      <Products products={products} productId={3} />
      <hr />
      <Students students={students} name="Charlie" />
      <hr />
      <Orders orders={orders} customerName="Alice Smith" />
      <hr />
      <Employees employees={employees} empId={1} />
      <hr />
      <Store store={store} />
    </main>
  );
}
