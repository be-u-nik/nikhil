import "./App.css";
import { FaHome, FaHamburger, FaGraduationCap, FaCode } from "react-icons/fa";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { BiMessageRoundedDetail } from "react-icons/bi";
import homeImage from "./assets/images/nikhil_icon-removebg-preview.png";
function App() {
  return (
    <div className="App">
      <div className="container-fluid outer">
        <div className="row">
          <div className="col-12">
            {/* waves */}
            {/* Content before waves */}
            <div className="inner__container d-flex flex-column flex-lg-row mx-2 align-items-center">
              {/* icons left */}
              <div className="wrapper d-flex flex-lg-column justify-content-start justify-content-lg-center align-self-start align-self-lg-center col-2 col-lg-1">
                <div className="d-lg-none menu_item facebook">
                  <div
                    className="icon"
                    onClick={() => {
                      const menu_items = document.getElementById("menu_items");
                      menu_items.classList.toggle("d-none");
                      menu_items.classList.toggle("d-flex");
                      console.log(menu_items);
                      console.log("button clicked");
                    }}
                  >
                    <FaHamburger />
                  </div>
                </div>
                <div className="d-none d-lg-block" id="menu_items">
                  <div className="menu_item facebook">
                    <div className="icon">
                      <a href="#home" className="menu_item_icon">
                        <FaHome />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      Home
                    </div>
                  </div>
                  <div className="menu_item twitter">
                    <div className="icon">
                      <a href="#about" className="menu_item_icon">
                        <BsFillEmojiLaughingFill />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      About
                    </div>
                  </div>
                  <div className="menu_item instagram">
                    <div className="icon">
                      <a href="#resume" className="menu_item_icon">
                        <FaGraduationCap />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      Resume
                    </div>
                  </div>
                  <div className="menu_item github">
                    <div className="icon">
                      <a href="#projects" className="menu_item_icon">
                        <FaCode />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      Projects
                    </div>
                  </div>
                  <div className="menu_item youtube">
                    <div className="icon">
                      <a href="#contact_me" className="menu_item_icon">
                        <BiMessageRoundedDetail />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      Contact Me
                    </div>
                  </div>
                </div>
              </div>

              <div className="content col-12 col-lg-10">
                <section id="home">
                  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start w-100 h-100">
                    <div className="order-2 order-lg-1 d-flex flex-column align-items-center align-items-lg-start text-left home__content col-12 col-lg-7">
                      <h1>Hi</h1>
                      <h3>I am Nikhil Masigari</h3>
                      <h4>Web developer |</h4>
                    </div>
                    <div className="col-12 col-lg-5 mb-3 mb-lg-none order-1 order-lg-2 d-flex justify-content-center">
                      <div className="home__image rounded-circle">
                        <img
                          src={homeImage}
                          alt="nikhil"
                          className="rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section id="about">
                  <h1>About</h1>
                </section>
                <section id="resume">
                  <h1>Resume</h1>
                </section>
                <section id="projects">
                  <h1>Projects</h1>
                </section>
                <section id="contact_me">
                  <h1>Contact me</h1>
                </section>
              </div>
            </div>
            {/* Waves Container */}
            <div style={{ zIndex: "1" }}>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
            </div>
            {/* Waves end */}
            <div className="lift-waves"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
