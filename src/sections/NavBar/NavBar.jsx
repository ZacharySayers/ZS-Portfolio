import styles from "./NavBarStyles.module.css";

const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#vandi">Volunteering</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
