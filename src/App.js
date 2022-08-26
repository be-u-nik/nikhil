import React, { useEffect } from "react";
import "./App.css";
import "./App.scss";
import "./Projects.scss";
import "./Services.scss";
import { FaHome, FaHamburger, FaCode, FaGraduationCap } from "react-icons/fa";
import { BsFillEmojiLaughingFill, BsPersonFill } from "react-icons/bs";
import { MdAlternateEmail, MdOutlineDesignServices } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
import homelgImage from "./assets/images/hi-lg-removebg-preview.png";
import homeImage from "./assets/images/hi-removebg-preview.png";
import htmlLogo from "./assets/backgrounds/html-5.png";
import cssLogo from "./assets/backgrounds/css-3.png";
import jsLogo from "./assets/backgrounds/js.png";
import reactjsLogo from "./assets/backgrounds/structure.png";
import nodejsLogo from "./assets/backgrounds/nodejs.png";
import sqliteLogo from "./assets/backgrounds/sqlite.png";
import flutterLogo from "./assets/backgrounds/flutterlogo.png";
import djangoLogo from "./assets/backgrounds/django.png";
// import Typewriter from "typewriter-effect";
import bgUtility from "./utilities/utilities";
import about from "./utilities/aboutMe";

import projects from "./utilities/projects";

