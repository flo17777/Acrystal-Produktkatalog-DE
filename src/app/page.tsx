'use client'; 
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, ChevronLeft, Award, Droplet, Palette, Shield, Package, Phone, Mail, MapPin, Menu, X, Check, ArrowRight, Beaker, Settings, Recycle, Info, Book, ShoppingCart, FileText, Wrench, Clock, Thermometer, Weight, Zap, AlertCircle } from 'lucide-react';

export default function AcrystalCatalog() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('description');
  const [expandedProducts, setExpandedProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      const sections = ['hero', 'products', 'additives', 'processing', 'services', 'prices', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigation = [
    { id: 'hero', label: 'Start', icon: ChevronRight },
    { id: 'products', label: 'Hauptprodukte', icon: Package },
    { id: 'additives', label: 'Additive', icon: Beaker },
    { id: 'processing', label: 'Verarbeitung', icon: Settings },
    { id: 'services', label: 'Services', icon: Award },
    { id: 'prices', label: 'Preise', icon: ShoppingCart },
    { id: 'contact', label: 'Kontakt', icon: Phone }
  ];

  const mainProducts = [
    {
      id: 'prima',
      name: 'Acrystal Prima',
      subtitle: 'Universelles Basis-System',
      shortDesc: 'Zweikomponentiges Acryl-Mineral-Komposit für detailtreue Formen und hochbelastbare Bauteile',
      fullDescription: `Acrystal Prima ist ein universell einsetzbares, weißliches Acrylharz-Pulver-System für Guss- und Laminierarbeiten. Es besteht aus der Acrystal Prima Flüssigkeit (Acryl-Polymer in Wasser) und dem Basic Crystal Pulver (mineralische Basis). Nach dem Mischen entsteht ein hartes, steinähnliches Material, das optisch an Gips erinnert, aber wesentlich belastbarer und witterungsbeständiger ist.`,
      applications: [
        'Kunstgießerei (Skulpturen, Figuren)',
        'Architektur & Modellbau (Reliefmodelle, Fassadenornamente)',
        'Museumspädagogik (Duplikate, Repliken)',
        'Prototyping (Designmodelle)',
        'Formenbau (Stützkonstruktionen)'
      ],
      advantages: [
        'Ungiftig und lösemittelfrei',
        'Schnelle Erstarrung (30 min entformbar)',
        'Hohe Detailtreue',
        'Wenig Wärme & < 0,1% Schrumpf',
        'UV-beständig & feuerhemmend',
        'Vielseitig modifizierbar'
      ],
      technicalData: {
        'Mischungsverhältnis': '1 : 2,5 (Flüssig : Pulver)',
        'Farbton': 'Naturweiß (elfenbein)',
        'Verarbeitungszeit': '8-10 min (ohne Verzögerer)',
        'Entformbar nach': '0,5-2 Stunden',
        'Dichte': '1,8 g/cm³',
        'Wärmeformbeständigkeit': '~70°C',
        'Min. Verarbeitungstemp.': '12°C'
      },
      processingTips: [
        'Immer im empfohlenen Verhältnis mischen',
        'Für dünnwandige Teile auf 1:2 reduzieren möglich',
        'Verzögerer (0,2-0,5%) verlängert Topfzeit deutlich',
        'Bei < 15°C reagiert System langsamer'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨'
    },
    {
      id: 'aqua',
      name: 'Acrystal Aqua',
      subtitle: 'Hochfester Wasserbaustoff',
      shortDesc: 'Quarzgefülltes Komposit für maximalen Wasserkontakt, frost- und tausalzbeständig',
      fullDescription: `Acrystal Aqua ist ein hochfestes, hellgraues 2-Komponenten-System mit besonderer Eignung für Anwendungen im Außenbereich oder unter ständiger Wasserbelastung. Es härtet zu einem extrem harten, dichten Werkstoff aus, der selbst im Tauchbetrieb (z.B. Aquarien, Brunnen) beständig bleibt.`,
      applications: [
        'Brunnen und Wasserspiele',
        'Aquariengestaltung',
        'Außenskulpturen',
        'Kletterwand-Elemente',
        'Sanitär-Objekte',
        'Themenpark-Dekoration'
      ],
      advantages: [
        'Wetter- und wasserfest',
        'Druckfestigkeit bis 80 MPa',
        'Selbstverlöschend',
        'Maßhaltig trotz hohem Pulvergehalt',
        'Ungiftig & geruchlos',
        'Verlängerte Verarbeitungszeit (30-45 min)'
      ],
      technicalData: {
        'Mischungsverhältnis': '1 : 7 (Flüssig : Pulver)',
        'Farbe': 'Hellgrau (betonähnlich)',
        'Verarbeitungszeit': '30-45 Minuten',
        'Entformbar nach': '18-24 Stunden',
        'Dichte': '2,25 g/cm³',
        'Druckfestigkeit (28T)': '75-80 MPa',
        'Biegefestigkeit': '~10 MPa',
        'Schwund': '< 0,7%'
      },
      processingTips: [
        'Pulver zuerst gut durchmischen',
        'Verflüssigt sich nach 1 min Rühren',
        'Schichtweise bei größeren Objekten',
        'Feuchte Nachbehandlung für volle Festigkeit',
        'Nicht über 40°C aushärten'
      ],
      color: 'from-cyan-500 to-teal-500',
      icon: '💧'
    },
    {
      id: 'gyps',
      name: 'Gyps Plus',
      subtitle: 'Additiv für Alpha-Gipse',
      shortDesc: 'Verwandelt handelsüblichen Gips in hochfesten, wasserresistenten Acryl-Gips-Verbund',
      fullDescription: `Gyps Plus ist eine flüssige Zusatzkomponente für Gips. Es wird anstelle oder anteilig mit Wasser verwendet, um herkömmlichen Modellgips deutlich zu verbessern. Resultat: härtere, dichtere Gipsstücke mit erhöhter Schlagfestigkeit und geringerer Wasseraufnahme.`,
      applications: [
        'Architekturmodelle',
        'Stuckabgüsse für Restaurierungen',
        'Künstlerischer Modellbau',
        'Gipsformen für Keramik/Porzellan',
        'Robuste Installationselemente'
      ],
      advantages: [
        'Deutlich erhöhte Härte (+50-100%)',
        'Reduzierte Sprödigkeit',
        'Wasserresistenter',
        'Einfache Anwendung',
        'Kompatibel mit allen Modellgipsen'
      ],
      technicalData: {
        'Art': 'Acryl-Polymerdispersion',
        'Einsatzkonzentration': '50-100% statt Wasser',
        'Härtezuwachs': '+50-100% Festigkeit',
        'Farbe': 'Weiß (milchig)',
        'Dichte': '~1,0 g/cm³'
      },
      processingTips: [
        'Gyps Plus gut aufrühren vor Gebrauch',
        'Anstelle des Anmachwassers verwenden',
        'Abbinden kann leicht verzögert sein',
        'Einige Tage trocknen lassen',
        'Reinigung mit Wasser'
      ],
      color: 'from-gray-500 to-slate-500',
      icon: '🏛️'
    }
  ];

  const decorProducts = [
    {
      id: 'carrara',
      name: 'Decor Carrara',
      subtitle: 'Marmor-Optik Komposit',
      description: 'Spezial-Kit zur Herstellung von Objekten in Marmor-Optik mit echten Marmorpartikeln',
      fullDescription: `Das Decor Carrara System besteht aus 0,2 kg Acrystal Prima Flüssigkeit und 1 kg speziellem Carrara-Pulver pro Set. Nach dem Anmischen entsteht eine gießfähige Suspension, die nach Aushärtung wie weißer Marmorguss wirkt. In der Matrix sind feine echte Marmoraggregate eingebettet, die bei entsprechender Nachbearbeitung als Glitzerpartikel sichtbar werden.`,
      applications: [
        'Kunst (Editionen in Marmoroptik)',
        'Architektur & Interior Design',
        'Bühnen- und Kulissenbau',
        'Historische Architekturdioramen'
      ],
      advantages: [
        'Echter Marmor-Look durch Marmormehl',
        'Deutlich leichter als Stein (1,85 vs 2,7 g/cm³)',
        'Einfache Verarbeitung im Vergleich zu Stein',
        'Ungiftig und umweltfreundlich',
        'Wetterfest mit Versiegelung',
        'Kombinierbar mit Pigmenten'
      ],
      technicalData: {
        'Mischungsverhältnis': '1 : 5 (Flüssig : Pulver)',
        'Farbe': 'Reinweiß mit Marmorierung',
        'Verarbeitungszeit': '8-10 Minuten',
        'Entformbar nach': '20-100 Minuten',
        'Dichte': '~1,85-1,95 g/cm³',
        'Druckfestigkeit': '25-30 MPa',
        'Biegefestigkeit': '8-10 MPa',
        'Schwund': '< 0,1%',
        'UV-Beständigkeit': 'Sehr gut',
        'Min. Schichtstärke': '2-3 mm'
      },
      processingTips: [
        'Zügig arbeiten wegen kurzer Topfzeit',
        'Mehrere dünne Schichten für gleichmäßige Marmorverteilung',
        'Nach Entformung mit nassem Schwamm abwaschen',
        'Für Glanz polieren oder mit Finition überziehen',
        'Außenanwendungen erfordern Schutzanstrich'
      ],
      icon: '⛰️',
      color: 'from-gray-100 to-gray-300'
    },
    {
      id: 'metal',
      name: 'Decor Metal',
      subtitle: 'Metallische Oberflächen',
      variants: ['Bronze', 'Kupfer', 'Zinn'],
      description: 'Echtmetall-Gelcoats mit authentischer Haptik und pationierbarer Oberfläche',
      fullDescription: `Decor Metal Kits bestehen aus Acrystal Prima Flüssigkeit kombiniert mit einem hohen Anteil Metallpulver im Pulvergemisch. So enthält z.B. Decor Bronze eine große Menge feines Bronze-Kupferpulver, wodurch gegossene Stücke nach dem Polieren metallisch glänzen und im Außenbereich sogar wie echtes Bronze grünlich patinieren.`,
      applications: [
        'Bildende Kunst (Skulpturen in Bronze-Optik)',
        'Film- und Bühnenausstattung',
        'Innenarchitektur (Zierteile, Lampen)',
        'Produktdesign (Prototypen, Pokale)'
      ],
      advantages: [
        'Authentischer Metallcharakter',
        'Kaltes Verfahren ohne Schmelzen',
        '50-70% Gewichtsreduktion vs Vollmetall',
        'Feinste Details realisierbar',
        'Kombinierbar mit anderen Systemen',
        'Patinierbar mit Oxyder'
      ],
      technicalData: {
        'Mischungsverhältnis': '1 : 4-5 (je nach Metall)',
        'Verarbeitungszeit': '5-8 Minuten',
        'Entformbar nach': '0,5-2 Stunden',
        'Dichte (Bronze)': '~2,5 g/cm³',
        'Oberflächenhärte': 'Sehr hoch',
        'Leitfähigkeit': 'Begrenzt (Wärme/Strom)',
        'Patinierung': 'Mit Oxyder möglich'
      },
      processingTips: [
        'Metallpulver vor Gebrauch gut aufschütteln',
        'Trocken lagern - keine Feuchtigkeit',
        'Zügig arbeiten - Metall sinkt schnell ab',
        'Als dünne Deckschicht auftragen',
        'Mit Stahlwolle polieren für Metallglanz',
        'Nach Patinierung versiegeln'
      ],
      icon: '🔧',
      color: 'from-amber-600 to-orange-700'
    }
  ];

  const additives = [
    {
      name: 'Pigmente',
      desc: 'Lichtechte Farbpasten in 5 Grundfarben',
      details: 'Schwarz, Weiß, Rot, Blau, Gelb - UV-stabil, mischbar',
      icon: '🎨',
      usage: 'Durchfärbung aller Acrystal-Systeme, Dosierung 0,1-5%',
      fullInfo: 'Flüssige Farbkonzentrate auf Dispersionsbasis, licht- und alkalibeständig. Bereits geringe Dosierungen erzielen kräftige Färbung.'
    },
    {
      name: 'Finition',
      desc: 'Schutz- und Effektlack',
      details: 'Seidenmatt, transparent, 1K-Acryllack',
      icon: '✨',
      usage: 'Versiegelung für Außenanwendungen, 1-2 Schichten',
      fullInfo: 'Erhöht drastisch die Witterungsbeständigkeit, schnelltrocknend (1h staubtrocken), lösemittelfrei.'
    },
    {
      name: 'Verzögerer',
      desc: 'Topfzeitverlängerung (Retarder)',
      details: 'Verlängert auf bis zu 90 min',
      icon: '⏱️',
      usage: '0,2-1% für große Projekte, max. 2%',
      fullInfo: 'Klare, farblose Flüssigkeit. Immer zuerst in Harz-Flüssigkeit einmischen bevor Pulver zugegeben wird.'
    },
    {
      name: 'Thixotropierer',
      desc: 'Verdicker für Standfestigkeit',
      details: 'Pyrogene Kieselsäure, weißes Pulver',
      icon: '🥄',
      usage: '0,2-0,5% für Gelcoat/Spachtel',
      fullInfo: 'Erzeugt thixotrope Konsistenz - fließfähig beim Rühren, standfest in Ruhe. Für vertikale Flächen unverzichtbar.'
    },
    {
      name: 'Glasfasergelege',
      desc: 'Quadraxiale Verstärkung 200-4D',
      details: '263 g/m², 4-Richtungen verstärkt',
      icon: '🕸️',
      usage: 'Laminieren dünnwandiger Bauteile, 2-3 Lagen',
      fullInfo: 'E-Glass-Fasern (0°/90°/±45°), ermöglicht selbsttragende Schalen mit 2-3mm Wandstärke. Zugfestigkeit >1200 MPa.'
    },
    {
      name: 'Oxyder',
      desc: 'Patinierlösung (PatinaX)',
      details: 'Für echte Bronze/Kupfer-Patina',
      icon: '🧪',
      usage: 'Nur für Decor Metal Oberflächen',
      fullInfo: 'Chemisches Reagenz für authentische Oxidschicht. Erzeugt Grünspan oder Rost in Stunden statt Jahren.'
    },
    {
      name: 'Rührer',
      desc: 'Spezial-Mischeinsatz',
      details: 'Edelstahl, Ø 60/105 mm',
      icon: '🌀',
      usage: 'Für Bohrmaschine ≥700 rpm',
      fullInfo: 'Ringförmige Konstruktion erzeugt kräftigen Strudel, zerkleinert Klumpen effektiv. Für homogene, luftarme Mischungen unverzichtbar.'
    },
    {
      name: 'Micro-Glaskugeln',
      desc: 'Leichtfüllstoff',
      details: 'Reduziert Dichte bis 0,9 g/cm³',
      icon: '⚪',
      usage: 'Dosierung 5-20% für Gewichtsreduktion',
      fullInfo: 'Hohle Glasmikrosphären für ultraleichte Bauteile bei erhaltener Festigkeit.'
    }
  ];

  const processingSteps = [
    {
      step: 1,
      title: 'Komponenten abwiegen',
      desc: 'Flüssigkeit vorlegen, Pulver separat wiegen',
      icon: '⚖️',
      details: 'Exaktes Mischungsverhältnis laut Produkttabelle einhalten'
    },
    {
      step: 2,
      title: 'Mischen & Rühren',
      desc: '≥ 700 rpm mit Spezialrührer',
      icon: '🌀',
      details: 'Pulver langsam einstreuen, 30-60s homogenisieren'
    },
    {
      step: 3,
      title: 'Entlüften',
      desc: '1-2 Min ruhen oder vibrieren',
      icon: '💨',
      details: 'Luftblasen entweichen lassen für porenfreies Ergebnis'
    },
    {
      step: 4,
      title: 'Verarbeiten',
      desc: 'Gießen, laminieren oder spritzen',
      icon: '🎨',
      details: 'Je nach Anwendung verschiedene Techniken möglich'
    },
    {
      step: 5,
      title: 'Entformen & Finish',
      desc: 'Nach Aushärtung bearbeiten',
      icon: '✨',
      details: 'Schleifen, polieren, versiegeln mit Finition'
    }
  ];

  const prices = {
    kits: [
      { name: 'Prima Kit 1,4 kg', price: '29.00' },
      { name: 'Prima Kit 3,5 kg', price: '59.00' },
      { name: 'Prima Kit 14 kg', price: '169.00' },
      { name: 'Prima Kit 70 kg', price: '620.00' },
      { name: 'Aqua Kit 1,6 kg', price: '39.00' },
      { name: 'Aqua Kit 8 kg', price: '165.00' },
      { name: 'Aqua Kit 24 kg', price: '429.00' },
      { name: 'Gyps Plus 1 kg', price: '18.00' },
      { name: 'Gyps Plus 5 kg', price: '79.00' },
      { name: 'Decor Carrara 1,2 kg', price: '24.00' },
      { name: 'Decor Carrara 6 kg', price: '99.00' },
      { name: 'Decor Metal 1,2 kg', price: '49.00' },
      { name: 'Decor Metal 6 kg', price: '199.00' }
    ],
    additives: [
      { name: 'Pigmentpaste 75g', price: '12.90' },
      { name: 'Finition 1 kg', price: '59.00' },
      { name: 'Finition 5 kg', price: '249.00' },
      { name: 'Verzögerer 100g', price: '7.50' },
      { name: 'Verzögerer 1 kg', price: '49.00' },
      { name: 'Thixo 75g', price: '19.90' },
      { name: 'Thixo 1 kg', price: '149.00' },
      { name: 'Glasfasergelege/m²', price: '14.00' },
      { name: 'Glasfasergelege 10m²', price: '120.00' },
      { name: 'Kurzfasern 0,5 kg', price: '15.00' },
      { name: 'Oxyder 0,5 kg', price: '49.00' },
      { name: 'Rührer Ø 6cm', price: '19.90' }
    ]
  };

  const toggleProductExpansion = (productId) => {
    setExpandedProducts(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-xl p-6 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <X size={24} />
            </button>
            {/* Environmental Note */}
          <div className="mt-12 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <Recycle className="text-green-400" />
              <span>Nachhaltigkeit & Umwelt</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold mb-2 text-green-400">Umweltfreundliche Produktion</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Wasserbasierte Systeme ohne Lösemittel</li>
                  <li>• Keine giftigen Dämpfe bei der Verarbeitung</li>
                  <li>• Kalte Aushärtung spart Energie</li>
                  <li>• Minimaler Abfall durch exakte Dosierung</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-400">Recycling & Entsorgung</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Rücknahme von Restmaterialien</li>
                  <li>• Ausgehärtete Reste als Bauschutt recyclebar</li>
                  <li>• Gebinde-Recycling-Service</li>
                  <li>• Beratung zur Abfallvermeidung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          
          <div className="p-6">
            <div className="flex gap-4 mb-6 border-b border-gray-700">
              {['description', 'technical', 'processing', 'applications'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-4 font-medium transition-all ${
                    activeTab === tab 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab === 'description' && 'Beschreibung'}
                  {tab === 'technical' && 'Technische Daten'}
                  {tab === 'processing' && 'Verarbeitung'}
                  {tab === 'applications' && 'Anwendungen'}
                </button>
              ))}
            </div>

            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">{product.fullDescription}</p>
                {product.advantages && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Vorteile</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.advantages.map((advantage, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <Check size={20} className="text-cyan-400 mt-0.5" />
                          <span className="text-gray-300">{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {product.variants && (
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Verfügbare Varianten</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-800 rounded-full text-cyan-400 border border-cyan-400/30">
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'technical' && product.technicalData && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.technicalData).map(([key, value], i) => (
                      <tr key={i} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                        <td className="py-3 px-3 font-medium text-gray-400">{key}</td>
                        <td className="py-3 px-3 text-cyan-400 font-medium text-right">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'processing' && (product.processingTips || product.processingTips) && (
              <div className="space-y-3">
                {(product.processingTips || []).map((tip, i) => (
                  <div key={i} className="flex items-start space-x-3 p-3 bg-gray-800/50 rounded-lg">
                    <Info size={20} className="text-cyan-400 mt-0.5" />
                    <span className="text-gray-300">{tip}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'applications' && product.applications && (
              <div className="grid md:grid-cols-2 gap-3">
                {product.applications.map((app, i) => (
                  <div key={i} className="flex items-center space-x-2 p-3 bg-gray-800/50 rounded-lg">
                    <ArrowRight size={16} className="text-cyan-400" />
                    <span className="text-gray-300">{app}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 6s ease infinite;
        }
        .bg-300\% {
          background-size: 300% 300%;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-400/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-gray-900/70 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Silitech AG
              </div>
              <div className="hidden md:block text-sm text-gray-400">
                Acrystal® Produktkatalog 2025
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all hover:text-cyan-400 ${
                    activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-left"
                  >
                    <Icon size={20} className="text-cyan-400" />
                    <span className={activeSection === item.id ? 'text-cyan-400' : 'text-gray-300'}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Acrystal® Produktkatalog 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Innovation für Kunst, Design & Industrie
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Seit über 25 Jahren Ihr Partner für hochwertige, nachhaltige Materialtechnologielösungen
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['Lösemittelfrei', 'Ungiftig', 'Hochleistung', 'Nachhaltig'].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-cyan-400 border border-cyan-400/30">
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => scrollToSection('products')}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25"
          >
            Produkte entdecken
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Hauptprodukte
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Unsere Acrystal-Produktpalette bietet für jede Anwendung die passende Lösung – 
            von universellen Harzsystemen bis zu spezialisierten Outdoor-Werkstoffen.
          </p>

          {/* Main Products Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mainProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-md rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-1">
                  <div className={`h-1 bg-gradient-to-r ${product.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                        <p className="text-cyan-400 mb-3 text-sm font-medium tracking-wide">{product.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{product.shortDesc}</p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-gray-800/60 rounded-lg p-3 backdrop-blur-sm border border-gray-700/50 group-hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock size={16} className="text-cyan-400" />
                          <span className="text-gray-400">Verarbeitung</span>
                        </div>
                        <p className="text-white font-semibold mt-1 text-sm">
                          {product.technicalData['Verarbeitungszeit']}
                        </p>
                      </div>
                      <div className="bg-gray-800/60 rounded-lg p-3 backdrop-blur-sm border border-gray-700/50 group-hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center space-x-2 text-sm">
                          <Weight size={16} className="text-cyan-400" />
                          <span className="text-gray-400">Dichte</span>
                        </div>
                        <p className="text-white font-semibold mt-1 text-sm">
                          {product.technicalData['Dichte']}
                        </p>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-2 mb-6">
                      {product.advantages.slice(0, 3).map((advantage, i) => (
                        <div key={i} className="flex items-center space-x-2 group/item">
                          <Check size={16} className="text-cyan-400 group-hover/item:scale-110 transition-transform" />
                          <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">{advantage}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="flex-1 relative px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium overflow-hidden group/btn transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                      >
                        <span className="relative z-10">Details anzeigen</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </button>
                      <button
                        onClick={() => toggleProductExpansion(product.id)}
                        className="px-4 py-2.5 bg-gray-800/80 rounded-lg hover:bg-gray-700/80 transition-all duration-300 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/30"
                      >
                        {expandedProducts[product.id] ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                      </button>
                    </div>

                    {/* Expandable Technical Data */}
                    {expandedProducts[product.id] && (
                      <div className="mt-6 pt-6 border-t border-gray-700/50 animate-fadeIn">
                        <h4 className="font-semibold mb-3 text-cyan-400">Technische Daten</h4>
                        <div className="space-y-2 text-sm">
                          {Object.entries(product.technicalData).slice(0, 4).map(([key, value], i) => (
                            <div key={i} className="flex justify-between items-center py-1 px-2 rounded hover:bg-gray-800/30 transition-colors">
                              <span className="text-gray-400">{key}:</span>
                              <span className="text-white font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Decor Products */}
          <h3 className="text-3xl font-bold mb-8 text-center">Decor-Systeme</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {decorProducts.map((product) => (
              <div key={product.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{product.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-cyan-400 mb-3">{product.subtitle}</p>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    
                    {product.variants && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.variants.map((variant, j) => (
                          <span key={j} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-cyan-400">
                            {variant}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                    >
                      <span>Mehr erfahren</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
                          ))}
          </div>

          {/* Environmental Note */}
          <div className="mt-12 bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-500/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
              <Recycle className="text-green-400" />
              <span>Nachhaltigkeit & Umwelt</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold mb-2 text-green-400">Umweltfreundliche Produktion</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Wasserbasierte Systeme ohne Lösemittel</li>
                  <li>• Keine giftigen Dämpfe bei der Verarbeitung</li>
                  <li>• Kalte Aushärtung spart Energie</li>
                  <li>• Minimaler Abfall durch exakte Dosierung</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-green-400">Recycling & Entsorgung</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Rücknahme von Restmaterialien</li>
                  <li>• Ausgehärtete Reste als Bauschutt recyclebar</li>
                  <li>• Gebinde-Recycling-Service</li>
                  <li>• Beratung zur Abfallvermeidung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additives Section */}
      <section id="additives" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Additive & Zubehör
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Ergänzungsprodukte zur Anpassung der Acrystal-Systeme an spezifische Anforderungen
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additives.map((additive, i) => (
              <div key={i} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl mb-3">{additive.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{additive.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{additive.desc}</p>
                <p className="text-cyan-400 text-sm mb-3">{additive.details}</p>
                <div className="pt-3 border-t border-gray-700">
                  <p className="text-xs text-gray-500">Anwendung:</p>
                  <p className="text-sm text-gray-300">{additive.usage}</p>
                  {additive.fullInfo && (
                    <p className="text-xs text-gray-400 mt-2">{additive.fullInfo}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Section */}
      <section id="processing" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Verarbeitung
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Die Verarbeitung der Acrystal-Harze erfolgt in wenigen einfachen Schritten 
            und erfordert keine speziellen Maschinen.
          </p>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            {processingSteps.map((step, i) => (
              <div key={i} className="group relative">
                <div className="bg-gray-800/60 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 h-full">
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{step.desc}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.details}</p>
                </div>
                {i < processingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-600 z-10">
                    <ChevronRight size={24} className="animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Processing Tips */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
              <AlertCircle className="text-cyan-400" />
              <span>Wichtige Verarbeitungshinweise</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Optimale Bedingungen</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <Thermometer size={16} className="text-cyan-400 mt-0.5" />
                    <span>Arbeitstemperatur: 15-25°C (min. 12°C)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Droplet size={16} className="text-cyan-400 mt-0.5" />
                    <span>Komponenten trocken und frostfrei lagern</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Shield size={16} className="text-cyan-400 mt-0.5" />
                    <span>Schutzausrüstung tragen (Handschuhe, Brille)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Reinigung & Sicherheit</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <Droplet size={16} className="text-cyan-400 mt-0.5" />
                    <span>Werkzeuge sofort mit Wasser reinigen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertCircle size={16} className="text-cyan-400 mt-0.5" />
                    <span>Kein Wasser zur Mischung hinzufügen</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Check size={16} className="text-cyan-400 mt-0.5" />
                    <span>Keine Lösemittel oder Dämpfe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Services & Support
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Unser Kundenservice endet nicht beim Verkauf – wir unterstützen Sie 
            vom ersten Konzept bis zur Serienanwendung.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: 'Technische Beratung',
                desc: 'Experten mit 25+ Jahren Erfahrung',
                details: 'Materialauswahl, Verarbeitungstipps, Problemlösungen'
              },
              {
                icon: Wrench,
                title: 'Schulungen',
                desc: 'Workshops & Trainings',
                details: 'Von Grundlagen bis Spezialtechniken'
              },
              {
                icon: Package,
                title: 'Kundenspezifisch',
                desc: 'Individuelle Lösungen',
                details: 'Sondermischungen, Abfüllungen, White-Label'
              },
              {
                icon: Zap,
                title: 'Logistik',
                desc: 'Just-in-Time Lieferung',
                details: 'Weltweiter Versand, B2B-Online-Shop'
              },
              {
                icon: Recycle,
                title: 'Recycling',
                desc: 'Nachhaltige Entsorgung',
                details: 'Rücknahme, Aufbereitung, Kreislauflösungen'
              },
              {
                icon: FileText,
                title: 'Dokumentation',
                desc: 'Umfassende Unterlagen',
                details: 'Datenblätter, SDS, Verarbeitungsvideos'
              }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-4">
                    <Icon size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-cyan-400 mb-3">{service.desc}</p>
                  <p className="text-gray-400 text-sm">{service.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Preisübersicht 2025
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Alle Preise in CHF, netto zzgl. MwSt. | Stand: 01.02.2025
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Kits Pricing */}
            <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
                <Package className="text-cyan-400" />
                <span>Harz-Kits</span>
              </h3>
              <div className="space-y-2">
                {prices.kits.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 px-3 -mx-3 border-b border-gray-700/50 hover:bg-gradient-to-r hover:from-gray-800/30 hover:to-transparent rounded-lg transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                    <span className="text-cyan-400 font-semibold bg-gray-800/50 px-3 py-1 rounded-full">CHF {item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additives Pricing */}
            <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 flex items-center space-x-2">
                <Beaker className="text-cyan-400" />
                <span>Additive & Zubehör</span>
              </h3>
              <div className="space-y-2">
                {prices.additives.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 px-3 -mx-3 border-b border-gray-700/50 hover:bg-gradient-to-r hover:from-gray-800/30 hover:to-transparent rounded-lg transition-all duration-300 group">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.name}</span>
                    <span className="text-cyan-400 font-semibold bg-gray-800/50 px-3 py-1 rounded-full">CHF {item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/30 text-center">
            <p className="text-gray-300 mb-3">
              Größere Gebinde, Sondermischungen und aktuelle Angebote auf Anfrage
            </p>
            <a 
              href="https://silitech.ch" 
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ShoppingCart size={20} />
              <span>Zum B2B-Online-Shop</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Kontakt
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Silitech AG</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Ihr Partner für innovative Materialien in Industrie & Kreativwirtschaft seit über 25 Jahren
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin className="text-cyan-400 mt-1 group-hover:scale-110 transition-transform" size={20} />
                  <div className="group-hover:text-white transition-colors">
                    <p>Worbstrasse 173 (Postfach 66)</p>
                    <p>CH-3073 Gümligen, Schweiz</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                  <a href="tel:+41313985070" className="hover:text-cyan-400 transition-colors group-hover:translate-x-1">
                    +41 31 398 50 70
                  </a>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                  <a href="mailto:info@silitech.ch" className="hover:text-cyan-400 transition-colors group-hover:translate-x-1">
                    info@silitech.ch
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <p className="text-sm text-gray-400 mb-3">Website & Online-Shop:</p>
                <a 
                  href="https://www.silitech.ch" 
                  className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group font-medium"
                >
                  <span>www.silitech.ch</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6">Persönliche Beratung</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Haben Sie Fragen zu unseren Produkten oder benötigen Sie Unterstützung 
                bei Ihrem Projekt? Unser Expertenteam steht Ihnen gerne zur Verfügung.
              </p>
              
              <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-700/50">
                <h4 className="font-semibold mb-3 text-cyan-400 flex items-center space-x-2">
                  <Clock size={18} />
                  <span>Geschäftszeiten</span>
                </h4>
                <div className="space-y-2 text-gray-300">
                  <p>Montag - Freitag: 08:00 - 17:00 Uhr</p>
                  <p>Samstag & Sonntag: Geschlossen</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="mailto:info@silitech.ch" 
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center shadow-lg hover:shadow-cyan-500/30 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Mail size={20} />
                    <span>E-Mail schreiben</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>© 2025 Silitech AG – Qualität und Service seit über 25 Jahren</p>
            <p className="mt-2">Technische Änderungen und Irrtümer vorbehalten</p>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => {
            setSelectedProduct(null);
            setActiveTab('description');
          }} 
        />
      )}
    </div>
  );
}
