import React, { useEffect, useRef, useState } from "react";
// import React, {  } from "react-router-dom";
// import "../NewLandingPage/LandingPage.css";
import "../NewLandingPage/LandingPage.css";
import logo from "../assets/img/logo-choira.svg";
import o4 from "../assets/img/o4.png";
import { FaBars } from "react-icons/fa6";
import page1footer from "../assets/img/company-footer.svg";
import stripe from "../assets/img/stripe.svg";
import phonepay from "../assets/img/phonepe.svg";
import nbc from "../assets/img/nbc.svg";
import cbs from "../assets/img/cbs.svg";
import nasa from "../assets/img/nasa.svg";
import primeVideo from "../assets/img/prime-video.svg";
import display from "../assets/img/landingPageImg/future_of_music.png";
import talented from "../assets/img/landingPageImg/talented.svg";
import trusted from "../assets/img/landingPageImg/trusted.png";
import best from "../assets/img/landingPageImg/best.png";
import produce from "../assets/img/landingPageImg/Produce.png";
import ai from "../assets/img/landingPageImg/AI.png";
// import ai from "../assets/img/landingPageImg/AI.png";;sonu333
import jamming from "../assets/img/landingPageImg/Jamming.png";
import studio from "../assets/img/landingPageImg/studio.png";
import line from "../assets/img/landingPageImg/Line.png";
import marl from "../assets/img/landingPageImg/marl.png";
import tech from "../assets/img/landingPageImg/tech.png";
import sine from "../assets/img/landingPageImg/sine.png";
import insta from "../assets/img/landingPageImg/insta.png";
import facebook from "../assets/img/landingPageImg/facebook.svg";
import tweeter from "../assets/img/landingPageImg/tweter.svg";
import linkedin from "../assets/img/landingPageImg/linkedin.svg";
import bombay from "../assets/img/landingPageImg/bombay.svg";
import nayan from "../assets/img/landingPageImg/nayan.svg";
import kundan from "../assets/img/landingPageImg/kundan.svg";
import kukufm from "../assets/img/landingPageImg/kukufm.png";
import amazon from "../assets/img/landingPageImg/amazon.png";
import rain from "../assets/img/landingPageImg/rain.png";

import googleLogo from "../assets/logoImg/google.png";
import facebookLogo from "../assets/logoImg/facebook.png";
import spottyLogo from "../assets/logoImg/spotify.png";
// import mailLogo from "../assets/logoImg/mainWhite.png";
import mailLogo from "../assets/logoImg/spotify.png";

import { ImCross } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa";

// import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/choria.svg";

