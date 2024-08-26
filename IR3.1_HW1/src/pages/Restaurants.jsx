export default function Restaurants() {
  return (
    <main className="container py-4">
      <h1 className="display-5 fw-normal mb-3">Restaurants</h1>
      <section>
        {/* 1st card */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://i.pinimg.com/originals/3d/a3/7d/3da37dc6421f978a50e165466f221d72.jpg"
                alt="restaurant 1"
                className="img-fluid rounded-start"
              />
            </div>
            <div className=" col-md-8">
              <div className="card-body">
                <h5 className="card-title">Taste of India</h5>
                <p>
                  Enjoy authentic Indian cuisine at Taste of India. Explore a
                  variety of delicious dishes from different regions of India..
                </p>
                <p className="text-secondary">Rating: 4.7 | Open Now</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd card */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://wallpapers.com/images/hd/restaurant-background-9qqixx9l4zqreb5u.jpg"
                alt="restaurant 2"
                className="img-fluid rounded-start"
              />
            </div>
            <div className=" col-md-8">
              <div className="card-body">
                <h5 className="card-title">Pizza Paradise</h5>
                <p>
                  Indulge in mouth-watering pizzas at Pizza Paradise. With a
                  variety of toppings and crusts, it's a pizza lover's dream.
                </p>
                <p className="text-secondary">Rating: 4.5 | Open Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
