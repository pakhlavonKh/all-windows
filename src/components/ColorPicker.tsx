import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Palette, X } from 'lucide-react';
import { windowColors, type WindowColor } from '@/data/colors';

interface ColorPickerProps {
  selectedColorId?: string;
  onSelectColor: (color: WindowColor) => void;
  maxVisible?: number;
  showTitle?: boolean;
  variant?: 'dark' | 'light';
}

export function ColorPicker({
  selectedColorId = windowColors[0].id,
  onSelectColor,
  maxVisible = 6,
  showTitle = true,
  variant = 'dark',
}: ColorPickerProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const selected = windowColors.find((c) => c.id === selectedColorId) || windowColors[0];
  const visibleColors = windowColors.slice(0, maxVisible);
  const remainingCount = windowColors.length - maxVisible;

  const isLight = variant === 'light';

  return (
    <div className="space-y-2.5">
      {showTitle && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette size={14} className={isLight ? 'text-[#816a3f]' : 'text-[#d4b16a]'} />
            <span className={`text-xs font-semibold ${isLight ? 'text-black/70' : 'text-white/80'}`}>
              Цвет профиля:
            </span>
            <span className={`text-xs font-bold ${isLight ? 'text-[#151515]' : 'text-[#d4b16a]'}`}>
              {selected.name}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className={`text-[11px] underline underline-offset-2 transition cursor-pointer ${
              isLight ? 'text-black/60 hover:text-black font-medium' : 'text-white/50 hover:text-[#d4b16a]'
            }`}
          >
            Все 16 цветов
          </button>
        </div>
      )}

      {/* Row of circles */}
      <div className="flex items-center gap-2 flex-wrap">
        {visibleColors.map((color) => {
          const isSelected = color.id === selected.id;
          return (
            <button
              type="button"
              key={color.id}
              onClick={() => onSelectColor(color)}
              title={color.name}
              className={`group relative size-8 sm:size-9 rounded-full overflow-hidden transition-all duration-200 cursor-pointer ${
                isSelected
                  ? isLight
                    ? 'ring-2 ring-black ring-offset-2 ring-offset-[#d9c8a3] scale-110 shadow-md'
                    : 'ring-2 ring-[#c6a15b] ring-offset-2 ring-offset-[#151515] scale-110 shadow-lg shadow-[#c6a15b]/20'
                  : isLight
                    ? 'ring-1 ring-black/20 hover:ring-black/70 hover:scale-105 opacity-90 hover:opacity-100'
                    : 'ring-1 ring-white/20 hover:ring-[#c6a15b]/70 hover:scale-105 opacity-85 hover:opacity-100'
              }`}
            >
              <img
                src={color.image}
                alt={color.name}
                className="size-full object-cover"
              />
              {isSelected && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Check size={14} className="text-white drop-shadow-md stroke-[3]" />
                </span>
              )}
            </button>
          );
        })}

        {/* Plus circle button */}
        {remainingCount > 0 && (
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            title={`Посмотреть все ${windowColors.length} цветов`}
            className={`group flex size-8 sm:size-9 items-center justify-center rounded-full border border-dashed transition-all hover:scale-105 cursor-pointer ${
              isLight
                ? 'border-black/40 bg-black/10 text-black hover:bg-black hover:text-white'
                : 'border-[#c6a15b]/60 bg-[#c6a15b]/10 text-[#d4b16a] hover:bg-[#c6a15b] hover:text-black'
            }`}
          >
            <span className="text-xs font-extrabold">+{remainingCount}</span>
          </button>
        )}
      </div>

      {/* Modal with all 16 colors */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md overflow-y-auto"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative my-auto w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#141414] p-5 sm:p-7 shadow-2xl custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[.22em] text-[#d4b16a]">Палитра ламинации и покраски</p>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">
                    Цветовые решения (16 вариантов)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Grid of colors */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {windowColors.map((color) => {
                  const isSelected = color.id === selected.id;
                  return (
                    <button
                      type="button"
                      key={color.id}
                      onClick={() => {
                        onSelectColor(color);
                        setModalOpen(false);
                      }}
                      className={`group relative flex flex-col items-center p-3 rounded-xl border transition-all text-center ${
                        isSelected
                          ? 'border-[#c6a15b] bg-[#c6a15b]/10 shadow-lg shadow-[#c6a15b]/10'
                          : 'border-white/10 bg-[#1c1c1c] hover:border-[#c6a15b]/50 hover:bg-[#222]'
                      }`}
                    >
                      <div className="relative size-14 sm:size-16 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-[#c6a15b] transition shadow-md">
                        <img
                          src={color.image}
                          alt={color.name}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <Check size={18} className="text-[#d4b16a] stroke-[3]" />
                          </div>
                        )}
                      </div>

                      <span className="mt-2.5 text-xs font-medium text-white/90 group-hover:text-white line-clamp-2">
                        {color.name}
                      </span>
                      <span className="mt-0.5 text-[10px] text-white/40">
                        {color.nameUz}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom footer button */}
              <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="rounded-full bg-[#c6a15b] px-6 py-2 text-xs font-bold text-black hover:bg-[#d4b16a] transition"
                >
                  Готово
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
