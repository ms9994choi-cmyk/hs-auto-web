import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen min-h-[800px] flex items-center bg-white overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
         <iframe 
            src='https://my.spline.design/interactiverobotarm-EaN2rZkU4tvwW2i8dNPmyDQ6/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            title="Interactive Robot Arm"
            className="w-full h-full pointer-events-auto"
          ></iframe>
      </div>

      {/* Overlay Gradient - Made significantly more transparent (Glass effect) */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent z-10 pointer-events-none backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Smart Factory Automation Partner
          </div>
          
          {/* Title with slight shadow for contrast against 3D elements */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-6 drop-shadow-md">
            공장 자동화의<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">미래를 연결하는</span><br />
            에이치에스오토콘
          </h1>
          
          {/* Paragraph with stronger Glassmorphism (High blur, low opacity) */}
          <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed max-w-2xl border-l-4 border-blue-500 pl-6 bg-white/30 backdrop-blur-md py-4 rounded-r-lg shadow-sm">
            OMRON, M2I, Innovance 등 글로벌 No.1 브랜드의 정품 공급부터<br className="hidden md:block" /> 
            스마트 팩토리 솔루션까지. 귀사의 제조 혁신을 위한 최적의 기술을 제안합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products" 
              className="group bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
            >
              주요 제품 보기
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="group bg-white/50 backdrop-blur-md border-2 border-white/60 hover:border-blue-600 text-slate-800 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-3 transition-all hover:bg-white hover:shadow-lg"
            >
              견적 문의하기
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;