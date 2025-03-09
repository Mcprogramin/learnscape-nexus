
import { Layout } from "@/components/layout/Layout";
import { ResourceList } from "@/components/library/ResourceList";
import { UploadResource } from "@/components/library/UploadResource";

const Library = () => {
  return (
    <Layout>
      <div className="school-container py-8">
        <h1 className="page-heading">School Library</h1>
        <p className="text-lg mb-8">
          Access study materials, resources, and publications to enhance your learning journey.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ResourceList />
          </div>
          <div className="lg:col-span-1">
            <UploadResource />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Library;
