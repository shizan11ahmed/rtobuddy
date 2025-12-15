import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle, 
  Shield, 
  Zap, 
  FileText, 
  AlertTriangle, 
  ArrowRight,
  Layers,
  Upload,
  Smartphone,
  Maximize,
  BadgeCheck,
  FolderPlus,
  RefreshCw,
  Check,
  Play,
  Clock,
  Printer,
  Image as ImageIcon,
  Calculator,
  History,
  Star,
  TrendingUp,
  ArrowLeft,
  Users,
  Award,
  ChevronRight,
  ScanLine,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Send,
  BarChart3,
  FlaskConical,
  Rocket,
  Instagram,
  Linkedin
} from 'lucide-react';

// --- Assets & Helpers ---

// Animated Logo Component
const AnimatedLogo = ({ size = "normal", className = "", variant = "stack" }: { size?: "normal" | "large", className?: string, variant?: "stack" | "float" | "draw" | "slide" | "pop" }) => {
  const isLarge = size === "large";
  const width = isLarge ? "300" : "180";
  const height = isLarge ? "75" : "45";
  const fontSize = isLarge ? "42" : "28"; 
  const strokeWidth = isLarge ? "4" : "3";

  const getAnimClass = (layerIndex: number) => {
    switch (variant) {
      case 'stack': return `animate-stack-${layerIndex}`;
      case 'slide': return `animate-slide-${layerIndex}`;
      case 'pop': return `animate-pop-${layerIndex}`;
      case 'draw': return `animate-draw`;
      case 'float': return `animate-float-logo`;
      default: return `animate-stack-${layerIndex}`;
    }
  };

  return (
    <div className="inline-block cursor-pointer group" title="RTO Buddy">
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`overflow-visible ${className}`}
      >
        <g transform={`scale(${isLarge ? 1.5 : 1})`} className={`origin-top-left ${variant === 'float' ? 'animate-float-logo' : ''}`}>
          <rect x="0" y="0" width="50" height="50" rx="12" fill="#0284c7" className={`${getAnimClass(1)} transition-colors duration-300 group-hover:fill-brand-500`} />
          
          <path 
            d="M13 30L25 36L37 30" 
            stroke="white" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
            className={`${getAnimClass(1)} transition-transform duration-300 ease-out group-hover:translate-y-1`} 
          />
          
          <path 
            d="M13 24L25 30L37 24" 
            stroke="white" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
            className={`${getAnimClass(2)} transition-opacity duration-300`} 
          />
          
          <path 
            d="M25 12L13 18L25 24L37 18L25 12Z" 
            stroke="white" 
            strokeWidth={strokeWidth} 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            fill="none" 
            className={`${getAnimClass(3)} transition-transform duration-300 ease-out group-hover:-translate-y-1.5`} 
          />
        </g>

        <text 
          x={isLarge ? "90" : "60"} 
          y={isLarge ? "50" : "35"} 
          fontFamily="Inter, sans-serif" 
          fontWeight="800" 
          fontSize={fontSize} 
          fill="#0f172a"
          className="animate-reveal"
        >
          RTO <tspan fill="#0284c7" className="transition-colors duration-300 group-hover:fill-brand-500">Buddy</tspan>
        </text>
      </svg>
    </div>
  );
};

// Vyke Company Logo Component - Uses external image file
const VykeLogo = () => (
  <img 
    src="https://chutney.pythonanywhere.com/static/vyke_logo.png" 
    alt="Vyke" 
    className="h-7 ml-2 object-contain opacity-90 hover:opacity-100 transition-opacity" 
    referrerPolicy="no-referrer"
  />
);

