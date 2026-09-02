"use client";

import type { ArticleImage } from "@/lib/content/articles";
import type { AppLocale } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

export function ArticleGallery({
  images,
  locale,
}: {
  images: ArticleImage[];
  locale: AppLocale;
}) {
  const t = useTranslations("common");
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: images.length > 1,
    align: "start",
    direction: locale === "ar" ? "rtl" : "ltr",
  });
  const [index, setIndex] = useState(0);
  const canSlide = images.length > 1;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (images.length === 0) return null;

  return (
    <div className="relative mt-8 overflow-hidden rounded-2xl border border-border">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((image) => (
            <div key={image.src} className="min-w-0 shrink-0 basis-full">
              <img
                src={image.src}
                alt={image.alt[locale]}
                className="h-72 w-full object-cover sm:h-[28rem]"
              />
            </div>
          ))}
        </div>
      </div>
      {canSlide ? (
        <>
          <button
            type="button"
            aria-label={t("galleryPrev")}
            onClick={() => emblaApi?.scrollPrev()}
            className="glass absolute start-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-heading"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label={t("galleryNext")}
            onClick={() => emblaApi?.scrollNext()}
            className="glass absolute end-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full text-heading"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={`${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-heading/40"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
