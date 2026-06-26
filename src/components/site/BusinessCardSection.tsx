import React, { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Building2, ArrowRight, ArrowLeft, Cpu, Wifi } from 'lucide-react';
import LogoImage from '../../assets/ChatGPT_Image_Jun_26__2026__02_11_58_PM-removebg-preview.png';

export function BusinessCardSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="about-connect" className="py-24 bg-gray-50/50 dark:bg-navy-deep relative overflow-hidden z-10 border-t border-black/5 dark:border-white/5">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">

        {/* Eyebrow */}
        <div className="text-accent font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
          <span className="w-8 h-[1px] bg-accent" /> Who We Are
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-16">
          <span className="text-gray-900 dark:text-white">About </span>
          <span className="text-transparent bg-clip-text bg-gradient-navy dark:bg-gradient-accent">Raj Enterprise.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Text */}
          <div className="space-y-8">
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              <strong className="text-gray-900 dark:text-white">Premium Labour Contractor and Manpower Supplier</strong> with a passion for driving industrial growth. We specialize in <strong className="text-accent">skilled workforce supply</strong>, <strong className="text-blue-500">professional security services</strong>, and <strong className="text-accent">complete facility management</strong>. We thrive in fast-paced environments and are always eager to collaborate on projects that <strong className="text-gray-900 dark:text-white">demand reliability and excellence</strong>.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8 border-t border-black/10 dark:border-white/10">
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono uppercase tracking-wider">Phone</div>
                <div className="text-gray-900 dark:text-white font-medium">+91 98765 43210</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono uppercase tracking-wider">Email</div>
                <div className="text-gray-900 dark:text-white font-medium">
                  <a
                    href="mailto:info@rajenterprise.in"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText("info@rajenterprise.in");
                      alert("Email copied to clipboard!");
                      window.location.href = "mailto:info@rajenterprise.in";
                    }}
                    className="hover:text-accent transition-colors"
                  >
                    info@rajenterprise.in
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono uppercase tracking-wider">Based in</div>
                <div className="text-gray-900 dark:text-white font-medium">Gujarat, India</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-mono uppercase tracking-wider">Social</div>
                <div className="flex gap-4">
                  <a href="#" className="text-accent hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-accent hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card (Business Card Style) */}
          {/* Right Card (Business Card Style) */}
          <div className="relative perspective-1000 w-full max-w-xl mx-auto aspect-[1.91/1]">

            <div 
              className={`w-full h-full transition-all duration-700 preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              
              {/* Front of Card — Premium Credit Card Style */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group bg-gradient-to-br from-gray-900 via-[#0a0f1c] to-black p-6 sm:p-8 flex flex-col justify-between border border-white/10">
                {/* Background Textures */}
                <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                <div className="absolute top-[-50%] right-[-20%] w-[150%] h-[150%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
                
                {/* Top Section: Logo & Brand */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-[0.2em] uppercase shadow-sm">
                      Raj Enterprise
                    </h3>
                    <p className="text-blue-400 font-mono tracking-[0.2em] text-[8px] sm:text-[10px] font-bold uppercase mt-1">
                      Premium Labour Contractor
                    </p>
                  </div>
                  <img 
                    src={LogoImage} 
                    alt="Raj Enterprise Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain shadow-[0_10px_20px_rgba(37,99,235,0.3)] rounded-lg" 
                  />
                </div>

                {/* Middle Section: Chip & Contactless */}
                <div className="relative z-10 flex items-center gap-4 mt-2 sm:mt-4">
                  <div className="w-10 h-8 sm:w-12 sm:h-9 bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 rounded flex items-center justify-center overflow-hidden border border-yellow-700/50 shadow-inner relative">
                    <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-900/40 absolute" strokeWidth={1} />
                    <div className="w-full h-[1px] bg-yellow-700/40 absolute top-1/3" />
                    <div className="w-full h-[1px] bg-yellow-700/40 absolute bottom-1/3" />
                    <div className="w-[1px] h-full bg-yellow-700/40 absolute left-1/3" />
                    <div className="w-[1px] h-full bg-yellow-700/40 absolute right-1/3" />
                  </div>
                  <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 rotate-90 opacity-70" />
                </div>

                {/* Bottom Section: Name & Details */}
                <div className="relative z-10 flex justify-between items-end mt-auto pt-4">
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-mono text-[7px] sm:text-[9px] tracking-widest uppercase mb-1">
                      Authorized Member
                    </span>
                    <span className="text-white font-mono text-sm sm:text-lg tracking-widest uppercase shadow-sm drop-shadow-md" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                      RAJKOT • GUJARAT
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-400 font-mono text-[7px] sm:text-[9px] tracking-widest uppercase mb-1">
                      Valid Thru
                    </span>
                    <span className="text-white font-mono text-sm sm:text-lg tracking-widest" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                      20/30
                    </span>
                  </div>
                </div>

                {/* Click to flip hint */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[9px] text-white/50 uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  Tap
                </div>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-300 flex flex-col">
                {/* Magnetic Stripe */}
                <div className="w-full h-10 sm:h-12 bg-gray-900 mt-6 sm:mt-8 shadow-inner" />
                
                {/* Content Area */}
                <div className="p-6 flex flex-col h-full justify-between">
                  
                  {/* Signature Panel */}
                  <div className="flex items-center gap-2 sm:gap-4 mb-4">
                    <div className="flex-1 h-8 sm:h-10 bg-white border border-gray-300 rounded flex items-center px-4 overflow-hidden shadow-inner relative">
                      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]" />
                      <span className="font-yesteryear text-lg sm:text-2xl text-gray-800/80 italic transform -rotate-2">Raj Enterprise</span>
                    </div>
                    <div className="bg-white border border-gray-300 h-8 sm:h-10 px-3 sm:px-4 flex items-center justify-center rounded shadow-inner">
                      <span className="font-mono text-[10px] sm:text-xs font-bold italic">824</span>
                    </div>
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-gray-800">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                      <span className="text-[9px] sm:text-[11px] font-bold tracking-wide">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                      <span className="text-[9px] sm:text-[11px] font-bold tracking-wide truncate">info@rajenterprise.in</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                      <span className="text-[9px] sm:text-[11px] font-bold tracking-wide">HQ: Anjar - Kutch | Corp: Rajkot, Gujarat</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                      <span className="text-[9px] sm:text-[11px] font-bold tracking-wide text-blue-600">www.rajenterprise.in</span>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-gray-300 pt-3">
                    <p className="text-[6px] sm:text-[8px] text-gray-500 text-center uppercase tracking-widest leading-relaxed">
                      This card is the property of Raj Enterprise. If found, please return to the corporate office. Use of this card represents commitment to excellence in manpower supply and facility management.
                    </p>
                  </div>

                  {/* Click to flip hint */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[9px] text-gray-400 uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
                    Tap
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Tailwind specific classes for 3D flip */}
      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </section>
  );
}
