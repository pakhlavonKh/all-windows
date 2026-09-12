import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectGalleryModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectGalleryModal({ project, onClose }: ProjectGalleryModalProps) {
  const [photoIndex, setPhotoIndex] = useState(0);

  // Reset photo index when project changes
  useEffect(() => {
    setPhotoIndex(0);
  }, [project]);

  // Lock body scroll and handle keyboard navigation
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setPhotoIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
      } else if (e.key === 'ArrowRight') {
        setPhotoIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || project.isTextOnly || !project.images || project.images.length === 0) return null;

  const total = project.images.length;
  const currentImage = project.images[photoIndex] || project.image;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPhotoIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setPhotoIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-6 sm:py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col pr-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-[.25em] text-[#d4b16a]">
                {project.type} · {project.city}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white/80">
                <Images size={11} className="text-[#d4b16a]" /> {photoIndex + 1} / {total}
              </span>
            </div>
            <h2 className="mt-0.5 font-display text-lg font-bold text-white sm:text-2xl">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#c6a15b] hover:bg-white/10 hover:text-white"
            aria-label="Закрыть"
          >
            <X size={20} />
          </button>
        </div>

        {/* Center image area with navigation */}
        <div
          className="relative flex flex-1 items-center justify-center overflow-hidden p-2 sm:p-6 cursor-pointer"
          onClick={onClose}
        >
          {/* Main photo */}
          <motion.img
            key={`${project.slug}-${photoIndex}`}
            src={currentImage}
            alt={`${project.title} - фото ${photoIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-2xl select-none cursor-default"
          />

          {/* Prev button */}
          {total > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 flex size-11 sm:size-13 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[#c6a15b] hover:bg-[#c6a15b] hover:text-black"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next button */}
          {total > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 flex size-11 sm:size-13 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition hover:border-[#c6a15b] hover:bg-[#c6a15b] hover:text-black"
              aria-label="Следующее фото"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Bottom bar: Thumbnails */}
        {total > 1 && (
          <div
            className="border-t border-white/10 bg-[#0d0d0d] px-4 py-3 sm:px-6 sm:py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex max-w-5xl items-center justify-center gap-2 overflow-x-auto pb-1">
              {project.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setPhotoIndex(idx)}
                  className={`relative h-12 w-16 sm:h-14 sm:w-20 shrink-0 overflow-hidden rounded-md border-2 transition ${
                    photoIndex === idx
                      ? 'border-[#c6a15b] opacity-100 scale-105'
                      : 'border-transparent opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Миниатюра ${idx + 1}`}
                    className="size-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
