import styles from "../styles/Footer.module.css";
import { BsLinkedin, BsFacebook, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={`${styles.root}`}>
      <div className={`bg-gray ${styles.bgCircle}`}></div>
      <div className={`${styles.hireMeSection} `}>
        <div>
          <p className={`no-margin text-light text-shadow-dark`}>
            ایده ای برای پیاده کردن دارید؟
          </p>
          <p className={`no-margin description-text text-shadow-light`}>
            اگر برای پیاده سازی ایده ی خود نیاز به کمک یا هم فکری دارید. خوشحال
            میشم بتونم کمکی بکنم.
          </p>
        </div>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
          className={`bg-light ${styles.hireMeBtn}`}
        >
          Hire ME
        </a>
      </div>

      <div className={styles.footerSections}>
        <div className={styles.aboutMeSection}>
          <p className={`text-light no-margin ${styles.title}`}>درباره من</p>
          <hr className={`bg-light ${styles.titleDivider}`} />
          <p className="no-margin description-text text-light">
            من فرشید منوچهری کلانتری هستم. دارای مدرک کارشناسی ارشد از دانشگاه
            صنعتی شیراز در رشته مهندسی کامپیوتر. مجردم. ورزشکارم. تقریبا کتاب
            زیاد میخونم. بردگیم دوست دارم و به برنامه نویسی تحت وب علاقه زیادی
            دارم
          </p>
        </div>
        <div className={styles.footerColumn}>
          <p className={`text-light no-margin ${styles.title}`}>
            بخش بندی مطالب
          </p>
          <hr className={`bg-light ${styles.titleDivider}`} />
        </div>
        <div className={styles.footerColumn}>
          <p className={`text-light no-margin ${styles.title}`}>ارتباط با من</p>
          <hr className={`bg-light ${styles.titleDivider}`} />
          <div className={styles.socialIcon}>
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_ADDRESS}
              className="text-light"
            >
              <BsLinkedin />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_FACEBOOK_ADDRESS}
              className="text-light"
            >
              <BsFacebook />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_TELEGRAM_ADDRESS}
              className="text-light"
            >
              <BsTelegram />
            </a>
          </div>
        </div>
      </div>
      <hr className={`bg-dark ${styles.divider}`} />
      <p
        className={`no-margin description-text text-light ${styles.copyRightText}`}
      >
        {" "}
        این وبلاگ با استفاده از تکنولوژی{" "}
        <a href="https://nextjs.org/">Next.js</a> ایجاد شده است
      </p>
    </div>
  );
};

export default Footer;
