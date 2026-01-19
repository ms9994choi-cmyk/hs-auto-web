import React from 'react';

const BrandGrid: React.FC = () => {
  const brands = [
    { 
      name: 'OMRON', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Omron_Logo.svg/2560px-Omron_Logo.svg.png', 
      desc: 'Sensing & Control' 
    },
    { 
      name: 'M2I', 
      logo: 'http://www.m2i.co.kr/eng/img/common/logo.png', 
      desc: 'Smart HMI' 
    },
    { 
      name: 'Innovance', 
      logo: 'https://www.inovance.com/hubfs/raw_assets/public/Innovance_July2021/images/innovance-logo.svg', 
      desc: 'Industrial Automation' 
    },
    { 
      name: 'Weidmüller', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Weidmueller_Logo.svg/2560px-Weidmueller_Logo.svg.png', 
      desc: 'Industrial Connectivity' 
    },
    { 
      name: 'SANIL', 
      logo: 'http://www.sanil.co.kr/images/common/logo.gif', 
      desc: 'Sensor Tech' 
    },
  ];

  return (
    <section id="brands" className="py-20 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Global Partners</span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            세계 최고의 기술력을 보유한<br/> 
            <span className="text-slate-500">파트너사와 함께합니다</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="group w-48 h-28 md:w-60 md:h-36 bg-white rounded-xl border border-slate-200 flex flex-col items-center justify-center p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1"
            >
              <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-slate-400">${brand.name}</span>`;
                  }}
                />
              </div>
              <span className="absolute bottom-4 text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                {brand.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;