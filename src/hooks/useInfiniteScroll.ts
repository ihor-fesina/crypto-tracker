import { useEffect, useState, useCallback } from 'react';

interface UseInfiniteScrollOptions {
    threshold?: number;
    hasNextPage: boolean;
    isLoading: boolean;
}

export const useInfiniteScroll = (
    callback: () => void,
    { threshold = 1000, hasNextPage, isLoading }: UseInfiniteScrollOptions
) => {
    const [isFetching, setIsFetching] = useState(false);

    const handleScroll = useCallback(() => {
        const { innerHeight } = window;
        const { scrollTop, offsetHeight } = document.documentElement;
        
        if (
            innerHeight + scrollTop >= offsetHeight - threshold &&
            hasNextPage &&
            !isLoading &&
            !isFetching
        ) {
            setIsFetching(true);
        }
    }, [threshold, hasNextPage, isLoading, isFetching]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        if (isFetching) {
            callback();
            setIsFetching(false);
        }
    }, [isFetching, callback]);
}; 