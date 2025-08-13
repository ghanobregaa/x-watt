import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { motion } from "motion/react";
import jsonData from "../../app.json";
import Footer from "../../components/Footer/Footer";
import {
  TbArrowUpRight,
  TbBuildingSkyscraper,
  TbChevronUpRight,
  TbHome,
  TbScript,
  TbSettingsSpark,
  TbSnowflake,
} from "react-icons/tb";
import { delay } from "motion";

function Home() {
  const [app, setApp] = useState({});
  const targetRef = useRef(null);

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setApp(jsonData);
  });

  const animationDelay = { type: "spring", duration: 0.65, delay: 0.5 };
  return (
    <>
      <Navbar />
      <section className={styles.section1}>
        <div className={styles.center}>
          <div className={styles.box}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.5, duration: 1 }}
              className={styles.titleTransparent}
            >
              {app.title}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", delay: 0.55, duration: 1 }}
              className={styles.btnMais}
              onClick={scrollToSection}
            >
              Saber mais
            </motion.div>
          </div>
        </div>
        <motion.div
          className={styles.videoContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <video
            src="video1.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </motion.div>
      </section>
      <section className={styles.sectionProducts} ref={targetRef}>
        <div className={styles.gridTemplate}>
          <motion.div
            initial={{ opacity: 0, rotate: "10deg", scale: 0.7 }}
            whileInView={{ opacity: 1, rotate: "0deg", scale: 1 }}
            transition={animationDelay}
            viewport={{ once: "true" }}
            className={styles.photo}
          >
            <motion.img src="powerwall3.jpg" />
          </motion.div>
          <motion.div className={styles.columnDesc}>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.productTitle}
            >
              Powerwall 3
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.productDesc}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              tempore veniam molestias eum asperiores voluptates tenetur hic,
              repellendus praesentium aliquam, consectetur quo libero officiis
              modi neque corporis voluptatibus ratione sint?
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.aboutBtn}
            >
              Saber mais <TbArrowUpRight className={styles.arrow} />
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.gridTemplate}>
          <motion.div className={styles.columnDesc}>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.productTitle}
            >
              Powerwall 3
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.productDesc}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              tempore veniam molestias eum asperiores voluptates tenetur hic,
              repellendus praesentium aliquam, consectetur quo libero officiis
              modi neque corporis voluptatibus ratione sint?
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.aboutBtn}
            >
              Saber mais <TbArrowUpRight className={styles.arrow} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: "-10deg", scale: 0.7 }}
            whileInView={{ opacity: 1, rotate: "0deg", scale: 1 }}
            transition={animationDelay}
            viewport={{ once: "true" }}
            className={styles.photo}
          >
            <motion.img src="powerwall3.jpg" />
          </motion.div>
        </div>
        <div className={styles.gridTemplate}>
          <motion.div
            initial={{ opacity: 0, rotate: "10deg", scale: 0.7 }}
            whileInView={{ opacity: 1, rotate: "0deg", scale: 1 }}
            transition={animationDelay}
            viewport={{ once: "true" }}
            className={styles.photo}
          >
            <motion.img src="powerwall3.jpg" />
          </motion.div>
          <motion.div className={styles.columnDesc}>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.productTitle}
            >
              Powerwall 3
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.productDesc}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              tempore veniam molestias eum asperiores voluptates tenetur hic,
              repellendus praesentium aliquam, consectetur quo libero officiis
              modi neque corporis voluptatibus ratione sint?
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.aboutBtn}
            >
              Saber mais <TbArrowUpRight className={styles.arrow} />
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section>
        <div className={styles.divide}>
          <div className={styles.sectionColumn}>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.sectionTitle}
            >
              Queremos Fazer Parte da <span>Sua Transição Energética!</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.sectionDesc1}
            >
              {app.aboutSubTitle}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.sectionDesc2}
              dangerouslySetInnerHTML={{ __html: app.aboutDesc }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={animationDelay}
              viewport={{ once: "true" }}
              className={styles.proposal}
            >
              Solicite-nos uma proposta
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
