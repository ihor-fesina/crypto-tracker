import React from 'react';
import type { CryptoNewsArticle } from '../../../types';

const demoImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNyeXB0byBOZXdzPC90ZXh0Pgo8L3N2Zz4K';

interface NewsCardProps {
    news: CryptoNewsArticle;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
    const imageUrl = news.media?.[0] || demoImage;
    const authorName = news.authors?.[0]?.name || 'Unknown Author';
    
    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString();
        } catch {
            return '';
        }
    };

    const getSentimentColor = (label: string) => {
        switch (label) {
            case 'positive': return 'bg-green-100 text-green-800';
            case 'negative': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        e.currentTarget.src = demoImage;
    };

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <a 
                href={news.link} 
                target="_blank" 
                rel="noreferrer"
                className="block h-full"
            >
                <div className="relative h-48 overflow-hidden">
                    <img 
                        src={imageUrl} 
                        alt={news.title}
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg line-clamp-2">
                        {news.title}
                    </h3>
                </div>
                
                <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {news.summary.length > 100 
                            ? `${news.summary.substring(0, 100)}...` 
                            : news.summary
                        }
                    </p>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                    {authorName.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <span className="text-sm text-gray-500 font-medium truncate">
                                {authorName}
                            </span>
                        </div>
                        
                        <div className="flex flex-col items-end">
                            <span className="text-xs text-gray-400">
                                {formatDate(news.published)}
                            </span>
                            {news.sentiment && (
                                <span className={`text-xs px-2 py-1 rounded mt-1 ${getSentimentColor(news.sentiment.label)}`}>
                                    {news.sentiment.label}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default NewsCard; 