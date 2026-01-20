import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  // 표준 폼 전송 방식은 별도의 상태 관리가 필요 없지만, 입력값 핸들링을 위해 유지합니다.
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">견적 및 기술 상담 문의</h2>
          <p className="text-slate-600">
            프로젝트에 필요한 부품이나 기술적 고민이 있으신가요?<br/>
            아래 양식을 작성해 주시면 담당 엔지니어가 24시간 이내에 연락드리겠습니다.
          </p>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl">
          {/* 
            [중요 변경 사항]
            AJAX(fetch) 대신 표준 <form action="..."> 방식을 사용합니다.
            이 방식은 전송 시 '로봇이 아닙니다' 인증 페이지로 이동하며, 이를 통해 확실하게 메일을 발송할 수 있습니다.
          */}
          <form 
            action="https://formsubmit.co/hsautocon@gmail.com" 
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* FormSubmit 설정 필드 */}
            <input type="hidden" name="_subject" value={`[웹사이트 견적 문의] ${formData.company} - ${formData.name}님`} />
            <input type="hidden" name="_template" value="table" />
            {/* _captcha를 true로 두거나 생략하여 스팸 방지 인증을 활성화합니다. */}
            <input type="hidden" name="_captcha" value="true" />
            {/* 전송 후 다시 돌아올 주소가 있다면 설정 가능 (없으면 기본 감사 페이지 노출) */}
            {/* <input type="hidden" name="_next" value="http://your-website.com/#contact" /> */}

            <div className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">회사명</label>
                <input 
                  type="text" 
                  name="company"
                  id="company" 
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="(주)에이치에스오토콘"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">담당자 성함</label>
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="홍길동 팀장"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">이메일</label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="example@company.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">연락처</label>
                <input 
                  type="tel" 
                  name="phone"
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="010-1234-5678"
                />
              </div>
            </div>

            <div className="space-y-6 flex flex-col h-full">
              <div className="flex-grow flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">문의 내용</label>
                <textarea 
                  name="message"
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full flex-grow bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none h-40 md:h-auto"
                  placeholder="찾으시는 모델명이나 프로젝트 내용을 간략히 적어주세요."
                ></textarea>
              </div>
              
              <div className="flex items-start gap-3 text-sm text-slate-600 bg-slate-100 p-4 rounded-lg">
                <input type="checkbox" id="privacy" required className="mt-1 rounded border-slate-300 bg-white text-blue-600 focus:ring-offset-slate-50" />
                <label htmlFor="privacy">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                견적 요청 보내기 <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;