import React from "react";

export default function KtmLogo({ className = "h-12" }: { className?: string }) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 620 200"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* K - Styled in black block italic */}
        <polygon points="25,35 70,35 40,165 2,165" fill="#111111" />
        <polygon points="56,92 102,35 142,35 90,105 152,165 105,165 52,112 56,92" fill="#111111" />

        {/* T - Styled in red bold italic */}
        <polygon points="144,35 244,35 236,68 198,68 176,165 137,165 159,68 121,68" fill="#E31E24" />

        {/* M - Styled in orange/gold italic */}
        <path
          d="M234,165 L264,35 L300,35 L285,108 L337,35 L372,35 L342,165 L310,165 L324,96 L283,165 L261,165 L247,165 K"
          fill="#F59E0B"
        />
        <polygon points="234,165 264,35 300,35 285,108 340,35 372,35 342,165 310,165 324,94 283,165 258,165" fill="#F59E0B" />

        {/* Dynamic Underlying Swoosh (Black Curve) */}
        <path
          d="M55,105 C140,165 220,205 350,195 C410,190 480,165 530,125 C450,175 360,185 270,170 C180,155 120,135 75,110 C65,105 58,102 55,105 Z"
          fill="#111111"
        />

        {/* Red swoosh path flying towards plane */}
        <path
          d="M440,140 C490,125 540,95 570,55 C535,88 490,110 442,125 C438,126 436,132 440,140 Z"
          fill="#E31E24"
        />

        {/* Red Airplane Graphic */}
        <g transform="translate(545, -2) rotate(15) scale(0.48)">
          <path
            d="M50 85 L95 80 L130 15 C132 12, 136 13, 136 17 L125 75 L155 70 L165 50 C166 48, 168 48, 169 50 L172 67 L190 65 C194 64, 197 67, 195 70 L180 85 L195 100 C197 103, 194 106, 190 105 L172 103 L169 120 C168 122, 166 122, 165 120 L155 100 L125 95 L136 153 C136 157, 132 158, 130 155 L95 105 L50 100 C45 99, 43 93, 45 90 Z"
            fill="#E31E24"
          />
        </g>
      </svg>
    </div>
  );
}
