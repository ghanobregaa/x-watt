import React from "react";
import styles from "./Footer.module.css";
import { TbBrandFacebook, TbBrandInstagram, TbBrandX } from "react-icons/tb";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.column}>
          <img src="logo_text.svg" />
          <div className={styles.text}>
            Rua da Alfândega Nº 57
            <br />
            9000-059 Funchal
            <br />
            Portugal
          </div>
          <div className={styles.spacer}>
            <div className={styles.col}>
              <div>Telefone</div>
              <div>+351 291 091 045</div>
            </div>
            <div className={styles.col}>
              <div>Email</div>
              <div>x-watt@x-watt.pt</div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.rowIcons}>
            <div>
              <TbBrandInstagram size={24} />
            </div>
            <div>
              <TbBrandFacebook size={24} />
            </div>
            <div>
              <TbBrandX size={24} />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;
