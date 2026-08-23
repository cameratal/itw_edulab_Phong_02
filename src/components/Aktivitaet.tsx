import React from "react";

/* Album ngang cho mục Aktivität. Ảnh từ public/Ak (n).png|.jpg */

const BILDER = [
  { src: "/Ak%20(1).png", alt: "ITW EduLab Aktivität am Flughafen" },
  { src: "/Ak%20(1).jpg", alt: "ITW EduLab Besuch im Spinal Treatment Department" },
  { src: "/Ak%20(2).png", alt: "ITW EduLab Aktivität 2" },
  { src: "/Ak%20(2).jpg", alt: "ITW EduLab Aktivität 3" },
  { src: "/Ak%20(3).png", alt: "ITW EduLab Aktivität 4" },
  { src: "/Ak%20(3).jpg", alt: "ITW EduLab Aktivität 5" },
  { src: "/Ak%20(4).png", alt: "ITW EduLab Aktivität 6" },
  { src: "/Ak%20(4).jpg", alt: "ITW EduLab Aktivität 7" },
  { src: "/Ak%20(5).png", alt: "ITW EduLab Aktivität 8" },
  { src: "/Ak%20(5).jpg", alt: "ITW EduLab Aktivität 9" },
  { src: "/Ak%20(6).png", alt: "ITW EduLab Aktivität 10" },
  { src: "/Ak%20(6).jpg", alt: "ITW EduLab Aktivität 11" },
  { src: "/Ak%20(7).png", alt: "ITW EduLab Aktivität 12" },
  { src: "/Ak%20(7).jpg", alt: "ITW EduLab Aktivität 13" },
  { src: "/Ak%20(8).png", alt: "ITW EduLab Aktivität 14" },
  { src: "/Ak%20(8).jpg", alt: "ITW EduLab Aktivität 15" },
  { src: "/Ak%20(9).png", alt: "ITW EduLab Aktivität 16" },
  { src: "/Ak%20(9).jpg", alt: "ITW EduLab Aktivität 17" },
  { src: "/Ak%20(10).png", alt: "ITW EduLab Aktivität 18" },
  { src: "/Ak%20(10).jpg", alt: "ITW EduLab Aktivität 19" },
  { src: "/Ak%20(11).png", alt: "ITW EduLab Aktivität 20" },
  { src: "/Ak%20(11).jpg", alt: "ITW EduLab Aktivität 21" },
  { src: "/Ak%20(12).png", alt: "ITW EduLab Aktivität 22" },
  { src: "/Ak%20(12).jpg", alt: "ITW EduLab Aktivität 23" },
  { src: "/Ak%20(13).jpg", alt: "ITW EduLab Aktivität 24" },
];

export default function Aktivitaet() {
  const reihen = [0, 1] as const;

  return (
    <section
      id="aktivitat"
      className="py-24 bg-white border-b border-neutral-200 scroll-mt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-[#101d33] sm:text-5xl tracking-tight uppercase mb-8 text-center">
          Aktivitäten
        </h2>
        <p className="text-base text-[#1c2e4a] font-light leading-relaxed max-w-3xl mx-auto text-center mb-8">
          Einblicke in unsere Arbeit – weitere Bilder folgen.
        </p>
      </div>

      <div className="aktivitat-marquee" aria-label="Bilderalbum">
        <div className="aktivitat-track">
          {reihen.map((kopie) => (
            <div
              key={kopie}
              className="aktivitat-set"
              aria-hidden={kopie === 1}
            >
              {BILDER.map((bild) => (
                <figure key={`${kopie}-${bild.src}`} className="aktivitat-card">
                  <img
                    src={bild.src}
                    alt={kopie === 0 ? bild.alt : ""}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
