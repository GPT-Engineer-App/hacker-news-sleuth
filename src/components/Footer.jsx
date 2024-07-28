import { GitHub } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green-400 p-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 HackerNews Explorer. All rights reserved.</p>
        <a
          href="https://github.com/yourusername/hackernews-explorer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
        >
          <GitHub size={20} />
          <span>View on GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
