import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Headshot.png";
import linkedinIcon from "../../assets/linkedin-dark.svg";
import leftImage from "../../assets/statistics.png";
import rightImage from "../../assets/statistics.png";
import CV from "../../assets/Zachary Sayers Resume.pdf";
import "animate.css";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      {/* Left Image
      <img
        className={styles.leftImage}
        src={leftImage}
        alt="Left side data science image"
      */}

      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="PFP ZS" />
      </div>
      <div className={styles.info}>
        <h1>
          {" "}
          Zachary <br /> Sayers
        </h1>
        <h2>
          <Typewriter
            options={{
              strings: ["Data Analyst"],
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
          />
        </h2>

        <span>
          <a
            href="https://www.linkedin.com/in/zachary-a-sayers/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          {" "}
          A data connoisseur blending analytical skills with a passion for
          leveraging technology to drive impactful solutions that promote
          equity.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
      {/* Right Image 
      <img
        className={styles.rightImage + " animate__pulse"}
        src={rightImage}
        alt="Right side data science image"
      />
      */}
    </section>
  );
}

export default Hero;
