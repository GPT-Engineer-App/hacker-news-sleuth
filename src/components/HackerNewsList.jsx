import { ExternalLink } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const HackerNewsList = ({ stories, isLoading }) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 bg-gray-800" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] bg-gray-800" />
              <Skeleton className="h-4 w-[200px] bg-gray-800" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ul className="space-y-4">
      {stories.map((story) => (
        <li key={story.objectID} className="bg-gray-800 shadow-lg rounded-lg p-4 border border-green-500">
          <h2 className="text-xl font-semibold mb-2 text-green-400">{story.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-sm text-pink-400">
              {story.points} upvotes
            </span>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-500 hover:text-green-400"
            >
              Hack it
              <ExternalLink className="ml-1" size={16} />
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HackerNewsList;
