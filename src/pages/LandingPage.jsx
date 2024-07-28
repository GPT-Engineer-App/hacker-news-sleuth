import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Terminal, Code, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-green-400 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-6 text-green-500">
        <span className="text-pink-500">&lt;</span>HackerNews Explorer<span className="text-pink-500">/&gt;</span>
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Dive into the world of tech with our cutting-edge Hacker News reader. Stay updated with the latest in technology, startups, and programming.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard icon={<Terminal />} title="Latest Tech News" description="Get real-time updates on the hottest tech stories" />
        <FeatureCard icon={<Code />} title="Curated Content" description="Explore hand-picked articles from top tech minds" />
        <FeatureCard icon={<Zap />} title="Lightning Fast" description="Blazing fast performance for smooth browsing" />
      </div>
      <Link to="/news">
        <Button className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold text-lg px-8 py-4">
          Start Exploring
        </Button>
      </Link>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg border border-green-500 flex flex-col items-center text-center">
    <div className="text-pink-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-green-400">{description}</p>
  </div>
);

export default LandingPage;
