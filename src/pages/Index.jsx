import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import HackerNewsList from '../components/HackerNewsList';

const fetchTopStories = async () => {
  const response = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=100');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [appliedSearchTerm, setAppliedSearchTerm] = useState('');
  const { data, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories,
  });

  const filteredStories = data?.hits?.filter(story =>
    story.title.toLowerCase().includes(appliedSearchTerm.toLowerCase())
  ) || [];

  const handleSearch = () => {
    setAppliedSearchTerm(searchTerm);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-400">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-green-500 border-b-2 border-green-500 pb-2">
          <span className="text-pink-500">&lt;</span>Hacker News Top 100<span className="text-pink-500">/&gt;</span>
        </h1>
        <div className="flex space-x-2 mb-6">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Hack the search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-green-500 text-green-400 placeholder-green-600"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={20} />
          </div>
          <Button 
            onClick={handleSearch}
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold"
          >
            Execute
          </Button>
        </div>
        {error && <p className="text-pink-500">Error: {error.message}</p>}
        <HackerNewsList stories={filteredStories} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Index;
