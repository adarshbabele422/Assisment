import "./Home.css";
import React, { useState, useEffect , useContext } from "react";
import { ThemeContext } from '../theme/ThemeContext';
import CountUp from "react-countup";

const slides = [
  {
    id: 1,
    image: "./images/Hero/hero.png",
    title1: "Lessons and insights",
    title1Style: { fontSize: "3.5em" },
    title2: "from 8 years",
    title2Style: { color: "rgb(3, 154, 3)", fontSize: "3.5em" },
    text: `Where to grow your business as a photographer: site or social media?`,
    button: { text: "Register", url: "#", style: { backgroundColor: "rgb(3, 154, 3)", color: "white" } }
  },
  {
    id: 2,
    image: "./images/Hero/hero.png",
    title1: "Lessons and insights",
    title1Style: { fontSize: "3.5em" },
    title2: "from 8 years",
    title2Style: { color: "rgb(3, 154, 3)", fontSize: "3.5em" },
    text: `Where to grow your business as a photographer: site or social media?`,
    button: { text: "Register", url: "#", style: { backgroundColor: "rgb(3, 154, 3)", color: "white" } }
  },
  {
    id: 3,
    image: "./images/Hero/hero.png",
    title1: "Lessons and insights",
    title1Style: { fontSize: "3.5em" },
    title2: "from 8 years",
    title2Style: { color: "rgb(3, 154, 3)", fontSize: "3.5em" },
    text: `Where to grow your business as a photographer: site or social media?`,
    button: { text: "Register", url: "#", style: { backgroundColor: "rgb(3, 154, 3)", color: "white", margintop: "2rem" } }
  }
];

