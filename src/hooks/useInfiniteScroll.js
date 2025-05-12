import { useEffect, useRef, useState } from 'react';

const useInfiniteScroll = ({ loading, hasMore, onLoadMore, threshold = 100 }) => {
  const [infiniteScrollRef, setInfiniteScrollRef] = useState(null);
  const observerRef = useRef();

  useEffect(() => {
    if (loading || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          onLoadMore();
        }
      },
      {
        root: null,
        rootMargin: `${threshold}px`,
        threshold: 0.1,
      }
    );

    if (infiniteScrollRef) {
      observer.observe(infiniteScrollRef);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [infiniteScrollRef, loading, hasMore, onLoadMore, threshold]);

  return [setInfiniteScrollRef];
};

export default useInfiniteScroll;