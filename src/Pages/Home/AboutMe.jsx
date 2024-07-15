export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="img\about-me.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills-section--heading">About Me</h1>
            <p className="hero--section-description">
            A self motivated hardworking graduate student in computer science, I seek an work position at your Company that
            will allow me to explore my career options in the IT sector.<br/>
            As a computer science student i developed Excellent interpersonal skills through working on my own.<br/>
            I am flexible and open to learning from mentors and leaders in the field.<br/>
            </p>
            <h1 className="skills-section--heading">Education</h1>
            <p className="section--title">Along With My degree</p>
            <p className="hero--section-description">
             <b> Bachelore of Computer Science and Engineering</b><br/>
              Coimbatore Institute of Engineering and Technology <br/>
              <abbr>CGPA</abbr>=7.52
            </p>
          </div>
        </div>
      </section>
    );
  }