
import { useParams, Link } from "react-router-dom";
import { CalendarDays, ChevronLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Mock data for a news article
const newsArticle = {
  id: 1,
  title: "School Wins National Science Competition",
  content: `
    <p class="mb-4">We are proud to announce that our students have taken first place in the prestigious National Science Fair with their innovative renewable energy project!</p>

    <p class="mb-4">The team of five students from the Advanced Science Club spent six months designing and perfecting their solar-powered water purification system, which impressed judges with its efficiency and potential real-world applications.</p>

    <h2 class="text-2xl font-bold mt-6 mb-4">Project Details</h2>
    
    <p class="mb-4">The winning project, titled "SolarPure," combines solar energy collection with advanced filtration methods to create a portable, sustainable water purification system that can be deployed in areas with limited access to clean water.</p>
    
    <p class="mb-4">Key features of the system include:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li>Lightweight, foldable solar panels</li>
      <li>Multi-stage filtration system</li>
      <li>Smart power management for optimal efficiency</li>
      <li>Water quality monitoring sensors</li>
      <li>Mobile app for remote monitoring and control</li>
    </ul>

    <h2 class="text-2xl font-bold mt-6 mb-4">Recognition and Prizes</h2>
    
    <p class="mb-4">In addition to the first-place trophy, the team received a $10,000 grant to further develop their project, as well as internship opportunities with leading renewable energy companies.</p>
    
    <p class="mb-4">The students will also have the opportunity to present their work at the International Youth Science Summit in Stockholm this summer.</p>

    <h2 class="text-2xl font-bold mt-6 mb-4">Team Members</h2>
    
    <p class="mb-4">Congratulations to our talented student team:</p>
    
    <ul class="list-disc pl-6 mb-4">
      <li>Emma Chen (Team Leader, Grade 12)</li>
      <li>Marcus Johnson (Grade 11)</li>
      <li>Sophia Rodriguez (Grade 12)</li>
      <li>Tyler Washington (Grade 11)</li>
      <li>Aisha Patel (Grade 10)</li>
    </ul>
    
    <p class="mb-4">Special thanks to Dr. Robert Green, Advanced Science Club advisor, for his guidance and support throughout the project.</p>

    <h2 class="text-2xl font-bold mt-6 mb-4">Community Impact</h2>
    
    <p class="mb-4">The team plans to work with local community organizations to test and implement their system in areas that could benefit from improved access to clean water.</p>
    
    <p class="mb-4">This achievement highlights our school's commitment to STEM education and our students' dedication to developing solutions for real-world problems.</p>
  `,
  date: "May 15, 2023",
  category: "Achievements",
  image: ""
};

// More mock data for related news
const relatedNews = [
  {
    id: 5,
    title: "School Choir Performs at Regional Festival",
    date: "April 30, 2023",
    category: "Arts"
  },
  {
    id: 8,
    title: "Student Council Election Results",
    date: "April 22, 2023",
    category: "Student Life"
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

const NewsDetail = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch the article based on the ID
  // For this example, we'll just use our mock data

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link to="/news">
          <Button variant="ghost" className="pl-0">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to News
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <Badge className={getCategoryColor(newsArticle.category)}>
              {newsArticle.category}
            </Badge>
            <Button variant="outline" size="sm" className="flex items-center">
              <Share2 className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{newsArticle.title}</h1>
          
          <div className="flex items-center text-muted-foreground mb-8">
            <CalendarDays className="h-4 w-4 mr-1" />
            Published on {newsArticle.date}
          </div>
        </div>

        {newsArticle.image && (
          <div className="h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
            <img src={newsArticle.image} alt={newsArticle.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsArticle.content }} />

        <Separator className="my-8" />

        <div>
          <h3 className="text-xl font-bold mb-4">Related News</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedNews.map((article) => (
              <Card key={article.id}>
                <CardContent className="p-4">
                  <div className="flex flex-col">
                    <Badge className={`${getCategoryColor(article.category)} self-start mb-2`}>
                      {article.category}
                    </Badge>
                    <Link to={`/news/${article.id}`} className="font-semibold hover:text-school-secondary">
                      {article.title}
                    </Link>
                    <span className="text-sm text-muted-foreground mt-1">
                      {article.date}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