function LandingPage() {
  // const navigate = useNavigate();
  // const goTosigninPage = () => {
  //   navigate("/signin");
  // };

  const currentYear = new Date().getFullYear();
  const [counter, setCounter] = useState(0);
  const slides = document.querySelectorAll(".slide");
  const slidesData = [
    {
      title: "Choira create",
      subtitle: `Turn creativity into   commercial tracks.`,
      content:
        "Unlock your artistic potential and redefine your musical journey. Craft each composition with precision, transforming them into finely tuned commercial masterpieces. Our platform equips you with the tools to shape, refine, and produce standout tracks that make a lasting impact in the professional music landscape.",
      image: produce,
    },
    {
      title: "Choira STUDIO",
      subtitle: "From idea to track in a click book studios instantly.",
      content:
        "Our platform is designed to simplify the studio booking process, offering a user-friendly experience that puts the power of professional recording at your fingertips. You gain access to a curated selection of top-notch studios, ensuring that your musical journey is equipped with the resources needed to bring your artistic vision to life. ",
      image: studio,
    },
    {
      title: "Choira JAM",
      subtitle: "Anytime, Anywhere Jam",
      content:
        "Remote jamming, providing a virtual space that makes musicians feel like they're in the same room. Experience seamless real-time collaboration from any location, preserving the essence of live jamming in a shared musical journey",
      image: jamming,
    },
    // {
    //   title: "Choira create",
    //   subtitle: "Turn your words into amazing music with AI music Gen.",
    //   content:
    //     "Lorem ipsum dolor sit amet consectetur. Sed id id eget volutpat. Mauris amet leo vulputate massa ultrices velit. Vel sed quam mattis integer consequat. Consectetur odio risus venenatis urna non nulla sed. Ultrices tincidunt magna ut lacus enim ac consequat. Vivamus vel massa elit gravida hendrerit mi posuere velit. Suspendisse risu.",
    //   image: ai,
    // },
  ];

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });

    let touchStartX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      if (deltaX < -20) {
        // Swipe left
        setCounter((prevCounter) => {
          const newCounter = prevCounter >= 2 ? 0 : prevCounter + 1;
          updateSlides(newCounter);
          return newCounter;
        });
      } else if (deltaX > 20) {
        // Swipe right
        setCounter((prevCounter) => {
          const newCounter = prevCounter === 0 ? 2 : prevCounter - 1;
          updateSlides(newCounter);
          return newCounter;
        });
      }
    };

    const updateSlides = (newCounter) => {
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide) => {
        slide.style.transform = `translateX(-${newCounter * 100}%)`;
      });
    };

    const container = document.querySelector(".landing-page-2");
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    const intervalId = setInterval(() => {
      handleTouchEnd({ changedTouches: [{ clientX: 1 }] });
      // Simulate a right swipe
      setCounter((prevCounter) => {
        const newCounter = prevCounter >= 2 ? 0 : prevCounter + 1;

        slides.forEach((slide) => {
          slide.style.transform = `translateX(-${newCounter * 100}%)`;
        });

        return newCounter;
      });
    }, 8000);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      clearInterval(intervalId);
    };
  }, []);

  const changeSlide = (count) => {
    setCounter(count);
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${count * 100}%)`;
    });
  };
  const [combinedClasses, setCombinedClasses] = useState("list");
  const [navLogo, setNavLogo] = useState(true);

  const smallNav = () => {
    // Check if "smalllist" class is present in the current state
    if (combinedClasses.includes("smalllist")) {
      setNavLogo(false);

      // If present, remove "smalllist"
      setCombinedClasses((prevClasses) =>
        prevClasses.replace(" smalllist", "")
      );
    } else {
      // If not present, add "smalllist"
      setCombinedClasses((prevClasses) => prevClasses + " smalllist");
      setNavLogo(true);
    }
  };

  // const gotoDashboard = () => {
  //   navigate("/dashboard");
  // };
  const testimonials = [
    {
      name: "Bombay Music Co.",
      designationAndCity: "Record Label, Mumbai",
      // title: "The best Solution to book a studio!",
      description:
        "“Choira’s strong backend music production team delivered exciting projects to us with our roster of artists situated all around India via seamless remote collaborations.”",
      image: bombay,
    },
    {
      name: "Kundan Sad",
      designationAndCity: "Film Director, Mumbai",
      // title: "Fantastic Experience with Choira!",
      description:
        "“It was great partnering with Choira to produce a song for my feature film in just 5 days!”",
      image: kundan,
    },
    {
      name: "Nayan Pachori",
      designationAndCity: "Film Director, Mumbai",
      // title: "Easy-to-use and Effective Platform!",
      description:
        "“Choira’s remote music production methodology helped me finish the music for my web series in the middle of the pandemic with diversified artists all over the world completely online!”",
      image: nayan,
    },
    // {
    //   name: "Bob Smith",
    //   designationAndCity: "Manager, London",
    //   // title: "Incredible Features and User-Friendly!",
    //   description:
    //     "“Vestibulum consequat ipsum nec tortor vulputate, nec fringilla turpis hendrerit. Sed in lacus non tortor blandit feugiat ac et elit.”",
    //   image: p4,
    // },
    // {
    //   name: "Eva Davis",
    //   designationAndCity: "Engineer, Berlin",
    //   // title: "Highly Recommend Choira!",
    //   description:
    //     "“Ut tristique, libero id congue fermentum, odio tortor ultricies felis, ut interdum arcu odio vel odio.”",
    //   image: p5,
    // },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [testimonials.length]);

  const visibleImages = [
    testimonials[(startIndex + 2) % 3],
    testimonials[startIndex % 3],
    testimonials[(startIndex + 1) % 3],
    // testimonials[(startIndex + 2) % 4],
    // testimonials[(startIndex + 3) % 5],
  ];

  const visibleTestimonial = visibleImages[1];

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const [isScreenOpen, setIsScreenOpen] = useState(0);
  const closeModel = () => {
    //   setIsLoginOpen(false);
    //   loginCheckVerify = true;
    //   checkLogin();
    // };
    // let loginCheckVerify = true;
    // const checkLogin = () => {
    //   if (loginCheckVerify) {
    //     let loginState = localStorage.getItem("isLogin");
    //     if (loginState === "true") {
    //       isLogin = true;
    //     } else {
    //       isLogin = false;
    //     }
    //     loginCheckVerify = false;
    //   }
    //   dataForRegistration.phone = new Date().getTime();
  };

  // checkLogin();
  return (
    <>
      <div className="landingpageWrapper">
        <div id="landing-page1" className="landing-page1">
          <div className="navbar">
            <div>
              <img src={logo} alt="Choira Logo" style={{ cursor: "pointer" }} />
            </div>
            <div className={combinedClasses}>
              <h3>Home</h3>
              <h3>Studio</h3>
              <h3>Jamming</h3>
              <h3>AI Music Gen</h3>
              <h3
                onClick={() => {
                  setIsLoginOpen(true);
                }}
              >
                Signin
              </h3>

              <img
                className="o4"
                style={{ cursor: "pointer" }}
                src={o4}
                alt=""
                onClick={smallNav}
              />
            </div>
            <div
              className="testlogo"
              style={{ display: navLogo ? "block" : "none" }}
            >
              <img
                className="o5"
                style={{ cursor: "pointer" }}
                src={o4}
                alt=""
                onClick={smallNav}
              />
            </div>
          </div>

          {/* mobile navbar start here------------------- */}
          <div className="mobile-navbar">
            <div>
              <img src={logo} alt="Choira Logo" style={{ cursor: "pointer" }} />
            </div>
            <div>
              <FaBars
                onClick={() => {
                  setSidebarVisible((prevState) => !prevState); // Toggle the state
                }}
              />
            </div>
          </div>

          {/* mobile navbar end here------------------- */}

          {/* sidebar-----------=-- */}
          <div
            className={`lpSidebar ${sidebarVisible ? "lpSidebar-after" : ""}`}
          >
            {/* <div className="lpSidebar lpSidebar-after"> */}
            <div>
              <img src={logo} alt="Choira Logo" style={{ cursor: "pointer" }} />
              <ImCross
                onClick={() => {
                  setSidebarVisible((prevState) => !prevState); // Toggle the state
                }}
              />
            </div>
            <div>
              <div>Home</div>
              <div>Studio</div>
              <div>Jamming</div>
              <div>AI Music Gen</div>
              <div>Signin</div>
            </div>
          </div>
          {/* sidebar end -------------------------- */}

          <div className="page1-main">
            <div>
              <div className="page1-main-content">
                <div>
                  <h1>
                    <span>Music</span> Ecosystem <br />
                    for the <span>Digital</span> Age
                  </h1>
                </div>
                <div>
                  <p>
                    From instant studio bookings to industry-level music <br />
                    creation, Choira empowers musicians to seamlessly <br />
                    navigate the creative process and elevate their musical
                    journey.
                  </p>
                </div>
                <div>
                  <button>Get Started</button>
                  <p style={{ cursor: "pointer" }}>
                    Watch video <FaChevronRight />
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="page1-footer"></div>
        </div>
        {/* <div className="mob-page1-footer"></div> */}
        {window.innerWidth > 600 ? (
          <>
            <div className="landing-page-2">
              {slidesData.map((slide, index) => (
                <div
                  key={index}
                  className={`landing-page-2-main slide ${
                    index === counter ? "active" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "rowReverse" : ""}>
                    <div>
                      <div className="landing-page-2-content">
                        <div>
                          <span>{slide.title}</span>
                        </div>
                        <div>
                          <p>{slide.subtitle}</p>
                        </div>
                        <div>
                          <p>{slide.content}</p>
                        </div>
                        {counter === 0 ? (
                          <div>
                            <button>create</button>
                          </div>
                        ) : counter === 1 ? (
                          <div>
                            <button>Book Now</button>
                          </div>
                        ) : counter === 2 ? (
                          <div>
                            <button>Start Jam</button>
                          </div>
                        ) : (
                          <div>
                            <button>Generate</button>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="landing-page-2-img">
                      <img src={slide.image} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="landing-page2-bullets">
              {slidesData.map((_, i) => (
                <div
                  style={{
                    backgroundColor: i === counter ? "#FFC701" : "",
                  }}
                  className="slider-btn"
                  key={i}
                  onClick={() => changeSlide(i)}
                ></div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="landing-page-2 ">
              {slidesData.map((slide, index) => (
                <div
                  key={index}
                  className={`landing-page-2-main-mob slide ${
                    index === counter ? "active" : ""
                  }`}
                >
                  <div className="landing-page-2-content-mob">
                    <div>
                      <span>{slide.title}</span>
                    </div>
                    <div>
                      <p>{slide.subtitle}</p>
                    </div>
                    <div>
                      <img src={slide.image} alt="" />
                    </div>
                    <div>
                      <p>{slide.content}</p>
                    </div>
                    {
                      counter === 0 ? (
                        <div>
                          <button>create</button>
                        </div>
                      ) : counter === 1 ? (
                        <div>
                          <button>Book Now</button>
                        </div>
                      ) : (
                        <div>
                          <button>Start Jam</button>
                        </div>
                      )
                      // : (
                      //   <div>
                      //     <button>Generate</button>
                      //   </div>
                      // )
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="landing-page2-bullets">
              {slidesData.map((_, i) => (
                <div
                  style={{
                    backgroundColor: i === counter ? "#FFC701" : "",
                  }}
                  className="slider-btn"
                  key={i}
                  onClick={() => changeSlide(i)}
                ></div>
              ))}
            </div>
          </>
        )}

        <div className="landing-page-3">
          <div className="landing-page-3-main">
            <div>
              <h2>
                Disrupting tunes, reshaping the <br /> music industry by melody
              </h2>
            </div>

            <div>
              <p>
                A fusion of innovation, global collaboration, and seamless tech,
                empowering artists <br />
                to create, connect, and shape the next era of sound.
              </p>
            </div>
            <div>
              <img src={display} alt="" />
            </div>
            <div>
              <button>open</button>
            </div>
          </div>
        </div>
        {/* mobile version  */}
        <div className="mob-landing-page-4-main">
          <div>
            <div>
              <div>
                <img src={talented} alt="" />
              </div>
              <div>
                <h3>Top talents</h3>
                <br />
              </div>
            </div>
            <div>
              <p>
                Our team of accomplished musicians, visionary technologists and
                creative minds collaborate to bring you groundbreaking solutions
                in the world of music
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src={best} alt="" />
              </div>
              <div>
                <h3>Create the best</h3>
                <br />
              </div>
            </div>
            <div>
              <p>
                Choira's your ally beyond a platform. Top-notch tech,
                personalized solutions, a supportive community—dedicated to
                enhancing your musical journey. Join us, create your best music.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src={trusted} alt="" />
              </div>
              <div>
                <h3>Trusted Studio Profiles</h3>
                <br />
              </div>
            </div>
            <div>
              <p>
                Explore Choira's trusted studios—top-notch spaces with
                cutting-edge equipment, acoustically optimized environments, &
                dedicated professionals enhancing your music production.
              </p>
            </div>
          </div>
        </div>

        {/* pc-version  */}
        <div id="landing-page-4" className="landing-page-4">
          <div className="landing-page-4-main">
            <div>
              <div>
                <div>
                  <img src={talented} alt="" />
                </div>
                <div>
                  <h3>Top talents</h3>
                </div>
              </div>
              <div>
                <p>
                  Our team of accomplished musicians, visionary technologists
                  and creative minds collaborate to bring you groundbreaking
                  solutions in the world of music
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={best} alt="" />
                </div>
                <div>
                  <h3>Trusted Studio Profiles</h3>
                </div>
              </div>
              <div>
                <p>
                  Choira's your ally beyond a platform. Top-notch tech,
                  personalized solutions, a supportive community—dedicated to
                  enhancing your musical journey. Join us, create your best
                  music.
                </p>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img src={trusted} alt="" />
                </div>
                <div>
                  <h3>Create the best</h3>
                </div>
              </div>
              <div>
                <p>
                  Explore Choira's trusted studios—top-notch spaces with
                  cutting-edge equipment, acoustically optimized environments, &
                  dedicated professionals enhancing your music production.
                </p>
              </div>
            </div>
          </div>
          <div id="lp4-testinomal" className="lp4-testinomal">
            <div className="lp4-testinomal-main">
              <div>Testimonial</div>
              <div>What our users say about us?</div>
              {/* <div className="person-title">{visibleTestimonial.title}</div> */}
              <div>
                <p className="person-decription">
                  {visibleTestimonial.description}
                </p>
              </div>
              <div>
                <b className="person-name">{visibleTestimonial.name}</b>
                <small className="person-designationAndCity">
                  {visibleTestimonial.designationAndCity}
                </small>
              </div>
              <div>
                {visibleImages.map((testimonial, index) => (
                  <div
                    key={index}
                    className={index === 1 ? "visible" : "hidden"}
                  >
                    <img
                      src={testimonial.image}
                      alt={`person-${index + 1}`}
                      className="testimonial-image"
                    />
                  </div>
                ))}
              </div>
              <div>
                <button>View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-page-5">
          <div className="companyPhoto">
            {/* <div className="show effect div"></div> */}
            <div>
              <div>
                <img src={kukufm} alt="" />
              </div>
              <div>
                <img src={amazon} alt="" />
              </div>
              <div>
                <img src={rain} alt="" />
              </div>
              {/* <div>
                <img src={cbs} alt="" />
              </div> */}
              {/* <div>
                <img src={nasa} alt="" />
              </div> */}
              {/* <div>
                <img src={primeVideo} alt="" />
              </div> */}
            </div>
          </div>
          <div className="lp5-backed">
            <div>
              <div>
                &nbsp; Backed By
                <img src={line} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={marl} alt="" />
              </div>
              <div>
                <img src={tech} alt="" />
              </div>
              <div>
                <img src={sine} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="landing-page-6">
          <div className="lp6-main">
            <div>
              <div>
                <div>
                  <img src={logo} alt="" />
                </div>
                <div>
                  Choira is an online ecosystem to <br /> empower you with
                  online tools to jam, <br /> produce and explore music.
                </div>
                <div>
                  <a
                    href="https://www.instagram.com/choiramusic/"
                    target="_blank"
                  >
                    <img src={insta} alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com/Choira-107074321806949"
                    target="_blank"
                  >
                    <img src={facebook} alt="" />
                  </a>
                  <a href="https://twitter.com/choiramusic" target="_blank">
                    <img src={tweeter} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/choira"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <h4>Products</h4>
                </div>
                <div>Create</div>
                <div>Studio</div>
                <div>Jam</div>
                <div>Music-AI</div>
              </div>
              <div>
                <div>
                  <h4>Company</h4>
                </div>
                <div>
                  {" "}
                  <a href="#/about">About us</a>
                </div>
                <div>Blog</div>
                <div>
                  <a href="https://studio.choira.io/#choira_team">Our team</a>
                </div>
                <div>
                  <a href="#lp4-testinomal">Customer stories</a>
                </div>
                <div>Contact us</div>
              </div>
              <div>
                <div>
                  <h4>Support</h4>
                </div>
                <div>Help & Support</div>
                <div>
                  <a href="#/TermsandCondition">Terms & Conditions</a>
                </div>
                <div>
                  <a href="#/Privacypolicy">Privacy Policy</a>
                </div>
                <div>
                  <a href="#/refundPolicy">Refund Policy</a>
                </div>
                <div>
                  <a href="#/Disclaimer">Disclaimer</a>
                </div>
              </div>
              <div>
                <div>
                  Stay connected to us
                  <input type="text" placeholder="Your email address" />
                </div>
              </div>
            </div>
            <div style={{ borderTop: "1px solid gray" }}>
              © {currentYear} Choira.io All rights reserved
            </div>
          </div>

          {/* footer for mobile  */}
        </div>
        <div className="mob-lp6-main">
          <div>
            <div>
              <div>
                <div>
                  <img src={logo} alt="" />
                </div>
                <div>
                  Choira is an online ecosystem to empower you <br /> with
                  online tools to jam, produce and explore <br /> music.
                </div>
                <div className="mob-lp6-social">
                  <a
                    href="https://www.instagram.com/choiramusic/"
                    target="_blank"
                  >
                    <img src={insta} alt="" />
                  </a>
                  <a
                    href="https://www.facebook.com/Choira-107074321806949"
                    target="_blank"
                  >
                    <img src={facebook} alt="" />
                  </a>
                  <a href="https://twitter.com/choiramusic" target="_blank">
                    <img src={tweeter} alt="" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/choira"
                    target="_blank"
                  >
                    <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>

              <div className="stayConnected">
                <div>
                  Stay connected to us
                  <input type="text" placeholder="Your email address" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <h4>Products</h4>
                </div>
                <div>Create</div>
                <div>Studio</div>
                <div>Jam</div>
                <div>Music-AI</div>
              </div>
              <div>
                <div>
                  <h4>Company</h4>
                </div>
                <div>
                  <a href="#/about">About us</a>
                </div>
                <div>Blog</div>
                <div>
                  <a href="https://studio.choira.io/#choira_team">Our team</a>
                </div>
                <div>
                  <a href="#lp4-testinomal">Customer stories</a>
                </div>
                <div>Contact us</div>
              </div>
            </div>

            <div>
              <div>
                <h4>Support</h4>
              </div>
              <div>Help & Support</div>
              <div>
                <a href="#/TermsandCondition">Terms & Conditions</a>
              </div>
              <div>
                <a href="#/Privacypolicy">Privacy Policy</a>
              </div>
              <div>
                <a href="#/refundPolicy">Refund Policy</a>
              </div>
              <div>
                <a href="#/Disclaimer">Disclaimer</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid gray" }}>
            © {currentYear} Choira.io All rights reserved
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
