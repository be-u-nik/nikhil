import "./App.css";
import { FaFacebookF, FaHome } from "react-icons/fa";
function App() {
  return (
    <div className="App">
      <div className="container-fluid outer">
        <div className="row">
          <div className="col-12">
            {/* waves */}
            {/* Content before waves */}
            <div className="inner__container mx-2" style={{ "z-index": "1" }}>
              {/* <canvas id="canvas">Your browser doesn't support canvas</canvas> */}
              {/* icons left */}
              <div className="wrapper">
                <div className="icon facebook">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip tooltip-left">Facebook</div>
                </div>
                <div className="icon twitter">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip tooltip-left">Twitter</div>
                </div>
                <div className="icon instagram">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip tooltip-left">Instagram</div>
                </div>
                <div className="icon github">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip tooltip-left">Github</div>
                </div>
                <div className="icon youtube">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip tooltip-left">Youtube</div>
                </div>
                <div className="icon youtube">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip tooltip-left">Youtube</div>
                </div>
                <div className="icon youtube">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip tooltip-left">Youtube</div>
                </div>
              </div>

              <div className="d-flex flex-1 ">
                <h1>Portfolio coming soon!! :)</h1>
              </div>

              {/* icons right*/}
              <div className="wrapper">
                <div className="icon facebook">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip">Facebook</div>
                </div>
                <div className="icon twitter">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip">Twitter</div>
                </div>
                <div className="icon instagram">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip">Instagram</div>
                </div>
                <div className="icon github">
                  <div>
                    <FaHome />
                  </div>
                  <div className="tooltip">Github</div>
                </div>
              </div>
            </div>
            {/* Waves Container */}
            <div style={{ "z-index": "0" }}>
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
