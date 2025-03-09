
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Trophy, School } from "lucide-react";

const StatsCard = ({ icon, count, label }: { icon: React.ReactNode; count: string; label: string }) => (
  <Card className="text-center">
    <CardContent className="pt-6">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-school-primary mb-2">{count}</h3>
      <p className="text-gray-600">{label}</p>
    </CardContent>
  </Card>
);

const SchoolStats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="school-container">
        <h2 className="section-heading text-center mb-12">School at a Glance</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            icon={<Users className="h-12 w-12 text-school-secondary" />} 
            count="1,200+"
            label="Students"
          />
          <StatsCard 
            icon={<School className="h-12 w-12 text-school-secondary" />} 
            count="80+"
            label="Faculty Members"
          />
          <StatsCard 
            icon={<BookOpen className="h-12 w-12 text-school-secondary" />} 
            count="40+"
            label="Programs Offered"
          />
          <StatsCard 
            icon={<Trophy className="h-12 w-12 text-school-secondary" />} 
            count="50+"
            label="Awards Won"
          />
        </div>
      </div>
    </section>
  );
};

export default SchoolStats;
