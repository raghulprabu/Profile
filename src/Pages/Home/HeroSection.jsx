export default function HeroSection (){
    return(
        <section id="heroSection" className="hero--section">
             <div className="hero--section--content--box">
             <div className="hero--section--content">
             <h2 className="section--title">Hi, I'm RAGHUL</h2>
             <h1 className="hero--section--title">
             <span className="hero--section-title--color">Front-End</span>{" "}
            <br />
            Developer
             </h1>
             <p className="hero--section-description">
             I love front-end development specializing in Web development and Mobile Development.
             As a fresher in the tech world, I bring a fresh perspective and an insatiable hunger for learning and growth.
          </p>
          <br/>
         </div>  
         <a href="./img/Raghul CV.pdf" target="_blank" download><button className="btn btn-primary">Downlode CV</button></a>
        </div>
        <div className="hero--section--img">
        <img src="./img/hero-image.png" alt="Hero Section" />
      </div>
        </section>
    );
}