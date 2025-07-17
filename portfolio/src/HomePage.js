import imageOfMe from "./assets/images/me_full_cropped.png";
export default function HomePage() {
  return (
    <main>
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
            <ul className="about-stack-list">
              <li className="about-stack-item">React</li>
              <li className="about-stack-item">HTML</li>
              <li className="about-stack-item">CSS</li>
              <li className="about-stack-item">JavaScript</li>
              <li className="about-stack-item">Python</li>
              <li className="about-stack-item">Git</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
