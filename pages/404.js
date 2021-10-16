import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.css";
import { FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>چنین صفحه ای وجود ندارد</title>
      </Head>
      <div className={styles.root}>
        <div className={styles.sections}>
          <div className={styles.errorSection}>
            <span className={styles.number}>404</span>
            <span className={styles.errorText}>Page Not Found</span>
          </div>
          <p className={styles.hintText}>
            شاید این صفحه انتقال پیدا کرده یا پاک شده است! برای این که اطمینان
            پیدا کنید میتوانید به{" "}
            <Link href="/">
              <a className={styles.underLineText}>صفحه نخست</a>
            </Link>{" "}
            بروید و از آنجا شروع کنید.
          </p>
          <Link href="/">
            <a className={styles.homeBtn}>
              <p className={`no-margin ${styles.homeText}`}>صفحه نخست</p>
              <FaHome className={styles.homeIcon} />
            </a>
          </Link>{" "}
        </div>
      </div>
    </>
  );
}
