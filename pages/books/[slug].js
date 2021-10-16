import marked from "marked";
import Layout from "@/components/Layout";
import { getContentByFileName, getPathsByFileName } from "shared/getPosts";

const PostPage = ({
  frontMatter: { keywords, tabTitle, description, coverImage, bookDetails },
  content,
}) => {
  return (
    <Layout title={tabTitle} description={description} keywords={keywords}>
      <>
        {coverImage && (
          <img src={coverImage} className="post-page-cover-image" />
        )}
        <div className={"dark-box-with-hover medium-margin-y"}>
          <p className={"no-margin description-text"}>
            نویسنده: {bookDetails.author}
          </p>
          <p className={"no-margin description-text"}>
            مترجم: {bookDetails.translator}
          </p>
          <p className={"no-margin description-text"}>
            انتشارات: {bookDetails.publisher}
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        <hr />
      </>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = getPathsByFileName("books");
  return { paths, fallback: false };
}
export async function getStaticProps({ params: { slug } }) {
  const { frontMatter, content } = getContentByFileName("books", slug);
  return { props: { frontMatter, content, slug } };
}

export default PostPage;
