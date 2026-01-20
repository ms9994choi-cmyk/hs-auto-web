import React from 'react';
import { ExternalLink, MousePointerClick } from 'lucide-react';

interface Brand {
  name: string;
  logo: string;
  url: string;
  desc: string; // Brief description for accessibility/hover
}

const ProductShowcase: React.FC = () => {
  const brands: Brand[] = [
    {
      name: "OMRON",
      // Changed to stable PNG thumbnail URL
      logo: "/omron.png",
      url: "https://www.ia.omron.co.kr/",
      desc: "Sensing & Control + Think"
      scale: "scale-[1.8]" // 작게 나오는 옴론은 1.8배 확대
    },
    {
      name: "M2I",
      logo: "/m2i.png",
      url: "https://www.m2i.co.kr/",
      desc: "Smart HMI & SCADA"
      scale: "scale-[1.2]" // 작게 나오는 옴론은 1.8배 확대
    },
    {
      name: "LS ELECTRIC",
      logo: "/ls.png",
      url: "https://www.ls-electric.com/ko/",
      desc: "Futuring Smart Energy"
    },
    {
      name: "Weidmüller",
      logo: "/weidmuller.png",
      url: "https://www.weidmuller.co.kr/ko/index.jsp",
      desc: "Industrial Connectivity"
    },
    {
      name: "SANIL",
      // Using the official logo from SANIL website
      logo: "/sanil.svg",
      url: "https://sanilsensor.com/",
      desc: "Sensor & Transformers"
      scale: "scale-[2.2]" // 산일은 더 작다면 2.2배 확대
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
              {/* External Link Icon Overlay */}
              <div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-500 transition-colors">
                <ExternalLink size={18} />
              </div>

{/* Logo Container */}
<div className="w-full h-24 flex items-center justify-center relative z-10 px-6">
  <img 
    src={brand.logo} 
    alt={brand.name} 
    className="h-10 w-auto max-w-[200%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 transform group-hover:scale-110"
    // 설명: 
    // h-10: 모든 로고의 높이를 약 40px로 고정합니다. (가장 효과적인 줄 맞춤)
    // w-auto: 높이에 맞춰 가로 비율을 자동으로 유지합니다.
    // max-w-[80%]: 가로로 너무 긴 로고가 박스를 넘어가지 않게 제한합니다.
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-black text-slate-400 group-hover:text-slate-800">${brand.name}</span>`;
    }}
  />
</div>

              {/* Hover Text/Indicator */}
              <div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold text-blue-600 flex items-center justify-center gap-1">
                  Visit Website <MousePointerClick size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;