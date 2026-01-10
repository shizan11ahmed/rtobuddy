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
          <path d="M13 30L25 36L37 30" stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" className={`${getAnimClass(1)} transition-transform duration-300 ease-out group-hover:translate-y-1`} />
          <path d="M13 24L25 30L37 24" stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" className={`${getAnimClass(2)} transition-opacity duration-300`} />
          <path d="M25 12L13 18L25 24L37 18L25 12Z" stroke="white" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" className={`${getAnimClass(3)} transition-transform duration-300 ease-out group-hover:-translate-y-1.5`} />
        </g>
        <text x={isLarge ? "90" : "60"} y={isLarge ? "50" : "35"} fontFamily="Inter, sans-serif" fontWeight="800" fontSize={fontSize} fill="#0f172a" className="animate-reveal">
          RTO <tspan fill="#0284c7" className="transition-colors duration-300 group-hover:fill-brand-500">Buddy</tspan>
        </text>
      </svg>
    </div>
  );
};

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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'hero'); }} className="flex items-center space-x-2 group cursor-pointer select-none">
            <AnimatedLogo size="normal" variant="stack" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={`#${link.section}`} onClick={(e) => handleNavClick(e, link)} className={`text-sm font-medium transition-colors ${currentPage === link.id && link.name !== 'Home' ? 'text-brand-600 font-bold' : 'text-slate-600 hover:text-brand-600'}`}>
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <button onClick={() => onNavigate('contact', 'top')} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm">
              Get Started
            </button>
          </div>
          <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={`#${link.section}`} onClick={(e) => handleNavClick(e, link)} className="block text-slate-600 font-medium hover:text-brand-600">
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
              <p className="text-slate-600 font-bold text-sm mb-6 max-w-[260px]">The document you uploaded was rejected by the portal.</p>
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
                  </div>
                </div>
              </div>
              <button className="w-full bg-brand-600 text-white py-3 px-4 rounded-lg font-semibold shadow-lg shadow-brand-500/20 hover:bg-brand-700 transition-colors flex items-center justify-center space-x-2">
                <Zap size={18} /> <span>Fix with RTO Buddy</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center w-full animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-20"></div>
                <CheckCircle className="text-emerald-500 w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Successful!</h3>
              <p className="text-slate-500 text-sm mb-6">Document optimized and compliant.</p>
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
                      <p className="text-sm font-mono font-bold text-emerald-700">298 KB</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Clarity</span>
                      <p className="text-sm font-bold text-emerald-700">High Res</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="w-full bg-slate-900 text-white py-3 px-4 rounded-lg font-semibold shadow-lg text-sm hover:bg-slate-800 transition-colors">Process Next</button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 text-center relative z-10">
         <p className="inline-flex items-center text-slate-600 font-bold text-sm animate-pulse-slow cursor-pointer hover:text-brand-600 transition-colors bg-white/80 px-5 py-2 rounded-full backdrop-blur-sm border border-slate-200 shadow-sm" onClick={handleFix}>
           <Maximize size={16} className="mr-2" /> {isFixed ? "Click to reset simulation" : "Click card above to simulate fix"}
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
               <img src={brand.url} alt={`${brand.name} Logo`} className="max-h-full max-w-full object-contain" loading="lazy" />
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
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Manual RTO work kills productivity. Move the slider to see how much time RTO Buddy can give back.</p>
            <div className="mb-6">
              <div className="flex justify-between items-end mb-3">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Vehicle Sales</label>
                <span className="text-3xl font-bold text-white tracking-tight">{monthlySales}</span>
              </div>
              <input type="range" min="10" max="500" step="10" value={monthlySales} onChange={(e) => setMonthlySales(parseInt(e.target.value))} className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-white hover:accent-brand-200 transition-all" />
            </div>
            <div className="flex items-center text-xs text-slate-400 gap-2">
               <RefreshCw size={12} className="text-slate-500" />
               <span>Calculated based on <strong className="text-slate-300">{annualFiles.toLocaleString()} files/year</strong></span>
            </div>
          </div>
          <div className="flex-1 w-full md:max-w-[16rem] lg:max-w-[18rem]">
            <div className="bg-[#121a2b] border border-slate-800 rounded-xl p-5 shadow-xl relative overflow-hidden text-center">
               <p className="text-slate-300 font-medium mb-1 text-xs">Total Time Saved Annually</p>
               <div className="flex items-baseline justify-center gap-1.5 mb-4">
                  <span className="text-4xl font-extrabold text-brand-400 tracking-tight">{savedHours}</span>
                  <span className="text-lg font-bold text-brand-600">hrs</span>
               </div>
               <div className="inline-flex items-center bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-semibold animate-pulse-slow">
                  <CheckCircle size={12} className="mr-1.5" /> Equal to {savedDays} work days!
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
    { title: "Capture Docs", desc: "Use office scanners or mobile apps.", icon: <ScanLine className="w-6 h-6 text-brand-600" /> },
    { title: "Drag & Drop", desc: "Drop raw images or PDFs into RTO Buddy.", icon: <Upload className="w-6 h-6 text-purple-600" /> },
    { title: "AI Process", desc: "Auto-splits and compresses to <400KB.", icon: <RefreshCw className="w-6 h-6 text-pink-600" /> },
    { title: "Ready", desc: "Compliant folder created instantly.", icon: <FileCheck className="w-6 h-6 text-emerald-600" /> },
  ];

  return (
    <section id="workflow" className="py-20 bg-slate-50 border-y border-slate-200">
       <div className="container mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900">Simple 4-Step Workflow</h2>
             <p className="text-slate-600 mt-2">No complex training needed.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
             {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all">
                   <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-900 font-bold border border-slate-100">{idx + 1}</div>
                   <div className="mb-4">{step.icon}</div>
                   <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                   <p className="text-sm text-slate-500 leading-snug">{step.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const VideoShowcase = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const demoVideo = {
    id: 'main',
    ytId: 'uZNl3o6Kgbk',
    title: 'Platform Walkthrough',
    desc: 'Deep dive into the dashboard, bulk processing, and automatic folder creation.',
    thumb: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop'
  };

  const reelVideo = {
    id: 'short1',
    ytId: 'RXEKRFgIBEU',
    title: 'Mobile Experience',
    desc: 'See how the mobile scan-to-portal pipeline works in under 60 seconds.',
    thumb: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800&auto=format&fit=crop'
  };

  return (
    <section id="videos" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-brand-600 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-purple-600 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
            <Play size={14} className="text-brand-400" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">The RTO Masterclass</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Watch, Learn & Automate</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Experience the efficiency of RTO Buddy through our structured video guides.</p>
        </div>

        {/* Bento Grid Design Logic */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Main Demo Card */}
          <div className="lg:col-span-2 group relative bg-slate-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-500 hover:border-brand-500/50">
            <div className="aspect-video relative overflow-hidden">
              {playingId !== demoVideo.id ? (
                <button 
                  type="button" 
                  className="absolute inset-0 w-full h-full cursor-pointer group/btn" 
                  onClick={() => setPlayingId(demoVideo.id)}
                >
                  <img src={demoVideo.thumb} alt={demoVideo.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent group-hover:from-slate-950/80 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center shadow-2xl shadow-brand-500/40 transform transition-all duration-500 group-hover/btn:scale-110 group-hover/btn:bg-white group-hover/btn:text-brand-600">
                      <Play size={32} fill="currentColor" />
                    </div>
                    <p className="mt-6 font-bold text-xl tracking-wide opacity-0 group-hover/btn:opacity-100 transform translate-y-4 group-hover/btn:translate-y-0 transition-all duration-500">Watch Full Demo</p>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center space-x-3 mb-2">
                       <span className="bg-brand-500 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-widest">Tutorial</span>
                       <span className="text-slate-400 text-xs font-medium">12:40 Min</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{demoVideo.title}</h3>
                  </div>
                </button>
              ) : (
                <iframe 
                  width="100%" height="100%" 
                  src={`https://www.youtube-nocookie.com/embed/${demoVideo.ytId}?autoplay=1&rel=0&modestbranding=1`} 
                  title={demoVideo.title} frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>

          {/* Mobile Reel Card (Portrait Phone Mockup) */}
          <div className="lg:row-span-1 bg-[#0d1425] rounded-[2rem] border border-white/5 overflow-hidden flex flex-col items-center p-8 group transition-all duration-500 hover:border-brand-500/50">
            <div className="mb-6 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{reelVideo.title}</h3>
              <p className="text-slate-500 text-sm">{reelVideo.desc}</p>
            </div>
            
            {/* Phone Frame Mockup */}
            <div className="relative w-full max-w-[280px] aspect-[9/18.5] bg-black rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
              {playingId !== reelVideo.id ? (
                <button 
                  type="button" 
                  className="absolute inset-0 w-full h-full group/reel"
                  onClick={() => setPlayingId(reelVideo.id)}
                >
                  <img src={reelVideo.thumb} alt={reelVideo.title} className="w-full h-full object-cover opacity-60 group-hover/reel:opacity-40 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/reel:bg-brand-600 transition-all group-hover/reel:scale-110">
                       <Play size={24} fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">Quick Reel</span>
                  </div>
                </button>
              ) : (
                <iframe 
                  width="100%" height="100%" 
                  src={`https://www.youtube-nocookie.com/embed/${reelVideo.ytId}?autoplay=1&rel=0&controls=0`} 
                  title={reelVideo.title} frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen 
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>

          {/* Feature Grid Item 1 */}
          <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 flex flex-col justify-center items-center text-center group hover:bg-slate-900 transition-all duration-500">
             <div className="w-16 h-16 rounded-3xl bg-brand-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="text-brand-500" size={32} />
             </div>
             <h4 className="text-xl font-bold mb-3">Instant Processing</h4>
             <p className="text-slate-500 text-sm leading-relaxed">AI engine that formats documents in less than 2 seconds with zero latency.</p>
          </div>

          {/* Feature Grid Item 2 */}
          <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 flex flex-col justify-center items-center text-center group hover:bg-slate-900 transition-all duration-500">
             <div className="w-16 h-16 rounded-3xl bg-emerald-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="text-emerald-500" size={32} />
             </div>
             <h4 className="text-xl font-bold mb-3">Gov-Portal Ready</h4>
             <p className="text-slate-500 text-sm leading-relaxed">Documents always adhere to the exact pixel and byte limits of the Vaahan portal.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Rajesh Kumar", role: "Owner, Sai Motors", content: "RTO Buddy has saved us hours every day. No more portal rejections and the team is much happier.", rating: 5 },
    { name: "Anita Singh", role: "Operations Manager", content: "The automatic compression is a life-saver. We used to spend all day resizing images manually.", rating: 5 }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted by 500+ Dealers</h2>
          <p className="text-slate-500">Don't just take our word for it.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all">
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} className="text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-600 mb-6 italic text-lg">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold">{t.name[0]}</div>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
          <div className="bg-slate-900 p-10 text-white md:w-1/3">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Mail size={20} className="text-brand-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">Email</p>
                  <p className="text-sm">support@rtobuddy.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone size={20} className="text-brand-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase">WhatsApp</p>
                  <p className="text-sm">+91 94038 90720</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-10 flex-1">
            <h4 className="text-xl font-bold mb-6">Send us a message</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Dealership</label>
                  <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="Apex Motors" />
                </div>
              </div>
              <textarea rows={4} className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500 outline-none" placeholder="How can we help?"></textarea>
              <button className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold hover:bg-brand-700 transition-all shadow-xl flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-sm">
           <AnimatedLogo size="normal" variant="stack" />
           <p className="mt-6 text-slate-400 leading-relaxed text-sm">
             RTO Buddy is India's leading automation platform for automobile dealerships. 
             We simplify documentation so you can focus on what matters: selling vehicles.
           </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
           <div>
             <h5 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Platform</h5>
             <ul className="space-y-2 text-xs">
               <li><a href="#" className="hover:text-brand-400 transition-colors">Features</a></li>
               <li><a href="#" className="hover:text-brand-400 transition-colors">Pricing</a></li>
             </ul>
           </div>
           <div>
             <h5 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Company</h5>
             <ul className="space-y-2 text-xs">
               <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
               <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy</a></li>
             </ul>
           </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-800 text-center text-[10px]">
        <p>© 2024 RTO Buddy (Vyke). Built for Indian Dealerships.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="pt-20">
        {currentPage === 'home' ? (
          <>
            <section id="hero" className="py-16 lg:py-28 overflow-hidden bg-white">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center space-x-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-6">
                       <Award size={14} className="text-brand-600" />
                       <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">India's Leading RTO Automation</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
                      Upload Once. <br /> 
                      <span className="text-brand-600">Zero Rejections.</span>
                    </h1>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                      Automatically process, split, and optimize vehicle documents for the Vaahan portal. Save up to 90% of your time on every file.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                      <button onClick={() => handleNavigate('contact', 'top')} className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2 group">
                        Start Free Trial <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 w-full max-w-lg lg:max-w-none">
                    <InteractiveErrorCard />
                  </div>
                </div>
              </div>
            </section>
            <BrandLogos />
            <section id="features" className="py-24 bg-white">
              <div className="container mx-auto px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Performance</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">Tools designed to help dealership teams move at the speed of sales.</p>
                 </div>
                 <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: <Zap className="text-brand-600" />, title: "Bulk Upload", desc: "Upload hundreds of scanned documents at once. AI handles the rest." },
                      { icon: <Shield className="text-emerald-600" />, title: "Secure Storage", desc: "Data is encrypted and secure, compliant with Indian digital standards." },
                      { icon: <Layers className="text-purple-600" />, title: "Auto-Folder", desc: "Instantly generates organized folders for each registration." },
                      { icon: <BarChart3 className="text-blue-600" />, title: "Team Dashboard", desc: "Monitor efficiency across all dealership locations." },
                      { icon: <Smartphone className="text-pink-600" />, title: "Mobile Ready", desc: "Works seamlessly with existing mobile scanners." },
                      { icon: <CheckCircle className="text-orange-600" />, title: "Real-time Fixes", desc: "Fixes potential portal errors before you upload." }
                    ].map((f, i) => (
                      <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all">
                         <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4">{f.icon}</div>
                         <h3 className="font-bold text-slate-900 mb-2">{f.title}</h3>
                         <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
            </section>
            <TimeSavingsCalculator />
            <WorkflowSection />
            <VideoShowcase />
            <TestimonialsSection />
          </>
        ) : currentPage === 'about' ? (
           <section id="about" className="py-20">
             <div className="container mx-auto px-4 max-w-4xl text-center">
               <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">Our Mission</h2>
               <p className="text-lg text-slate-600 leading-relaxed mb-8">
                 RTO Buddy helps dealers turn hours of work into seconds using modern AI and computer vision.
               </p>
               <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="bg-slate-50 p-8 rounded-3xl">
                     <h4 className="text-2xl font-bold mb-1">500k+</h4>
                     <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Docs Processed</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl">
                     <h4 className="text-2xl font-bold mb-1">90%</h4>
                     <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Effort Saved</p>
                  </div>
               </div>
             </div>
           </section>
        ) : (
          <ContactSection />
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;