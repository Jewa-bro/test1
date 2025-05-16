import { UserCheck, AlertCircle } from 'lucide-react';

const Membership = () => {
  const handleMembershipApplication = () => {
    window.location.href = 'tel:010-8246-0314';
  };

  const requirements = [
    '만 18세 이상',
    '신분증 지참 필수',
    '기본 안전 교육 이수 필수',
    '건강 상태 자가 진단서 작성'
  ];

  const benefits = [
    '회원 전용 특별 할인',
    '전용 락커 서비스',
    '우선 예약 서비스',
    '특별 이벤트 초대',
    '월간 무료 사격 기회'
  ];

  return (
    <section id="membership" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            회원 <span className="text-yellow-400">신청</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            HB Shooting의 회원이 되어 다양한 혜택을 누려보세요.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <UserCheck className="mr-2 text-yellow-500" />
                회원 요건
              </h3>
              
              <ul className="space-y-3 mb-8">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-yellow-500 mr-2">•</span>
                    {requirement}
                  </li>
                ))}
              </ul>
              
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <AlertCircle className="text-yellow-500 mr-2 shrink-0 mt-1" size={20} />
                  <p className="text-gray-300 text-sm">
                    회원 가입을 위해서는 본인 인증이 필요합니다. 신분증을 지참하셔서 방문해주시거나 온라인으로 본인인증을 진행해주세요.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 bg-gray-800/50">
              <h3 className="text-xl font-bold text-white mb-6">회원 혜택</h3>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-yellow-500 mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={handleMembershipApplication}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-md transition-colors shadow-lg flex items-center justify-center"
              >
                <UserCheck className="mr-2" size={20} />
                회원 신청하기 (전화 상담)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;