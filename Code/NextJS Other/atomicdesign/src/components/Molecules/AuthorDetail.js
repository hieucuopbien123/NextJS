import styles from "../../styles/authorDetail.module.scss";
import Image from "next/image";

export default function AuthorDetail() {
  return (
    <div className={styles.authorDetailContainer}>
      <div className="img-box">
        <Image
          alt="Author's avatar"
          src="/author.jpg"
          width="50"
          height="50"
        />
      </div>
      <span>John Doe</span>
    </div>
  );
}