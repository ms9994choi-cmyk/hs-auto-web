import React, { useState } from 'react';
import { Wrench, MessageSquare, ExternalLink, AlertCircle, PhoneCall } from 'lucide-react';

const SupportSection: React.FC = () => {
  const [inquiry, setInquiry] = useState({
    name: '',
    contact: '',
    model: '',
    issue: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInquiry({ ...inquiry, [e.target.id]: e.target.value });
  };

  // Brand-specific FAQ Links
  const brandFaqs = [
    { 
      name: "OMRON", 
      url: "https://www.ia.omron.co.kr/support/faq.asp?tb=&free_flag=&page=6&listCnt=10&wSubject=&wContent=&keyword=&present_category_code=",
      logo: "/OMRON.svg",
      borderColor: "hover:border-blue-500",
      bgHover: "hover:bg-blue-50"
    },
    { 
      name: "M2I", 
      url: "https://www.m2i.co.kr/service/faq.php",
      logo: "/m2i.png",
      borderColor: "hover:border-slate-800",
      bgHover: "hover:bg-slate-50"
    },
    { 
      name: "Autonics", 
      url: "https://www.autonics.com/kr/service/faq/list",
      logo: "/autonics.png",
      borderColor: "hover:border-orange-500",
      bgHover: "hover:bg-orange-50"
    },
    { 
      name: "LS ELECTRIC", 
      url: "https://sol.ls-electric.com/us/en/community/blog?utm_source=lseus&utm_medium=display&utm_campaign=lseus_comm",
      logo: "/ls.png",
      borderColor: "hover:border-red-600",
      bgHover: "hover:bg-red-50"
    }
  ];

  return (
    <section id="support" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4">
            Technical Support Center
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            기술 지원 센터
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            장비 세팅 중 어려움이 있으신가요? <br className="hidden md:block" />
            제조사별 공식 FAQ를 확인하시거나, 엔지니어에게 직접 문의를 남겨주세요.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Brand FAQ Links */}
          <div className="lg:w-1/2 flex flex-col">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <Wrench className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">제조사별 기술 FAQ</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8 flex-grow">
                {brandFaqs.map((brand, idx) => (
                  <a 
                    key={idx}
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center justify-center p-6 rounded-xl border border-slate-100 bg-white shadow-sm transition-all duration-300 ${brand.borderColor} ${brand.bgHover} hover:shadow-md hover:-translate-y-1`}
                  >
                    <div className="h-12 w-full flex items-center justify-center mb-4">
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="max-h-full max-w-[80%] object-contain"
                        onError={(e) => {
                           e.currentTarget.style.display = 'none';
                           e.currentTarget.parentElement!.innerText = brand.name;
                        }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 flex items-center gap-1 transition-colors">
                      FAQ 바로가기 <ExternalLink size={10} />
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-auto bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                  <PhoneCall size={20} className="text-blue-600" />
                  <span className="font-bold text-slate-900">해결이 안 되셨나요?</span>
                </div>
                <p className="text-sm text-slate-600 mb-3 ml-8">
                  급한 현장 트러블은 기술영업팀으로 직접 연락 주세요.
                </p>
                <a href="tel:02-717-3460" className="ml-8 text-blue-700 font-bold text-lg hover:underline">
                  02-717-3460
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 1:1 Inquiry Form */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-bl-full -mr-4 -mt-4"></div>
              
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">1:1 기술 문의 작성</h3>
              </div>

              {/* 
                [중요 변경 사항]
                AJAX 대신 표준 <form> 전송 방식을 사용하여 reCAPTCHA 인증을 유도합니다.
              */}
              <form 
                action="https://formsubmit.co/hsautocon@gmail.com" 
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value={`[기술 지원 요청] ${inquiry.name}님`} />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="true" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase mb-1">업체명 / 담당자</label>
                    <input 
                      type="text" 
                      name="name"
                      id="name" 
                      value={inquiry.name}
                      onChange={handleChange}
                      required
                      placeholder="홍길동 과장"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="block text-xs font-bold text-slate-500 uppercase mb-1">연락처</label>
                    <input 
                      type="text" 
                      name="contact"
                      id="contact" 
                      value={inquiry.contact}
                      onChange={handleChange}
                      required
                      placeholder="010-0000-0000"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="model" className="block text-xs font-bold text-slate-500 uppercase mb-1">사용 장비 / 모델명</label>
                  <input 
                    type="text" 
                    name="model"
                    id="model" 
                    value={inquiry.model}
                    onChange={handleChange}
                    required
                    placeholder="예: OMRON CP1E-N40DR-A"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="issue" className="block text-xs font-bold text-slate-500 uppercase mb-1">증상 및 문의 내용</label>
                  <textarea 
                    name="issue"
                    id="issue" 
                    value={inquiry.issue}
                    onChange={handleChange}
                    required
                    placeholder="에러 코드나 발생 증상을 자세히 적어주시면 더 정확한 답변이 가능합니다."
                    className="w-full h-32 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="bg-yellow-50 text-yellow-800 text-xs p-3 rounded-lg flex items-start gap-2">
                  <AlertCircle size={14} className="mt-0.5 shrink-0" />
                  <span>정확한 진단을 위해 현장 사진이나 동영상이 필요할 경우, 담당자가 별도로 요청드릴 수 있습니다.</span>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2"
                >
                  문의 등록하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;