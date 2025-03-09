
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Calendar, Tag } from "lucide-react";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of Educational Technology",
    excerpt: "Exploring how AI, VR, and other technologies are transforming the classroom experience.",
    author: "Dr. Jane Smith",
    date: "May 20, 2023",
    category: "Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Effective Study Techniques for Final Exams",
    excerpt: "Learn proven methods to improve retention and perform better on your exams.",
    author: "Prof. Michael Johnson",
    date: "May 18, 2023",
    category: "Study Tips",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "The Importance of Arts in Education",
    excerpt: "Why maintaining arts programs is crucial for developing well-rounded students.",
    author: "Sarah Williams",
    date: "May 15, 2023",
    category: "Arts & Culture",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Building Resilience in Students",
    excerpt: "Strategies for helping students develop mental toughness and adaptability.",
    author: "Dr. Robert Chen",
    date: "May 12, 2023",
    category: "Mental Health",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Role of Physical Education in Academic Success",
    excerpt: "Research shows how physical activity contributes to better academic performance.",
    author: "Coach Thomas Reed",
    date: "May 10, 2023",
    category: "Physical Education",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Preparing Students for the Jobs of Tomorrow",
    excerpt: "How schools can adapt curriculum to meet the needs of an evolving job market.",
    author: "Dr. Lisa Garcia",
    date: "May 8, 2023",
    category: "Career Development",
    readTime: "8 min read"
  }
];

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Card key={post.id} className="h-full flex flex-col card-hover">
          <CardHeader>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <span className="flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {post.category}
              </span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <CardTitle>
              <Link to={`/blog/${post.id}`} className="hover:text-school-secondary transition-colors">
                {post.title}
              </Link>
            </CardTitle>
            <CardDescription className="flex items-center text-xs">
              <User className="h-3 w-3 mr-1" />
              {post.author}
              <span className="mx-2">•</span>
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-gray-600">{post.excerpt}</p>
          </CardContent>
          <CardFooter>
            <Link to={`/blog/${post.id}`}>
              <Button variant="link" className="text-school-secondary p-0">
                Read more
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
