import React from "react";

export default function Impressum() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-[#101d33] sm:text-5xl tracking-tight uppercase mb-8 text-left">Impressum</h1>
        
        <div className="space-y-6 text-[#1c2e4a] font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Hauptsitz Deutschland</h2>
            <p>ITW EduLab GmbH</p>
            <p>Herzberg Str. 56-57, 10365 Berlin</p>
            <p>HRB 280592 B (AG Berlin-Charlottenburg)</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Repräsentanz Vietnam</h2>
            <p>Trung tâm hợp tác quốc tế</p>
            <p>Trường Cao đẳng Công nghệ cao Hà Nội</p>
            <p>Phố Nhuệ Giang, Phường Tây Mỗ, Nam Từ Liêm, Hà Nội</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Kontakt & Support</h2>
            <p>+49 (0) 30 555 888 22</p>
            <p>info@itw-edulab.de</p>
            <p>www.itw-edulab.de</p>
          </section>
        </div>
      </div>
    </div>
  );
}
