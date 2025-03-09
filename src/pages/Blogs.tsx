
import { Layout } from "@/components/layout/Layout";
import { BlogList } from "@/components/blog/BlogList";

const Blogs = () => {
  return (
    <Layout>
      <div className="school-container py-8">
        <h1 className="page-heading">School Blog</h1>
        <p className="text-lg mb-8">
          Discover insights, updates, and stories from our school community.
        </p>
        <BlogList />
      </div>
    </Layout>
  );
};

export default Blogs;
