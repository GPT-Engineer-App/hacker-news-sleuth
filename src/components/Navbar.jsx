import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import { navItems } from '../nav-items';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-green-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal size={24} className="text-pink-500" />
          <span className="text-xl font-bold">HackerNews Explorer</span>
        </Link>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-pink-500 transition-colors">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
