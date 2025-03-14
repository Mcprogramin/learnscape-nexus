
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Book, Newspaper, User, LogIn, Home, Library } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="h-5 w-5 mr-1" /> },
    { name: 'News', path: '/news', icon: <Newspaper className="h-5 w-5 mr-1" /> },
    { name: 'Blog', path: '/blogs', icon: <Book className="h-5 w-5 mr-1" /> },
    { name: 'Library', path: '/library', icon: <Library className="h-5 w-5 mr-1" /> },
  ];

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="school-container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="rounded-full bg-school-primary p-2">
              <Book className="h-6 w-6 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-school-primary">LearnScape Nexus</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="flex items-center text-gray-700 hover:text-school-secondary transition-colors"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex space-x-2 ml-4">
              <Link to="/login">
                <Button variant="outline" size="sm" className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Profile
                </Button>
              </Link>
              <Link to="/login">
                <Button size="sm" className="flex items-center bg-school-primary hover:bg-school-secondary">
                  <LogIn className="h-4 w-4 mr-1" />
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="flex items-center py-2 text-gray-700 hover:text-school-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                <span className="ml-1">{link.name}</span>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center">
                  <User className="h-4 w-4 mr-1" />
                  Profile
                </Button>
              </Link>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full flex items-center justify-center bg-school-primary hover:bg-school-secondary">
                  <LogIn className="h-4 w-4 mr-1" />
                  Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
