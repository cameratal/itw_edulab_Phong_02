import React from "react";

export default function Datenschutz() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-black sm:text-5xl tracking-tight uppercase mb-8 text-left">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-neutral-600 font-light leading-relaxed">
          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">1. Datenschutz auf einen Blick</h2>
            <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            <p className="mt-2">Beim Besuch unserer Website werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">2. Verantwortliche Stelle</h2>
            <p>ITW EduLab</p>
            <p>Website: www.itw-edulab.de</p>
            <p>E-Mail: info@itw-edulab.de</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Beim Besuch unserer Website werden automatisch Informationen durch den Hosting-Anbieter erfasst. Dazu gehören insbesondere:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>
            <p className="mt-2">Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines sicheren und stabilen Betriebs der Website.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">4. Kontaktaufnahme</h2>
            <p>Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zur Bearbeitung Ihrer Anfrage gespeichert.</p>
            <p className="mt-2">Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO oder auf Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">5. Cookies</h2>
            <p>Unsere Website verwendet Cookies. Cookies richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher und sicherer zu machen.</p>
            <p className="mt-2">Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben oder generell ausschließen.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">6. Hosting</h2>
            <p>Die Website wird bei einem externen Dienstleister gehostet. Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosting-Anbieters gespeichert.</p>
            <p className="mt-2">Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">7. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Auskunft über Ihre gespeicherten Daten</li>
              <li>Berichtigung unrichtiger Daten</li>
              <li>Löschung Ihrer Daten</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen die Verarbeitung</li>
              <li>Beschwerde bei einer zuständigen Aufsichtsbehörde</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">8. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung.</p>
          </section>

          <section>
            <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">9. Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen.</p>
            <p className="mt-4 font-bold">Stand: Juni 2026</p>
          </section>
        </div>
      </div>
    </div>
  );
}
