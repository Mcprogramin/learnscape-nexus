
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for featured news
const featuredNews = [
  {
    id: 1,
    title: "School Wins National Science Competition",
    excerpt: "Our students took first place in the National Science Fair with their innovative renewable energy project.",
    date: "May 15, 2023",
    category: "Achievements"
  },
  {
    id: 2,
    title: "New Computer Lab Opening Next Month",
    excerpt: "State-of-the-art computer lab with 30 new workstations will be available to all students starting next month.",
    date: "May 10, 2023",
    category: "Facilities"
  },
  {
    id: 3,
    title: "Annual Sports Day Scheduled for June",
    excerpt: "Mark your calendars for our annual sports day celebration featuring competitions in various categories.",
    date: "May 5, 2023",
    category: "Events"
  }
];

const FeaturedNews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="school-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-heading">Latest News</h2>
          <Link to="/news">
            <Button variant="outline">View All News</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredNews.map((news) => (
            <Card key={news.id} className="card-hover">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2 flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {news.date}
                </div>
                <CardTitle>{news.title}</CardTitle>
                <CardDescription>
                  <span className="inline-block bg-school-muted text-school-primary text-xs px-2 py-1 rounded-full">
                    {news.category}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{news.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/news/${news.id}`}>
                  <Button variant="link" className="text-school-secondary p-0">
                    Read more
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
