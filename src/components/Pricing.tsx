import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: '기본 체험',
      price: '35,000',
      period: '1회',
      features: [
        '안전 교육',
        '기본 총기 1종 체험',
        '10발 사격',
        '전문 강사 지도'
      ],
      highlight: false
    },
    {
      name: '프리미엄 체험',
      price: '65,000',
      period: '1회',
      features: [
        '안전 교육',
        '고급 총기 2종 체험',
        '20발 사격',
        '전문 강사 지도',
        '사격 기념 사진'
      ],
      highlight: true
    },
    {
      name: '회원권',
      price: '250,000',
      period: '월',
      features: [
        '무제한 방문',
        '모든 총기 이용 가능',
        '월 50발 무료',
        '추가 발사 할인',
        '전용 락커',
        'VIP 이벤트 초대'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            이용 <span className="text-yellow-400">요금</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            다양한 옵션으로 사격 경험을 즐겨보세요. 초보자부터 전문가까지 모두를 위한 맞춤형 프로그램을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-gray-700 to-gray-900 border-2 border-yellow-500 shadow-xl' 
                  : 'bg-gray-700'
              }`}
            >
              {plan.highlight && (
                <div className="bg-yellow-500 py-1 text-center">
                  <span className="text-gray-900 font-medium text-sm">인기 상품</span>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}원</span>
                  <span className="text-gray-400 ml-1">/ {plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-yellow-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-2 rounded-md transition-colors font-medium ${
                  plan.highlight 
                    ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900' 
                    : 'bg-gray-600 hover:bg-gray-500 text-white'
                }`}>
                  예약하기
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-700 rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">추가 옵션</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 border-b border-gray-600">
              <span className="text-gray-200">추가 발사 (1발)</span>
              <span className="text-white font-medium">2,000원</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-gray-600">
              <span className="text-gray-200">안전 장비 대여</span>
              <span className="text-white font-medium">5,000원</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-gray-600">
              <span className="text-gray-200">사진 촬영 서비스</span>
              <span className="text-white font-medium">10,000원</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-gray-600">
              <span className="text-gray-200">프라이빗 레슨 (1시간)</span>
              <span className="text-white font-medium">100,000원</span>
            </div>
          </div>
          <p className="mt-4 text-gray-400 text-sm">* 가격은 변동될 수 있으며, 공휴일 및 주말에는 추가 요금이 발생할 수 있습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;