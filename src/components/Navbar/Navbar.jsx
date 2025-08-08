import React from "react";
import styles from "./Navbar.module.css";
import { motion } from "motion/react";
function Navbar() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.nav}>
        <div className={styles.logoTitle}>
          <img src="logo_text.svg" />
        </div>
        <div className={styles.row}>
          <motion.div
            whileHover={{ color: "#fff", backgroundColor: "#ffffff15" }}
            className={styles.btn}
          >
            Produtos
          </motion.div>
          <motion.div
            whileHover={{ color: "#fff", backgroundColor: "#ffffff15" }}
            className={styles.btn}
          >
            Sobre nós
          </motion.div>{" "}
          <motion.div
            whileHover={{ color: "#fff", backgroundColor: "#ffffff15" }}
            className={styles.btn}
          >
            Contactos
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
