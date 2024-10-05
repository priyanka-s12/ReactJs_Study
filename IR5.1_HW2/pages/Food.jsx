import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export const foodItemsData = [
  { id: 1, name: 'Apple', calories: 52, category: 'Fruit' },
  { id: 2, name: 'Banana', calories: 89, category: 'Fruit' },
  { id: 3, name: 'Chicken Breast', calories: 165, category: 'Protein' },
  { id: 4, name: 'Salad', calories: 100, category: 'Vegetable' },
  { id: 5, name: 'Yogurt', calories: 120, category: 'Dairy' },
];

const Food = () => {
  const [categories, setCategories] = useState(['All']);
  const categoryHandler = (event) => {
    const { value, checked } = event.target;
    if (value === 'All') {
      setCategories(['All']);
    } else {
      if (checked) {
        setCategories((prev) =>
          prev.includes('All') ? [value] : [...prev, value]
        );
        console.log(categories);
      } else {
        setCategories(categories.filter((item) => item !== value));
        console.log(categories);
      }
    }
    console.log(categories);
  };
  console.log(categories);

  const filteredData = categories.includes('All')
    ? foodItemsData
    : foodItemsData.filter((food) => categories.includes(food.category));

  console.log(filteredData);
  return (
    <>
      <Header />
      <main className="container py-3">
        <section className="mb-3">
          <h2 className="mb-3">List of Food Items</h2>
          <label className="form-label me-3">Category: </label>
          <label className="form-check-label me-3" htmlFor="All">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="All"
              value="All"
              checked={categories.includes('All')}
              onChange={categoryHandler}
            />
            All
          </label>
          <label className="form-check-label me-3" htmlFor="Fruit">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="Fruit"
              value="Fruit"
              checked={categories.includes('Fruit')}
              onChange={categoryHandler}
            />
            Fruit
          </label>
          <label className="form-check-label me-3" htmlFor="Protein">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="Protein"
              value="Protein"
              checked={categories.includes('Protein')}
              onChange={categoryHandler}
            />
            Protein
          </label>
          <label className="form-check-label me-3" htmlFor="Vegetable">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="Vegetable"
              value="Vegetable"
              checked={categories.includes('Vegetable')}
              onChange={categoryHandler}
            />
            Vegetable
          </label>
          <label className="form-check-label me-3" htmlFor="Dairy">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id="Dairy"
              value="Dairy"
              checked={categories.includes('Dairy')}
              onChange={categoryHandler}
            />
            Dairy
          </label>
        </section>
        <section>
          <ul className="list-group">
            {filteredData.map((food) => (
              <li className="list-group-item" key={food.id}>
                <h5>{food.name}</h5>
                <p>Calories: {food.calories}</p>
                <p>Category: {food.category}</p>
                <Link className="btn btn-primary" to={`/food/${food.id}`}>
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Food;
