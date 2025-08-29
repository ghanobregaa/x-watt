import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { motion } from "motion/react";
import { TbMenu3, TbX } from "react-icons/tb";
function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className={styles.nav}>
        <div className={styles.logoTitle}>
          <img src="logo_text.svg" />
        </div>
        <div className={styles.row}>
          <div className={styles.btn}>Produtos</div>
          <div className={styles.btn}>Sobre nós</div>
          <div className={styles.btn}>Contactos</div>
        </div>
        <div className={styles.hamburguer} onClick={() => setModalOpen(true)}>
          <TbMenu3 className={styles.iconHamburguer} size={30} />
        </div>
        {modalOpen ? (
          <div className={styles.modal}>
            <div className={styles.modalNav}>
              <TbX
                className={styles.iconClose}
                size={30}
                onClick={() => setModalOpen(false)}
              />
            </div>
            <div className={styles.listModal}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.1, duration: 1 }}
              >
                Produtos
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.2, duration: 1 }}
              >
                Sobre nós
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", delay: 0.3, duration: 1 }}
              >
                Contactos
              </motion.div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </motion.div>
  );
}

export default Navbar;
