import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/Home.module.css";
import { SECTIONS } from "../shared/sections";
import aboutMeText from "shared/aboutMeText";
//TODO: show resume
//TODO: show akharin mataleb
//TODO: add about me verticaly
//TODO: create other section
export default function HomePage() {
  return (
    <Layout>
      <>
        <div className={styles.imageContainer}>
          <div className={styles.photoByText}>
            <p>Photo By: sasha freemind</p>
            <p>
              From <a href="http://www.unsplash.com">unsplash.com</a>
            </p>
          </div>
        </div>
        <div className={`gray-box ${styles.introductionSection}`}>
          <div className={styles.introductionTitle}>
            <p>درباره من</p>
            <img alt="me" src="/assets/images/profile.jpg" />
          </div>
          <hr />
          <p className={styles.introductionText}>
            {aboutMeText}
            &nbsp;تو این وبلاگ قراره خلاصه یا نکات مهمی از کتابهایی که میخونم رو
            توش بنویسم. نکات مهمی که یاد میگیرم تو دنیای برنامه نویسی رو اینجا
            ذخیره میکنم(هم خودم بهتر یاد میگیرم هم شاید یکی دعامون کرد و مشکل
            گشا بود) و چیزهای دیگه که فکر میکنم ارزش به اشتراک گذاشتن با بقیه رو
            داره رو قراره تو این وبلاگ بنویسم
          </p>
        </div>
        <div className={styles.sectionCards}>
          {SECTIONS?.map((section) => (
            <Link key={section.id} href={section.link}>
              <a>
                <div
                  className={`dark-box-with-hover ${styles.sectionCardRoot}`}
                >
                  <span className="border-bottom-rem">{section.title}</span>
                  <span className="margin-top-small">{section.icon}</span>
                </div>
              </a>
            </Link>
          ))}
        </div>
        {/* 1. show blog sections with icons - sher, resume, ketab, tajrobiat
          2. show hire me or contact me be soorate ofoghi kenar
       */}
      </>
    </Layout>
  );
}
