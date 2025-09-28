import { Header } from "components/Header";
import { Footer } from "components/Footer";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <h1>Welcome to my Portfolio!</h1>
      <Footer />
    </div>
  );
}