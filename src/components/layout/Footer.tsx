
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-primary text-white py-12">
      <div className="school-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">LearnScape Nexus</h3>
            <p className="text-sm">
              Empowering students and educators through technology and innovation.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="hover:text-school-highlight transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-school-highlight transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-school-highlight transition-colors">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@learnscape.com" aria-label="Email" className="hover:text-school-highlight transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-school-highlight transition-colors">Home</Link></li>
              <li><Link to="/news" className="hover:text-school-highlight transition-colors">News</Link></li>
              <li><Link to="/blog" className="hover:text-school-highlight transition-colors">Blog</Link></li>
              <li><Link to="/library" className="hover:text-school-highlight transition-colors">Library</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/calendar" className="hover:text-school-highlight transition-colors">Academic Calendar</Link></li>
              <li><Link to="/admissions" className="hover:text-school-highlight transition-colors">Admissions</Link></li>
              <li><Link to="/faculty" className="hover:text-school-highlight transition-colors">Faculty & Staff</Link></li>
              <li><Link to="/campus" className="hover:text-school-highlight transition-colors">Campus Life</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>123 Education Ave</p>
              <p>Learning City, ED 54321</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@learnscape.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} LearnScape Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
