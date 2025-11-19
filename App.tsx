
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
  Award
} from 'lucide-react';

// --- Assets & Helpers ---

// Official App Icons using reliable Image Sources
const CamScannerLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/CamScanner_Icon.png/480px-CamScanner_Icon.png" 
    alt="CamScanner" 
    className="w-6 h-6 rounded shadow-sm"
  />
);

const AdobeScanLogo = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Adobe_Scan_icon.svg/1024px-Adobe_Scan_icon.svg.png" 
    alt="Adobe Scan" 
    className="w-6 h-6 rounded shadow-sm"
  />
);

// --- LOGO DATABASE (External CDN URLs for Accuracy) ---
const BrandList = [
  { name: 'Hero', url: 'https://cdn.worldvectorlogo.com/logos/hero-motocorp.svg' },
  { name: 'TVS', url: 'https://cdn.worldvectorlogo.com/logos/tvs-motor-company.svg' },
  { name: 'Honda', url: 'https://cdn.worldvectorlogo.com/logos/honda-3.svg' },
  { name: 'Bajaj', url: 'https://cdn.worldvectorlogo.com/logos/bajaj-auto.svg' },
  { name: 'Yamaha', url: 'https://cdn.worldvectorlogo.com/logos/yamaha-2.svg' },
  { name: 'Suzuki', url: 'https://cdn.worldvectorlogo.com/logos/suzuki-1.svg' },
  { name: 'Hyundai', url: 'https://cdn.worldvectorlogo.com/logos/hyundai-motor-company-2.svg' },
  { name: 'Kia', url: 'https://cdn.worldvectorlogo.com/logos/kia-1.svg' },
  { name: 'Mahindra', url: 'https://cdn.worldvectorlogo.com/logos/mahindra-2.svg' }
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
            <div className="bg-brand-600 text-white p-2 rounded-lg shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
              <Layers size={24} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              RTO <span className="text-brand-600">Buddy</span>
            </span>
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
            <button onClick={() => onNavigate('home', 'pricing')} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg text-sm">
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
            <button onClick={() => { setIsOpen(false); onNavigate('home', 'pricing'); }} className="w-full bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

// --- Components ---

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
        {/* Browser Chrome */}
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

        {/* Content Area */}
        <div className="p-6 sm:p-8 min-h-[400px] flex flex-col items-center justify-center relative bg-slate-50/30">
          
          {!isFixed ? (
            // ERROR STATE
            <div className={`flex flex-col items-center text-center w-full animate-fade-in-up ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} transition-all duration-300`}>
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-red-100 animate-ping opacity-20"></div>
                <X className="text-red-500 w-10 h-10" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Failed</h3>
              <p className="text-slate-600 font-bold text-sm mb-6 max-w-[260px]">
                The document you uploaded was rejected by the portal.
              </p>

              {/* Error Details Box */}
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
                    <div className="mt-3 inline-flex items-center px-2 py-1 rounded bg-red-100 text-red-600 text-[10px] font-bold uppercase tracking-wide">
                      Status: Reverted
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
            // SUCCESS STATE
            <div className="flex flex-col items-center text-center w-full animate-fade-in-up">
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-20"></div>
                <CheckCircle className="text-emerald-500 w-10 h-10" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">Upload Successful!</h3>
              <p className="text-slate-500 text-sm mb-6">
                Document optimized and compliant.
              </p>

              {/* Success Details Box */}
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

              <div className="w-full grid grid-cols-2 gap-3">
                <button className="bg-slate-900 text-white py-3 px-4 rounded-lg font-semibold shadow-lg text-sm flex items-center justify-center">
                  <Upload size={16} className="mr-2" /> Upload Now
                </button>
                <button className="bg-white border border-slate-200 text-slate-700 py-3 px-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-sm">
                  Process Next
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar - Apps */}
        <div className="bg-slate-50 py-4 px-6 flex flex-col sm:flex-row items-center justify-between border-t border-slate-100 gap-3 sm:gap-0">
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap mr-2">Works with scans from</span>
           <div className="flex items-center space-x-4 w-full justify-center sm:justify-end">
              {/* Adobe Scan */}
              <div className="flex items-center space-x-1.5 group opacity-100 filter-none" title="Adobe Scan">
                 <AdobeScanLogo />
                 <span className="text-xs font-bold text-slate-700 group-hover:text-brand-600 transition-colors">Adobe Scan</span>
              </div>
              <div className="h-4 w-px bg-slate-300"></div>
              {/* CamScanner */}
              <div className="flex items-center space-x-1.5 group opacity-100 filter-none" title="CamScanner">
                 <CamScannerLogo />
                 <span className="text-xs font-bold text-slate-700 group-hover:text-emerald-600 transition-colors">CamScanner</span>
              </div>
           </div>
        </div>
      </div>

      {/* Pulse Interaction Hint */}
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
    <div className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted by leading dealers</p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-20 px-8">
          {[...BrandList, ...BrandList, ...BrandList].map((brand, index) => (
            <div key={index} className="inline-flex items-center justify-center h-16 w-32 cursor-pointer hover:scale-110 transition-transform duration-300">
               <img 
                 src={brand.url} 
                 alt={brand.name} 
                 className="max-h-full max-w-full object-contain filter grayscale-0 opacity-100"
                 loading="lazy"
               />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TimeSavingsCalculator = () => {
  const [annualSales, setAnnualSales] = useState(1500); // Default based on beta stats

  const manualTimePerFile = 22.5; // minutes (avg between 20-25)
  const autoTimePerFile = 1.75; // minutes (avg between 1.5-2)

  // Calculate Total Time in Minutes
  const manualTotalMins = annualSales * manualTimePerFile;
  const autoTotalMins = annualSales * autoTimePerFile;

  // Savings
  const savedMinutes = manualTotalMins - autoTotalMins;
  const savedHours = Math.round(savedMinutes / 60);
  const savedDays = (savedHours / 8).toFixed(1); // 8-hour work days

  return (
    <section id="calculator" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">See Your ROI in Seconds</h2>
          <p className="text-slate-500 mt-2">Enter your annual vehicle sales to see how much time you save.</p>
        </div>
        
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden ring-4 ring-slate-200">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center space-x-2 bg-brand-900/50 border border-brand-500/30 rounded-full px-3 py-1 mb-6">
                <Calculator size={14} className="text-brand-400" />
                <span className="text-xs font-bold text-brand-300 uppercase tracking-wider">Interactive Calculator</span>
              </div>
              <h3 className="text-3xl font-bold mb-8">Total Annual Sales</h3>
              
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Vehicles Sold Per Year</label>
                  <span className="text-5xl font-bold text-white tracking-tight">{annualSales}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="5000" 
                  step="50" 
                  value={annualSales} 
                  onChange={(e) => setAnnualSales(parseInt(e.target.value))}
                  className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500 hover:accent-brand-400 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-3 font-mono">
                  <span>100</span>
                  <span>2,500</span>
                  <span>5,000+</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-slate-400 bg-slate-800/50 p-3 rounded-lg">
                 <RefreshCw size={16} />
                 <span>Comparing <strong>22.5 mins</strong> (Manual) vs <strong>1.75 mins</strong> (RTO Buddy) per file.</span>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl">
               <div className="space-y-8">
                  {/* Comparison Grid */}
                  <div className="grid grid-cols-2 gap-8 border-b border-slate-700/50 pb-8">
                     <div>
                        <p className="text-xs text-slate-400 uppercase font-bold mb-2">Manual Process</p>
                        <p className="text-3xl font-bold text-red-400">{Math.round(manualTotalMins/60).toLocaleString()} <span className="text-sm font-normal text-slate-500">hrs</span></p>
                        <p className="text-[10px] text-slate-500 mt-1">Wasted Time</p>
                     </div>
                     <div>
                        <p className="text-xs text-slate-400 uppercase font-bold mb-2">RTO Buddy</p>
                        <p className="text-3xl font-bold text-emerald-400">{Math.round(autoTotalMins/60).toLocaleString()} <span className="text-sm font-normal text-slate-500">hrs</span></p>
                        <p className="text-[10px] text-slate-500 mt-1">Optimized Time</p>
                     </div>
                  </div>

                  {/* Big Result */}
                  <div className="text-center">
                     <p className="text-slate-300 font-medium mb-3 uppercase tracking-wide text-xs">Total Time Saved Annually</p>
                     <div className="flex flex-col items-center justify-center">
                        <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-300 tracking-tight mb-4">
                            {savedHours.toLocaleString()} <span className="text-2xl text-slate-400 font-bold">hours</span>
                        </div>
                        <div className="inline-flex items-center bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20 animate-pulse-slow">
                            <TrendingUp size={16} className="mr-2" />
                            That's {savedDays} work days gained!
                        </div>
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

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5); // Cycle 0-4 (4 is a pause)
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      step: "01",
      title: "Scan",
      desc: "Use a desktop scanner, Adobe Scan, or CamScanner to capture docs.",
      icon: <Printer className="w-8 h-8" />,
      activeColor: "text-blue-400",
      bgActive: "bg-blue-500"
    },
    {
      step: "02",
      title: "Drag & Drop",
      desc: "Drop the raw PDF or images into RTO Buddy.",
      icon: <Upload className="w-8 h-8" />,
      activeColor: "text-purple-400",
      bgActive: "bg-purple-500"
    },
    {
      step: "03",
      title: "Auto-Process",
      desc: "We split, resize to under 400KB, and rename files (Form 20, Insurance).",
      icon: <RefreshCw className="w-8 h-8" />,
      activeColor: "text-pink-400",
      bgActive: "bg-pink-500"
    },
    {
      step: "04",
      title: "Upload",
      desc: "A ready-to-upload folder is created on your desktop.",
      icon: <CheckCircle className="w-8 h-8" />,
      activeColor: "text-emerald-400",
      bgActive: "bg-emerald-500"
    }
  ];

  return (
    <section id="workflow" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Animated Background Particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-brand-400 rounded-full animate-float"></div>
        <div className="absolute top-[60%] right-[15%] w-3 h-3 bg-purple-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[40%] w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float animation-delay-2000"></div>
        
        {/* Glow Blobs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-500 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-3 py-1 mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Paper to Portal in Seconds</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Your workflow doesn't change, it just gets faster. Watch the process in action.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1.5 bg-slate-800 -translate-y-1/2 z-0 rounded-full overflow-hidden">
             {/* Animated Fill Line */}
             <div 
                className="h-full bg-gradient-to-r from-brand-500 via-purple-500 to-emerald-500 transition-all duration-700 ease-out relative"
                style={{ width: `${Math.min((activeStep / (steps.length - 1)) * 100, 100)}%` }}
             >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-ping"></div>
             </div>
          </div>

          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 left-8 w-1 h-full bg-slate-800 z-0 rounded-full">
             <div 
                className="w-full bg-gradient-to-b from-brand-500 via-purple-500 to-emerald-500 transition-all duration-700 ease-out"
                style={{ height: `${Math.min((activeStep / (steps.length - 1)) * 100, 100)}%` }}
             ></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((item, i) => {
              const isActive = i === activeStep;
              const isCompleted = i < activeStep;
              
              return (
                <div 
                   key={i} 
                   className={`relative transition-all duration-500 transform ${isActive ? 'scale-105 md:-translate-y-4' : 'scale-100'} ${isCompleted || isActive ? 'opacity-100' : 'opacity-60'}`}
                >
                  <div className={`flex flex-row md:flex-col items-center md:items-center md:text-center bg-slate-900/80 backdrop-blur-md border p-6 rounded-2xl h-full
                    ${isActive 
                      ? 'border-brand-500 shadow-[0_0_30px_rgba(14,165,233,0.15)] bg-slate-800' 
                      : isCompleted 
                        ? 'border-slate-600' 
                        : 'border-slate-800'
                    } transition-colors duration-500`}
                  >
                    {/* Icon Circle */}
                    <div className={`
                      w-16 h-16 mx-0 md:mx-auto shrink-0 rounded-full border-2 flex items-center justify-center mb-0 md:mb-6 mr-6 md:mr-0 relative z-10 transition-all duration-500
                      ${isActive 
                        ? `${item.bgActive} border-transparent text-white shadow-lg scale-110` 
                        : isCompleted
                          ? 'bg-slate-800 border-slate-600 text-slate-400'
                          : 'bg-slate-900 border-slate-700 text-slate-600'
                      }
                    `}>
                      {isActive ? item.icon : isCompleted ? <Check className="w-8 h-8 text-emerald-500" /> : item.icon}
                      
                      {/* Ripple Effect for Active */}
                      {isActive && (
                         <div className={`absolute inset-0 rounded-full ${item.bgActive} opacity-30 animate-ping`}></div>
                      )}
                    </div>

                    <div className="flex-1">
                      <span className={`text-xs font-bold uppercase tracking-widest mb-2 block transition-colors duration-300 ${isActive ? item.activeColor : 'text-slate-600'}`}>
                        Step {item.step}
                      </span>
                      <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// New Dedicated About Page Component
const AboutPage = ({ onBack }: { onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack} 
          className="group flex items-center text-sm font-semibold text-slate-500 hover:text-brand-600 mb-8 transition-colors"
        >
          <div className="bg-white border border-slate-200 p-2 rounded-full mr-3 shadow-sm group-hover:shadow-md transition-all">
            <ArrowLeft size={16} />
          </div>
          Back to Home
        </button>

        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
             <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 rounded-full px-3 py-1 mb-6">
                <History size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">Our Journey</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
               From v1.0 to v2.0: <br/><span className="text-brand-600">A Journey of Perfection</span>
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed">
               RTO Buddy didn't just appear overnight. It is the result of two years of relentless testing, feedback, and refinement in the real world.
             </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden mb-16">
            <div className="relative h-64 bg-slate-900 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-brand-600/20"></div>
               <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full filter blur-[100px] opacity-30 translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] opacity-30 -translate-x-1/2 translate-y-1/2"></div>
               
               <div className="relative z-10 text-center text-white px-4">
                  <div className="inline-flex items-center space-x-4 mb-4 opacity-80">
                     <span className="font-mono text-lg">v1.0 (Beta)</span>
                     <ArrowRight size={20} />
                     <span className="font-mono text-lg font-bold text-brand-300">v2.0 (Live)</span>
                  </div>
                  <p className="font-bold text-2xl">Market Accessible & Battle Tested</p>
               </div>
            </div>

            <div className="p-8 md:p-12 space-y-8 text-lg text-slate-700 leading-relaxed">
              <p>
                For the past <strong>2 years</strong>, we ran RTO Buddy v1.0 in a closed beta environment across 8 high-volume dealership locations. We didn't want to launch a product that "might" work; we wanted one that <strong>definitely</strong> works.
              </p>
              <p>
                During this rigorous testing phase, we encountered every possible scanner variation, every weird document format, and every obscure Vaahan portal error. We used this data to train our algorithms to handle edge cases that other software simply ignores.
              </p>
              <div className="bg-brand-50 border-l-4 border-brand-500 p-6 rounded-r-xl italic text-slate-800 font-medium">
                "The transition from v1.0 to v2.0 marks our shift from a testing tool to a fully market-accessible solution. We are now open for all dealers, confident that our system handles the workload effortlessly."
              </div>
              <p>
                Today, RTO Buddy isn't just software; it's a proven partner that has already saved thousands of hours for dealers just like you.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                   <FileText size={28} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">28,000+</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Files Processed</p>
             </div>
             
             <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                   <Users size={28} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">2 Years</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Rigorous Beta Testing</p>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                   <Award size={28} />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-1">100%</h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wide">Ready for Market</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string, section?: string) => {
    setCurrentPage(page);
    // If navigating to a section on the home page
    if (page === 'home' && section) {
      // Small timeout to allow the DOM to update if we were on the About page
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
    } else if (page === 'about') {
       // Scroll to top for about page
       window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-brand-100 selection:text-brand-900">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' ? (
          <>
            {/* Hero Section */}
            <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
              {/* Background Blobs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                 <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                 <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                 <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
              </div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Text Content */}
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
                      <button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-brand-500/20 transition-all hover:-translate-y-1 flex items-center justify-center">
                        Start Free Trial <ArrowRight className="ml-2" size={20} />
                      </button>
                      <button 
                        onClick={() => handleNavigate('home', 'calculator')}
                        className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center"
                      >
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

                  {/* Interactive Visual */}
                  <div className="relative">
                    <InteractiveErrorCard />
                  </div>
                </div>
              </div>
            </section>

            <BrandLogos />

            <TimeSavingsCalculator />

            {/* Features Grid */}
            <section id="features" className="py-24 bg-white relative">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Every Dealership Type</h2>
                  <p className="text-lg text-slate-600">
                    Whether you are a 2W, 3W, or 4W dealership (AD, ARD, or ASC), RTO Buddy adapts to your volume.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Maximize size={32} className="text-brand-600" />,
                      title: "Auto-Fixes Size (400KB)",
                      desc: "Automatically compresses files to meet the RTO's strict 400KB limit without losing readability."
                    },
                    {
                      icon: <FolderPlus size={32} className="text-brand-600" />,
                      title: "Smart Folder Creation",
                      desc: "Just enter a customer name. RTO Buddy creates a desktop folder with all files named correctly."
                    },
                    {
                      icon: <Clock size={32} className="text-brand-600" />,
                      title: "Saves 75% Staff Time",
                      desc: "Turn a 20-minute manual task into a 3-minute automatic process. Free up your staff."
                    },
                    {
                      icon: <Shield size={32} className="text-brand-600" />,
                      title: "Zero Rejections",
                      desc: "Our algorithms ensure every document is legible and formatted exactly how Vaahan wants it."
                    },
                    {
                      icon: <ImageIcon size={32} className="text-brand-600" />,
                      title: "Photo to PDF",
                      desc: "Instantly convert vehicle photos (Front, Side, Chassis) into compliant PDFs."
                    },
                    {
                      icon: <Smartphone size={32} className="text-brand-600" />,
                      title: "App Compatible",
                      desc: "Works seamlessly with scans from Adobe Scan, CamScanner, or any high-speed office scanner."
                    }
                  ].map((feature, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300 group">
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

            {/* Testimonials */}
            <section id="testimonials" className="py-24 bg-brand-50/50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Dealers Love RTO Buddy</h2>
                  <p className="text-lg text-slate-600">Don't just take our word for it.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                   <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                     <div className="flex text-amber-400 mb-4">
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                     </div>
                     <p className="text-slate-700 text-lg italic mb-6">
                       "SAS Hero Babhnan has been using RTO Buddy for 2 years. It made our work much easier and faster. Thanks to the strong compression technology, none of our files were ever reverted."
                     </p>
                     <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                         SB
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900">SAS Hero Babhnan</h4>
                         <p className="text-sm text-slate-500">Authorized Hero Dealer</p>
                       </div>
                     </div>
                   </div>

                   <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all">
                     <div className="flex text-amber-400 mb-4">
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                     </div>
                     <p className="text-slate-700 mb-6">
                       "The automatic folder creation is a game changer. We just type the customer name and boom—everything is organized on the desktop ready for upload."
                     </p>
                     <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                         RJ
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900">Raj Motors</h4>
                         <p className="text-sm text-slate-500">TVS Dealer</p>
                       </div>
                     </div>
                   </div>

                   <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all">
                     <div className="flex text-amber-400 mb-4">
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                       <Star fill="currentColor" size={18} />
                     </div>
                     <p className="text-slate-700 mb-6">
                       "We used to struggle with 'File Size Exceeded' errors daily. Since switching to RTO Buddy, we haven't had a single rejection for image quality."
                     </p>
                     <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">
                         AM
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900">Amit Auto</h4>
                         <p className="text-sm text-slate-500">Honda Dealer</p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </section>

            {/* CTA / Pricing Teaser */}
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
                    <button className="bg-white text-brand-600 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg">
                      Download Free Trial
                    </button>
                    <button className="bg-brand-700 border border-brand-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-800 transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <AboutPage onBack={() => handleNavigate('home', 'hero')} />
        )}
      </main>

      {/* Footer */}
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
                {/* Social Placeholders */}
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors cursor-pointer">
                  <span className="font-bold">fb</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('about'); }} className="hover:text-brand-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3">
                <li>support@rtobuddy.in</li>
                <li>+91 98765 43210</li>
                <li>Sector 62, Noida, UP</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            © {new Date().getFullYear()} RTO Buddy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
