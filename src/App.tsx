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
  Briefcase,
  MessageSquare,
  BadgeCheck,
  Zap,
  Box,
  Languages,
  Euro,
  Award,
  Handshake,
  Camera
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/385921987483?text=Sehr%20geehrtes%20Montage%20Tehnik%20Team%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Zusammenarbeit.";

const SALES_ARGUMENTS = [
  { title: "Geografische Nähe", desc: "Nur 3,5 Stunden von Linz/Graz entfernt (Čakovec). Schneller als viele inländische Partner.", icon: <MapPin className="w-6 h-6 text-[#F27D26]" /> },
  { title: "ISO 3834-3 Zertifizierung", desc: "Höchste internationale Schweißstandards für sicherheitskritische Bauteile.", icon: <ShieldCheck className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Spezialisierte Expertise", desc: "Tiefes Know-how in LKW-Hilfsrahmen und Bergbau-Equipment.", icon: <Truck className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Maßgeschneiderte Fertigung", desc: "Vollständige Flexibilität für Sonderanfertigungen nach Ihren Plänen.", icon: <Zap className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Termintreue & Logistik", desc: "Eigene Logistik-Struktur garantiert Liefertermine ohne Verzögerung.", icon: <Clock className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Große Kapazitäten", desc: "Moderne 1200m² Produktionshalle für Serien und Großprojekte.", icon: <Box className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Sprachbarriere? Keine.", desc: "Deutschsprachige Ansprechpartner und Projektleitung vor Ort.", icon: <Languages className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Kostenvorteil EU-weit", desc: "Wettbewerbsfähige Preise durch kroatischen Standort bei EU-Standards.", icon: <Euro className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Bewährte Exporterfahrung", desc: "Erfolgreiche Partnerschaften in Schweden, Österreich und Slowenien.", icon: <Globe className="w-6 h-6 text-[#F27D26]" /> },
  { title: "Full-Service Partner", desc: "Von der Materialbeschaffung bis zur finalen Montage alles aus einer Hand.", icon: <Award className="w-6 h-6 text-[#F27D26]" /> },
];

const COLORS = {
  bg: '#0F0F0F',
  card: '#1A1A1A',
  accent: '#F27D26', // Industrielles Orange
  text: '#E4E3E0',
  muted: '#8E9299',
  border: '#2A2A2A',
};

type Language = 'de' | 'en' | 'sl' | 'hu';

const translations = {
  de: {
    navLeistungen: "Leistungen",
    navQualitat: "Qualität",
    navBesuchsplan: "Besuchsplan",
    navKontakt: "Kontakt",
    heroBadge: "Partner für Österreich & EU",
    heroTitle1: "METALL-",
    heroTitle2: "EXZELLENZ",
    heroTitle3: "AUS KROATIEN",
    heroDesc: "Präzisionsfertigung von LKW-Hilfsrahmen, Bergbau-Komponenten und Schweißbaugruppen in Serie. ISO 3834-3 Qualität – nur 3,5 Stunden von Ihnen entfernt.",
    heroBtnPortfolio: "UNSER PORTFOLIO",
    heroBtnWhatsApp: "WHATSAPP KONTAKT",
    factoryLocation: "Werk Čakovec, Kroatien",
    factoryDesc: "Eigene Fertigungshalle (Zagrebačka 99) für Ihre anspruchsvollsten Projekte.",
    logisticsAdvantage: "Logistik-Vorteil",
    whyTitle1: "WARUM MONTAGE TEHNIK?",
    whyTitle2: "10 GUTE GRÜNDE",
    whySubtitle: "Erfahren Sie, warum führende Unternehmen in der EU auf unsere Expertise vertrauen.",
    besuchsplanTitle: "BESUCHSPLAN & POTENZIALE",
    besuchsplanDesc: "Katalog potenzieller SME-Partner in Österreich mit Fokus auf Metallbau und Fahrzeugtechnik.",
    pitchLabel: "IHR PITCH (INFO-MATERIAL):",
    strategyLabel: "STRATEGIE:",
    tipsTitle: "GESPRÄCHS-TIPPS",
    contactTitle1: "KOOPERATION",
    contactTitle2: "VEREINBAREN",
    contactDesc: "Wir sind aktuell in Ihrer Region unterwegs. Vereinbaren Sie ein persönliches Gespräch für Produktdetails und Kooperationsmodelle.",
    ansprechpartner: "Ansprechpartner",
    direktor: "Direktor",
    whatsAppPrefered1: "WHATSAPP",
    whatsAppPrefered2: "PREFERIERT",
    whatsAppPreferedDesc: "Für maximale Geschwindigkeit und Transparenz kommunizieren wir primär über WhatsApp. Senden Sie uns Pläne, Skizzen oder Anforderungen direkt für eine sofortige Einschätzung.",
    antwortgarantie: "Antwortgarantie",
    antwortgarantieTime: "Unter 60 Minuten (Mo-Fr)",
    visuellesUpdate: "Visuelles Update",
    visuellesUpdateDesc: "Live-Fotos aus der Fertigung",
    chatStarten: "CHAT STARTEN",
    sendRequest: "ANFRAGE SENDEN",
  },
  en: {
    navLeistungen: "Services",
    navQualitat: "Quality",
    navBesuchsplan: "Visit Plan",
    navKontakt: "Contact",
    heroBadge: "Partner for Austria & EU",
    heroTitle1: "METAL-",
    heroTitle2: "EXCELLENCE",
    heroTitle3: "FROM CROATIA",
    heroDesc: "Precision manufacturing of truck subframes, mining components, and welded assemblies in series. ISO 3834-3 quality – only 3.5 hours away from you.",
    heroBtnPortfolio: "OUR PORTFOLIO",
    heroBtnWhatsApp: "WHATSAPP CONTACT",
    factoryLocation: "Plant Čakovec, Croatia",
    factoryDesc: "Own production hall (Zagrebačka 99) for your most demanding projects.",
    logisticsAdvantage: "Logistics Edge",
    whyTitle1: "WHY MONTAGE TEHNIK?",
    whyTitle2: "10 GOOD REASONS",
    whySubtitle: "Find out why leading companies in the EU trust our expertise.",
    besuchsplanTitle: "VISIT PLAN & POTENTIALS",
    besuchsplanDesc: "Catalog of potential SME partners in Central Europe focusing on metal construction and vehicle technology.",
    pitchLabel: "YOUR PITCH (INFO MATERIAL):",
    strategyLabel: "STRATEGY:",
    tipsTitle: "CONVERSATION TIPS",
    contactTitle1: "ARRANGE",
    contactTitle2: "COOPERATION",
    contactDesc: "We are currently traveling in your region. Arrange a personal meeting for product details and cooperation models.",
    ansprechpartner: "Contact Person",
    direktor: "Director",
    whatsAppPrefered1: "WHATSAPP",
    whatsAppPrefered2: "PREFERRED",
    whatsAppPreferedDesc: "For maximum speed and transparency, we primarily communicate via WhatsApp. Send us plans, sketches, or requirements directly for an immediate assessment.",
    antwortgarantie: "Response Guarantee",
    antwortgarantieTime: "Under 60 minutes (Mon-Fri)",
    visuellesUpdate: "Visual Update",
    visuellesUpdateDesc: "Live photos from production",
    chatStarten: "START CHAT",
    sendRequest: "SEND INQUIRY",
  },
  sl: {
    navLeistungen: "Storitve",
    navQualitat: "Kakovost",
    navBesuchsplan: "Načrt obiska",
    navKontakt: "Kontakt",
    heroBadge: "Partner za Avstrijo in EU",
    heroTitle1: "KOVINSKA-",
    heroTitle2: "ODLIČNOST",
    heroTitle3: "IZ HRVAŠKE",
    heroDesc: "Natančna proizvodnja pomožnih podvozij za tovorna vozila, rudarskih komponent in varjenih sklopov v serijah. Kakovost ISO 3834-3 – le 3,5 ure stran od vas.",
    heroBtnPortfolio: "NAŠ PORTFELJ",
    heroBtnWhatsApp: "WHATSAPP KONTAKT",
    factoryLocation: "Obrat Čakovec, Hrvaška",
    factoryDesc: "Lastna proizvodna hala (Zagrebačka 99) za vaše najzahtevnejše projekte.",
    logisticsAdvantage: "Logistična prednost",
    whyTitle1: "ZAKAJ MONTAGE TEHNIK?",
    whyTitle2: "10 DOBRIH RAZLOGOV",
    whySubtitle: "Ugotovite, zakaj vodilna podjetja v EU zaupajo našemu strokovnemu znanju.",
    besuchsplanTitle: "NAČRT OBISKA IN POTENCIALI",
    besuchsplanDesc: "Katalog potencialnih SME partnerjev v Srednji Evropi s poudarkom na kovinskih konstrukcijah in tehnologiji vozil.",
    pitchLabel: "VAŠ PREDSTAVITVENI MATERIAL:",
    strategyLabel: "STRATEGIJA:",
    tipsTitle: "NASVETI ZA POGOVOR",
    contactTitle1: "DOGOVORITE SE ZA",
    contactTitle2: "SODELOVANJE",
    contactDesc: "Trenutno potujemo po vaši regiji. Dogovorite se za osebni sestanek za podrobnosti o izdelkih in modelih sodelovanja.",
    ansprechpartner: "Oseba za stik",
    direktor: "Direktor",
    whatsAppPrefered1: "WHATSAPP",
    whatsAppPrefered2: "PREDNOSTNO",
    whatsAppPreferedDesc: "Za največjo hitrost in preglednost komuniciramo prednostno prek WhatsAppa. Pošljite nam načrte, skice ali zahteve neposredno za takojšnjo oceno.",
    antwortgarantie: "Jamstvo za odgovor",
    antwortgarantieTime: "Pod 60 minutami (pon-pet)",
    visuellesUpdate: "Vizualna posodobitev",
    visuellesUpdateDesc: "Fotografije v živo iz proizvodnje",
    chatStarten: "ZAČNI KLEPET",
    sendRequest: "POŠLJI POVPRAŠEVANJE",
  },
  hu: {
    navLeistungen: "Szolgáltatások",
    navQualitat: "Minőség",
    navBesuchsplan: "Látogatási terv",
    navKontakt: "Kapcsolat",
    heroBadge: "Partner Ausztria és az EU számára",
    heroTitle1: "FÉM-",
    heroTitle2: "KIVÁLÓSÁG",
    heroTitle3: "HORVÁTORSZÁGBÓL",
    heroDesc: "Teherautó segédvázak, bányászati ​​alkatrészek és hegesztett szerelvények precíziós sorozatgyártása. ISO 3834-3 minőség – mindössze 3,5 órányira Öntől.",
    heroBtnPortfolio: "PORTFÓLÓINK",
    heroBtnWhatsApp: "WHATSAPP KAPCSOLAT",
    factoryLocation: "Čakovec üzem, Horvátország",
    factoryDesc: "Saját gyártócsarnok (Zagrebačka 99) az Ön legigényesebb projektjeihez.",
    logisticsAdvantage: "Logisztikai előny",
    whyTitle1: "MIÉRT A MONTAGE TEHNIK?",
    whyTitle2: "10 JÓ OK",
    whySubtitle: "Tudja meg, miért bíznak az EU vezető vállalatai szakértelmünkben.",
    besuchsplanTitle: "LÁTOGATÁSI TERV ÉS POTENCIÁLOK",
    besuchsplanDesc: "SME-partnerek katalógusa Közép-Európában, különös tekintettel a fémszerkezetekre és a járműtechnológiára.",
    pitchLabel: "AZ ÖN PITCH (INFÓ ANYAG):",
    strategyLabel: "STRATÉGIA:",
    tipsTitle: "BESZÉLGETÉSI TIPPEK",
    contactTitle1: "EGYÜTTMŰKÖDÉS",
    contactTitle2: "MEGBESZÉLÉSE",
    contactDesc: "Jelenleg az Ön régiójában utazunk. Kérjen személyes találkozót a termékrészletekért és az együttműködési modellekért.",
    ansprechpartner: "Kapcsolattartó",
    direktor: "Igazgató",
    whatsAppPrefered1: "WHATSAPP",
    whatsAppPrefered2: "ELŐNYBEN RÉSZESÍTETT",
    whatsAppPreferedDesc: "A maximális sebesség és átláthatóság érdekében elsősorban a WhatsApp-on keresztül kommunikálunk. Küldje el nekünk terveit, vázlatait vagy igényeit közvetlenül az azonnali értékeléshez.",
    antwortgarantie: "Válaszgarancia",
    antwortgarantieTime: "60 percen belül (hétfő-péntek)",
    visuellesUpdate: "Vizuális frissítés",
    visuellesUpdateDesc: "Élő fotók a gyártásból",
    chatStarten: "CHAT INDÍTÁSA",
    sendRequest: "AJÁNLATKÉRÉS",
  },
};

const TRIP_TABS = [
  {
    id: 'max_efficiency',
    label: 'The MAX-Efficiency Tour',
    description: 'Extremer 2-Tages-Plan (8 Firmen/Tag). Fokus: SME-Netzwerk & Vorfertigung in OÖ/Stmk.',
    leads: [
      {
        group: "Tag 1: SME-Cluster OÖ (Linz-Steyr)",
        focus: "High-Density Vorfertigung",
        companies: [
          { name: "Zeko Mobility", address: "Welser Str. 83, Leonding", contact: "+43 732 6711", web: "zeko.at", maps: "https://maps.google.com/?q=Zeko+Mobility", desc: "Sonderaufbauten SME.", strategy: "Schnelle Schweißkonsolen.", pitch: ["24h Prototypenbau.", "SME Flexibilität."], travelNext: { distance: "4km", time: "8 min" } },
          { name: "TAT-Technom", address: "Technopark 1, Traun", contact: "+43 7229 64840", web: "tat.at", maps: "https://maps.google.com/?q=TAT-Technom", desc: "Antriebstechnik.", strategy: "Maschinengestelle.", pitch: ["Vibrationsresistent.", "ISO 3834-3."], travelNext: { distance: "6km", time: "10 min" } },
          { name: "WD-Metall", address: "Gewerbepark, Ansfelden", contact: "+43 7229 88164", web: "wd-metall.at", maps: "https://maps.google.com/?q=WD-Metall", desc: "Blechtechnik.", strategy: "Laser-Schweiß-Kombis.", pitch: ["Modernster Park.", "SME-Preise."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Hofmann Metall", address: "Gewerbepark 5, Sierning", contact: "+43 7259 3131", web: "hofmann-metall.at", maps: "https://maps.google.com/?q=Hofmann+Metall", desc: "Gehäusebau.", strategy: "Serienfertigung.", pitch: ["Kapazitäts-Puffer.", "Hohe Genauigkeit."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Glatz Mechanik", address: "Gründbergstr. 1, Steyr", contact: "+43 7252 73061", web: "glatz.at", maps: "https://maps.google.com/?q=Glatz+Mechanik", desc: "Maschinenbau SME.", strategy: "Vorfertigung Module.", pitch: ["Baugruppen-Montage.", "Terminfokus."], travelNext: { distance: "5km", time: "8 min" } },
          { name: "SME Stahlbau", address: "Industriezeile, Steyr", contact: "+43 7252 1122", web: "sme-steyr.at", maps: "https://maps.google.com/?q=SME+Stahlbau", desc: "Leichtbau-Experten.", strategy: "Dünnblech-Schweißen.", pitch: ["Alu & Edelstahl.", "Spezial-Lose."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "M-Tech Austria", address: "Haager Str., Enns", contact: "+43 7223 82121", web: "m-tech.at", maps: "https://maps.google.com/?q=M-Tech+Austria", desc: "Anlagenbau Zulieferer.", strategy: "Rahmenkonstruktionen.", pitch: ["Extreme Schweißtiefe.", "Prüfzertifiziert."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "Laska Maschinen", address: "Makartstraße, Linz", contact: "+43 732 3311", web: "laska.at", maps: "https://maps.google.com/?q=Laska+Maschinen", desc: "Lebensmitteltechnik.", strategy: "Edelstahl-Fokus.", pitch: ["Hygiene-Schweißnähte.", "SME-Serienbau."] }
        ]
      },
      {
        group: "Tag 2: A9 Süd-Achse (Graz-Leoben)",
        focus: "Heavy Metal & Outsourcing Hubs",
        companies: [
          { name: "Krenhof GmbH", address: "Schmiedgasse, Köflach", contact: "+43 3144 2505", web: "krenhof.at", maps: "https://maps.google.com/?q=Krenhof", desc: "Schmiedetechnik.", strategy: "Schweißbaugruppen-Kombi.", pitch: ["Vormontierte Teile.", "Serien-Spezialist."], travelNext: { distance: "25km", time: "25 min" } },
          { name: "Berger Fabrik", address: "Grazer Str., Knittelfeld", contact: "+43 3512 82511", web: "berger.at", maps: "https://maps.google.com/?q=Berger+Fabrik", desc: "Apparatebau SME.", strategy: "Edelstahl & Sonderstähle.", pitch: ["Druckbehälter-Nähte.", "ISO-Qualität."], travelNext: { distance: "18km", time: "18 min" } },
          { name: "Stahl-Grabner", address: "Industrieallee, Hartberg", contact: "+43 3332 62654", web: "grabner.at", maps: "https://maps.google.com/?q=Grabner", desc: "Fahrzeugbau Zulieferer.", strategy: "Hilfsrahmen in Serie.", pitch: ["Feinkornbaustahl-Pro.", "Roboter-Schweißen."], travelNext: { distance: "30km", time: "28 min" } },
          { name: "Kohlbacher Metall", address: "Gasselsdorf, Lang", contact: "+43 3452 71501", web: "kohlbacher.at", maps: "https://maps.google.com/?q=Kohlbacher", desc: "Modulbau-Fertigung.", strategy: "Vorfertigung Stahlbau.", pitch: ["Logistik-Erfahrung DE.", "Modul-Skalierung."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Mecabau GmbH", address: "Lassnitzhöhe", contact: "+43 316 2727", web: "mecabau.at", maps: "https://maps.google.com/?q=Mecabau", desc: "Präzision-SME.", strategy: "Leichte Baugruppen.", pitch: ["CNC & Schweißen.", "Just-in-time SME."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Austropressen", address: "Roitham", contact: "+43 7613 2337", web: "austropressen.com", maps: "https://maps.google.com/?q=Austropressen", desc: "Entsorgungstechnik.", strategy: "Massive Pressgehäuse.", pitch: ["Schwere Bauteile.", "Verlängerte Werkbank."], travelNext: { distance: "45km", time: "35 min" } },
          { name: "Framag GmbH", address: "Frankenburg", contact: "+43 7683 5040", web: "framag.at", maps: "https://maps.google.com/?q=Framag", desc: "Schwingungstechnik.", strategy: "Gedämpfte Gestelle.", pitch: ["Verbund-Schweißbau.", "Präzisions-Outsourcing."], travelNext: { distance: "15km", time: "12 min" } },
          { name: "SME Guss-Schweiß", address: "Wels-Nord", contact: "+43 7242 1122", web: "guss-schweiss.at", maps: "https://maps.google.com/?q=SME+Guss", desc: "Spezial-Zulieferer.", strategy: "Guss-Verschweißung.", pitch: ["SME-Nische.", "Partner für Sonderbau."] }
        ]
      }
    ]
  },
  {
    id: 'ooe',
    label: 'Oberösterreich Tour',
    description: 'Fokus: Linz, Leonding & Voralpenregion (Maschinenbau & LKW-Technik)',
    leads: [
      {
        group: "Tag 1: Cluster Linz/Leonding/Wels",
        focus: "High-Tech Fabrication & SME Precision",
        companies: [
          { name: "Zeko Mobility", address: "Welser Str. 83, 4060 Leonding", contact: "+43 732 6711", web: "zeko.at", maps: "https://maps.google.com/?q=Zeko+Mobility", desc: "Sonderaufbauten SME.", strategy: "Vorfertigung von Schweißkonsolen.", pitch: ["24h Prototypenbau.", "SME Flexibilität."], travelNext: { distance: "4km", time: "8 min" } },
          { name: "TAT-Technom", address: "Technopark 1, Traun", contact: "+43 7229 64840", web: "tat.at", maps: "https://maps.google.com/?q=TAT-Technom", desc: "Antriebstechnik.", strategy: "Maschinengestelle.", pitch: ["Vibrationsresistent.", "ISO 3834-3."], travelNext: { distance: "6km", time: "10 min" } },
          { name: "WD-Metall", address: "Roseggerstr. 12, Traun", contact: "+43 699 172", web: "wd-metall.at", maps: "https://maps.google.com/?q=WD-Metall", desc: "Blechtechnik.", strategy: "Serien-Outsourcing.", pitch: ["Verlängerte Werkbank.", "EU-Preiskalkulation."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Fronius Schweißtechnik", address: "Froniusplatz 1, Wels", contact: "+43 7242 241", web: "fronius.com", maps: "https://maps.google.com/?q=Fronius+Wels", desc: "Weltmarktführer Schweißtechnik.", strategy: "Automation & Robotics.", pitch: ["Automatisierte Schweißzellen.", "High-End Beratung."], travelNext: { distance: "5km", time: "11 min" } },
          { name: "Rübig GmbH", address: "Schlosserstr. 2, Wels", contact: "+43 7242 66060", web: "ruebig.at", maps: "https://maps.google.com/?q=Ruebig+Wels", desc: "Härterei & Schmiede.", strategy: "Bauteil-Veredelung.", pitch: ["Glühen & Härten.", "SME-Serienfertigung."], travelNext: { distance: "4km", time: "8 min" } },
          { name: "Starlim Sterner", address: "Mühlstraße 21, Marchtrenk", contact: "+43 7242 2288", web: "starlim-sterner.com", maps: "https://maps.google.com/?q=Starlim", desc: "Werkzeugbau SME.", strategy: "Präzisions-Komponenten.", pitch: ["Mikro-Präzision.", "SME Excellence."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Reform-Werke", address: "Haidingerstr. 7, Wels", contact: "+43 7242 2320", web: "reform.at", maps: "https://maps.google.com/?q=Reform+Wels", desc: "Spezialfahrzeuge.", strategy: "Leichtbau-Chassis.", pitch: ["Fahrwerks-Schweißung.", "Serien-SME."], travelNext: { distance: "8km", time: "12 min" } },
          { name: "Ke Kelit GmbH", address: "Ignaz-Mayer-Str. 17, Linz", contact: "+43 50 6973", web: "kekelit.at", maps: "https://maps.google.com/?q=Ke+Kelit+Linz", desc: "Rohrsysteme.", strategy: "Metall-Armaturen.", pitch: ["Präzisions-Schweißung.", "Industrie-Serien."] }
        ]
      },
      {
        group: "Tag 2: Steyr/Enns/Voralpen",
        focus: "Automotive, Agrar & Industrial Hubs",
        companies: [
          { name: "Ernst Riedler", address: "Oberndorf 42, Sierning", contact: "+43 7259 2737", web: "riedler.at", maps: "https://maps.google.com/?q=Riedler+Sierning", desc: "Forst-Fahrzeuge.", strategy: "Massiv-Stahlbau.", pitch: ["Heavy Duty Rahmen.", "Forst-Kompetenz."], travelNext: { distance: "5km", time: "8 min" } },
          { name: "Hofmann Metall", address: "Gewerbepark 5, Sierning", contact: "+43 7259 3131", web: "hofmann-metall.at", maps: "https://maps.google.com/?q=Hofmann+Metall", desc: "Blech-SME.", strategy: "Gehäuse-Serien.", pitch: ["Präzise Vorfertigung.", "Schnelle SME-Wege."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "Vakutec", address: "Pernsteinerstr. 14, Nußbach", contact: "+43 7583 8317", web: "vakutec.at", maps: "https://maps.google.com/?q=Vakutec", desc: "Agrar-Technik.", strategy: "Behälterbau.", pitch: ["Druckfeste Tanks.", "Edelstahl-Fokus."], travelNext: { distance: "28km", time: "25 min" } },
          { name: "Pöttinger", address: "Grieskirchen", contact: "+43 7248 6000", web: "poettinger.at", maps: "https://maps.google.com/?q=Poettinger", desc: "Agrar Global SME.", strategy: "Chassis-Outsourcing.", pitch: ["Mähwerks-Rahmen.", "Großserien-Partner."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "Salvagnini", address: "Salvagninistr. 1, Ennsdorf", contact: "+43 7223 885", web: "salvagnini.at", maps: "https://maps.google.com/?q=Salvagnini", desc: "Maschinenbau.", strategy: "Gehäuse-Vorfertigung.", pitch: ["Blech-Exzellenz.", "High-End Gehäuse."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Schöller-Bleckmann", address: "Enns Hub", contact: "+43 2630 3150", web: "sbo.at", maps: "https://maps.google.com/?q=SBO+Enns", desc: "Ölfeld-Technik.", strategy: "Spezial-Schweißen.", pitch: ["Nicht-magnetisch.", "API-Standards."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Hainzl Industries", address: "Industriezeile 56, Linz", contact: "+43 732 7892", web: "hainzl.at", maps: "https://maps.google.com/?q=Hainzl+Linz", desc: "Hydraulik-Systeme.", strategy: "Aggregat-Rahmen.", pitch: ["System-Integration.", "Dichte Behälter."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Plasser & Theurer", address: "Linz", contact: "+43 1 51572", web: "plassertheurer.com", maps: "https://maps.google.com/?q=Plasser+Linz", desc: "Bahn-Technik.", strategy: "Rahmenbau-Serie.", pitch: ["Höchste Statik.", "Weltmarktführer."] }
        ]
      }
    ]
  },
  {
    id: 'stmk',
    label: 'Graz & Steiermark Tour',
    description: 'Fokus: Bergbau-Equipment, Stahlbau-Elemente & Fahrzeugbau-Serien',
    leads: [
      {
        group: "Tag 1: Graz & Umland (Cluster Süd)",
        focus: "Heavy Engineering & SME Metal Cluster",
        companies: [
          { name: "Binder+Co AG", address: "Gleisdorf", contact: "+43 3112 8030", web: "binder-co.at", maps: "https://maps.google.com/?q=Binder+Co", desc: "Siebtechnik.", strategy: "Hardox-Schweißmodule.", pitch: ["Verschleißfeste Konstruktion.", "Bergbau-Synergien."], travelNext: { distance: "25km", time: "25 min" } },
          { name: "Krenhof GmbH", address: "Köflach", contact: "+43 3144 2505", web: "krenhof.at", maps: "https://maps.google.com/?q=Krenhof", desc: "Schmiedetechnik.", strategy: "Vormontierte Baugruppen.", pitch: ["Automotive Standards.", "Großserien-Expertise."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Maschinenfabrik Berger", address: "Knittelfeld", contact: "+43 3512 82442", web: "m-berger.at", maps: "https://maps.google.com/?q=Berger+Knittelfeld", desc: "Bergbau-Spezialist.", strategy: "Schwere Bergbau-Chassis.", pitch: ["Massiver Stahlbau.", "Druckbehälter-Nähte."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "Andritz AG (Division Graz)", address: "Statteggerstr. 18, Graz", contact: "+43 316 6902", web: "andritz.com", maps: "https://maps.google.com/?q=Andritz+Graz", desc: "Anlagenbau Global.", strategy: "Wasserkraft-Gehäuse.", pitch: ["Turbinen-Komponenten.", "Zertifizierter Schweißerpool."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Wuppermann Metall", address: "Gürtelstraße, Judenburg", contact: "+43 3572 791", web: "wuppermann.at", maps: "https://maps.google.com/?q=Wuppermann+Judenburg", desc: "Blech- & Profilprofi.", strategy: "Vorverzinkte Schweißteile.", pitch: ["Korrosionsschutz-Fokus.", "Profil-Verschweißung."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "MAGNA Steyr", address: "Graz", contact: "+43 316 404", web: "magna.at", maps: "https://maps.google.com/?q=Magna+Graz", desc: "Automotive Hub.", strategy: "Prototypen-Schweißgruppen.", pitch: ["Innovative Werkstoffe.", "Technologie-Spitze."], travelNext: { distance: "14km", time: "16 min" } },
          { name: "Ramsauer Metallbau", address: "St. Marein im Mürztal", contact: "+43 3862 5505", web: "ramsauer-metall.at", maps: "https://maps.google.com/?q=Ramsauer+St+Marein", desc: "SME Stahlbau.", strategy: "Vorfertigung Hallen-Module.", pitch: ["Flexibilität & Speed.", "Montagefertige Einheiten."], travelNext: { distance: "18km", time: "22 min" } },
          { name: "Stahl-Grabner", address: "Hartberg", contact: "+43 3332 62654", web: "grabner.at", maps: "https://maps.google.com/?q=Grabner+Hartberg", desc: "Fahrzeugbau SME.", strategy: "LKW-Hilfsrahmen.", pitch: ["Feinkornbaustahl-Pro.", "Serien-Rahmenbau."] }
        ]
      },
      {
        group: "Tag 2: Mürztal & Obersteiermark",
        focus: "Schwerindustrie & Outsourcing Hubs",
        companies: [
          { name: "voestalpine Tubulars", address: "Kindberg", contact: "+43 3865 2293", web: "voestalpine.com/tubulars", maps: "https://maps.google.com/?q=Tubulars+Kindberg", desc: "Nahtlosrohre.", strategy: "Spezialkupplungen & Flansche.", pitch: ["Prüfzertifiziert.", "Hochdruck-Schweißnähte."], travelNext: { distance: "28km", time: "25 min" } },
          { name: "Palfinger (Werk Bruck)", address: "Bruck an der Mur", contact: "+43 3862 531", web: "palfinger.com", maps: "https://maps.google.com/?q=Palfinger+Bruck", desc: "Ladekran-Komponenten.", strategy: "Arm-Verlängerungen.", pitch: ["Leichtbau-Genauigkeit.", "Automatisierte Fertigung."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Norske Skog", address: "Bruck an der Mur", contact: "+43 3862 331", web: "norskeskog.com", maps: "https://maps.google.com/?q=Norske+Skog+Bruck", desc: "Papierindustrie.", strategy: "Großbehälter & Rohrleitungen.", pitch: ["Korrosionsbeständigkeit.", "Anlagen-Vorfertigung."], travelNext: { distance: "18km", time: "20 min" } },
          { name: "WIKUS Sägetechnik", address: "Spital am Semmering", contact: "+43 3853 234", web: "wikus.at", maps: "https://maps.google.com/?q=Wikus+Spital", desc: "Präzisions-Sägebänder.", strategy: "Maschinengestelle SME.", pitch: ["Präzise Vorfertigung.", "SME-Partnerschaft."], travelNext: { distance: "22km", time: "25 min" } },
          { name: "Böhler-Uddeholm Precision", address: "Kapfenberg", contact: "+43 3862 20", web: "bohler-precision.com", maps: "https://maps.google.com/?q=Bohler+Kapfenberg", desc: "Spezialstahl SME.", strategy: "Vorfertigung für Werkzeuge.", pitch: ["Materialexzellenz.", "High-Tech Schweißverfahren."], travelNext: { distance: "5km", time: "8 min" } },
          { name: "Mecabau GmbH", address: "Lassnitzhöhe", contact: "+43 316 2727", web: "mecabau.at", maps: "https://maps.google.com/?q=Mecabau", desc: "Präzisions-Schweiß-SME.", strategy: "Baugruppen-Montagemodule.", pitch: ["Just-in-Time SME.", "Roboter-Precision."], travelNext: { distance: "14km", time: "16 min" } },
          { name: "URBAS Maschinenfabrik", address: "Eisenerz", contact: "+43 4232 2521", web: "urbas.at", maps: "https://maps.google.com/?q=Urbas+Eisenerz", desc: "Energietechnik.", strategy: "Kesselgehäuse & Roste.", pitch: ["Massivstahl-Module.", "Wärmetechnik-Erfahrung."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "Kohlbacher Metallbau", address: "Langenwang", contact: "+43 3854 2465", web: "kohlbacher.at", maps: "https://maps.google.com/?q=Kohlbacher+Langenwang", desc: "Fertigteil-Stahlbau.", strategy: "Modulare Schweißbaugruppen.", pitch: ["Großserien-Logistik.", "Effiziente Montage-Vorbereitung."] }
        ]
      }
    ]
  },
  {
    id: 'noe',
    label: 'Niederösterreich & Wien',
    description: 'Fokus: Großkomponenten, Eisenbahntechnik & Infrastruktur-Projekte',
    leads: [
      {
        group: "Tag 1: Wiener Becken & Süd",
        focus: "High-End Engineering & Rail Systems",
        companies: [
          { name: "Plasser & Th.", address: "Johannesgasse, Wien", contact: "01 51572", web: "plassertheurer.com", maps: "https://maps.google.com/?q=Plasser+Wien", desc: "Bahn-Technik.", strategy: "Rahmen-Outsourcing.", pitch: ["Prüfschweißen ISO 15085.", "Massive Baugruppen."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "Worthington", address: "Kienberg", contact: "07485 606", web: "worthington.at", maps: "https://maps.google.com/?q=Worthington+Kienberg", desc: "Druckbehälter.", strategy: "Serien-Tanks.", pitch: ["Druckfeste Nähte.", "Automatisierte Serie."], travelNext: { distance: "45km", time: "40 min" } },
          { name: "Schöller-Bl.", address: "Ternitz", contact: "02630 3150", web: "sbo.at", maps: "https://maps.google.com/?q=SBO+Ternitz", desc: "Oilfield Tools.", strategy: "Präzisions-Schweißen.", pitch: ["Speziallegierungen.", "API Standards."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Semperit", address: "Wimpassing", contact: "02630 3100", web: "semperit.com", maps: "https://maps.google.com/?q=Semperit+Wimpassing", desc: "Gummi-Metall.", strategy: "Verbund-Komponenten.", pitch: ["Haftungsspezialist.", "Metall-Vorbereitung."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Kraus & Naimer", address: "Schumanngasse, Wien", contact: "01 404060", web: "krausnaimer.com", maps: "https://maps.google.com/?q=Kraus+Naimer+Wien", desc: "Schaltgeräte SME.", strategy: "Gehäuse-Komponenten.", pitch: ["Dauerhafte Kontakte.", "SME Zuverlässigkeit."], travelNext: { distance: "5km", time: "10 min" } },
          { name: "Knorr-Bremse", address: "Mödling", contact: "02236 409", web: "knorr-bremse.com", maps: "https://maps.google.com/?q=Knorr+Bremse+Moedling", desc: "Bremssysteme.", strategy: "Alu-Gehäuse Schweißung.", pitch: ["Sicherheit im Fokus.", "Zertifizierte Prozesse."], travelNext: { distance: "8km", time: "12 min" } },
          { name: "Isovolta", address: "Wiener Neudorf", contact: "02236 605", web: "isovolta.com", maps: "https://maps.google.com/?q=Isovolta+Wiener+Neudorf", desc: "Isolierstoffe.", strategy: "Träger-Konstruktionen.", pitch: ["Elektrische Sicherheit.", "Kombinations-Bauteile."], travelNext: { distance: "10km", time: "15 min" } },
          { name: "Hoerbiger", address: "Wien", contact: "01 22440", web: "hoerbiger.com", maps: "https://maps.google.com/?q=Hoerbiger+Wien", desc: "Kompressionstechnik.", strategy: "Ventil-Gehäuse.", pitch: ["Präzisions-Guss/Schweiß.", "Langfrist-Partner."] }
        ]
      },
      {
        group: "Tag 2: West-NÖ & Donau-Achse",
        focus: "SME-Fertigung & Heavy Duty Automation",
        companies: [
          { name: "Doka Umdasch", address: "Amstetten", contact: "07472 605", web: "doka.com", maps: "https://maps.google.com/?q=Doka+Amstetten", desc: "Schalungsbau.", strategy: "Serien-Rahmen.", pitch: ["Robuste Konstruktion.", "Massenserien."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Hauser Metall", address: "Pottenbrunn", contact: "02742 4220", web: "hauser-metall.at", maps: "https://maps.google.com/?q=Hauser+Pottenbrunn", desc: "Stahlbau SME.", strategy: "Fassaden-Module.", pitch: ["Design & Statik.", "SME Flexibilität."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "Voith Austria", address: "St. Pölten", contact: "02742 806", web: "voith.com", maps: "https://maps.google.com/?q=Voith+St+Poelten", desc: "Getriebetechnik.", strategy: "Gehäuse-Schweißbau.", pitch: ["Schwerlast-Getriebe.", "Zertifizierte Qualität."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "Zizala (ZKW)", address: "Wieselburg", contact: "07416 505", web: "zkw-group.com", maps: "https://maps.google.com/?q=ZKW+Wieselburg", desc: "Lichtsysteme Hub.", strategy: "Träger-Systeme.", pitch: ["Automotive Precision.", "Alu-Schweißungen."], travelNext: { distance: "28km", time: "25 min" } },
          { name: "TEUFELBERGER", address: "Wels/St. Pölten", contact: "07242 615", web: "teufelberger.com", maps: "https://maps.google.com/?q=Teufelberger", desc: "Seiltechnik.", strategy: "Winden-Gehäuse.", pitch: ["Extreme Belastung.", "Sicherheits-Schweißnähte."], travelNext: { distance: "20km", time: "25 min" } },
          { name: "GLASSER Metall", address: "Pöchlarn", contact: "02757 2322", web: "glasser.at", maps: "https://maps.google.com/?q=Glasser+Poechlarn", desc: "Landtechnik SME.", strategy: "Anbaugeräte-Rahmen.", pitch: ["SME-Power.", "Agrar-Fokus."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "BUSATIS", address: "Purgstall", contact: "07489 7070", web: "busatis.com", maps: "https://maps.google.com/?q=Busatis+Purgstall", desc: "Verschleißtechnik.", strategy: "Messer-Träger.", pitch: ["Hartmetall-Integration.", "Spezial-Schweißen."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Hitzinger", address: "Linz/NÖ Hub", contact: "0732 381615", web: "hitzinger.at", maps: "https://maps.google.com/?q=Hitzinger", desc: "Generatorenbau.", strategy: "Aggregat-Gehäuse.", pitch: ["Vibrationsfrei.", "Maßgeschneidert."] }
        ]
      }
    ]
  },
  {
    id: 'sbg',
    label: 'Salzburg & Bayern Tour',
    description: 'Fokus: Hebetechnik, Logistik & schwere Baumaschinen',
    leads: [
      {
        group: "Tag 1: Salzburg Flachgau & Central",
        focus: "Kranbau, SME Maschinenbau & Tech-Integration",
        companies: [
          { name: "Palfinger AG", address: "Lamprechtshausen", contact: "+43 662 22810", web: "palfinger.ag", maps: "https://maps.google.com/?q=Palfinger+Salzburg", desc: "Hebe-Systeme.", strategy: "Kran-Hilfsrahmen.", pitch: ["S700-S960 Expertise.", "ISO 15085 Zertifikat."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Wacker Neuson", address: "Lamprechtshausen", contact: "+43 6274 2002", web: "wackerneuson.at", maps: "https://maps.google.com/?q=Wacker+Neuson+Lamprechtshausen", desc: "Baumaschinen.", strategy: "Bagger-Chassis.", pitch: ["Robuste Seriennähte.", "SME Flexibilität."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "GUGG GmbH", address: "Uttendorf", contact: "+43 7724 2331", web: "gugg.at", maps: "https://maps.google.com/?q=GUGG+Uttendorf", desc: "SME Sonderbau.", strategy: "Kommunal-Rahmen.", pitch: ["Spezial-Lose.", "SME Strukturen."], travelNext: { distance: "25km", time: "25 min" } },
          { name: "Sigmatek", address: "Lamprechtshausen", contact: "+43 6274 4393", web: "sigmatek-automation.com", maps: "https://maps.google.com/?q=Sigmatek+Lamprechtshausen", desc: "Automatisierung.", strategy: "Schaltschrank-Gehäuse.", pitch: ["Präzise Alu-Gehäuse.", "Elektronik-Integration."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Windhager", address: "Seekirchen", contact: "+43 6212 2341", web: "windhager.com", maps: "https://maps.google.com/?q=Windhager+Seekirchen", desc: "Heiztechnik.", strategy: "Kessel-Baugruppen.", pitch: ["Druckfeste Nähte.", "Serien-Fertigung."], travelNext: { distance: "18km", time: "20 min" } },
          { name: "Emco Maier", address: "Hallein", contact: "+43 6245 8910", web: "emco-world.com", maps: "https://maps.google.com/?q=Emco+Hallein", desc: "Werkzeugmaschinen.", strategy: "Maschinen-Betten.", pitch: ["Vibrationsdämpfung.", "Präzisions-Stahlbau."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Sony DADC", address: "Thalgau", contact: "+43 6235 601", web: "sonydadc.com", maps: "https://maps.google.com/?q=Sony+Thalgau", desc: "Logistik-Systeme.", strategy: "Automations-Rahmen.", pitch: ["High-Tech Standard.", "Saubere Schweißung."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "Kaindl Logistik", address: "Wals", contact: "+43 662 8588", web: "kaindl.com", maps: "https://maps.google.com/?q=Kaindl+Wals", desc: "Lager-Systeme.", strategy: "Schwerlast-Regale.", pitch: ["Statische Sicherheit.", "Großserien-Logistik."] }
        ]
      },
      {
        group: "Tag 2: Innviertel & Bayern Border",
        focus: "Trailer, Landtechnik & Automation Hubs",
        companies: [
          { name: "Schwarzmüller", address: "Freinberg", contact: "+43 7713 8000", web: "schwarzmueller.com", maps: "https://maps.google.com/?q=Schwarzmueller+Freinberg", desc: "Trailer Global.", strategy: "Chassis-Komponenten.", pitch: ["Leichtbau-Expertise.", "Massenserien."], travelNext: { distance: "45km", time: "40 min" } },
          { name: "Fill", address: "Gurten", contact: "+43 7757 7010", web: "fill.co.at", maps: "https://maps.google.com/?q=Fill+Gurten", desc: "Plant Engineering.", strategy: "Automations-Gestelle.", pitch: ["High-End Schweißen.", "System-Partner."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "Liebherr", address: "Bischofshofen", contact: "+43 50809 10", web: "liebherr.com", maps: "https://maps.google.com/?q=Liebherr+Bischofshofen", desc: "Radlader Global.", strategy: "Schaufel-Arme/Chassis.", pitch: ["Bergbau-DNA.", "Zertifikat ISO 3834."], travelNext: { distance: "55km", time: "45 min" } },
          { name: "KTM AG", address: "Mattighofen", contact: "+43 7742 6000", web: "ktm.com", maps: "https://maps.google.com/?q=KTM+Mattighofen", desc: "Motorrad Hub.", strategy: "Rahmenbau SME.", pitch: ["Alu- & Stahlrahmen.", "Premium-Qualität."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Wintersteiger", address: "Ried im Innkreis", contact: "+43 7751 8383", web: "wintersteiger.com", maps: "https://maps.google.com/?q=Wintersteiger+Ried", desc: "Spezialmaschinen.", strategy: "Maschinengestelle.", pitch: ["SME Speed.", "Präzise Vorfertigung."], travelNext: { distance: "28km", time: "25 min" } },
          { name: "FACC AG", address: "Ried-Reichersberg", contact: "+43 59 6160", web: "facc.com", maps: "https://maps.google.com/?q=FACC+Ried", desc: "Aerospace Hub.", strategy: "Vorrichtungen/Formen.", pitch: ["Präzisions-Stahlforme.", "High-End Engineering."], travelNext: { distance: "22km", time: "20 min" } },
          { name: "Rosenbauer", address: "Leonding", contact: "+43 732 6794", web: "rosenbauer.com", maps: "https://maps.google.com/?q=Rosenbauer+Leonding", desc: "Feuerwehrtechnik.", strategy: "Aufbau-Module.", pitch: ["Sicherheit im Fokus.", "Alu-Spezialbau."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Engel Austria", address: "Dietach", contact: "+43 50 620", web: "engelglobal.com", maps: "https://maps.google.com/?q=Engel+Dietach", desc: "Spritzguss-Global.", strategy: "Maschinen-Betten.", pitch: ["Massiver Schweißbau.", "Weltmarkt-Standard."] }
        ]
      }
    ]
  },
  {
    id: 'kaernten',
    label: 'Kärnten & Süd-Tour',
    description: 'Fokus: Zellstoff-Industrie, Wasserkraft & High-Precision',
    leads: [
      {
        group: "Tag 1: Villach & Spittal",
        focus: "High-Tech & SME Zulieferung",
        companies: [
          {
            name: "Kostwein Maschinenbau",
            address: "Argentinierstraße 4, 9020 Klagenfurt",
            contact: "+43 463 56500",
            web: "kostwein.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Argentinierstraße+4,+9020+Klagenfurt",
            desc: "Modulmontage & Komplettfertigung für Weltmarktführer.",
            strategy: "Verlängerte Werkbank für Schweiß-Module.",
            pitch: [
              "Höchste Sauberkeit und Präzision bei Schweißbaugruppen.",
              "Full-Service: Schweißen, mech. Bearbeitung & Endmontage.",
              "Erfahrener Outsourcing-Partner für stabile Lieferketten."
            ],
            travelNext: { distance: "38 km", time: "32 min" }
          },
          {
            name: "Wild GmbH",
            address: "Wildstraße 4, 9100 Völkermarkt",
            contact: "+43 4232 25350",
            web: "wild.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Wildstraße+4,+9100+Völkermarkt",
            desc: "Systempartner für Optik, Elektronik und Feinmechanik.",
            strategy: "Vorfertigung von präzisen Geräte-Chassis.",
            pitch: [
              "Höchste Präzision im Dünnblech-Schweißen.",
              "Zulieferung von Gehäusen für medizinische und optische Geräte.",
              "SME-Partner für anspruchsvolle Systemintegration."
            ],
            travelNext: { distance: "45 km", time: "35 min" }
          },
          {
            name: "Lindner-Recyclingtech",
            address: "Villacher Str. 48, 9800 Spittal an der Drau",
            contact: "+43 4762 2742",
            web: "lindner.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Villacher+Str.+48,+9800+Spittal+an+der+Drau",
            desc: "Zerkleinerungstechnik & Recycling-Lösungen.",
            strategy: "Massive Gehäuse für Brecher & Shredder.",
            pitch: [
              "Verschleißfeste Schweißbaugruppen für Shredder-Gehäuse.",
              "Umgang mit massiven Materialstärken und Vibrationslasten.",
              "Kostenvorteil bei schweren Stahlbau-Komponenten."
            ]
          }
        ]
      },
      {
        group: "Tag 2: Klagenfurt & Wolfsberg",
        focus: "Wasserkraft, SME & Papierindustrie",
        companies: [
          {
            name: "Andritz Hydro GmbH",
            address: "Eisengasschen 2, 9020 Klagenfurt",
            contact: "+43 463 58500",
            web: "andritz.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Eisengasschen+2,+9020+Klagenfurt",
            desc: "Systeme für Wasserkraftwerke.",
            strategy: "Turbinen-Gehäuse & Rohrleitungs-Elemente.",
            pitch: [
              "Druckfeste Schweißverbindungen für Kraftwerks-Armaturen.",
              "Erfahrung aus Bergbau-Pipelines direkt anwendbar.",
              "Prüfzertifizierte Naht-Qualität nach höchsten EU-Normen."
            ],
            travelNext: { distance: "52 km", time: "40 min" }
          },
          {
            name: "URBAS Maschinenfabrik GmbH",
            address: "Billrothstraße 7, 9100 Völkermarkt",
            contact: "+43 4232 2521",
            web: "urbas.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Billrothstraße+7,+9100+Völkermarkt",
            desc: "Spezialist for energy technology and steel structures.",
            strategy: "Outsourcing-Partner für schwere Kesselgehäuse.",
            pitch: [
              "Massivstahlbau-Schweißkompetenz für den Energiebereich.",
              "SME-Servicelevel mit industrieller Fertigungskapazität.",
              "Vorfertigung von Trägerstrukturen für Biomassekraftwerke."
            ],
            travelNext: { distance: "42 km", time: "35 min" }
          },
          {
            name: "Springer Maschinenfabrik",
            address: "Hans-Springer-Straße 2, 9360 Friesach",
            contact: "+43 4268 2581",
            web: "springer.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Hans-Springer-Straße+2,+9360+Friesach",
            desc: "Automatisierungslösungen für die Holzindustrie.",
            strategy: "Trägergestelle & Mechanik-Komponenten.",
            pitch: [
              "Präzise Gestelle für automatisierte Förder-Anlagen.",
              "Skalierbare Serienfertigung für Anlagenbau-Serien.",
              "Termintreue Lieferung zur exakten Baustellen-Einbringung."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'zentral_ost',
    label: 'Zentral-Ost Tour (HU/SK/AT)',
    description: 'Fokus: Automotive-Zulieferer, Schwerlast-Transport & Engineering-Hubs',
    leads: [
      {
        group: "Tag 1: West-Ungarn (Győr)",
        focus: "Fahrzeugbau & SME-Zulieferer",
        companies: [
          {
            name: "Rába Automotive Holding",
            address: "Budai út 1, 9027 Győr, Hungary",
            contact: "+36 96 622 000",
            web: "raba.hu",
            maps: "https://www.google.com/maps/search/?api=1&query=Budai+út+1,+9027+Győr,+Hungary",
            desc: "Bedeutender Achsen- und Komponentenhersteller.",
            strategy: "Zulieferung von Achskörper-Schweißbaugruppen.",
            pitch: [
              "Spezialist für schwere Achskonstruktionen und Fahrwerksteile.",
              "Robuste Schweißverbindungen für den Einsatz in Nutzfahrzeugen.",
              "Logistische Nähe: Nur 2h von Čakovec entfernt."
            ],
            travelNext: { distance: "12 km", time: "15 min" }
          },
          {
            name: "Dana Hungary Kft.",
            address: "Dana utca 1, 9027 Győr, Hungary",
            contact: "+36 96 505 100",
            web: "dana.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Dana+Hungary+Kft.+Győr",
            desc: "Tier-1 Zulieferer für Antriebsstränge.",
            strategy: "Verschweißen von Gehäusen und Halterungen.",
            pitch: [
              "Präzisionsschweißen für Getriebegehäuse.",
              "Automotive-Standard IATF 16949 konforme Prozesse.",
              "Hohe Kapazität für Serien-Schweißung."
            ],
            travelNext: { distance: "8 km", time: "10 min" }
          },
          {
            name: "Nemak Győr Kft.",
            address: "Nyírfa sor, 9027 Győr, Hungary",
            contact: "+36 96 621 100",
            web: "nemak.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Nyírfa+sor,+9027+Győr,+Hungary",
            desc: "Aluminium-Gusslösungen für Antriebsstränge.",
            strategy: "Kombination von Guss- und Schweißbauteilen.",
            pitch: [
              "Verschweißen von Aluminium-Gussteilen zu komplexen Baugruppen.",
              "Höchste Präzision für die internationale Automotive-Industrie.",
              "Kurze Reaktionszeiten bei Prototypen-Schweißungen."
            ]
          }
        ]
      },
      {
        group: "Tag 2: Region Bratislava & Senec",
        focus: "Automation, SME & Logistics Equipment",
        companies: [
          {
            name: "Volkswagen Slovakia (Zulieferpark)",
            address: "Jána Jonáša 1, 841 07 Bratislava, Slovakia",
            contact: "+421 2 6964 1111",
            web: "volkswagen.sk",
            maps: "https://www.google.com/maps/search/?api=1&query=Jána+Jonáša+1,+841+07+Bratislava",
            desc: "Einer der größten Automobilhersteller der Region.",
            strategy: "Instandhaltungsequipment & Transportgestelle.",
            pitch: [
              "Serienfertigung von Förderanlagen-Modulen und Ladungsträgern.",
              "Robustheit für den 24/7 Fabrikeinsatz.",
              "ISO-zertifizierte Qualität für höchste Prozesssicherheit."
            ],
            travelNext: { distance: "52 km", time: "45 min" }
          },
          {
            name: "CIE Bratislava",
            address: "Ulica viedenská cesta, 851 01 Bratislava, Slovakia",
            contact: "+421 2 6828 2111",
            web: "cie-automotive.com",
            maps: "https://www.google.com/maps/search/?api=1&query=CIE+Bratislava",
            desc: "Spezialist for machining and sub-assemblies.",
            strategy: "Vorfertigung von Schweißbaugruppen für den Antriebsstrang.",
            pitch: [
              "Outsourcing von Schweiß- und Drehteilen.",
              "Hohe Prozessstabilität für Großserien.",
              "SME-Flexibilität innerhalb eines globalen Konzerns."
            ],
            travelNext: { distance: "35 km", time: "30 min" }
          },
          {
            name: "Matador Group (Engineering Division)",
            address: "Bratislavská 47, 917 01 Trnava (Nähe Bratislava)",
            contact: "+421 33 591 1111",
            web: "matador-group.eu",
            maps: "https://www.google.com/maps/search/?api=1&query=Bratislavská+47,+917+01+Trnava",
            desc: "Führender Tier-1 Zulieferer und Engineering-Partner.",
            strategy: "Verlängerte Werkbank für komplexe Schweißvorrichtungen.",
            pitch: [
              "Fertigung von Schweißvorrichtungen für die automatisierte Produktion.",
              "Hohe geometrische Genauigkeit für Roboter-Cells.",
              "Langjährige Erfahrung in der Zusammenarbeit mit EU-Partnern."
            ]
          }
        ]
      },
      {
        group: "Tag 3: Wien & Speckgürtel",
        focus: "Infrastruktur, SME-Stahlbau & Sonderfahrzeuge",
        companies: [
          {
            name: "Siemens Mobility - Leberstraße",
            address: "Leberstraße 34, 1110 Wien",
            contact: "+43 517070",
            web: "siemens.com/mobility",
            maps: "https://www.google.com/maps/search/?api=1&query=Leberstraße+34,+1110+Wien",
            desc: "Zentrum für Stadt- und Straßenbahnfertigung.",
            strategy: "Baugruppen für Fahrwerke und Innenausbau.",
            pitch: [
              "Zertifizierte Schweißqualität für den öffentlichen Personenverkehr.",
              "Kapazität für großvolumige Rahmenstrukturen.",
              "Kurze Wege: Wien ist unser tägliches Einsatzgebiet."
            ],
            travelNext: { distance: "15 km", time: "20 min" }
          },
          {
            name: "Stahlbau Wien GmbH",
            address: "Haidequerstraße 1, 1110 Wien",
            contact: "+43 1 769 66 11",
            web: "stahlbau-wien.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Stahlbau+Wien+GmbH",
            desc: "SME for specialized steel construction and custom solutions.",
            strategy: "Vorfertigung für komplexe innerstädtische Bauprojekte.",
            pitch: [
              "Schnelle Umsetzung von Sonder-Schweißkonstruktionen.",
              "SME-Fokus: Kurze Entscheidungswege für eilige Anforderungen.",
              "Präzise Vorfertigung zur Minimierung der Montagezeit vor Ort."
            ],
            travelNext: { distance: "12 km", time: "18 min" }
          },
          {
            name: "Rosenbauer International AG",
            address: "Paschinger Str. 90, 4060 Leonding (oder Wiener Büro)",
            contact: "+43 732 6794",
            web: "rosenbauer.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Rosenbauer+International+AG",
            desc: "Weltmarktführer für Feuerwehrtechnik.",
            strategy: "Spezialaufbauten für Löschfahrzeuge.",
            pitch: [
              "Leichtbau-Schweißkonstruktionen für maximale Wasserladung.",
              "Korrosionsbeständige Edelstahllösungen für Pumpensysteme.",
              "Partner für Ihre anspruchsvollsten Sonderfahrzeuge."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'slovenia',
    label: 'Slowenien & Adria Tour',
    description: 'Fokus: Hochpräzisions-Stahlbau, SME-Maschinenbau & Automotive-Cluster',
    leads: [
      {
        group: "Tag 1: Maribor & Nord-Ost (Zentralslowenien)",
        focus: "Schwerer Stahlbau & Sondermaschinen",
        companies: [
          { name: "ADK d.o.o.", address: "Hoče", contact: "+386 2 616", web: "adk.si", maps: "https://maps.google.com/?q=ADK+Hoce", desc: "Kran-Komponenten.", strategy: "Ausleger-Outsourcing.", pitch: ["Feinkornbaustahl-Pro.", "ISO 3834-2."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Ledinek", address: "Hoče", contact: "+386 2 613", web: "ledinek.com", maps: "https://maps.google.com/?q=Ledinek+Hoce", desc: "Holzbearbeitung.", strategy: "Maschinen-Rahmen.", pitch: ["Präzisions-Stahlbau.", "SME-Synergie."], travelNext: { distance: "52km", time: "45 min" } },
          { name: "Kovinc d.o.o.", address: "Cerklje", contact: "+386 4 280", web: "kovinc.si", maps: "https://maps.google.com/?q=Kovinc+Lahovce", desc: "Blechbearbeitung SME.", strategy: "Gehäuse-Serien.", pitch: ["Modernster Laserpark.", "Automatisierte Schweißung."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "Akrapovič", address: "Ivančna Gorica", contact: "+386 1 781", web: "akrapovic.com", maps: "https://maps.google.com/?q=Akrapovic+Ivancna+Gorica", desc: "High-End Exhaust.", strategy: "Titan/Inconel Schweißen.", pitch: ["Roboter-Schweißen.", "Premium Performance."], travelNext: { distance: "45km", time: "40 min" } },
          { name: "Kolektor", address: "Idrija/Ljubljana", contact: "+386 5 372", web: "kolektor.com", maps: "https://maps.google.com/?q=Kolektor+Ljubljana", desc: "Automotive/Energie.", strategy: "Transformator-Gehäuse.", pitch: ["Dichtheits-Garantie.", "Kern-Komponente."], travelNext: { distance: "55km", time: "50 min" } },
          { name: "Hidria", address: "Ljubljana", contact: "+43 723 371", web: "hidria.com", maps: "https://maps.google.com/?q=Hidria+Ljubljana", desc: "Automotive Global.", strategy: "Chassis-Komponenten.", pitch: ["Alu-Druckguss-Schweiß.", "IATF Standards."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "IMP Pumps", address: "Komenda", contact: "+386 1 280", web: "imp-pumps.com", maps: "https://maps.google.com/?q=IMP+Pumps", desc: "Pumpentechnik.", strategy: "Pumpengehäuse.", pitch: ["Hydraulische Effizienz.", "Edelstahl-Fokus."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "Donit Tesnit", address: "Medvode", contact: "+386 1 582", web: "donit.eu", maps: "https://maps.google.com/?q=Donit+Tesnit", desc: "Dichtungstechnik.", strategy: "Flansch-Baugruppen.", pitch: ["Druckfestigkeit.", "Spezial-Komponenten."] }
        ]
      },
      {
        group: "Tag 2: Zentralslowenien & Krško Axis",
        focus: "High-Tech Fabrication & SME Hubs",
        companies: [
          { name: "Titus Group", address: "Dekani", contact: "+386 5 6631", web: "titusplus.com", maps: "https://maps.google.com/?q=Titus+Dekani", desc: "Möbel-Beschläge.", strategy: "Präzisions-Mechanik.", pitch: ["Massenserien.", "High-End Precision."], travelNext: { distance: "85km", time: "60 min" } },
          { name: "Metalna Senovo", address: "Senovo", contact: "+386 7 488", web: "metalna-senovo.si", maps: "https://maps.google.com/?q=Metalna+Senovo", desc: "Stahlbau/Hebetechnik.", strategy: "Chassis-Vorfertigung.", pitch: ["Erfahrener SME Partner.", "Schwere Baugruppen."], travelNext: { distance: "115km", time: "1h 20" } },
          { name: "Arcont d.d.", address: "Gornja Radgona", contact: "+386 2 5644", web: "arcont.si", maps: "https://maps.google.com/?q=Arcont+Radgona", desc: "Containerbau.", strategy: "Modulare Rahmen.", pitch: ["Automatisierte Serie.", "Exportschlager."], travelNext: { distance: "25km", time: "30 min" } },
          { name: "Trimo", address: "Trebnje", contact: "+386 7 348", web: "trimo-group.com", maps: "https://maps.google.com/?q=Trimo+Trebnje", desc: "Fassadensysteme.", strategy: "Stahl-Unterkonstruktion.", pitch: ["Design & Statik.", "Großprojekte."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "ETI Izlake", address: "Izlake", contact: "+386 3 5657", web: "eti.si", maps: "https://maps.google.com/?q=ETI+Izlake", desc: "Elektrotechnik.", strategy: "Gehäuse-Module.", pitch: ["Keramik-Metall-Verbund.", "Schutz-Gehäuse."], travelNext: { distance: "45km", time: "40 min" } },
          { name: "Revoz", address: "Novo Mesto", contact: "+386 7 331", web: "revoz.si", maps: "https://maps.google.com/?q=Revoz+Novo+Mesto", desc: "Automobilbau.", strategy: "Vorrichtungen/Gestelle.", pitch: ["Instandhaltung SME.", "Automotive Logistik."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "Krka", address: "Novo Mesto", contact: "+386 7 331", web: "krka.si", maps: "https://maps.google.com/?q=Krka+Novo+Mesto", desc: "Pharma Global.", strategy: "Inox-Rohrleitungen.", pitch: ["GMP-Standard.", "Orbital-Schweißen."], travelNext: { distance: "55km", time: "50 min" } },
          { name: "Domel", address: "Železniki", contact: "+386 4 511", web: "domel.com", maps: "https://maps.google.com/?q=Domel+Zelezniki", desc: "Elektromotoren.", strategy: "Motoren-Gehäuse.", pitch: ["Präzise Vorfertigung.", "Weltmarktführer."] }
        ]
      }
    ]
  },
  {
    id: 'west',
    label: 'West-Tour (Tirol & Vorarlberg)',
    description: 'Fokus: Seilbahntechnik, High-End Maschinenbau & Aluminium-Spezialisten',
    leads: [
      {
        group: "Tag 1: Tiroler Unterland & Innsbruck",
        focus: "Schwerer Maschinenbau & Pisten-Technik",
        companies: [
          { name: "Prinoth", address: "Innsbruck", contact: "+39 0472 901", web: "prinoth.com", maps: "https://maps.google.com/?q=Prinoth+Innsbruck", desc: "Pistenfahrzeuge.", strategy: "Chassis- & Schildbau.", pitch: ["Extreme Belastung.", "Kälteresistente Nähte."], travelNext: { distance: "15km", time: "15 min" } },
          { name: "GE Jenbacher", address: "Jenbach", contact: "+43 5244 600", web: "innio.com", maps: "https://maps.google.com/?q=GE+Jenbacher", desc: "Gasmotoren Global.", strategy: "Aggregat-Rahmen.", pitch: ["Vibrationsfest.", "Massivbau."], travelNext: { distance: "15km", time: "15 min" } },
          { name: "Swarovski", address: "Wattens", contact: "+43 5224 500", web: "swarovski.com", maps: "https://maps.google.com/?q=Swarovski+Wattens", desc: "Kristall/Technik.", strategy: "Maschinengestell-SME.", pitch: ["High-End Standard.", "Präzisions-Stahlbau."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Lindner Traktoren", address: "Kundl", contact: "+43 5338 7420", web: "lindner-traktoren.at", maps: "https://maps.google.com/?q=Lindner+Kundl", desc: "Agrar-SME.", strategy: "Fahrzeug-Chassis.", pitch: ["SME Power.", "Chassis-Kompetenz."], travelNext: { distance: "20km", time: "22 min" } },
          { name: "Felder Group", address: "Hall in Tirol", contact: "+43 5223 5850", web: "felder-group.com", maps: "https://maps.google.com/?q=Felder+Group", desc: "Holzbearbeitung.", strategy: "Maschinen-Betten.", pitch: ["Serien-Präzision.", "Stahlbau SME."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Binderholz", address: "Fügen", contact: "+43 5288 601", web: "binderholz.com", maps: "https://maps.google.com/?q=Binderholz+Fuegen", desc: "Holzindustrie.", strategy: "Sägewerks-Anlagenbau.", pitch: ["Robuster Anlagenbau.", "Verschleißtechnik."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Sandoz", address: "Kundl", contact: "+43 5338 200", web: "sandoz.com", maps: "https://maps.google.com/?q=Sandoz+Kundl", desc: "Pharma/Logistik.", strategy: "Reinraum-Gestelle.", pitch: ["Edelstahl-Expertise.", "GMP Schweißen."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "Tiwag", address: "Innsbruck Region", contact: "+43 512 506", web: "tiwag.at", maps: "https://maps.google.com/?q=Tiwag+Innsbruck", desc: "Wasserkraft.", strategy: "Turbinen-Gehäuse.", pitch: ["Kraftwerks-Statik.", "Massivbau-Partner."] }
        ]
      },
      {
        group: "Tag 2: Rheintal & Vorarlberg",
        focus: "Seilbahnen & High-Tech Aluminium",
        companies: [
          { name: "Doppelmayr", address: "Wolfurt", contact: "+43 5574 604", web: "doppelmayr.com", maps: "https://maps.google.com/?q=Doppelmayr+Wolfurt", desc: "Seilbahnen Global.", strategy: "Kabinen- & Rollenrahmen.", pitch: ["Sicherheits-Schweißung.", "Weltmarktführer-Standard."], travelNext: { distance: "5km", time: "8 min" } },
          { name: "Meusburger", address: "Wolfurt", contact: "+43 5574 6706", web: "meusburger.com", maps: "https://maps.google.com/?q=Meusburger+Wolfurt", desc: "Normalien-Profi.", strategy: "Präzisions-Plattenbau.", pitch: ["Spannungsfrei glühen.", "SME Präzision."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Hydro Extrusion", address: "Nenzing", contact: "+43 5525 601", web: "hydro.com", maps: "https://maps.google.com/?q=Hydro+Nenzing", desc: "Alu-Exzellenz.", strategy: "Alu-Schweißgruppen.", pitch: ["WIG/MIG Spezialist.", "Leichtbau-Fokus."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Liebherr-Nenzing", address: "Nenzing", contact: "+43 5525 606", web: "liebherr.com", maps: "https://maps.google.com/?q=Liebherr+Nenzing", desc: "港口/Raupenkran.", strategy: "Schwerlast-Gittermast.", pitch: ["Massivstahl-Expertise.", "Global Player."], travelNext: { distance: "15km", time: "18 min" } },
          { name: "Blum", address: "Höchst", contact: "+43 5578 705", web: "blum.com", maps: "https://maps.google.com/?q=Blum+Hoechst", desc: "Beschläge Global.", strategy: "Automations-Rahmen.", pitch: ["Höchste Stückzahlen.", "Präzisions-SMEwege."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "Grass GmbH", address: "Höchst", contact: "+43 5578 701", web: "grass.at", maps: "https://maps.google.com/?q=Grass+Hoechst", desc: "Bewegungs-Systeme.", strategy: "Auszug-Komponenten.", pitch: ["Stahl-Präzision.", "Serien-Schweißung."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Alpla Group", address: "Hard", contact: "+43 5574 602", web: "alpla.com", maps: "https://maps.google.com/?q=Alpla+Hard", desc: "Verpackungs-Global.", strategy: "Formenbau-Gestelle.", pitch: ["Werkzeugbau-DNA.", "SME Partnerschaft."], travelNext: { distance: "8km", time: "10 min" } },
          { name: "Konzett Metall", address: "Ludesch", contact: "+43 5550 2434", web: "konzett-metall.at", maps: "https://maps.google.com/?q=Konzett+Ludesch", desc: "SME-Metallprofi.", strategy: "Sonderbau-Module.", pitch: ["SME Speed.", "Customized Steel."] }
        ]
      }
    ]
  },
  {
    id: 'hungary_deep',
    label: 'Ungarn Deep-Dive (Budapest/Süd)',
    description: 'Fokus: Metropolregion Budapest & Agrar-Hub Südungarn',
    leads: [
      {
        group: "Tag 1: Budapest & Central Hub",
        focus: "Automotive Hub & Railway Systems",
        companies: [
          { name: "Knorr-Bremse Rail", address: "Budapest", contact: "+36 1 289", web: "knorr-bremse.hu", maps: "https://maps.google.com/?q=Knorr+Bremse+Budapest", desc: "Bahn-Systeme.", strategy: "Guss-Schweiß-Module.", pitch: ["Sicherheits-Fokus.", "Großserien."], travelNext: { distance: "25km", time: "30 min" } },
          { name: "Magyar Suzuki", address: "Esztergom", contact: "+36 33 541", web: "suzuki.hu", maps: "https://maps.google.com/?q=Suzuki+Esztergom", desc: "Automotive Global.", strategy: "Chassis-Baugruppen.", pitch: ["Automotive Precision.", "JIT Logistik."], travelNext: { distance: "30km", time: "35 min" } },
          { name: "Csepel Metall", address: "Budapest", contact: "+36 1 278", web: "csepelmetall.hu", maps: "https://maps.google.com/?q=Csepel+Metall", desc: "SME Guss/Bau.", strategy: "Gehäuse-Strukturen.", pitch: ["SME Flexibilität.", "Guss-Integration."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "Ganz-Mavag", address: "Budapest", contact: "+36 1 431", web: "ganzmavag.hu", maps: "https://maps.google.com/?q=Ganz+Mavag", desc: "Lokomotivenbau.", strategy: "Rahmen-Strukturen.", pitch: ["Schwerindustrie.", "Bahn-Zertifikat."], travelNext: { distance: "12km", time: "15 min" } },
          { name: "Ikarus Hub", address: "Budapest", contact: "+36 1 432", web: "ikarus.hu", maps: "https://maps.google.com/?q=Ikarus+Budapest", desc: "Bus-Fertigung.", strategy: "Skelettbau-Module.", pitch: ["Rohrrahmen-Spezialist.", "E-Bus Projekt."], travelNext: { distance: "18km", time: "22 min" } },
          { name: "Samsung SDI", address: "Göd", contact: "+36 27 542", web: "samsungsdi.com", maps: "https://maps.google.com/?q=Samsung+SDI+God", desc: "Battery Tech.", strategy: "Transport-Gestelle.", pitch: ["Reinraum-Anforderungen.", "Große Stückzahlen."], travelNext: { distance: "25km", time: "30 min" } },
          { name: "SK Innovation", address: "Komárom", contact: "+36 34 526", web: "skon-global.com", maps: "https://maps.google.com/?q=SK+Innovation+Komarom", desc: "Batterie-Zellen.", strategy: "Anlagen-Rahmenbau.", pitch: ["Precision Welding.", "Tech-Cluster-Nähe."], travelNext: { distance: "28km", time: "35 min" } },
          { name: "Bridgestone", address: "Tatabánya", contact: "+36 34 521", web: "bridgestone.hu", maps: "https://maps.google.com/?q=Bridgestone+Tatabanya", desc: "Reifen-Global.", strategy: "Maschinen-Vorrichtungen.", pitch: ["Instandhaltung SME.", "Spezial-Gestelle."] }
        ]
      },
      {
        group: "Tag 2: Süd-Ungarn Agrar-Axis",
        focus: "Agrar-Technik & Heavy Duty SME",
        companies: [
          { name: "Mercedes-Benz", address: "Kecskemét", contact: "+36 76 805", web: "mercedes-benz.hu", maps: "https://maps.google.com/?q=Mercedes+Kecskemet", desc: "PKW-Werk Global.", strategy: "Halterungen/SME-Teile.", pitch: ["Höchste Optik.", "IATF Standards."], travelNext: { distance: "85km", time: "55 min" } },
          { name: "ContiTech", address: "Szeged", contact: "+36 62 566", web: "contitech.hu", maps: "https://maps.google.com/?q=ContiTech+Szeged", desc: "Industrie-Schläuche.", strategy: "Druck-Flansche.", pitch: ["Öl & Gas Fokus.", "Hochdruck-Nähte."], travelNext: { distance: "12km", time: "18 min" } },
          { name: "Vogel & Noot", address: "Mosonmagyaróvár", contact: "+36 96 577", web: "vogel-noot.info", maps: "https://maps.google.com/?q=Vogel+Noot", desc: "Agrar-SME.", strategy: "Pflug-Chassis.", pitch: ["Verschleißfestbau.", "Borstahl-Schweißen."], travelNext: { distance: "45km", time: "40 min" } },
          { name: "CLAAS Hungaria", address: "Törökszentmiklós", contact: "+36 56 597", web: "claas.hu", maps: "https://maps.google.com/?q=CLAAS+Torokszentmiklos", desc: "Mähdrescher-Hub.", strategy: "Schneidwerks-Rahmen.", pitch: ["Serien-Outsourcing.", "Agrar-Gigant."], travelNext: { distance: "35km", time: "30 min" } },
          { name: "Jungheinrich", address: "Biatorbágy Hub", contact: "+36 23 532", web: "jungheinrich.hu", maps: "https://maps.google.com/?q=Jungheinrich+Biatorbagy", desc: "Intralogistik.", strategy: "Mast-Baugruppen.", pitch: ["Statische Präzision.", "Service-Partner."], travelNext: { distance: "25km", time: "25 min" } },
          { name: "KUKA Automation", address: "Dunaharaszti", contact: "+36 24 501", web: "kuka.hu", maps: "https://maps.google.com/?q=KUKA+Dunaharaszti", desc: "Robotics Hub.", strategy: "Roboter-Basen.", pitch: ["Schwingungsfrei.", "High-Tech Schweißung."], travelNext: { distance: "28km", time: "30 min" } },
          { name: "Axon Automotive", address: "Kecskemét", contact: "+36 76 501", web: "axon-automotive.hu", maps: "https://maps.google.com/?q=Axon+Kecskemet", desc: "Lightweight SME.", strategy: "Carbon-Metall-Baugruppen.", pitch: ["Faserverbund-Technik.", "Innovations-Partner."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "Haba Hungaria", address: "Bicske", contact: "+36 22 565", web: "habasit.hu", maps: "https://maps.google.com/?q=Haba+Hungaria", desc: "Transportbänder.", strategy: "SME Förder-Rahmen.", pitch: ["Wirtschaftlich & Schnell.", "SME Zuverlässigkeit."] }
        ]
      }
    ]
  },
  {
    id: 'croatia',
    label: 'Kroatien Industrie-Tour',
    description: 'Fokus: Zagreb-Industrial-Belt & Adria-Spezialstahlbau (Čakovec Hub)',
    leads: [
      {
        group: "Tag 1: Zagreb & Continental Croatia",
        focus: "Rolling Stock & Heavy Engineering",
        companies: [
          { name: "Končar KEV", address: "Zagreb", contact: "+385 1 3496", web: "koncar-kev.hr", maps: "https://maps.google.com/?q=Koncar+KEV+Zagreb", desc: "Züge & Trams.", strategy: "Chassis-Bau.", pitch: ["Bahn-Schweißung EN 15085.", "SME Modulmontage."], travelNext: { distance: "8km", time: "15 min" } },
          { name: "Đuro Đaković", address: "Zagreb/Slavonski B", contact: "+385 35 444", web: "duro-dakovic.com", maps: "https://maps.google.com/?q=Duro+Dakovic", desc: "Spezialfahrzeuge.", strategy: "Panzerstahl-Baugruppen.", pitch: ["Schwerlast-Waggonbau.", "Security-Cluster."], travelNext: { distance: "12km", time: "20 min" } },
          { name: "HSTEC", address: "Zagreb/Zadar", contact: "+385 23 205", web: "hstec.hr", maps: "https://maps.google.com/?q=HSTEC+Zagreb", desc: "Automation SME.", strategy: "Roboter-Module.", pitch: ["High-Precision SME.", "Automation Hub."], travelNext: { distance: "10km", time: "15 min" } },
          { name: "Rimac Group", address: "Sveta Nedelja", contact: "+385 1 563", web: "rimac-automobili.com", maps: "https://maps.google.com/?q=Rimac+Sveta+Nedelja", desc: "Hypercars/EV.", strategy: "Alu/Carbon-Anbindungen.", pitch: ["Next-Gen Fabrik.", "High-End Technology."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "AD Plastik", address: "Solin Hub", contact: "+385 21 206", web: "adplastik.hr", maps: "https://maps.google.com/?q=AD+Plastik+Solin", desc: "Automotive SME.", strategy: "Metall-Insert-Teile.", pitch: ["Automotive Standard.", "SME Zuliefernetz."], travelNext: { distance: "50km", time: "45 min" } },
          { name: "DOK-ING", address: "Zagreb", contact: "+385 1 248", web: "dok-ing.hr", maps: "https://maps.google.com/?q=DOK-ING+Zagreb", desc: "Robotic Systems.", strategy: "Minenräum-Chassis.", pitch: ["Robustes Engineering.", "Spezialstahl-Focus."], travelNext: { distance: "10km", time: "12 min" } },
          { name: "Rasco", address: "Kalinovac", contact: "+385 48 883", web: "rasco.hr", maps: "https://maps.google.com/?q=Rasco+Kalinovac", desc: "Kommunaltechnik.", strategy: "Kehrmaschinen-Rahmen.", pitch: ["Wirtschaftlicher Gerätebau.", "SME Partner."], travelNext: { distance: "60km", time: "55 min" } },
          { name: "Metalska jezgra", address: "Čakovec", contact: "+385 40 395", web: "metalskajezgra.hr", maps: "https://maps.google.com/?q=Metalska+jezgra+Cakovec", desc: "Innovation Center.", strategy: "Prototypen-Bau.", pitch: ["F&E Partnerschaft.", "SME Tech Region."] }
        ]
      },
      {
        group: "Tag 2: Adria-Region & Küsten-Stahlbau",
        focus: "Maritime-Stahlbau & Offshore SME",
        companies: [
          { name: "Brodosplit", address: "Split", contact: "+385 21 392", web: "brodosplit.hr", maps: "https://maps.google.com/?q=Brodosplit+Split", desc: "Werft Global.", strategy: "Offshore-Stahlbau.", pitch: ["Gigantische Strukturen.", "Marine Korrosionsschutz."], travelNext: { distance: "250km", time: "2h 30 min" } },
          { name: "Viktor Lenac", address: "Rijeka", contact: "+385 51 405", web: "lenac.hr", maps: "https://maps.google.com/?q=Viktor+Lenac+Rijeka", desc: "Shipyard Hub.", strategy: "Stahlbau-Refit.", pitch: ["24/7 Schweiß-Service.", "Zertifizierter Offshorebau."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "Hempel", address: "Umag", contact: "+385 52 701", web: "hempel.com", maps: "https://maps.google.com/?q=Hempel+Umag", desc: "Coatings Global.", strategy: "Vorbehandelter Stahl.", pitch: ["Integrierter Schutz.", "SME Küstenlogistik."], travelNext: { distance: "45km", time: "40 min" } },
          { name: "3. MAJ", address: "Rijeka", contact: "+385 51 611", web: "3maj.hr", maps: "https://maps.google.com/?q=3+MAJ+Rijeka", desc: "Schiffbau.", strategy: "Rumpf-Sektionen.", pitch: ["Massivstahl-Spezialist.", "Großraum-Fertigung."], travelNext: { distance: "20km", time: "25 min" } },
          { name: "Uljanik", address: "Pula", contact: "+385 52 374", web: "uljanik.hr", maps: "https://maps.google.com/?q=Uljanik+Pula", desc: "Spezialschiffbau.", strategy: "Deck-Aufbauten.", pitch: ["Passgenauer Stahlbau.", "Adria Excellence."], travelNext: { distance: "30km", time: "35 min" } },
          { name: "Tehnomont", address: "Pula", contact: "+385 52 214", web: "tehnomont.hr", maps: "https://maps.google.com/?q=Tehnomont+Pula", desc: "Werft & Stahl.", strategy: "Alu-Patrouillenboote.", pitch: ["Alu-Schweiß-Profi.", "SME-Flexibilität."], travelNext: { distance: "35km", time: "40 min" } },
          { name: "Metis d. d.", address: "Rijeka Hub", contact: "+385 51 343", web: "metis.hr", maps: "https://maps.google.com/?q=Metis+Rijeka", desc: "Recycling/Rohstoff.", strategy: "Schrotthandel-Logistik.", pitch: ["Rohstoff-Partner.", "SME Kreislauf."], travelNext: { distance: "15km", time: "20 min" } },
          { name: "Luka Rijeka", address: "Rijeka Port", contact: "+385 51 330", web: "lukarijeka.hr", maps: "https://maps.google.com/?q=Luka+Rijeka", desc: "Logistik-Tor.", strategy: "Hafen-Infrastruktur.", pitch: ["Logistik-Schnittstelle.", "Export-Power."] }
        ]
      }
    ]
  }
];

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [activeTrip, setActiveTrip] = useState(TRIP_TABS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  const whatsappOptions = [
    { 
      label: lang === 'de' ? "Allgemeine Zusammenarbeit" : lang === 'sl' ? "Splošno sodelovanje" : lang === 'hu' ? "Általános együttműködés" : "General Cooperation", 
      message: lang === 'de' ? "Sehr geehrtes Montage Tehnik Team, ich interessiere mich für eine allgemeine Zusammenarbeit und würde gerne mehr über Ihre Kapazitäten erfahren." : "I am interested in a general cooperation...",
      icon: <Handshake className="w-5 h-5" />
    },
    { 
      label: lang === 'de' ? "Preisanfrage / Angebot" : lang === 'sl' ? "Povpraševanje po ceni / ponudba" : lang === 'hu' ? "Árajánlat kérés" : "Price Inquiry / Offer", 
      message: "Hallo, ich hätte gerne ein unverbindliches Angebot...",
      icon: <Euro className="w-5 h-5" />
    },
    { 
      label: lang === 'de' ? "Technische Beratung" : lang === 'sl' ? "Tehnično svetovanje" : lang === 'hu' ? "Technikai tanácsadás" : "Technical Consulting", 
      message: "Guten Tag, wir haben ein technisches Projekt...",
      icon: <Wrench className="w-5 h-5" />
    },
    { 
      label: lang === 'de' ? "Besuchstermin vereinbaren" : lang === 'sl' ? "Dogovor za termin obiska" : lang === 'hu' ? "Látogatási időpont egyeztetése" : "Arrange Visit", 
      message: "Ich habe gesehen, dass Sie aktuell in der Region sind...",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  const openWhatsApp = (msg: string) => {
    const url = `https://wa.me/385921987483?text=${encodeURIComponent(msg)}`;
    window.location.href = url; // Opens in same window as requested earlier
  };

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
            <a href="#leistungen" className="hover:text-[#F27D26] transition-colors">{t.navLeistungen}</a>
            <a href="#qualität" className="hover:text-[#F27D26] transition-colors">{t.navQualitat}</a>
            <a href="#besuchsplan" className="hover:text-[#F27D26] transition-colors">{t.navBesuchsplan}</a>
            <a href="#kontakt" className="hover:text-[#F27D26] transition-colors">{t.navKontakt}</a>
            
            <div className="flex items-center bg-[#1A1A1A] border border-[#2A2A2A] rounded overflow-hidden">
              {(['de', 'en', 'sl', 'hu'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase transition-all ${lang === l ? 'bg-[#F27D26] text-white' : 'text-[#8E9299] hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button className="bg-white text-black px-5 py-2 hover:bg-[#F27D26] hover:text-white transition-all transform hover:-translate-y-0.5">
              {t.sendRequest}
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
            className="fixed inset-0 z-40 bg-[#0F0F0F] pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-8 text-2xl font-bold uppercase mb-12">
              <a href="#leistungen" onClick={() => setIsMenuOpen(false)}>{t.navLeistungen}</a>
              <a href="#qualität" onClick={() => setIsMenuOpen(false)}>{t.navQualitat}</a>
              <a href="#besuchsplan" onClick={() => setIsMenuOpen(false)}>{t.navBesuchsplan}</a>
              <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>{t.navKontakt}</a>
            </div>

            <div className="mt-auto pb-12">
              <p className="text-[10px] text-[#8E9299] uppercase tracking-widest mb-4">Language / Sprache</p>
              <div className="flex bg-[#1A1A1A] border border-[#2A2A2A] rounded overflow-hidden w-fit">
                {(['de', 'en', 'sl', 'hu'] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setIsMenuOpen(false); }}
                    className={`px-4 py-3 text-xs font-bold uppercase transition-all ${lang === l ? 'bg-[#F27D26] text-white' : 'text-[#8E9299] hover:text-white'}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
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
              <Globe className="w-3 h-3" /> {t.heroBadge}
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
              {t.heroTitle1}<br /><span className="text-[#F27D26]">{t.heroTitle2}</span><br />{t.heroTitle3}
            </h1>
            <p className="text-lg md:text-xl text-[#8E9299] max-w-lg mb-10 leading-relaxed">
              {t.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#F27D26] text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#D9661D] transition-all group">
                {t.heroBtnPortfolio} <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="bg-[#25D366] text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#128C7E] transition-all"
              >
                <MessageSquare className="w-5 h-5" /> {t.heroBtnWhatsApp}
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
              <p className="text-[#8E9299] text-lg">{lang === 'de' ? "Wir sind auf hochbelastbare Schweißkonstruktionen spezialisiert, bei denen Qualität und Sicherheit an erster Stelle stehen." : lang === 'sl' ? "Specializirani smo za visoko obremenjene varjene konstrukcije, kjer sta kakovost in varnost na prvem mestu." : lang === 'hu' ? "Nagy teherbírású hegesztett szerkezetekre specializálódtunk, ahol a minőség és a biztonság az első." : "We specialize in heavy-duty welded structures where quality and safety are the top priorities."}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2A] border border-[#2A2A2A]">
            <ServiceCard 
              icon={<Truck className="w-8 h-8" />} 
              title={lang === 'de' ? "LKW-HILFSRAHMEN" : lang === 'sl' ? "POMOŽNI PODVOZJI" : lang === 'hu' ? "TEHERAUTÓ SEGÉDVÁZAK" : "TRUCK SUBFRAMES"} 
              subtitle={lang === 'de' ? "Nutzfahrzeuge" : "Nutzfahrzeuge"}
              description={lang === 'de' ? "Spezialisierte Rahmen für Kipper, Kräne und Asphaltmischer. Robust für maximale Beanspruchung." : lang === 'sl' ? "Specializirani okvirji za prekucnike, žerjave in mešalnike asfalta." : "Specialized frames for tippers, cranes, and asphalt mixers."}
            />
            <ServiceCard 
              icon={<Pickaxe className="w-8 h-8" />} 
              title={lang === 'de' ? "BERGBAU-KOMPONENTEN" : lang === 'sl' ? "KOMPONENTE ZA RUDARSTVO" : lang === 'hu' ? "BÁNYÁSZATI ALKATRÉSZEK" : "MINING COMPONENTS"} 
              subtitle="Mining Equipment"
              description={lang === 'de' ? "Förderer, Rohrleitungen und Maschinenelemente für schwerste Einsatzbedingungen." : lang === 'sl' ? "Transporterji, cevovodi in strojni elementi za najtežje pogoje uporabe." : "Conveyors, pipelines and machine elements for the toughest operating conditions."}
            />
            <ServiceCard 
              icon={<Factory className="w-8 h-8" />} 
              title={lang === 'de' ? "SERIENFERTIGUNG" : lang === 'sl' ? "SERIJSKA PROIZVODNJA" : lang === 'hu' ? "SOROZATGYÁRTÁS" : "SERIES PRODUCTION"} 
              subtitle="Outsourcing Partner"
              description={lang === 'de' ? "Wir übernehmen die Fertigung Ihrer Schweißbaugruppen und entlasten Ihre Montagekapazitäten." : lang === 'sl' ? "Prevzamemo proizvodnjo vaših varjenih sklopov in razbremenimo vaše montažne kapacitete." : "We take over the production of your welded assemblies and relieve your assembly capacities."}
            />
          </div>
        </div>
      </section>

      {/* Sales Arguments / Vorteile Section */}
      <section id="vorteile" className="py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">{t.whyTitle1}<br /><span className="text-[#F27D26]">{t.whyTitle2}</span></h2>
            <p className="text-[#8E9299] max-w-2xl mx-auto text-lg italic text-balance">{t.whySubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {SALES_ARGUMENTS.map((arg, idx) => (
              <div key={idx} className="bg-[#0F0F0F] border border-[#2A2A2A] p-6 hover:border-[#F27D26] transition-all group">
                <div className="mb-4 group-hover:scale-110 transition-transform">{arg.icon}</div>
                <h4 className="text-sm font-black uppercase mb-2 tracking-tight group-hover:text-[#F27D26] transition-colors">{lang === 'de' ? arg.title : lang === 'en' ? (idx === 0 ? "Geographic Proximity" : idx === 1 ? "ISO 3834-3 Certification" : idx === 2 ? "Specialized Expertise" : arg.title) : arg.title}</h4>
                <p className="text-xs text-[#8E9299] leading-relaxed">{lang === 'de' ? arg.desc : lang === 'en' ? (idx === 0 ? "Only 3.5 hours from Linz/Graz (Čakovec). Faster than many domestic partners." : arg.desc) : arg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Plan Section */}
      <section id="besuchsplan" className="py-32 bg-[#151515] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 underline decoration-[#F27D26] decoration-4 underline-offset-8">{t.besuchsplanTitle}</h2>
            <p className="text-[#8E9299] max-w-xl italic mb-10">{t.besuchsplanDesc}</p>
            
            {/* Tab Switched */}
            <div className="flex flex-wrap gap-4 border-b border-[#2A2A2A] pb-0">
              {TRIP_TABS.map((trip) => {
                let label = trip.label;
                if (trip.id === 'slovenia' && lang === 'sl') label = "Slowenien & Adria Tour (SLO)";
                if (trip.id === 'hungary_deep' && lang === 'hu') label = "Ungarn Deep-Dive (HU)";
                
                return (
                  <button
                    key={trip.id}
                    onClick={() => setActiveTrip(trip)}
                    className={`px-8 py-4 font-black uppercase tracking-widest text-sm transition-all relative ${
                      activeTrip.id === trip.id 
                      ? 'text-[#F27D26]' 
                      : 'text-[#8E9299] hover:text-white'
                    }`}
                  >
                    {label}
                    {activeTrip.id === trip.id && (
                      <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 w-full h-[4px] bg-[#F27D26]" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 text-xs font-mono uppercase tracking-widest text-[#F27D26]/70 italic">
              {activeTrip.id === 'slovenia' && lang === 'sl' ? "Fokus: Visokonatančna jeklena konstrukcija, SME strojegradnja & avtomobilski grozd" : 
               activeTrip.id === 'hungary_deep' && lang === 'hu' ? "Fókusz: Budapesti nagyvárosi régió és dél-magyarországi mezőgazdasági központ" : 
               activeTrip.description}
            </div>
          </div>

          <div className="space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTrip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                {activeTrip.leads.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-1 bg-[#F27D26]" />
                      <h3 className="text-2xl font-black uppercase tracking-tight">{group.group} <span className="text-[#8E9299] font-medium text-lg ml-2">[{group.focus}]</span></h3>
                    </div>

                    {/* Graphical Route / Timetable */}
                    <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 mb-8 overflow-x-auto">
                      <div className="flex items-center min-w-[800px] justify-between relative py-12">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#2A2A2A] -translate-y-1/2 z-0" />
                        
                        {group.companies.map((company, cIdx) => (
                          <React.Fragment key={cIdx}>
                            <div className="relative z-10 flex flex-col items-center group/stop text-center w-40">
                              <div className="w-12 h-12 bg-[#0F0F0F] border-2 border-[#F27D26] flex items-center justify-center rounded-full mb-3 group-hover/stop:bg-[#F27D26] transition-all">
                                <span className="text-sm font-black group-hover:text-black">{cIdx + 1}</span>
                              </div>
                              <div className="text-[10px] font-black uppercase tracking-tighter text-white mb-1 line-clamp-1 truncate w-full">
                                {company.name}
                              </div>
                              <div className="text-[9px] text-[#8E9299] uppercase font-mono">
                                {company.address.split(',')[1]}
                              </div>
                            </div>

                            {company.travelNext && (
                              <div className="flex-1 px-4 relative">
                                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#F27D26]/20 -translate-y-1/2" />
                                <div className="flex flex-col items-center bg-[#1A1A1A] relative z-10 py-1">
                                  <div className="flex items-center gap-2 text-[#F27D26]">
                                    <Clock className="w-3 h-3" />
                                    <span className="text-[10px] font-bold">{company.travelNext.time}</span>
                                  </div>
                                  <div className="text-[9px] text-[#8E9299] font-mono">
                                    {company.travelNext.distance}
                                  </div>
                                </div>
                              </div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {group.companies.map((company, cIdx) => (
                        <div key={cIdx} className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 hover:border-[#F27D26]/50 transition-all flex flex-col justify-between group/card">
                          <div>
                            <h4 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover/card:text-[#F27D26] transition-colors">
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
                            <span className="text-[10px] font-black text-[#F27D26] uppercase tracking-widest block mb-2">{t.pitchLabel}</span>
                            <ul className="space-y-2 mb-4">
                              {company.pitch?.map((point: string, pIdx: number) => {
                                let translatedPoint = point;
                                if (lang === 'en') {
                                  if (point.includes('Schweiß')) translatedPoint = point.replace('Schweiß', 'Welding');
                                  if (point.includes('Präzision')) translatedPoint = point.replace('Präzision', 'Precision');
                                  if (point.includes('High-Tech')) translatedPoint = 'High-tech steel construction.';
                                  if (point.includes('Weltmarktführer')) translatedPoint = 'Global market leader partner.';
                                } else if (lang === 'sl') {
                                  if (point.includes('Schweiß')) translatedPoint = 'Varjene baugrupe.';
                                  if (point.includes('Präzision')) translatedPoint = 'Natančna izdelava.';
                                  if (point.includes('Kompetenz')) translatedPoint = 'Visoka kompetenca.';
                                } else if (lang === 'hu') {
                                  if (point.includes('Präzision')) translatedPoint = 'Precíziós gyártás.';
                                  if (point.includes('Qualität')) translatedPoint = 'Kiváló minőség.';
                                }
                                return (
                                  <li key={pIdx} className="text-[11px] leading-tight flex items-start gap-2">
                                    <BadgeCheck className="w-3 h-3 text-[#25D366] shrink-0 mt-0.5" />
                                    <span className="text-[#E4E3E0]">{translatedPoint}</span>
                                  </li>
                                );
                              })}
                            </ul>
                            <span className="text-[10px] font-black text-[#F27D26] uppercase tracking-widest block mb-1">{t.strategyLabel}</span>
                            <p className="text-[11px] italic text-[#8E9299] leading-relaxed">
                              {lang === 'sl' && activeTrip.id === 'slovenia' ? "Strateški partner za SME poddobavo." :
                               lang === 'hu' && activeTrip.id === 'hungary_deep' ? "Stratégiai partner a beszállítói láncban." :
                               company.strategy}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-20 p-8 border border-[#F27D26]/30 bg-[#F27D26]/5">
            <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
              <Briefcase className="text-[#F27D26]" /> {t.tipsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Tip icon={<MapPin />} title={lang === 'de' ? "Lokaler Vorteil" : "Local Advantage"} text={lang === 'de' ? 'Sagen Sie nicht "wir sind aus Kroatien", sagen Sie "Wir sind aus Čakovec, nur 3,5h entfernt".' : 'Don\'t say "we are from Croatia", say "We are from Čakovec, only 3.5h away".'} />
              <Tip icon={<ShieldCheck />} title={lang === 'de' ? "Referenzen" : "References"} text={lang === 'de' ? "Betonen Sie unsere Arbeit für Österreich und Schweden. ISO-Zertifikat als Qualitätsgarantie." : "Emphasize our work for Austria and Sweden. ISO certificate as quality guarantee."} />
              <Tip icon={<Wrench />} title={lang === 'de' ? "Eigene Fertigung" : "Own Production"} text={lang === 'de' ? "Hinweis auf unsere 1200m² Halle. Wir haben die Kapazität und Stabilität für Großaufträge." : "Reference to our 1200m² hall. We have the capacity and stability for large orders."} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 md:p-16 flex flex-col lg:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8">{t.contactTitle1}<br /><span className="text-[#F27D26]">{t.contactTitle2}</span></h2>
              <p className="text-[#8E9299] mb-12 max-w-md">{t.contactDesc}</p>
              
              <div className="space-y-6">
                <div className="pb-4 border-b border-[#2A2A2A]">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F27D26] mb-1">{t.ansprechpartner}</div>
                  <div className="font-black text-2xl tracking-tight">Siniša Špoljarić <span className="text-sm font-normal text-[#8E9299]"> – {t.direktor}</span></div>
                </div>
                <ContactInfo icon={<Phone />} title={lang === 'de' ? "DIREKTKONTAKT" : "DIRECT CONTACT"} text="+385 92 1987483" />
                <ContactInfo icon={<Mail />} title={lang === 'de' ? "E-MAIL ANFRAGE" : "EMAIL INQUIRY"} text="info@montagetehnik.com" />
                <ContactInfo icon={<MapPin />} title={lang === 'de' ? "STANDORT" : "LOCATION"} text={lang === 'de' ? "Zagrebačka 99, 40000 Čakovec, Kroatien" : "Zagrebačka 99, 40000 Čakovec, Croatia"} />
                
                <div className="pt-6">
                  <button 
                    onClick={() => setIsWhatsAppModalOpen(true)}
                    className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-[#25D366]/20 group"
                  >
                    <MessageSquare className="w-6 h-6" /> {lang === 'de' ? "JETZT ÜBER WHATSAPP KOOPERIEREN" : lang === 'sl' ? "SODELUJTE PREKO WHATSAPPA" : lang === 'hu' ? "EGYÜTTMŰKÖDÉS WHATSAPP-ON" : "COOPERATE VIA WHATSAPP NOW"}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-[450px] bg-[#25D366]/5 border border-[#25D366]/20 p-10 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageSquare className="w-40 h-40" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-[#25D366] text-black text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-6">
                  Main Channel
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{t.whatsAppPrefered1}<br /><span className="text-[#25D366]">{t.whatsAppPrefered2}</span></h3>
                <p className="text-sm text-[#8E9299] mb-8 leading-relaxed">
                  {t.whatsAppPreferedDesc}
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover/item:bg-[#25D366] group-hover/item:text-white transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase">{t.antwortgarantie}</div>
                      <div className="text-[10px] text-[#8E9299]">{t.antwortgarantieTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover/item:bg-[#25D366] group-hover/item:text-white transition-colors">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase">{t.visuellesUpdate}</div>
                      <div className="text-[10px] text-[#8E9299]">{t.visuellesUpdateDesc}</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsWhatsAppModalOpen(true)}
                  className="w-full bg-[#25D366] text-white py-5 font-black uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-2xl hover:shadow-[#25D366]/40 flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" /> {t.chatStarten}
                </button>
              </div>
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

      {/* WhatsApp Modal */}
      <AnimatePresence>
        {isWhatsAppModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] w-full max-w-md overflow-hidden relative"
            >
              <div className="bg-[#25D366] p-6 flex justify-between items-center">
                <div className="flex items-center gap-3 text-[#0F0F0F]">
                  <MessageSquare className="w-6 h-6 fill-current" />
                  <h3 className="font-black uppercase tracking-tighter text-xl">{lang === 'de' ? "WhatsApp Kontakt" : lang === 'sl' ? "WhatsApp Kontakt" : lang === 'hu' ? "WhatsApp Kapcsolat" : "WhatsApp Contact"}</h3>
                </div>
                <button onClick={() => setIsWhatsAppModalOpen(false)} className="text-[#0F0F0F] hover:rotate-90 transition-transform">
                  <X />
                </button>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs text-[#8E9299] uppercase font-bold tracking-widest mb-4">{lang === 'de' ? "Wählen Sie einen Betreff:" : lang === 'sl' ? "Izberite zadevo:" : lang === 'hu' ? "Válasszon témát:" : "Choose a subject:"}</p>
                {whatsappOptions.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => openWhatsApp(opt.message)}
                    className="w-full flex items-center gap-4 p-4 bg-[#0F0F0F] border border-[#2A2A2A] hover:border-[#25D366] hover:bg-[#25D366]/5 text-left transition-all group"
                  >
                    <div className="text-[#8E9299] group-hover:text-[#25D366]">{opt.icon}</div>
                    <span className="font-bold text-sm uppercase tracking-tight">{opt.label}</span>
                    <ChevronRight className="w-4 h-4 ml-auto opacity-30 group-hover:opacity-100 group-hover:translate-x-1" />
                  </button>
                ))}
              </div>

              <div className="p-6 pt-0 text-[10px] text-center text-[#8E9299] uppercase tracking-widest opacity-60">
                {lang === 'de' ? "Sie werden direkt zur WhatsApp Web/App weitergeleitet." : lang === 'sl' ? "Preusmerjeni boste neposredno v WhatsApp splet ali aplikacijo." : lang === 'hu' ? "Közvetlenül a WhatsApp Web/App-hoz fog irányítani." : "You will be redirected directly to WhatsApp Web/App."}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
