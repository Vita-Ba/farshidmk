import Head from "next/head";
import { HiMenu } from "react-icons/hi";
import Footer from "./Footer";

export default function Layout({
  title = "وبلاگ فرشید منوچهری",
  keywords = "فرشید منوچهری کلانتری , خلاصه کتاب , farshid manoochehri kalantari ",
  description = "وبلاگ فرشید منوچهری کلانتری , خلاصه کتاب، ادبیات , اطلاعاتی ",
  children,
  faviconType,
}) {
  const FAVICON =
    faviconType === "book" ? "./assets/favicon/book.ico" : "/favicon.ico";
  return (
    <div className="root">
      <Head>
        <title>{title} </title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link rel="icon" href={FAVICON} />
      </Head>
      <div className="header-section">
        <p className="header-text">زندگی باید کرد</p>
        <HiMenu className="header-icon" />
      </div>

      {children}
      <Footer />
    </div>
  );
}
