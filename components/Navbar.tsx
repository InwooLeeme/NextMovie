import Link from "next/link";
import styles from "../styles/nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
      </ul>
    </nav>
  );
}
