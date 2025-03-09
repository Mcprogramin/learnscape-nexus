
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Calendar, User, Award, Clock, Library } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    title: "Academic Calendar",
    description: "View important dates and deadlines",
    icon: <Calendar className="h-10 w-10 text-school-primary" />,
    link: "/calendar"
  },
  {
    title: "Student Portal",
    description: "Access your courses and grades",
    icon: <User className="h-10 w-10 text-school-primary" />,
    link: "/student-portal"
  },
  {
    title: "Library Resources",
    description: "Browse our digital collection",
    icon: <Library className="h-10 w-10 text-school-primary" />,
    link: "/library"
  },
  {
    title: "Course Catalog",
    description: "Explore available courses",
    icon: <Book className="h-10 w-10 text-school-primary" />,
    link: "/courses"
  },
  {
    title: "Upcoming Events",
    description: "Don't miss important events",
    icon: <Clock className="h-10 w-10 text-school-primary" />,
    link: "/events"
  },
  {
    title: "Student Achievements",
    description: "Celebrating student success",
    icon: <Award className="h-10 w-10 text-school-primary" />,
    link: "/achievements"
  }
];

const QuickLinks = () => {
  return (
    <section className="py-16">
      <div className="school-container">
        <h2 className="section-heading text-center mb-12">Quick Links</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link, index) => (
            <Link to={link.link} key={index}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {link.icon}
                  <div>
                    <CardTitle className="text-xl">{link.title}</CardTitle>
                    <CardDescription>{link.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-right text-school-secondary text-sm">
                    Learn more →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
