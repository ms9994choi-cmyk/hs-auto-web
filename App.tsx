import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Phone, Mail, MapPin, CheckCircle2, Cpu, Settings, FileText, ArrowRight, ShieldCheck, Zap, Factory } from 'lucide-react';
import Hero from './components/Hero';
import CoreStrengths from './components/CoreStrengths';
import ProductShowcase from './components/ProductShowcase';
import SupportSection from './components/SupportSection';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '핵심 가치', href: '#features' },
    { name: '주요 제품', href: '#products' },
    { name: '기술 지원', href: '#support' },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-white text-slate-900">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4 border-b border-slate-100' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 flex items-center gap-3">
            <Factory className="text-blue-600 w-8 h-8 md:w-10 md:h-10" />
            HS<span className="text-blue-600">AUTOCON</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-extrabold text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              견적 문의
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col space-y-6 shadow-2xl h-screen">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-900 hover:text-blue-600 text-2xl font-extrabold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Contact Link */}
            <a 
              href="#contact"
              className="text-blue-600 text-2xl font-extrabold"
              onClick={() => setMobileMenuOpen(false)}
            >
              견적 문의
            </a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Hero />
        <CoreStrengths />
        <ProductShowcase />
        <SupportSection />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-2">
                HS<span className="text-blue-600">AUTOCON</span>
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-md mb-6">
                에이치에스오토콘은 공장 자동화의 미래를 선도합니다.<br/>
                글로벌 Top-tier 브랜드의 정품 공급과 최적의 엔지니어링 솔루션을 통해 고객사의 생산성 혁신을 지원합니다.
              </p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all cursor-pointer shadow-sm">
                  <span className="font-bold">B</span>
                </div>
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all cursor-pointer shadow-sm">
                  <span className="font-bold">Y</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                  <MapPin className="text-blue-600 mt-1 shrink-0" size={18} />
                  <span>경기도 안양시 동안구 엘에스로 122<br/>호계데시앙플렉스 402호</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <Phone className="text-blue-600 shrink-0" size={18} />
                  <span>02-717-3460</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <Mail className="text-blue-600 shrink-0" size={18} />
                  <span>hsautocon@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">홈</a></li>
                <li><a href="#products" className="text-slate-600 hover:text-blue-600 transition-colors">제품 소개</a></li>
                <li><a href="#support" className="text-slate-600 hover:text-blue-600 transition-colors">자료실</a></li>
                <li><a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">견적 문의</a></li>
                <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} HS Autocon. All rights reserved.</p>
            <p>Designed for Smart Factory Innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;