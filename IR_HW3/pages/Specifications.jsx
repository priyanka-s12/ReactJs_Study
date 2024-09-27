import Footer from '../components/Footer';
import Header from '../components/Header';

const Specifications = () => {
  const specificationsObj = {
    display: '6.10-inch touchscreen, 1179 x 2566 pixels, 460 ppi',
    processor: 'Apple A16 Bionic (hexa-core)',
    ram: '8GB',
    storage: ['128GB', '256GB', '512GB'],
    cameraRear: '48MP primary (f/1.6) + 12MP (f/2.4)',
    cameraFront: '12MP (f/1.9)',
    os: 'iOS 17',
    battery: 'Not specified',
    wirelessCharging: 'Yes',
    dimensions: '147.60 x 71.60 x 7.80mm, 171.00 grams',
    colors: ['Black', 'Blue', 'Green', 'Pink', 'Yellow'],
    ipRating: 'IP68 (dust and water protection)',
    connectivity: 'Wi-Fi, GPS, Bluetooth, NFC, USB Type-C, 3G, 4G, 5G',
    simSlots: 'Dual Nano-SIM',
    sensors:
      'Accelerometer, ambient light sensor, barometer, gyroscope, proximity sensor, compass/ magnetometer',
  };
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="display-5 fw-normal mb-3">Specifications</h2>
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <strong>Display: </strong>
            {specificationsObj.display}
          </li>
          <li className="list-group-item">
            <strong>Processor: </strong>
            {specificationsObj.processor}
          </li>
          <li className="list-group-item">
            <strong>RAM: </strong>
            {specificationsObj.ram}
          </li>
          <li className="list-group-item">
            <strong>Storage: </strong>
            {specificationsObj.storage.join(', ')}
          </li>
          <li className="list-group-item">
            <strong>Camera (Rear): </strong>
            {specificationsObj.cameraRear}
          </li>
          <li className="list-group-item">
            <strong>Camera (Front): </strong>
            {specificationsObj.cameraFront}
          </li>
          <li className="list-group-item">
            <strong>OS: </strong>
            {specificationsObj.os}
          </li>
          <li className="list-group-item">
            <strong>Battery: </strong>
            {specificationsObj.battery}
          </li>
          <li className="list-group-item">
            <strong>Wireless Charging: </strong>
            {specificationsObj.wirelessCharging}
          </li>
          <li className="list-group-item">
            <strong>Dimensions: </strong>
            {specificationsObj.dimensions}
          </li>
          <li className="list-group-item">
            <strong>Colors: </strong>
            {specificationsObj.colors.join(', ')}
          </li>
          <li className="list-group-item">
            <strong>IP Rating: </strong>
            {specificationsObj.ipRating}
          </li>
          <li className="list-group-item">
            <strong>Connectivity: </strong>
            {specificationsObj.connectivity}
          </li>
          <li className="list-group-item">
            <strong>SIM Slots: </strong>
            {specificationsObj.simSlots}
          </li>
          <li className="list-group-item">
            <strong>Sensors: </strong>
            {specificationsObj.sensors}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};
export default Specifications;
