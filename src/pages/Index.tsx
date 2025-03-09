
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedNews from "@/components/home/FeaturedNews";
import QuickLinks from "@/components/home/QuickLinks";
import SchoolStats from "@/components/home/SchoolStats";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-12 pb-12">
        <Hero />
        <div className="school-container">
          <FeaturedNews />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            <div className="lg:col-span-2">
              <SchoolStats />
            </div>
            <div className="lg:col-span-1">
              <QuickLinks />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
