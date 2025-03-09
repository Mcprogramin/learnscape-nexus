
import Layout from "@/components/layout/Layout";
import NewsList from "@/components/news/NewsList";

const News = () => {
  return (
    <Layout>
      <div className="school-container py-8">
        <h1 className="page-heading">School News</h1>
        <p className="text-lg mb-8">
          Stay up-to-date with the latest news, events, and announcements from our school.
        </p>
        <NewsList />
      </div>
    </Layout>
  );
};

export default News;
