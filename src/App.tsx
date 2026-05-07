/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Truck, 
  Pickaxe, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ChevronRight, 
  Factory, 
  Wrench,
  Globe,
  CheckCircle2,
  Menu,
  X,
  Target,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = {
  bg: '#0F0F0F',
  card: '#1A1A1A',
  accent: '#F27D26', // Industrielles Orange
  text: '#E4E3E0',
  muted: '#8E9299',
  border: '#2A2A2A',
};

const TRIP_LEADS = [
  {
    group: "GRUPPE 1: Region Linz & Leonding",
    focus: "Maschinenbau & Fahrzeuge",
    companies: [
      {
        name: "Zeko Mobility e.U.",
        address: "Welser Str. 83, 4060 Leonding",
        contact: "+43 664 1601614",
        web: "zekomobility.com",
        maps: "https://www.google.com/maps/search/?api=1&query=Welser+Str.+83,+4060+Leonding",
        desc: "Spezielle Aufbauten und Modifikationen für PKW und Nutzfahrzeuge.",
        strategy: "Vorfertigung von tragenden Metallelementen und Schweißkonsolen anbieten. Schnelligkeit aus Čakovec (<4h) betonen."
      },
      {
        name: "TAT-TECHNOM Antriebstechnik GmbH",
        address: "Technologiering 13-17, 4060 Leonding",
        contact: "+43 7229 64840",
        web: "tat.at",
        maps: "https://www.google.com/maps/search/?api=1&query=Technologiering+13-17,+4060+Leonding",
        desc: "Automatisierung, Antriebstechnik und Verpackungslösungen.",
        strategy: "Präzise Gestelle und Rahmen benötigt. ISO 3834-3 garantiert Qualität für Vibrationsbelastungen."
      },
      {
        name: "WD-Metalltechnik GmbH",
        address: "Roseggerstraße 12a, 4050 Traun",
        contact: "+43 699 172 922 44",
        web: "wd-metalltechnik.at",
        maps: "https://www.google.com/maps/search/?api=1&query=Roseggerstraße+12a,+4050+Traun",
        desc: "Klassische Metallbearbeitung, Drehen und Fräsen.",
        strategy: "Outsourcing-Partner für Serienproduktion von Schweißbaugruppen zur Kapazitätserweiterung."
      }
    ]
  },
  {
    group: "GRUPPE 2: Oberösterreich Route A9",
    focus: "LKW & Landwirtschaft",
    companies: [
      {
        name: "Ernst Riedler Fahrzeugbau",
        address: "Bahnleiten 1, 4664 Oberweis",
        contact: "+43 7612 76040",
        web: "riedler.at",
        maps: "https://www.google.com/maps/search/?api=1&query=Bahnleiten+1,+4664+Oberweis",
        desc: "Stärkste Aufbauten für Forst-LKW und Holztransport.",
        strategy: "Unser Core-Business (LKW-Hilfsrahmen). Bilder von Rahmen für Asphaltmischer und Greifer zeigen."
      },
      {
        name: "Vakutec Gülletechnik GmbH",
        address: "Pernsteinerstraße 14, 4552 Nußbach",
        contact: "+43 7583 8317",
        web: "vakutec.at",
        maps: "https://www.google.com/maps/search/?api=1&query=Pernsteinerstraße+14,+4552+Nußbach",
        desc: "Gülletechnik und Vakuumbehälter.",
        strategy: "Edelstahlbehälter und Rohrleitungen. Bergbau-Erfahrung (Pipelines) ist hier 100% anwendbar."
      }
    ]
  },
  {
    group: "GRUPPE 3: Steiermark / Graz & Hartberg",
    focus: "Schwere Konstruktionen",
    companies: [
      {
        name: "Grabner Stahl- und Fahrzeugbau",
        address: "Am Ökopark 11, 8230 Hartberg",
        contact: "+43 3332 63101",
        web: "grabner-stahlbau.at",
        maps: "https://www.google.com/maps/search/?api=1&query=Am+Ökopark+11,+8230+Hartberg",
        desc: "Große Stahlkonstruktionen für Industriehallen und Spezialfahrzeuge.",
        strategy: "Fertigung kleinerer/mittlerer Schweißbaugruppen für deren Großprojekte übernehmen."
      },
      {
        name: "Krenhof GmbH",
        address: "Krenhofstraße 37, 8570 Köflach",
        contact: "+43 3144 25050",
        web: "krenhof.at",
        maps: "https://www.google.com/maps/search/?api=1&query=Krenhofstraße+37,+8570+Köflach",
        desc: "Präzisionsschmiedeteile für Auto-Industrie und Landwirtschaft.",
        strategy: "Schmiedestücke zu komplexen Teilen verschweißen. Endbearbeitung und Montage anbieten."
      },
      {
        name: "Maschinenfabrik Berger GmbH",
        address: "Wiener Straße 35, 8720 Knittelfeld",
        contact: "+43 3512 82442",
        web: "m-berger.at",
        maps: "https://www.google.com/maps/search/?api=1&query=Wiener+Straße+35,+8720+Knittelfeld",
        desc: "Spezialmaschinen und Komponenten für Bergbau und Industrie.",
        strategy: "Direkte Verbindung zum Bergbau-Know-how. Förderkomponenten und Verschleißteile anbieten."
      }
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-[#F27D26] selection:text-white" style={{ backgroundColor: COLORS.bg, color: COLORS.text }}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#2A2A2A] py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#F27D26] flex items-center justify-center font-bold text-black text-xl">MT</div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter leading-none">MONTAGE TEHNIK</span>
              <span className="text-[10px] tracking-[0.2em] font-mono text-[#F27D26]">METAL EXCELLENCE</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#leistungen" className="hover:text-[#F27D26] transition-colors">Leistungen</a>
            <a href="#qualität" className="hover:text-[#F27D26] transition-colors">Qualität</a>
            <a href="#besuchsplan" className="hover:text-[#F27D26] transition-colors">Besuchsplan</a>
            <a href="#kontakt" className="hover:text-[#F27D26] transition-colors">Kontakt</a>
            <button className="bg-white text-black px-5 py-2 hover:bg-[#F27D26] hover:text-white transition-all transform hover:-translate-y-0.5">
              ANFRAGE SENDEN
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0F0F0F] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-bold uppercase">
              <a href="#leistungen" onClick={() => setIsMenuOpen(false)}>Leistungen</a>
              <a href="#qualität" onClick={() => setIsMenuOpen(false)}>Qualität</a>
              <a href="#besuchsplan" onClick={() => setIsMenuOpen(false)}>Besuchsplan</a>
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>Kontakt</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-transparent z-10" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#2A2A2A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F27D26]/10 border border-[#F27D26]/30 text-[#F27D26] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              <Globe className="w-3 h-3" /> Partner für Österreich & EU
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
              METALL-<br /><span className="text-[#F27D26]">EXZELLENZ</span><br />AUS KROATIEN
            </h1>
            <p className="text-lg md:text-xl text-[#8E9299] max-w-lg mb-10 leading-relaxed">
              Präzisionsfertigung von LKW-Hilfsrahmen, Bergbau-Komponenten und Schweißbaugruppen in Serie. ISO 3834-3 Qualität – nur 3,5 Stunden von Ihnen entfernt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F27D26] text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#D9661D] transition-all group">
                UNSER PORTFOLIO <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-[#2A2A2A] px-8 py-4 font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
                WERK ČAKOVEC BESICHTIGEN
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F] border border-[#2A2A2A] relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                <Factory className="w-64 h-64 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-[1px] w-12 bg-[#F27D26]" />
                  <span className="text-xs font-mono text-[#F27D26] uppercase tracking-widest">Werk Čakovec, Kroatien</span>
                </div>
                <p className="text-sm font-medium">Eigene Fertigungshalle (Zagrebačka 99) für Ihre anspruchsvollsten Projekte.</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white text-black p-6 shadow-2xl">
              <div className="text-4xl font-black leading-none">3.5H</div>
              <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">Logistik-Vorteil</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="qualität" className="bg-[#1A1A1A] border-y border-[#2A2A2A] py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#F27D26]" />
            <span className="font-bold text-sm uppercase tracking-widest">ISO 3834-3</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#F27D26]" />
            <span className="font-bold text-sm uppercase tracking-widest">Österr. Referenzen</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#F27D26]" />
            <span className="font-bold text-sm uppercase tracking-widest">Schweden Export</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#F27D26]" />
            <span className="font-bold text-sm uppercase tracking-widest">Slowenien Support</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">UNSERE KERN-<br /><span className="text-[#F27D26]">KOMPETENZEN</span></h2>
              <p className="text-[#8E9299] text-lg">Wir sind auf hochbelastbare Schweißkonstruktionen spezialisiert, bei denen Qualität und Sicherheit an erster Stelle stehen.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
            <ServiceCard 
              icon={<Truck className="w-8 h-8" />} 
              title="LKW-HILFSRAHMEN" 
              subtitle="Nutzfahrzeuge"
              description="Spezialisierte Rahmen für Kipper, Kräne und Asphaltmischer. Robust für maximale Beanspruchung."
            />
            <ServiceCard 
              icon={<Pickaxe className="w-8 h-8" />} 
              title="BERGBAU-KOMPONENTEN" 
              subtitle="Mining Equipment"
              description="Förderer, Rohrleitungen und Maschinenelemente für schwerste Einsatzbedingungen."
            />
            <ServiceCard 
              icon={<Factory className="w-8 h-8" />} 
              title="SERIENFERTIGUNG" 
              subtitle="Outsourcing Partner"
              description="Wir übernehmen die Fertigung Ihrer Schweißbaugruppen und entlasten Ihre Montagekapazitäten."
            />
          </div>
        </div>
      </section>

      {/* Trip Plan Section */}
      <section id="besuchsplan" className="py-32 bg-[#151515] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 underline decoration-[#F27D26] decoration-4 underline-offset-8">BESUCHSPLAN & POTENZIALE</h2>
            <p className="text-[#8E9299] max-w-xl italic">Katalog potenzieller SME-Partner in Österreich mit Fokus auf Metallbau und Fahrzeugtechnik.</p>
          </div>

          <div className="space-y-12">
            {TRIP_LEADS.map((group, gIdx) => (
              <div key={gIdx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-1 bg-[#F27D26]" />
                  <h3 className="text-2xl font-black uppercase tracking-tight">{group.group} <span className="text-[#8E9299] font-medium text-lg ml-2">[{group.focus}]</span></h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {group.companies.map((company, cIdx) => (
                    <div key={cIdx} className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 hover:border-[#F27D26]/50 transition-all flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4 text-[#F27D26]" /> {company.name}
                        </h4>
                        <div className="text-xs text-[#8E9299] mb-4 space-y-2">
                          <p className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {company.address}</p>
                          <p className="flex items-center gap-2"><Phone className="w-3 h-3" /> {company.contact}</p>
                          <div className="flex gap-2 pt-1">
                            <a 
                              href={`http://${company.web}`} 
                              target="_self" 
                              className="inline-flex items-center gap-1 px-2 py-1 bg-[#2A2A2A] hover:bg-[#F27D26] hover:text-black transition-colors rounded text-[10px] font-bold uppercase tracking-wider"
                            >
                              <Globe className="w-2.5 h-2.5" /> Webseite
                            </a>
                            <a 
                              href={company.maps} 
                              target="_self" 
                              className="inline-flex items-center gap-1 px-2 py-1 bg-[#2A2A2A] hover:bg-[#F27D26] hover:text-black transition-colors rounded text-[10px] font-bold uppercase tracking-wider"
                            >
                              <MapPin className="w-2.5 h-2.5" /> Google Maps
                            </a>
                          </div>
                        </div>
                        <p className="text-sm border-t border-[#2A2A2A] pt-4 mb-4 text-white/90">
                          {company.desc}
                        </p>
                      </div>
                      <div className="bg-[#F27D26]/5 p-4 border border-[#F27D26]/10">
                        <span className="text-[10px] font-black text-[#F27D26] uppercase tracking-widest block mb-2">Strategie:</span>
                        <p className="text-xs italic text-[#8E9299] leading-relaxed">
                          {company.strategy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 border border-[#F27D26]/30 bg-[#F27D26]/5">
            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
              <Briefcase className="text-[#F27D26]" /> GESPRÄCHS-TIPPS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Tip icon={<MapPin />} title="Lokaler Vorteil" text='Sagen Sie nicht "wir sind aus Kroatien", sagen Sie "Wir sind aus Čakovec, nur 3,5h entfernt".' />
              <Tip icon={<ShieldCheck />} title="Referenzen" text="Betonen Sie unsere Arbeit für Österreich und Schweden. ISO-Zertifikat als Qualitätsgarantie." />
              <Tip icon={<Wrench />} title="Eigene Fertigung" text="Hinweis auf unsere 1200m² Halle. Wir haben die Kapazität und Stabilität für Großaufträge." />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 md:p-16 flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">KOOPERATION<br /><span className="text-[#F27D26]">VEREINBAREN</span></h2>
              <p className="text-[#8E9299] mb-12 max-w-md">Wir sind aktuell in Ihrer Region unterwegs. Vereinbaren Sie ein persönliches Gespräch für Produktdetails und Kooperationsmodelle.</p>
              
              <div className="space-y-6">
                <ContactInfo icon={<Phone />} title="DIREKTKONTAKT" text="+385 40 XX XX XX" />
                <ContactInfo icon={<Mail />} title="E-MAIL ANFRAGE" text="office@montagetehnik.com" />
                <ContactInfo icon={<MapPin />} title="STANDORT" text="Zagrebačka 99, 40000 Čakovec, Kroatien" />
              </div>
            </div>

            <div className="lg:w-[450px]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <FormInput label="Name" placeholder="Max Mustermann" />
                <FormInput label="Unternehmen" placeholder="Firma GmbH" />
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-[#8E9299] mb-2">Nachricht</label>
                  <textarea rows={4} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-4 py-4 focus:outline-none focus:border-[#F27D26] transition-colors resize-none" placeholder="Wie können wir kooperieren?"></textarea>
                </div>
                <button className="w-full bg-[#F27D26] text-white py-5 font-black uppercase tracking-widest hover:bg-[#D9661D] transition-all">
                  TERMIN VEREINBAREN
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2A2A2A] flex items-center justify-center font-bold text-sm">MT</div>
            <span className="font-bold uppercase tracking-tighter">MONTAGE TEHNIK</span>
          </div>
          <div className="text-[10px] font-mono text-[#8E9299] uppercase tracking-widest">
            © 2026 Montage Tehnik d.o.o. | Čakovec, Kroatien
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, subtitle, description }: { icon: React.ReactNode, title: string, subtitle: string, description: string }) {
  return (
    <div className="bg-[#151515] p-10 hover:bg-[#1A1A1A] transition-all group flex flex-col justify-between h-[320px]">
      <div>
        <div className="mb-8 text-[#8E9299] group-hover:text-[#F27D26] transition-colors flex justify-between items-start">
          {icon}
          <div className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase opacity-50">{subtitle}</div>
        </div>
        <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{title}</h3>
        <p className="text-[#8E9299] text-sm leading-relaxed group-hover:text-white/80 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}

function Tip({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2 text-[#F27D26] font-bold uppercase text-xs">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-4 h-4' })}
        {title}
      </div>
      <p className="text-xs text-[#8E9299] leading-relaxed">{text}</p>
    </div>
  );
}

function ContactInfo({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-12 h-12 bg-[#2A2A2A] group-hover:bg-[#F27D26] transition-colors flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5 group-hover:text-black transition-colors' })}
      </div>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8E9299]">{title}</div>
        <div className="font-bold text-xl tracking-tight">{text}</div>
      </div>
    </div>
  );
}

function FormInput({ label, placeholder }: { label: string, placeholder: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase font-bold tracking-widest text-[#8E9299] mb-2">{label}</label>
      <input type="text" className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-4 py-4 focus:outline-none focus:border-[#F27D26] transition-colors" placeholder={placeholder} />
    </div>
  );
}
