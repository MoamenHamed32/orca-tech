"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  device?: "desktop" | "mobile";
};

type DeviceFilter = "desktop" | "mobile";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const t = useTranslations();
  const hasDesktop = images.some((image) => image.device === "desktop");
  const hasMobile = images.some((image) => image.device === "mobile");
  const showToggle = hasDesktop && hasMobile;

  const [device, setDevice] = useState<DeviceFilter>("desktop");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const visible = useMemo(
    () => (showToggle ? images.filter((image) => image.device === device) : images),
    [images, showToggle, device],
  );

  const canSlide = visible.length > 1;
  const current = visible[index];
  const compact = showToggle && device === "mobile";

  const close = useCallback(() => setOpen(false), []);
  const show = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);
  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? visible.length - 1 : i - 1));
  }, [visible.length]);
  const next = useCallback(() => {
    setIndex((i) => (i === visible.length - 1 ? 0 : i + 1));
  }, [visible.length]);

  useEffect(() => {
    setIndex(0);
    setOpen(false);
  }, [device, showToggle]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <>
      {showToggle ? (
        <div
          className="mt-6 flex flex-wrap items-center gap-2"
          role="group"
          aria-label={t("projects.gallery")}
        >
          {(["desktop", "mobile"] as const).map((id) => {
            const active = device === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setDevice(id)}
                className={`inline-flex h-9 items-center justify-center rounded-full border px-4 text-sm leading-none transition-colors ${
                  active
                    ? "border-accent bg-accent text-heading"
                    : "border-border bg-transparent text-muted hover:border-accent hover:text-heading"
                }`}
              >
                {id === "desktop"
                  ? t("projects.galleryDesktop")
                  : t("projects.galleryMobile")}
              </button>
            );
          })}
        </div>
      ) : null}

      <div
        className={`mt-8 grid gap-4 ${
          compact ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2"
        }`}
      >
        {visible.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => show(i)}
            className={`group relative overflow-hidden rounded-2xl border border-border ${
              !compact && i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full object-cover object-top transition duration-500 group-hover:scale-[1.02] ${
                compact
                  ? "h-64 sm:h-80"
                  : i === 0
                    ? "h-80 sm:h-[28rem]"
                    : "h-56 sm:h-72"
              }`}
            />
            <span className="pointer-events-none absolute inset-0 bg-background/0 transition group-hover:bg-background/25" />
            <span className="pointer-events-none absolute bottom-3 end-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-heading opacity-0 transition group-hover:opacity-100">
              {t("common.galleryOpen")}
            </span>
          </button>
        ))}
      </div>

      {open && current ? (
        <div
          className="fixed inset-0 z-[90] flex flex-col bg-background/95"
          role="dialog"
          aria-modal="true"
          aria-label={t("common.galleryOpen")}
        >
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <p className="text-sm text-muted">
              {t("common.galleryOf", { current: index + 1, total: visible.length })}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label={t("common.galleryClose")}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-heading hover:border-accent"
            >
              <X size={18} />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4">
            {canSlide ? (
              <button
                type="button"
                onClick={prev}
                aria-label={t("common.galleryPrev")}
                className="glass absolute start-4 z-10 grid h-11 w-11 place-items-center rounded-full"
              >
                <ChevronLeft size={20} />
              </button>
            ) : null}
            <img
              src={current.src}
              alt={current.alt}
              className="max-h-full max-w-full object-contain"
            />
            {canSlide ? (
              <button
                type="button"
                onClick={next}
                aria-label={t("common.galleryNext")}
                className="glass absolute end-4 z-10 grid h-11 w-11 place-items-center rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            ) : null}
          </div>
          {canSlide ? (
            <div className="flex justify-center gap-2 overflow-x-auto px-5 pb-5">
              {visible.map((image, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-lg border ${
                    i === index ? "border-accent" : "border-border opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={image.src} alt="" className="size-full object-cover object-top" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