// Loading Screen Component
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500">
      <AnimatedLogo size="large" variant="stack" />
      <div className="mt-8 w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-brand-600 animate-[loadingBar_2s_ease-in-out_infinite] w-full origin-left scale-x-0"></div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-400 tracking-wide animate-pulse">Trusted, Fast, and Compliant.</p>
      <style>{`
        @keyframes loadingBar {
          0% { transform: scaleX(0); transform-origin: left; }
          50% { transform: scaleX(0.5); }
          100% { transform: scaleX(1); transform-origin: right; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

// Official App Icons using reliable Image Sources
const CamScannerLogo = () => (
  <img 
    src="https://static-cdn.camscanner.com/camscanner-seo/img/logo-en.b6dee07.png" 
    alt="CamScanner App Logo" 
    className="h-5 w-auto object-contain"
    referrerPolicy="no-referrer"
  />
);

const AdobeScanLogo = () => (
  <img 
    src="https://community.adobe.com/html/@7D71944697B2365B43B68BBB61520FF2/assets/icons/adobe-scan.svg" 
    alt="Adobe Scan App Logo" 
    className="h-6 w-6 rounded shadow-sm object-contain"
    referrerPolicy="no-referrer"
  />
);

// --- LOGO DATABASE (User Provided URLs) ---
const BrandList = [
  { name: 'Hero MotoCorp', url: 'https://www.heromotocorp.com/content/dam/hero-aem-website/brand/logo/logo.svg', bg: 'bg-white' },
  { name: 'TVS Motor', url: 'https://www.tvsmotor.com/-/media/Feature/Header/TVSLogo-hr.svg', bg: 'bg-white' },
  { name: 'Honda', url: 'https://edge.sitecorecloud.io/hondamotorc388f-hmsi8ece-prodb777-e813/media/Project/HONDA2WI/honda2wheelersindia/logo/logo-redbing.png?h=64&iar=0&w=80', bg: 'bg-white' },
  { name: 'Bajaj Auto', url: 'https://cdn.bajajauto.com/-/media/assets/bajajauto/global/bajaj-logo2.png', bg: 'bg-white' },
  { name: 'Mahindra', url: 'https://auto.mahindra.com/on/demandware.static/Sites-amc-Site/-/default/dw0b97f45d/images/logoPeakLight.png', bg: 'bg-transparent' }, 
  { name: 'Hyundai', url: 'https://www.hyundai.com/content/dam/hyundai/template_en/en/images/common/og-image/hyu_logo_og_image.jpg', bg: 'bg-white' }
];

const Header = ({ currentPage, onNavigate }: { currentPage: string, onNavigate: (page: string, section?: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home', section: 'hero' },
    { name: 'Features', id: 'home', section: 'features' },
    { name: 'ROI Calculator', id: 'home', section: 'calculator' },
    { name: 'How It Works', id: 'home', section: 'workflow' },
    { name: 'Videos', id: 'home', section: 'videos' },
    { name: 'About Us', id: 'about', section: 'top' },
  ];

  const handleNavClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(link.id, link.section);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'hero'); }} className="flex items-center space-x-2 group cursor-pointer select-none">
            <AnimatedLogo size="normal" variant="stack" className="h-12 w-auto" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-colors ${currentPage === link.id && link.name !== 'Home' ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-brand-600'}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={() => onNavigate('contact', 'top')} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                onClick={(e) => handleNavClick(e, link)}
                className="block text-slate-600 font-medium hover:text-brand-600"
              >
                {link.name}
              </a>
            ))}
            <button onClick={() => { setIsOpen(false); onNavigate('contact', 'top'); }} className="w-full bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919403890720?text=Hi%20RTO%20Buddy,%20I'm%20interested%20in%20optimizing%20my%20dealership%20documentation."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[100] bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl shadow-green-500/30 transition-all hover:scale-110 hover:-translate-y-1 group flex items-center justify-center"
    aria-label="Chat on WhatsApp"
  >
    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-2 group-hover:translate-x-0">
      Chat with us
    </span>
  </a>
);

const InteractiveErrorCard = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFix = () => {
    if (isFixed) {
      setIsFixed(false);
    } else {
      setIsAnimating(true);
      setTimeout(() => {
        setIsFixed(true);
        setIsAnimating(false);
      }, 800);
    }
  };

  return (
    <div className="w-full max-w-[480px] mx-auto perspective-1000">
      <div 
        className={`relative w-full bg-white rounded-2xl shadow-2xl transition-all duration-500 cursor-pointer border-2 overflow-hidden group ${isFixed ? 'border-emerald-500 shadow-emerald-100' : 'border-red-100 shadow-red-100 hover:border-red-200'}`}
        onClick={handleFix}
      >
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
          <div className="bg-white border border-slate-200 rounded px-3 py-0.5 text-[10px] font-medium text-slate-400 flex items-center">
            <Shield size={10} className="mr-1" />
            Vaahan Portal Status
          </div>
        </div>

        <div className="p-6 sm:p-8 min-h-[400px] flex flex-col items-center justify-center relative bg-slate-50/30">
          {!isFixed ? (
            <div className={`flex flex-col items-center text-center w-full animate-fade-in-up ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}>
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-red-100 animate-ping opacity-20"></div>
                <X className="text-red-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Failed</h3>
              <p className="text-slate-600 font-bold text-sm mb-6 max-w-[260px]">
                The document you uploaded was rejected by the portal.
              </p>
              <div className="w-full bg-red-50 border border-red-100 rounded-xl p-4 mb-6 text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-400"></div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-red-700">Error: File Size Exceeded</p>
                    <div className="mt-2 grid grid-cols-2 gap-x-8 gap-y-1 text-xs">
                      <div>
                        <span className="text-red-400 uppercase tracking-wider font-semibold text-[10px]">Current Size</span>
                        <p className="font-mono font-bold text-red-600 text-sm">2.4 MB</p>
                      </div>
                      <div>
                        <span className="text-red-400 uppercase tracking-wider font-semibold text-[10px]">Max Allowed</span>
                        <p className="font-mono font-bold text-red-600 text-sm">400 KB</p>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <div className="inline-flex items-center px-2 py-1 rounded bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wide">
                        Status: Reverted
                      </div>
                      <div className="inline-flex items-center px-2 py-1 rounded bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wide">
                        Penalty Charged
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-brand-600 text-white py-3 px-4 rounded-lg font-semibold shadow-lg shadow-brand-500/20 hover:bg-brand-700 transition-colors flex items-center justify-center space-x-2">
                <Zap size={18} />
                <span>Fix with RTO Buddy</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center w-full animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-20"></div>
                <CheckCircle className="text-emerald-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Successful!</h3>
              <p className="text-slate-500 text-sm mb-6">
                Document optimized and compliant.
              </p>
              <div className="w-full bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6 text-left relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-emerald-100 pb-2">
                    <div className="flex items-center space-x-2">
                      <FileText size={16} className="text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-900">Form_20_Optimized.pdf</span>
                    </div>
                    <BadgeCheck size={16} className="text-emerald-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">New Size</span>
                      <p className="text-sm font-mono font-bold text-emerald-700">298 KB <span className="text-[10px] text-emerald-400 font-normal">(-88%)</span></p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clarity</span>
                      <p className="text-sm font-bold text-emerald-700">High Res</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <button className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg font-semibold shadow-lg text-sm hover:bg-slate-800 transition-colors">
                  Process Next
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-slate-50 py-4 px-6 flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 gap-3 sm:gap-0">
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap mr-2">Works with scans from</span>
           <div className="flex items-center space-x-4 w-full justify-center sm:justify-end">
              <div className="flex items-center space-x-1.5 group opacity-100 filter-none" title="Adobe Scan">
                 <AdobeScanLogo />
                 <span className="text-xs font-bold text-slate-700 group-hover:text-brand-600 transition-colors">Adobe Scan</span>
              </div>
              <div className="h-4 w-px bg-slate-300"></div>
              <div className="flex items-center space-x-1.5 group opacity-100 filter-none" title="CamScanner">
                 <CamScannerLogo />
                 <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">CamScanner</span>
              </div>
           </div>
        </div>
      </div>

      <div className="mt-8 text-center relative z-10">
         <p 
           className="inline-flex items-center text-slate-600 font-bold text-sm animate-pulse-slow cursor-pointer hover:text-brand-600 transition-colors bg-white/80 px-5 py-2 rounded-full backdrop-blur-sm border border-slate-200 shadow-sm"
           onClick={handleFix}
         >
           <Maximize size={16} className="mr-2" />
           {isFixed ? "Click to reset simulation" : "Click card above to simulate fix"}
         </p>
      </div>
    </div>
  );
};

