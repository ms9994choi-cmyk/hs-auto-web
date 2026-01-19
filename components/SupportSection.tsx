import React from 'react';
import { FileText, Download, PenTool } from 'lucide-react';

const SupportSection: React.FC = () => {
  return (
    <section id="support" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-900">
      <div className="container mx-auto px-6">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-16 border border-slate-200 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4 border border-blue-100">
                TECHNICAL SUPPORT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                막힘없는 현장 운영을 위한<br/>
                <span className="text-blue-600">기술 지원 자료실</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                제품 선정부터 설치, 트러블슈팅까지. <br/>
                에이치에스오토콘의 엔지니어가 엄선한 매뉴얼과 기술 자료를 확인하세요.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-lg hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">제품 매뉴얼 다운로드</h4>
                    <p className="text-sm text-slate-500">최신 버전의 국/영문 매뉴얼</p>
                  </div>
                  <Download className="ml-auto text-slate-400 group-hover:text-blue-600" size={20} />
                </div>

                <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-lg hover:border-purple-300 hover:shadow-md transition-all cursor-pointer group">
                  <div className="p-3 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <PenTool size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">소프트웨어 자료실</h4>
                    <p className="text-sm text-slate-500">설정 툴 및 드라이버 다운로드</p>
                  </div>
                  <Download className="ml-auto text-slate-400 group-hover:text-purple-600" size={20} />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
               {/* Abstract visual representation of data/docs */}
               <div className="relative z-10 grid grid-cols-2 gap-4">
                 <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-lg opacity-90 translate-y-8">
                    <div className="w-12 h-2 bg-slate-200 rounded mb-2"></div>
                    <div className="w-20 h-2 bg-slate-300 rounded mb-6"></div>
                    <div className="space-y-2">
                      <div className="w-full h-1 bg-slate-100 rounded"></div>
                      <div className="w-full h-1 bg-slate-100 rounded"></div>
                      <div className="w-2/3 h-1 bg-slate-100 rounded"></div>
                    </div>
                 </div>
                 <div className="bg-blue-600 p-6 rounded-2xl shadow-xl shadow-blue-500/30">
                    <div className="text-5xl font-black text-white/20 mb-2">FA</div>
                    <div className="text-white font-bold text-lg">Solution<br/>Provider</div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 text-slate-900 col-span-2">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold">System Check</span>
                      <span className="text-green-600 font-bold">OK</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
                      <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                    <div className="text-xs text-slate-400 text-right">Optimized</div>
                 </div>
               </div>
               
               {/* Background Glow */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-100 blur-3xl -z-0 rounded-full mix-blend-multiply"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;