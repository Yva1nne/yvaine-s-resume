import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type HTMLAttributes,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

type CarouselContextValue = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: EmblaCarouselType | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('Carousel components must be used within <Carousel>.');
  }

  return context;
}

interface CarouselProps {
  opts?: EmblaOptionsType;
  setApi?: (api: EmblaCarouselType) => void;
  className?: string;
  children: React.ReactNode;
}

export function Carousel({ opts, setApi, className, children }: CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(opts);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  useEffect(() => {
    if (!api) return;

    setApi?.(api);
    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('reInit', onSelect);
      api.off('select', onSelect);
    };
  }, [api, onSelect, setApi]);

  return (
    <CarouselContext.Provider
      value={{ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}
    >
      <div className={`carousel-root ${className ?? ''}`} role="region" aria-roledescription="carousel">
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const { carouselRef } = useCarousel();

  return (
    <div ref={carouselRef} className="carousel-viewport">
      <div className={`carousel-track ${className ?? ''}`} {...props} />
    </div>
  );
}

export function CarouselItem({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={`carousel-slide ${className ?? ''}`} {...props} />;
}

export function CarouselPrevious() {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      type="button"
      className="carousel-nav prev"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      aria-label="Previous slide"
    >
      <i className="ph-bold ph-caret-left" />
    </button>
  );
}

export function CarouselNext() {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      type="button"
      className="carousel-nav next"
      onClick={scrollNext}
      disabled={!canScrollNext}
      aria-label="Next slide"
    >
      <i className="ph-bold ph-caret-right" />
    </button>
  );
}
