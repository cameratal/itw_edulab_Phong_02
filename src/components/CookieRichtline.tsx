import React from "react";

export default function CookieRichtline() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-[#101d33] sm:text-5xl tracking-tight uppercase mb-8 text-left">Cookie-Richtlinie</h1>
        
        <div className="space-y-8 text-[#1c2e4a] font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Was sind Cookies?</h2>
            <p>Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und bestimmte Informationen enthalten. Sie dienen dazu, die Nutzung unserer Website benutzerfreundlicher, effektiver und sicherer zu gestalten.</p>
            <p className="mt-2">Cookies richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Welche Arten von Cookies verwenden wir?</h2>
            
            <h3 className="text-lg font-bold text-[#1c2e4a] mt-4">Notwendige Cookies</h3>
            <p>Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den sicheren Zugriff auf bestimmte Bereiche der Website.</p>
            
            <h3 className="text-lg font-bold text-[#1c2e4a] mt-4">Funktionale Cookies</h3>
            <p>Diese Cookies ermöglichen es, erweiterte Funktionen und Personalisierungen bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.</p>
            
            <h3 className="text-lg font-bold text-[#1c2e4a] mt-4">Analyse- und Statistik-Cookies</h3>
            <p>Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und ausgewertet werden. Dadurch können wir die Leistung und Benutzerfreundlichkeit unserer Website verbessern.</p>
            
            <h3 className="text-lg font-bold text-[#1c2e4a] mt-4">Marketing-Cookies</h3>
            <p>Marketing-Cookies werden verwendet, um Besuchern auf Websites zu folgen. Ziel ist es, Anzeigen anzuzeigen, die für den einzelnen Nutzer relevant und ansprechend sind.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Rechtsgrundlage</h2>
            <p>Die Speicherung notwendiger Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p className="mt-2">Alle anderen Cookies werden ausschließlich auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO gespeichert und verarbeitet. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Verwaltung Ihrer Cookie-Einstellungen</h2>
            <p>Sie können Ihre Cookie-Einstellungen jederzeit über das Cookie-Banner oder die Einstellungen Ihres Browsers anpassen.</p>
            <p className="mt-2">Die meisten Browser ermöglichen es Ihnen:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>über das Setzen von Cookies informiert zu werden,</li>
              <li>Cookies nur im Einzelfall zuzulassen,</li>
              <li>Cookies generell auszuschließen,</li>
              <li>bereits gespeicherte Cookies zu löschen.</li>
            </ul>
            <p className="mt-2">Bitte beachten Sie, dass bei der Deaktivierung bestimmter Cookies die Funktionalität unserer Website eingeschränkt sein kann.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Cookies von Drittanbietern</h2>
            <p>Sofern auf unserer Website Dienste von Drittanbietern eingesetzt werden (z. B. Google Analytics, Google Maps, YouTube oder Social-Media-Plugins), können diese Anbieter eigene Cookies setzen. Auf die Datenverarbeitung durch diese Drittanbieter haben wir keinen unmittelbaren Einfluss.</p>
            <p className="mt-2">Weitere Informationen finden Sie in den Datenschutzbestimmungen der jeweiligen Anbieter.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">Änderungen dieser Cookie-Richtlinie</h2>
            <p>Wir behalten uns vor, diese Cookie-Richtlinie anzupassen, um sie an geänderte gesetzliche Anforderungen oder Änderungen unserer Website anzupassen.</p>
            <p className="mt-4 font-bold">Stand: Juni 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}
