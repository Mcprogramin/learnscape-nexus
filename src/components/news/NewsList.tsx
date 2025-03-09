
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Mock data for news articles
const newsArticles = [
  {
    id: 1,
    title: "School Wins National Science Competition",
    excerpt: "Our students took first place in the National Science Fair with their innovative renewable energy project. The team of five students from the Advanced Science Club spent six months designing and perfecting their solar-powered water purification system.",
    date: "May 15, 2023",
    category: "Achievements",
    featured: true,
    image: ""
  },
  {
    id: 2,
    title: "New Computer Lab Opening Next Month",
    excerpt: "State-of-the-art computer lab with 30 new workstations will be available to all students starting next month. The lab will feature high-performance computers with the latest software for coding, design, and multimedia projects.",
    date: "May 10, 2023",
    category: "Facilities",
    featured: true,
    image: ""
  },
  {
    id: 3,
    title: "Annual Sports Day Scheduled for June",
    excerpt: "Mark your calendars for our annual sports day celebration featuring competitions in various categories. Events will include track and field, team sports, and special exhibitions.",
    date: "May 5, 2023",
    category: "Events",
    featured: false,
    image: ""
  },
  {
    id: 4,
    title: "Parent-Teacher Conference Dates Announced",
    excerpt: "The upcoming parent-teacher conferences will be held on May 25-26. This is an important opportunity to discuss student progress and set goals for the remainder of the academic year.",
    date: "May 3, 2023",
    category: "Announcements",
    featured: false,
    image: ""
  },
  {
    id: 5,
    title: "School Choir Performs at Regional Festival",
    excerpt: "Our talented choir students represented the school beautifully at last weekend's Regional Choral Festival, receiving high praise from the judges and audience alike.",
    date: "April 30, 2023",
    category: "Arts",
    featured: false,
    image: ""
  },
  {
    id: 6,
    title: "Summer School Registration Now Open",
    excerpt: "Registration for summer enrichment programs and credit recovery courses is now open. Classes will run from June 15 to July 30.",
    date: "April 28, 2023",
    category: "Academics",
    featured: false,
    image: ""
  },
  {
    id: 7,
    title: "New Scholarship Opportunities Available",
    excerpt: "Several new scholarship opportunities are now available for graduating seniors. Applications are due by June 1.",
    date: "April 25, 2023",
    category: "Scholarships",
    featured: false,
    image: ""
  },
  {
    id: 8,
    title: "Student Council Election Results",
    excerpt: "Congratulations to the newly elected student council members who will serve for the 2023-2024 academic year.",
    date: "April 22, 2023",
    category: "Student Life",
    featured: false,
    image: ""
  }
];

const getCategoryColor = (category: string) => {
  const categories: Record<string, string> = {
    "Achievements": "bg-green-100 text-green-800",
    "Facilities": "bg-blue-100 text-blue-800",
    "Events": "bg-purple-100 text-purple-800",
    "Announcements": "bg-yellow-100 text-yellow-800",
    "Arts": "bg-pink-100 text-pink-800",
    "Academics": "bg-indigo-100 text-indigo-800",
    "Scholarships": "bg-red-100 text-red-800",
    "Student Life": "bg-orange-100 text-orange-800"
  };
  
  return categories[category] || "bg-gray-100 text-gray-800";
};

const NewsList = () => {
  const featuredNews = newsArticles.filter(article => article.featured);
  const regularNews = newsArticles.filter(article => !article.featured);

  return (
    <div className="space-y-10">
      {/* Featured News */}
      {featuredNews.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Featured News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredNews.map((article) => (
              <Card key={article.id} className="overflow-hidden card-hover">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {article.image ? (
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-gray-500">Featured Image</span>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    <div className="text-sm text-muted-foreground flex items-center">
                      <CalendarDays className="h-4 w-4 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/news/${article.id}`}>
                    <Button className="bg-school-primary hover:bg-school-secondary">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular News */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Recent News</h2>
        <div className="grid grid-cols-1 gap-4">
          {regularNews.map((article) => (
            <Card key={article.id} className="card-hover">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{article.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/news/${article.id}`}>
                  <Button variant="link" className="text-school-secondary p-0">
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
