/* ========================================
   🎯 Header.tsx - 프로필 헤더
   ========================================
   
   ✏️ 여기서 수정할 것:
   1. 프로필 이모지
   2. 이름
   3. 학교/학년
   4. 한 줄 소개
   
   ======================================== */

import { useNavigate } from "react-router-dom";

function Header() {
  // navigate: 버튼 클릭하면 페이지 이동!
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* 프로필 영역 */}
        <div className="flex items-center gap-6">
          
          {/* ✏️ 수정 1: 프로필 이모지를 바꿔보세요! */}
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl shadow-lg">
            👩🏻‍💻
          </div>
          
          <div className="flex-1">
            {/* ✏️ 수정 2: 이름을 바꿔보세요! */}
            <h1 className="text-3xl font-bold mb-2">김태성</h1>
            
            {/* ✏️ 수정 3, 4: 나이, 성별을 바꿔보세요! */}
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                🎂 16살
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                👩 남자
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
