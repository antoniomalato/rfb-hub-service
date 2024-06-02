import Header from "@/components/Header";
import styles from "./page.module.css";
import TittleInfo from "@/components/TittleInfo";
import CentralImage from "@/components/CentralImage";
import AboutUs from "@/components/AboutUs";
import Solutions from "@/components/Solutions";
import Deal from "@/components/Deal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <TittleInfo />
      <CentralImage />
      <AboutUs />
      <Solutions />
      < br />
      < br />
      < br />
      < br />
      < br />
      <Deal />
      <Footer />
    </main>
  );
}
