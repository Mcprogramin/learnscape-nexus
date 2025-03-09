
import { Layout } from "@/components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="school-container py-8">
        <h1 className="page-heading">Welcome to LearnScape Nexus</h1>
        <p className="text-lg mb-6">
          Nurturing minds, building futures. Our school is committed to providing an
          exceptional educational experience for all students.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          <div className="bg-white shadow-md rounded-lg p-6 card-hover">
            <h3 className="text-xl font-bold text-school-primary mb-3">Academic Excellence</h3>
            <p>Our rigorous curriculum is designed to challenge and inspire students to reach their full potential.</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 card-hover">
            <h3 className="text-xl font-bold text-school-primary mb-3">Supportive Community</h3>
            <p>We foster a caring environment where every student feels valued, supported, and empowered to succeed.</p>
          </div>
          
          <div className="bg-white shadow-md rounded-lg p-6 card-hover">
            <h3 className="text-xl font-bold text-school-primary mb-3">Innovative Learning</h3>
            <p>Our teaching methods integrate technology and hands-on experiences to make learning engaging and effective.</p>
          </div>
        </div>
        
        <div className="bg-school-muted p-8 rounded-lg mb-12">
          <h2 className="section-heading">Our Vision</h2>
          <p className="text-lg">
            To empower students with knowledge, skills, and values they need to thrive in a rapidly changing world
            and make positive contributions to society.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="section-heading">Upcoming Events</h2>
            <ul className="space-y-4">
              <li className="border-l-4 border-school-primary pl-4 py-2">
                <div className="font-bold">Annual Science Fair</div>
                <div className="text-sm text-gray-600">May 15, 2023 • Main Hall</div>
              </li>
              <li className="border-l-4 border-school-primary pl-4 py-2">
                <div className="font-bold">Parent-Teacher Conference</div>
                <div className="text-sm text-gray-600">May 22-23, 2023 • Classrooms</div>
              </li>
              <li className="border-l-4 border-school-primary pl-4 py-2">
                <div className="font-bold">End of Year Concert</div>
                <div className="text-sm text-gray-600">June 10, 2023 • Auditorium</div>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="section-heading">Announcements</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-bold text-school-primary">Summer Program Registration Open</h3>
                <p className="text-sm">Registration for our summer enrichment programs is now open. Spaces are limited, so sign up early!</p>
              </div>
              <div className="bg-white p-4 rounded-md shadow">
                <h3 className="font-bold text-school-primary">New Library Resources</h3>
                <p className="text-sm">We've added over 500 new titles to our digital library. Explore new books, research papers, and multimedia resources!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