const Home = ({ dotColor = "rgba(1, 60, 1, 0.479)", activeDotColor = "rgb(3, 154, 3)" }) => {
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <div className="content-slider">
        <button className="prev" onClick={prevSlide}>
        </button>
        <div className={`slide ${isTransitioning ? "transitioning" : ""}`}>
          <div className="slide-content">
            <h1 style={slides[currentIndex].title1Style}>{slides[currentIndex].title1}</h1>
            <h1 style={slides[currentIndex].title2Style}>{slides[currentIndex].title2}</h1>
            <p>{slides[currentIndex].text}</p>
            <a href={slides[currentIndex].button.url} className="slide-button" style={slides[currentIndex].button.style}>
              {slides[currentIndex].button.text}
            </a>
          </div>
          <img src={slides[currentIndex].image} alt={`Slide ${currentIndex + 1}`} height={400} />
        </div>
        <button className="next" onClick={nextSlide}>
        </button>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              style={{ backgroundColor: currentIndex === index ? activeDotColor : dotColor }}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="client">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
        <div className="logos">
          <img src="./images/clients/logo1.png" alt="clients" height={40} />
          <img src="./images/clients/logo2.png" alt="clients" height={40} />
          <img src="./images/clients/logo3.png" alt="clients" height={40} />
          <img src="./images/clients/logo4.png" alt="clients" height={40} />
          <img src="./images/clients/logo5.png" alt="clients" height={40} />
          <img src="./images/clients/logo6.png" alt="clients" height={40} />
          <img src="./images/clients/logo7.png" alt="clients" height={40} />
        </div>
      </div>

      <div className="community">
        <h1>Manage your entire community in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
        <div className="logos1">
          <div>
            <img src="./images/community/logo1.png" alt="" height={60} />
            <h1>Membership Organisations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div>
            <img src="./images/community/logo2.png" alt="" height={60} />
            <h1>National Associations</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div>
            <img src="./images/community/logo3.png" alt="" height={60} />
            <h1>Clubs And Groups</h1>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
      </div>

      <div className="unlock">
        <div>
          <img src="./images/unlock/image.png" alt="" height={400} />
        </div>
        <div className="div">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae
            est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis.
            Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem.
            Donec elementum pulvinar odio.
          </p>
          <button className="btn1">Learn More</button>
        </div>
      </div>

      <div className="achievements">
        <div className="div">
          <h1>
            Helping a local <span className="green">business reinvent itself</span>
          </h1>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div>
          <div className="counts">
            <img src="./images/achievements/image0.png" alt="" height={45} />
            <span>
              <h3>
                <CountUp end={2245341} duration={2.5} />
              </h3>
              <p>Member</p>
            </span>
            <img src="./images/achievements/image1.png" className="img" alt="" height={45} />
            <span>
              <h3>
                <CountUp end={46328} duration={2.5} />
              </h3>
              <p>Clubs</p>
            </span>
          </div>
          <div className="counts">
            <img src="./images/achievements/image2.png" alt="" height={45} />
            <span>
              <h3>
                <CountUp end={828867} duration={2.5} />
              </h3>
              <p>Event Bookings</p>
            </span>
            <img src="./images/achievements/image.png" className="img" alt="" height={45} />
            <span>
              <h3>
                <CountUp end={1926436} duration={2.5} />
              </h3>
              <p>Payments</p>
            </span>
          </div>
        </div>
      </div>

      <div className="unlock">
        <div>
          <img src="./images/calender/image.png" alt="" height={500} />
        </div>
        <div className="div">
          <h1>How to design your site footer like we did</h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc
            varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
            platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
            ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa.
            Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <button className="btn1">Learn More</button>
        </div>
      </div>

      <div className="customer">
        <div>
          <img src="./images/customers/image0.png" className="img" alt="" height={350} />
        </div>
        <div className="div">
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt
            ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
            molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse
            cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum
            pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque
            vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
            amet magna.
          </p>
          <p className="p">Tim Smith</p>
          <p>British Dragon Boat Racing Association</p>
          <span>
            <img src="./images/clients/image.png" alt="clients" height={40} />
            <img src="./images/clients/logo2.png" alt="clients" height={40} />
            <img src="./images/clients/logo3.png" alt="clients" height={40} />
            <img src="./images/clients/logo4.png" alt="clients" height={40} />
            <img src="./images/clients/logo5.png" alt="clients" height={40} />
            <img src="./images/clients/logo6.png" alt="clients" height={40} />
          </span>
          <a href="/">
            <img src="./images/customers/image.png" alt="" height={40} />
          </a>
        </div>
      </div>

      <div className="community-update">
        <h1>Caring is the new marketing</h1>
        <p>
          The Nexcent blog is the best place to read about the latest membership insights,
          <br />
          trends and more. See who's joining the community, read about how our community
          <br />
          are increasing their membership income and lot's more.​
        </p>
        <div className="community-update-flex">
          <div className="update-flex">
            <img src="./images/achievement-update/image1.png" className="img" alt="" height={300} />
            <div className={`update-menu ${theme}`}>
              <h2>Creating Streamlined Safeguarding Processes with OneRen</h2>
              <a href="#">
                <img src="./images/achievement-update/image.png" alt="" height={49} />
              </a>
            </div>
          </div>
          <div className="update-flex">
            <img src="./images/achievement-update/image2.png" className="img" alt="" height={300} />
            <div className={`update-menu ${theme}`}>
              <h2>What are your safeguarding responsibilities and how can you manage them?</h2>
              <a href="#">
                <img src="./images/achievement-update/image.png" alt="" height={49} />
              </a>
            </div>
          </div>
          <div className="update-flex">
            <img src="./images/achievement-update/image3.png" className="img" alt="" height={300} />
            <div className={`update-menu ${theme}`}>
              <h2>Revamping the Membership Model with Triathlon Australia</h2>
              <a href="#">
                <img src="./images/achievement-update/image.png" alt="" height={49} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="foot">
        <h1>
          Pellentesque suscipit <br />
          fringilla libero eu.
        </h1>
        <a href="/#">
          <img src="./images/footer/image.png" alt="" height={45} />
        </a>
      </div>

      <div className="footer">
        <div className="div">
          <img src="./images/image.png" alt="" height={30} />
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p className="p">All rights reserved</p>
          <img src="./images/footer/social.png" alt="" height={40} />
        </div>
        <div className="block">
          <div>
            <h3>Company</h3>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">Blog</a>
            </p>
            <p>
              <a href="#">Contact Us</a>
            </p>
            <p>
              <a href="#">Pricing</a>
            </p>
            <p>
              <a href="#">Testimonials</a>
            </p>
          </div>
          <div>
            <h3>Support</h3>
            <p>
              <a href="#">Help Center</a>
            </p>
            <p>
              <a href="#">Terms of service</a>
            </p>
            <p>
              <a href="#">Legal</a>
            </p>
            <p>
              <a href="#">Privacy policy</a>
            </p>
            <p>
              <a href="#">Status</a>
            </p>
          </div>
          <div>
            <h3>Stay up to date</h3>
            <input type="text" className="input" placeholder="Your email address" />
            <button className="icon">
              <img src="./images/footer/icon.png" alt="" height={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
