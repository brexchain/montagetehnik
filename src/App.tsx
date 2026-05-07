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
        group: "Region Linz & Leonding",
        focus: "Spezialfahrzeuge & Antriebstechnik",
        companies: [
          {
            name: "Zeko Mobility e.U.",
            address: "Welser Str. 83, 4060 Leonding",
            contact: "+43 664 1601614",
            web: "zekomobility.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Welser+Str.+83,+4060+Leonding",
            desc: "Spezielle Aufbauten und Modifikationen für PKW und Nutzfahrzeuge.",
            strategy: "Vorfertigung von tragenden Metallelementen und Schweißkonsolen anbieten.",
            pitch: [
              "Präzise Fertigung von Schweißkonsolen für Sonderaufbauten.",
              "Schnelle Lieferung innerhalb von 24h bei Serienproduktion.",
              "Erfahrung in der Modifikation von Nutzfahrzeugen."
            ],
            travelNext: { distance: "5.4 km", time: "10 min" }
          },
          {
            name: "TAT-TECHNOM Antriebstechnik GmbH",
            address: "Technologiering 13-17, 4060 Leonding",
            contact: "+43 7229 64840",
            web: "tat.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Technologiering+13-17,+4060+Leonding",
            desc: "Automatisierung, Antriebstechnik und Verpackungslösungen.",
            strategy: "Präzise Gestelle und Rahmen für vibrationsanfällige Antriebe.",
            pitch: [
              "ISO 3834-3 zertifizierte Schweißbaugruppen für Vibrationsresistenz.",
              "Fertigung von Maschinengestellen nach präzisen Toleranzen.",
              "Skalierbare Serienfertigung für Automatisierungskomponenten."
            ],
            travelNext: { distance: "8.2 km", time: "12 min" }
          },
          {
            name: "WD-Metalltechnik GmbH",
            address: "Roseggerstraße 12a, 4050 Traun",
            contact: "+43 699 172 922 44",
            web: "wd-metalltechnik.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Roseggerstraße+12a,+4050+Traun",
            desc: "Klassische Metallbearbeitung, Drehen und Fräsen.",
            strategy: "Outsourcing-Partner für Serienproduktion von Schweißbaugruppen.",
            pitch: [
              "Zuverlässige 'Verlängerte Werkbank' für Schweißüberhang.",
              "Fachkompetenz in der Serienfertigung komplexer Baugruppen.",
              "Transparente EU-Preiskalkulation ohne Logistik-Risiken."
            ]
          }
        ]
      },
      {
        group: "Zentralraum & A9 Route",
        focus: "Heavy Duty, Agrar & SME-Fertigung",
        companies: [
          {
            name: "Ernst Riedler Fahrzeugbau",
            address: "Bahnleiten 1, 4664 Oberweis",
            contact: "+43 7612 76040",
            web: "riedler.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Bahnleiten+1,+4664+Oberweis",
            desc: "Stärkste Aufbauten für Forst-LKW und Holztransport.",
            strategy: "Unser Kern-Business: LKW-Hilfsrahmen für maximale Belastung.",
            pitch: [
              "Spezialisierung auf hochbelastbare Forst-LKW-Hilfsrahmen.",
              "Zertifizierte Materialqualität für sicherheitsrelevante Bauteile.",
              "Konstruktive Erfahrung mit Greifer- und Kran-Integrationen."
            ],
            travelNext: { distance: "32 km", time: "28 min" }
          },
          {
            name: "Hofmann Metalltechnik GmbH",
            address: "Gewerbepark 5, 4522 Sierning",
            contact: "+43 7259 3131",
            web: "hofmann-metall.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Gewerbepark+5,+4522+Sierning",
            desc: "SME-Spezialist für Blechbearbeitung und Schweißgruppen.",
            strategy: "Fokus auf Outsourcing-Serien für Gehäuse und Rahmen.",
            pitch: [
              "Flexibler SME-Partner für mittelgroße Schweißserien.",
              "Modernster Maschinenpark für Vorfertigung (Laserschneiden/Abkanten).",
              "Ideale Ergänzung für Ihre Kapazitätsspitzen."
            ],
            travelNext: { distance: "28 km", time: "22 min" }
          },
          {
            name: "Vakutec Gülletechnik GmbH",
            address: "Pernsteinerstraße 14, 4552 Nußbach",
            contact: "+43 7583 8317",
            web: "vakutec.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Pernsteinerstraße+14,+4552+Nußbach",
            desc: "Gülletechnik und Vakuumbehälter.",
            strategy: "Edelstahlbehälter und Rohrleitungen für Agrar-Technik.",
            pitch: [
              "Expertise in der Fertigung absolut dichter Edelstahlbehälter.",
              "Know-how aus dem Bergbau (Pipelines) auf Agrar-Equipment übertragbar.",
              "Hochwertige Schweißnähte für extreme Druckbeständigkeit."
            ]
          }
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
        group: "Tag 1: Graz & Umland",
        focus: "Bergbau, Stahlbau & Schmiedetechnik",
        companies: [
          {
            name: "Binder+Co AG",
            address: "Grazer Straße 19-25, 8200 Gleisdorf",
            contact: "+43 3112 8030",
            web: "binder-co.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Grazer+Straße+19-25,+8200+Gleisdorf",
            desc: "Weltmarktführer in der Aufbereitungs- und Siebtechnik.",
            strategy: "Synergieeffekt Bergbau-Know-how. Schweißbaugruppen für Siebanlagen.",
            pitch: [
              "Schweißkonstruktionen für extreme Vibrationssiebe und Brecher.",
              "Expertise in verschleißfesten Materialien (Hardox/Mangan).",
              "Fertigung von Anlagen-Modulen zur Entlastung deren Eigenfertigung."
            ],
            travelNext: { distance: "58 km", time: "42 min" }
          },
          {
            name: "Krenhof GmbH",
            address: "Krenhofstraße 37, 8570 Köflach",
            contact: "+43 3144 25050",
            web: "krenhof.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Krenhofstraße+37,+8570+Köflach",
            desc: "Präzisionsschmiedeteile für Auto-Industrie und Landwirtschaft.",
            strategy: "Schmiedestücke zu komplexen Bauteilen verschweißen.",
            pitch: [
              "Verschweißen von Schmiedeteilen zu komplexen Fertigkomponenten.",
              "Angebot kompletter mechanischer Endbearbeitung & Vor-Montage.",
              "Prozesssicherheit bei Serien mit höchsten Stückzahlen."
            ],
            travelNext: { distance: "45 km", time: "38 min" }
          },
          {
            name: "Maschinenfabrik Berger GmbH",
            address: "Wiener Straße 35, 8720 Knittelfeld",
            contact: "+43 3512 82442",
            web: "m-berger.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Wiener+Straße+35,+8720+Knittelfeld",
            desc: "Spezialmaschinen und Komponenten für Bergbau und Industrie.",
            strategy: "Direkte Verbindung zum Bergbau-Know-how nutzen.",
            pitch: [
              "Spezialist für Bergbau-Equipment (Förderer, Verschleißteile).",
              "Robustheit durch ISO 3834-3 Standards für härtesten Einsatz.",
              "Kurze Logistikwege für Ersatzteil-Fertigung (nur 3,5h Logistik)."
            ]
          }
        ]
      },
      {
        group: "Tag 2: Süd-Steiermark & Hartberg",
        focus: "Fahrzeugbau & Großstahlbau",
        companies: [
          {
            name: "Komplojer GmbH",
            address: "Grazer Straße 80, 8131 Frohnleiten",
            contact: "+43 3126 50500",
            web: "komplojer.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Grazer+Straße+80,+8131+Frohnleiten",
            desc: "Fahrzeugbau & Kipper-Spezialist.",
            strategy: "Fokus auf LKW-Hilfsrahmen und Kipper-Chassis.",
            pitch: [
              "Fertigung von Unterbau-Komponenten für schwere Kipper-Fahrzeuge.",
              "Verwendung von hochfestem Feinkornbaustahl für Gewichtsreduktion.",
              "Vor-Schweißen kompletter Brückenrahmen inklusive Anbauteilen."
            ],
            travelNext: { distance: "82 km", time: "58 min" }
          },
          {
            name: "Grabner Stahl- und Fahrzeugbau",
            address: "Am Ökopark 11, 8230 Hartberg",
            contact: "+43 3332 63101",
            web: "grabner-stahlbau.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Am+Ökopark+11,+8230+Hartberg",
            desc: "Große Stahlkonstruktionen für Industriehallen und Spezialfahrzeuge.",
            strategy: "Fertigung von Teilsegmenten für große Stahlbauprojekte.",
            pitch: [
              "Fertigung präziser Teilsegmente für Hallen- und Fahrzeugbau.",
              "Entlastung Ihrer Montagekapazitäten durch Vorfertigung.",
              "Extreme Termintreue für Ihre terminabhängigen Projekte."
            ],
            travelNext: { distance: "74 km", time: "52 min" }
          },
          {
            name: "Kohlbacher GmbH",
            address: "Roseggerstraße 11, 8661 Ried im Mürztal",
            contact: "+43 3858 3500",
            web: "kohlbacher.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Roseggerstraße+11,+8661+Ried+im+Mürztal",
            desc: "Metalltechnik und Großstahlbau.",
            strategy: "Vorfertigung von Metall-Elementen für den Modulbau.",
            pitch: [
              "Serienfertigung von tragenden Bauelementen für großformatige Bauten.",
              "Hohe Fertigungsgenauigkeit für reibungslose Endmontage.",
              "Wirtschaftlicher Vorteil bei gleichbleibend hoher Qualität."
            ]
          }
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
        group: "Tag 1: Wiener Becken",
        focus: "Bahntechnik & Industrie-Vorfertigung",
        companies: [
          {
            name: "Plasser & Theurer",
            address: "Johannesgasse 3, 1010 Wien",
            contact: "+43 1 515720",
            web: "plassertheurer.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Johannesgasse+3,+1010+Wien",
            desc: "Weltmarktführer für Gleisbaumaschinen.",
            strategy: "Präzisions-Schweißbaugruppen für den Gleisbau.",
            pitch: [
              "Hunderte Tonnen Erfahrung in massiven Schweißbaugruppen.",
              "ISO 3834-3 Standard für sicherheitskritische Bahn-Infrastruktur.",
              "Kapazität für großformatige Rahmen-Elemente in Serie."
            ],
            travelNext: { distance: "72 km", time: "52 min" }
          },
          {
            name: "Worthington Industries",
            address: "Marktstraße 12, 3291 Kienberg bei Gaming",
            contact: "+43 7485 606",
            web: "worthingtonindustries.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Marktstraße+12,+3291+Kienberg",
            desc: "Spezialist für Druckbehälter und Zylinder.",
            strategy: "Zulieferung von geschweißten Druckbehälter-Komponenten.",
            pitch: [
              "Hochdruck-Schweißerfahrung (TÜV-zertifiziert).",
              "Automatisierte Serienfertigung von zylindrischen Körpern.",
              "Entlastung Ihrer Schweißerei durch spezialisierte Outsourcing-Lose."
            ],
            travelNext: { distance: "55 km", time: "45 min" }
          },
          {
            name: "Schöller-Bleckmann Oilfield",
            address: "Hauptstraße 2, 2630 Ternitz",
            contact: "+43 2630 3150",
            web: "sbo.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Hauptstraße+2,+2630+Ternitz",
            desc: "Hochpräzisionsteile für die Öl- und Gasindustrie.",
            strategy: "Verschleißfeste Bauteile aus dem Bergbau-Sektor übertragen.",
            pitch: [
              "Übertragbares Know-how aus der Bergbau-Pipeline-Fertigung.",
              "Spezialisierung auf hochlegierte Stähle und dichte Nähte.",
              "Prüfverfahren nach höchsten internationalen Standards."
            ]
          }
        ]
      },
      {
        group: "Tag 2: West-NÖ (Amstetten/St. Pölten)",
        focus: "Schalungsbau & SME-Metalltechnik",
        companies: [
          {
            name: "Doka GmbH",
            address: "Josef Umdasch Platz 1, 3300 Amstetten",
            contact: "+43 7472 6050",
            web: "doka.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Josef+Umdasch+Platz+1,+3300+Amstetten",
            desc: "Weltmarktführer in Schalungstechnik.",
            strategy: "Serienfertigung von tragenden Metallelementen.",
            pitch: [
              "Automatisierte Serienfertigung von Schalungs-Komponenten.",
              "Robuste Schweißnähte für den extremen Baustellen-Einsatz.",
              "Skalierung Ihrer Produktion durch unsere 1200m² Kapazität."
            ],
            travelNext: { distance: "42 km", time: "35 min" }
          },
          {
            name: "Hauser Metallbau GmbH",
            address: "Gewerbestraße 5, 3140 Pottenbrunn",
            contact: "+43 2742 4220",
            web: "hauser-metallbau.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Gewerbestraße+5,+3140+Pottenbrunn",
            desc: "Dynamic SME for steel structure and facade elements.",
            strategy: "Vorfertigung von Stahlbau-Komponenten für Modulbauten.",
            pitch: [
              "SME-Partnerschaft für präzise Stahlbau-Fertigung.",
              "Vorfertigung von montagefertigen Einheiten zur Baustellen-Effizienz.",
              "Persönliche Betreuung und flache Hierarchien für schnelle Entscheidungen."
            ],
            travelNext: { distance: "85 km", time: "55 min" }
          },
          {
            name: "Knorr-Bremse GmbH",
            address: "Beethovengasse 43-45, 2340 Mödling",
            contact: "+43 2236 4090",
            web: "knorr-bremse.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Beethovengasse+43-45,+2340+Mödling",
            desc: "Systeme für Schienen- und Nutzfahrzeuge.",
            strategy: "Baugruppen für Bremssysteme und Getriebegehäuse.",
            pitch: [
              "Komplexe Gehäusefertigung nach strengsten Automotive-Normen.",
              "Termintreuere Logistik als Partner aus der Nachbarregion.",
              "Vormontage von Baugruppen zur direkten Linien-Integration."
            ]
          }
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
        group: "Tag 1: Salzburg Flachgau",
        focus: "Kranbau & SME Maschinenbau",
        companies: [
          {
            name: "Palfinger AG",
            address: "Lamprechtshausener Bundesstr. 8, 5020 Salzburg",
            contact: "+43 662 22810",
            web: "palfinger.ag",
            maps: "https://www.google.com/maps/search/?api=1&query=Lamprechtshausener+Bundesstr.+8,+5020+Salzburg",
            desc: "Weltmarktführer für hydraulische Hebe- und Ladesysteme.",
            strategy: "Zulieferer für hochfeste Kran-Teile & Hilfsrahmen.",
            pitch: [
              "Spezialist für LKW-Hilfsrahmen (unser Kernmarkt).",
              "Verarbeitung von hochfestem Feinkornbaustahl (S700-S960).",
              "ISO-zertifizierte Qualität für tragende Hydraulik-Elemente."
            ],
            travelNext: { distance: "18 km", time: "22 min" }
          },
          {
            name: "GUGG Maschinenbau GmbH",
            address: "Technolog Park 1, 5261 Uttendorf",
            contact: "+43 7724 2331",
            web: "gugg.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Technolog+Park+1,+5261+Uttendorf",
            desc: "SME for special machinery and environmental technology.",
            strategy: "Fertigung von robusten Gestellen für Kommunalfahrzeuge.",
            pitch: [
              "Flexible SME Strukturen für anspruchsvolle Sonderbau-Lose.",
              "Erfahrung in der Schweißtechnik für Winterdienst-Fahrzeuge.",
              "Partner für die externe Vorfertigung von Anbau-Komponenten."
            ],
            travelNext: { distance: "25 km", time: "28 min" }
          },
          {
            name: "Wacker Neuson SE",
            address: "Wacker-Neuson-Straße 1, 5111 Lamprechtshausen",
            contact: "+43 6274 200210",
            web: "wackerneuson.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Wacker-Neuson-Straße+1,+5111+Lamprechtshausen",
            desc: "Kompakte Baumaschinen (Bagger/Dumper).",
            strategy: "Fertigung von Chassis-Teilen & Schaufel-Armen.",
            pitch: [
              "Robuste Schweißgruppen für Bagger-Arme und Chassis.",
              "Erfolgreicher Export-Track-Record in Schweden/Norwegen.",
              "24h-Service-Option bei dringenden Reparaturbedarfen."
            ]
          }
        ]
      },
      {
        group: "Tag 2: Innviertel & Bayern Border",
        focus: "Trailer, Landtechnik & Automation",
        companies: [
          {
            name: "Schwarzmüller Group",
            address: "Hanzing 11, 4785 Freinberg",
            contact: "+43 7713 8000",
            web: "schwarzmueller.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Hanzing+11,+4785+Freinberg",
            desc: "Premiumhersteller von gezogenen Nutzfahrzeugen.",
            strategy: "Kooperation bei Fahrgestellen für Sonderfahrzeuge.",
            pitch: [
              "Partner für komplexe Anhänger-Chassis & Aufbauten.",
              "Leichtbau-Kompetenz durch präzise Dünnblech-Verschweißung.",
              "Große Kapazität für Serien-Trailer-Komponenten."
            ],
            travelNext: { distance: "68 km", time: "52 min" }
          },
          {
            name: "Fill Gesellschaft m.b.H.",
            address: "Fillstraße 1, 4912 Gurten",
            contact: "+43 7757 7010",
            web: "fill.co.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Fillstraße+1,+4912+Gurten",
            desc: "Leading machinery and plant engineering company.",
            strategy: "Vorfertigung für automatisierte Montage-Linien.",
            pitch: [
              "Verlängerte Werkbank für hochpräzise Automations-Gestelle.",
              "Full-Service-Ansatz: Schweißen, mechanische Bearbeitung & Lackierung.",
              "Langfristige Partnerschaft für Serienbau-Projekte."
            ],
            travelNext: { distance: "45 km", time: "38 min" }
          },
          {
            name: "Liebherr-Werk Bischofshofen",
            address: "Dr. Hans Liebherr-Straße 4, 5500 Bischofshofen",
            contact: "+43 50809 10",
            web: "liebherr.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Dr.+Hans+Liebherr-Straße+4,+5500+Bischofshofen",
            desc: "Kompetenzzentrum für Radlader.",
            strategy: "Großbaugruppen für schwere Erdbewegungs-Maschinen.",
            pitch: [
              "Bergbau-DNA: Wir verstehen extrem schwere Beanspruchungen.",
              "Schweißzertifikat ISO 3834-3 für sicherheitsrelevante Teile.",
              "Logistik-Anbindung Čakovec nach Salzburg perfekt eingespielt."
            ]
          }
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
        group: "Tag 1: Maribor & Nord-Ost (Hoče/Celje)",
        focus: "Schwerer Stahlbau & Sondermaschinen",
        companies: [
          {
            name: "ADK d.o.o.",
            address: "Miklavška cesta 59, 2311 Hoče, Slovenia",
            contact: "+386 2 616 57 00",
            web: "adk.si",
            maps: "https://www.google.com/maps/search/?api=1&query=ADK+d.o.o.+Hoče",
            desc: "Spezialist für komplexe Stahlkonstruktionen und Mobilkrane.",
            strategy: "Zulieferung von Krankomponenten und Auslegern.",
            pitch: [
              "Herausragende Erfahrung im Schweißen von Feinkornbaustählen.",
              "Partner für Ihre schwersten Last-Anforderungen.",
              "Logistische Anbindung Čakovec (nur 45 min)."
            ],
            travelNext: { distance: "8 km", time: "12 min" }
          },
          {
            name: "Ledinek Engineering d.o.o.",
            address: "Bohova 71, 2311 Hoče, Slovenia",
            contact: "+386 2 613 00 61",
            web: "ledinek.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Ledinek+Engineering+Hoče",
            desc: "Weltmarktführer für Holzbearbeitungsmaschinen.",
            strategy: "Rahmenbau und Vorfertigung für komplexe Hobelanlagen.",
            pitch: [
              "Präzise Maschinenrahmen für Hochgeschwindigkeits-Anlagen.",
              "SME-Ebene Kooperation für kundenspezifische Lösungen.",
              "Hohe Integrationstiefe von Schweiß- und Mechanik-Komponenten."
            ],
            travelNext: { distance: "52 km", time: "45 min" }
          },
          {
            name: "Kovinc d.o.o.",
            address: "Lahovče 74, 4207 Cerklje na Gorenjskem (Nähe Celje Axis)",
            contact: "+386 4 280 60 00",
            web: "kovinc.si",
            maps: "https://www.google.com/maps/search/?api=1&query=Kovinc+d.o.o.+Lahovče",
            desc: "Dynamisches SME für Blechbearbeitung und Schweißgruppen.",
            strategy: "SME-Partner für Klein- und Mittelserien.",
            pitch: [
              "Modernste Laser- und Abkanttechnik für Ihre Vorfertigung.",
              "Flexibles Outsourcing für Montage-Teile und Halterungen.",
              "Wettbewerbsfähiger Partner mit höchster Flexibilität."
            ]
          }
        ]
      },
      {
        group: "Tag 2: Zentralslowenien (Ljubljana & Krško)",
        focus: "High-Tech Fabrication & SME Hubs",
        companies: [
          {
            name: "Titus Group (Titus d.o.o.)",
            address: "Dekani 5, 6271 Dekani (Ljubljana Region)",
            contact: "+386 5 66 31 000",
            web: "titusplus.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Titus+Dekani",
            desc: "Hidden Champion für Beschläge und Systemlösungen.",
            strategy: "Vorfertigung von Präzisions-Mechanik-Rahmen.",
            pitch: [
              "Zulieferung von präzisen Metallkomponenten für Dämpfungssysteme.",
              "SME-Fokus auf Qualitätskonstanz und Termintreue.",
              "Engineering-Support für Ihre Schweiß-Herausforderungen."
            ],
            travelNext: { distance: "85 km", time: "58 min" }
          },
          {
            name: "Metalna Senovo d.o.o.",
            address: "Titova cesta 11, 8281 Senovo",
            contact: "+386 7 488 16 00",
            web: "metalna-senovo.si",
            maps: "https://www.google.com/maps/search/?api=1&query=Metalna+Senovo",
            desc: "Spezialist für Hebetechnik und Stahlbau.",
            strategy: "Kapazitätserweiterung für Ihre schweren Chassis-Baugruppen.",
            pitch: [
              "Erfahrener SME-Partner für Kran- und Hebetechnik-Teile.",
              "Zertifizierte Schweißqualität für dynamisch belastete Teile.",
              "Direkte Produktionssynergie mit Ihrem kroatischen Werk."
            ],
            travelNext: { distance: "115 km", time: "1h 25 min" }
          },
          {
            name: "Arcont d.d.",
            address: "Ljutomerska cesta 29, 9250 Gornja Radgona",
            contact: "+386 2 56 44 210",
            web: "arcont.si",
            maps: "https://www.google.com/maps/search/?api=1&query=Arcont+Gornja+Radgona",
            desc: "Größter Hersteller von Wohn- und Bürocontainern.",
            strategy: "Serienfertigung von Rahmenstrukturen für Modulbau.",
            pitch: [
              "Automatisierte Rahmenfertigung für großformatige Container.",
              "Hohe Skalierbarkeit für Ihre Bau- und Modulprojekte.",
              "Wirtschaftlich optimierte Schweißprozesse für den Export."
            ]
          }
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
          {
            name: "Prinoth GmbH",
            address: "Sterzinger Str. 1, 6020 Innsbruck (oder Sterzing HQ)",
            contact: "+39 0472 901000",
            web: "prinoth.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Prinoth+Innsbruck",
            desc: "Weltweit führend bei Pistenfahrzeugen.",
            strategy: "Zulieferung von massiven Fahrgestellen und Schieber-Rahmen.",
            pitch: [
              "Härteste Belastungsproben für Ihre Schweißnähte (Arktis-Einsatz).",
              "SME-Partnerschaft für die Vorfertigung von Unterbau-Komponenten.",
              "Qualität für extreme Kälte-Zähigkeit."
            ],
            travelNext: { distance: "35 km", time: "30 min" }
          },
          {
            name: "Lindner Traktorenwerk",
            address: "Lindnerstraße 1, 6250 Kundl",
            contact: "+43 5338 7420",
            web: "lindner-traktoren.at",
            maps: "https://www.google.com/maps/search/?api=1&query=Lindner+Traktoren+Kundl",
            desc: "SME-Erfolgsgeschichte im Traktorenbau.",
            strategy: "Vorfertigung von Kabinen-Rahmen und Getriebe-Haltern.",
            pitch: [
              "Flexibilität einer SME gepaart mit industrieller Präzision.",
              "Partner für die Serienfertigung von Chassis-Teilen.",
              "Langfristige Zusammenarbeit auf SME-Augenhöhe."
            ],
            travelNext: { distance: "12 km", time: "15 min" }
          },
          {
            name: "Binderholz GmbH",
            address: "Binderstraße 3, 6263 Fügen",
            contact: "+43 5288 601",
            web: "binderholz.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Binderholz+Fügen",
            desc: "Führend in der Massivholz-Verarbeitung und Anlagenbau.",
            strategy: "Maschinengestelle für Sägewerk-Automatisierung.",
            pitch: [
              "Stabile Rahmenkonstruktionen für großformatige Anlagen.",
              "Vorfertigung für Ihre Engineering-Sparte.",
              "Hohe Liefertreue für Ihre internationalen Baustellen."
            ]
          }
        ]
      },
      {
        group: "Tag 2: Rheintal & Vorarlberg",
        focus: "Seilbahnen & High-Tech Aluminium",
        companies: [
          {
            name: "Doppelmayr Seilbahnen AG",
            address: "Konrad-Doppelmayr-Straße 1, 6922 Wolfurt",
            contact: "+43 5574 604",
            web: "doppelmayr.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Doppelmayr+Wolfurt",
            desc: "Weltmarktführer im Seilbahnbau.",
            strategy: "Sicherheits-Schweißbaugruppen für Stützen und Stationen.",
            pitch: [
              "Höchste Zertifizierungsstufe für tragende Strukturen.",
              "Kapazität für internationale Großprojekte.",
              "Exzellente Dokumentation und Rückverfolgbarkeit."
            ],
            travelNext: { distance: "5 km", time: "8 min" }
          },
          {
            name: "Meusburger Georg GmbH & Co KG",
            address: "Kesselstraße 42, 6960 Wolfurt",
            contact: "+43 5574 6706",
            web: "meusburger.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Meusburger+Wolfurt",
            desc: "Marktführer für hochpräzise Normalien.",
            strategy: "Vorfertigung für komplexe Werkzeug-Grundplatten.",
            pitch: [
              "Massive Präzision im SME-Umfeld.",
              "Outsourcing-Partner für schwere Platten-Verschweißung.",
              "Qualität 'Made in Austria' mit effizienten Strukturen."
            ],
            travelNext: { distance: "18 km", time: "22 min" }
          },
          {
            name: "Hydro Extrusion Nenzing",
            address: "Austraße 16, 6710 Nenzing",
            contact: "+43 5525 601",
            web: "hydro.com",
            maps: "https://www.google.com/maps/search/?api=1&query=Hydro+Extrusion+Nenzing",
            desc: "Aluminium-Spezialist für komplexe Profile.",
            strategy: "Verschweißen von Aluminium-Baugruppen.",
            pitch: [
              "Spezialisierung auf Alu-Schweißverfahren (WIG/MIG).",
              "Leichtbau-Lösungen für Transport und Energie.",
              "Partner für komplexe System-Baugruppen."
            ]
          }
        ]
      }
    ]
  }
];

export default function App() {
  const [activeTrip, setActiveTrip] = useState(TRIP_TABS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappOptions = [
    { 
      label: "Allgemeine Zusammenarbeit", 
      message: "Sehr geehrtes Montage Tehnik Team, ich interessiere mich für eine allgemeine Zusammenarbeit und würde gerne mehr über Ihre Kapazitäten erfahren.",
      icon: <Handshake className="w-5 h-5" />
    },
    { 
      label: "Preisanfrage / Angebot", 
      message: "Hallo, ich hätte gerne ein unverbindliches Angebot für die Fertigung von Metallkomponenten/Schweißbaugruppen.",
      icon: <Euro className="w-5 h-5" />
    },
    { 
      label: "Technische Beratung", 
      message: "Guten Tag, wir haben ein technisches Projekt im Bereich LKW/Bergbau und benötigen Ihre Expertise bei der Umsetzung.",
      icon: <Wrench className="w-5 h-5" />
    },
    { 
      label: "Besuchstermin vereinbaren", 
      message: "Ich habe gesehen, dass Sie aktuell in der Region sind. Gerne würde ich einen kurzen Gesprächstermin vereinbaren.",
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
              <button onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#F27D26] text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#D9661D] transition-all group">
                UNSER PORTFOLIO <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsWhatsAppModalOpen(true)}
                className="bg-[#25D366] text-white px-8 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-[#128C7E] transition-all"
              >
                <MessageSquare className="w-5 h-5" /> WHATSAPP KONTAKT
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

      {/* Sales Arguments / Vorteile Section */}
      <section id="vorteile" className="py-32 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">WARUM MONTAGE TEHNIK?<br /><span className="text-[#F27D26]">10 GUTE GRÜNDE</span></h2>
            <p className="text-[#8E9299] max-w-2xl mx-auto text-lg italic text-balance">Erfahren Sie, warum führende Unternehmen in der EU auf unsere Expertise vertrauen.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {SALES_ARGUMENTS.map((arg, idx) => (
              <div key={idx} className="bg-[#0F0F0F] border border-[#2A2A2A] p-6 hover:border-[#F27D26] transition-all group">
                <div className="mb-4 group-hover:scale-110 transition-transform">{arg.icon}</div>
                <h4 className="text-sm font-black uppercase mb-2 tracking-tight group-hover:text-[#F27D26] transition-colors">{arg.title}</h4>
                <p className="text-xs text-[#8E9299] leading-relaxed">{arg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trip Plan Section */}
      <section id="besuchsplan" className="py-32 bg-[#151515] border-y border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 underline decoration-[#F27D26] decoration-4 underline-offset-8">BESUCHSPLAN & POTENZIALE</h2>
            <p className="text-[#8E9299] max-w-xl italic mb-10">Katalog potenzieller SME-Partner in Österreich mit Fokus auf Metallbau und Fahrzeugtechnik.</p>
            
            {/* Tab Switched */}
            <div className="flex flex-wrap gap-4 border-b border-[#2A2A2A] pb-0">
              {TRIP_TABS.map((trip) => (
                <button
                  key={trip.id}
                  onClick={() => setActiveTrip(trip)}
                  className={`px-8 py-4 font-black uppercase tracking-widest text-sm transition-all relative ${
                    activeTrip.id === trip.id 
                    ? 'text-[#F27D26]' 
                    : 'text-[#8E9299] hover:text-white'
                  }`}
                >
                  {trip.label}
                  {activeTrip.id === trip.id && (
                    <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 w-full h-[4px] bg-[#F27D26]" />
                  )}
                </button>
              ))}
            </div>
            <div className="mt-6 text-xs font-mono uppercase tracking-widest text-[#F27D26]/70 italic">
              {activeTrip.description}
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
                            <span className="text-[10px] font-black text-[#F27D26] uppercase tracking-widest block mb-2">IHR PITCH (INFO-MATERIAL):</span>
                            <ul className="space-y-2 mb-4">
                              {company.pitch?.map((point: string, pIdx: number) => (
                                <li key={pIdx} className="text-[11px] leading-tight flex items-start gap-2">
                                  <BadgeCheck className="w-3 h-3 text-[#25D366] shrink-0 mt-0.5" />
                                  <span className="text-[#E4E3E0]">{point}</span>
                                </li>
                              ))}
                            </ul>
                            <span className="text-[10px] font-black text-[#F27D26] uppercase tracking-widest block mb-1">STRATEGIE:</span>
                            <p className="text-[11px] italic text-[#8E9299] leading-relaxed">
                              {company.strategy}
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
                <div className="pb-4 border-b border-[#2A2A2A]">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F27D26] mb-1">Ansprechpartner</div>
                  <div className="font-black text-2xl tracking-tight">Siniša Špoljarić <span className="text-sm font-normal text-[#8E9299]"> – Direktor</span></div>
                </div>
                <ContactInfo icon={<Phone />} title="DIREKTKONTAKT" text="+385 92 1987483" />
                <ContactInfo icon={<Mail />} title="E-MAIL ANFRAGE" text="info@montagetehnik.com" />
                <ContactInfo icon={<MapPin />} title="STANDORT" text="Zagrebačka 99, 40000 Čakovec, Kroatien" />
                
                <div className="pt-6">
                  <button 
                    onClick={() => setIsWhatsAppModalOpen(true)}
                    className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-[#25D366]/20 group"
                  >
                    <MessageSquare className="w-6 h-6" /> JETZT ÜBER WHATSAPP KOOPERIEREN
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
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">WHATSAPP<br /><span className="text-[#25D366]">PREFERIERT</span></h3>
                <p className="text-sm text-[#8E9299] mb-8 leading-relaxed">
                  Für maximale Geschwindigkeit und Transparenz kommunizieren wir primär über WhatsApp. Senden Sie uns Pläne, Skizzen oder Anforderungen direkt für eine sofortige Einschätzung.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover/item:bg-[#25D366] group-hover/item:text-white transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase">Antwortgarantie</div>
                      <div className="text-[10px] text-[#8E9299]">Unter 60 Minuten (Mo-Fr)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover/item:bg-[#25D366] group-hover/item:text-white transition-colors">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase">Visuelles Update</div>
                      <div className="text-[10px] text-[#8E9299]">Live-Fotos aus der Fertigung</div>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsWhatsAppModalOpen(true)}
                  className="w-full bg-[#25D366] text-white py-5 font-black uppercase tracking-widest hover:bg-[#128C7E] transition-all shadow-2xl hover:shadow-[#25D366]/40 flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" /> CHAT STARTEN
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
                  <h3 className="font-black uppercase tracking-tighter text-xl">WhatsApp Kontakt</h3>
                </div>
                <button onClick={() => setIsWhatsAppModalOpen(false)} className="text-[#0F0F0F] hover:rotate-90 transition-transform">
                  <X />
                </button>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs text-[#8E9299] uppercase font-bold tracking-widest mb-4">Wählen Sie einen Betreff:</p>
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
                Sie werden direkt zur WhatsApp Web/App weitergeleitet.
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
