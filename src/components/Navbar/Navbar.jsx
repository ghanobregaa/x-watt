import React from "react";
import styles from "./Navbar.module.css";
import { motion } from "motion/react";
function Navbar() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", delay: 0.6, duration: 1 }}
    >
      <div className={styles.nav}>
        <div className={styles.logoTitle}>
          <img src="logo_white.svg" />
        </div>
        <div className={styles.row}>
          <div className={styles.btn}>Produtos</div>
          <div className={styles.btn}>Sobre nós</div>{" "}
          <div className={styles.btn}>Contactos</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
