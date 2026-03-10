
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  MousePointer2,
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
  ChevronDown,
  ChevronUp,
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
  Linkedin,
  Facebook,
  Twitter,
  LayoutDashboard,
  UserCircle,
  HelpCircle,
  Scissors,
  Settings2,
  Plus,
  BarChartHorizontal,
  XCircle,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Lock
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
      <img src="https://chutney.pythonanywhere.com/static/full_logo.png" alt="RTO Buddy" className="h-16 w-auto animate-pulse" referrerPolicy="no-referrer" />
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

const BreakingNewsTicker = ({ onNavigate }: { onNavigate: (page: string, section?: string) => void }) => {
  return (
    <div 
      onClick={() => onNavigate('home', 'videos')}
      className="fixed top-0 left-0 w-full z-[60] bg-amber-400 text-slate-900 py-2 overflow-hidden border-b border-amber-500/30 cursor-pointer hover:bg-amber-300 transition-colors group"
    >
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center space-x-8 px-4">
            <span className="flex items-center font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">
              <span className="w-2 h-2 bg-slate-900 rounded-full mr-2 animate-pulse"></span>
              🚨 BREAKING: RTO Buddy 2.1 is now LIVE!
            </span>
            <span className="text-slate-800 font-bold text-[10px] md:text-xs uppercase tracking-widest">
              Zero Reverts, Zero Fines.
            </span>
            <span className="bg-slate-900 text-white px-2 py-0.5 rounded text-[9px] font-bold uppercase group-hover:scale-105 transition-transform">
              Watch Demo →
            </span>
            <span className="text-slate-900/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'} top-8 md:top-10`}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home', 'hero'); }} className="flex items-center space-x-2 group cursor-pointer select-none">
            <img src="https://chutney.pythonanywhere.com/static/full_logo.png" alt="RTO Buddy" className="h-10 w-auto" referrerPolicy="no-referrer" />
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

const PresetShowcase = () => {
  const presetFeatures = [
    { label: "Endless Possibilities", desc: "Create any document combination.", icon: <Layers size={18} />, color: "text-brand-600", bg: "bg-brand-50" },
    { label: "Future-Proof", desc: "Adapt instantly to new RTO rules.", icon: <Shield size={18} />, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Dealer Specific", desc: "Tailor to your exact workflow.", icon: <Settings2 size={18} />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "1-Click Apply", desc: "Save presets for instant use.", icon: <CheckCircle size={18} />, color: "text-blue-600", bg: "bg-blue-50" },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 rounded-full px-3 py-1 mb-4">
                <Settings2 size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">Ultimate Flexibility</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Smart RTO Presets</h2>
              <p className="text-lg text-slate-500">
                RTO rules change. Your workflow shouldn't break. Build custom presets with endless possibilities to match any regional requirement, ensuring your dealership is always future-proof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {presetFeatures.map((feature, i) => (
                <div key={i} className="p-4 md:p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group flex items-center md:flex-col md:text-left text-left gap-3 md:gap-0">
                  <div className={`w-10 h-10 md:w-12 md:h-12 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-0 md:mb-5 group-hover:scale-110 transition-transform shadow-sm shrink-0`}>
                    {React.cloneElement(feature.icon as React.ReactElement, { size: 18 })}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 mb-0.5 md:mb-1 truncate md:whitespace-normal">{feature.label}</h3>
                    <p className="text-[11px] md:text-sm text-slate-500 leading-tight md:leading-normal">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-0.5 md:p-1 shadow-2xl">
              <div className="bg-[#0B1120] rounded-[14px] md:rounded-[22px] p-4 md:p-10 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none hidden md:block">
                  <Settings2 size={200} />
                </div>
                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-500/10 blur-3xl rounded-full pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">Build Your Own Rules</h3>
                    <p className="text-xs md:text-lg text-slate-400 mb-6 md:mb-8 leading-relaxed">
                      Don't get stuck with rigid software. Our intuitive rule builder lets you define exactly which pages go into which forms.
                    </p>
                    <div className="space-y-2 md:space-y-4">
                      <div className="flex items-center gap-3 text-[11px] md:text-base font-medium text-slate-300 bg-slate-800/50 p-2.5 md:p-4 rounded-xl border border-slate-700/50">
                        <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                        <span>Combine multiple pages into one PDF</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] md:text-base font-medium text-slate-300 bg-slate-800/50 p-2.5 md:p-4 rounded-xl border border-slate-700/50">
                        <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                        <span>Extract specific pages (e.g., Page 4 & 7)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-2xl w-full max-w-full lg:max-w-none">
                    <div className="flex items-center justify-between mb-3 md:mb-4 pb-3 md:pb-4 border-b border-slate-700">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></div>
                        <span className="text-[9px] md:text-xs font-bold text-slate-300 uppercase tracking-widest">Preset: MH-01</span>
                      </div>
                      <button className="text-[9px] bg-brand-600 text-white px-2 py-1 rounded-md font-bold uppercase tracking-wider">Save</button>
                    </div>
                    
                    <div className="space-y-2 md:space-y-3">
                      {/* Rule 1 */}
                      <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg md:rounded-xl p-2 md:p-3 flex items-center justify-between gap-2 group">
                        <div className="flex items-center gap-2 min-w-0">
                          <Menu size={12} className="text-slate-600 shrink-0" />
                          <span className="text-[10px] md:text-sm font-bold text-slate-200 truncate">Form_20.pdf</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[8px] md:text-xs text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">P: 1, 2, 5</span>
                          <span className="text-[8px] md:text-xs text-brand-400 bg-brand-500/10 px-1.5 py-0.5 rounded border border-brand-500/20">300KB</span>
                        </div>
                      </div>
                      {/* Rule 2 */}
                      <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg md:rounded-xl p-2 md:p-3 flex items-center justify-between gap-2 group">
                        <div className="flex items-center gap-2 min-w-0">
                          <Menu size={12} className="text-slate-600 shrink-0" />
                          <span className="text-[10px] md:text-sm font-bold text-slate-200 truncate">Address.pdf</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[8px] md:text-xs text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">P: 4</span>
                          <span className="text-[8px] md:text-xs text-brand-400 bg-brand-500/10 px-1.5 py-0.5 rounded border border-brand-500/20">HD</span>
                        </div>
                      </div>
                      <div className="border border-dashed border-slate-700 rounded-lg md:rounded-xl p-2 flex items-center justify-center gap-2 text-slate-500 text-[10px] md:text-sm font-bold">
                        <Plus size={14} /> Add Rule
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardSpotlight = () => {
  const [phase, setPhase] = useState<'idle' | 'grab' | 'drag' | 'process' | 'done'>('idle');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === 'idle') {
      timeout = setTimeout(() => setPhase('grab'), 1500);
    } else if (phase === 'grab') {
      timeout = setTimeout(() => setPhase('drag'), 600);
    } else if (phase === 'drag') {
      timeout = setTimeout(() => setPhase('process'), 800);
    } else if (phase === 'process') {
      let p = 0;
      const interval = setInterval(() => {
        p += 5;
        setProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          setPhase('done');
        }
      }, 100);
      return () => clearInterval(interval);
    } else if (phase === 'done') {
      timeout = setTimeout(() => {
        setPhase('idle');
        setProgress(0);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 lg:mt-0 group">
      {/* Floating Trust Badges */}
      <div className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-float hidden md:block">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
            <BadgeCheck size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Compliance</p>
            <p className="text-xs font-bold text-slate-900">Vaahan Optimized</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 animate-float animation-delay-2000 hidden md:block">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600">
            <Zap size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Speed</p>
            <p className="text-xs font-bold text-slate-900">4s Processing</p>
          </div>
        </div>
      </div>

      {/* Main Dashboard Frame */}
      <div className="relative bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 ring-1 ring-white/10">
        {/* Window Controls */}
        <div className="bg-slate-800/50 px-4 py-3 border-b border-slate-700/50 flex items-center justify-between relative z-10">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
          </div>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">RTO Buddy • AI Automation</div>
          <div className="w-12"></div>
        </div>

        {/* Dashboard Content */}
        <div className="relative min-h-[400px] lg:min-h-[450px] w-full bg-slate-900 overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 md:p-12">
          
          {/* Animated File */}
          {(phase === 'idle' || phase === 'grab' || phase === 'drag') && (
            <div 
              className={`absolute z-40 flex flex-col items-center justify-center bg-white p-3 md:p-4 rounded-xl shadow-2xl border border-slate-200 transition-all duration-700 ease-in-out
                ${phase === 'idle' ? 'left-[60%] top-[65%] md:left-[75%] md:top-[70%] scale-100 rotate-12' : ''}
                ${phase === 'grab' ? 'left-[60%] top-[65%] md:left-[75%] md:top-[70%] scale-95 rotate-6' : ''}
                ${phase === 'drag' ? 'left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 scale-90 rotate-0 opacity-50' : ''}
              `}
            >
              <FileText className="text-red-500 w-8 h-8 md:w-10 md:h-10 mb-1" />
              <span className="text-[8px] md:text-[10px] font-bold text-slate-700 whitespace-nowrap">Raw_Scan.pdf</span>
            </div>
          )}

          {/* Animated Cursor */}
          {(phase === 'idle' || phase === 'grab' || phase === 'drag') && (
            <div 
              className={`absolute z-50 text-white drop-shadow-lg transition-all duration-700 ease-in-out
                ${phase === 'idle' ? 'left-[70%] top-[85%] md:left-[85%] md:top-[85%] scale-100' : ''}
                ${phase === 'grab' ? 'left-[65%] top-[72%] md:left-[78%] md:top-[75%] scale-90' : ''}
                ${phase === 'drag' ? 'left-[52%] top-[55%] md:left-[52%] md:top-[55%] -translate-x-1/2 -translate-y-1/2 scale-90' : ''}
              `}
            >
              <MousePointer2 className="w-8 h-8 md:w-10 md:h-10 fill-slate-900 stroke-white stroke-2" />
            </div>
          )}

          {(phase === 'idle' || phase === 'grab' || phase === 'drag') && (
             <div 
               className={`w-full max-w-xl border-2 border-dashed rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center transition-all duration-500
                 ${phase === 'drag' ? 'border-brand-500 bg-brand-500/10 scale-105' : 'border-slate-700 bg-slate-800/30'}
               `}
             >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-colors duration-500 ${phase === 'drag' ? 'bg-brand-500/20' : 'bg-slate-800'}`}>
                   <Upload className={`w-8 h-8 transition-colors duration-500 ${phase === 'drag' ? 'text-brand-400' : 'text-slate-500'}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Drop Raw Dealership Scan Here</h3>
                <p className="text-slate-400 mb-6 text-sm">1 PDF • 15 Pages • 10.4 MB</p>
                <div className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${phase === 'drag' ? 'bg-brand-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                   Simulate Processing
                </div>
             </div>
          )}

          {phase === 'process' && (
             <div className="w-full max-w-md text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-brand-900/50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                   <div className="absolute inset-0 border-4 border-brand-500/30 rounded-full border-t-brand-500 animate-spin"></div>
                   <RefreshCw className="text-brand-400 w-8 h-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">AI is processing...</h3>
                <p className="text-brand-300 mb-8 font-medium">
                   {progress < 30 ? 'Analyzing 15 pages...' : progress < 60 ? 'Splitting into RTO forms...' : 'Compressing to <400KB...'}
                </p>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
                </div>
             </div>
          )}

          {phase === 'done' && (
             <div className="w-full flex flex-col animate-fade-in-up h-full">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                   <div>
                      <h3 className="text-lg md:text-2xl font-bold text-white flex items-center gap-2">
                         <CheckCircle className="text-emerald-500" size={18} /> <span className="truncate">Processing Complete</span>
                      </h3>
                      <p className="text-slate-400 mt-0.5 text-[10px] md:text-sm">15 pages split into 5 compliant documents in 4.2s</p>
                   </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 w-full overflow-y-auto no-scrollbar pr-1">
                   {[
                     { name: 'Form_20.pdf', size: '280 KB', icon: <FileText className="text-blue-400" size={14}/> },
                     { name: 'Form_21.pdf', size: '150 KB', icon: <FileText className="text-blue-400" size={14}/> },
                     { name: 'Form_22.pdf', size: '190 KB', icon: <FileText className="text-blue-400" size={14}/> },
                     { name: 'Affidavit.pdf', size: '310 KB', icon: <FileText className="text-purple-400" size={14}/> },
                     { name: 'Photos_Front.pdf', size: '380 KB', icon: <ImageIcon className="text-emerald-400" size={14}/> },
                   ].map((file, i) => (
                      <div key={i} className="bg-slate-800/80 border border-slate-700 rounded-lg p-2.5 md:p-4 flex items-center gap-3 hover:border-slate-600 transition-colors group/file cursor-default animate-fade-in-up" style={{ animationDelay: `${i * 50}ms` }}>
                         <div className="bg-slate-900 p-1.5 md:p-2 rounded group-hover/file:scale-110 transition-transform shrink-0">{file.icon}</div>
                         <div className="min-w-0 flex-1">
                            <p className="text-[11px] md:text-sm font-bold text-slate-200 truncate">{file.name}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                               <span className="text-[9px] md:text-xs text-emerald-400 font-mono bg-emerald-400/10 px-1 rounded shrink-0">{file.size}</span>
                               <span className="text-[8px] md:text-[9px] text-slate-500 uppercase tracking-wider font-semibold shrink-0 hidden xs:inline">Compliant</span>
                            </div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          )}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -inset-4 bg-brand-500/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
  
  // Penalty logic: Assume 15% of manual files are reverted, each incurring a ₹300/week penalty
  const estimatedReverts = Math.round(annualFiles * 0.15);
  const penaltySaved = estimatedReverts * 300;

  return (
    <section id="calculator" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-[#0B1120] rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 text-white shadow-2xl ring-1 ring-slate-800 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
            {/* Left side: Inputs */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-3 py-1 mb-6">
                <Calculator size={14} className="text-brand-400" />
                <span className="text-[10px] font-bold text-brand-300 uppercase tracking-widest">ROI Calculator</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Calculate your savings.</h2>
              <p className="text-slate-300 text-sm md:text-lg mb-6 md:mb-10 leading-relaxed">
                Manual RTO work kills productivity. Move the slider to see how much time and money RTO Buddy can save you.
              </p>
              
              <div className="bg-slate-800/40 rounded-[1.5rem] p-5 md:p-6 border border-slate-700/50">
                <div className="flex justify-between items-end mb-6">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-widest">Monthly Sales</label>
                  <span className="text-4xl md:text-6xl font-bold text-white tracking-tight">{monthlySales}</span>
                </div>
                <div className="relative h-10 flex items-center">
                  <input 
                    type="range" 
                    min="10" 
                    max="500" 
                    step="10" 
                    value={monthlySales} 
                    onChange={(e) => setMonthlySales(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-full appearance-none cursor-pointer accent-white hover:accent-brand-400 transition-all"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
                  <span>10 UNITS</span>
                  <span>250 UNITS</span>
                  <span>500+ UNITS</span>
                </div>

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-700/50">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Annual Files</p>
                    <p className="text-lg md:text-xl font-bold text-white">{annualFiles.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Time per file</p>
                    <p className="text-lg md:text-xl font-bold text-white">22m <span className="text-xs text-slate-500 font-normal">vs</span> 2m</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Results */}
            <div className="w-full lg:w-1/2">
              <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-10 shadow-2xl ring-1 ring-white/5 flex flex-col gap-4">
                 
                 {/* Primary Result */}
                 <div className="bg-brand-500/5 border border-brand-500/20 rounded-2xl p-6 md:p-8 text-center order-1">
                    <p className="text-slate-300 font-medium mb-2 text-sm">Total Time Saved Annually</p>
                    <div className="flex items-baseline justify-center gap-2 mb-3">
                       <span className="text-5xl md:text-7xl font-extrabold text-brand-400 tracking-tighter">{savedHours}</span>
                       <span className="text-lg md:text-xl font-bold text-brand-600">HOURS</span>
                    </div>
                    <div className="inline-flex items-center bg-emerald-500/10 text-emerald-400 px-4 md:px-5 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold border border-emerald-500/20">
                       {savedDays} FULL WORK DAYS SAVED
                    </div>
                 </div>

                 {/* Comparison Grid */}
                 <div className="grid grid-cols-2 gap-3 md:gap-4 order-2">
                    <div className="bg-red-500/5 p-4 md:p-6 rounded-2xl border border-red-500/10 text-left">
                       <p className="text-[10px] text-red-400 uppercase font-bold tracking-widest mb-2">Manual Process</p>
                       <p className="text-2xl md:text-3xl font-bold text-white">{manualTotalHours} <span className="text-xs md:text-sm font-medium text-slate-400">hrs/yr</span></p>
                    </div>
                    <div className="bg-emerald-500/5 p-4 md:p-6 rounded-2xl border border-emerald-500/10 text-left">
                       <p className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest mb-2">RTO Buddy</p>
                       <p className="text-2xl md:text-3xl font-bold text-white">{autoTotalHours} <span className="text-xs md:text-sm font-medium text-slate-400">hrs/yr</span></p>
                    </div>
                 </div>

                 {/* Penalty Saved */}
                 <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 md:p-6 text-center order-3">
                    <p className="text-slate-300 font-medium mb-2 text-sm">Estimated Penalty Saved</p>
                    <div className="flex items-baseline justify-center gap-1">
                       <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 tracking-tight">₹{penaltySaved.toLocaleString()}</span>
                       <span className="text-xs md:text-sm font-bold text-emerald-600">/ YEAR</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">Based on 15% revert rate & ₹300 penalty/week</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductTourGallery = () => {
  return (
    <section className="py-24 bg-[#0B1120] border-t border-slate-800 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Inside RTO Buddy 2.1</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Take a closer look at the powerful new features and refined interface designed to accelerate your workflow.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-4 px-4 lg:mx-0 lg:px-0 lg:block lg:space-y-32 lg:pb-0 no-scrollbar">
          {/* Feature 1: Homescreen */}
          <div className="flex-shrink-0 w-[85vw] snap-center flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-brand-500/10 text-brand-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 lg:mb-6">
                <LayoutDashboard size={14} />
                <span>Core Interface</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">Intuitive Homescreen</h3>
              <p className="text-base lg:text-lg text-slate-400 mb-6 lg:mb-8 leading-relaxed">
                A clean, modern interface designed for speed and clarity. Everything you need is just one click away.
              </p>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-brand-500 shrink-0 mt-1" size={16} />
                  <span className="text-sm lg:text-base">Quick access to recent uploads</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-brand-500 shrink-0 mt-1" size={16} />
                  <span className="text-sm lg:text-base">Real-time processing metrics</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-7/12 order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-brand-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 aspect-[16/10] lg:aspect-auto">
                <img src="https://chutney.pythonanywhere.com/static/homescreen_2.1.jpeg" alt="Homescreen" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Feature 2: Presets */}
          <div className="flex-shrink-0 w-[85vw] snap-center flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="w-full lg:w-7/12 relative group">
              <div className="absolute -inset-4 bg-purple-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 aspect-[16/10] lg:aspect-auto">
                <img src="https://chutney.pythonanywhere.com/static/preset_2.1.jpeg" alt="Presets" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 lg:mb-6">
                <Zap size={14} />
                <span>Automation</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">Lightning-Fast Presets</h3>
              <p className="text-base lg:text-lg text-slate-400 mb-6 lg:mb-8 leading-relaxed">
                Select and apply document configurations instantly from the dropdown. Switch rulesets without missing a beat.
              </p>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-purple-500 shrink-0 mt-1" size={16} />
                  <span className="text-sm lg:text-base">Apply complex rules with one click</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-purple-500 shrink-0 mt-1" size={16} />
                  <span className="text-sm lg:text-base">Eliminate manual configuration errors</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 3: Profile */}
          <div className="flex-shrink-0 w-[85vw] snap-center flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
            <div className="w-full lg:w-5/12 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold mb-4 lg:mb-6">
                <UserCircle size={14} />
                <span>Management</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 lg:mb-6 leading-tight">Profile & Support Hub</h3>
              <p className="text-base lg:text-lg text-slate-400 mb-6 lg:mb-8 leading-relaxed">
                Manage dealership details, track usage, and access dedicated support directly from your dashboard.
              </p>
              <ul className="space-y-3 lg:space-y-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={16} />
                  <span className="text-sm lg:text-base">Centralized account management</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={16} />
                  <span className="text-sm lg:text-base">Direct line to priority support</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-7/12 order-1 lg:order-2 relative group">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900 aspect-[16/10] lg:aspect-auto">
                <img src="https://chutney.pythonanywhere.com/static/profile_2.1.jpeg" alt="Profile" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
       <div className="container mx-auto max-w-7xl px-4">
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
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 no-scrollbar">
             {steps.map((step, idx) => (
                <div key={idx} className="flex-shrink-0 w-[75vw] snap-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                   <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-900 font-bold border border-slate-100 relative">
                     {idx + 1}
                   </div>
                   <div className="mb-2">{step.icon}</div>
                   <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                   <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const VideoShowcase = () => {
  const [playingVideo, setPlayingVideo] = useState<'none' | 'main' | 'pitch'>('none');

  return (
    <section id="videos" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-500 blur-[100px]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600 blur-[100px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-16">
           <div className="inline-flex items-center space-x-2 bg-brand-500/20 border border-brand-500/30 text-brand-300 rounded-full px-3 py-1 mb-6">
              <Play size={12} fill="currentColor" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Video Tour</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience RTO Buddy</h2>
           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
             Watch our comprehensive walkthrough or a quick pitch for why dealerships love us.
           </p>
        </div>

        <div className="max-w-4xl mx-auto">
            {/* Main YouTube Video (Horizontal) */}
            <div className="space-y-4">
               <div className="relative aspect-video bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 group ring-1 ring-slate-800/50">
                  {playingVideo !== 'main' ? (
                    <div 
                      className="absolute inset-0 cursor-pointer group"
                      onClick={() => setPlayingVideo('main')}
                    >
                      <img 
                        src="https://chutney.pythonanywhere.com/static/homescreen_2.1.jpeg" 
                        alt="Walkthrough Thumbnail" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center">
                         <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center shadow-lg shadow-brand-500/50 mb-4 animate-pulse-slow group-hover:scale-110 transition-transform">
                            <Play size={32} className="text-white ml-1" fill="currentColor" />
                         </div>
                         <p className="font-bold text-white text-lg tracking-tight">Watch Platform Walkthrough</p>
                      </div>
                    </div>
                  ) : (
                    <video 
                      src="https://chutney.pythonanywhere.com/static/tutorial.mp4" 
                      controls
                      autoPlay
                      className="absolute inset-0 w-full h-full bg-black"
                    />
                  )}
               </div>
               <div className="px-4 text-center max-w-2xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Comprehensive Dashboard Demo</h3>
                  <p className="text-slate-400 mt-3 text-sm md:text-base leading-relaxed">A detailed tour of the RTO Buddy interface. See how we process files in bulk and organize everything into compliant folders automatically.</p>
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
      <div className="container mx-auto max-w-7xl px-4 mb-10 text-center">
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
  const [leadSource, setLeadSource] = useState("Website");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source')?.toLowerCase();
    const fbclid = params.get('fbclid');
    
    if (fbclid || utmSource === 'meta' || utmSource === 'facebook' || utmSource === 'instagram' || utmSource === 'ig') {
      setLeadSource("Meta Ad Campaign");
    } else if (utmSource) {
      setLeadSource(utmSource);
    }
  }, []);

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
        
        // Send lead event to Meta Conversions API via our serverless function
        try {
          await fetch("/api/lead", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: formData.get("phone")?.toString() || ""
            })
          });
        } catch (capiError) {
          console.error("Failed to send CAPI event:", capiError);
        }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
          <div className="bg-slate-900 text-white p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Started with RTO Buddy</h2>
                <p className="text-slate-300 mb-8 text-sm md:text-base leading-relaxed">
                  Fill out the form to start your free trial or request a personalized demo. Join hundreds of dealers saving time today.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Us</p>
                      <p className="font-medium text-sm md:text-base">info@rtobuddy.in</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Call Us</p>
                      <p className="font-medium text-sm md:text-base">+91 9403890720</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Visit Us</p>
                      <p className="font-medium text-sm md:text-base">Basti, Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-10">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Shield size={14} />
                  <span>Your data is secure and compliant.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10 flex items-center">
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
                <input type="hidden" name="Lead Source" value={leadSource} />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        required 
                        className={`w-full px-5 py-3.5 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-300'} bg-white text-slate-900 text-base placeholder-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-medium`} 
                        placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone</label>
                    <input 
                        type="tel" 
                        name="phone" 
                        required 
                        className={`w-full px-5 py-3.5 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-slate-300'} bg-white text-slate-900 text-base placeholder-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all font-medium`} 
                        placeholder="+91 9403890720" 
                        onInput={(e) => {
                            const target = e.target as HTMLInputElement;
                            target.value = target.value.replace(/[^0-9+]/g, '');
                        }}
                        maxLength={13}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
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

// Blog & Resources Page Component
const BlogPage = ({ onBack, onNavigateToContact }: { onBack: () => void, onNavigateToContact: () => void }) => {
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

        <article className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none">
          <div className="mb-8">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold tracking-wide uppercase mb-4">
              Dealership Operations
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Stop the ₹300 Weekly Fine: How RTO Buddy Processes 12+ Vaahan Documents in 4 Seconds
            </h1>
            <div className="flex items-center text-slate-500 text-sm font-medium">
              <span>By Vyke Retail</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 md:p-8 mb-10 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                  <div className="bg-brand-500/20 p-2 rounded-lg">
                    <Calculator className="text-brand-400 w-6 h-6" />
                  </div>
                  ROI & Time Savings Snapshot
                </h3>
                <span className="bg-brand-500/20 text-brand-300 text-[14px] font-bold px-3 py-1.5 rounded-full border border-brand-500/30 self-start sm:self-auto uppercase tracking-wider">
                  RTO Buddy Impact
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-[17px] text-center">
                <div className="bg-slate-800/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-slate-700/50">
                  <div className="text-slate-400 text-sm font-medium mb-2">Time Per File</div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold text-red-400/60 line-through">10m</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-emerald-400">4s</span>
                  </div>
                </div>
                
                <div className="bg-slate-800/80 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-slate-700/50">
                  <div className="text-slate-400 text-sm font-medium mb-2">Weekly Penalties</div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold text-red-400/60 line-through">₹300</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-emerald-400">₹0</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-brand-600 to-brand-800 p-5 md:p-6 rounded-2xl border border-brand-500/50 shadow-inner relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-[50px] opacity-10"></div>
                  <div className="relative z-10">
                    <div className="text-brand-100 text-sm font-medium mb-2">Monthly Savings (100 files)</div>
                    <div className="text-[36px] text-left leading-[37px] font-extrabold text-white mb-1">₹30,000+</div>
                    <div className="text-brand-200 text-xs font-medium flex items-center gap-1">
                      <Clock size={12} /> Plus 16 hours of labor saved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <p className="text-lg font-medium text-slate-800">
              In the world of 2-wheeler and 4-wheeler dealerships—from Hero MotoCorp and Honda to Maruti Suzuki and Mahindra—time isn't just money. Time is a <strong>₹300 weekly penalty per file</strong>.
            </p>

            <p>
              If your Vaahan Dashboard is full of "Pending" or "Reverted" status icons, you aren't just facing an administrative delay; you are facing a massive leak in your profit margins. <strong>RTO Buddy by Vyke Retail</strong> is the only offline tool designed to stop the RTO Revert cycle and clear your backlog instantly.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The "12-File" Nightmare: Why Your RTO Files Get Reverted</h2>
            
            <p>
              The Vaahan Portal is notorious for strict upload requirements. A single registration requires a massive stack of documentation that must be perfectly formatted, compressed, and sequenced:
            </p>

            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li><strong>Form 20:</strong> 3 Pages (Application for Registration)</li>
              <li><strong>Form 21:</strong> 1 Page (Sale Certificate)</li>
              <li><strong>Form 22:</strong> 1 Page (Roadworthiness)</li>
              <li><strong>The Rest:</strong> Insurance, Address Proof, Invoice, ID Proofs... (Total 8-9 PDF Files)</li>
              <li><strong>The Photos:</strong> 3-4 High-res photos of the vehicle, chassis pencil print, and owner.</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8">
              <h3 className="text-red-800 font-bold mb-2">The Problem</h3>
              <p className="text-red-700 m-0">
                Using generic "Online PDF Converters" or "Image Resizers" takes minutes per file, leaks your customer data, and often produces blurry PDFs that the RTO inspector reverts immediately. Every revert adds another week of the <strong>₹300 Vaahan Penalty</strong>.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The RTO Buddy Advantage: From 12 Files to 1 PDF in 4 Seconds</h2>
            
            <p>
              RTO Buddy isn't just a "helper"—it's a high-speed document engine. While your competitors are struggling with "Online PDF Compressors," RTO Buddy users are clearing their dashboards.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-slate-900 mb-2">4-Second "Image to PDF" Magic</h3>
                <p className="text-sm">Don't waste time clicking "Upload" and "Download" on slow websites. RTO Buddy takes your 8-9 documents and 4 vehicle photos and converts/merges them into the exact format required by the Vaahan Dashboard in just 4 seconds.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="text-3xl mb-3">📉</div>
                <h3 className="font-bold text-slate-900 mb-2">Smart PDF Compression (No Blur)</h3>
                <p className="text-sm">RTO inspectors revert files they can't read. RTO Buddy uses proprietary offline compression to shrink your file size while keeping the text and chassis numbers crystal clear.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2">
                <div className="text-3xl mb-3">🛑</div>
                <h3 className="font-bold text-slate-900 mb-2">Total Protection from "RTO Blocked" Status</h3>
                <p className="text-sm">An RTO Block usually happens because of <strong>Vaahan Pendency</strong>—files sitting in your dashboard too long without action. By speeding up your document prep, RTO Buddy ensures your files move from "Draft" to "Approved" before the block or the weekly fine hits.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why 2-Wheeler & 4-Wheeler Dealers are Switching to RTO Buddy</h2>
            
            <p>
              Whether you are a TVS, Bajaj, or Royal Enfield dealer moving high volumes, or a Toyota/Hyundai dealer handling premium paperwork, the benefits are the same:
            </p>

            <ul className="space-y-4 my-6">
              <li className="flex items-start">
                <span className="text-brand-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Offline Privacy:</strong> No customer Aadhaar or PAN cards are ever uploaded to third-party "Online PDF" sites.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">No More "Vaahan Login" Timeouts:</strong> Spend less time on the portal because your files are already 100% correct.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-500 mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-slate-900">Zero-Revert Workflow:</strong> Follow the built-in logic for Form 20, 21, and 22 to ensure the RTO Inspector sees exactly what they need.
                </div>
              </li>
            </ul>

            <div className="bg-white rounded-3xl p-1 my-12 shadow-xl border border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10 bg-red-50/50 border-b md:border-b-0 md:border-r border-slate-100">
                  <div className="flex items-center gap-3 text-red-600 font-bold text-lg mb-6">
                    <XCircle size={24} /> Before RTO Buddy
                  </div>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3 text-slate-600">
                      <FileText size={20} className="text-slate-400 shrink-0 mt-0.5"/> 
                      <span><strong>12 separate files</strong> to manually resize and manage</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <Clock size={20} className="text-slate-400 shrink-0 mt-0.5"/> 
                      <span><strong>10+ minutes</strong> of manual work per vehicle</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <AlertTriangle size={20} className="text-slate-400 shrink-0 mt-0.5"/> 
                      <span>High risk of <strong>Vaahan portal revert</strong> due to blur</span>
                    </li>
                    <li className="flex items-start gap-3 text-slate-600">
                      <Globe size={20} className="text-slate-400 shrink-0 mt-0.5"/> 
                      <span>Customer data uploaded to <strong>unsecure online sites</strong></span>
                    </li>
                  </ul>
                </div>
                <div className="p-8 md:p-10 bg-emerald-50/50 relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 opacity-5">
                    <ShieldCheck size={200} />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 text-emerald-600 font-bold text-lg mb-6">
                      <CheckCircle2 size={24} /> With RTO Buddy
                    </div>
                    <ul className="space-y-5">
                      <li className="flex items-start gap-3 text-slate-800">
                        <FileCheck size={20} className="text-emerald-500 shrink-0 mt-0.5"/> 
                        <span><strong>1 perfectly merged PDF</strong> ready for upload</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-800">
                        <Zap size={20} className="text-emerald-500 shrink-0 mt-0.5"/> 
                        <span><strong>4 seconds</strong> total processing time</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-800">
                        <ShieldCheck size={20} className="text-emerald-500 shrink-0 mt-0.5"/> 
                        <span><strong>Zero-revert</strong> smart compression (crystal clear)</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-800">
                        <Lock size={20} className="text-emerald-500 shrink-0 mt-0.5"/> 
                        <span><strong>100% offline</strong> data privacy (no internet needed)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Conclusion: Is Your Dealership Buddy-Ready?</h2>
            
            <p>
              Don't let the ₹300 weekly fine become your biggest expense. Stop fighting with the Vaahan Dashboard and start dominating it. <strong>RTO Buddy by Vyke Retail</strong> is the ultimate "Speed-Tool" for the modern Indian dealer.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button onClick={onNavigateToContact} className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-center">
                Download RTO Buddy – Clear Your Pendency Today
              </button>
              <button onClick={onNavigateToContact} className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-center">
                Talk to Vyke Retail for OEM Bulk Licensing
              </button>
            </div>
          </div>
        </article>
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
    },
    {
      year: "Current",
      title: "Version 2.1 Update",
      desc: "Our most powerful update yet. Introducing advanced analytics, precision splicing, and lightning-fast presets.",
      icon: <Zap size={20} className="text-brand-500" />
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
               From v1.0 to v2.1: <br /><span className="text-brand-600">A Journey of Perfection</span>
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
                     <span className="font-bold text-white">v2.1 (Live)</span>
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
                      <div className={`w-full md:w-[45%] p-5 md:p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300`}>
                         <div className="flex items-center gap-3 mb-2 text-slate-900">
                            <div className="p-1.5 md:p-2 bg-brand-100 text-brand-600 rounded-lg shrink-0">
                              {event.icon}
                            </div>
                            <h3 className="font-bold text-base md:text-lg">{event.title}</h3>
                         </div>
                         <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
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
    } else if (page === 'about' || page === 'contact' || page === 'privacy' || page === 'terms' || page === 'blog') {
       window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <BreakingNewsTicker onNavigate={handleNavigate} />
      <div className={`min-h-screen bg-slate-50 selection:bg-brand-100 selection:text-brand-900 relative ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}>
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {currentPage === 'home' ? (
            <>
              <section id="hero" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                   <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                   <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                   <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
                </div>
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-3 py-1 mb-6 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
                        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">v2.1 Now Live: Zero Reverts, Zero Fines</span>
                      </div>
                      <h1 className="text-4xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                        The Future of <br />
                        <span className="text-brand-600">RTO Compliance.</span>
                      </h1>
                      <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                        Process RTO-ready documents in just 4 seconds with our most powerful update yet. Trusted by India's top automobile dealers.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                        <button onClick={() => handleNavigate('contact', 'top')} className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-2xl font-bold shadow-2xl shadow-brand-500/30 transition-all hover:-translate-y-1 flex items-center justify-center text-lg">
                          Get Started Now <ArrowRight className="ml-2" size={22} />
                        </button>
                        <button onClick={() => handleNavigate('home', 'videos')} className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-10 py-5 rounded-2xl font-bold transition-all flex items-center justify-center text-lg">
                          <Play className="mr-2 text-brand-600" size={18} fill="currentColor" /> Watch Demo
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-slate-200/60 pt-10">
                        <div className="text-center sm:text-left">
                          <h3 className="text-3xl font-bold text-slate-900">200K+</h3>
                          <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Processed</p>
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-3xl font-bold text-slate-900">0%</h3>
                          <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Rejections</p>
                        </div>
                        <div className="text-center sm:text-left">
                          <h3 className="text-3xl font-bold text-slate-900">4s</h3>
                          <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Per File</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <DashboardSpotlight />
                    </div>
                  </div>
                </div>
              </section>
              <BrandLogos />
              <PresetShowcase />
              <TimeSavingsCalculator />
              <section id="features" className="py-24 bg-white relative">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Every Dealership Type</h2>
                    <p className="text-lg text-slate-600">
                      Whether you are a 2W, 3W, or 4W dealership (AD, ARD, or ASC), RTO Buddy adapts to your volume.
                    </p>
                  </div>
                  <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0 no-scrollbar">
                    {[
                      { icon: <Settings2 size={32} className="text-brand-600" />, title: "Lightning-Fast Presets", desc: "Instantly access your most-used document configurations with our new, intuitive drop-down preset menu." },
                      { icon: <ImageIcon size={32} className="text-brand-600" />, title: "Advanced Photo Management", desc: "Total control over vehicle images. Add up to 6 photos, customize tiles, and edit names directly in-app." },
                      { icon: <Scissors size={32} className="text-brand-600" />, title: "Precision Doc Splicing", desc: "Easily add new documents to presets by defining exact start and end pages, cutting out unnecessary clutter." },
                      { icon: <LayoutDashboard size={32} className="text-brand-600" />, title: "All-New Analytics", desc: "Track efficiency in real-time: total files, pages scanned, time saved, and 7-day activity breakdown." },
                      { icon: <UserCircle size={32} className="text-brand-600" />, title: "Profile & Support Hub", desc: "Manage dealership data seamlessly with the new profile section and direct customer support access." },
                      { icon: <Maximize size={32} className="text-brand-600" />, title: "Auto-Fixes Size (400KB)", desc: "Automatically compresses files to meet the RTO's strict 400KB limit without losing readability." }
                    ].map((feature, i) => (
                      <div key={i} className="snap-center shrink-0 w-[80vw] sm:w-80 md:w-auto p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group flex flex-col h-full">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed flex-grow">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <ProductTourGallery />
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
                    <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10 max-w-md mx-auto sm:max-w-none">
                      <button onClick={() => handleNavigate('contact', 'top')} className="w-full sm:w-auto bg-white text-brand-600 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
                        Download Free Trial
                      </button>
                      <button onClick={() => handleNavigate('contact', 'top')} className="w-full sm:w-auto bg-brand-700 border border-brand-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
                        Contact Sales
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : currentPage === 'about' ? (
            <AboutPage onBack={() => handleNavigate('home', 'hero')} />
          ) : currentPage === 'blog' ? (
            <BlogPage onBack={() => handleNavigate('home', 'hero')} onNavigateToContact={() => handleNavigate('contact', 'top')} />
          ) : currentPage === 'privacy' ? (
            <PrivacyPolicyPage onBack={() => handleNavigate('home', 'hero')} />
          ) : currentPage === 'terms' ? (
            <TermsPage onBack={() => handleNavigate('home', 'hero')} />
          ) : (
            <ContactPage onBack={() => handleNavigate('home', 'hero')} />
          )}
          <WhatsAppButton />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="sm:col-span-2">
                <div className="flex items-center space-x-2 mb-6 text-white">
                  <div className="bg-brand-600 p-1.5 rounded">
                    <Layers size={20} />
                  </div>
                  <span className="text-xl font-extrabold">RTO Buddy</span>
                </div>
                <p className="mb-6 max-w-sm text-sm md:text-base">
                  The #1 Document Management Solution for Automobile Dealers in India. Trusted, Fast, and Compliant.
                </p>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/vyke-retail-private-limited/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/rtobuddy.in/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Instagram size={20} />
                  </a>
                  <a href="https://x.com/rtobuddyindia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Twitter size={20} />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61584664454194" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs md:text-sm">Company</h4>
                <ul className="space-y-3 text-sm md:text-base">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} className="hover:text-brand-400 transition-colors">About Us</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('blog'); }} className="hover:text-brand-400 transition-colors">Blog & Resources</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('contact'); }} className="hover:text-brand-400 transition-colors">Contact</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('privacy'); }} className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('terms'); }} className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-xs md:text-sm">Contact</h4>
                <ul className="space-y-3 text-sm md:text-base">
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

            {/* SEO Content Section - Visually minimized but accessible for crawlers */}
            <div className="mt-16 pt-8 border-t border-slate-800/50 text-left">
              <h2 className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-3">RTO Compliance & Dealership Resources</h2>
              <div className="text-slate-500/60 text-[10px] leading-relaxed space-y-3 max-w-full text-justify">
                <p>
                  RTO Buddy is India's leading RTO registration software and dealership management tool designed to automate RTO paperwork, streamline vehicle registration processes, and ensure local RTO compliance for 2W, 3W, and 4W automobile dealers. Navigating new transport rules, Vahan portal updates, and regional RTO guidelines can be challenging. Our software helps dealerships eliminate manual data entry, reduce rejection rates, and instantly format documents like Form 20, Form 21, and Form 22 to meet strict RTO file size limits (under 400KB).
                </p>
                <p>
                  Whether you are looking for a guide on dealership RTO compliance, updates on the latest transport ministry rules, or a reliable tool to speed up vehicle delivery, RTO Buddy provides the ultimate solution. We regularly monitor changes in state-wise RTO regulations to ensure our document splicing and compression presets are always up-to-date, helping your dealership maintain zero fines and zero reverts. Optimize your auto dealership operations today with our smart document management system.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
