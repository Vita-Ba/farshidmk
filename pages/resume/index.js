import Layout from "@/components/Layout";
import styles from "@/styles/resume.module.css";
import aboutMeText from "shared/aboutMeText";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillNotification,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaLink, FaGit } from "react-icons/fa";

export default function Resume() {
  const abilities = [
    { id: 1, name: "Js", percent: 80 },
    { id: 2, name: "React", percent: 70 },
    { id: 3, name: "TypeScript", percent: 40 },
    { id: 4, name: "MaterialUi", percent: 80 },
    { id: 5, name: "NodeJs", percent: 45 },
    { id: 6, name: "Git", percent: 75 },
    { id: 7, name: "HtmlCss", percent: 75 },
    { id: 8, name: "NextJs", percent: 55 },
    { id: 9, name: "English", percent: 70 },
    { id: 10, name: "VueJs", percent: 40 },
  ];
  return (
    <Layout title="رزومه">
      <section className={styles.root}>
        <div className={styles.aboutMeSection}>
          <img alt="me" src="/assets/images/profile.jpg" />
          <section className={styles.aboutMeTexts}>
            <h4>فرشید منوچهری کلانتری</h4>
            <p>{aboutMeText}</p>
            <h4>تماس با من</h4>
            <div className={styles.contactMe}>
              <div>
                <AiOutlinePhone />
                {process.env.NEXT_PUBLIC_PHONE_NUMBER}
              </div>
              <div>
                <GoLocation />
                {"تهران - میرزای شیرازی"}
              </div>
              <div>
                <AiOutlineMail />
                <span className={styles.emailAddress}>
                  {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.historySection}>
          <p>
            متولد بهمن سال ۱۳۷۱ هستم. مدرک کارشناسی خود را در رشته کامپیوتر -
            نرم افزار از دانشگاه آزاد دریافت کردم و همچنین مدرک کارشناسی ارشد
            خود را در رشته نرم افزار از دانشگاه صنعتی شیراز دریافت نمودم. در تست
            شخصیت شناسی MBTI دارای شخصیت ISTJ هستم.
          </p>
          <h4>دوره های گذرانده شده</h4>
          <ul>
            <li>++C پیشرفته در مجتمع فنی تهران</li>
            <li>+A در مجتمع فنی تهران</li>
            <li>Network Infrastructure در مجتمع فنی تهران</li>
            <li>دوره Front-End دانشگاه تهران</li>
            <li>کمک های اولیه</li>
            <li>مربی گری درجه 3 بسکت بال</li>
          </ul>

          <h4>سوابق شغلی</h4>
          <ul>
            <li>کار آموز در شرکت پارس ريز پرداز ۱۳۹۰-۱۳۹۳</li>
            <li>برنامه نويس در شرکت اندیشه نگار پارس ۱۳۹۴-۱۳۹۵</li>
            <li> فریلنسري ۱۳۹۸ تا الان</li>
            <li>
              {" "}
              برنامه نویس فرانت اند در شرکت بازی سازی مدریک از آبان ۱۳۹۹ تا
              شهریور ۱۴۰۰
            </li>
          </ul>
          <h4>نمونه پروژه های انجام داده</h4>
          <ul>
            <small className={styles.hintText}>
              <AiFillNotification />
              برای دیدن فیلم های ویدیو پروژه ها باید با آی پی غیر از ایران وارد
              شوید!
            </small>
            <li>
              <a href="https://www.loom.com/share/fea5085d864f42cea7b8ae949d908e14">
                <FaLink />
                <small> {" (لینک ویدیو) "}</small>
              </a>{" "}
              برنامه پیام رسان با قابلیت نمایش کانال های مختلف و فیلتر کردن بر
              اساس نوع و نویسنده. امکان نوشتن کامنت یا پیام داخل کانال ها. در
              این برنامه از lazy loading برای دریافت پیام ها استفاده شده
            </li>
            <li>
              <a href="https://www.loom.com/share/24698a9bcdbf436bbaa000878d92eceb">
                <FaLink />
                <small> {" (لینک ویدیو) "}</small>
              </a>{" "}
              پنل مدیریتی برای کارخانه. کارگران خط تولید با وارد شدن به بخش
              مربوط به خود کارهایی که انجام داده اند و یا در حال انجام هستند را
              نشانه گذاری میکنند. مدیریت سیستم بر اساس نوع نقشی که دارد میتواند
              عملیات مختلفی مانند تعریف کار جدید یا دیدن خطاهای موجود داخل یک خط
              تولید خاص و .... را انجام دهد.
            </li>
            <li>
              <a href="https://www.loom.com/share/ce7d8e9e263e4c2f944e5a0a7df9e4f4">
                <FaLink />
                <small> {" (لینک ویدیو) "}</small>
              </a>{" "}
              بخشی از پروژه که امکان خرید لوازم اضافی برای اتاق و مدت زمانی که
              رزو کرده را مهیا میکند. در این پروژه از ریداکس استفاده شده است.
            </li>
          </ul>
          <h4>توانایی ها</h4>
          <ul>
            <li>English</li>
            <li>JAVASCRIPT</li>
            <li>React js</li>
            <li>Next js</li>
            <li>React Native</li>
            <li>Node js</li>
            <li>Vue</li>
            <li>Git</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
