export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, We're Group 2</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Trends</span>{" "}
            <br />
            in Web Technology
          </h1>
          <p className="hero--section-description">
            This is a demo description.
            <br /> This is a demo description. This is a demo description. 
          </p>
        </div>
        <button className="btn btn-primary">Learn more</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.svg" alt="Hero Section"/>
      </div>
    </section>
  );
}
