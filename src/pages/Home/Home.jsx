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
          <div className={styles.box}>
            <div className={styles.title}>
              Power your home with clean energy{" "}
              <span style={{ color: "#4ade80" }}>storage</span>
            </div>
            <motion.div
              whileHover={{ color: "#fff", backgroundColor: "#ffffff50" }}
              className={styles.aboutBtn}
            >
              Saber mais
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.center}>
          <div className={styles.photoRow}>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.25 }}
              className={styles.photoFrame}
            >
              <img src="powerwall3.jpg" />
            </motion.div>
            <div></div>
            <div className={styles.columnPhoto}>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className={styles.photoTitle}
              >
                Powerwall 3
              </motion.div>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.35 }}
                className={styles.photoDesc}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                molestiae. Aliquid fugiat facere ipsam tempore dolorem impedit.
                Quae maiores, delectus adipisci esse quaerat aut molestias
                numquam nam qui culpa id!
              </motion.div>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
                className={styles.learnMore}
              >
                Saber mais
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.center}>
          <div className={styles.photoRow}>
            <div className={styles.columnPhoto}>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className={styles.photoTitle}
              >
                Wallconnector
              </motion.div>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.35 }}
                className={styles.photoDesc}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                molestiae. Aliquid fugiat facere ipsam tempore dolorem impedit.
                Quae maiores, delectus adipisci esse quaerat aut molestias
                numquam nam qui culpa id!
              </motion.div>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
                className={styles.learnMore}
              >
                Saber mais
              </motion.div>
            </div>
            <div></div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.25 }}
              className={styles.photoFrame}
            >
              <img src="wallconnector.webp" />
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.center}>
          <div className={styles.photoRow}>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.25 }}
              className={styles.photoFrame}
            >
              <img src="megapack.webp" />
            </motion.div>
            <div></div>
            <div className={styles.columnPhoto}>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className={styles.photoTitle}
              >
                Tesla mega pack
              </motion.div>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.35 }}
                className={styles.photoDesc}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                molestiae. Aliquid fugiat facere ipsam tempore dolorem impedit.
                Quae maiores, delectus adipisci esse quaerat aut molestias
                numquam nam qui culpa id!
              </motion.div>
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
                className={styles.learnMore}
              >
                Saber mais
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
