import Image from "next/image";
import bgimg from "../public/images/viki.jpeg";
import styles from "./profile.module.css";

export default function Personal() {
  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <h2>Waqar Ahmed</h2>
        <p>
          Myself Waqar Ahmed. I am student of Software Engineering.I am also
          Learing about Artificial Intelligence and web3. My life goal is to
          become a
          <b>
            {" "}
            <i>Project Manager</i>
          </b>{" "}
          in Microsoft.
        </p>
      </div>
      <div className={styles.profileImage}>
        <Image
          src={bgimg}
          alt="Profile Picture"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
    </div>
  );
}
