function Stays() {
  return (
    <main className="container py-4">
      <h1 className="display-5 fw-normal mb-3">Featured Stays</h1>

      <section>
        {/* 1st card */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./public/stay1.jpg"
                alt="stay 1"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Luxurious Taj Mahal View Apartment
                </h5>
                <p className="card-text">
                  Wake up to a breathtaking view of the Taj Mahal from this
                  luxurious apartment. Explore the rich history and beauty of
                  this iconic monument right from your window.
                </p>
                <h6 className="text-secondary">Last updated 3 mins ago</h6>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd card */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./public/stay2.jpg"
                alt="stay 2"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cozy Retreat in the Mountains</h5>
                <p className="card-text">
                  Escape to nature with this cozy mountain retreat. Enjoy
                  tranquility and stunning views while being surrounded by lush
                  forests and fresh mountain air.
                </p>
                <h6 className="text-secondary">Last updated 10 mins ago</h6>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd card */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./public/stay3.jpg"
                alt="stay 3"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  Seaside Villa with Private Beach Access
                </h5>
                <p className="card-text">
                  Indulge in luxury with this stunning seaside villa. Relax on
                  pristine beaches, take a dip in the private pool, and soak up
                  in the sun in this exclusive coastal retreat.
                </p>
                <h6 className="text-secondary">Last updated 15 mins ago</h6>
              </div>
            </div>
          </div>
        </div>

        {/* 4th card */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="./public/stay4.jpg"
                alt="stay 4"
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Modern Loft in the City Center</h5>
                <p className="card-text">
                  Experience urban living at its finest with this modern loft.
                  Conveniently located in the city center, it offers style,
                  comfort, and easy access to dining and entertainment options.
                </p>
                <h6 className="text-secondary">Last updated 20 mins ago</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Stays;