const BrandLogos = () => {
  return (
    <div className="py-12 bg-slate-900 border-y border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Trusted by leading dealers</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-16 md:space-x-24 px-4">
          {[...BrandList, ...BrandList, ...BrandList, ...BrandList].map((brand, index) => (
            <div key={index} className={`inline-flex items-center justify-center h-16 w-32 md:h-20 md:w-40 cursor-pointer hover:scale-105 transition-transform duration-300 flex-shrink-0 rounded-xl ${brand.bg === 'bg-white' ? 'bg-white p-2' : ''}`}>
               <img 
                 src={brand.url} 
                 alt={`${brand.name} Logo`} 
                 className="max-h-full max-w-full object-contain"
                 loading="lazy"
                 referrerPolicy="no-referrer"
               />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimeSavingsCalculator = () => {
  const [monthlySales, setMonthlySales] = useState(100);
  const annualFiles = monthlySales * 12;
  const manualTimePerFile = 22;
  const autoTimePerFile = 2;
  const manualTotalHours = Math.round((annualFiles * manualTimePerFile) / 60);
  const autoTotalHours = Math.round((annualFiles * autoTimePerFile) / 60);
  const savedHours = manualTotalHours - autoTotalHours;
  const savedDays = Math.round(savedHours / 8);

  return (
    <section id="calculator" className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-[#0B1120] rounded-2xl p-5 md:p-6 text-white shadow-2xl ring-1 ring-slate-800 flex flex-col md:flex-row gap-6 items-center relative overflow-hidden">
          <div className="flex-1 relative z-10 w-full">
            <div className="inline-flex items-center space-x-2 bg-brand-900/40 border border-brand-500/30 rounded-full px-2.5 py-0.5 mb-3">
              <Calculator size={12} className="text-brand-400" />
              <span className="text-[9px] font-bold text-brand-300 uppercase tracking-widest">ROI Calculator</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Calculate your time savings.</h2>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Manual RTO work kills productivity. Move the slider to see how much time RTO Buddy can give back.
            </p>
            <div className="mb-6">
              <div className="flex justify-between items-end mb-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Vehicle Sales</label>
                <span className="text-3xl font-bold text-white tracking-tight">{monthlySales}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="500" 
                step="10" 
                value={monthlySales} 
                onChange={(e) => setMonthlySales(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-white hover:accent-brand-200 transition-all"
              />
              <div className="flex justify-between text-[9px] text-slate-500 mt-2 font-mono uppercase tracking-wider">
                <span>10</span>
                <span>250</span>
                <span>500+</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-slate-400 gap-2">
               <RefreshCw size={12} className="text-slate-500" />
               <span>Calculated based on <strong className="text-slate-300">{annualFiles.toLocaleString()} files/year</strong></span>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[16rem] lg:max-w-[18rem]">
            <div className="bg-[#121a2b] border border-slate-800 rounded-xl p-5 shadow-xl relative overflow-hidden">
               <div className="grid grid-cols-2 gap-3 pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                     <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">Manual Process</p>
                     <p className="text-xl font-bold text-red-400">{manualTotalHours} <span className="text-[10px] font-medium text-slate-500">hrs/yr</span></p>
                     <p className="text-[9px] text-slate-600 mt-0.5">~22 mins/file</p>
                  </div>
                  <div>
                     <p className="text-[9px] text-slate-500 uppercase font-bold tracking-widest mb-1">RTO Buddy</p>
                     <p className="text-xl font-bold text-emerald-400">{autoTotalHours} <span className="text-[10px] font-medium text-slate-500">hrs/yr</span></p>
                     <p className="text-[9px] text-slate-600 mt-0.5">~2 mins/file</p>
                  </div>
               </div>
               <div className="text-center">
                  <p className="text-slate-300 font-medium mb-1 text-xs">Total Time Saved Annually</p>
                  <div className="flex items-baseline justify-center gap-1.5 mb-4">
                     <span className="text-4xl font-extrabold text-brand-400 tracking-tight">{savedHours}</span>
                     <span className="text-lg font-bold text-brand-600">hrs</span>
                  </div>
                  <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold animate-pulse-slow">
                     <CheckCircle size={12} className="mr-1.5" />
                     Equal to {savedDays} work days saved!
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const WorkflowSection = () => {
  const steps = [
    {
      title: "Capture Docs",
      desc: "Use office scanners or mobile apps (Adobe/CamScanner).",
      icon: <ScanLine className="w-6 h-6 text-brand-600" />,
    },
    {
      title: "Drag & Drop",
      desc: "Drop raw images or PDFs into RTO Buddy.",
      icon: <Upload className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "AI Process",
      desc: "Auto-splits, crops, and compresses to <400KB.",
      icon: <RefreshCw className="w-6 h-6 text-pink-600" />,
    },
    {
      title: "Ready",
      desc: "Compliant folder created on desktop instantly.",
      icon: <FileCheck className="w-6 h-6 text-emerald-600" />,
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-slate-50 border-y border-slate-200">
       <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Simple 4-Step Workflow</h2>
             <p className="text-slate-600 mt-2">No complex training needed.</p>
          </div>
          <div className="hidden md:flex justify-between items-start relative max-w-5xl mx-auto">
             <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
             {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center w-1/4 px-2 group">
                   <div className="w-16 h-16 bg-white border-4 border-slate-50 rounded-full shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 rounded-full text-white text-xs flex items-center justify-center font-bold border-2 border-white">
                        {idx + 1}
                      </div>
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                   <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
             ))}
          </div>
          <div className="md:hidden grid grid-cols-2 gap-4 max-w-sm mx-auto">
             {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                   <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center mb-3 text-slate-900 font-bold border border-slate-100 relative">
                     {idx + 1}
                   </div>
                   <div className="mb-1">{step.icon}</div>
                   <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
                   <p className="text-xs text-slate-500 leading-snug">{step.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const VideoShowcase = () => {
  return (
    <section id="videos" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-500 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <div className="inline-flex items-center space-x-2 bg-brand-500/20 border border-brand-500/30 text-brand-300 rounded-full px-3 py-1 mb-6">
              <Play size={12} fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Video Tour</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold mb-6">See RTO Buddy in Action</h2>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             Watch how we automate the Vaahan portal workflow, from mobile scan to final upload.
           </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main YouTube Video (Span 2 cols on desktop) */}
            <div className="lg:col-span-2 space-y-4">
               {/* Video Player UI */}
               <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 group">
                  {/* YouTube Placeholder / Embed */}
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" // Placeholder ID
                      title="RTO Buddy Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="absolute inset-0 z-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500"
                    ></iframe>
                    <div className="z-0 flex flex-col items-center">
                       <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center shadow-lg shadow-brand-500/50 mb-4 animate-pulse-slow">
                          <Play size={32} className="text-white ml-1" fill="currentColor" />
                       </div>
                       <p className="font-bold text-white text-lg">Watch Full Demo</p>
                    </div>
                  </div>
               </div>
               <div>
                  <h3 className="text-2xl font-bold text-white">Full Platform Walkthrough</h3>
                  <p className="text-slate-400 mt-2">Deep dive into the dashboard, bulk processing, and automatic folder creation. See exactly how much time you save.</p>
               </div>
            </div>

            {/* Portrait Videos Column (Span 1 col) */}
            <div className="lg:col-span-1 space-y-6">
               <div className="flex flex-col gap-6 h-full">
                  {/* Portrait Video 1 */}
                  <div className="flex-1 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 relative group min-h-[280px] shadow-lg cursor-pointer hover:border-brand-500/50 transition-colors">
                      {/* NEW IMAGE: Professional / Office Context */}
                      <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" alt="Why RTO Buddy" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                         <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-all transform group-hover:scale-110">
                            <Play fill="currentColor" size={16} />
                         </div>
                         <h4 className="font-bold text-lg leading-tight text-white mb-1">Why Dealers Switch?</h4>
                         <div className="flex items-center space-x-2 text-xs text-slate-300">
                            <span className="bg-red-600 px-1.5 py-0.5 rounded text-white font-bold text-[10px]">REEL</span>
                            <span>• 1 min explainer</span>
                         </div>
                      </div>
                  </div>

                  {/* Portrait Video 2 */}
                  <div className="flex-1 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 relative group min-h-[280px] shadow-lg cursor-pointer hover:border-brand-500/50 transition-colors">
                      {/* NEW IMAGE: Hand holding phone / scanning */}
                      <img src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300" alt="Mobile Scanning" />
                      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                         <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-all transform group-hover:scale-110">
                            <Play fill="currentColor" size={16} />
                         </div>
                         <h4 className="font-bold text-lg leading-tight text-white mb-1">Mobile Scanning Tips</h4>
                         <div className="flex items-center space-x-2 text-xs text-slate-300">
                             <span className="bg-red-600 px-1.5 py-0.5 rounded text-white font-bold text-[10px]">REEL</span>
                             <span>• Best practices</span>
                         </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "It made our work much easier and faster. Thanks to the strong compression technology, none of our files were ever reverted due to blurred images.",
      author: "SAS Hero Babhnan",
      role: "Authorized Hero Dealer",
      initials: "SB"
    },
    {
      quote: "The automatic folder creation is a game changer. We just type the customer name and boom—everything is organized on the desktop ready for upload.",
      author: "Raj Motors",
      role: "TVS Dealer",
      initials: "RJ"
    },
    {
      quote: "We used to struggle with 'File Size Exceeded' errors daily. Since switching to RTO Buddy, we haven't had a single rejection for image quality.",
      author: "Amit Auto",
      role: "Honda Dealer",
      initials: "AM"
    },
    {
      quote: "Processing time reduced from 20 minutes to under 2 minutes per file. My staff is so much happier now.",
      author: "City Yamaha",
      role: "Yamaha Dealer",
      initials: "CY"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-brand-50/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Dealers Love RTO Buddy</h2>
        <p className="text-lg text-slate-600">Don't just take our word for it.</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-6 px-4 hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div key={idx} className="inline-block w-80 md:w-96 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 whitespace-normal cursor-default">
               <div className="flex text-amber-400 mb-4">
                 {[1,2,3,4,5].map(star => <Star key={star} fill="currentColor" size={16} />)}
               </div>
               <p className="text-slate-700 text-sm md:text-base italic mb-6 leading-relaxed">
                 "{item.quote}"
               </p>
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 text-sm">
                   {item.initials}
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 text-sm">{item.author}</h4>
                   <p className="text-xs text-slate-500">{item.role}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactPage = ({ onBack }: { onBack: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{email?: string; phone?: string}>({});

  const validate = (data: FormData) => {
    const newErrors: any = {};
    const email = data.get('email') as string;
    const phone = data.get('phone') as string;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || !email.includes('.')) {
        newErrors.email = "Please enter a valid email address (e.g., user@domain.com).";
    }

    const cleanPhone = phone.replace(/\D/g, '');
    const last10 = cleanPhone.slice(-10);
    if (cleanPhone.length < 10 || !/^[6-9]\d{9}$/.test(last10)) {
        newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    setIsSubmitting(true);

    formData.append("access_key", "f6596992-8e23-4a24-b260-016fc075edf1"); 
    formData.append("from_name", "RTO Buddy Website");
    formData.append("botcheck", "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button 
          onClick={onBack} 
          className="group flex items-center text-sm font-semibold text-slate-500 hover:text-brand-600 mb-8 transition-colors"
        >
          <div className="bg-white border border-slate-200 p-2 rounded-full mr-3 shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeft size={16} />
          </div>
          Back to Home
        </button>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="bg-slate-900 text-white p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get Started with RTO Buddy</h2>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Fill out the form to start your free trial or request a personalized demo. Join hundreds of dealers saving time today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Email Us</p>
                      <p className="font-medium">info@rtobuddy.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Phone size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Call Us</p>
                      <p className="font-medium">+91 9403890720</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <MapPin size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-bold uppercase">Visit Us</p>
                      <p className="font-medium">Basti, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-12">
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Shield size={16} />
                  <span>Your data is secure and will never be shared.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 flex items-center">
            {submitted ? (
              <div className="text-center w-full py-10">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Check size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-8">
                  We have received your request. Our team will contact you shortly to set up your RTO Buddy account.
                </p>
                <button onClick={onBack} className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                  Return to Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-5">
                <input type="hidden" name="subject" value="New Lead from RTO Buddy Website" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-lg placeholder-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-medium" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Dealership Name</label>
                  <input 
                    type="text" 
                    name="dealership" 
                    required 
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-lg placeholder-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-medium" 
                    placeholder="e.g. Royal Motors" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-300'} bg-white text-slate-900 text-lg placeholder-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-medium`} 
                        placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        required 
                        className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-300'} bg-white text-slate-900 text-lg placeholder-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-medium`} 
                        placeholder="+91 9403890720" 
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.value = target.value.replace(/[^0-9+]/g, '');
                        }}
                        maxLength={13}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                  <textarea 
                    name="message" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-lg placeholder-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all h-24 resize-none font-medium" 
                    placeholder="Tell us about your dealership volume..."
                  ></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-500/20 flex items-center justify-center space-x-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? <span>Sending...</span> : <><span>Submit Request</span><Send size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Privacy Policy Page Component
const PrivacyPolicyPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button 
          onClick={onBack} 
          className="group flex items-center text-sm font-semibold text-slate-500 hover:text-brand-600 mb-8 transition-colors"
        >
          <div className="bg-white border border-slate-200 p-2 rounded-full mr-3 shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeft size={16} />
          </div>
          Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-500 text-sm mb-8 font-medium">Last Updated: December 1, 2025</p>

          <p className="text-slate-600 mb-6 leading-relaxed">
            At RTO Buddy, accessible from https://rtobuddy.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by RTO Buddy and how we use it.
          </p>

          <div className="space-y-8">
            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
                <p className="text-slate-600 mb-2">We collect several different types of information for various purposes to provide and improve our Service to you:</p>
                
                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Personal Data</h3>
                <p className="text-slate-600 mb-2">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Business/Dealership Name</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Usage Data</h3>
                <p className="text-slate-600 mb-2">We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">2. How We Use Your Data</h2>
                <p className="text-slate-600 mb-2">RTO Buddy uses the collected data for various purposes:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                    <li>To provide and maintain the Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>
            </section>

             <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">3. Data Retention</h2>
                <p className="text-slate-600">
                    RTO Buddy will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">4. Disclosure of Data</h2>
                <p className="text-slate-600 mb-2">RTO Buddy may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                <ul className="list-disc pl-5 text-slate-600 space-y-1">
                    <li>To comply with a legal obligation</li>
                    <li>To protect and defend the rights or property of RTO Buddy</li>
                    <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                    <li>To protect the personal safety of users of the Service or the public</li>
                    <li>To protect against legal liability</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">5. Security of Data</h2>
                <p className="text-slate-600">
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">6. Third Party Service Providers</h2>
                <p className="text-slate-600">
                    We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-slate-900 mb-3">7. Contact Us</h2>
                <p className="text-slate-600 mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                </p>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="flex items-start space-x-3 text-slate-700 mb-3">
                        <Mail size={18} className="mt-1 text-brand-500" />
                        <span>info@rtobuddy.in</span>
                    </div>
                     <div className="flex items-start space-x-3 text-slate-700 mb-3">
                        <Phone size={18} className="mt-1 text-brand-500" />
                        <span>+91 9403890720</span>
                    </div>
                     <div className="flex items-start space-x-3 text-slate-700">
                        <MapPin size={18} className="mt-1 text-brand-500" />
                        <span>Basti, Uttar Pradesh, India</span>
                    </div>
                </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timelineEvents = [
    {
      year: "Inception",
      title: "Closed Beta",
      desc: "Started with 8 high-volume dealers. We learned that real-world scanners are messy and portals are strict.",
      icon: <FlaskConical size={20} />
    },
    {
      year: "Testing",
      title: "Stress Test",
      desc: "Processed over 28,000 files. We trained our algorithms on the weirdest, darkest, and most crooked scans we could find.",
      icon: <BarChart3 size={20} />
    },
    {
      year: "Launch",
      title: "Public Release",
      desc: "RTO Buddy v2.0 goes live. Battle-tested, reliable, and ready for any dealership in India.",
      icon: <Rocket size={20} />
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="group flex items-center text-sm font-semibold text-slate-500 hover:text-brand-600 mb-8 transition-colors">
          <div className="bg-white border border-slate-200 p-2 rounded-full mr-3 shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeft size={16} />
          </div>
          Back to Home
        </button>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
             <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 rounded-full px-3 py-1 mb-4">
                <History size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">Our Journey</span>
             </div>
             <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
               From v1.0 to v2.0: <br /><span className="text-brand-600">A Journey of Perfection</span>
             </h1>
             <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
               RTO Buddy didn't just appear overnight. It is the result of two years of relentless testing, feedback, and refinement in the real world.
             </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-br from-slate-800 to-brand-900 p-8 md:p-10 text-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
               <div className="relative z-10">
                  <div className="inline-flex items-center gap-3 text-sm md:text-base font-mono text-brand-200 mb-2">
                     <span>v1.0 (Beta)</span>
                     <ArrowRight size={16} />
                     <span className="font-bold text-white">v2.0 (Live)</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Market Accessible & Battle Tested</h2>
               </div>
            </div>
            <div className="p-8 md:p-12 bg-white relative">
               <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-0.5 bg-slate-200 -translate-x-1/2"></div>
               <div className="md:hidden absolute left-8 top-12 bottom-12 w-0.5 bg-slate-200"></div>
               <div className="space-y-12">
                 {timelineEvents.map((event, idx) => (
                   <div key={idx} className={`flex md:items-center gap-6 relative ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                      <div className="md:hidden flex flex-col items-center shrink-0 w-16 pt-1">
                         <div className="w-16 h-8 bg-white border border-brand-200 text-brand-600 text-xs font-bold rounded-full flex items-center justify-center shadow-sm z-10 relative">
                           {event.year}
                         </div>
                      </div>
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-24 h-8 bg-white border border-brand-200 text-brand-600 text-xs font-bold rounded-full items-center justify-center shadow-sm z-10">
                        {event.year}
                      </div>
                      <div className={`w-full md:w-[45%] p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300`}>
                         <div className="flex items-center gap-3 mb-2 text-slate-900">
                            <div className="p-2 bg-brand-100 text-brand-600 rounded-lg shrink-0">
                              {event.icon}
                            </div>
                            <h3 className="font-bold text-lg">{event.title}</h3>
                         </div>
                         <p className="text-sm text-slate-600 leading-relaxed">
                           {event.desc}
                         </p>
                      </div>
                      <div className="hidden md:block w-[45%]"></div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="bg-slate-900 p-8 md:p-12 text-white">
               <div className="grid grid-cols-3 gap-4 md:gap-8 divide-x divide-slate-800/50">
                  <div className="text-center px-2">
                     <div className="w-10 h-10 mx-auto bg-brand-900/50 rounded-full flex items-center justify-center text-brand-400 mb-3">
                        <FileText size={20} />
                     </div>
                     <div className="text-2xl md:text-3xl font-bold text-white mb-1">28k+</div>
                     <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Files Processed</div>
                  </div>
                  <div className="text-center px-2">
                     <div className="w-10 h-10 mx-auto bg-purple-900/50 rounded-full flex items-center justify-center text-purple-400 mb-3">
                        <Clock size={20} />
                     </div>
                     <div className="text-2xl md:text-3xl font-bold text-white mb-1">2 Yrs</div>
                     <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Beta Testing</div>
                  </div>
                  <div className="text-center px-2">
                     <div className="w-10 h-10 mx-auto bg-emerald-900/50 rounded-full flex items-center justify-center text-emerald-400 mb-3">
                        <CheckCircle size={20} />
                     </div>
                     <div className="text-2xl md:text-3xl font-bold text-white mb-1">100%</div>
                     <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Market Ready</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TermsPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <button
          onClick={onBack}
          className="group flex items-center text-sm font-semibold text-slate-500 hover:text-brand-600 mb-8 transition-colors"
        >
          <div className="bg-white border border-slate-200 p-2 rounded-full mr-3 shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeft size={16} />
          </div>
          Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms & Conditions</h1>
          <p className="text-slate-500 text-sm mb-8 font-medium">Last Updated: December 1, 2025</p>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Please read these Terms & Conditions ("Terms") carefully before using RTO Buddy (“Service,” “we,” “our,” “us”). By accessing our website or application, you agree to be bound by these Terms.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">1. Use of the Service</h2>
              <p className="text-slate-600 mb-2">You agree to use RTO Buddy only for lawful and authorized purposes. You must not:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Upload false, misleading, or illegal information.</li>
                <li>Attempt to disrupt, interfere with, or reverse-engineer the system.</li>
                <li>Engage in fraudulent or harmful behavior affecting the platform or other users.</li>
              </ul>
              <p className="text-slate-600 mt-2 text-sm italic">We reserve the right to suspend services immediately if we detect violations.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">2. Accounts & Registration</h2>
              <p className="text-slate-600 mb-2">To access certain features, you may need to create an account. You agree to:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Provide accurate, current, and complete information.</li>
                <li>Safeguard your login credentials and access keys.</li>
                <li>Notify us immediately of unauthorized account access.</li>
              </ul>
              <p className="text-slate-600 mt-2">You are fully responsible for all activity that occurs under your account.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">3. Services Provided</h2>
              <p className="text-slate-600 mb-2">RTO Buddy offers specialized tools including:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>RTO-related document management and processing.</li>
                <li>Dealership workflow dashboards.</li>
                <li>Lead management and communication tools.</li>
                <li>Automated formatting utilities.</li>
              </ul>
              <div className="mt-3 p-3 bg-amber-50 border border-amber-100 rounded-lg">
                <p className="text-amber-800 text-sm font-semibold flex items-center">
                  <AlertTriangle size={14} className="mr-2" />
                  Note: We do NOT provide VIN lookup or VIN decoding services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">4. Accuracy of Data</h2>
              <p className="text-slate-600 mb-2">We strive to provide reliable information and processing, but:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Data may come from third-party or public sources which we do not control.</li>
                <li>We cannot guarantee 100% accuracy or completeness of external data.</li>
                <li>Users should verify critical details with official RTO authorities.</li>
              </ul>
              <p className="text-slate-600 mt-2">Use the information provided by the service at your own discretion.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">5. Payments & Subscriptions</h2>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Payments are processed via secure third-party providers.</li>
                <li>Subscription fees are non-refundable unless required by applicable law.</li>
                <li>Pricing structures may change with prior notice to active subscribers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">6. Intellectual Property</h2>
              <p className="text-slate-600">
                All branding, software, code, and content belong to RTO Buddy. You may not copy, distribute, reproduce, or modify our materials or use our trademarks without express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">7. Third-Party Content</h2>
              <p className="text-slate-600">
                Our service may contain links to third-party tools or websites. We are not responsible for their content, privacy practices, or any damages resulting from their use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">8. Limitation of Liability</h2>
              <p className="text-slate-600 mb-2">To the maximum extent permitted by law, RTO Buddy is not liable for:</p>
              <ul className="list-disc pl-5 text-slate-600 space-y-1">
                <li>Indirect, incidental, or consequential damages.</li>
                <li>Loss of business, revenue, data, or profits.</li>
                <li>Errors originating from third-party sources or user inputs.</li>
              </ul>
              <p className="text-slate-600 mt-2">You use the service at your own risk.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">9. Termination</h2>
              <p className="text-slate-600">
                We may terminate or restrict access to the service if you violate these Terms, misuse our platform, or engage in unauthorized or illegal activity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">10. Changes to These Terms</h2>
              <p className="text-slate-600">
                We may revise these Terms occasionally. Continued use of the Service after updates constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">11. Governing Law</h2>
              <p className="text-slate-600">
                These Terms are governed by and construed in accordance with the laws of India.
              </p>
            </section>

            <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-8">
              <h2 className="text-xl font-bold text-slate-900 mb-4">12. Contact & Escalation</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">General Support</h3>
                  <div className="flex items-start space-x-3 text-slate-700">
                    <Mail size={18} className="mt-1 text-brand-500" />
                    <span>info@rtobuddy.in</span>
                  </div>
                  <div className="flex items-start space-x-3 text-slate-700 mt-2">
                    <Phone size={18} className="mt-1 text-brand-500" />
                    <span>+91 9403890720</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Escalations</h3>
                  <p className="text-xs text-slate-500 mb-2">For unresolved issues or serious concerns:</p>
                  <div className="flex items-start space-x-3 text-slate-700">
                    <Mail size={18} className="mt-1 text-red-500" />
                    <span>info@vyke.co.in</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    if (page === 'home' && section) {
      setTimeout(() => {
        if (section === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(section);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }
      }, 10);
    } else if (page === 'about' || page === 'contact' || page === 'privacy' || page === 'terms') {
       window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`min-h-screen bg-slate-50 selection:bg-brand-100 selection:text-brand-900 relative ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}>
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {currentPage === 'home' ? (
            <>
              <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                   <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                   <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                   <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-6 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
                        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">v2.0 Now Live for All Dealers</span>
                      </div>
                      <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-6">
                        Seamless RTO <br />
                        <span className="text-brand-600">Document Management</span>
                      </h1>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
                        Stop struggling with Vaahan portal rejections. RTO Buddy auto-resizes, splits, and formats your documents in seconds. Zero errors. Zero penalties.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <button onClick={() => handleNavigate('contact', 'top')} className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-1 flex items-center justify-center">
                          Start Free Trial <ArrowRight className="ml-2" size={20} />
                        </button>
                        <button onClick={() => handleNavigate('home', 'calculator')} className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center">
                          <Calculator className="mr-2 text-slate-500" size={16} /> Calculate Savings
                        </button>
                      </div>
                      <div className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200/60 pt-8">
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900">200K+</h3>
                          <p className="text-sm text-slate-500 font-medium mt-1">Documents Processed</p>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900">0%</h3>
                          <p className="text-sm text-slate-500 font-medium mt-1">Rejection Rate</p>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900">75%</h3>
                          <p className="text-sm text-slate-500 font-medium mt-1">Time Saved</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <InteractiveErrorCard />
                    </div>
                  </div>
                </div>
              </section>
              <BrandLogos />
              <TimeSavingsCalculator />
              <section id="features" className="py-24 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Every Dealership Type</h2>
                    <p className="text-lg text-slate-600">
                      Whether you are a 2W, 3W, or 4W dealership (AD, ARD, or ASC), RTO Buddy adapts to your volume.
                    </p>
                  </div>
                  <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 scrollbar-hide">
                    {[
                      { icon: <Maximize size={32} className="text-brand-600" />, title: "Auto-Fixes Size (400KB)", desc: "Automatically compresses files to meet the RTO's strict 400KB limit without losing readability." },
                      { icon: <FolderPlus size={32} className="text-brand-600" />, title: "Smart Folder Creation", desc: "Just enter a customer name. RTO Buddy creates a desktop folder with all files named correctly." },
                      { icon: <Clock size={32} className="text-brand-600" />, title: "Saves 75% Staff Time", desc: "Turn a 20-minute manual task into a 3-minute automatic process. Free up your staff." },
                      { icon: <Shield size={32} className="text-brand-600" />, title: "Zero Rejections", desc: "Our algorithms ensure every document is legible and formatted exactly how Vaahan wants it." },
                      { icon: <ImageIcon size={32} className="text-brand-600" />, title: "Photo to PDF", desc: "Instantly convert vehicle photos (Front, Side, Chassis) into compliant PDFs." },
                      { icon: <Smartphone size={32} className="text-brand-600" />, title: "App Compatible", desc: "Works seamlessly with scans from Adobe Scan, CamScanner, or any high-speed office scanner." }
                    ].map((feature, i) => (
                      <div key={i} className="snap-center shrink-0 w-[85vw] sm:w-80 md:w-auto p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group h-full">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <WorkflowSection />
              <VideoShowcase />
              <TestimonialsSection />
              <section id="pricing" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                  <div className="bg-brand-600 rounded-3xl p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-brand-500/30">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-black opacity-10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative z-10">Ready to Speed Up Your RTO Work?</h2>
                    <p className="text-brand-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                      Join hundreds of dealers who have automated their documentation process. Start your free trial today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                      <button onClick={() => handleNavigate('contact', 'top')} className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
                        Download Free Trial
                      </button>
                      <button onClick={() => handleNavigate('contact', 'top')} className="bg-brand-700 border border-brand-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : currentPage === 'about' ? (
            <AboutPage onBack={() => handleNavigate('home', 'hero')} />
          ) : currentPage === 'privacy' ? (
            <PrivacyPolicyPage onBack={() => handleNavigate('home', 'hero')} />
          ) : currentPage === 'terms' ? (
            <TermsPage onBack={() => handleNavigate('home', 'hero')} />
          ) : (
            <ContactPage onBack={() => handleNavigate('home', 'hero')} />
          )}
          <WhatsAppButton />
        </main>
        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-6 text-white">
                  <div className="bg-brand-600 p-1.5 rounded">
                    <Layers size={20} />
                  </div>
                  <span className="text-xl font-extrabold">RTO Buddy</span>
                </div>
                <p className="mb-6 max-w-sm">
                  The #1 Document Management Solution for Automobile Dealers in India. Trusted, Fast, and Compliant.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/vyke-retail-private-limited/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/rtobuddy.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} className="hover:text-brand-400 transition-colors">About Us</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }} className="hover:text-brand-400 transition-colors">Contact</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('privacy'); }} className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('terms'); }} className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                <ul className="space-y-3">
                  <li>info@rtobuddy.in</li>
                  <li>+91 9403890720</li>
                  <li>Basti, Uttar Pradesh, India</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm flex flex-col md:flex-row items-center justify-between">
              <p>© {new Date().getFullYear()} RTO Buddy. All rights reserved.</p>
              <div className="flex items-center mt-4 md:mt-0">
                <span className="text-slate-500 mr-1">A product by</span>
                <VykeLogo />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;