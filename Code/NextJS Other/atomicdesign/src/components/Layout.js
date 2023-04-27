import styles from "../styles/layout.module.scss";
import Navbar from "../components/Molecules/Navbar";
import TableOfContents from "../components/Molecules/TableOfContents";
import BlogContainer from "../components/Organisms/BlogContainer";

export default function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <header>
        <Navbar />
      </header>
      <main>
        <aside>
          <TableOfContents />
        </aside>
        <article>
          <BlogContainer />
        </article>
      </main>
    </div>
  );
}