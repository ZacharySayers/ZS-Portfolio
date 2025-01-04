import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Selenium" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
        <SkillList src={checkMarkIcon} skill="Matplotlib" />
        <SkillList src={checkMarkIcon} skill="PyTorch" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Jupyter Notebook" />
        <SkillList src={checkMarkIcon} skill="PyCharm" />
        <SkillList src={checkMarkIcon} skill="Visual Studio Code" />
        <SkillList src={checkMarkIcon} skill="Git and GitHub" />
        <SkillList src={checkMarkIcon} skill="Microsoft Office 365" />
      </div>
    </section>
  );
}

export default Skills;
