/* ========================================
   🎯 TabBar.tsx - 탭 바 (메뉴)
   ========================================
   
   ✏️ 여기서 수정할 것:
   1. 탭 이모지
   2. 탭 이름
   
   💡 Link 사용법:
   <Link to="/주소">탭 이름</Link>
   
   ======================================== */

import { Link, useLocation } from "react-router-dom";

function TabBar() {
  // 현재 어느 페이지에 있는지 확인 (선택된 탭 표시용)
  const location = useLocation();

  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex">
          
          {/* ✏️ 수정 1: 첫 번째 탭 - 이모지와 이름을 바꿔보세요! */}
          <Link
            to="/about"
            className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${
              location.pathname === "/about"
                ? "text-blue-600 border-b-4 border-blue-600 bg-blue-50"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            👤 소개
          </Link>

          {/* ✏️ 수정 2: 두 번째 탭 - 이모지와 이름을 바꿔보세요! */}
          <Link
            to="/activity"
            className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${
              location.pathname === "/activity"
                ? "text-blue-600 border-b-4 border-blue-600 bg-blue-50"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            🎨 취향
          </Link>

          {/* ✏️ 수정 3: 세 번째 탭 - 이모지와 이름을 바꿔보세요! */}
          <Link
            to="/contact"
            className={`flex-1 py-4 text-center font-bold text-lg transition-colors ${
              location.pathname === "/contact"
                ? "text-blue-600 border-b-4 border-blue-600 bg-blue-50"
                : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
            }`}
          >
            📞 연락
          </Link>

        </div>
      </div>
    </div>
  );
}

export default TabBar;
