export default function HomePage() {
  return (
    <div className="hero">
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
      <div className="navigation-container">
        <a href="#about" className="navigation-item">
          About me
        </a>
        <a href="#projects" className="navigation-item">
          Projects
        </a>
        <a href="#contact" className="navigation-item">
          Contact
        </a>
      </div>
    </div>
  );
}
