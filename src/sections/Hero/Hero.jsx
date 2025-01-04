import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Headshot.png";
import linkedinIcon from "../../assets/linkedin-dark.svg";
import CV from "../../assets/lorem-ipsum.pdf";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="PFP ZS" />
      </div>
      <div className={styles.info}>
        <h1>
          {" "}
          Zachary <br /> Sayers
        </h1>
        <h2>Data Analyst</h2>
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
    </section>
  );
}

export default Hero;
