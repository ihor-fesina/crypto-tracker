import React, { useState, useCallback, useEffect } from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { LoaderOne } from '../components/ui/loader';
import NewsCard from '../components/pages/News/NewsCard';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import { useIsMobile } from '../hooks/useIsMobile';
import type { CryptoNewsArticle } from '../types';

const News: React.FC = () => {
    const [allArticles, setAllArticles] = useState<CryptoNewsArticle[]>([]);
    const [offset, setOffset] = useState(0);
    const [hasNextPage, setHasNextPage] = useState(true);
    
    const isMobile = useIsMobile();
    const articlesPerPage = isMobile ? 6 : 12;
    const threshold = isMobile ? 400 : 1000;
    
    const { data: cryptoNews, isFetching, error } = useGetCryptoNewsQuery({
        offset,
        limit: articlesPerPage
    });

    const loadMore = useCallback(() => {
        if (!isFetching && hasNextPage) {
            setOffset(prev => prev + articlesPerPage);
        }
    }, [isFetching, hasNextPage, articlesPerPage]);

    useInfiniteScroll(loadMore, {
        hasNextPage,
        isLoading: isFetching,
        threshold
    });

    useEffect(() => {
        if (cryptoNews && Array.isArray(cryptoNews)) {
            if (offset === 0) {
                setAllArticles(cryptoNews);
            } else {
                setAllArticles(prev => [...prev, ...cryptoNews]);
            }
            
            if (cryptoNews.length < articlesPerPage) {
                setHasNextPage(false);
            }
        }
    }, [cryptoNews, offset, articlesPerPage]);

    if (isFetching && allArticles.length === 0) {
        return (
            <div className="flex items-center justify-center mt-40">
                <LoaderOne />
            </div>
        );
    }

    if (error && allArticles.length === 0) {
        return (
            <div className="text-center text-gray-400 mt-40">
                <p>Error loading news</p>
                <p className="text-xs mt-2">Please try again later</p>
            </div>
        );
    }

    if (allArticles.length === 0 && !isFetching) {
        return (
            <div className="text-center text-gray-400 mt-40">
                <p>No news available</p>
                <p className="text-xs mt-2">Please check back later</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 gap-6">
                <div className="text-white mb-4">
                    Showing {allArticles.length} news articles
                    {hasNextPage && !isFetching && (
                        <span className="text-sm text-gray-400 ml-2">
                            (Scroll down for more)
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allArticles.map((news, index) => (
                        <NewsCard key={`${news.link}-${index}`} news={news} />
                    ))}
                </div>

                {isFetching && allArticles.length > 0 && (
                    <div className="flex items-center justify-center py-8">
                        <LoaderOne />
                        <span className="ml-3 text-white">Loading more articles...</span>
                    </div>
                )}

                {!hasNextPage && allArticles.length > 0 && (
                    <div className="text-center text-gray-400 py-8">
                        <p>You've reached the end of the articles</p>
                        <p className="text-xs mt-1">All {allArticles.length} articles loaded</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News; 