import Footer from '../components/Footer';
import Header from '../components/Header';

const Features = () => {
  const featuresObj = {
    stunningDisplay:
      'Enjoy a 6.10-inch touchscreen with a high resolution of 1179x2556 pixels and a pixel density of 460 ppi.',
    powerfulPerformance:
      'Equipped with a hexa-core Apple A16 Bionic processor and 8GB of RAM, the iPhone 15 ensures smooth and fast operation.',
    ampleStorage:
      'Choose from three storage options - 128GB, or 512GB- to store your apps, photos, and more.',
    dualCameraSystem:
      'Capture stunning photos with a 48-megapixel primary camera (f/1.6) and 12-megapixek secondary camera (f/2.4) on the rear.',
    selfies:
      'Take clear and detailed selfies with the 12-megapixel front camera featuring an f/1.9 aperture.',
    advancediOS17:
      'Experience the latest features and enhancements with the iOS 17 operating system.',
    batteryLife:
      'The iPhone 15 ensures long-lasting battery performance to keep you connected all day.',
    charging:
      'Enjoy the convenience of wireless charging to keep your device powered up without cables.',
    design:
      'With dimensions of 147.60 x 71.60 x 7.80mm and a weight of 171.00 grams, the iPhone `5 is biith stylish and portable',
    colors:
      'Choose from a range of colors, including Black, Blue, Green, Pink, and Yellow to match your style.',
    ip68Rating:
      'The iPhone 15 is rated IP68 for dust and water protection, ensuring durability in various conditions.',
    connectivity:
      'Stay connected with 5G support and enjoy high-speed data on your device.',
    dualSim:
      'Use two Nano-SIM cards for added flexibility in your mobile connectivity.',
    sensors:
      'The iPhone 15 is equipped with various sensors for an enhanced user experience.',
  };
  return (
    <>
      <Header />
      <main className="container py-3">
        <h2 className="display-5 fw-normal mb-3">Features</h2>
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <strong>Stunning Display: </strong>
            {featuresObj.stunningDisplay}
          </li>
          <li className="list-group-item">
            <strong>Powerful Performance: </strong>
            {featuresObj.powerfulPerformance}
          </li>
          <li className="list-group-item">
            <strong>Ample Storage: </strong>
            {featuresObj.ampleStorage}
          </li>
          <li className="list-group-item">
            <strong>Dual Camera System: </strong>
            {featuresObj.dualCameraSystem}
          </li>
          <li className="list-group-item">
            <strong>Crystal-Clear Selfies: </strong>
            {featuresObj.selfies}
          </li>
          <li className="list-group-item">
            <strong>Advanced iOS 17: </strong>
            {featuresObj.advancediOS17}
          </li>
          <li className="list-group-item">
            <strong>All-Day Battery Life: </strong>
            {featuresObj.batteryLife}
          </li>
          <li className="list-group-item">
            <strong>Wireless Charging: </strong>
            {featuresObj.charging}
          </li>
          <li className="list-group-item">
            <strong>Sleek Design: </strong>
            {featuresObj.design}
          </li>
          <li className="list-group-item">
            <strong>Vibrant Colors: </strong>
            {featuresObj.colors}
          </li>
          <li className="list-group-item">
            <strong>IP68 Rating: </strong>
            {featuresObj.ip68Rating}
          </li>
          <li className="list-group-item">
            <strong>5G Connectivity: </strong>
            {featuresObj.connectivity}
          </li>
          <li className="list-group-item">
            <strong>Dual-SIM Support: </strong>
            {featuresObj.dualSim}
          </li>
          <li className="list-group-item">
            <strong>Advanced Sensors: </strong>
            {featuresObj.sensors}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Features;
