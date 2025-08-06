import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { motion } from "motion/react";

function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.section1}>
        <div className={styles.boxImg}>
          <div className={styles.infoBox}>
            <motion.h1
              style={{ overflow: "hidden", whiteSpace: "nowrap", opacity: 0 }}
              initial={{ width: 0 }}
              animate={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            >
              X-WATT
            </motion.h1>
            <motion.div
              initial={{ y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
              className={styles.about}
            >
              Saber mais
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
