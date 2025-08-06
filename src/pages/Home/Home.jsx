import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { motion } from "motion/react";
import jsonData from "../../app.json";

function Home() {
  const [app, setApp] = useState({});
  useEffect(() => {
    setApp(jsonData);
  });
  return (
    <>
      <Navbar />
      <section>
        <div className={styles.center}>
          <motion.div className={styles.box}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring", ease: "easeInOut" }}
              className={styles.title}
            >
              Power Your Home with Clean Energy span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, ease: "easeInOut" }}
              className={styles.aboutBtn}
            >
              Saber mais
            </motion.div>
          </motion.div>
        </div>
        <motion.div className={styles.mainImg}></motion.div>
      </section>
      <section>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <img className={styles.product} src="powerwall.png" />
        </motion.div>
      </section>
    </>
  );
}

export default Home;
