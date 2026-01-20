import React from 'react';
import { ExternalLink, MousePointerClick } from 'lucide-react';

interface Brand {
  name: string;
  logo: string;
  url: string;
  desc: string;
  scale?: string; // scale 속성 추가 (있을 수도 있고 없을 수도 있음)
}

const ProductShowcase: React.FC = () => {
  const brands: Brand[] = [
    {
      name: "OMRON",
      logo: "/OMRON.svg",
      url: "https://www.ia.omron.co.kr/",
      desc: "Sensing & Control + Think",
      scale: "scale-[1.8]" // 옴론 크게
    },
    {
      name: "M2I",
      logo: "/m2i.png",
      url: "https://www.m2i.co.kr/",
      desc: "Smart HMI & SCADA",
      scale: "scale-[1.2]" 
    },
    {
      name: "LS ELECTRIC",
      logo: "/ls.png",
      url: "https://www.ls-electric.com/ko/",
      desc: "Futuring Smart Energy"
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
      scale: "scale-[2.2]" // 산일 아주 크게
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
                  // 핵심 수정 부분: 템플릿 리터럴(``)을 사용하여 brand.scale을 적용합니다.
                  className={`h-10 w-auto max-w-[100%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100 transform ${brand.scale || 'scale-100'} group-hover:scale-[1.1]`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-black text-slate-400 group-hover:text-slate-800">${brand.name}</span>`;
                  }}
                />
              </div>

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