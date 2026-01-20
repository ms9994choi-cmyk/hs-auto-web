import React from 'react';
import { ShieldCheck, Zap, Settings, Truck, Headphones, Search } from 'lucide-react';

const CoreStrengths: React.FC = () => {
  const strengths = [
    {
      icon: <ShieldCheck size={40} className="text-blue-500" />,
      title: "100% 정품 보장",
      desc: "제조사와의 공식 파트너십을 통해 검증된 100% 정품만을 공급하며, 확실한 품질 보증 기간을 제공합니다."
    },
    {
      icon: <Zap size={40} className="text-yellow-500" />,
      title: "신속한 납기 시스템",
      desc: "풍부한 재고 보유와 최적화된 물류 시스템으로 고객의 생산 일정에 차질이 없도록 가장 빠르게 납품합니다."
    },
    {
      icon: <Settings size={40} className="text-teal-500" />,
      title: "맞춤형 기술 솔루션",
      desc: "단순 제품 판매를 넘어, 귀사의 설비 환경에 최적화된 엔지니어링 컨설팅과 기술 지원을 제공합니다."
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 skew-x-12 transform translate-x-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            왜 <span className="text-blue-600">에이치에스오토콘</span>인가요?
          </h2>
          <p className="text-slate-600 text-lg">
            수천 건의 현장 납품 실적으로 증명된 전문성.<br/>
            고객의 성공적인 비즈니스를 위한 3가지 핵심 약속을 드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
          <div className="text-center border-r border-slate-100 last:border-0">
            <div className="text-4xl font-black text-slate-900 mb-1">20+</div>
            <div className="text-sm text-slate-500">년 업력</div>
          </div>
          <div className="text-center border-r border-slate-100 last:border-0">
            <div className="text-4xl font-black text-slate-900 mb-1">500+</div>
            <div className="text-sm text-slate-500">거래처</div>
          </div>
          <div className="text-center border-r border-slate-100 last:border-0">
            <div className="text-4xl font-black text-slate-900 mb-1">10k+</div>
            <div className="text-sm text-slate-500">취급 품목</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-slate-900 mb-1">24h</div>
            <div className="text-sm text-slate-500">기술 지원</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreStrengths;