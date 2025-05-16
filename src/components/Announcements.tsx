import { useState } from 'react';
import { ChevronDown, ChevronUp, Bell } from 'lucide-react';

const Announcements = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const announcements = [
    {
      id: 1,
      date: '2025.02.15',
      title: '신규 총기 입고 안내',
      content: '새로운 모델의 총기가 입고되었습니다. 회원 여러분의 많은 관심 부탁드립니다. 기존 회원은 3월 말까지 무료 체험이 가능합니다. 자세한 내용은 데스크에 문의해주세요.',
      isImportant: true
    },
    {
      id: 2,
      date: '2025.02.01',
      title: '운영시간 변경 안내',
      content: '2025년 3월부터 운영시간이 변경됩니다. 평일: 10:00 - 22:00, 주말 및 공휴일: 09:00 - 23:00로 운영됩니다. 회원 여러분의 양해 부탁드립니다.',
      isImportant: true
    },
    {
      id: 3,
      date: '2025.01.20',
      title: '설 연휴 휴무 안내',
      content: '설 연휴 기간(2025.02.09 ~ 2025.02.12) 동안 휴무입니다. 2025.02.13부터 정상 운영합니다. 좋은 설 연휴 보내시기 바랍니다.',
      isImportant: false
    },
    {
      id: 4,
      date: '2025.01.10',
      title: '초보자 특별 강좌 개설',
      content: '사격을 처음 접하시는 분들을 위한 특별 강좌를 개설합니다. 매주 토요일 오전 10시부터 12시까지 진행되며, 기본적인 안전 교육부터 사격 기초 기술까지 체계적으로 배울 수 있습니다. 인원 제한이 있으니 빠른 예약 부탁드립니다.',
      isImportant: false
    },
    {
      id: 5,
      date: '2024.12.25',
      title: '연말 이벤트 안내',
      content: '연말을 맞아 특별 이벤트를 진행합니다. 12월 25일부터 1월 5일까지 모든 체험 상품 20% 할인됩니다. 또한 회원 가입 시 첫 달 50% 할인 혜택을 드립니다.',
      isImportant: false
    }
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="announcements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            공지 <span className="text-yellow-400">사항</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            HB Shooting의 최신 소식과 이벤트 정보를 확인하세요.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {announcements.map((announcement, index) => (
            <div 
              key={announcement.id}
              className={`mb-4 rounded-lg overflow-hidden border ${
                announcement.isImportant 
                  ? 'border-yellow-500 bg-gray-800/70' 
                  : 'border-gray-700 bg-gray-800/30'
              }`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-start">
                  {announcement.isImportant && (
                    <Bell size={18} className="text-yellow-500 mr-2 mt-1 shrink-0" />
                  )}
                  <div>
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm mr-3">{announcement.date}</span>
                      <h3 className={`font-medium ${announcement.isImportant ? 'text-yellow-400' : 'text-white'}`}>
                        {announcement.title}
                      </h3>
                    </div>
                  </div>
                </div>
                {expandedIndex === index ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
              </button>
              
              <div 
                className={`px-6 pb-4 text-gray-300 transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <p>{announcement.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;