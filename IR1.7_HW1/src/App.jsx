import './App.css';

const UserStatus = ({ isOnline }) => (
  <p>{isOnline ? 'User is online.' : 'User is offline.'}</p>
);

const DayOfWeek = ({ isWeekend }) => (
  <p>{isWeekend ? 'Enjoy your weekend!' : 'Have a great day!'}</p>
);

const ShoppingCart = ({ itemCount }) => (
  <p>
    {itemCount > 0
      ? `You have ${itemCount} items in your cart.`
      : 'Your cart is empty.'}
  </p>
);

const DiscountOffer = ({ isPrimeMember }) => (
  <p>
    {isPrimeMember
      ? "You're eligible for a 20% discount."
      : 'Become a prime member for exclusive discounts.'}
  </p>
);

const ShowError = ({ showError }) => (
  <p>{showError && 'An error occured. Please try again later.'}</p>
);

export default function App() {
  return (
    <main>
      <UserStatus isOnline={true} />
      <DayOfWeek isWeekend={true} />
      <ShoppingCart itemCount={10} />
      <DiscountOffer isPrimeMember={true} />
      <ShowError showError={true} />
    </main>
  );
}
