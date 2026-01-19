import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
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
          {formState === 'success' ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">문의가 성공적으로 접수되었습니다!</h3>
              <p className="text-slate-600">빠른 시일 내에 전문 상담원이 연락드리겠습니다.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-blue-600 hover:text-blue-500 font-medium underline"
              >
                다른 문의 작성하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">회사명</label>
                  <input 
                    type="text" 
                    id="company" 
                    required
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="(주)에이치에스오토콘"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">담당자 성함</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="홍길동 팀장"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">이메일</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="example@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">연락처</label>
                  <input 
                    type="tel" 
                    id="phone" 
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
                    id="message" 
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
                  disabled={formState === 'submitting'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? (
                    '전송 중...'
                  ) : (
                    <>
                      무료 견적 요청하기 <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;