function App() {
  // const printWindowWidth = () => {
  //   var width = window.innerWidth > 0 ? window.innerWidth : "screen.width";
  //   console.log(width);
  // };
  // printWindowWidth();
  useEffect(() => {
    function utilities() {
      // bgUtility();
      about();
      projects();
      function printScrollDistance() {
        // const content = document.querySelector(".content");
        // content.addEventListener("wheel", (e) => {
        //   console.log(e);
        // });
      }
      printScrollDistance();
    }
    utilities();
    return utilities;
  }, []);

  return (
    <div className="App">
      {/* <canvas id="c"></canvas> */}
      <div className="container-fluid outer bg-dark">
        <div className="row">
          <div className="col-12">
            <div className="inner__container d-flex flex-column flex-lg-row mx-sm-1 mx-md-2 align-items-center">
              {/* icons left */}
              <div className="wrapper d-flex flex-column justify-content-start justify-content-lg-center align-self-start align-self-lg-center col-12 col-lg-1">
                <div className="d-lg-none menu_item facebook">
                  <div
                    className="menu_icon"
                    onClick={() => {
                      const menu_items = document.getElementById("menu_items");
                      menu_items.classList.toggle("d-none");
                      menu_items.classList.toggle("d-flex");
                      menu_items.classList.toggle("flex-column");
                    }}
                  >
                    <FaHamburger />
                  </div>
                </div>
                <div className="d-none d-lg-block" id="menu_items">
                  <div className="menu_item facebook">
                    <div className="menu_icon">
                      <a href="#home" className="menu_item_icon">
                        <FaHome />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      Home
                    </div>
                  </div>
                  <div className="menu_item twitter">
                    <div className="menu_icon">
                      <a href="#know_me" className="menu_item_icon">
                        <BsFillEmojiLaughingFill />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      KnowMe
                    </div>
                  </div>

                  <div className="menu_item github">
                    <div className="menu_icon">
                      <a href="#work" className="menu_item_icon">
                        <FaCode />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      Work
                    </div>
                  </div>
                  <div className="menu_item instagram">
                    <div className="menu_icon">
                      <a href="#services" className="menu_item_icon">
                        <MdOutlineDesignServices />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      Services
                    </div>
                  </div>
                  <div className="menu_item youtube">
                    <div className="menu_icon">
                      <a href="#contact_me" className="menu_item_icon">
                        <MdAlternateEmail />
                      </a>
                    </div>
                    <div className="tooltip tooltip-left d-none d-lg-block">
                      ContactMe
                    </div>
                  </div>
                </div>
              </div>

              <div className="content col-12 col-lg-11">
                <section id="home">
                  <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-start w-100 row">
                    <div className="order-2 d-flex flex-column align-items-center align-items-lg-start text-start home__content col-12 col-lg-7">
                      <h1 className="hi">Hi, I am </h1>
                      <div className="name">Nikhil Masigari</div>
                      <div
                        id="container"
                        className="text-center text-lg-start mt-3"
                      >
                        <div id="flip">
                          <div>
                            <div>Full-Stack Developer</div>
                          </div>
                          <div>
                            <div>Flutter Developer</div>
                          </div>
                          <div>
                            <div>App Developer</div>
                          </div>
                          <div>
                            <div>Web Developer</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5 mb-3 mb-lg-none order-1 h-100 d-flex justify-content-center align-items-center justify-content-lg-end align-items-lg-end">
                      <img
                        src={window.innerWidth >= 992 ? homelgImage : homeImage}
                        alt="nikhil"
                        id="home__img"
                      />
                    </div>
                  </div>
                </section>
                <section id="know_me" className="w-100">
                  <h1 className="mb-1 mb-lg-3">Know Me</h1>
                  <div className="d-flex justify-content-center mt-2 about__content text-start ps-2">
                    <div className=" w-100">
                      <div className="aboutMe">
                        <div className="options d-flex flex-column flex-lg-row">
                          <div className="option active">
                            <div className="shadow"></div>
                            <div className="label">
                              <div className="icon">
                                <BsPersonFill />
                              </div>
                              <div className="info">
                                <div className="main">Who am I</div>
                              </div>
                            </div>
                          </div>
                          <div className="option">
                            <div className="shadow"></div>
                            <div className="label">
                              <div className="icon">
                                <FaGraduationCap />
                              </div>
                              <div className="info">
                                <div className="main">What I Know</div>
                              </div>
                            </div>
                          </div>
                          <div className="option">
                            <div className="shadow"></div>
                            <div className="label">
                              <div className="icon">
                                <IoMdTimer />
                              </div>
                              <div className="info">
                                <div className="main">Other Intrests</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet.
                      </p> */}
                    </div>
                  </div>
                </section>

                <section id="work">
                  <h1>My Work</h1>
                  <div className="projects">
                    <div className="projects_container">
                      <div className="slider">
                        <div className="box1 box">
                          <div className="bg"></div>
                          <div className="details text-center text-lg-start">
                            <h1 className="project_title">Project Title</h1>
                            <p className="project_description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer lacinia dui lectus. Donec
                              scelerisque ipsum diam, ac mattis orci
                              pellentesque eget.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                              <button className="me-2">Project Link</button>
                              <button>Github Link</button>
                            </div>
                          </div>

                          <div className="illustration">
                            <div className="inner"></div>
                          </div>
                        </div>

                        <div className="box2 box">
                          <div className="bg"></div>
                          <div className="details text-center text-lg-start">
                            <h1 className="project_title">Project Title</h1>
                            <p className="project_description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer lacinia dui lectus. Donec
                              scelerisque ipsum diam, ac mattis orci
                              pellentesque eget.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                              <button className="me-2">Project Link</button>
                              <button>Github Link</button>
                            </div>
                          </div>

                          <div className="illustration">
                            <div className="inner"></div>
                          </div>
                        </div>

                        <div className="box3 box">
                          <div className="bg"></div>
                          <div className="details text-center text-lg-start">
                            <h1 className="project_title">Project Title</h1>
                            <p className="project_description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer lacinia dui lectus. Donec
                              scelerisque ipsum diam, ac mattis orci
                              pellentesque eget.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                              <button className="me-2">Project Link</button>
                              <button>Github Link</button>
                            </div>
                          </div>

                          <div className="illustration">
                            <div className="inner"></div>
                          </div>
                        </div>

                        <div className="box4 box">
                          <div className="bg"></div>
                          <div className="details text-center text-lg-start">
                            <h1 className="project_title">Project Title</h1>
                            <p className="project_description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer lacinia dui lectus. Donec
                              scelerisque ipsum diam, ac mattis orci
                              pellentesque eget.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                              <button className="me-2">Project Link</button>
                              <button>Github Link</button>
                            </div>
                          </div>

                          <div className="illustration">
                            <div className="inner"></div>
                          </div>
                        </div>

                        <div className="box5 box">
                          <div className="bg"></div>
                          <div className="details text-center text-lg-start">
                            <h1 className="project_title">Project Title</h1>
                            <p className="project_description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer lacinia dui lectus. Donec
                              scelerisque ipsum diam, ac mattis orci
                              pellentesque eget.
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                              <button className="me-2">Project Link</button>
                              <button>Github Link</button>
                            </div>
                          </div>

                          <div className="illustration">
                            <div className="inner"></div>
                          </div>
                        </div>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="prev"
                        width="56.898"
                        height="91"
                        viewBox="0 0 56.898 91"
                      >
                        <path
                          d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
                          transform="translate(0 91) rotate(-90)"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="next"
                        width="56.898"
                        height="91"
                        viewBox="0 0 56.898 91"
                      >
                        <path
                          d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
                          transform="translate(56.898) rotate(90)"
                          fill="#fff"
                        />
                      </svg>
                      <div className="trail">
                        <div className="box1 active trail_div">1</div>
                        <div className="box2 trail_div">2</div>
                        <div className="box3 trail_div">3</div>
                        <div className="box4 trail_div">4</div>
                        <div className="box5 trail_div">5</div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="services">
                  <h1>Let's talk Work</h1>
                  <div className="services_container row">
                    <div className="flip flip-vertical col-6">
                      <div className="front">
                        <h1 className="heading-front">Web Design</h1>
                      </div>
                      <div className="back">
                        <p>
                          Good tools make application development quicker and
                          easier to maintain than if you did everything by
                          hand..
                        </p>
                      </div>
                    </div>
                    <div className="flip flip-vertical col-6">
                      <div className="front">
                        <h1 className="heading-front">Web Developement</h1>
                      </div>
                      <div className="back">
                        <p>
                          Good tools make application development quicker and
                          easier to maintain than if you did everything by
                          hand..
                        </p>
                      </div>
                    </div>
                    <div className="flip flip-vertical col-6">
                      <div className="front">
                        <h1 className="heading-front">App Design</h1>
                      </div>
                      <div className="back">
                        <p>
                          Good tools make application development quicker and
                          easier to maintain than if you did everything by
                          hand..
                        </p>
                      </div>
                    </div>
                    <div className="flip flip-vertical col-6">
                      <div className="front">
                        <h1 className="heading-front">App Developement</h1>
                      </div>
                      <div className="back">
                        <p>
                          Good tools make application development quicker and
                          easier to maintain than if you did everything by
                          hand..
                        </p>
                      </div>
                    </div>
                  </div>
                  <h1>Tech Stack</h1>
                  <div className="tech_stack_container">
                    <div className="tech_cards-list">
                      <div className="tech_card 1">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={htmlLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>

                      <div className="tech_card 2">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={cssLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>

                      <div className="tech_card 3">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={jsLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>

                      <div className="tech_card 4">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={reactjsLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>
                      <div className="tech_card 5">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={nodejsLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>
                      <div className="tech_card 6">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={flutterLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>
                      <div className="tech_card 7">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={djangoLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>
                      <div className="tech_card 8">
                        <div className="tech_card_image d-flex align-items-center">
                          <div className="p-2 tech_image">
                            <img src={sqliteLogo} alt="htmlLogo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section id="contact_me">
                  <h1>Contact me</h1>
                  <div className="row">
                    <div className="col-12 col-lg-5 order-2 order-lg-1"></div>
                    <div className="col-12 col-lg-5 order-2 order-lg-1"></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
