import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Usa Tracking!</h1>
      <p>This is the home page where we introduce our tracking system and services.</p>
      <img 
        src="https://electromobili.ru/images/com_hikashop/upload/tesla-semi-2.jpg" 
        alt="Home" 
        style={{ width: '100%', height: 'auto' }}
      />
      <p>
        Our system helps track American trucks efficiently across the country. Stay updated with the latest news and information about trucking.
      </p>
    </div>
  );
}

function News() {
  return (
    <div>
      <h1>Latest Trucking News</h1>
      <img src="https://scontent.fgyd21-1.fna.fbcdn.net/v/t39.30808-6/452013147_122111012870390166_3839046487249992140_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=A2aj1LcnxVwQ7kNvgFfX4Z1&_nc_zt=23&_nc_ht=scontent.fgyd21-1.fna&_nc_gid=APS0aqsDfsdRfX_0upFegzf&oh=00_AYDV9vEvUXgJWOPIVzI4U9kI20Ia-VH57MWgbovR57b_XQ&oe=6740D327" alt="" />
      <p>Stay informed with the latest developments in the trucking industry.</p>
      
      <div>
        <h3>New Trucking Regulations Announced</h3>
        <p>New trucking regulations are set to go into effect next month, including changes in emissions standards.</p>
        <img src="https://scontent.fgyd21-1.fna.fbcdn.net/v/t39.30808-6/457164779_122116956236390166_7556607436645417105_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=J_zm82oRvO8Q7kNvgFWV0LK&_nc_zt=23&_nc_ht=scontent.fgyd21-1.fna&_nc_gid=Ay44l_OBLm6C6lWWLFvwaA_&oh=00_AYDDsxvXokxSgVmI_vw1kEocxZ9swzqzH4hv-u5WtSQWrw&oe=6740ED31" alt="" />
      </div>
      
      <div>
        <h3>Top Trucking Routes for 2024</h3>
        <p>Find out which trucking routes are projected to be the most profitable in 2024, with traffic analysis and new highway constructions.</p>
      </div>
      
      <div>
        <h3>Electric Trucks in the Future</h3>
        <p>Electric trucks are gaining momentum in the trucking industry. Read about how this new technology will reshape the future of freight.</p>
      </div>
    </div>
  );
}

function Trucks() {
  return (
    <div>
      <h1>Truck Specifications & Information</h1>
      <img src="https://scontent.fgyd21-1.fna.fbcdn.net/v/t39.30808-6/452911297_122111202686390166_3003274098435970259_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jDPPk36Xt-MQ7kNvgHhRFzK&_nc_zt=23&_nc_ht=scontent.fgyd21-1.fna&_nc_gid=AL3JU4eMrLoJgxHXbiBKq9l&oh=00_AYDxGw413RhEfCPqPd7rrVvcknzSaBESASwJd-GvuEFqsQ&oe=6740CF45" alt="" />
      <p>Explore the details of various truck models and specifications that power the American transportation system.</p>
      
      <div>
        <h3>Peterbilt 579</h3>
        <img 
          src="https://www.ttnews.com/sites/default/files/styles/article_full_width_image/public/images/articles/peterbilt-new-model-579-snow-mountains.jpg" 
          alt="Peterbilt 579"
          style={{ width: '100%', height: 'auto' }}
        />
        <p>Peterbilt 579 offers advanced technology, safety, and fuel efficiency, making it one of the most popular trucks in the industry.</p>
      </div>
      
      <div>
        <h3>Freightliner Cascadia</h3>
        <img 
          src="https://img.ccjdigital.com/files/base/randallreilly/all/image/2019/02/ccj.cascadia-2019-02-18-07-15.png?auto=format%2Ccompress&fit=max&q=70&w=400" 
          alt="Freightliner Cascadia"
          style={{ width: '100%', height: 'auto' }}
        />
        <p>The Freightliner Cascadia is known for its durability, low operating costs, and cutting-edge safety features.</p>
      </div>
      
      <div>
        <h3>Volvo VNL 760</h3>
        <img 
          src="https://www.volvotrucks.ca/en-ca/trucks/media_1b0eb431d927c12be72ecee057f9e7219b6b38920.jpeg?width=750&format=jpeg&optimize=medium" 
          alt="Volvo VNL 760"
          style={{ width: '100%', height: 'auto' }}
        />
        <p>Volvo VNL 760 is built for long-haul efficiency with a focus on driver comfort and productivity.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h3 style={{ letterSpacing: '5px' }}>Usa Tracking</h3>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" to="/" aria-current="page">
                  Home
                </Link>
                <Link className="nav-link" to="/news">
                  News
                </Link>
                <Link className="nav-link" to="/trucks">
                  Trucks
                </Link>
              </div>
            </div>
          </div>
        </nav>

        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://st.depositphotos.com/3593445/53845/i/450/depositphotos_538455564-stock-photo-arizona-usa-2020-american-trucks.jpg"
                className="d-block w-100"
                alt="... "
                style={{ height: '75vh', objectFit: 'cover' }} 
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://gruzovoesto.com.ua/wp-content/uploads/2012/03/american_gr_car.jpg"
                className="d-block w-100"
                alt="... "
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-photo/truck-digital-art-illustration_23-2151650114.jpg"
                className="d-block w-100"
                alt="... "
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/trucks" element={<Trucks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
