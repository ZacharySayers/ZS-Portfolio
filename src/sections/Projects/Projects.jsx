import styles from "./ProjectsStyles.module.css";
import coraal from "../../assets/CORAAL Dataset Image.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={coraal}
          link="https://huggingface.co/datasets/zsayers/CORAAL"
          h3="CORAAL Dataset"
          p="ASR Finetuning Dataset for African American Language"
        />
      </div>
    </section>
  );
}

export default Projects;
