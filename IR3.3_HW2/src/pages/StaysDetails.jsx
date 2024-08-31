import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const StaysDetails = () => {
  const stayId = useParams();
  //   console.log(stayId);

  const stays = [
    {
      id: '1',
      name: 'Cozy Cottage Retreat',
      type: 'Cottage',
      location: 'Mountain View, CA',
      rating: 4.8,
      description: 'Escape to a charming cottage nestled in the mountains.',
      amenities: ['Kitchen', 'WiFi', 'Parking'],
      price: '$150/ night',
    },
    {
      id: '2',
      name: 'Beachfront Paradise Villa',
      type: 'Villa',
      location: 'Maui, Hawai',
      rating: 4.9,
      description: 'Experience luxury living in a stunning beachfront villa.',
      amenities: ['Private Pool', 'Ocean View', 'Fitness Center'],
      price: '$500/ night',
    },
    {
      id: '3',
      name: 'Urban Loft in the City',
      type: 'Apartment',
      location: 'New York City, NY',
      rating: 4.5,
      description:
        'Live in style in a modern loft apartment in the heart of the city.',
      amenities: ['Downtown Location', 'Gym Access', '24/7 Security'],
      price: '$250/ night',
    },
    {
      id: '4',
      name: 'Rustic Cabin in the Woods',
      type: 'Cottage',
      location: 'Robin View, CA',
      rating: 4.8,
      description: 'Escape to a charming cottage nestled in the woods.',
      amenities: ['Kitchen', 'WiFi', 'Parking', 'Private Pool'],
      price: '$350/ night',
    },
  ];

  const stayData = stays.find((stay) => stay.id == stayId.stayId);
  //   console.log(stayData);

  return (
    <>
      <Header />
      <main>
        <section className="container py-4">
          <h4 className="display-5 fw-normal">{stayData.name}</h4>
          <p>Type: {stayData.type}</p>
          <p>Location: {stayData.location}</p>
          <p>Rating: {stayData.rating}</p>
          <p>{stayData.description}</p>
          <hr />
          <h5>Amenities</h5>
          <ul>
            {stayData.amenities.map((amenity) => (
              <li key={amenity}>{amenity}</li>
            ))}
          </ul>
          <p>Price: {stayData.price}</p>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default StaysDetails;
