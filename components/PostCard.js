import Link from "next/link";
import styles from "@/styles/PostCard.module.css";
import { toLocaleDate } from "shared/time";

const PostCard = ({ post: { slug, frontMatter } }) => {
  return (
    <Link href={`/${frontMatter.category}/${slug}`}>
      <a>
        <div className={`dark-box ${styles.root}`}>
          <div className={` ${styles.headerSection}`}>
            <img src={frontMatter.coverImage} className={styles.coverImage} />
            <div className={`text-gray ${styles.infoSection}`}>
              <p>{frontMatter.title}</p>
              <p>{toLocaleDate(frontMatter.dateByTimestamp)}</p>
            </div>
          </div>
          <p className={`description-text`}>{frontMatter.excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
