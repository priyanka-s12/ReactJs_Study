import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { foodItemsData } from './Food';

const FoodDetails = () => {
  const foodId = useParams();
  console.log(foodId);

  const foodData = foodItemsData.find(
    (data) => data.id === parseInt(foodId.foodId)
  );
  console.log(foodData);
  return (
    <>
      <Header />
      <main className="container py-3">
        <h3 className="mb-3">{foodData.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>
            {foodData.name}
          </li>
          <li className="list-group-item">
            <strong>Calories: </strong>
            {foodData.calories}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};
export default FoodDetails;
