import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import getPosts from "shared/getPosts";

const BlogPage = ({ posts }) => {
  return (
    <Layout>
      <>
        <h3>در این قسمت خلاصه یا متنهای قشنگ کتابها را یادداشت کردم. </h3>
        {posts?.length > 0 ? (
          <div className={"flex-evenly"}>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p>اطلاعاتی برای نمایش وجود ندارد</p>
        )}
      </>
    </Layout>
  );
};

export function getStaticProps() {
  const posts = getPosts("books");
  return { props: { posts } };
}

export default BlogPage;
