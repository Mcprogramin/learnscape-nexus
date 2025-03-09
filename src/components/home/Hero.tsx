
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-school-primary to-school-secondary py-20 text-white">
      <div className="school-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to LearnScape Nexus
            </h1>
            <p className="text-xl mb-6">
              Empowering minds through innovative education and technology
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions">
                <Button size="lg" className="bg-white text-school-primary hover:bg-gray-100">
                  Apply Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-1 rounded-lg shadow-lg transform rotate-3">
              <div className="bg-gray-200 w-full h-64 md:h-80 rounded flex items-center justify-center">
                <span className="text-gray-500 text-center p-4">
                  Campus Image Placeholder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
