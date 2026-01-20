import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col bg-white pt-20 lg:pt-0">
      
      {/* Container for Split Layout */}
      <div className="flex-grow flex flex-col lg:flex-row h-full">
        
        {/* 1. 3D Visual Section */}
        {/* Mobile: Top Order (visible first), Desktop: Right Order */}
        <div className="w-full lg:w-[55%] h-[50vh] lg:h-auto min-h-[400px] lg:min-h-screen bg-slate-50 order-1 lg:order-2 relative overflow-hidden">
           <iframe 
              src='https://my.spline.design/interactiverobotarm-dMCM3odRweNw42J8k4aNQgqb/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              title="Interactive Robot Arm"
              className="w-full h-full pointer-events-auto scale-100 md:scale-110 lg:scale-125 origin-center transition-transform duration-700"
            ></iframe>
            
            {/* Soft gradient edges for blending - Desktop Left Edge */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent hidden lg:block pointer-events-none z-10"></div>
            {/* Soft gradient edges for blending - Mobile Bottom Edge */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent lg:hidden pointer-events-none z-10"></div>
        </div>

        {/* 2. Text Content Section */}
        {/* Mobile: Bottom Order, Desktop: Left Order */}
        <div className="w-full lg:w-[45%] flex items-center justify-center p-6 lg:p-16 lg:pl-24 relative z-20 bg-blue-50/30 backdrop-blur-sm order-2 lg:order-1 overflow-hidden border-r border-blue-50/50">
          
          {/* Subtle decorative blurred elements behind text for depth */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
            <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl mix-blend-multiply"></div>
          </div>

          <div className="max-w-xl relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/60 border border-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Smart Factory Automation Partner
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              공장 자동화의<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">미래를 연결하다</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed border-l-4 border-blue-500 pl-6 bg-white/40 py-2 rounded-r-lg backdrop-blur-md">
              OMRON, M2I, Innovance 등 글로벌 No.1 브랜드의 정품 공급부터 
              스마트 팩토리 솔루션까지.<br className="hidden md:block"/> 
              귀사의 제조 혁신을 위한 최적의 기술을 제안합니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
              >
                주요 제품 보기
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="group bg-white/80 border-2 border-slate-200 hover:border-blue-600 text-slate-800 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-3 transition-all hover:shadow-lg backdrop-blur-sm"
              >
                견적 문의하기
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;