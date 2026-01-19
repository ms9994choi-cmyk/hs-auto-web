import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      category: "SENSOR / PLC / Controller",
      brand: "OMRON, LS",
      desc: "고속 처리 성능과 안정성을 갖춘 차세대 프로그래머블 로직 컨트롤러.",
      // Server/Controller room with blue lighting
      image: "https://images.unsplash.com/photo-1563770095-25f6f3226123?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "HMI / Touch Panel",
      brand: "M2I",
      desc: "직관적인 인터페이스와 강력한 모니터링 기능을 제공하는 스마트 터치 패널.",
      // Data dashboard visualization
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Inverter / Servo",
      brand: "Innovance",
      desc: "정밀한 모터 제어와 에너지 효율을 극대화하는 고성능 드라이브 솔루션.",
      // Industrial robot arm/machinery
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80"
    },
    {
      category: "Sensor / Safety",
      brand: "OMRON, Sick, SANIL",
      desc: "현장의 안전과 정확한 감지를 위한 각종 산업용 센서 및 안전 차단 장치.",
      // Abstract tech/sensor macro with blue light
      image: "https://images.unsplash.com/photo-1555664424-778a18a93c87?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Products</span>
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              제조 현장의 혁신을 위한<br/>
              <span className="text-slate-500">최적의 라인업</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.category} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                {/* Enhanced gradient overlay for futuristic blue vibe */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-blue-900/20 to-transparent mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="text-blue-300 text-xs font-bold uppercase mb-2 tracking-wide">{product.brand}</div>
                <h3 className="text-xl font-bold text-white mb-2">{product.category}</h3>
                <p className="text-slate-200 text-sm line-clamp-2 mb-4 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                  {product.desc}
                </p>
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;