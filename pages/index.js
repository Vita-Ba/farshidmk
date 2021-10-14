import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import myPhoto from "../public/assets/images/profile.jpg";

export default function HomePage() {
  return (
    <Layout>
      <>
        <div className={styles.imageContainer}>
          <div className={styles.photoByText}>
            <p>Photo By: sasha freemind</p>
            <p>from unsplash.com</p>
          </div>
        </div>
        <div className={`gray-box ${styles.introductionSection}`}>
          <div className={styles.introductionTitle}>
            <p>درباره من</p>
            <img alt="me" src="/assets/images/profile.jpg" />
          </div>
          <hr />
          <p className={styles.introductionText}>
            من فرشید منوچهری کلانتری هستم. دارای مدرک کارشناسی ارشد از دانشگاه
            صنعتی شیراز در رشته مهندسی کامپیوتر.
            <br />
            <strong>
              مجردم. ورزشکارم. تقریبا کتاب زیاد میخونم. بردگیم دوست دارم و به
              برنامه نویسی تحت وب علاقه زیادی دارم
            </strong>
            &nbsp;تو این وبلاگ قراره خلاصه یا نکات مهمی از کتابهایی که میخونم رو
            توش بنویسم. نکات مهمی که یاد میگیرم تو دنیای برنامه نویسی رو اینجا
            ذخیره میکنم(هم خودم بهتر یاد میگیرم هم شاید یکی دعامون کرد و مشکل
            گشا بود) و چیزهای دیگه که فکر میکنم ارزش به اشتراک گذاشتن با بقیه رو
            داره رو قراره تو این وبلاگ بنویسم
          </p>
        </div>
        {/* 1. show blog sections with icons - sher, resume, ketab, tajrobiat
          2. show hire me or contact me
       */}
      </>
    </Layout>
  );
}
