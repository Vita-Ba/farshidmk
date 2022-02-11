import Link from "next/link";
import { FaWindowClose, FaHome } from "react-icons/fa";
import { SECTIONS } from "../shared/sections";
import styles from "@/styles/menu.module.css";

const Menu = ({ isMenuOpen, onCloseMenu }) => {
  return (
    <>
      <div
        className={`${styles.nav} ${styles.firstLayer} ${
          isMenuOpen ? styles.active : null
        }`}
      >
        <div
          className={`${styles.nav} ${styles.secondLayer} ${
            isMenuOpen ? styles.active : null
          }`}
        >
          <div
            className={`${styles.nav} ${styles.thirdLayer} ${
              isMenuOpen ? styles.active : null
            }`}
          >
            <FaWindowClose className={styles.closeIcon} onClick={onCloseMenu} />
            <div className={styles.itemSection}>
              <Link href={"/"}>
                <a>
                  <li className={`text-light ${styles.listItem}`}>
                    <span className="margin-left-small">
                      <FaHome />
                    </span>
                    {"صفحه اصلی"}
                  </li>
                </a>
              </Link>
              {SECTIONS?.map((section) => (
                <Link key={section.id} href={section.link}>
                  <a>
                    <li className={`text-light ${styles.listItem}`}>
                      <span className="margin-left-small">{section.icon}</span>
                      {section.title}
                    </li>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
