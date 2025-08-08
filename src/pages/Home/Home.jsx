import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import { motion } from "motion/react";
import jsonData from "../../app.json";
import Footer from "../../components/Footer/Footer";
import { TbArrowUpRight, TbChevronUpRight } from "react-icons/tb";

function Home() {
  const [app, setApp] = useState({});
  const targetRef = useRef(null);

  const scrollToSection = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setApp(jsonData);
  });
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
            initial={{ opacity: 0, translateY: "30%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            viewport={{ once: "true" }}
            className={styles.photo}
          >
            <motion.img src="powerwall3.jpg" />
          </motion.div>
          <div className={styles.columnDesc}>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: "spring", delay: 0.25, duration: 1 }}
              viewport={{ once: "true" }}
              className={styles.productTitle}
            >
              Powerwall 3
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: "spring", delay: 0.3, duration: 1 }}
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
              transition={{ type: "spring", delay: 0.35, duration: 1 }}
              viewport={{ once: "true" }}
              className={styles.aboutBtn}
            >
              Saber mais <TbArrowUpRight className={styles.arrow} />
            </motion.div>
          </div>
        </div>
        <div className={styles.gridTemplate}>
          <div className={styles.columnDesc}>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: "spring", delay: 0.25, duration: 1 }}
              viewport={{ once: "true" }}
              className={styles.productTitle}
            >
              Powerwall 3
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: "spring", delay: 0.3, duration: 1 }}
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
              transition={{ type: "spring", delay: 0.35, duration: 1 }}
              viewport={{ once: "true" }}
              className={styles.aboutBtn}
            >
              Saber mais <TbArrowUpRight className={styles.arrow} />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: "30%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            viewport={{ once: "true" }}
            className={styles.photo}
          >
            <motion.img src="powerwall3.jpg" />
          </motion.div>
        </div>
        <div className={styles.gridTemplate}>
          <motion.div
            initial={{ opacity: 0, translateY: "30%" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.2, duration: 1 }}
            viewport={{ once: "true" }}
            className={styles.photo}
          >
            <motion.img src="powerwall3.jpg" />
          </motion.div>
          <div className={styles.columnDesc}>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: "spring", delay: 0.25, duration: 1 }}
              viewport={{ once: "true" }}
              className={styles.productTitle}
            >
              Powerwall 3
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateX: -30 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ type: "spring", delay: 0.3, duration: 1 }}
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
              transition={{ type: "spring", delay: 0.35, duration: 1 }}
              viewport={{ once: "true" }}
              className={styles.aboutBtn}
            >
              Saber mais <TbArrowUpRight className={styles.arrow} />
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.divide}>
          <div className={styles.sectionColumn}>
            <div className={styles.sectionTitle}>
              Queremos Fazer Parte da <span>Sua Transição Energética!</span>
            </div>
            <div className={styles.sectionDesc1}>
              Somos o parceiro certo para o ajudar na sua transição energética.
            </div>
            <div className={styles.sectionDesc2}>
              Oferecemos soluções especializadas em energia solar, armazenamento
              de energia e carregamento de veículos elétricos para casas e
              empresas.
              <br />
              <br />
              Atuamos também como consultores independentes no setor das
              energias renováveis, auxiliando os nossos clientes em todos os
              processos desde a fusão, aquisição e financiamento, bem como no
              desenvolvimento de projetos, construção, instalação, conectividade
              e lançamento das soluções. Quando o projeto se tornar realidade,
              continuamos a apoiar os nossos cliente com uma assistência técnica
              dedicada e permanente.
              <br />
              <br />A nossa equipa de profissionais garante o acompanhamento
              durante todo o ciclo de vida das instalações de energia renovável.
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <motion.div className={styles.certification}>
          <motion.div
            initial={{ opacity: 0, translateX: -30 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: "spring", delay: 0.3, duration: 1 }}
            className={styles.certTitle}
          >
            A X-WATT tem certificação da Tesla Energy
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateX: -30 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ type: "spring", delay: 0.3, duration: 1 }}
            className={styles.certDesc}
          >
            Somos instaladores certificados para oferecer a si a melhor
            tecnologia de armazenamento de energia.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ type: "spring", delay: 0.5, duration: 1 }}
            className={styles.certBox}
          >
            <img src="image.png" />
          </motion.div>
        </motion.div>
      </section> */}
    </>
  );
}

export default Home;
