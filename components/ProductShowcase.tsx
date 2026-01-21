import React from 'react';
import { ExternalLink, MousePointerClick } from 'lucide-react';

interface Brand {
  name: string;
  logo: string;
  url: string;
  desc: string;
  scale?: string; 
  hoverScale?: string; // 호버 시 크기를 별도로 지정하는 속성 추가
}

const ProductShowcase: React.FC = () => {
  const brands: Brand[] = [
    {
      name: "OMRON",
      logo: "/OMRON.svg",
      url: "https://www.ia.omron.co.kr/",
      desc: "Sensing & Control + Think",
      scale: "scale-[1.2]",
      hoverScale: "group-hover:scale-[1.3]" // 기본 scale보다 살짝 크게
    },
    {
      name: "M2I",
      logo: "/m2i.png",
      url: "https://www.m2i.co.kr/",
      desc: "Smart HMI & SCADA",
      scale: "scale-[1.5]",
      hoverScale: "group-hover:scale-[1.6]"
    },
    {
      name: "LS ELECTRIC",
      logo: "/ls.png",
      url: "https://www.ls-electric.com/ko/",
      desc: "Futuring Smart Energy"
      // 기본값(1.0) 사용 시 hoverScale 생략 가능 (기본 1.1 적용)
    },
    {
      name: "Weidmüller",
      logo: "/Weidmuller.svg",
      url: "https://www.weidmuller.co.kr/ko/index.jsp",
      desc: "Industrial Connectivity"
    },
    {
      name: "SANIL",
      logo: "/sanil.png", 
      url: "https://sanilsensor.com/",
      desc: "Sensor & Transformers",
      scale: "scale-[5.1]", 
      hoverScale: "group-hover:scale-[5.5]" // ★ 뒤지게 작아지지 않도록 크게 유지!
    },
    {
      name: "Azbil",
      logo: "/azbil.png",
      url: "https://aa-industrial.azbil.com/akr/home",
      desc: "Automation for Human Centric"
    },
    {
      name: "Autonics",
      logo: "/autonics.png", 
      url: "https://www.autonics.com/kr/main",
      desc: "Sensors & Controllers"
    },
    {
      name: "Innovance",
      logo: "/inovance.png",
      url: "https://www.inovance.co.kr/",
      desc: "Industrial Automation"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Partners</span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              글로벌 자동화 리더<br/>
              <span className="text-slate-500">공식 취급 브랜드</span>
            </h2>
          </div>
          <p className="hidden md:block text-slate-500 max-w-sm text-right leading-relaxed mt-4 md:mt-0">
            각 로고를 클릭하시면 해당 Maker의<br/>공식 홈페이지로 이동합니다.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {brands.map((brand, index) => (
            <a 
              key={index} 
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 hover:-translate-y-2 h-48"
            >
              <div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-500 transition-colors">
                <ExternalLink size={18} />
              </div>

              {/* Logo Container */}
              <div className="w-full h-24 flex items-center justify-center relative z-10 px-6 overflow-hidden">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  // 수정 포인트: 고정된 1.1 대신 brand.hoverScale이 있으면 사용하고 없으면 기본 1.1 사용
                  className={`h-10 w-auto max-w-[100%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 transform ${brand.scale || 'scale-100'} ${brand.hoverScale || 'group-hover:scale-[1.1]'}`}
                  onError={(e) =>