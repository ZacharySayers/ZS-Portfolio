import styles from "./VandIStyles.module.css";
import pfp from "../../assets/Presents for Progress Photo.png";
import NSBE from "../../assets/NSBELogo.png";
import PBM from "../../assets/UfpbmLogo.png";
import MLT from "../../assets/MLT.png";
import VolunteerCard from "../../common/VolunteerCard";

function Volunteer() {
  return (
    <section id="vandi" className={styles.container}>
      <h1 className="sectionTitle">
        Volunteer Projects and Professional Involvement
      </h1>
      <div className={styles.VolunteerContainer}>
        <VolunteerCard
          src={pfp}
          link="https://www.instagram.com/p/C0uc2FRO0vU/?hl=en&img_index=1"
          h3="Presents for Progress"
          p="Director of PBM's 2023 Christmas drive."
        />
        <VolunteerCard
          src={NSBE}
          link="https://www.instagram.com/p/DA1mYBpSjVP/?img_index=1"
          h3="NSBE"
          p="2024-2025 Finance Chair for UF NSBE"
        />
        <VolunteerCard
          src={MLT}
          link="https://mlt.org/"
          h3="MLT"
          p="Career Prep 2026 Fellow"
        />
        <VolunteerCard
          src={PBM}
          link="https://pbm1989.org/"
          h3="PBM"
          p="Fall 2023 Inductee"
        />
      </div>
    </section>
  );
}

export default Volunteer;
