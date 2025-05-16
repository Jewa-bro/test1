import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">HB Shooting</h3>
            <p className="mb-4">
              최고의 시설과 전문 강사진이 함께하는 프리미엄 실내 사격장입니다.
              안전하고 즐거운 사격 경험을 제공합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-yellow-500 shrink-0" />
                <span>02-123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-yellow-500 shrink-0" />
                <span>info@hbshooting.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-yellow-500 shrink-0" />
                <span>서울특별시 강남구 테헤란로 123 HB빌딩 지하 1층</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-1 text-yellow-500 shrink-0" />
                <div>
                  <p>평일: 10:00 - 22:00</p>
                  <p>주말 및 공휴일: 09:00 - 23:00</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">찾아오시는 길</h3>
            <div className="bg-gray-800 rounded-lg overflow-hidden h-48 mb-3">
              {/* This would be replaced with an actual map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-700">
                <MapPin size={32} className="text-yellow-500" />
                <span className="ml-2">지도가 표시됩니다</span>
              </div>
            </div>
            <p className="text-sm">
              2호선 강남역 4번 출구에서 도보 5분 거리에 위치해 있습니다.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} HB Shooting. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-gray-300 transition-colors">개인정보처리방침</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">이용약관</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;