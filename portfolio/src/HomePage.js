import { useEffect, useState } from "react";
import imageOfMe from "./assets/images/me_full_cropped.png";
import PythonIcon from "./assets/images/python.png";
import ReactIcon from "./assets/images/react-1.svg";
import JSIcon from "./assets/images/javascript.png";
import HTMLIcon from "./assets/images/HTML5.png";
import CSSIcon from "./assets/images/css.png";
import GitIcon from "./assets/images/Git.png";
import GitHubIcon from "./assets/images/github.png";
import PostmanIcon from "./assets/images/postman.svg";
import ExodusImg1 from "./assets/images/exodus1.png";
import ExodusImg2 from "./assets/images/exodus2.png";
import FilmExpImg1 from "./assets/images/filmexp1.png";
import FilmExpImg2 from "./assets/images/filmexp2.png";
import FilmExpImg3 from "./assets/images/filmexp3.png";
import MistectvoImg1 from "./assets/images/mistectvo1.png";
import MistectvoImg2 from "./assets/images/mistectvo2.png";
import MistectvoImg3 from "./assets/images/mistectvo3.png";
import TodoImg1 from "./assets/images/todo1.png";
import TodoImg2 from "./assets/images/todo2.png";

export default function HomePage() {
  const [currentBackground, setCurrentBackground] = useState("hero");
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".hero, .about-container, .projects-container"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("hero")) {
              setCurrentBackground("hero");
            } else if (entry.target.classList.contains("about-container")) {
              setCurrentBackground("about");
            } else if (entry.target.classList.contains("projects-container")) {
              setCurrentBackground("projects");
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleImageWrapperClick = (cardIndex) => {
    setExpandedCard(cardIndex);
    document.body.classList.add("no-scroll");
  };

  const handleCloseClick = () => {
    setExpandedCard(null);
    document.body.classList.remove("no-scroll");
  };

  return (
    <main>
      {/* Dynamic Background Container */}
      <div className="dynamic-background">
        <div
          className={`background-layer ${
            currentBackground === "hero" ? "active" : ""
          }`}
          data-bg="hero"
        ></div>
        <div
          className={`background-layer ${
            currentBackground === "about" ? "active" : ""
          }`}
          data-bg="about"
        ></div>
        <div
          className={`background-layer ${
            currentBackground === "projects" ? "active" : ""
          }`}
          data-bg="projects"
        ></div>
      </div>

      <header className="hero">
        <div className="star-accent">
          <p>*</p>
        </div>
        <div className="title-container">
          <h1 className="title">
            <span className="title-letter">H</span>
            <span className="title-letter">e</span>
            <span className="title-letter">l</span>
            <span className="title-letter">l</span>
            <span className="title-letter">o</span>
            <span className="title-letter">,</span>
            <br />
            <span className="title-letter">I</span>
            <span className="title-letter block"> </span>
            <span className="title-letter">a</span>
            <span className="title-letter">m</span>
            <span className="title-letter block"> </span>
            <span className="title-letter">O</span>
            <span className="title-letter">l</span>
            <span className="title-letter">e</span>
            <span className="title-letter">k</span>
            <span className="title-letter">s</span>
            <span className="title-letter">a</span>
            <span className="title-letter">n</span>
            <span className="title-letter">d</span>
            <span className="title-letter">r</span>
            <span className="title-letter">.</span>
          </h1>
          <span className="pseudo">(AKA Stalex)</span>
        </div>
        <div className="description-container">
          <p className="description">
            I am a Frontend Developer with a passion for creating beautiful and
            functional web applications. You have great ideas, and I have the
            skills to bring them to life.
          </p>
        </div>
        <nav className="navigation-container" aria-label="Main Navigation">
          <div className="navigation-item-wrapper">
            <a href="#about" className="navigation-item">
              About me
            </a>
          </div>
          <div className="navigation-item-wrapper">
            <a href="#projects" className="navigation-item">
              Projects
            </a>
          </div>
          <div className="navigation-item-wrapper">
            <a href="#contact" className="navigation-item">
              Contact
            </a>
          </div>
          <div className="overlay" aria-hidden="true"></div>
        </nav>
      </header>
      <section className="about-container" id="about">
        <img src={imageOfMe} alt="Me" className="about-img"></img>
        <div className="star-accent" id="star-accent-1">
          <p>*</p>
        </div>
        <div className="star-accent" id="star-accent-2">
          <p>*</p>
        </div>
        <div className="about-title-wrapper">
          <h2 className="about-title">About me</h2>
        </div>
        <div className="about-content">
          <p>
            Currently, I’m a Computer Science student at UCU with a deep passion
            for designing and developing websites and web applications.
            <br />I love turning ideas into reality by crafting seamless,
            intuitive user experiences. Whether it's building something from the
            ground up or optimizing existing systems.
            <br />I focus on delivering tailored, meaningful solutions that meet
            both user and business needs.
          </p>
          <div className="about-stack">
            <h3 className="about-stack-title">My stack:</h3>
            <div className="about-stack-container">
              <div className="about-stack-item">
                <img src={HTMLIcon} alt="HTML5" />
                <label>HTML</label>
              </div>
              <div className="about-stack-item">
                <img src={CSSIcon} alt="CSS3" />
                <label>CSS</label>
              </div>
              <div className="about-stack-item">
                <img src={JSIcon} alt="JavaScript" />
                <label>JavaScript</label>
              </div>
              <div className="about-stack-item">
                <img src={ReactIcon} alt="React" />
                <label>React</label>
              </div>
              <div className="about-stack-item">
                <img src={PythonIcon} alt="Python" />
                <label>Python</label>
              </div>
              <div className="about-stack-item">
                <img src={GitIcon} alt="Git" />
                <label>Git</label>
              </div>
              <div className="about-stack-item">
                <img src={GitHubIcon} alt="Git" />
                <label>GitHub</label>
              </div>
              <div className="about-stack-item">
                <img src={PostmanIcon} alt="Git" />
                <label>Postman</label>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`projects-container ${
          expandedCard !== null ? "gallery-active" : ""
        }`}
        id="projects"
      >
        <div
          className={`backdrop ${expandedCard !== null ? "active" : ""}`}
          onClick={handleCloseClick}
        ></div>
        <div className="projects-title-wrapper">
          <h2 className="projects-title">Projects</h2>
        </div>
        <div className="projects-content">
          <div className="projects-card">
            <div className="projects-card-text">
              <h3>Exodus</h3>
              <p>
                Find best routes to evacuate citizens from Ukrainian warzone.
                Made to suit any circumstances. For your convenience.
              </p>
            </div>
            <div
              className={`projects-card-images-wrapper ${
                expandedCard === 0 ? "expanded" : ""
              }`}
              onClick={() => handleImageWrapperClick(0)}
            >
              {expandedCard === 0 && (
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseClick();
                  }}
                >
                  ×
                </button>
              )}
              <div className="projects-card-image">
                <img src={ExodusImg1} alt="Project screenshot 1" />
              </div>
              <div className="projects-card-image">
                <img src={ExodusImg2} alt="Project screenshot 2" />
              </div>
            </div>
          </div>
          <div className="projects-card">
            <div className="projects-card-text">
              <h3>Mistectvo</h3>
              <p>
                Interactive responsive website about Art subject at school with
                learning materials to help kids study.
              </p>
            </div>
            <div
              className={`projects-card-images-wrapper ${
                expandedCard === 1 ? "expanded" : ""
              }`}
              onClick={() => handleImageWrapperClick(1)}
            >
              {expandedCard === 1 && (
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseClick();
                  }}
                >
                  ×
                </button>
              )}
              <div className="projects-card-image">
                <img src={MistectvoImg1} alt="Project screenshot 1" />
              </div>
              <div className="projects-card-image">
                <img src={MistectvoImg2} alt="Project screenshot 2" />
              </div>
              <div className="projects-card-image">
                <img src={MistectvoImg3} alt="Project screenshot 3" />
              </div>
            </div>
          </div>
          <div className="projects-card">
            <div className="projects-card-text">
              <h3>FilmExplorer</h3>
              <p>Movie search website on native JS using OMDB API.</p>
            </div>
            <div
              className={`projects-card-images-wrapper ${
                expandedCard === 2 ? "expanded" : ""
              }`}
              onClick={() => handleImageWrapperClick(2)}
            >
              {expandedCard === 2 && (
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseClick();
                  }}
                >
                  ×
                </button>
              )}
              <div className="projects-card-image">
                <img src={FilmExpImg1} alt="Project screenshot 1" />
              </div>
              <div className="projects-card-image">
                <img src={FilmExpImg2} alt="Project screenshot 2" />
              </div>
              <div className="projects-card-image">
                <img src={FilmExpImg3} alt="Project screenshot 3" />
              </div>
            </div>
          </div>
          <div className="projects-card">
            <div className="projects-card-text">
              <h3>To-do List</h3>
              <p>A simple yet useful to-do list on React.</p>
            </div>
            <div
              className={`projects-card-images-wrapper ${
                expandedCard === 3 ? "expanded" : ""
              }`}
              onClick={() => handleImageWrapperClick(3)}
            >
              {expandedCard === 3 && (
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseClick();
                  }}
                >
                  ×
                </button>
              )}
              <div className="projects-card-image">
                <img src={TodoImg1} alt="Project screenshot 1" />
              </div>
              <div className="projects-card-image">
                <img src={TodoImg2} alt="Project screenshot 2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
