import "./App.css";
import { FaHome, FaHamburger } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <div className="container-fluid outer">
        <div className="row">
          <div className="col-12">
            {/* waves */}
            {/* Content before waves */}
            <div className="inner__container d-flex flex-column flex-md-row mx-2 align-items-center">
              {/* icons left */}
              <div className="wrapper d-flex flex-md-column justify-content-start justify-content-md-center align-self-start align-self-md-center col-2 col-md-1">
                <div className="d-md-none menu_item facebook">
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
                <div className="d-none d-md-block" id="menu_items">
                  <div className="menu_item facebook">
                    <div className="icon">
                      <FaHome />
                    </div>
                    <div className="tooltip tooltip-left d-none d-md-block">
                      Facebook
                    </div>
                  </div>
                  <div className="menu_item twitter">
                    <div className="icon">
                      <FaHome />
                    </div>
                    <div className="tooltip tooltip-left d-none d-md-block">
                      Twitter
                    </div>
                  </div>
                  <div className="menu_item instagram">
                    <div className="icon">
                      <FaHome />
                    </div>
                    <div className="tooltip tooltip-left d-none d-md-block">
                      Instagram
                    </div>
                  </div>
                  <div className="menu_item github">
                    <div className="icon">
                      <FaHome />
                    </div>
                    <div className="tooltip tooltip-left d-none d-md-block">
                      Github
                    </div>
                  </div>
                  <div className="menu_item youtube">
                    <div className="icon">
                      <FaHome />
                    </div>
                    <div className="tooltip tooltip-left d-none d-md-block">
                      Youtube
                    </div>
                  </div>
                  <div className="menu_item youtube">
                    <div className="icon">
                      <FaHome />
                    </div>
                    <div className="tooltip tooltip-left d-none d-md-block">
                      Youtube
                    </div>
                  </div>
                  <div className="menu_item youtube">
                    <div className="icon">
                      <FaHome />
                    </div>
                    <div className="tooltip tooltip-left d-none d-md-block">
                      Youtube
                    </div>
                  </div>
                </div>
              </div>

              <div className="content col-12 col-md-10">
                <section>
                  <h1>Home</h1>
                </section>
                <section>
                  <h1>About</h1>
                </section>
                <section>
                  <h1>Resume</h1>
                </section>
                <section>
                  <h1>Projects</h1>
                </section>
                <section>
                  <h1>Testimonials</h1>
                </section>
                <section>
                  <h1>Contact me</h1>
                </section>
              </div>
            </div>
            {/* Waves Container */}
            <div style={{ zIndex: "0" }}>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shape-rendering="auto"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
