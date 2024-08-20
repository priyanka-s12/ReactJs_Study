import './App.css';
//whether use is logged in or not
const Message = ({ isLoggedIn }) => {
  // if (isLoggedIn) {
  //   return <p>Welcome Back, User!</p>;
  // } else {
  //   return <p>Please login to continue.</p>;
  // }

  return isLoggedIn ? (
    <p>Welcome back, User!</p>
  ) : (
    <p>Pleasse login to continue.</p>
  );
};

const Greeting = ({ isMorning }) => (
  <p>{isMorning ? 'Good Morning' : 'Good Evening!'}</p>
);
//used JSX- g=here avoid duplicate of tag
// return <p>{isMorning ? "Good Morning" : "Good Evening!"}</p>;

const ShowNotification = ({ notification }) => {
  //if there is notification then show it, no else part - adv of && operator if not pass notification it won't show
  //adv of jsx - here within html, write js and html - within js write html and vice-versa
  return <div>{notification && <p>{notification}</p>}</div>;
};

const TicketPricing = ({ passengerAge }) => {
  let price = 100;

  return (
    <div>
      {passengerAge > 60 ? (
        <p>Ticket Price: {price - 0.15 * price}</p>
      ) : (
        <p>Ticket Price: {price}</p>
      )}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <Message isLoggedIn={true} />
      <Greeting isMorning={true} />
      <ShowNotification notification="Notification Message" />
      {/* <ShowNotification /> */}
      <TicketPricing passengerAge={50} />
    </main>
  );
}
